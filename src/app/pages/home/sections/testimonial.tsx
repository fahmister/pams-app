import Image from "next/image";
export default function Testimonials() {
  const testimonials = [
    {
      name: "Maimunah Cantik",
      role: "PT Bumbu Rujak Manis",
      comment: "Aku sudah kerja selama 2 tahun bareng fahmi dan dia orang yang sangat detail dalam pekerjaan!",
      image: "/kungfu.jpeg",
    },
    {
      name: "Zayn Malink",
      role: "PT Sunat Online Digital",
      comment: "selama menjadi mentor intership fahmi di JKT48, Saya belajar banyak, eh maksutnya fahmi belajar banyak tentang bagaimana menjadi profesional dalam pekerjaan di situasi apapun",
      image: "/zayn.jpg",
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          What People Say
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-purple-600 font-medium">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 mt-4 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}