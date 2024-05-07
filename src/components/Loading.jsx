import React from "react";

function Loading() {
  return (
    <div className="loader-container w-full flex justify-center items-center">
      <div
        className="inline-block h-12 w-12 animate-spin rounded-full border-8 border-solid border-[#222831] border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
        <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
          Loading...
        </span>
      </div>
    </div>
  );
}

export default Loading;
