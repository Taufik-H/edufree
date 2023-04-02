import React from "react";

function Container({ children, className }) {
    return (
        <>
            <div className={`mx-5 md:mx-[70px] ${className}`}>{children}</div>
        </>
    );
}

export default Container;
