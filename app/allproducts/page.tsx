import { ShoppingCart } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  const products = [
    {
      name: "มอเตอร์ไฟฟ้า 3 เฟส ขนาด 5HP",
      shortDesc: "มอเตอร์อุตสาหกรรมประสิทธิภาพสูง ใช้งานต่อเนื่องได้ยาวนาน",
      fullDesc:
        "มอเตอร์ไฟฟ้า 3 เฟส กำลัง 5 แรงม้า (5HP) รุ่นมาตรฐาน ISO พร้อมระบบระบายความร้อนในตัว เหมาะสำหรับงานหนักในโรงงานอุตสาหกรรม ใช้งานได้กับเครื่องจักรหลากหลายประเภท",
      price: 12900,
      seller: "JakraToolsTech",
      image: "https://cache-igetweb-v2.mt108.info/uploads/images-cache/7365/product/988c3309c952d1d876908ae66042f532_full.jpg",
    },
    {
      name: "สายพานส่งกำลัง B-72",
      shortDesc: "สายพานคุณภาพสูง ทนแรงดึงสูง ไม่ยืดตัว",
      fullDesc:
        "สายพาน B-72 ผลิตจากยางเสริมใยไนลอน ทนทานต่อแรงเสียดสี และทนความร้อน เหมาะกับการใช้งานกับเครื่องจักรในอุตสาหกรรมทั่วไป เช่น ปั๊มน้ำ เครื่องกลึง เครื่องบด ฯลฯ",
      price: 320,
      seller: "JakraToolsTech",
      image: "https://cache-igetweb-v2.mt108.info/uploads/images-cache/7365/product/988c3309c952d1d876908ae66042f532_full.jpg",
    },
    {
      name: "ใบเลื่อยวงเดือน 14 นิ้ว ตัดเหล็ก",
      shortDesc: "ใบเลื่อยฟันคาร์ไบด์ สำหรับตัดโลหะและเหล็ก",
      fullDesc:
        "ใบเลื่อยขนาด 14 นิ้ว พร้อมฟันคาร์ไบด์คุณภาพสูง ออกแบบมาเฉพาะสำหรับตัดโลหะและเหล็กหนา ใช้ได้กับเครื่องเลื่อยวงเดือนทั่วไป อายุการใช้งานยาวนาน ไม่แตกหักง่าย",
      price: 850,
      seller: "JakraToolsTech",
      image: "https://cache-igetweb-v2.mt108.info/uploads/images-cache/7365/product/988c3309c952d1d876908ae66042f532_full.jpg",
    },
    {
      name: "ลูกปืนตลับเบอร์ 6203 ZZ",
      shortDesc: "ลูกปืนตลับแบบปิด 2 ด้าน เหมาะสำหรับเครื่องจักรหมุน",
      fullDesc:
        "ลูกปืนตลับ 6203 ZZ พร้อมซีลปิดกันฝุ่นทั้งสองด้าน ขนาดมาตรฐาน ทนความร้อนและความเร็วรอบสูงได้ดี เหมาะสำหรับการใช้งานทั่วไปในอุตสาหกรรม เช่น พัดลม ปั๊มน้ำ มอเตอร์ ฯลฯ",
      price: 65,
      seller: "JakraToolsTech",
      image: "https://cache-igetweb-v2.mt108.info/uploads/images-cache/7365/product/988c3309c952d1d876908ae66042f532_full.jpg",
    },
    {
      name: "อินเวอร์เตอร์ 2.2KW ขับมอเตอร์ 3 เฟส",
      shortDesc: "ควบคุมความเร็วรอบมอเตอร์ได้อย่างแม่นยำ",
      fullDesc:
        "อินเวอร์เตอร์ 2.2KW รุ่นประหยัด สำหรับใช้งานควบคุมมอเตอร์ 3 เฟส ปรับความเร็วรอบและแรงบิดได้ตามต้องการ มาพร้อมฟังก์ชัน Soft Start, Overload Protection และหน้าจอ LED",
      price: 4950,
      seller: "JakraToolsTech",
      image: "https://cache-igetweb-v2.mt108.info/uploads/images-cache/7365/product/988c3309c952d1d876908ae66042f532_full.jpg",
    },
  ];
  return (
    <div className="container pt-24 pb-5">
      <div className="flex-col items-center justify-center ">
        <h2 className="flex items-center text-4xl md:text-6xl font-bold font-kanit text-gray-800 border-b ">
        <ShoppingCart size={50} className="mr-1" />สินค้าทั้งหมด
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-4">
          
          {/* การ์ดสินค้า */}
          {products.map((item, index) => (
            <div key={index} className="bg-white  rounded-2xl shadow-md hover:shadow-2xl border hover:border-blue-500 transition duration-300 overflow-hidden flex flex-col">
              
              <div className="overflow-hidden">
                <Image
                  src={item.image}
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
                  <p className="text-gray-500  text-sm">{item.shortDesc}</p>
                  <p className="text-gray-500  text-sm kanit-bold">ราคาเริ่มต้น {item.price}</p>
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
      </div>
    </div>
  );
}
