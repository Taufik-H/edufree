import React from "react";
import { navItem } from "../constant";
import { Container } from "../components";
import { logo } from "../assets";
import { Squeeze as Hamburger } from "hamburger-react";
import { useState } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-[#1C1E53] ">
      <nav className=" text-white py-4 mx-auto max-w-[1440px]">
        <Container className="flex justify-between items-center">
          <img src={logo} alt="logo" />
          <ul className="sm:flex items-center hidden">
            {navItem.map((items, index) => (
              <li key={index} className="mr-10 uppercase font-medium">
                <a href={`#${items.id}`}>{items.title}</a>
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
          <Hamburger size={25} toggled={isOpen} toggle={setIsOpen} />
        </Container>
        <div className="sm:hidden">
          <Container>
            <motion.div
              animate={!isOpen ? { opacity: 0 } : { opacity: 1 }}
              transition={{ duration: 0.3 }}
              className={` absolute bg-[#1C1E53] p-6 left-0 right-0 flex-col w-11/12 rounded-lg mt-10 ml-5`}
            >
              {navItem.map((items, index) => (
                <li
                  key={index}
                  className="mr-10 uppercase font-medium list-none mb-5"
                >
                  <a href={`#${items.id}`}>{items.title}</a>
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
