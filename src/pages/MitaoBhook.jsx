import hero from "../assets/mitaobhook-hero.png";
import diversity from "../assets/diversity.png";
import education from "../assets/education.png";
import inclusion from "../assets/inclusion.png";
const MitaoBhook = () => {
  return (
    <>
      <img className="w-full" src={hero} />
      <section className="text-center mx-[32px]">
        <p className="mt-[70px] mb-[110px] text-text text-[40px] font-bold">
          <span className="text-primary">Mitao Bhook</span> is our social
          purpose platform committed to create a sustainable, long lasting
          positive impact on society, by focusing on three key pillars
        </p>

        <div className="grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-5">
          <div>
            <img src={diversity} />
          </div>
          <div>
            <img src={education} />
          </div>
          <div>
            <img src={inclusion} />
          </div>
        </div>
        <p className="mt-[70px] mb-[110px] text-text text-[40px] font-bold">
          We <span className="text-primary">donate Rs. 50</span> from every
          Value Bucket sold to our{" "}
          <span className="text-primary">Mitao Bhook</span>
          initiative, demonstrating an unwavering commitment to social
          responsibility, with contributions exceeding
          <span className="text-primary">$2 million</span>
          to date. Through this sustained effort, we are dedicated to nourish
          not just individuals, but the future of the nation.
        </p>
      </section>
    </>
  );
};

export default MitaoBhook;
