export default function Testimonials() {
    const testimonials = [
      {
        name: "John Doe",
        role: "CEO, Tech Corp",
        comment: "Fahmi delivered an excellent project on time and within budget.",
        image: "/images/client1.png",
      },
      {
        name: "Jane Smith",
        role: "CTO, Web Solutions",
        comment: "Highly skilled and professional. Highly recommended!",
        image: "/images/client2.png",
      },
    ];
  
    return (
      <section id="testimonials" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white p-6 rounded-lg shadow-md text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mx-auto mb-4"
                />
                <p className="text-gray-600 italic">"{testimonial.comment}"</p>
                <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                <p className="text-gray-500">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }