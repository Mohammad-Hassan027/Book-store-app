import { useEffect, useState } from "react";
import { callGetOrderByEmail } from "../../api/order-api";
import { useAuth } from "../../hooks/useAuth";

function Order() {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentUser?.email) {
      callGetOrderByEmail(currentUser.email).then((data) => {
        setOrders(data);
        setLoading(false);
      });
    }
  }, [currentUser?.email]);

  if (loading) return <div className="text-center py-10">Loading orders...</div>;

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Your Orders</h2>

      {orders.length === 0 ? (
        <div className="text-center text-3xl font-semibold text-gray-500">
          No orders found!
        </div>
      ) : (
        <div className="space-y-6">
          {orders.map((order, index) => (
            <div key={order._id} className="p-6 bg-white shadow-lg rounded-xl">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-secondary text-2xl font-bold rounded">
                  # {index + 1}
                </span>
              </div>

              <h3 className="text-lg font-semibold mb-2">
                Order ID: {order._id}
              </h3>

              <div className="space-y-1 text-gray-700">
                <p>
                  <strong>Name:</strong> {order.name}
                </p>
                <p>
                  <strong>Email:</strong> {order.email}
                </p>
                <p>
                  <strong>Phone:</strong> {order.phone}
                </p>
                <p>
                  <strong>Total Price:</strong> ${order.totalPrice}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Address:</h4>
                <p className="text-gray-700">
                  {order.address?.city}, {order.address?.state},{" "}
                  {order.address?.country}, {order.address?.zipcode}
                </p>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Product IDs:</h4>
                <ul className="list-disc list-inside text-gray-700">
                  {order.productIds?.map((productId) => (
                    <li key={productId}>{productId}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Order;
