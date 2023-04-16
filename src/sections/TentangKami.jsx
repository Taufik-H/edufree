import React from "react";
import { aboutImg } from "../assets";
import { tentang, tentang as ttg } from "../constant";
import { Container } from "../components";

function TentangKami() {
  return (
    <section className="w-full flex justify-center mb-20 items-center">
      <div>
        <Container className={` items-center flex-col lg:flex-row`}>
          <div className="w-full">
            <div className="text-[16px] mb-5">Tentang kami</div>
            {tentang.map((data, index) => (
              <div key={index} className="w-full">
                <h1 className="text-4xl font-semibold text-[#232536] leading-[57px] mb-5">
                  {data.title}
                </h1>
                <p className="text-gray-500">{data.description}</p>
              </div>
            ))}
          </div>
          <div className="w-full  flex lg:justify-end justify-center  ">
            <img
              className="w-[505px] h-[398px] object-contain"
              src={aboutImg}
              alt="about"
            />
          </div>
        </Container>
      </div>
    </section>
  );
}

export default TentangKami;
