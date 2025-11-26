export default function ThreeDPrintingServicePage({ params }: { params: { slug: string } }) {
  return (
    <div className="custom-container py-12">
      <h1 className="text-4xl font-bold mb-4">3D-друк: {params.slug}</h1>
      <p className="text-base-content/80">Сторінка в розробці</p>
    </div>
  );
}