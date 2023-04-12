import React from "react";
import { countUp, sponsor } from "../constant";
import { Container } from "../components";
function Brands() {
  return (
    <div className="h-56 w-full bg-[#EEF4FA] lg:overflow-hidden lg:flex lg:justify-center  ">
      <Container className={`max-w-[1440px] w-full `}>
        <div className="pt-11 lg:pt-16 mx-auto">
          <div className="flex flex-col lg:flex-row justify-center mr-10 gap-5 lg:justify-between lg:items-end lg:max-w-[1440px]">
            <div className="flex  justify-center  w-full   lg:gap-5">
              {countUp.map((item, index) => (
                <div
                  className="flex text-center flex-col gap-2 justify-center "
                  key={index}
                >
                  <p className="font-bold text-gray-800 text-[32px] ">
                    {item.number.toLocaleString("id-ID")}+
                  </p>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="flex  justify-center lg:justify-normal ">
              {sponsor.map((item, index) => (
                <div
                  className="flex  items-center  uppercase font-bold text-3xl lg:text-sm mr-12 lg:mr-5 mt-2"
                  key={index}
                >
                  <img
                    className="w-10 lg:w-5 lg:h-5 h-10 mr-3
                  "
                    src={item.icon}
                    alt={item.title}
                  />
                  <p className="">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Brands;
