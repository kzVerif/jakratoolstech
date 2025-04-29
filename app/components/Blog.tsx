import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <section id="blog" className="min-h-screen pt-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        {/* หัวข้อใหญ่ */}
        <h2 className="text-4xl md:text-6xl font-bold font-kanit text-gray-800 mb-6">
          บทความ
        </h2>
        <p className="text-gray-600 text-lg md:text-2xl font-kanit mb-12">
          บทความของเรา บทความเหล่านี้จะช่วยให้คุณรู้จักเรามากขึ้น
          <br />
          jakratoolstech.com
        </p>

        {/* ส่วน grid บทความ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* การ์ดบทความ */}
          <Link href={""}>
            <div className="bg-whiterounded-2xl shadow-xl overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden">
                <Image
                  src="/blog1.jpg"
                  alt="Blog 1"
                  width={600}
                  height={400}
                  className="rounded-t-2xl w-full hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-gray-500 text-sm mb-2 font-kanit">
                  April 9
                </h3>
                <p className="text-gray-800 font-kanit text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
                  corporis.
                </p>
              </div>
            </div>
          </Link>
          <Link href={""}>
            <div className="bg-whiterounded-2xl shadow-xl overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden">
                <Image
                  src="/blog2.jpg"
                  alt="Blog 1"
                  width={600}
                  height={400}
                  className="rounded-t-2xl w-full hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-gray-500 text-sm mb-2 font-kanit">
                  April 9
                </h3>
                <p className="text-gray-800 font-kanit text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
                  corporis.
                </p>
              </div>
            </div>
          </Link>
          <Link href={""}>
            <div className="bg-whiterounded-2xl shadow-xl overflow-hidden hover:shadow-xl transition duration-300">
              <div className="overflow-hidden">
                <Image
                  src="/blog3.jpg"
                  alt="Blog 1"
                  width={600}
                  height={400}
                  className="rounded-t-2xl w-full hover:scale-105 transition duration-300"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-gray-500 text-sm mb-2 font-kanit">
                  April 9
                </h3>
                <p className="text-gray-800 font-kanit text-lg">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit,
                  corporis.
                </p>
              </div>
            </div>
          </Link>
        </div>
        <div className="flex items-center justify-center mt-12">
          <Link href="">
            <button className="cursor-pointer px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-kanit text-lg rounded-full shadow-lg hover:scale-105 transition duration-300">
              บทความทั้งหมด
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
