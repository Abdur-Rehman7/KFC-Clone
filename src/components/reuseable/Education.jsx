import diversity from "./assets/diversity.png";
import education from "./assets/education.png";
import inclusion from "./assets/inclusion.png";

const Education = (props) => {
  return (
    <>
      <div className="grid grid-cols lg:grid-cols-3 md:grid-cols-3 gap-0 lg:gap-5 md:gap-5">
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
    </>
  );
};

export default Education;
