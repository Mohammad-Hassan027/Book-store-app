import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import auth from "../config/firebaseConfig";
import { useAuthErrorToast } from "./useAuthErrorToast";
import swal from "sweetalert";

const googleProvider = new GoogleAuthProvider();

export function useFirebaseAuth() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const { showError } = useAuthErrorToast();

  useEffect(() => {
    let isMounted = true;

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!isMounted) return;
      setIsLoading(false);

      if (user) {
        // await user.reload(); // Refresh user data
        const { email, emailVerified, displayName, photoURL } = user;

        setCurrentUser({
          email,
          emailVerified,
          username: displayName,
          photo: photoURL,
        });

        // if (!emailVerified) {
        // swal("Please verify your email address.", { icon: "warning" });
        // navigate("/email-verification");
        // }
      } else {
        setCurrentUser(null);
      }
    });

    return () => {
      isMounted = false;
      unsubscribe();
    };
  }, []);

  const register = async (email, password) => {
    setIsLoading(true);
    if (!email || !password) {
      showError("Email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email.trim(), password);
      // const user = auth.currentUser;

      navigate("/");
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email, password) => {
    setIsLoading(true);
    if (!email || !password) {
      showError("Email and password are required.");
      setIsLoading(false);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      // const user = auth.currentUser;

      // await user.reload(); // Refresh verification status

      navigate("/");
    } catch (error) {
      showError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const EmailVerification = () => {
    // [START auth_send_email_verification]
    sendEmailVerification(auth, auth.currentUser)
      .then(() => {
        swal("Verification email sent!", "Check in spams", "success");
        // Email verification sent!
        // ..
      })
      .catch((error) => {
        showError(error);
      });
    // [END auth_send_email_verification]
  };

  function PasswordReset(email) {
    // [START auth_send_password_reset]
    sendPasswordResetEmail(auth, email)
      .then(() => {
        swal("Password reset email sent!", { icon: "success" });
        // Password reset email sent!
        // ..
      })
      .catch((error) => {
        showError(error);
        // ..
      });
    // [END auth_send_password_reset]
  }

  const loginWithGoogle = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);

    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/");
    } catch (error) {
      showError(error);
    } finally {
      setIsSigningIn(false);
    }
  };

  const logout = () => signOut(auth);

  return {
    currentUser,
    isLoading,
    register,
    login,
    EmailVerification,
    PasswordReset,
    loginWithGoogle,
    logout,
  };
}
