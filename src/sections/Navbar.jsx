import React from "react";
import { navItem } from "../constant";
import { Container } from "../components";
import { logo } from "../assets";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";
import { delay, motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1C1E53]  ">
      <nav className=" text-white py-4 flex justify-center mx-auto">
        <Container className="flex justify-between w-full items-center max-w-[1440px]">
          <img src={logo} alt="logo" />
          <ul className="md:flex items-center hidden  ">
            {navItem.map((items, index) => (
              <li
                key={index}
                className="mr-3 lg:mr-10 uppercase font-medium md:font-reguler lg:font-medium"
              >
                <a
                  href={`#${items.id}`}
                  className="flex items-center gap-2 text-sm"
                >
                  {items.title}
                  <img src={items.icon} alt={items.icon} />
                </a>
              </li>
            ))}
            <motion.a
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="border border-white py-2 px-5 rounded-lg hover:bg-white hover:text-[#1C1E53] "
            >
              Login
            </motion.a>
          </ul>
          {/* mobile nav */}
          <div className="md:hidden">
            <Hamburger size={25} toggled={isOpen} toggle={setIsOpen} />
          </div>
        </Container>
        <div className="md:hidden">
          <Container>
            <motion.div
              initial={{ opacity: 0 }}
              animate={
                !isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }
              }
              className={` absolute bg-[#1C1E53] p-6 left-0 right-0 flex-col w-11/12 rounded-lg mt-10 ml-5 z-[100] shadow-lg`}
            >
              {navItem.map((items, index) => (
                <li
                  key={index}
                  className="mr-10 uppercase font-medium list-none mb-5"
                >
                  <a href={`#${items.id}`} className="flex items-center gap-2">
                    {items.title}
                    <img src={items.icon} alt={items.icon} />
                  </a>
                </li>
              ))}

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.9 }}
                href="#"
                className="border border-white py-2 px-5 flex justify-center rounded-lg hover:bg-white hover:text-[#1C1E53] "
              >
                Login
              </motion.a>
            </motion.div>
          </Container>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
