export default function Skills() {
    const skills = [
      { name: "JavaScript", icon: "🟨" },
      { name: "React", icon: "⚛️" },
      { name: "Node.js", icon: "🟢" },
      { name: "Python", icon: "🐍" },
      { name: "Tailwind CSS", icon: "🎨" },
      { name: "Next.js", icon: "⏭️" },
    ];
  
    return (
      <section id="skills" className="py-20 bg-[#374151]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['JavaScript', 'React', 'Node.js', 'Python'].map((skill) => (
            <div
              key={skill}
              className="bg-[#1F2937] p-6 rounded-lg text-center hover:scale-105 transition-transform"
            >
              <span className="text-[#FF8C42] text-2xl">★</span>
              <h3 className="mt-4 text-lg font-semibold text-white">{skill}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  }