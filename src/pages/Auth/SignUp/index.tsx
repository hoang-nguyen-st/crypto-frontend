import { useState } from "react";
import {
  UserIcon,
  MailIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  CheckIcon,
} from "./icons";
import { Link } from "react-router";
import { URL } from "@/constants";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        {/* Card Container */}
        <div className="bg-white !bg-slate-600 rounded-lg shadow-sm p-6">
          {/* Header */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-100 rounded-full mb-4">
              <UserIcon />
            </div>
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Create account
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Enter your details to get started
            </p>
          </div>

          <form className="space-y-4">
            {/* Full Name Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Full Name
              </label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="w-full px-3 py-2 bg-white  border border-gray-200 dark:border-gray-800 rounded-md text-sm !text-black !placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
              />
            </div>

            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                  <MailIcon />
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 bg-white border placeholder:pl-5 border-gray-200 dark:border-gray-800 rounded-md text-sm !text-black !placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900 dark:text-gray-100">
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
                  className="w-full px-3 py-2 bg-white placeholder:pl-5 border border-gray-200 dark:border-gray-800 rounded-md text-sm !text-black !placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
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
            {/* Terms Checkbox */}
            <div className="flex items-start space-x-2">
              <div className="relative flex items-center">
                <input
                  id="terms"
                  type="checkbox"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="sr-only"
                />
                <label
                  htmlFor="terms"
                  className="flex items-center cursor-pointer"
                >
                  <div
                    className={`w-4 h-4 border border-gray-300 dark:border-gray-600 rounded flex items-center justify-center transition-all duration-200 ${
                      isChecked
                        ? "bg-gray-900 dark:bg-gray-100 border-gray-900 dark:border-gray-100"
                        : "bg-white dark:bg-black hover:border-gray-400 dark:hover:border-gray-500"
                    }`}
                  >
                    {isChecked && <CheckIcon />}
                  </div>
                </label>
              </div>
              <label
                htmlFor="terms"
                className="text-sm text-gray-600 dark:text-gray-400 cursor-pointer leading-4"
              >
                I agree to the{" "}
                <a
                  href="#"
                  className="text-gray-900 dark:text-gray-100 hover:underline"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-gray-900 dark:text-gray-100 hover:underline"
                >
                  Privacy Policy
                </a>
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="signin-button w-full bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 py-2 px-4 rounded-md text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isChecked}
            >
              Create account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Already have an account?{" "}
              <Link
                to={{ pathname: URL.SIGN_IN }}
                className="text-gray-900 dark:text-gray-100 font-medium hover:underline"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
