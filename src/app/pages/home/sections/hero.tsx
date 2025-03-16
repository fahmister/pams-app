import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-r from-purple-50 to-blue-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <div className="animate-gradient-x bg-gradient-to-r from-purple-100 to-blue-100 w-full h-full opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bagian Teks */}
          <div className="space-y-6 text-center md:text-left animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Hi, I'm <span className="text-purple-600">Fahmi Muhammad</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 font-medium">
              Full Stack Developer / Banking Systems Expert
            </h2>
            <p className="text-gray-600">
              Building scalable and high-performance web solutions for modern businesses.
            </p>
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors hover:scale-105 transform"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Bagian Foto */}
          <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl animate-fade-in-up delay-100">
            <Image
              src="/Fami.png"
              alt="Profile"
              fill
              className="object-cover hover:scale-105 transition-transform"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}