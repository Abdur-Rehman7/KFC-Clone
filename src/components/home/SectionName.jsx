import React from "react";

const SectionName = (props) => {
  return (
    <>
      <div className="flex justify-between mt-[25px]">
        <div className="mb-[8px] text-[32px] font-semibold">
          <p>{props.sectionname}</p>
          <hr className="w-[70px] h-[3px] bg-primary border-0" />
        </div>

        {props.viewall && (
          <div className="mb-[8px] font-semibold">
            <p>{props.viewall}</p>
            <hr className="w-[70px] h-[3px] bg-primary border-0" />
          </div>
        )}
      </div>
    </>
  );
};

export default SectionName;
