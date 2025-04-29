"use client";

import React from "react";
import Image from "next/image";


const productData = {
  name: "มอเตอร์ไฟฟ้า 3 เฟส ขนาด 5HP",
  price: 12900,
  shortDesc: "มอเตอร์อุตสาหกรรมกำลังสูง ใช้งานต่อเนื่อง ทนทานพิเศษ",
  fullDesc: `
    มอเตอร์ไฟฟ้า 3 เฟส 5HP รองรับงานอุตสาหกรรมหนัก มีระบบระบายความร้อนในตัว
    เหมาะสำหรับเครื่องจักรกลในสายการผลิต ใช้งานได้นาน ทนความร้อนสูง มีประกัน 2 ปี
  `,
  image: "/blog1.jpg",
};

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen pt-24 container mx-auto px-4">
      
      {/* รูปและข้อมูลสินค้า */}
      <div className="flex flex-col md:flex-row items-center gap-12">
        
        {/* รูปสินค้า */}
        <div className="relative w-full md:w-1/2 h-[400px]">
          <Image
            src={productData.image}
            alt={productData.name}
            fill
            className="object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* ข้อมูลสินค้า */}
        <div className="flex-1 text-left space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800">{productData.name}</h1>
          <p className="text-2xl text-blue-600 font-semibold">
            {productData.price.toLocaleString()} บาท
          </p>
          <p className="text-gray-600 text-lg">
            {productData.shortDesc}
          </p>

          {/* ปุ่ม Call to Action */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 cursor-pointer bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
              สั่งซื้อเลย
            </button>
            <button className="px-6 py-3  cursor-pointerborder border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition">
              ติดต่อสอบถาม
            </button>
          </div>
        </div>
      </div>

      {/* รายละเอียดสินค้า */}
      <div className="mt-16 max-w-4xl mx-auto text-gray-700 leading-relaxed">
        <h2 className="text-2xl font-bold mb-4">รายละเอียดสินค้า</h2>
        <p>{productData.fullDesc}</p>
      </div>

    </div>
  );
}
