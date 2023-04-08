import React from "react";
import { Container, Button } from "../components";
import { dataHero } from "../constant";
import { hero1, hero2, hero3 } from "../assets";
import { BsArrowRight } from "react-icons/bs";
function Hero() {
  return (
    <>
      <div className=" w-full min-h-[100vh] bg-[#1C1E53] overflow-hidden">
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
          <div className="blur-lg">
            <div className="relative -mt-[400px]  ">
              <img
                src={hero1}
                alt="hero image"
                loading="lazy"
                className="absolute -right-[100px] -top-[100px] opacity-70 w-auto h-[1000px] object-fill"
              />
              <img
                src={hero2}
                alt="hero image"
                className="absolute top-10 opacity-50"
              />
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Hero;
