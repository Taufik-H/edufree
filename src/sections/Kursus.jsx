import React from "react";
import { Container } from "../components";
function Kursus() {
  return (
    <section>
      <div className=" w-full  mt-10 mb-20">
        <div className="">
          <Container>
            <div className="w-full flex md:justify-between flex-col justify-center">
              <div className="text-3xl font-semibold">
                Rekomendasi Kursus Untuk Kamu
              </div>
              <div className="flex items-center justify-between  mt-10">
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
                    className="cursor-pointer bg-[#FCD980] px-5 py-2.5"
                  >
                    Lihat Semua
                  </a>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}

export default Kursus;
