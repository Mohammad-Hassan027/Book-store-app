import axios from "axios";
import { getAuthHeaders } from "../utils/getAuthHeaders";

export const callGetAllBooks = async () => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/books/getAll`
    );
    const books = response.data.data;
    return books;
  } catch (error) {
    console.error("Error fetching all books:", error);
    return null;
  }
};

export const callGetBookById = async (id) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/books/get/${id}`
    );
    const book = response.data.data;
    return book;
  } catch (error) {
    console.error("Error fetching all books:", error);
    return null;
  }
};

export const callAddBook = async (newBookData) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/api/books/add`,
      newBookData,
      {
        headers: getAuthHeaders(),
      }
    );
    const book = response.data.data;
    return book;
  } catch (error) {
    console.error("Error fetching all books:", error);
    return null;
  }
};

export const callUpdateBook = async (id, updatedBookData) => {
  try {
    const response = await axios.put(
      `${import.meta.env.VITE_BACKEND_URL}/api/books/update/${id}`,
      updatedBookData,
      {
        headers: getAuthHeaders(),
      }
    );
    const book = response.data.data;
    return book;
  } catch (error) {
    console.error("Error fetching all books:", error);
    return null;
  }
};

export const callDeleteBook = async (id) => {
  try {
    const response = await axios.delete(
      `${import.meta.env.VITE_BACKEND_URL}/api/books/delete/${id}`,
      {
        headers: getAuthHeaders(),
      }
    );
    const book = response.data.data;
    return book;
  } catch (error) {
    console.error("Error fetching all books:", error);
    return null;
  }
};
