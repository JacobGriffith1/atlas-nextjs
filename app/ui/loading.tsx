function Skeleton({ className = "" }: { className?: string }) {
  // Reusable skeleton block; animation hints ongoing loading.
  return <div className={`animate-pulse rounded-md bg-gray-200 ${className}`} />;
}

export default function UiLoading() {
  return (
    <div className="space-y-6">
      <Skeleton className="h-8 w-64" />
      <div className="space-y-3">
        <Skeleton className="h-5 w-80" />
        <Skeleton className="h-5 w-2/3" />
        <Skeleton className="h-5 w-1/2" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Skeleton className="h-32" />
        <Skeleton className="h-32" />
      </div>
    </div>
  );
}