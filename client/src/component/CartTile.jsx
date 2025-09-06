import { getImgUrl } from "../utils/getImage";
import { useAuth } from "../hooks/useAuth";

function CartTile({ singleCartItem }) {
  const { handleRemoveFromCart } = useAuth();
  return (
    <div className="rounded-2xl shadow-md flex justify-between py-1">
      <div className="flex gap-4 items-center">
        <div className="w-20 h-27.5 max-sm:w-20 shrink-0 m-2">
          <img
            src={getImgUrl(singleCartItem?.coverImage)}
            className="w-full h-full object-contain"
          />
        </div>
        <div className="py-3">
          <p className="text-2xl">{singleCartItem?.title}</p>
          <p className="text-lg">{singleCartItem?.category}</p>
          <button
            onClick={() => {
              handleRemoveFromCart(singleCartItem);
            }}
            className="max-w-full px-5 mt-4 py-2 rounded-b-none bg-black text-white font-bold text-lg cursor-pointer"
          >
            Remove
          </button>
        </div>
      </div>

      <div className="px-4 py-8 text-xl font-normal">
        <p className="">
          Quantity : <span className="font-semibold">1</span>
        </p>
        <p className="">
          Price : ${" "}
          <span className="font-bold">{singleCartItem?.newPrice}</span>
        </p>
      </div>
    </div>
  );
}

export default CartTile;
