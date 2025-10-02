import { useEffect } from "react";
import CER1 from "../assets/cert1.png";
import CER2 from "../assets/cert2.png";
import CER3 from "../assets/cert3.png";
import CER4 from "../assets/dicoding.jpg";

const Certificate = () => {
  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    const dots = document.querySelectorAll(".dot");
    let current = 0;

    function showSlide(index) {
      slides.forEach((s, i) => {
        s.style.opacity = i === index ? "1" : "0";
      });
      dots.forEach((d, i) => {
        d.classList.toggle("bg-white", i === index);
        d.classList.toggle("bg-white/40", i !== index);
      });
    }

    function nextSlide() {
      current = (current + 1) % slides.length;
      showSlide(current);
    }

    showSlide(current);
    const interval = setInterval(nextSlide, 3000);

    return () => clearInterval(interval); // cleanup saat unmount
  }, []);

  return (
    <section id="certificate" className="py-16 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Sertifikat &amp; Pencapaian
      </h1>

      <div className="relative max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <div id="slides" className="relative w-full h-[400px]">
          <img
            src={CER1}
            alt="Sertifikat 1"
            className="slide absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out"
          />
          <img
            src={CER2}
            alt="Sertifikat 2"
            className="slide absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out"
          />
          <img
            src={CER3}
            alt="Sertifikat 3"
            className="slide absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out"
          />
          <img
            src={CER4}
            alt="Sertifikat 4"
            className="slide absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-1000 ease-in-out"
          />
        </div>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          <span className="dot w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot w-3 h-3 rounded-full bg-white/40"></span>
          <span className="dot w-3 h-3 rounded-full bg-white/40"></span>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
