import React from "react";
import { Container, Button } from "../components";
import { dataHero } from "../constant";
import { heroImg } from "../assets";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <section className="">
      <div className="w-full min-h-screen bg-[#1C1E53]  flex justify-center items-center">
        <Container className={`mt-36 lg:mt-0`}>
          <div className="w-full flex flex-col md:flex-row gap-10 items-center">
            {/* left */}
            <div className="md:w-8/12 ">
              {dataHero.map((data, index) => (
                <div className="flex flex-col gap-10 md:gap-5" key={index}>
                  <h1 className="text-white font-bold md:text-xl text-4xl  lg:text-4xl leading-[160%] ">
                    {data.title}
                  </h1>
                  <p className="text-slate-300 text-xl md:text-sm leading-[160%]">
                    {data.description}
                  </p>
                  {/* button */}
                  <div className="flex gap-5 items-center font-medium mt-10 md:mt-0 ">
                    <button className="py-4 px-7 rounded-md bg-[#FCD980] md:py-2 md:text-[10px] md:px-4">
                      Lihat Kursus
                    </button>
                    <div className="flex items-center gap-2 text-white font-medium text-[10px]">
                      <button>Lihat Kursus </button>
                      <BsArrowRight />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* right */}
            <div className="">
              <div className="">
                <img src={heroImg} alt="image hero" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}

export default Hero;
