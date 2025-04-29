import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Product() {
  return (
    <section id="product" className="min-h-screen pt-20 bg-gray-50 ">
      <div className="container mx-auto px-4 text-center">
        
        {/* หัวข้อ */}
        <h2 className="text-4xl md:text-6xl font-bold font-kanit text-gray-800 ">
          สินค้าแนะนำ
        </h2>
        <p className="text-gray-600  text-lg md:text-2xl font-kanit mb-12">
          นี่คือสินค้าแนะนำและสินค้าขายดีของเรา
          <br />
          jakratoolstech.com
        </p>

        {/* Grid สินค้า */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          
          {/* การ์ดสินค้า */}
          {[
            { img: "/blog1.jpg", name: "อะไหล่เครื่องจักร A", price: "ราคาเริ่มต้น 2,900 บาท", seller: `Admin` },
            { img: "/blog2.jpg", name: "อะไหล่เครื่องจักร B", price: "ราคาเริ่มต้น 3,500 บาท", seller: `Admin` },
            { img: "/blog3.jpg", name: "อะไหล่เครื่องจักร C", price: "ราคาเริ่มต้น 1,800 บาท", seller: `Admin` }
          ].map((item, index) => (
            <div key={index} className="bg-white  rounded-2xl shadow-md hover:shadow-2xl border hover:border-blue-500 transition duration-300 overflow-hidden flex flex-col">
              
              <div className="overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={600}
                  height={400}
                  className="rounded-t-2xl w-full hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-gray-800  font-kanit text-2xl mb-2">{item.name}</h3>
                  <p className="text-gray-500  text-sm">ลงขายโดย: {item.seller}</p>
                  <p className="text-gray-500  text-sm">{item.price}</p>
                </div>
                <div className="mt-4">
                  <Link href="/allproducts/1">
                    <button className="cursor-pointer w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
                      ดูรายละเอียด
                    </button>
                  </Link>
                </div>
              </div>

            </div>
          ))}
          
        </div>

        {/* ปุ่มสินค้าทั้งหมด */}
        <div className="flex items-center justify-center mt-6">
          <Link href="/allproducts">
            <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-kanit text-lg rounded-full shadow-lg hover:scale-105 transition duration-300">
              ดูสินค้าทั้งหมด
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
