import React from "react";

function Container({ children, className }) {
  return (
    <>
      <div className={`mx-5 md:mx-[70px] ${className} max-w-[1440px] flex `}>
        {children}
      </div>
    </>
  );
}

export default Container;
