import { useState } from "react";
import { Link } from "react-router-dom";
import { URL } from "@/constants";
import { UserIcon, MailIcon, LockIcon, EyeIcon, EyeOffIcon } from "./icons";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-sm">
        {/* Card Container */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-slate-600 text-white rounded-full mb-4">
              <UserIcon />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">
              Sign In
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Welcome back! Please enter your details to sign in
            </p>
          </div>

          <form className="space-y-4">
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                  <MailIcon />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 bg-white border pl-8 border-gray-200 dark:border-gray-800 rounded-md text-sm !text-black !placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                  <LockIcon />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                  className="w-full px-3 py-2 pl-8 bg-white border border-gray-200 dark:border-gray-800 rounded-md text-sm !text-black !placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                >
                  {showPassword ? <EyeOffIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="signin-button w-full bg-slate-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to={{ pathname: `${URL.AUTH}/${URL.SIGN_UP}` }}
                className="text-gray-900 font-medium hover:underline"
              >
                Click here!
              </Link>
            </p>
          </div>
          <div className="mt-2 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Forgot the password?{" "}
              <Link
                to={{ pathname: `${URL.AUTH}/${URL.SIGN_UP}` }}
                className="text-gray-900 font-medium hover:underline"
              >
                Click here!
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
