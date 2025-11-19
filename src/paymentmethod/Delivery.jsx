import { useSelector } from "react-redux";
import { LuPhone } from "react-icons/lu";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import delivery from "./assets/delivery.png";
import addressicon from "../assets/address-icon.png";

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
        {selectedAddress ? (
          <div>
            <p className="text-[20px] pb-[16px] text-left font-semibold">
              We'll deliver your order here
            </p>
            <div className="flex text-left gap-3">
              <div>
                <img src={addressicon} className="w-[30px] h-[30px]" />
              </div>

              <div>
                <button className="bg-primary py-[3px] px-[6px] rounded text-white">Address</button>
                <p>
                  {selectedAddress.house} / {selectedAddress.street} /  {selectedAddress.mainArea}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No address selected...</p>
        )}
      </div>
    </div>
  );
};

export default Delivery;
