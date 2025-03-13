export default function Portfolio() {
    const projects = [
      {
        title: "E-commerce Platform",
        description: "Built with React and Node.js",
        image: "/images/project1.png",
        link: "#",
      },
      {
        title: "Blog Website",
        description: "Built with Next.js and Tailwind CSS",
        image: "/images/project2.png",
        link: "#",
      },
    ];
  
    return (
      <section id="portfolio" className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="mt-2 text-gray-600">{project.description}</p>
                  <a
                    href={project.link}
                    className="mt-4 inline-block text-blue-500 hover:underline"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }