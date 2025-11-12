// MitaoBhookScholership.jsx
import scholarship from "../assets/kfc-scholarship-hero.png";
import chatcsr from "../assets/chatCSR_scholarship.png";
import Education from "../components/reuseable/Education";
import applyimg from "../assets/bucket-apply-img.png";
const MitaoBhookScholership = () => {
  return (
    <>
      <section className="text-center mx-[12px] lg:mx-[32px] md:mx-[12px]">
        <div className="grid grid-cols mx-[-12px] lg:mx-[-32px] md:mx-[-12px]">
          <img className="w-full" src={scholarship} />
        </div>
        <div className="grid grid-cols-1 w-full mt-[100px] lg:mt-[110px] md:mt-[110px]">
          <img src={chatcsr} />
        </div>
        <div>
          <p className="text-[22px] lg:text-[40px] text-text font-bold mt-[30px] lg:mt-[70px] md:mt-[70px] mb-[52px] lg:mb-[110px] md:mb-[110px]  lg:mx-[110px]">
            KFC's Mitao Bhook platform is providing 120+ higher education
            scholarships to deserving students across all HEC recognised
            institutes in Pakistan. This is done in collaboration with the
            orange tree foundation, an education advocate working to further
            education in the country.
          </p>
        </div>
        <div>
          <Education />
        </div>
        <div className="mx-[-12px] lg:mx-[-32px] md:mx-[-12px]">
          <img src={applyimg} />
          <button className="bg-primary py-[15px] px-[30px] mx-[-12px] lg:mx-[-32px] md:mx-[-12px]  font-bold rounded-[4px]">
            Apply Now
          </button>
        </div>
        <div className="bg-card py-[40px] lg:py-[60px] md:py-[60px] mx-[-12px] lg:mx-[-32px] md:mx-[-12px] mt-[50px] lg:mt-[110px] sm:mb-[30px]">
          <p className=" text-[40px] lg:text-[100px] font-bold text-center sm:py-[15px] ">
            ELIGIBILITY CRITERIA
          </p>
        </div>
        <div className="mx-[32px] mb-[ px-[12px] font-bold">
          <ul className="list-disc text-[22px] lg:text-[39px] md:text-[39px] text-text text-left">
            <li className="mt-[50px]">
              Applicant must be a resident of Pakistan.
            </li>
            <li className="mt-[50px]">
              Students need to compete for securing admission at the
              participating institution as per admission policy of the
              institution and be enrolled in undergraduate (4 years) programs.
            </li>
            <li className="mt-[50px]">
              Students in financial need who are already enrolled in
              participating institutions are also eligible to apply.
            </li>
          </ul>
        </div>
        <div className="bg-primary mt-[50px] py-[50px] px-[12px] mx-[-12px] lg:mx-[-32px] md:mx-[-12px]">
          <p className=" text-text font-bold text-[40px] lg:text-[100px]  ">
            FIELDS SUPPORTED FOR THE SCHOLARSHIP
          </p>
        </div>
        <div className="lg:mx-[32px] md:mx-[32px]  font-bold">
          <ul className="text-[24px] lg:text-[39px] md:text-[39px] text-text text-left">
            <li className="mt-[40px] lg:mt-[50px] md:mt-[50px]">
              Business, Engineering, Medical, IT, Mathematics, Physical
              Sciences, Education and More
            </li>
            <li className="mt-[40px] lg:mt-[50px] md:mt-[50px]">
              Please note these scholarships are provided yearly and renewal for
              existing students will be contingent on the academic committee’s
              discretion every year.
            </li>
            <li className="mt-[40px] lg:mt-[50px] md:mt-[50px]">
              Complete policy document available here.
            </li>
          </ul>
          <button className="bg-primary py-[15px] px-[30px] my-[48px] font-bold rounded-[4px]">
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
};

export default MitaoBhookScholership;
