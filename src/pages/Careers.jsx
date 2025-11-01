// Careers.jsx
import { IoPersonSharp } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { IoStar } from "react-icons/io5";
import { SiEducative } from "react-icons/si";
import { TfiBag } from "react-icons/tfi";

import OurValue from "../components/careers/OurValue";
const Careers = () => {
  const formSections = [
    {
      id: "personnelInfo",
      title: "Personnel Info",
      icon: IoPersonSharp,
      fields: [
        { id: "fullName", label: "Full Name" },
        { id: "dateOfBirth", label: "Date of Birth" },
        { id: "countryOfBirth", label: "country of Birth" },
        { id: "cityOfBirth", label: "City of Birth" },
        { id: "cnic", label: "CNIC" },
        { id: "cnicExpiryDate", label: "CNIC Experiy Date" },
        { id: "maritalStatus", label: "Marital Status" },
        { id: "gender", label: "Gender" },
        { id: "religion", label: "Religion" },
        { id: "disablity", label: "Disablity" },
      ],
    },
    {
      id: "address",
      title: "Address",
      icon: MdLocationOn,
      fields: [
        { id: "phone", label: "Phone" },
        { id: "adress", label: "Adress" },
        { id: "country", label: "Country" },
        { id: "stateProvince", label: "State / Province" },
        { id: "city", label: "City" },
      ],
    },
    {
      id: "jobPosting",
      title: "Job Posting",
      icon: TfiBag,
      fields: [
        {
          id: "referralSource",
          label: "How were you referred to us? *",
        },
        {
          id: "cityApplyingFor",
          label: "City Applying For *",
        },
        {
          id: "positionApplyingFor",
          label: "Position You are Applying For *",
        },
        {
          id: "typeOfShift",
          label: "Type of Shift (Only for instore) *",
        },
        {
          id: "typeOfEmployment",
          label: "Type of Employment (Only for instore) *",
        },
      ],
    },
    {
      id: "qualifiction",
      title: "Qualification",
      icon: SiEducative,
      fields: [
        { id: "degree", label: "Degree *" },
        { id: "majors", label: "Majors *" },
        { id: "qualificationYear", label: "Qualification Year *" },
        { id: "placeOfTuition", label: "Place of Tuition *" },
      ],
    },
    {
      id: "experience",
      title: "Experience",
      icon: IoStar,
      fields: [
        { id: "totalExperience", label: "Total Years of Experience *" },
        { id: "recentPosition", label: "Recent Position *" },
        { id: "recentCompany", label: "Recent Company *" },
      ],
    },
  ];
  return (
    <>
      <section className="text-center mx-[32px] px-[12px]">
        <iframe
          className="w-full"
          height="340"
          src="https://www.youtube-nocookie.com/embed/rehRWlQy9WE?modestbranding=1&rel=0&controls=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <div>
          <p>Our Values</p>
          <OurValue />
        </div>
        <div>
          <p className="text-[32px] font-semibold mt-[48px] mb-[8px]">
            Careers
          </p>

          <div className=" ">
            {formSections.map((section) => (
              <div
                key={section.id}
                className="px-[2%] md:px-[10%] lg:px-[20%] mb-10"
              >
                {/* Section title with icon */}
                <p className="flex items-center gap-2 text-xl font-semibold text-text mb-6">
                  <section.icon size={24} />
                  {section.title}
                </p>

                {/* Input fields grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
                  {section.fields.map((field) => (
                    <div
                      key={field.id}
                      className="relative bg-surface pt-6 rounded-md"
                    >
                      <input
                        type="text"
                        id={field.id}
                        placeholder=" "
                        className="peer bg-surface py-2 pl-3 block w-full border-0 border-b-2 border-gray-300 text-current text-inherit leading-[1.4375em] font-inherit outline-none focus:border-red-500 transition-colors duration-200"
                      />
                      <label
                        htmlFor={field.id}
                        className="absolute left-3 top-6 text-text text-sm transition-all duration-200 
                    peer-placeholder-shown:top-6 peer-placeholder-shown:text-text peer-placeholder-shown:text-base
                    peer-focus:top-1 peer-focus:text-text peer-focus:text-sm"
                      >
                        {field.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="px-[2%] md:px-[10%] lg:px-[20%] mb-10">
            <p className="mt-[48px] mb-[8px] px-[12px] text-[40px] font-semibold">
              Applicant agreement
            </p>
            <p className="mt-[24px] mb-[16px] px-[12px] text-left">
              I certify that all information provided in this application is
              true and complete. I understand that any false information or
              omission may disqualify me from further consideration for
              employment and may result in my dismissal If discovered at a later
              date. I authorize and agree to cooperate in a thorough
              investigation of all statements made herein and other matters
              relating to my background and qualification. I understand that any
              investigation conducted may include a request for employment,
              educational and criminal history. I authorize any person, school,
              current and former employer, consumer reporting agency and any
              other organization or agency to provide information relevant to
              such investigation and I hereby release all persons and
              corporations requesting or supplying information pursuant to such
              investigation from all liability or responsibility to me for doing
              so. I understand that I have the right to make a written request
              within a reasonable period of time for complete disclosure of the
              nature and scope of any investigation. I further authorize any
              physician or hospital to release any information which may be
              necessary to determine my ability to perform the job for which I
              am being considered or any future job in the event that I am
              hired. I UNDERSTAND THAT THIS APPLICATION OR SUBSEQUENT EMPLOYMENT
              DOES NOT CREATE A CONTRACT OF EMPLOYMENT NOR GUARANTEE EMPLOYMENT
              FOR ANY DEFINITE PERIOD OF TIME.
            </p>

            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                className="appearance-none h-5 w-5 border-2 border-red-500 rounded-sm checked:bg-red-500 checked:border-red-500 transition-all duration-200 cursor-pointer"
              />
              <span className="text-base text-black">
                Sign up now to avail exclusive rewards & discounts
              </span>
            </label>

            <button className="font-semibold p-[8px] mt-[24px] bg-red-100 px-8">Apply</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Careers;
