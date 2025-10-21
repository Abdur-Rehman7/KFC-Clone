// Dpbtn.jsx
const Dpbtn = ({ img, text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`py-[7px] px-[24px] text-sm font-semibold bg- border-[2px] flex items-center gap-2 text-black rounded-md
        ${active ? "border-primary" : "border-gray-300"}`}
    >
      <img className="w-[25px] h-[25px]" src={img} alt="" />
      <span>{text}</span>
    </button>
  );
};

export default Dpbtn;
