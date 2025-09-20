import { useNavigate } from "react-router-dom";
import CartTile from "../../component/CartTile";
import { useAuth } from "../../hooks/useAuth";

function Cart() {
  const navigate = useNavigate();
  const { cartItems } = useAuth();
  return (
    <>
      <div className="flex flex-col md:flex-row gap-3 justify-around h-auto p-2 sm:p-4 md:p-8">
        <div className="p-2 md:p-4 w-auto md:w-2xl shadow-md bg-white rounded-lg">
          <div className="mb-4">
            <h1 className="text-2xl md:text-3xl font-mono text-gray-900 mb-2">
              Your Cart
            </h1>
          </div>
          <div className="mb-4">
            {cartItems.length > 0 ? (
              cartItems.map((singleCartItem) => (
                <CartTile
                  singleCartItem={singleCartItem}
                  key={singleCartItem?._id}
                />
              ))
            ) : (
              <p>No Items are added in cart.</p>
            )}
          </div>
        </div>
        <div className="h-fit w-auto md:w-3/8 p-4 bg-gray-100 rounded-lg shadow-md flex flex-col items-center">
          <div>
            <h1 className="text-3xl font-mono text-gray-900 mb-2">
              Order summary
            </h1>
            <hr />
          </div>
          <div>
            <p className="w-full text-lg font-bold text-gray-900 mt-4">
              Total Price: $
              {cartItems.length > 0
                ? cartItems
                    .reduce((acc, item) => acc + item?.newPrice, 0)
                    .toFixed(2)
                : 0}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <button
              type="button"
              onClick={() => navigate("/checkout")}
              className="max-w-full px-4 mt-5 py-2 bg-black text-white font-bold text-lg cursor-pointer rounded-md"
            >
              Checkout
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className="max-w-full px-4  mt-5 py-2 bg-black text-white font-bold text-lg cursor-pointer rounded-md"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
