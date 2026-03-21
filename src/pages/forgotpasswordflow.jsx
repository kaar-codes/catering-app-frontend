import React, { useState } from "react";
import { Mail, Lock, ShieldCheck, ArrowRight, RefreshCw } from "lucide-react";

function ForgotPasswordFlow() {
  // States: 'email', 'otp', 'reset', 'success'
  const [step, setStep] = useState("email");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [passwords, setPasswords] = useState({ new: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  // Handle OTP Input focus shift
  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling && element.value !== "") {
      element.nextSibling.focus();
    }
  };

  // Step 1: Request OTP
  const handleRequestOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulation of API Call to backend
    // POST /api/auth/forgot-password { email }
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
      setMessage({ type: "success", text: "4-digit OTP sent to your email!" });
    }, 1500);
  };

  // Step 2: Verify OTP
  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    const otpValue = otp.join("");
    // Simulation of API Call: POST /api/auth/verify-otp { email, otp }
    setTimeout(() => {
      setLoading(false);
      if (otpValue === "1234") {
        // Mock verification
        setStep("reset");
        setMessage({
          type: "success",
          text: "OTP Verified. Set your new password.",
        });
      } else {
        setMessage({ type: "error", text: "Invalid OTP. Please try again." });
      }
    }, 1500);
  };

  // Step 3: Reset Password
  const handleResetPassword = async (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      setMessage({ type: "error", text: "Passwords do not match!" });
      return;
    }
    setLoading(true);
    // Simulation of API Call: POST /api/auth/reset-password { email, password }
    setTimeout(() => {
      setLoading(false);
      setStep("success");
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 font-sans">
      <div className="max-w-md w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="p-8">
          {/* Header */}

          <div className="text-center mb-8 forgotpagegap">
            <div className="w-16 h-16 bg-[#63003c]/10 text-[#63003c] rounded-2xl flex items-center justify-center mx-auto mb-4">
              {step === "email" && <Mail size={32} />}
              {step === "otp" && <ShieldCheck size={32} />}
              {step === "reset" && <Lock size={32} />}
              {step === "success" && (
                <ShieldCheck size={32} className="text-green-600" />
              )}
            </div>
            <h2 className="text-2xl font-bold text-gray-900 bottomforgotpass">
              {step === "email" && "Forgot Password?"}
              {step === "otp" && "Enter OTP"}
              {step === "reset" && "Reset Password"}
              {step === "success" && "All Set!"}
            </h2>
            <p className="text-gray-500 mt-2 text-sm nextforgotpass">
              {step === "email" &&
                "Enter your email to receive a verification code."}
              {step === "otp" && `Check your inbox. We sent a code to ${email}`}
              {step === "reset" && "Please choose a strong new password."}
              {step === "success" &&
                "Your password has been successfully updated."}
            </p>
          </div>

          {message.text && (
            <div
              className={`mb-6 p-3 rounded-lg text-sm text-center ${message.type === "error" ? "bg-red-50 text-red-600" : "bg-green-50 text-green-600"}`}
            >
              {message.text}
            </div>
          )}

          {/* STEP 1: EMAIL */}
          {step === "email" && (
            <form onSubmit={handleRequestOtp} className="space-y-6">
              <div className="relative">
                <Mail
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  required
                  placeholder="Email address"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#63003c] focus:border-transparent outline-none transition-all"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#63003c] text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-[#4a002d] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <RefreshCw className="animate-spin" size={20} />
                ) : (
                  "Send OTP"
                )}
                {!loading && <ArrowRight size={20} />}
              </button>
            </form>
          )}

          {/* STEP 2: OTP */}
          {step === "otp" && (
            <form
              onSubmit={handleVerifyOtp}
              className="space-y-8 footerforgotpass"
            >
              <div className="flex justify-between gap-2">
                {otp.map((data, index) => (
                  <input
                    key={index}
                    type="text"
                    maxLength="1"
                    className="w-16 h-16 text-center text-2xl font-bold bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#63003c] outline-none transition-all"
                    value={data}
                    onChange={(e) => handleOtpChange(e.target, index)}
                    onFocus={(e) => e.target.select()}
                  />
                ))}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#63003c] text-white py-3 rounded-xl font-bold hover:bg-[#4a002d] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <RefreshCw className="animate-spin" size={20} />
                ) : (
                  "Verify OTP"
                )}
              </button>
              <p className="text-center text-sm text-gray-500">
                Didn't receive code?{" "}
                <button type="button" className="text-[#63003c] font-bold">
                  Resend
                </button>
              </p>
            </form>
          )}

          {/* STEP 3: RESET PASSWORD */}
          {step === "reset" && (
            <form onSubmit={handleResetPassword} className="space-y-4">
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={20}
                />
                <input
                  type="password"
                  required
                  placeholder="New Password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#63003c] outline-none transition-all"
                  value={passwords.new}
                  onChange={(e) =>
                    setPasswords({ ...passwords, new: e.target.value })
                  }
                />
              </div>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-3.5 text-gray-400"
                  size={20}
                />
                <input
                  type="password"
                  required
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#63003c] outline-none transition-all"
                  value={passwords.confirm}
                  onChange={(e) =>
                    setPasswords({ ...passwords, confirm: e.target.value })
                  }
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#63003c] text-white py-3 rounded-xl font-bold hover:bg-[#4a002d] transition-all disabled:opacity-50"
              >
                {loading ? (
                  <RefreshCw className="animate-spin" size={20} />
                ) : (
                  "Update Password"
                )}
              </button>
            </form>
          )}

          {/* SUCCESS MESSAGE */}
          {step === "success" && (
            <div className="text-center space-y-6">
              <p className="text-gray-600">
                You can now login with your new credentials.
              </p>
              <button
                onClick={() => (window.location.href = "/login")}
                className="w-full bg-[#63003c] text-white py-3 rounded-xl font-bold hover:bg-[#4a002d] transition-all"
              >
                Go to Login
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordFlow;
