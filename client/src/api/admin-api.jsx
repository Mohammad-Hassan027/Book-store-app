import axios from "axios";
import { getAuthHeaders } from "../utils/getAuthHeaders";

export const callAdminLogin = async (username, password) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/auth/admin`,
      { username, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const token = response.data?.token;
    if (token) {
      localStorage.setItem("token", token);
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    }

    return response.data;
  } catch (error) {
    // bubble up a useful message
    throw error.response?.data || { message: error.message || "Login failed" };
  }
};

export const callGetStats = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/stats`,
      {
        headers: getAuthHeaders(),
      }
    );
    return response.data;
  } catch (error) {
    throw (
      error.response?.data || {
        message: error.message || "Failed to fetch stats",
      }
    );
  }
};
