function SkeletonField({ height = "h-10", width = "w-full", className = "" }) {
  return (
    <div
      className={`bg-gray-200 animate-pulse rounded ${height} ${width} ${className}`}
    />
  );
}

export default SkeletonField;
