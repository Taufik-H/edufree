import React from "react";
import { countUp } from "../constant";
import { Container } from "../components";
function Brands() {
  return (
    <div className="h-56 w-full bg-[#EEF4FA] overflow-hidden">
      <Container>
        <div className="mt-10">
          <div className="flex  justify-between">
            {countUp.map((item, index) => (
              <div className="flex text-center flex-col gap-2 " key={index}>
                <p className="font-bold text-gray-800 text-[32px]">
                  {item.number}+
                </p>
                <p className="text-gray-500 text-sm">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Brands;
