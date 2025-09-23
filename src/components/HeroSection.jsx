import { useEffect } from "react";
import gambar from "../assets/code.jpg";
import gambar1 from "../assets/coding.jpg";
import gambar2 from "../assets/project.jpg";
import gambar3 from "../assets/project1.jpg";
const HeroSection = () => {
   useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }, []);

  // Fungsi buka/tutup menu
  const bukaMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <div id="hero">
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center px-6 pt-24 bg-gradient-to-br from-[#680000] to-[#4b0000] text-white">

        <div className="text-center max-w-lg pr-7 mb-20 md:text-left md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Halo, Saya <span className="underline decoration-white/50">Fathi Dzahabi</span>
          </h2>
          <p className="mt-4 text-lg md:mx-0">
            Frontend Developer yang fokus pada pembuatan antarmuka modern, responsif, dan menarik.  
            Mari lihat proyek-proyek terbaik saya di bawah ini.
          </p>
          <div className="mt-8 space-x-4">
            <a href="#projects" className="bg-white text-[#680000] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
              Lihat Proyek
            </a>
            <a href="#contact" className="border border-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-[#680000] transition">
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center hidden md:flex md:mt-0">
          <img src={gambar} alt="Ilustrasi Coding" className="w-[600px] h-[370px] mb-10 ml-20 object-cover rounded-lg shadow-lg" />
        </div>
      </section>

    </div>
  );
};

export default HeroSection;