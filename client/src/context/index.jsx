import { useState } from "react";
import { StoreContext } from "./create-context";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useFirebaseAuth } from "../hooks/useFirebaseAuth";

export default function Store({ children }) {
  const [cartItems, setCartItem] = useState([]);
  const navigate = useNavigate();

  const {
    currentUser,
    isLoading: authLoading,
    register,
    login,
    loginWithGoogle,
    logout,
    EmailVerification,
    PasswordReset,
  } = useFirebaseAuth();

  function AddToCart(book) {
    const existingItem = cartItems.find((item) => item._id === book._id);

    if (existingItem) {
      swal({
        title: "Error!",
        text: "Item already added!",
        icon: "warning",
        button: "Ok",
      });
      return;
    }
    setCartItem([...cartItems, book]);
    swal({
      title: "Good job!",
      text: "Item added to cart successfully!",
      icon: "success",
      buttons: { ok: "OK", cart: "Go to Cart" },
    }).then((value) => {
      if (value === "cart") {
        navigate("/cart");
      }
    });
  }

  function handleRemoveFromCart(book) {
    setCartItem(cartItems.filter((item) => item._id !== book._id));
  }

  return (
    <StoreContext.Provider
      value={{
        cartItems,
        AddToCart,
        handleRemoveFromCart,
        currentUser,
        registerWithFirebase: register,
        loginWithFirebase: login,
        handleLogout: logout,
        signInWithGoogle: loginWithGoogle,
        authLoading,
        EmailVerification,
        PasswordReset,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
