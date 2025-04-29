import { Book } from "lucide-react";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <div className="container pt-24 pb-5">
      <div className="flex-col items-center justify-center ">
        <h2 className="flex items-center text-4xl md:text-6xl font-bold font-kanit text-gray-800 border-b ">
        <Book size={50} className="mr-1" />บทความทั้งหมด
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
          {/* การ์ดบทความ */}
          <Link href={"/allBlog/2"}>
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
          <Link href={"/allBlog/2"}>
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
          <Link href={"/allBlog/2"}>
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
      </div>
    </div>
  );
}
