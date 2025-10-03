import gambar1 from '../../assets/keceh.jpg';
import gambar2 from '../../assets/abiz.jpg';
import gambar3 from '../../assets/badazz.jpg';

const Gallery = () => {
  return (
    <section
      id="gallery"
      className="py-20 px-6 bg-gray-100 text-center font-sans" // pakai Poppins
    >
      <h3 className="text-4xl font-bold mb-10 text-[#680000] font-fancy">
        Galeri
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {[gambar1, gambar2, gambar3, gambar1, gambar2, gambar3].map(
          (img, i) => (
            <img
              key={i}
              src={img}
              alt={`Galeri ${i + 1}`}
              className="w-full h-48 object-cover rounded-lg shadow-lg
                         scale-95 hover:scale-100 hover:shadow-xl
                         transition-all duration-500"
            />
          )
        )}
      </div>
    </section>
  );
};

export default Gallery;
