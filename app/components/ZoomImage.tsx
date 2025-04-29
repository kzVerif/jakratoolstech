"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ZoomSlideImage() {
  const images = [
    "/blog1.jpg",
    "/blog2.jpg",
    "/blog3.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setMousePosition({ x, y });
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="flex flex-col items-center space-y-6">

      {/* รูปภาพ */}
      <div
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="relative w-full max-w-xl h-[400px] overflow-hidden rounded-lg shadow-lg group border"
      >
        <Image
          src={images[currentIndex]}
          alt="Zoom Slide Image"
          fill
          className={`object-cover transition-transform duration-300 
            ${isHovering ? "scale-150" : "scale-100"}`}
          style={{
            transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
          }}
        />
      </div>

      {/* ปุ่มควบคุม Slide */}
      <div className="flex space-x-4">
        <button
          onClick={goPrev}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          ◀ รูปก่อนหน้า
        </button>
        <button
          onClick={goNext}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          รูปถัดไป ▶
        </button>
      </div>

      {/* เลขหน้ารูป */}
      <div className="text-gray-500 text-sm">
        รูปที่ {currentIndex + 1} / {images.length}
      </div>

    </div>
  );
}
