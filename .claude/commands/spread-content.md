# Spread Content

Intelligently distribute content from `context/content/new-content.md` into appropriate topic files.

1. **Scan Existing Files**: First, examine all existing .md files in `context/content/` to understand current topic structure and content themes

2. **Analyze New Content**: Read `context/content/new-content.md` and identify content themes, using knowledge of existing files to categorize content appropriately

3. **Smart Distribution**: For each content group from `new-content.md`:
   - If content matches existing topic: Append to the corresponding existing file
   - If content is for new topic: Create a new .md file with descriptive name
   - If content spans multiple topics: Split accordingly or create cross-references

4. **Move Content**: Copy content from `new-content.md` to appropriate files (existing or new), maintaining proper formatting and structure

5. **Clean Source**: Clear `new-content.md` after successful content distribution

6. **Report**: Provide summary of files updated/created and content distribution

Requirements:
- Prioritize existing files and topics when categorizing
- Maintain original markdown formatting
- Use existing file names when topics match
- Create logical, meaningful file names for new topics
- Ensure no content is lost during the process
- Group related content together intelligently
- Keep source file but empty it after content distribution