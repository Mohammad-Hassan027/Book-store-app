import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { callGetOrderByEmail } from "../../api/order-api";

const OrderItem = ({ order }) => (
  <li className="bg-gray-50 p-4 rounded-lg shadow-sm space-y-1">
    <p className="font-medium">Order ID: {order._id}</p>
    <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
    <p>Total: ${order.totalPrice}</p>
    <div className="ml-1 space-y-1">
      {order.productIds.map((productId) => (
        <p key={productId}>{productId}</p>
      ))}
    </div>
  </li>
);

const UserDashboard = () => {
  const { currentUser } = useAuth();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!currentUser?.email) return;

    const fetchOrders = async () => {
      try {
        const data = await callGetOrderByEmail(currentUser.email);
        setOrders(data ?? []);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentUser?.email]);

  if (loading)
    return <div className="text-center py-10">Loading orders...</div>;
  if (error)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading orders.
      </div>
    );

  return (
    <div className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">User Dashboard</h1>
        <p className="text-gray-700 mb-6">
          Welcome, {currentUser?.username ?? "User"}! Here are your recent
          orders:
        </p>

        <section className="mt-6">
          <h2 className="text-xl font-semibold mb-4">Your Orders</h2>
          {orders.length > 0 ? (
            <ul className="space-y-4">
              {orders.map((order) => (
                <OrderItem key={order._id} order={order} />
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">You have no recent orders.</p>
          )}
        </section>
      </div>
    </div>
  );
};

export default UserDashboard;
