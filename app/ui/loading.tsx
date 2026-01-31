// app/ui/loading.tsx
export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-1/3 rounded-md bg-gray-200" />
      <div className="h-24 rounded-md bg-gray-200" />
      <div className="space-y-3">
        <div className="h-14 rounded-md bg-gray-200" />
        <div className="h-14 rounded-md bg-gray-200" />
        <div className="h-14 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}
