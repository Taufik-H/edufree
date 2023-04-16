import React from "react";
import { Container } from "../components";
import { benefit } from "../constant";
function Benefits() {
  return (
    <section className="mt-32 mb-20  w-full">
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex justify-center ">
          <Container className={``}>
            <div className="w-full ">
              <div className="text-center text-3xl  tracking-[0.008em] font-medium mb-20">
                <p>Keuntungan Bergabung Dengan</p>
                <p>E-Learning EDUFREE</p>
              </div>
              <div className="flex flex-wrap justify-evenly  w-full">
                {benefit.map((data, index) => (
                  <div
                    className="bg-[#F4F6FC] w-[320px] min-h-[250px] p-7 gap-10 mb-10"
                    key={index}
                  >
                    <div className="z-0 w-10 h-10 mb-5 rounded-md bg-[#2405F2] relative overflow-hidden flex items-center justify-center">
                      <p className="text-white font-medium">{index + 1}</p>
                      <div className="w-10 h-10 rounded-md bg-[#FCD980] absolute left-[-28px] top-[11px]"></div>
                    </div>
                    <p className="font-medium mb-3">{data.title}</p>
                    <p className="text-gray-600">{data.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Benefits;
