// Login.jsx
import PageName from "../components/reuseable/PageName";
import animation from "../assets/login-animation.gif";
const Login = () => {
  return (
    <>
      <section className=" bg-card grid grid-cols-2 mx-auto my-20 w-[60%] rounded-md">
        <div className="flex">
            <PageName style="ml-[10px] mt-[10px]" />
          <img src={animation} />
        </div>
        <div className="grid grid-cols p-[10px] ">
          <p className="text-[40px] font-semibold">Welcome!</p>
          <div className="">
            <div className="relative bg-gray-300 pt-6 rounded-md">
              <span className="absolute left-2 top-10 -translate-y-3 font-bold text-black pointer-events-none">
                +92&nbsp;|
              </span>
              <input
                type="text"
                id={1}
                placeholder=""
                className="pl-14 peer bg-gray-300 py-2 block w-full border-0 border-b-2 border-gray-300 text-current text-inherit leading-[1.4375em] font-inherit outline-none focus:border-red-500 transition-colors duration-200"
              />
              <label
                htmlFor={1}
                className="absolute left-3 top-2 text-text transition-all duration-200 
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-text peer-placeholder-shown:text-base
                    peer-focus:top-2 peer-focus:text-text"
              >
                Alternate Phone Number (3XXXXXXX)
              </label>
            </div>
            <button className="bg-red-300 w-full mt-[24px] py-[10px] rounded-[2px]">
              LOGIN
            </button>
            <button className="bg-primary w-full mt-[8px] py-[10px] rounded-[2px] text-white font-bold">
              LOGIN WITH GOOGLE
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
