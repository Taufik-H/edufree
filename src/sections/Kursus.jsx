import React from "react";
import { Container } from "../components";
function Kursus() {
  return (
    <section>
      <div className=" w-full  mt-10 mb-20">
        <div className="">
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
                <select className="py-2   text-xl  font-medium">
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
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Kursus;
