"use client";

import React from 'react'

const CasualSection = () => {
    return (
        <div className='bg-black h-[650px]'>

            <div className="w-full h-full flex flex-col md:flex-row ">
                <div className="w-full h-[70%] md:w-[50%] md:h-full rounded-br-full md:rounded-r-full overflow-hidden relative">

                    {/* Video */}
                    <video
                        className="w-full h-full object-cover"
                        src="/rotatedial.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                    />

                    {/* Black Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                </div>

                <div className="md:w-[40%] flex flex-col md:items-center md:justify-center">
                    <div data-aos="fade-up" className=" w-full   ">
                        <h1  className="text-4xl font-bold text-center text-amber-400">Casual For Daily Use</h1>
                        <div data-aos="fade-up" className="pt-8 ">
                            <p className="text-xl font-semibold text-center text-white ">Look Like a Classic</p>
                        </div>
                        <div data-aos="fade-right" className="flex items-center justify-center mt-8 md:mt-16">
                            <button className="
                            w-[200px]
                            p-3
                            rounded-r-full
                            border-t border-r border-b border-amber-400
                            bg-gradient-to-r
                            from-white
                            to-black
                            text-amber-400
                            font-semibold
                            hover:from-gray-200
                            hover:to-black
                            transition-all
                            
                        ">
                                Discover
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default CasualSection
