import { Facebook, Instagram, Youtube, X } from "lucide-react";

const Footer = () => {
  return (
    <footer className="dark:bg-[#191817] bg-[#F9F9FA] py-6 px-4  relative mt-40">
      <div className="container mx-auto flex flex-col items-center relative">
        {/* Dikey Çizgiler */}
        <div className="absolute -top-16 left-0 w-full flex justify-around">
          <div className="h-20 w-1 bg-pink-500 rounded-full"></div>
          <div className="h-20 w-1 bg-blue-500 rounded-full"></div>
          <div className="h-20 w-1 bg-yellow-500 rounded-full"></div>
          <div className="h-20 w-1 bg-purple-500 rounded-full"></div>
          <div className="h-20 w-1 bg-green-500 rounded-full"></div>
        </div>
        
        {/* Sosyal Medya İkonları */}
        <div className="flex justify-center space-x-12 mb-4 mt-12">
          <a href="#" className="hover:text-blue-400 transition-all"><X size={35} /></a>
          <a href="#" className="hover:text-blue-600 transition-all"><Facebook size={35} /></a>
          <a href="#" className="hover:text-pink-500 transition-all"><Instagram size={35} /></a>
          <a href="#" className="hover:text-red-500 transition-all"><Youtube size={35} /></a>
        </div>
        
        {/* Telif Hakkı */}
        <p className="text-sm font-bold text-gray-500">© 2025 Tüm Hakları Saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;