// TermsAndCondition.jsx
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import CommenPage from "../components/reuseable/CommenPage";
const TermsAndCondition = () => {


  return (
    <>
      <section className="text-center mx-[32px]">
        <div className="relative flex items-center justify-center mb-[35px]">
          <div className="absolute left-0 top-2">
            <Link
              to="/"
              className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary"
            >
              <IoIosArrowBack size={20} />
            </Link>
          </div>
          <span className="text-4xl font-bold text-text">
            Terms and Conditions
          </span>
        </div>
        <p className="text-[20px] font-semibold">USER AGREEMENT</p>
        <p className="text-[20px] font-semibold">
          FOR USE OF KFC WEBSITE, MOBILE AND KIOSK APPLICATION
        </p>
        <p className="text-[16px]">Revised on 04.09.2025</p>

        <div>
          <CommenPage />
        </div>
        
      </section>
    </>
  );
};

export default TermsAndCondition;
