import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {  URL } from "@/constants";
import { UserIcon, MailIcon } from "../SignIn/icons";
import { useForgotPassword } from "@/hooks";
import type { ForgotPasswordDto } from "@/interfaces";
import { CREATE_COMBINATION_TWO_AGRUMENTS } from "@/helpers";

const ForgotPassword = () => {
  const { handleForgotPassword, loading } = useForgotPassword();
  const [formData, setFormData] = useState<ForgotPasswordDto>({
    email: "",
  });

  const handleSetFormData = (key: keyof ForgotPasswordDto, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await handleForgotPassword(formData);
    setFormData((prev) => ({ ...prev, email: "" }));
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
              Forgot password
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Please enter your email for sending reset page email.
            </p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-900">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400 dark:text-gray-500">
                  <MailIcon />
                </div>
                <input
                  disabled={loading}
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleSetFormData("email", e.target.value)}
                  placeholder="name@example.com"
                  className="w-full px-3 py-2 bg-white border pl-8 border-gray-200 dark:border-gray-800 rounded-md text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              disabled={loading}
              type="submit"
              className="signin-button w-full bg-slate-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-slate-700 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-100 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Send email
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Don't have an account?{" "}
              <Link
                to={{
                  pathname: CREATE_COMBINATION_TWO_AGRUMENTS(
                    URL.AUTH,
                    URL.SIGN_UP
                  ),
                }}
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

export default ForgotPassword;
