"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Link as ScrollLink } from "react-scroll"; // Sayfa içi kaydırma için
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./ui/modetoggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useTheme(); // ShadCN tema hook'u

  const navItems = [
    { id: "about", label: "HAKKIMIZDA" },
    { id: "services", label: "HİZMETLER" },
    { id: "products", label: "ÜRÜNLER" },
    { id: "contact", label: "KARİYER" },
    { id: "contacts", label: "İLETİŞİM" },
    { id: "hub", label: "İLET HUB" },
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  // Menü başlıklarının animasyonları
  const navItemVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: (i:number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        className="dark:text-white text-[#0C0A09] px-4 md:px-20 py-3 rounded-t-2xl rounded-b-md flex justify-between items-center dark:drop-shadow-[0px_4px_8px_rgba(44,56,73,0.46)] drop-shadow-[0px_4px_8px_rgba(0,0,0,0.05)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Logo */}
        <div className="text-4xl font-bold tracking-wide flex items-center space-x-1 mx-8 mt-2">
          ilet
        </div>

        {/* Masaüstü Menü */}
        <ul className="hidden lg:flex space-x-6 text-sm font-semibold uppercase mt-2 lg:gap-24 md:gap-16 sm:gap-12 flex-wrap opacity-90">
          {navItems.map(({ id, label }, index) => (
            <motion.li
              key={id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ scale: 1.1 }}
              className="opacity-65 hover:opacity-100 transition duration-300 group"
            >
              <ScrollLink
                to={id}
                smooth={true}
                duration={500}
                offset={0} // Navbar yüksekliği kadar boşluk bırak
                className="cursor-pointer transition duration-300 dark:text-white text-black dark:group-hover:text-green-500 group-hover:text-blue-500"
              >
                {label}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>

        {/* Tema Değiştirici */}
        <div className="hidden lg:flex justify-center items-center">
          <ModeToggle />
        </div>

        {/* Mobil Menü Butonu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-gray-700 dark:text-white"
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </motion.nav>

      {/* Mobil Menü Açıldığında Arka Plan Blurlanıyor */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-lg transition-opacity duration-300 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobil Menü (Sağdan Açılan) */}
      <motion.div
        className={`fixed top-0 right-0 h-full w-64 bg-white dark:bg-[#0C0A09] shadow-lg transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } transition-all duration-300 ease-in-out lg:hidden z-50`}
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
      >
        {/* Kapatma Butonu */}
        <div className="flex justify-end p-4">
          <button onClick={() => setIsOpen(false)}>
            <X size={30} className="text-gray-700 dark:text-white" />
          </button>
        </div>

        {/* Menü Linkleri (Mobil) */}
        <ul className="flex flex-col space-y-6 text-lg font-semibold uppercase text-center">
          {navItems.map(({ id, label }, index) => (
            <motion.li
              key={id}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              className="opacity-75 hover:opacity-100 transition duration-300"
            >
              <ScrollLink
                to={id}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer"
                onClick={() => setIsOpen(false)} // Mobil menüyü kapat
              >
                {label}
              </ScrollLink>
            </motion.li>
          ))}
        </ul>

        {/* Mobil Tema Değiştirici */}
        <div className="flex justify-center mt-8">
          <ModeToggle />
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
