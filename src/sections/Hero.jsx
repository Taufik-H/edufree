import React from "react";
import { Container, Button } from "../components";
import { dataHero } from "../constant";
import { heroImg } from "../assets";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <section className="">
      <div className="w-full min-h-screen bg-[#1C1E53] px-auto flex justify-center">
        <Container className={`mt-24`}>
          <div className="w-ful flex flex-col gap-10">
            {/* left */}
            <div className="">
              {dataHero.map((data, index) => (
                <div className="flex flex-col gap-5" key={index}>
                  <h1 className="text-white font-bold text-4xl leading-[160%]">
                    {data.title}
                  </h1>
                  <p className="text-slate-300 leading-[150%]">
                    {data.description}
                  </p>
                  {/* button */}
                  <div className="flex gap-5 items-center font-medium mt-10 ">
                    <button className="py-4 px-7 rounded-md bg-[#FCD980]">
                      Lihat Kursus
                    </button>
                    <div className="flex items-center gap-2 text-white font-medium">
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
