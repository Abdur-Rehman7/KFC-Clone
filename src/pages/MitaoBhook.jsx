import hero from "../assets/mitaobhook-hero.png";
import diversity2 from "../assets/diversity-2.png";
import education2 from "../assets/education-2.png";
import inclusion2 from "../assets/inclusion-2.png";
import "../App.css";
import Education from "../components/reuseable/Education";
const MitaoBhook = () => {
  return (
    <>
      <img className="w-full" src={hero} />
      <section className="text-center mx-[32px]">
        <p className="mt-[70px] mb-[110px] text-text text-[40px]/[1.2] font-bold">
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
          <span className="text-primary">Mitao Bhook</span>
          initiative, demonstrating an unwavering commitment to social
          responsibility, with contributions exceeding
          <span className="text-primary"> $2 million </span>
          to date. Through this sustained effort, we are dedicated to nourish
          not just individuals, but the future of the nation.
        </p>

        <div className="grid grid-cols lg:grid-cols-2 md:grid-cols-2 text-left items-center">
          <div className="p-[24px]">
            <img src={education2} />
          </div>

          <div className="p-[50px]">
            <p className="text-[50px]/[1.2] font-bold mb-[16px] text-text">
              EDUCATION
            </p>
            <p className="text-[24px]/[1.2] font-semibold mb-[16px] text-text">
              With a commitment to learning, KFC Mitao Bhook has supported the
              education of <span className="text-primary">6,300+ students</span>
              , fostering academic growth and development.
            </p>
          </div>
        </div>
        <div className="grid grid-cols lg:grid-cols-2 md:grid-cols-2 text-left items-center">
          <div className="p-[50px]">
            <p className="text-[50px]/[1.2] font-bold mb-[16px] text-text">
              DIVERSITY
            </p>
            <p className="text-[24px]/[1.2] font-semibold mb-[16px] text-text">
              Promoting gender equality{" "}
              <span className="text-primary"> at its core</span>, we've
              <span className="text-primary"> proudly accomplished</span> a
              remarkable 62% female ratio in our education initiatives, creating
              an inclusive and diverse learning environment{" "}
              <span className="text-primary">for young girls</span>.
            </p>
          </div>

          <div className="p-[24px]">
            <img src={diversity2} />
          </div>
        </div>
        <div className="grid grid-cols lg:grid-cols-2 md:grid-cols-2 text-left items-center">
          <div className="p-[24px]">
            <img src={inclusion2} />
          </div>

          <div className="p-[50px]">
            <p className="text-[50px]/[1.2] font-bold mb-[16px] text-text">
              INCLUSION
            </p>
            <p className="text-[24px]/[1.2] font-semibold mb-[16px] text-text">
              We are dedicated to educating{" "}
              <span className="text-primary">2200 people</span> with
              disabilities, empowering them with knowledge and skills.
            </p>
          </div>
        </div>
      </section>

      <div className="mitao-bhook text-center text-white mt-[100px] mx-auto py-[90px] px-[60px] ">
        <p className="text-[34px] font-semibold">
          KFC SCORE A SCHOLARSHIP PROGRAM
        </p>
        <p className="text-[34px] font-semibold">
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
