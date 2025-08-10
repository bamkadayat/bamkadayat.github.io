export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#16222e] z-50">
      <div className="flex flex-col items-center gap-4">
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 bg-[#FFA324] rounded-full animate-ping opacity-75"></div>
          <div className="absolute inset-0 bg-[#FFA324] rounded-full animate-pulse"></div>
        </div>
        <p className="text-white text-lg font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
}