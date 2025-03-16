export default function Skills() {
  const skills = [
    { name: "JavaScript", icon: "🟨" },
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" },
    { name: "Python", icon: "🐍" },
    { name: "Java", icon: "☕" },
    { name: "BASE24", icon: "💳" },
    { name: "ISO8583", icon: "🔢" },
    { name: "AWS", icon: "☁️" },
  ];

  return (
    <section id="skills" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
            >
              <span className="text-4xl mb-4">{skill.icon}</span>
              <h3 className="text-xl font-semibold text-gray-900">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}