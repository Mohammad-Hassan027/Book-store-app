import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";
import { useAuthErrorToast } from "../hooks/useAuthErrorToast";
import { useEffect } from "react";
import { swal } from "sweetalert";

function Login() {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const { loginWithFirebase, signInWithGoogle } = useAuth();
  const { errorMessage, clearError } = useAuthErrorToast();

  const onSubmit = (data) => {
    loginWithFirebase(data.email, data.password);
  };

  useEffect(() => {
    if (errorMessage) {
      const timer = setTimeout(() => clearError(), 40000);
      return () => clearTimeout(timer);
    }
  }, [errorMessage, clearError]);

  return (
    <div className="flex justify-center items-center h-[calc(100vh-128px)]">
      <div className="rounded shadow-2xl p-4 w-sm">
        <h2 className="text-2xl tracking-wide mb-3">Please Login</h2>
        <hr className="mb-1.5" />
        {errorMessage.length > 0 &&
          swal({
            title: "Error!",
            text: errorMessage,
            icon: "warning",
            button: "Ok",
          })}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-1 py-2">
            <label htmlFor="email" className="text-xl">
              Email:{" "}
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              placeholder="abc@gmail.com"
              id="email"
              name="email"
              className="w-full rounded h-[42px] border-none text-black bg-gray-200 text-[17px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:right-0 focus-visible:ring-offset-0 px-2"
            />
          </div>
          {errors.email && (
            <span className="text-red-500 text-sm">
              * This field is required
            </span>
          )}
          <div className="flex items-center gap-1 py-2">
            <label htmlFor="password" className="text-xl">
              Password:{" "}
            </label>
            <input
              {...register("password", { required: true, minLength: 6 })}
              type="password"
              placeholder="Your Password"
              id="password"
              name="password"
              className="w-full rounded h-[42px] border-none text-black bg-gray-200 text-[17px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:right-0 focus-visible:ring-offset-0 px-2"
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">* 6 character required</span>
          )}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          </div>
          <p className="mb-2 text-gray-600">
            If not registered go to{" "}
            <Link to="/register" className="text-blue-500 hover:text-blue-700">
              register page
            </Link>
            .
          </p>
        </form>
        <div>
          <button
            type="button"
            onClick={signInWithGoogle}
            className="bg-gray-700 hover:bg-blue-800 text-white text-lg px-4 py-2 rounded-md"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
