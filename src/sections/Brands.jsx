import React from "react";
import { countUp, sponsor } from "../constant";
import { Container } from "../components";
function Brands() {
  return (
    <section className="w-full bg-[#EEF4FA]  flex justify-center items-center   ">
      <Container className={`w-full py-10`}>
        <div className="flex flex-col lg:flex-row w-full justify-center gap-3 lg:justify-between lg:items-end lg:max-w-[1440px]">
          <div className="flex justify-between lg:justify-center  lg:gap-5">
            {countUp.map((item, index) => (
              <div className="flex  flex-col text-center " key={index}>
                <p className="font-bold text-gray-800 text-[32px] ">
                  {item.number.toLocaleString("id-ID")}+
                </p>
                <p className="text-gray-500 text-sm">{item.title}</p>
              </div>
            ))}
          </div>
          <div className="flex  justify-around lg:justify-normal flex-wrap lg:flex-nowrap ">
            {sponsor.map((item, index) => (
              <div
                className="flex  items-center  uppercase font-bold text-sm  mr-5 lg:mr-5 mt-2"
                key={index}
              >
                <img
                  className="w-5 lg:w-5 lg:h-5 h-10 mr-3
                  "
                  src={item.icon}
                  alt={item.title}
                />
                <p className="">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Brands;
