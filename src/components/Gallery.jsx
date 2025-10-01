const Gallery = () => {
    return (
        <section id="gallery" className="py-20 px-6 bg-gray-100 text-center">
            <h3 className="text-3xl font-bold mb-8 text-[#680000]">Galeri</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <img
                    src="/img/keceh.jpg"
                    className="gallery-img w-full h-48 object-cover rounded-lg shadow-lg opacity-0 scale-90 transition-all duration-700"
                    alt="Galeri 1"
                />
                <img
                    src="/img/keceh.jpg"
                    className="gallery-img w-full h-48 object-cover rounded-lg shadow-lg opacity-0 scale-90 transition-all duration-700"
                    alt="Galeri 2"
                />
                <img
                    src="/img/keceh.jpg"
                    className="gallery-img w-full h-48 object-cover rounded-lg shadow-lg opacity-0 scale-90 transition-all duration-700"
                    alt="Galeri 3"
                />
            </div>
        </section>
    );
};

export default Gallery;