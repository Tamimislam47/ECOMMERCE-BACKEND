import React from "react";

type Props = {};

export default function Register({}: Props) {
  return (
    <div className="bg-gray-50 font-[sans-serif]">
      <div className="flex min-h-screen items-center justify-center p-6">
        <div className="grid w-full max-w-6xl items-center gap-6 overflow-hidden rounded-2xl bg-white shadow-lg max-lg:max-w-lg lg:grid-cols-2">
          {/* Left Section - Form */}
          <form className="w-full p-8 lg:max-w-md">
            <h3 className="mb-8 text-3xl font-bold text-gray-900">
              Create an account
            </h3>
            <div className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring focus:ring-blue-200"
                  placeholder="Enter name"
                />
              </div>
              {/* Email Field */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  name="email"
                  type="email"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring focus:ring-blue-200"
                  placeholder="Enter email"
                />
              </div>
              {/* Password Field */}
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  className="w-full rounded-md border border-gray-300 bg-gray-100 px-4 py-3 text-sm text-gray-900 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring focus:ring-blue-200"
                  placeholder="Enter password"
                />
              </div>
              {/* Terms and Conditions */}
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-3 text-sm text-gray-700"
                >
                  I accept the{" "}
                  <a
                    href="javascript:void(0);"
                    className="ml-1 font-semibold text-blue-600 hover:underline"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>

            {/* Register Button */}
            <div className="mt-6">
              <button
                type="button"
                className="w-full rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
              >
                Register
              </button>
            </div>
            {/* Login Link */}
            <p className="mt-6 text-center text-sm text-gray-700">
              Already have an account?{" "}
              <a
                href="javascript:void(0);"
                className="ml-1 font-semibold text-blue-600 hover:underline"
              >
                Login here
              </a>
            </p>
          </form>

          {/* Right Section - Image */}
          <div className="h-full bg-blue-50">
            <img
              src="https://readymadeui.com/login-image.webp"
              className="h-full w-full object-cover"
              alt="login illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
