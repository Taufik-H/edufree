// File ini berisi konstanta (content value dari website nya)
import {
  brand1,
  brand2,
  brand3,
  brand4,
  brand5,
  goPage,
  kursusImg1,
  kursusImg2,
  kursusImg3,
} from "../assets";
// NavLink

export const navItem = [
  {
    id: "home",
    title: "home",
  },
  {
    id: "tentangkami",
    title: "tentang kami",
  },
  {
    id: "kursus",
    title: "kursus",
  },
  {
    id: "faq",
    title: "faq",
  },
  {
    id: "blog",
    title: "blog",
    icon: goPage,
  },
];

// Hero
export const dataHero = [
  {
    title: "Bangun dan Wujudkan Cita Bersama EDUFREE",
    description:
      "EDUFREE adalah sebuah layanan kursus dan pelatihan gratis secara online yang bertujuan untuk membantu kamu meraih cita di bidang teknologi.",
  },
];

//Brands
export const countUp = [
  {
    number: 21000,
    title: "Siswa Terdaftar",
  },
  {
    number: 100,
    title: "Instruktur Ahli",
  },
  {
    number: 150,
    title: "Kursus Gratis",
  },
];
export const sponsor = [
  {
    title: "lorem",
    icon: brand1,
  },
  {
    title: "DITLANCE",
    icon: brand2,
  },
  {
    title: "OWTHEST",
    icon: brand3,
  },
  {
    title: "NEOVASI",
    icon: brand4,
  },
  {
    title: "ONAGO",
    icon: brand5,
  },
];

export const benefit = [
  {
    title: "Kursus Gratis",
    description:
      "Kami menyediakan beberapa kursus gratis untuk menunjang ketersediaan pendidikan untuk masyarakat kurang mampu",
  },
  {
    title: "Akses Selamanya",
    description:
      "Semua kursus yang telah kamu daftar bisa diakses selamanya sehingga belajar kamu lebih nyaman dan tidak terburu-buru ",
  },
  {
    title: "Grup Konsultasi",
    description:
      "Terdapat grup konsultasi yang berguna jika kamu ingin menanyakan suatu pertanyaan  dan kamu juga bisa mebuka diskusi baru ",
  },
  {
    title: "Sertifikat dan Portofolio",
    description:
      "Setelah menyelesaikan kursus kamu akan mendapatkan sertifikat serta portofolio dari project kursus yang telah diselesaikan",
  },
  {
    title: "Belajar Lebih Terarah",
    description:
      "Kursus menyediakan kursus dari level dasar hingga expert sehingga semua  bisa belajar dengan  layanan yang kami sediakan",
  },
  {
    title: "Instruktur Berpengalaman",
    description:
      "Kami mempunyai instruktur berpengalaman yang diambil dari dunia industri yang tak diragukan lagi pengalamannya",
  },
];

export const tentang = [
  {
    title: "EDUFREE Layanan E-Learning Gratis Untuk Membantu Kamu Bertumbuh",
    description:
      "Edufree diharapkann bisa menjadi layanan yang bermanfaat bagi kedepanya dalam bidang pendidikan",
  },
];

export const dataKursus = [
  {
    title: "Dasar Pemrograman WEB",
    description: "Materi pembelajarn mengenai pembuatan website tingkat pemula",
    rate: 4.9,
    jam: 4.5,
    video: 20,
    siswa: 1900,
    image: kursusImg1,
  },
  {
    title: "Digital Marketing 101",
    description: "Materi mengenai strategi dan konsep marketing  pemula",
    rate: 4.9,
    jam: 6.2,
    video: 32,
    siswa: 930,
    image: kursusImg2,
  },
  {
    title: "Data Science Dasar",
    description: "Materi pembelajaran mengenai dasar-dasar data science",
    rate: 4.9,
    jam: 8,
    video: 46,
    siswa: 1043,
    image: kursusImg3,
  },
];
