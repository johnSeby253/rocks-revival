import Image from "next/image";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-[120px] z-50 flex items-center justify-center">
      <Image
        src="/logo2.png"
        alt="Logo"
        width={300}
        height={80}
        priority
      />
    </div>
  );
};

export default Header;
