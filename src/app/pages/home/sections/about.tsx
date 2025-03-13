export default function About() {
  const skills = ['JavaScript', 'React', 'Node.js', 'Python'];

  return (<section id="about" className="py-20 bg-[#374151]">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About Me
          </h2>
          <div className="text-gray-300">
            <p>
              Saya adalah seorang pengembang web dengan pengalaman dalam
              membangun solusi web yang scalable dan berkinerja tinggi...
            </p>
          </div>
        </div>
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-[#FF8C42]">
            Core Skills
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {['JavaScript', 'React', 'Node.js', 'Python'].map((skill) => (
              <div
                key={skill}
                className="flex items-center space-x-2 rounded-lg bg-[#1F2937] p-4"
              >
                <span className="text-[#FF8C42]">▹</span>
                <span className="text-gray-300">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}