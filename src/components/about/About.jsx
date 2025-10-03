const About = () => {
    return (
        <section id="about" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100 font-sans">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6 text-[#680000] relative inline-block">
            Tentang Saya
            <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#680000] rounded-full"></span>
          </h3>
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl2 transition-shadow duration-300">
            <p className="text-gray-700 leading-relaxed text-lg">
              Saya seorang <span className="font-semibold text-[#680000]">pengembang web front-end</span> 
              yang menyukai desain minimalis dan fungsional.  
              Berpengalaman dengan <span className="font-medium">HTML</span>, 
              <span className="font-medium">CSS (Tailwind)</span>, dan 
              <span className="font-medium">JavaScript</span>, saya membantu bisnis dan individu 
              membangun kehadiran digital yang profesional, responsif, dan modern.  
              Setiap detail antarmuka penting—mulai dari tipografi, warna, hingga pengalaman pengguna.  
              Dengan performa cepat, desain menarik, dan kode bersih, saya siap mewujudkan ide Anda 
              menjadi website yang memukau dan fungsional.
            </p>
          </div>
        </div>
      </section>
    )
}

export default About