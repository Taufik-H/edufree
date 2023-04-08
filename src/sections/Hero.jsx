import React from "react";
import { Container, Button } from "../components";
import { dataHero } from "../constant";
import { hero1, hero3 } from "../assets";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#1C1E53] overflow-hidden relative">
        <div className="absolute top-0 left-0 z-50 w-full">
          <Container className="max-w-[1440px] h-full">
            {dataHero.map((data, index) => (
              <div className="z-50" key={index}>
                <h1 className="text-5xl  font-bold text-white pt-20 leading-[67.2px]">
                  {data.title}
                </h1>
                <p className="text-gray-400 pt-5 leading-7">
                  {data.description}
                </p>
                <div className="flex pt-10 gap-5 items-center">
                  <Button
                    label={"Lihat Kursus"}
                    className="bg-[#FCD980] w-44 h-14 font-medium rounded-[5px]"
                    icon={BsArrowRight}
                  />
                  <button className="text-white flex items-center gap-2">
                    <a href="#" className="text-sm">
                      Lihat Alur Belajar
                    </a>
                    <BsArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </Container>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <img src={hero3} alt="" className="w-10 ml-5 mt-5" />
          <img
            src={hero1}
            alt="hero image"
            className="absolute top-3 -right-[200px]  h-screen  w-[1000px] blur-sm opacity-50"
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
