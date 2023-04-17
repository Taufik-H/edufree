import React from "react";
import { Container } from "../components";
import { clock, kursusImg1, play, star, user } from "../assets";
import { dataKursus } from "../constant";
function Kursus() {
  return (
    <section>
      <div className="w-full flex justify-center ">
        <div className=" mt-10 mb-20">
          <Container className={`flex-col gap-10`}>
            <div className="w-full flex md:justify-between flex-col md:flex-row md:items-center justify-center ">
              <div className="">
                <div className="md:text-2xl text-3xl font-semibold ">
                  Rekomendasi Kursus
                </div>
                <div className="md:text-2xl text-3xl font-semibold ">
                  Untuk Kamu
                </div>
              </div>
              <div className="flex items-center justify-between  mt-10 md:justify-start md:gap-5 ">
                <select className="py-2   text-xl  font-medium bg-transparent">
                  <option value="" disabled>
                    Kategori
                  </option>
                  <option value="">Bahasa Inggris</option>
                  <option value="">Pemrograman</option>
                </select>
                <div className="">
                  <a
                    href="#"
                    className="cursor-pointer bg-[#FCD980] px-7 py-4 font-medium"
                  >
                    Lihat Semua
                  </a>
                </div>
              </div>
            </div>
            <div className="p-[1px] w-full bg-gray-200" />
            <div className="flex flex-row flex-wrap justify-center md:justify-evenly gap-5 mt-5 w-full ">
              {dataKursus.map((data, index) => (
                <div className="w-full md:max-w-[350px]" key={index}>
                  <img
                    src={data.image}
                    alt="image"
                    className="object-cover w-full md:h-[200px] md:w-[400px]"
                  />
                  <div className="relative">
                    <div className="absolute bg-[#1C1E53] right-5 -top-3 px-4 rounded-full py-[5px]">
                      <div className="flex">
                        <img src={star} alt="" />
                        <p className="text-white text-sm">
                          {data.rate.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 w-full ">
                    <h1 className="font-medium text-xl">{data.title}</h1>
                    <p className="w-full text-[16px] mt-2">
                      {data.description}
                    </p>
                    <div className="flex  gap-4 mt-5 text-sm items-center ">
                      <div className="flex gap-2">
                        <img src={clock} alt="" />
                        <span>{data.jam} Jam</span>
                      </div>
                      <div className="flex gap-2">
                        <img src={play} alt="" />
                        <span>{data.video} Video</span>
                      </div>
                      <div className="flex gap-2">
                        <img src={user} alt="" />
                        <span className="w-full">
                          {data.siswa.toLocaleString("id-ID")} Siswa
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Kursus;
