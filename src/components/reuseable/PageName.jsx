import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const PageName = (props) => {
  return (
    <>
     <div className="relative flex items-center justify-center mb-[35px]">
          <div className="absolute left-0 top-2">
            <Link
              to="/"
              className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary"
            >
              <IoIosArrowBack size={20} />
            </Link>
          </div>
          <span className="text-4xl font-bold text-text">{props.title}</span>
        </div>
     
    </>
  );
};

export default PageName;
