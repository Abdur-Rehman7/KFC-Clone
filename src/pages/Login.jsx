import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import PageName from "../components/reuseable/PageName";
import animation from "../assets/login-animation.gif";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [phone, setPhone] = useState("");

  const handleLogin = () => {
    if (phone.trim() === "") {
      alert("Please enter your phone number.");
      return;
    }

    dispatch(
      login({
        name: "Abdur Rehman",
        phone: `+92${phone}`,
      })
    );

    navigate("/");
  };

  const handleGoogleLogin = () => {
    dispatch(
      login({
        name: "Abdur Rehman",
        email: "kabdurrehman111@gmail.com",
      })
    );

    navigate("/");
  };

  return (
    <section className="bg-card text-left grid grid-cols-1 md:grid-cols-2 mx-auto my-20 w-[90%] md:w-[70%] rounded-md">
  {/* Left side */}
  <div className="flex justify-center  flex-col p-4">
    <PageName className="ml-[10px] mt-[10px]" />
    <img
      src={animation}
      alt="Login Animation"
      className="w-full max-w-[300px] h-auto mt-4"
    />
  </div>

  {/* Right side */}
  <div className="grid p-[10px]">
    <p className="text-[32px] md:text-[40px] font-semibold mb-4 text-center md:text-left">
      Welcome!
    </p>

    <div>
      {/* Phone input */}
      <div className="relative bg-gray-300 pt-6 rounded-md">
        <span className="absolute left-2 top-10 -translate-y-3 font-bold text-black pointer-events-none">
          +92&nbsp;|
        </span>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder=""
          className="pl-14 peer bg-gray-300 py-2 block w-full border-0 border-b-2 border-gray-300 text-current text-inherit leading-[1.4375em] font-inherit outline-none focus:border-red-500 transition-colors duration-200"
        />
        <label
          htmlFor="phone"
          className="absolute left-3 top-2 text-text transition-all duration-200 
            peer-placeholder-shown:top-2 peer-placeholder-shown:text-text peer-placeholder-shown:text-base
            peer-focus:top-2 peer-focus:text-text"
        >
          Alternate Phone Number (3XXXXXXX)
        </label>
      </div>

      {/* Buttons */}
      <button
        onClick={handleLogin}
        className="bg-red-300 w-full mt-[24px] py-[10px] rounded-[2px] font-semibold hover:bg-red-400 transition"
      >
        LOGIN
      </button>

      <button
        onClick={handleGoogleLogin}
        className="bg-primary w-full mt-[8px] py-[10px] rounded-[2px] text-white font-bold hover:bg-red-700 transition"
      >
        LOGIN WITH GOOGLE
      </button>
    </div>
  </div>
</section>

  );
};

export default Login;
