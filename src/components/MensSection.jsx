import Image from "next/image";

const MensSection = () => {
    return (
        <div className=" h-[750px] flex items-center justify-center bg-black">
            <div className="bg--400 w-full h-[90%] md:h-full flex flex-col md:flex-row">
                <div className="h-[50%] md:h-full md:w-[50%] flex flex-col  md:items-start md:p-10 md:justify-center ">
                    <h1 className="text-4xl font-bold text-center text-amber-400">Rugged Watch Buyers Guide</h1>
                    <div className="pt-8 ">
                        <p className="text-xl font-semibold text-center text-white ">Rugged is the new Cool</p>
                    </div>
                    <div className="flex items-center justify-center mt-8 md:mt-16">
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

                <div className="relative w-full h-[50%] md:h-full md:w-[50%]">
                    <Image
                        src="/watch model.png"
                        alt="Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default MensSection;
