import axios from "axios";

export const callCreateAOrder = async (newOrder) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/order/`,
      newOrder,
      { withCredentials: true }
    );
    const orders = response.data.savedOrder;
    return orders;
  } catch (error) {
    console.error("Error fetching orders:", error);
    return null;
  }
};

export const callGetOrderByEmail = async (email) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/order/email/${email}`
    );
    const orders = response.data;
    return orders;
  } catch (error) {
    console.error("Error fetching orders by email:", error);
    return null;
  }
};
