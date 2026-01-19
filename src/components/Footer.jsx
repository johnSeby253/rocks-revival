import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">

          {/* Logo & Brand */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Image
              src="/logo2.png"
              alt="Rock Revival"
              width={180}
              height={50}
            />
            <p className="text-sm text-gray-400 text-center md:text-left max-w-xs">
              Rock Revival watches blend strength, precision, and timeless design.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="mb-3 font-semibold text-amber-400">Company</h4>
              <ul className="space-y-2">
                <li className="hover:text-amber-400 cursor-pointer">About</li>
                <li className="hover:text-amber-400 cursor-pointer">Careers</li>
                <li className="hover:text-amber-400 cursor-pointer">Press</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-amber-400">Support</h4>
              <ul className="space-y-2">
                <li className="hover:text-amber-400 cursor-pointer">Contact</li>
                <li className="hover:text-amber-400 cursor-pointer">FAQs</li>
                <li className="hover:text-amber-400 cursor-pointer">Warranty</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-amber-400">Legal</h4>
              <ul className="space-y-2">
                <li className="hover:text-amber-400 cursor-pointer">Privacy</li>
                <li className="hover:text-amber-400 cursor-pointer">Terms</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Rock Revival. All rights reserved.</p>
          <p>Designed with precision.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
