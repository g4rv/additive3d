import JSZip from 'jszip';

export interface FileToDownload {
  url: string;
  name: string;
}

/**
 * Downloads multiple files and packages them into a ZIP file
 * @param files Array of files to download (url and name)
 * @param zipFileName Name for the generated ZIP file
 */
export async function downloadFilesAsZip(files: FileToDownload[], zipFileName: string) {
  try {
    const zip = new JSZip();

    // Fetch all files in parallel through proxy to avoid CORS issues
    const filePromises = files.map(async (file) => {
      try {
        // Use proxy API to avoid CORS issues with R2
        const proxyUrl = `/api/download-file?url=${encodeURIComponent(file.url)}`;
        const response = await fetch(proxyUrl);
        if (!response.ok) {
          console.error(`Failed to fetch ${file.name}:`, response.statusText);
          return null;
        }
        const blob = await response.blob();
        return { name: file.name, blob };
      } catch (error) {
        console.error(`Error fetching ${file.name}:`, error);
        return null;
      }
    });

    const filesData = await Promise.all(filePromises);

    // Filter out failed downloads and add successful ones to ZIP
    let successCount = 0;
    filesData.forEach((fileData) => {
      if (fileData) {
        zip.file(fileData.name, fileData.blob);
        successCount++;
      }
    });

    if (successCount === 0) {
      throw new Error('All file downloads failed');
    }

    // Generate ZIP and trigger download
    const zipBlob = await zip.generateAsync({ type: 'blob' });
    const url = URL.createObjectURL(zipBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = zipFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    return { success: true, downloadedCount: successCount, totalCount: files.length };
  } catch (error) {
    console.error('Error creating ZIP:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

/**
 * Triggers download of a single file from a URL
 * Uses proxy to avoid CORS issues with R2
 * @param url File URL
 * @param fileName Optional filename override
 */
export function downloadFile(url: string, fileName?: string) {
  // Use proxy API to avoid CORS issues
  const proxyUrl = `/api/download-file?url=${encodeURIComponent(url)}${fileName ? `&filename=${encodeURIComponent(fileName)}` : ''}`;
  const link = document.createElement('a');
  link.href = proxyUrl;
  link.target = '_blank';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
