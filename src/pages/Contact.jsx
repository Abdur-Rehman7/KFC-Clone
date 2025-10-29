import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  const contactInfo = [
    {
      title: "Head Office",
      phone: "0213-5877976",
      locationTitle: "Location",
      address:
        "Ocean Tower, 20th Floor, G-3, Block -9, Scheme 5, Main Clifton Road, Karachi, Pakistan",
    },
    {
      title: "Regional Office",
      phone: "042-35884570",
      locationTitle: "Location",
      address: "27-A Ali Block New Garden Town Opposite Barkat Market Lahore",
    },
    {
      title: "Islamabad Office",
      phone: "0512726877",
      locationTitle: "Location",
      address:
        "United Bakery Building, 11، School Rd, F-6 Markaz F-6, Islamabad, Islamabad Capital Territory 44000",
    },
  ];

  const basicContact = [
  {
    title: "Phone",
    value: "0213-5877976",
    icon: <FaPhoneAlt className="text-primary" />,
  },
  {
    title: "Email",
    value: "kabdurrehman111@gmail.com",
    icon: <MdEmail className="text-primary" />,
  },
]

  return (
    <section className="mx-[32px] mt-4 text-text">
      <div className="relative flex items-center justify-center mb-[35px]">
        <div className="absolute left-0 top-2">
          <Link
            to="/"
            className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 border-primary"
          >
            <IoIosArrowBack size={20} />
          </Link>
        </div>
        <span className="text-4xl font-bold text-text">Contact Us</span>
      </div>

      <div className="grid grid-cols xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-2">
        {contactInfo.map((item, index) => (
          <div key={index} className="px-[12px]">
            <div className="bg-card p-[20px] rounded-[5px] h-[230px] lg:h-[230px] md:h-[250px]">
              <p className="flex flex-row items-center">
                <FaPhoneAlt className="text-primary" />
                <span className="text-[20px] font-bold ml-[10px]">
                  {item.title}
                </span>
              </p>
              <p className="text-[17px] font-semibold mb-[8px]">{item.phone}</p>

              <div>
                <p className="flex flex-row items-center">
                  <HiLocationMarker className="text-primary" />
                  <span className="text-[20px] font-bold ml-[10px]">
                    {item.locationTitle}
                  </span>
                </p>
                <p className="text-[17px] font-semibold mb-[8px]">
                  {item.address}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className="grid grid-cols lg:grid-cols-2 md:grid-cols-2 gap-2 mt-[10px] ">
        {basicContact.map((item, index) => (
          <div key={index} className="px-[12px]">
            <div className="bg-card p-[20px] rounded-[5px]">
              <p className="flex flex-row items-center">
                {item.icon}
                <span className="text-[20px] font-bold ml-[10px]">
                  {item.title}
                </span>
              </p>
              <p className="text-[17px] font-semibold mb-[8px]">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
