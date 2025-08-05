export function Gallery() {
  const images = [
    {
      src: "/dish1.webp",
      alt: "Elegant plated dish",
    },
    {
      src: "/dish2.jpeg",
      alt: "Restaurant interior",
    },
    {
      src: "/dish3.jpeg",
      alt: "Chef preparing food",
    },
    {
      src: "/dish4.jpeg",
      alt: "Gourmet appetizer",
    },
    {
      src: "/about2.jpeg",
      alt: "Dining room ambiance",
    },
    {
      src: "/dish6.jpeg",
      alt: "Wine selection",
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Gallery
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Take a visual journey through our culinary artistry and elegant
            dining spaces
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
