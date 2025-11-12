import hero from "../assets/mitaobhook-hero.png";
import "../App.css";
import Education from "../components/reuseable/Education";
import EDISection from "../components/mitaobhook/EDISection";
import EDISectionMobile from "../components/mitaobhook/EDISectionMobile";

const MitaoBhook = () => {
  return (
    <>
      <img className="w-full" src={hero} />
      <section className="text-center mx-[12px] lg:mx-[32px] md:mx-[32px]">
        <p className="mt-[30px] mb-[52px] lg:mb-[110px] lg:mt-[70px] md:mb-[110px] md:mt-[70px] text-text text-[22px]/[1.2] lg:text-[40px]/[1.2] md:text-[40px]/[1.2] font-bold">
          <span className="text-primary">Mitao Bhook</span> is our social
          purpose platform committed to create a sustainable, long lasting
          positive impact on society, by focusing on three key pillars
        </p>

        <div>
          <Education />
        </div>
        <p className="mt-[70px] mb-[110px] text-text text-[40px]/[1.2] font-bold">
          We <span className="text-primary">donate Rs. 50</span> from every
          Value Bucket sold to our{" "}
          <span className="text-primary">Mitao Bhook </span>
          initiative, demonstrating an unwavering commitment to social
          responsibility, with contributions exceeding
          <span className="text-primary"> $2 million </span>
          to date. Through this sustained effort, we are dedicated to nourish
          not just individuals, but the future of the nation.
        </p>

        <div className="hidden md:block">
          <EDISection />
        </div>

        {/* Show only on small screens */}
        <div className="block md:hidden">
          <EDISectionMobile />
        </div>
      </section>

      <div className="mitao-bhook text-center text-white mt-[100px] mx-auto py-[90px] px-[60px] ">
        <p className="text-[34px] font-bold">
          KFC SCORE A SCHOLARSHIP PROGRAM
        </p>
        <p className="text-[34px] font-bold">
          READY TO FULFIL YOUR EDUCATION DREAMS!
        </p>
        <p className="text-[20px]/[24px] font-semibold mt-[30px]">
          We are providing 200+ higher education scholarships to deserving
          students across all HEC recognized institutes in Pakistan. This is
          done in collaboration with the Orange Tree Foundation, an education
          advocate working to further education in the country. For every six
          hit during two international cricket tournaments, we gave higher
          education scholarship to university students. Higher education gives
          you, the Pakistani youth, an opportunity to succeed in today's global
          economy and we're excited to enable the dreams of hundreds of
          Pakistani students embarking on this journey.
        </p>
      </div>
    </>
  );
};

export default MitaoBhook;
