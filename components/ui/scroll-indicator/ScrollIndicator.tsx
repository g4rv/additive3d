export default function ScrollIndicator() {
  return (
    <div className="border-base-content/30 absolute inset-x-0 bottom-4 mx-auto flex h-10 w-6 justify-center rounded-full border-2">
      <div className="bg-primary/60 mt-2 h-3 w-1 animate-bounce rounded-full" />
    </div>
  );
}
