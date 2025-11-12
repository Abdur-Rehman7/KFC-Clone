import PageName from "../components/reuseable/PageName";
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
      title: "Helpline",
      value: "UAN: 111 532 532",
      icon: <FaPhoneAlt className="text-primary" />,
    },
    {
      title: "Complaints Email",
      value: "customercare@kfcpakistan.com",
      icon: <MdEmail className="text-primary" />,
    },
  ];

  return (
    <section className="mt-4 text-text lg:mx-[32px] md:mx-[12px]">
      <PageName title="Contact Us" />

      <div className="grid grid-cols xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 gap-2">
        {contactInfo.map((item, index) => (
          <div key={index} className="px-[12px]">
            <div className="bg-card p-[20px] rounded-[5px] h-[220px] lg:h-[230px] md:h-[280px]">
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
