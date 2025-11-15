import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/slices/userSlice";
import { useState, useEffect } from "react";
import PageName from "../components/reuseable/PageName";
import { IoPersonSharp } from "react-icons/io5";
import profile from "../assets/profile.png";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  // Form states — pre-filled from Redux/localStorage
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    gender: "",
    dob: "",
  });

  // Load user data when component mounts
  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        email: user.email || "",
        phoneNumber: user.phoneNumber || user.phone || "",
        gender: user.gender || "",
        dob: user.dob || "",
      });
    }
  }, [user]);

  // Update inputs
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  // Save profile + update localStorage automatically through Redux
  const handleSave = () => {
    dispatch(updateUser(formData));
    alert("Profile Updated Successfully!");
    navigate("/");
    // Optional: navigate back
    // navigate(-1);
  };

  const formSections = [
    {
      id: "profile",
      title: "Personal Info",
      icon: IoPersonSharp,
      fields: [
        { id: "firstName", label: "First Name" },
        { id: "lastName", label: "Last Name" },
        { id: "email", label: "Email" },
        { id: "phoneNumber", label: "Phone Number" },
        { id: "gender", label: "Gender" },
        { id: "dob", label: "Date Of Birth" },
      ],
    },
  ];

  return (
    <section className="text-center w-[80%] mx-auto">
      <PageName title="My Detail" />

      <p className="text-[14px] text-gray-400 font-semibold">
        To update your details, edit the information below:
      </p>

      <div>
        <img
          className="w-[100px] h-[100px] rounded-full mx-auto my-2"
          src={profile}
        />
        <button className="bg-primary py-[6px] px-[16px] rounded-[4px] text-white">
          Upload
        </button>
      </div>

      {formSections.map((section) => (
        <div key={section.id} className="px-[2%] md:px-[10%] lg:px-[20%] mb-10">
          <p className="flex items-center gap-2 text-xl font-semibold mb-6">
            <section.icon size={24} />
            {section.title}
          </p>

          {/* Input fields */}
          <div className="grid md:grid-cols-2 gap-4">
            {section.fields.map((field) => (
              <div
                key={field.id}
                className="relative bg-surface pt-6 rounded-md"
              >
                <input
                  type="text"
                  id={field.id}
                  value={formData[field.id]}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer bg-surface py-2 pl-3 w-full border-0 border-b-2 border-gray-300 focus:border-red-500 outline-none"
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-3 top-6 text-sm transition-all peer-focus:top-1 peer-focus:text-sm peer-placeholder-shown:text-base peer-placeholder-shown:top-6"
                >
                  {field.label}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleSave}
        className="w-[40%] bg-red-300 py-[8px] px-[16px] rounded-[4px]"
      >
        Save
      </button>
    </section>
  );
};

export default EditProfile;
