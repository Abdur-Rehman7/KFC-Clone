import { IoLocate } from "react-icons/io5";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { saveAddress } from "../../redux/slices/addressSlice";

function AddressField(props) {
  const dispatch = useDispatch();
  const selectedAddress = useSelector((state) => state.address.selectedAddress);

  const myAddress = [
    {
      id: "myAddress",
      title: "Kindly enable your location or use Search Location",
      icon: IoLocate,
      fields: [
        {
          id: "house",
          placeholder: "House / Flat / Apartment / Office Number *",
        },
        {
          id: "street",
          placeholder:
            "Block / Sector / Street / Building / Floor Name or Number *",
        },
        {
          id: "countryOfBirth",
          placeholder: "Main Area / Town / Nearest Landmark *",
        },
      ],
      radioOptions: [
        { value: "home", label: "Home" },
        { value: "office", label: "Office" },
        { value: "Other", label: "Other" },
      ],
    },
  ];

  // State to store input values and selected radio
  const [formValues, setFormValues] = useState({
    house: "",
    street: "",
    countryOfBirth: "",
    type: "", // radio button
  });

  // Handle input change
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({ ...prev, [id]: value }));
  };

  // Handle radio change
  const handleRadioChange = (e) => {
    setFormValues((prev) => ({ ...prev, type: e.target.value }));
  };

  // Check if all fields are filled
  const isFormValid =
    formValues.house.trim() &&
    formValues.street.trim() &&
    formValues.countryOfBirth.trim() &&
    formValues.type;

  // Handle Save
  const handleSave = () => {
    if (!isFormValid) return;

    // Save in Redux
    dispatch(saveAddress({ ...formValues, id: Date.now() }));

    // Save in localStorage
    const existing = JSON.parse(localStorage.getItem("addresses")) || [];
    localStorage.setItem(
      "addresses",
      JSON.stringify([...existing, formValues])
    );

    // RESET FORM (optional)
    setFormValues({
      house: "",
      street: "",
      countryOfBirth: "",
      type: "",
    });

    // CLOSE FORM
    if (props.onSaveDone) {
      props.onSaveDone();
    }
  };

  return (
    <>
      <div className="">
        {myAddress.map((section) => (
          <div key={section.id} className="sm:px-[2%] mb-10">
            {/* Section title with icon */}
            <p className="flex items-center gap-2 text-xl font-semibold text-text mb-6">
              <section.icon size={24} />
              {section.title}
            </p>

            {/* Input fields grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-4">
              {section.fields.map((field, index) => (
                <div
                  key={field.id}
                  className={`relative bg-surface pt-6 rounded-md ${
                    index === section.fields.length - 1 ? "col-span-2" : ""
                  }`}
                >
                  <input
                    type="text"
                    id={field.id}
                    value={formValues[field.id]}
                    placeholder={field.placeholder}
                    onChange={handleChange}
                    className="peer bg-surface py-2 pl-3 block w-full border-0 border-b-2 border-gray-300 text-current text-inherit leading-[1.4375em] font-inherit outline-none focus:border-red-500 transition-colors duration-200"
                  />
                </div>
              ))}

              {/* Radio buttons (full width, centered) */}
              <div className="col-span-2 flex gap-4 mt-4 justify-center">
                {section.radioOptions?.map((option, idx) => (
                  <label key={idx} className="flex items-center gap-2">
                    <input
                      type="radio"
                      name={`option-${section.id}`}
                      value={option.value}
                      checked={formValues.type === option.value} // ✅ FIXED
                      onChange={handleRadioChange}
                      className="accent-red-500"
                    />
                    {option.label}
                  </label>
                ))}
              </div>

              {/* Save button */}
              <div className="col-span-2 mt-4">
                <button
                  onClick={handleSave}
                  disabled={!isFormValid}
                  className={`w-full py-2 px-4 text-[20px] font-semibold rounded-[4px] transition-colors duration-200 ${
                    isFormValid
                      ? "bg-primary text-white hover:bg-red-600"
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  }`}
                >
                  + SAVE ADDRESS
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AddressField;
