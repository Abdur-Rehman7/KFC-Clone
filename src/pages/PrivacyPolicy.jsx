// PrivacyPolicy.jsx
import PageName from "../components/reuseable/PageName";
import CommenPage from "../components/reuseable/CommenPage";
const PrivacyPolicy = () => {
  return (
    <>
      <section className="text-center mx-[32px]">
        <PageName title="Privacy Policy" />
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

export default PrivacyPolicy;
