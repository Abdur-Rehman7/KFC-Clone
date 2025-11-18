import { useSelector } from "react-redux";
import { LuPhone } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import delivery from "./assets/delivery.png";

const Delivery = () => {
  const selectedAddress = useSelector((state) => state.address.selectedAddress);

  return (
    <div className="bg-card rounded-[5px] p-2 h-auto overflow-hidden flex flex-col">
      <div className="flex border-b border-text gap-3 p-3">
        <Link
          to="/exploremenu"
          className="w-[30px] h-[30px] flex items-center justify-center rounded-full border-2 border-primary hover:bg-primary"
        >
          <IoIosArrowBack size={20} />
        </Link>

        <p className="font-semibold text-[20px]">Your Information</p>
      </div>

      <div className="flex justify-between bg-body font-semibold text-[20px] mt-[20px] p-[10px]">
        <p>Abdur Rehman</p>
        <p className="flex items-center gap-3">
          <LuPhone /> 03377763915
        </p>
      </div>

      <div className="flex text-left bg-body mt-[20px] p-[10px] gap-3">
        <img className="w-[50px] h-[50px]" src={delivery} />
        <div>
          <p className="text-[18px] font-bold">Delivery From</p>
          <p className="font-semibold">Sargodha</p>
        </div>
      </div>

      <div className="mt-4 bg-body p-4 rounded-md shadow">
        <p className="text-[18px] font-bold mb-2">Delivery Address</p>

        {selectedAddress ? (
          <div>
            <p><strong>House:</strong> {selectedAddress.house}</p>
            <p><strong>Street:</strong> {selectedAddress.street}</p>
            <p><strong>Area:</strong> {selectedAddress.countryOfBirth}</p>
            <p><strong>Type:</strong> {selectedAddress.type}</p>
          </div>
        ) : (
          <p className="text-gray-500">No address selected...</p>
        )}
      </div>
    </div>
  );
};

export default Delivery;
