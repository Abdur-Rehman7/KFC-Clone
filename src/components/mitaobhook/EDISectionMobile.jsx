import diversity2 from "./assets/diversity-2.png";
import education2 from "./assets/education-2.png";
import inclusion2 from "./assets/inclusion-2.png";

const EDISectionMobile = (props) => {
  return (
    <>
      <div className="">
        <div className="grid grid-cols lg:grid-cols-2 md:grid-cols-2 text-left items-center">
          <div className="p-[23px] lg:p-[50px]">
            <p className="text-[50px]/[1.2] font-bold mb-[16px] text-text">
              EDUCATION
            </p>
            <p className="text-[24px]/[1.2] font-semibold mb-[16px] text-text">
              With a commitment to learning, KFC Mitao Bhook has supported the
              education of <span className="text-primary">6,300+ students</span>
              , fostering academic growth and development.
            </p>
          </div>

          <div className="p-[12px] lg:p-[24px]">
            <img src={education2} />
          </div>
        </div>

        <div className="grid grid-cols lg:grid-cols-2 md:grid-cols-2 text-left items-center">
          <div className="p-[23px] lg:p-[50px]">
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

          <div className="p-[12px] lg:p-[24px]">
            <img src={diversity2} />
          </div>
        </div>

        <div className="grid grid-cols lg:grid-cols-2 md:grid-cols-2 text-left items-center">
          <div className="p-[23px] lg:p-[50px]">
            <p className="text-[50px]/[1.2] font-bold mb-[16px] text-text">
              INCLUSION
            </p>
            <p className="text-[24px]/[1.2] font-semibold mb-[16px] text-text">
              We are dedicated to educating{" "}
              <span className="text-primary">2200 people</span> with
              disabilities, empowering them with knowledge and skills.
            </p>
          </div>

          <div className="p-[12px] lg:p-[24px]">
            <img src={inclusion2} />
          </div>
        </div>
      </div>
    </>
  );
};

export default EDISectionMobile;
