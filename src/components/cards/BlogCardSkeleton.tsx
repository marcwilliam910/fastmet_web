export default function BlogCardSkeleton() {
  return (
    <div className="flex flex-col bg-white rounded-2xl border border-gray-100 p-6 animate-pulse">
      <div className="h-4 w-20 bg-gray-100 rounded-full mb-4" />
      <div className="h-4 w-full bg-gray-100 rounded mb-2" />
      <div className="h-4 w-3/4 bg-gray-100 rounded mb-4" />
      <div className="h-3 w-full bg-gray-50 rounded mb-1" />
      <div className="h-3 w-2/3 bg-gray-50 rounded" />
      <div className="flex justify-between mt-5 pt-4 border-t border-gray-50">
        <div className="h-3 w-24 bg-gray-100 rounded" />
        <div className="h-3 w-8 bg-gray-100 rounded" />
      </div>
    </div>
  );
}
