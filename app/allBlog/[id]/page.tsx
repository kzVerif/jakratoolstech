import React from "react";
import Image from "next/image";

type Props = {
  params: { id: string };
};

export default function Page({ params }: Props) {
  const htmlContent = `
    <h2>การเลือกใช้เครื่องจักรให้เหมาะกับงาน</h2>
    <p>เมื่อคุณต้องการเลือกใช้เครื่องจักรสำหรับงานอุตสาหกรรม สิ่งสำคัญที่ควรพิจารณาคือ</p>
    <ul>
      <li>ประเภทของงานที่ทำ</li>
      <li>น้ำหนักและขนาดของวัสดุ</li>
      <li>ความเร็วในการผลิตที่ต้องการ</li>
      <li>งบประมาณและค่าใช้จ่ายในการบำรุงรักษา</li>
    </ul>
    <p>โดยทั่วไป เครื่องจักรที่ดีควรมีอายุการใช้งานที่ยาวนาน พร้อมทั้งการรับประกันและบริการหลังการขายที่ครอบคลุม</p>
    <br />
    <h3>เทคนิคการบำรุงรักษาเครื่องจักร</h3>
    <p>เพื่อให้เครื่องจักรสามารถใช้งานได้เต็มประสิทธิภาพ ควรมีการบำรุงรักษาเป็นระยะ เช่น</p>
    <ol>
      <li>ทำความสะอาดอุปกรณ์ภายในทุกสัปดาห์</li>
      <li>เปลี่ยนถ่ายน้ำมันหล่อลื่นตามกำหนด</li>
      <li>ตรวจเช็กแรงดันและการสั่นสะเทือนของเครื่อง</li>
      <li>บันทึกข้อมูลการซ่อมบำรุงอย่างสม่ำเสมอ</li>
    </ol>
    <p>การบำรุงรักษาที่ดีจะช่วยลดโอกาสการเสียหายที่ไม่คาดคิดและช่วยยืดอายุการใช้งานของเครื่องจักร</p>
  `;

  return (
    <div className="pt-24 container mx-auto px-4 mb-16">
      <div className="flex flex-col justify-center items-center text-center">
        
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
          Blog
        </h1>

        {/* Short description */}
        <p className="text-gray-600 text-lg md:text-xl font-light mb-8 max-w-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* Image */}
        <div className="relative w-full max-w-4xl h-[400px] mb-12">
          <Image
            src="/blogall.jpg"
            alt="Blog Image"
            fill
            className="object-contain rounded-lg shadow-lg"
          />
        </div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-3xl text-left text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </div>
    </div>
  );
}
