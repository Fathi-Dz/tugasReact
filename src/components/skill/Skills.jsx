import tilwind from "../../assets/tilwind.png";
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white font-sans"
    >
      <div className="container mx-auto text-center">
        <h3 className="text-3xl font-bold text-[#680000] mb-10">
          Skills & Tools
        </h3>

        <p className="max-w-2xl mx-auto text-gray-700 mb-12">
          Berikut adalah teknologi yang sering saya gunakan untuk membangun
          website yang cepat, responsif, dan user-friendly.
        </p>

        <div className="grid gap-8 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {/* Skill 1 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1 duration-300">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="w-16 h-16"
            />
            <h4 className="mt-4 font-semibold text-[#680000]">HTML5</h4>
          </div>

          {/* Skill 2 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1 duration-300">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS3"
              className="w-16 h-16"
            />
            <h4 className="mt-4 font-semibold text-[#680000]">CSS3</h4>
          </div>

          {/* Skill 3 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1 duration-300">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
              className="w-16 h-16"
            />
            <h4 className="mt-4 font-semibold text-[#680000]">JavaScript</h4>
          </div>

          {/* Skill 4 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1 duration-300">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
              className="w-16 h-16"
            />
            <h4 className="mt-4 font-semibold text-[#680000]">React</h4>
          </div>

          {/* Skill 5 */}
          <div className="flex flex-col items-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition hover:-translate-y-1 duration-300">
            <img
              src={tilwind}
              alt="Tailwind"
              className="w-16 h-16"
            />
            <h4 className="mt-4 font-semibold text-[#680000]">Tailwind CSS</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
