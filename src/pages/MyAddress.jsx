import PageName from "../components/reuseable/PageName";
import AddressField from "../components/myaddress/AddressField";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAddress, selectAddress } from "../redux/slices/addressSlice";

const MyAddress = () => {
  const dispatch = useDispatch();
  const [showAddressField, setShowAddressField] = useState(false);

  // Get saved addresses from Redux
  const addresses = useSelector((state) => state.address.list);
  const selectedAddress = useSelector((state) => state.address.selectedAddress);

  return (
    <section className="text-center w-[80%] mx-auto">
      <PageName title="Address" />
      {!showAddressField &&
        addresses.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-md text-left bg-white shadow relative"
          >
            <p>
              <strong>House:</strong> {item.house}
            </p>
            <p>
              <strong>Street:</strong> {item.street}
            </p>
            <p>
              <strong>Area:</strong> {item.countryOfBirth}
            </p>
            <p>
              <strong>Type:</strong> {item.type}
            </p>

            <div className="flex gap-2 mt-3">
              <button
                onClick={() => dispatch(selectAddress(item))}
                className={`flex-1 px-4 py-2 rounded-md font-semibold ${
                  selectedAddress?.id === item.id
                    ? "bg-green-600 text-white"
                    : "bg-primary text-white"
                }`}
              >
                {selectedAddress?.id === item.id
                  ? "Selected"
                  : "Select This Address"}
              </button>

              <button
                onClick={() => {
                  dispatch({ type: "address/deleteAddress", payload: item.id });
                  const updated = addresses.filter(
                    (addr) => addr.id !== item.id
                  );
                  localStorage.setItem("addresses", JSON.stringify(updated));

                  // Optional: if the deleted address was selected, clear selected
                  if (selectedAddress?.id === item.id) {
                    dispatch({ type: "address/selectAddress", payload: null });
                  }
                }}
                className="flex-1 px-4 py-2 rounded-md font-semibold bg-red-600 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        ))}

      {/* SHOW ADDRESS FORM */}
      {showAddressField && (
        <AddressField onSaveDone={() => setShowAddressField(false)} />
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
