// MyAddress.jsx
import PageName from "../components/reuseable/PageName";
const MyAddress = () => {
  return (
    <>
      <section className="text-center w-[80%] mx-auto">
        <PageName title="Address"/>

        <button className="bg-primary text-white text-[20px] font-semibold py-[8px] px-[16px] rounded-[4px]">+ Add Address</button>
        
      </section>
    </>
  );
};

export default MyAddress;
