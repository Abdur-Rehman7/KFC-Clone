// TrackOrder.jsx
import PageName from "../components/reuseable/PageName";
const TrackOrder = () => {
  return (
    <>
      <section className="mx-[32px] mt-[20px] mb-[50px]">

        <PageName title="Track Order" />
       
        <div className="text-center  grid grid-cols lg:grid-cols-2">
          <div className="bg-card p-[10px] mb-[8px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-2 ">
              <div className="">
                <div className="relative bg-gray-300 pt-6 rounded-md">
                  <span className="absolute left-2 top-10 -translate-y-3 font-bold text-black pointer-events-none">
                    +92&nbsp;|
                  </span>
                  <input
                    type="text"
                    id={1}
                    placeholder=""
                    className="pl-14 peer bg-gray-300 py-2 block w-full border-0 border-b-2 border-gray-300 text-current text-inherit leading-[1.4375em] font-inherit outline-none focus:border-red-500 transition-colors duration-200"
                  />
                  <label
                    htmlFor={1}
                    className="absolute left-3 top-2 text-text transition-all duration-200 
                    peer-placeholder-shown:top-2 peer-placeholder-shown:text-text peer-placeholder-shown:text-base
                    peer-focus:top-2 peer-focus:text-text"
                  >
                    Alternate Phone Number (3XXXXXXX)
                  </label>
                </div>
              </div>
              <div className="relative bg-gray-300 pt-6 rounded-md">
                <input
                  type="text"
                  id={1}
                  placeholder=" "
                  className="peer bg-gray-300 py-2 pl-3 block w-full border-0 border-b-2 border-gray-300 text-current text-inherit leading-[1.4375em] font-inherit outline-none focus:border-red-500 transition-colors duration-200"
                />
                <label
                  htmlFor={1}
                  className="absolute left-3 top-2 text-text text-sm transition-all duration-200 
                    peer-placeholder-shown:top-6 peer-placeholder-shown:text-text peer-placeholder-shown:text-base
                    peer-focus:top-1 peer-focus:text-text peer-focus:text-sm"
                >
                  Order ID
                </label>
              </div>
            </div>
            <button className="py-[6px] px-[16px] bg-red-200 mt-[24px] mx-auto text-[20px] font-semibold rounded-md">
              TRACK
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrder;
