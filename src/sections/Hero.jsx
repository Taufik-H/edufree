import React from "react";
import { Container, Button } from "../components";
import { dataHero } from "../constant";
import { hero1, hero2, hero3 } from "../assets";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <>
      <div className="w-full min-h-screen bg-[#1C1E53] overflow-hidden relative lg:static">
        <div className="absolute lg:static top-0 left-0 z-50 w-full lg:flex lg:justify-center lg:mt-10">
          <Container className="max-w-[1440px] h-full lg:flex lg:items-center justify-between">
            {dataHero.map((data, index) => (
              <div className="z-50 mt-10 lg:mt-0 sm:mt-5 lg:w-7/12" key={index}>
                <h1 className="text-[42px]   font-bold text-white pt-20  leading-[67.2px]">
                  {data.title}
                </h1>
                <p className="text-gray-400 mt-10 sm:mt-5 sm:w-10/12 leading-7">
                  {data.description}
                </p>
                <div className="flex mt-16 sm:mt-10 gap-5 items-center">
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
            <div className="relative max-w-[1000px] hidden lg:block">
              <img
                src={hero1}
                alt="hero image"
                className="w-[467px] h-[325px]"
              />
              <img
                src={hero2}
                alt="hero image"
                className="absolute left-[-80px] bottom-[-60px]"
              />
              <img
                src={hero3}
                alt="hero image"
                className="absolute -right-10 bottom-[-60px]"
              />
            </div>
          </Container>
        </div>
        <div className="absolute top-0 left-0 w-full h-full lg:hidden">
          <img
            src={hero3}
            alt=""
            className="w-10 ml-5 mt-10 sm:mt-16 sm:w-7 md:ml-[70px] md:w-16 md:mt-10"
          />
          <img
            src={hero1}
            alt="hero image"
            className="absolute top-3 -right-[150px]    w-[1000px] blur-sm opacity-50 "
          />
          <img
            src={hero2}
            alt="hero image"
            className="absolute top-[300px] left-[40px]    w-[200px] blur-sm opacity-50 "
          />
        </div>
      </div>
    </>
  );
}

export default Hero;
