// hooks/useAuthErrorToast.js
import { useState } from "react";

export const useAuthErrorToast = () => {
  const [errorMessage, setErrorMessage] = useState("");

  const showError = (error) => {
    const code = error.code || error.message;

    switch (code) {
      case "auth/user-not-found":
        setErrorMessage("No account found with this email.");
        break;
      case "auth/wrong-password":
        setErrorMessage("Incorrect password.");
        break;
      case "auth/invalid-email":
        setErrorMessage("Invalid email format.");
        break;
      case "auth/invalid-login-credentials":
      case "auth/invalid-credential":
      case "INVALID_LOGIN_CREDENTIALS":
        setErrorMessage("Invalid login credentials.");
        break;
      default:
        setErrorMessage("Login failed. Please try again.");
    }
  };



  return {
    errorMessage,
    showError,
    clearError: () => setErrorMessage(""),
  };
};
