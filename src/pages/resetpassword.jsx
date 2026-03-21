import React, { useState } from "react";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <>
      {" "}
      {/* Main Container */}
      {/* Abstract Background Accents (The Purple Waves) */}
      {/* Form Content */}
      <div className=" z-10 w-full flex flex-col items-center justify-center p-8 md:p-12 resetpassword">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 paddingforreset">
          Reset your Password?
        </h2>

        <form className="w-full max-w-sm space-y-6">
          {/* New Password Field */}
          <div className="labelforreset">
            <label className="block text-gray-700 font-semibold mb-2">
              New Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all inputreset"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* Confirm Password Field */}
          <div className="labelforreset">
            <label className="block text-gray-700 font-semibold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all inputreset"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {/* Submit Button */}
          <div className="flex flex-col items-center pt-4">
            <button
              type="submit"
              className="w-40 py-3 bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-xl rounded-xl shadow-lg transform transition-transform active:scale-95 buttonreset"
            >
              Done
            </button>
            <button
              type="button"
              className="mt-4 text-gray-600 font-medium hover:underline text-sm inputreset"
            >
              Back to Login
            </button>
          </div>
        </form>
      </div>
      {/* Illustration Placeholders */}
      {/* Note: In a real project, replace these with the actual .png or .svg files from your design */}
      <div className="hidden lg:block absolute right-10 top-1/4 opacity-80 pointer-events-none">
        {/* Character illustration would go here */}
        <div className="w-98 h-48 rounded-lg flex items-center justify-center ">
          <img src="resettopimg.svg" />
        </div>
      </div>
      <div className="hidden lg:block absolute left-10 bottom-10 opacity-80 pointer-events-none">
        {/* Security illustration would go here */}
        <div className="w-100 h-82 bg-purple-50 rounded-lg flex items-center justify-center ">
          <img src="topimgaereset.svg" />
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
