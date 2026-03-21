import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [userEmail, setUserEmail] = useState();
  const [showOtpPopup, setShowOtpPopup] = useState(false);
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleSend = () => {
    setShowOtpPopup(true);
  };

  const handleOtpChange = (value, index) => {
    let newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
  };

  return (
    <>
      <form type="submit">
        <section className="flex justify-between ">
          <div>
            <img
              src="forgotpassword.svg"
              alt="Forgot Password Violet Tone Image"
              className="w-[520px]"
            />
          </div>

          <div className="text-center mt-50 marginchange">
            <h1 className="text-3xl">Forgot Password</h1>
            <br></br>

            <input
              name="email"
              required
              className="input-element forgotelement"
              placeholder="Enter your email"
              autoFocus
              onChange={(e) => {
                setUserEmail(e.target.value);
              }}
            />

            <button
              type="submit"
              value="send"
              onClick={handleSend}
              className="bg-[#8A38F5] mt-7 rounded w-32 h-14 text-xl forgotbtn"
            >
              send
            </button>
          </div>
        </section>
      </form>

      {/* OTP POPUP */}

      {showOtpPopup && (
        <div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm otppopup">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <h2 className="text-2xl mb-6 font-semibold popupotp">Enter OTP</h2>
            <div className="flex gap-3 justify-center mb-6 otpinput">
              {otp.map((data, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength="1"
                  value={data}
                  onChange={(e) => handleOtpChange(e.target.value, index)}
                  className="w-12 h-12 border text-center text-xl rounded"
                />
              ))}
            </div>

            <button
              className="bg-[#8A38F5] text-white px-6 py-2 rounded mr-3 btnotppopup "
              onClick={() => alert("OTP Verified")}
            >
              {" "}
              <Link to="/resetpassword">Verify</Link>
            </button>

            <button
              className="bg-gray-400 text-white px-6 py-2 rounded btnotppopup"
              onClick={() => setShowOtpPopup(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default ForgotPassword;
