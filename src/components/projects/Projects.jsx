import gambar2 from "../../assets/project.jpg";
import gambar3 from "../../assets/project1.jpg";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gray-100 font-sans"
    >
      <div className="container mx-auto">
        <h3 className="text-3xl font-bold text-center text-[#680000] mb-10">
          Proyek Gewe
        </h3>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <a
            href="https://ulanganjs.vercel.app"   // 👉 ganti dengan link project asli
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 block hover:-translate-y-1 duration-300"
          >
            <img
              src={gambar2}
              alt="Project One"
              className="rounded-lg w-full h-48 object-cover"
            />
            <h4 className="mt-4 font-semibold text-lg text-[#680000]">
              Proyek One
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              Aplikasi web sederhana Manajemen Data Diri yang dibuat menggunakan HTML, CSS, dan JavaScript.
            </p>
          </a>

          {/* Project 2 */}
          <a
            href="https://bejeh-shop.vercel.app/"   // 👉 ganti dengan link project asli
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 block hover:-translate-y-1 duration-300"
          >
            <img
              src={gambar3}
              alt="Project Two"
              className="rounded-lg w-full h-48 object-cover"
            />
            <h4 className="mt-4 font-semibold text-lg text-[#680000]">
              Proyek Two
            </h4>
            <p className="text-sm text-gray-600 mt-2">
              HPinAja, sebuah website e-commerce sederhana untuk menampilkan daftar produk HP dan promo.
            </p>
          </a>

          {/* Project 3 - Coming Soon */}
          <div className="bg-white rounded-xl shadow p-4">
            <div className="h-48 bg-gray-200 rounded-lg flex items-center justify-center text-gray-500">
              Coming Soon
            </div>
            <h4 className="mt-4 font-semibold text-lg text-[#680000]">
              Proyek Three
            </h4>
            <p className="text-sm text-gray-600 mt-2">Coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
