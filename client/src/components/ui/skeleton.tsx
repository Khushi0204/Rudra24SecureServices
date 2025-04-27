import { cn } from "@/lib/utils";

export function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-slate-200", className)}
      {...props}
    />
  );
}

export function ServiceCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
      <div className="flex items-center justify-start mb-4">
        <Skeleton className="h-14 w-14 rounded-full bg-blue-100" />
      </div>
      <Skeleton className="h-7 w-3/4 mb-3 bg-blue-50" />
      <Skeleton className="h-4 w-full mb-2 bg-slate-100" />
      <Skeleton className="h-4 w-5/6 mb-4 bg-slate-100" />
      <div className="flex flex-wrap gap-2">
        <Skeleton className="h-6 w-20 rounded-full bg-blue-50" />
        <Skeleton className="h-6 w-24 rounded-full bg-blue-50" />
        <Skeleton className="h-6 w-16 rounded-full bg-blue-50" />
      </div>
    </div>
  );
}

export function ServiceGridSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
      {Array(8).fill(0).map((_, index) => (
        <ServiceCardSkeleton key={index} />
      ))}
    </div>
  );
}

export function ProfileSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-24 w-24 rounded-full" />
      <Skeleton className="h-6 w-32" />
      <Skeleton className="h-4 w-48" />
    </div>
  );
}

export function GallerySkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array(6).fill(0).map((_, i) => (
        <Skeleton key={i} className="h-64 w-full rounded-lg" />
      ))}
    </div>
  );
}

export function TextSkeleton() {
  return (
    <div className="flex flex-col space-y-2 max-w-2xl">
      <Skeleton className="h-6 w-full" />
      <Skeleton className="h-6 w-[90%]" />
      <Skeleton className="h-6 w-[95%]" />
      <Skeleton className="h-6 w-[60%]" />
    </div>
  );
}

export function HeaderSkeleton() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-12 w-[70%] max-w-sm" />
      <Skeleton className="h-4 w-[90%] max-w-md" />
    </div>
  );
}

export function TableSkeleton({ rows = 5 }: { rows?: number }) {
  return (
    <div className="w-full border rounded-lg overflow-hidden">
      <div className="bg-slate-100 p-4">
        <Skeleton className="h-8 w-[50%]" />
      </div>
      <div className="divide-y">
        {Array(rows).fill(0).map((_, i) => (
          <div key={i} className="p-4 flex justify-between items-center">
            <div className="space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-24" />
            </div>
            <Skeleton className="h-10 w-20 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  );
}