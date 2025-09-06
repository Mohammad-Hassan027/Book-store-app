import { useForm } from "react-hook-form";
import { callAdminLogin } from "../api/admin-api";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      await callAdminLogin(data?.username, data?.password);
      navigate("/dashboard");
    } catch (err) {
      console.error("Login Failed", err);
    }
  };
  return (
    <div className="flex justify-center items-center h-[calc(100vh-128px)]">
      <div className="rounded shadow-2xl p-4 w-sm">
        <h2 className="text-2xl tracking-wide mb-3">
          Please Login using Admin id
        </h2>
        <hr className="mb-1.5" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex items-center gap-1 py-2">
            <label htmlFor="username" className="text-xl">
              Username:{" "}
            </label>
            <input
              {...register("username", { required: true })}
              type="text"
              id="username"
              name="username"
              className="w-full rounded h-[42px] border-none text-black bg-gray-200 text-[17px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:right-0 focus-visible:ring-offset-0 px-2"
            />
          </div>
          {errors.username && (
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
              id="password"
              name="password"
              className="w-full rounded h-[42px] border-none text-black bg-gray-200 text-[17px] outline-none drop-shadow-sm transition-all duration-300 ease-in-out focus:bg-gray-100 focus:drop-shadow-lg focus-visible:outline-none focus-visible:right-0 focus-visible:ring-offset-0 px-2"
            />
          </div>
          {errors.password && (
            <span className="text-red-500 text-sm">* 6 character required</span>
          )}
          {/* <p className="text-sm text-red-500 pb-3">* user not exist</p> */}
          <div className="mb-4">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
          </div>
          {/* <p className="mb-2 text-gray-600">If not registered go to <Link to="/register" className="text-blue-500 hover:text-blue-700">register page</Link>.</p> */}
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
