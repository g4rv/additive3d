export default function BgBlobs() {
  return (
    <div className="absolute inset-0 opacity-30">
      <div className="bg-primary animate-blob absolute top-0 -left-4 h-72 w-72 rounded-full mix-blend-multiply blur-xl filter" />
      <div className="bg-primary/60 animate-blob animation-delay-2000 absolute top-0 -right-4 h-72 w-72 rounded-full mix-blend-multiply blur-xl filter" />
      <div className="bg-primary/40 animate-blob animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 rounded-full mix-blend-multiply blur-xl filter" />
    </div>
  );
}
