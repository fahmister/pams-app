export default function Experience() {
    const experiences = [
      {
        company: "Tech Corp",
        role: "Full Stack Developer",
        duration: "2021 - Present",
        description: "Developed scalable web applications using React and Node.js.",
      },
      {
        company: "Web Solutions",
        role: "Frontend Developer",
        duration: "2019 - 2021",
        description: "Built user interfaces for various clients using React.",
      },
    ];
  
    return (
      <section id="experience" className="py-20 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp) => (
              <div key={exp.company} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold">{exp.role}</h3>
                <p className="text-gray-600">{exp.company} | {exp.duration}</p>
                <p className="mt-2 text-gray-600">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }