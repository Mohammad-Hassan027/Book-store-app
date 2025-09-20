import { getImgUrl } from "../utils/getImage";
import { useAuth } from "../hooks/useAuth";

function CartTile({ singleCartItem }) {
  const { handleRemoveFromCart } = useAuth();
  return (
    <div className="rounded-2xl shadow-md flex flex-col sm:flex-row items-center sm:justify-between py-2 sm:py-4 my-2">
      {/* Product Image and Details */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center">
        {/* Image Container */}
        <div className="w-20 h-20 sm:w-28 sm:h-28 shrink-0 m-2">
          <img
            src={getImgUrl(singleCartItem?.coverImage)}
            className="w-full h-full object-contain"
            alt={singleCartItem?.title}
            loading="lazy"
          />
        </div>
        {/* Text Details */}
        <div className="text-center sm:text-left">
          <p className="text-xl sm:text-2xl font-bold">
            {singleCartItem?.title}
          </p>
          <p className="text-sm sm:text-lg text-gray-600">
            {singleCartItem?.category}
          </p>
        </div>
      </div>

      {/* Price and Remove Button */}
      <div className="flex flex-col items-center sm:items-end px-4 py-2 sm:py-4">
        <p className="text-lg sm:text-xl font-normal">
          Price: $ <span className="font-bold">{singleCartItem?.newPrice}</span>
        </p>
        <button
          onClick={() => {
            handleRemoveFromCart(singleCartItem);
          }}
          className="mt-2 sm:mt-4 px-4 py-1 rounded-lg bg-red-500 text-white font-bold text-sm sm:text-base cursor-pointer hover:bg-red-600 transition-colors"
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default CartTile;
