export default function Experience() {
  const experiences = [
    {
      company: "PT Bank Negara Indonesia",
      role: "Application Developer",
      duration: "2022 - Present",
      description: "Developed transaction systems and integration testing for banking applications.",
    },
    {
      company: "Intership",
      role: "Android Developer",
      duration: "2021",
      description: "Built an attendance application capable of monitoring branch offices, distances, and employee positions.",
    },
  ];

  return (
    <section id="experience" className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 text-xl font-bold">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
                  <p className="text-purple-600 font-medium">{exp.company}</p>
                  <p className="text-gray-500 text-sm mt-1">{exp.duration}</p>
                  <p className="text-gray-600 mt-4">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}