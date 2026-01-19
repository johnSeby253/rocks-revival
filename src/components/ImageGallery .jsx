"use client";

import Image from "next/image";

const images = [
  "/galleryImage1.jpeg", // left top
  "/galleryImage5.jpeg", // left bottom
  "/galleryImage4.jpeg", // center
  "/galleryImage3.jpeg", // right top
  "/galleryImage2.jpeg", // right bottom
];

const ImageGallery = () => {
  return (
    <section className="w-full flex-col  h-[800px] px-4 py-14 md:py-32 flex items-center justify-center">
      <h2 className="text-white pb-10 text-4xl font-bold italic">#rockRevivalshops</h2>
    
     <div className="w-full md:w-[70%] h-full flex flex-col items-center justify-center md:flex-row gap-4">

        {/* Left Column */}
        <div className=" w-[50%] md:w-[33%] h-full flex flex-col gap-4">
          {[images[0], images[1]].map((src, i) => (
            <div
              key={i}
              className="relative w-full h-[50%] overflow-hidden rounded-xl group"
            >
              <Image
                src={src}
                alt="Gallery image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Center Image */}
        <div className="w-[50%] md:w-[33%] h-full relative overflow-hidden rounded-xl group">
          <Image
            src={images[2]}
            alt="Gallery image"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Right Column */}
        <div className="w-[50%] md:w-[33%] h-full flex flex-col gap-4">
          {[images[3], images[4]].map((src, i) => (
            <div
              key={i}
              className="relative w-full h-[50%] overflow-hidden rounded-xl group"
            >
              <Image
                src={src}
                alt="Gallery image"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ImageGallery;
