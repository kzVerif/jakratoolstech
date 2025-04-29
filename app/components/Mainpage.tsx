import { CircleChevronDown } from "lucide-react";
import React from "react";

export default function Mainpage() {
  return (
    <section
      id="home"
      className=" min-h-screen flex flex-col justify-center items-center background-img"
    >
      <div className="container ">
        <p className=" text-6xl text-white kanit-regular mb-4 shadow-3xl">
          จำหน่ายอะไหล่ <br /> เครื่องจักรอุตสาหกรรม <br /> ครบวงจร ส่งไวทั่วประเทศ
        </p>
        <a
          href="#product"
          className="inline-flex items-center p-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          สินค้าของเรา <CircleChevronDown className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
