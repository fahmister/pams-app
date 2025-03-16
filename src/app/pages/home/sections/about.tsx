// sections/About.tsx
export default function About() {
  const skills = ['BASE24', 'ISO8583', 'Java', 'React', 'Node.js', 'AWS'];

  return (
    <section id="about" className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">About Me</h2>
            <p className="text-gray-600 leading-relaxed">
              Experienced Full Stack Developer specializing in banking systems integration. 
              Currently working as Application Developer at PT Bank Negara Indonesia, 
              focused on transaction systems development and integration testing.
            </p>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-600">Core Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill} className="flex items-center p-4 bg-gray-50 rounded-lg">
                  <span className="text-purple-600 mr-2">▹</span>
                  <span className="text-gray-700">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}