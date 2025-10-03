import gambar from "../../assets/code.jpg";
const Contener = () => {
  return (
    <div>
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 pt-24 bg-gradient-to-b from-gray-50 to-gray-100 text-gray-700 font-sans">
        <div className="max-w-lg text-center md:text-left md:w-1/2 space-y-6 md:pr-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#680000] leading-tight">
            Bangun{" "}
            <span className="underline decoration-[#680000]/50">desain & kode</span> yang bicara
          </h2>
          <p className="text-lg leading-relaxed">
            Setiap detail desain dan baris kode saya pastikan rapi, fungsional, dan responsif.
            Tujuannya? Memberikan pengalaman pengguna yang mulus, cepat, dan tampilan yang menarik.
            Dengan pendekatan modern, setiap proyek jadi lebih dari sekadar website—ini adalah pengalaman digital.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
            <a
              href="#projects"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg font-medium shadow hover:bg-[#4b0000] hover:shadow-md transition"
            >
              Lihat Proyek
            </a>
            <a
              href="#contact"
              className="border border-[#680000] text-[#680000] px-6 py-3 rounded-lg font-medium hover:bg-[#680000] hover:text-white transition"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src={gambar}
            alt="Ilustrasi Coding"
            className="w-[350px] md:w-[400px] h-auto object-cover rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>

      <section className="py-16 text-center bg-[#680000] text-white px-6 mt-20 pb-[100px] font-sans">
        <h2 className="text-3xl font-bold mb-4">Connect with me on LinkedIn</h2>
        <p className="text-gray-200 mb-6">
          Lihat pengalaman, proyek, dan jaringan profesional saya secara lengkap di LinkedIn.
          Mari terkoneksi dan berkolaborasi.
        </p>
        <a
          href="https://www.linkedin.com/in/fathi-dzahabi-482627377/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#680000] px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition"
        >
          Visit LinkedIn
        </a>
      </section>
    </div>
  );
};

export default Contener;