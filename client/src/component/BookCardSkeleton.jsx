const ShimmerBlock = ({ className }) => (
  <div
    className={`bg-gray-300 rounded ${className} animate-shimmer`}
    style={{
      backgroundImage:
        "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
      backgroundSize: "1000px 100%",
    }}
  />
);

const BookCardSkeleton = () => (
  <div className="p-3 min-h-[300px] bg-white rounded-md shadow-sm">
    <div className="flex items-center">
      <div className="w-1/3">
        <ShimmerBlock className="h-40 w-full" />
      </div>
      <div className="w-2/3 h-full sm:h-72 p-3 flex flex-col gap-2">
        <ShimmerBlock className="h-6 w-3/4" />
        <ShimmerBlock className="h-4 w-1/2" />
        <ShimmerBlock className="h-4 w-full" />
        <div className="flex justify-between items-center mt-4">
          <ShimmerBlock className="h-4 w-1/4" />
          <ShimmerBlock className="h-4 w-1/4" />
        </div>
        <ShimmerBlock className="h-10 w-full mt-auto" />
      </div>
    </div>
  </div>
);
export default BookCardSkeleton;
