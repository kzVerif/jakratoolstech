"use client";

import React from "react";
import Link from "next/link";
import { Facebook, AtSign, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* ส่วน 1: โลโก้และคำอธิบาย */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold font-kanit text-white">JakraToolsTech</h2>
          <p className="text-sm">
            เราจำหน่ายอะไหล่เครื่องจักรอุตสาหกรรมครบวงจร
            พร้อมให้คำปรึกษาทุกขั้นตอนการผลิต
          </p>
        </div>

        {/* ส่วน 2: เมนูลิงก์ */}
        <div className="flex flex-col space-y-2">
          <h3 className="text-xl font-semibold text-white mb-2">เมนู</h3>
          <Link href="#home" className="hover:text-white">หน้าแรก</Link>
          <Link href="#product" className="hover:text-white">สินค้า</Link>
          <Link href="#blog" className="hover:text-white">บทความ</Link>
          <Link href="#award" className="hover:text-white">ผลงานของเรา</Link>
          <Link href="https://web.facebook.com/jakramaintenance/" target="_blank" className="hover:text-white">ติดต่อเรา</Link>
        </div>

        {/* ส่วน 3: ไอคอนโซเชียล */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white mb-2">ติดตามเรา</h3>
          <div className="flex space-x-4">
            <Link href="https://web.facebook.com/jakramaintenance/" target="_blank">
              <Facebook className="w-6 h-6 hover:text-blue-500 transition" />
            </Link>
            <Link href="https://line.me/" target="_blank">
              <AtSign className="w-6 h-6 hover:text-green-500 transition" />
            </Link>
            <Link href="https://youtube.com" target="_blank">
              <Youtube className="w-6 h-6 hover:text-red-500 transition" />
            </Link>
          </div>
        </div>

      </div>

      {/* เส้นแบ่ง + copyright */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
        © 2024 JakraToolsTech. All rights reserved.
      </div>
    </footer>
  );
}
