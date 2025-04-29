"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // 👉 Map รายการเมนูแบบแม่นๆ
  const navItems = [
    { name: "หน้าแรก", href: "/" },
    { name: "บทความ", href: "/#blog" },
    { name: "สินค้า", href: "/#product" },
    { name: "ผลงานของเรา", href: "#award" },
    { name: "อื่นๆ", href: "#other" },
    { name: "ติดต่อเรา", href: "https://web.facebook.com/jakramaintenance/", external: true },
  ];

  return (
    <nav className="w-full bg-white backdrop-blur-md z-50 shadow-md fixed">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        
        {/* โลโก้ */}
        <div className="flex items-center space-x-4 text-black">
          <Image
            src="/logo.jpg"
            alt="LOGO"
            height={50}
            width={50}
            className="rounded-full"
          />
        </div>

        {/* เมนูใหญ่ (Desktop) */}
        <div className="hidden md:flex space-x-4 items-center text-black">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} target={item.external ? "_blank" : undefined}>
              <button className="px-4 py-2 rounded-md hover:text-gray-400 cursor-pointer transition duration-300 font-light">
                {item.name}
              </button>
            </Link>
          ))}
          {/* ปุ่ม Facebook / Line พิเศษ */}
          <Link href="https://web.facebook.com/jakramaintenance/" target="_blank">
            <button className="px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Facebook
            </button>
          </Link>
          <Link href="https://line.me/" target="_blank">
            <button className="px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
              Line
            </button>
          </Link>
        </div>

        {/* ปุ่มเมนู (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-black">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* เมนูมือถือ (Dropdown) */}
      {isOpen && (
        <div className="md:hidden bg-white w-full px-6 py-4 space-y-4 shadow-md">
          {navItems.map((item, index) => (
            <Link key={index} href={item.href} target={item.external ? "_blank" : undefined}>
              <div className="text-black text-lg py-2 hover:text-gray-500">{item.name}</div>
            </Link>
          ))}
          {/* ปุ่ม Facebook / Line มือถือ */}
          <div className="flex space-x-4 mt-4">
            <Link href="https://web.facebook.com/jakramaintenance/" target="_blank">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                Facebook
              </button>
            </Link>
            <Link href="https://line.me/" target="_blank">
              <button className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
                Line
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
