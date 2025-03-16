// sections/Portfolio.tsx
export default function Portfolio() {
  const projects = [
    {
      title: "Banking Middleware",
      description: "Core banking system integration using BASE24",
      tech: ["Base24", "ISO8583", "Java", "Cobol"]
    },
    {
      title: "E-Channel Enhancement",
      description: "Created and designed ISO Spesification message e-banking platform transaction( IBank, MBank, SMSBanking )",
      tech: ["Base24", "ISO8583", "Java", "Cobol"]
    },
    {
      title: "New Prepaid System",
      description: "Integrated new payment channels EDC, improving transaction processes and system efficiency.",
      tech: ["Base24", "ISO8583", "Java", "Cobol"]
    },
    {
      title: "ATM Enhancement",
      description: "Developed, debugged and enhanced banking middleware transactions (ATM, POS, e-Channel) using Base24 following ISO 8583 messaging standards.",
      tech: ["Base24", "ISO8583", "Java", "Cobol"]
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">Featured Projects</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.title} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}