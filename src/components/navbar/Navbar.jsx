import { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    const yearEl = document.getElementById("year");
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }, []);

  const bukaMenu = () => {
    const menu = document.getElementById("menu");
    if (menu) {
      menu.classList.toggle("hidden");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full shadow z-50 bg-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-[#680000]">Portofolio</h1>
        <nav className="space-x-6 hidden md:block">
          <a href="#about" className="hover:text-[#5A0202] text-[#680000] transition">
            About
          </a>
          <a href="#projects" className="hover:text-[#5A0202] text-[#680000] transition">
            Projects
          </a>
          <a href="#contact" className="hover:text-[#5A0202] text-[#680000] transition">
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="hover:bg-gray-700 p-2 rounded-lg hover:duration-500 md:hidden relative group"
          onClick={bukaMenu}
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
      </div>

      <nav
        id="menu"
        className="hidden absolute top-full right-0 w-56 bg-white shadow-lg rounded-lg py-4 space-y-3 z-40
          transition duration-300 ease-in-out
          group-hover:block
          md:static md:flex md:space-x-8 md:space-y-0 md:w-auto md:bg-transparent md:shadow-none md:rounded-none md:py-0 md:hidden"
      >
        <a
          href="#about"
          className="block px-4 py-2 text-[#680000] font-medium hover:bg-[#680000] hover:text-white rounded transition duration-200"
        >
          About
        </a>
        <a
          href="#projects"
          className="block px-4 py-2 text-[#680000] font-medium hover:bg-[#680000] hover:text-white rounded transition duration-200"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block px-4 py-2 text-[#680000] font-medium hover:bg-[#680000] hover:text-white rounded transition duration-200"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
