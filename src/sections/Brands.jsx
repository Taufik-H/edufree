import React from "react";
import { countUp, sponsor } from "../constant";
import { Container } from "../components";
function Brands() {
  return (
    <div className="h-56 w-full bg-[#EEF4FA] lg:overflow-hidden ">
      <Container>
        <div className="pt-11 lg:pt-16 ">
          <div className="flex flex-col justify-center gap-5">
            <div className="flex  justify-evenly">
              {countUp.map((item, index) => (
                <div className="flex text-center flex-col gap-2 " key={index}>
                  <p className="font-bold text-gray-800 text-[32px]">
                    {item.number.toLocaleString("id-ID")}+
                  </p>
                  <p className="text-gray-500 text-sm">{item.title}</p>
                </div>
              ))}
            </div>
            <div className="flex  ">
              {sponsor.map((item, index) => (
                <div
                  className="flex items-center  uppercase font-bold text-3xl mr-12 mt-2"
                  key={index}
                >
                  <img
                    className="w-10 h-10 mr-3
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
