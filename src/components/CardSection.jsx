"use client";

import React from 'react'

const CardSection = () => {
    return (
        <div className='w-full h-[600px] '>
            <div className="w-full h-full flex flex-col md:flex-row items-center justify-center gap-5">
                <h1 className="text-white p-5 font-bold text-4xl">Products</h1>

                {/* Card 1 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="0"
                    className="w-[80%] md:w-[30%] h-[300px] group relative overflow-hidden rounded-xl cursor-pointer"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                            backgroundImage:
                                "url('https://ae01.alicdn.com/kf/S561dd5a67bc5454f910c85ff74a2a288K.jpg')",
                        }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-white text-2xl font-semibold tracking-wide">
                            Rugged Watches
                        </h3>
                    </div>
                </div>

                {/* Card 2 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="w-[80%] md:w-[30%] h-[300px] group relative overflow-hidden rounded-xl cursor-pointer"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                            backgroundImage:
                                "url('https://i.ebayimg.com/images/g/HsoAAOSwlTVmUIVC/s-l1200.jpg')",
                        }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-white text-2xl font-semibold tracking-wide">
                            Casual Watches
                        </h3>
                    </div>
                </div>

                {/* Card 3 */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="400"
                    className="w-[80%] md:w-[30%] h-[300px] group relative overflow-hidden rounded-xl cursor-pointer"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                        style={{
                            backgroundImage:
                                "url('https://ae01.alicdn.com/kf/S7b1d9ae05c21410ca80ad53f48d7965eI.jpg')",
                        }}
                    />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500" />
                    <div className="relative z-10 w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <h3 className="text-white text-2xl font-semibold tracking-wide">
                            Sports Watches
                        </h3>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CardSection
