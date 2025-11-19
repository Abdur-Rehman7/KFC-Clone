import PageName from "../components/reuseable/PageName";
import AddressField from "../components/myaddress/AddressField";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAddress, selectAddress } from "../redux/slices/addressSlice";
import { RxHome } from "react-icons/rx";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RiBuilding2Fill } from "react-icons/ri";
import { BiSolidBuildingHouse } from "react-icons/bi";
import { MdModeEdit } from "react-icons/md";

const MyAddress = () => {
  const dispatch = useDispatch();
  const [showAddressField, setShowAddressField] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  // Get saved addresses from Redux
  const addresses = useSelector((state) => state.address.list);
  const selectedAddress = useSelector((state) => state.address.selectedAddress);
  const typeIcons = {
    home: <RxHome className="w-[20px] h-[20px]" />,
    office: <RiBuilding2Fill className="w-[20px] h-[20px]" />,
    Other: <BiSolidBuildingHouse className="w-[20px] h-[20px]" />,
  };

  return (
    <section className="text-center w-[80%] mx-auto">
      <PageName title="Address" />
      {!showAddressField &&
        addresses.map((item) => (
          <div
            key={item.id}
            className="border-b-[3px] border-primary p-[15px] mb-[8px] rounded-[5px] text-left bg-white shadow relative"
          >
            <div>
              <div className="flex justify-between ">
                <div className="flex items-center gap-4 font-bold">
                  {typeIcons[item.type] || (
                    <RxHome className="w-[20px] h-[20px]" />
                  )}
                  {item.type}
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => {
                      dispatch({
                        type: "address/deleteAddress",
                        payload: item.id,
                      });
                      const updated = addresses.filter(
                        (addr) => addr.id !== item.id
                      );
                      localStorage.setItem(
                        "addresses",
                        JSON.stringify(updated)
                      );

                      if (selectedAddress?.id === item.id) {
                        dispatch({
                          type: "address/selectAddress",
                          payload: null,
                        });
                      }
                    }}
                    aria-label="Delete Address"
                  >
                    <RiDeleteBin6Line className="w-[20px] h-[20px]" />
                  </button>
                  <button
                    onClick={() => {
                      setEditingAddress(item);
                      setShowAddressField(true);
                    }}
                  >
                    <MdModeEdit className="w-[20px] h-[20px]" />
                  </button>
                  <button
                    onClick={() => dispatch(selectAddress(item))}
                    className={`
    relative w-14 h-7 rounded-full transition-all duration-300 flex items-center
    ${selectedAddress?.id === item.id ? "bg-red-200" : "bg-gray-200"}
  `}
                  >
                    <span
                      className={`
      w-6 h-6 rounded-full bg-red-300 shadow transition-all duration-300
      ${selectedAddress?.id === item.id ? "translate-x-7" : "translate-x-1"}
    `}
                    ></span>
                  </button>
                </div>
              </div>
              <p className="text-[16px] mb-[2px]">
                {item.house},{item.street},{item.mainArea}
              </p>
            </div>
          </div>
        ))}

      {/* SHOW ADDRESS FORM */}
      {showAddressField && (
        <AddressField
          editingAddress={editingAddress} // ✅ Pass the editing address
          onSaveDone={() => {
            setShowAddressField(false);
            setEditingAddress(null); // ✅ Reset editing state
          }}
        />
      )}

      {/* SHOW BUTTON ONLY IF FORM IS HIDDEN */}
      {!showAddressField && (
        <button
          onClick={() => setShowAddressField(true)}
          className="bg-primary text-white text-[20px] font-semibold py-[8px] px-[16px] rounded-[4px] mt-4"
        >
          + Add Address
        </button>
      )}
    </section>
  );
};

export default MyAddress;
