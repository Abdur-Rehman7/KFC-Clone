// MitaoBhookScholership.jsx
import scholarship from "../assets/kfc-scholarship-hero.png";
import chatcsr from "../assets/chatCSR_scholarship.png";
import Education from "../components/reuseable/education";
import applyimg from "../assets/bucket-apply-img.png";
const MitaoBhookScholership = () => {
  return (
    <>
      <div className="grid grid-cols-1 w-full">
        <img src={scholarship} />
      </div>
      <section className="text-center mx-[32px]">
        <div className="grid grid-cols-1 w-full mt-[110px]">
          <img src={chatcsr} />
        </div>
        <div>
          <p className="text-[40px] text-text mt-[70px] mb-[110px] mx-[110px]">
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
        <div>
          <img src={applyimg} />
          <button className="bg-primary py-[15px] px-[30px] mx-[-32px]  font-bold rounded-[4px]">
            Apply Now
          </button>
        </div>
        <p className="bg-card text-[100px] font-bold text-center py-[60px] mx-[-32px]  mt-[110px]">
          ELIGIBILITY CRITERIA
        </p>
        <div className="mx-[32px] mb-[ px-[12px]">
          <ul className="list-disc text-[39px] text-text text-left">
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
        <div className="bg-primary mt-[50px] mx-[-32px] ">
          <p className=" text-text font-bold text-[100px] py-[50px] px-[12px] ">
            FIELDS SUPPORTED FOR THE SCHOLARSHIP
          </p>
        </div>
        <div className="mx-[32px] mb-[ px-[12px]">
          <ul className="text-[39px] text-text text-left">
            <li className="mt-[50px]">
              Business, Engineering, Medical, IT, Mathematics, Physical
              Sciences, Education and More
            </li>
            <li className="mt-[50px]">
              Please note these scholarships are provided yearly and renewal for
              existing students will be contingent on the academic committee’s
              discretion every year.
            </li>
            <li className="mt-[50px]">
              Complete policy document available here.
            </li>
          </ul>
          <button className="bg-primary py-[15px] px-[30px] mx-[-32px]  font-bold rounded-[4px]">
            Apply Now
          </button>
        </div>
      </section>
    </>
  );
};

export default MitaoBhookScholership;
