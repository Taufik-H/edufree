import React from "react";
import { Container, Button } from "../components";
import { dataHero } from "../constant";
import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <>
      <div className=" w-full h-[100vh] bg-[#1C1E53]">
        <Container className={`bg-[#1c1e53] max-w-[1440px] h-full`}>
          {dataHero.map((data, index) => (
            <div className="" key={index}>
              <h1 className="text-5xl spac font-bold text-white pt-20 leading-[67.2px] ">
                {data.title}
              </h1>
              <p className="text-gray-400 pt-5 leading-7">{data.description}</p>
              <div className="flex pt-10 gap-5 items-center">
                <Button
                  label={"Lihat Kursus"}
                  className={`bg-[#FCD980] w-44 h-14 font-medium rounded-[5px]`}
                  icon={BsArrowRight}
                />

                <button className="  text-white flex items-center gap-2">
                  <a href="#" className="text-sm">
                    {" "}
                    Lihat Alur Belajar
                  </a>
                  <BsArrowRight />
                </button>
              </div>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}

export default Hero;
