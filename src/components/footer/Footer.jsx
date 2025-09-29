const Footer = () => {
  return (
   <footer class="bg-[#4b0000] text-gray-200">
  <div class="container mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">

    
    <div class="md:col-span-2">
      <h2 class="text-3xl font-bold text-white mb-4">Portofolio</h2>
      <p class="text-sm leading-relaxed">
        Solusi kreatif untuk membangun website modern, cepat, dan responsif.  
        Kami percaya desain dan performa adalah kunci pengalaman digital terbaik.
      </p>
    </div>

  
    <div>
      <h3 class="text-lg font-semibold text-white mb-3">Navigasi</h3>
      <ul class="space-y-2">
        <li><a href="#home" class="hover:text-white transition-colors">Home</a></li>
        <li><a href="#about" class="hover:text-white transition-colors">About</a></li>
        <li><a href="#projects" class="hover:text-white transition-colors">Projects</a></li>
        <li><a href="#contact" class="hover:text-white transition-colors">Contact</a></li>
      </ul>
    </div>

  
    <div>
      <h3 class="text-lg font-semibold text-white mb-3">Ikuti Kami</h3>
      <ul class="space-y-2">
        <li><a href="#" class="flex items-center gap-2 hover:text-white transition-colors">Facebook</a></li>
        <li><a href="#" class="flex items-center gap-2 hover:text-white transition-colors">Instagram</a></li>
        <li><a href="#" class="flex items-center gap-2 hover:text-white transition-colors">LinkedIn</a></li>
      </ul>
    </div>

    
    <div>
      <h3 class="text-lg font-semibold text-white mb-3">Newsletter</h3>
      <p class="text-sm mb-4">Dapatkan update proyek terbaru langsung ke email Anda.</p>
      <form class="flex">
        <input type="email" placeholder="Email Anda"
          class="px-4 py-2 rounded-l-md w-full text-black focus:outline-none" />
        <button type="submit"
          class="bg-white text-[#680000] px-4 py-2 rounded-r-md hover:bg-gray-200 transition">
          
        </button>
      </form>
    </div>

  </div>

  <div class="border-t border-gray-700 py-6 text-center text-sm text-gray-400">
    © <span id="year"></span> Fathi Dzahabi. Dibuat dengan menggunakan TailwindCSS.
  </div>
</footer>
  );
};

export default Footer;