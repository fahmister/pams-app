import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="min-h-screen bg-[#1F2937] pt-32 pb-20 md:pt-40"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Bagian Teks */}
        <div className="space-y-6">
          <p className="text-lg font-medium text-[#FF8C42]">Hello, I'm</p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Fahmi Muhammad
          </h1>
          <h2 className="text-2xl font-semibold text-gray-300">
            Full Stack Developer
          </h2>
          <p className="text-lg text-gray-300">
            Building scalable and high-performance web solutions
          </p>
          <Link
            href="#contact"
            className="inline-block rounded-lg bg-[#FF8C42] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#FF7B35] focus:outline-none focus:ring-2 focus:ring-[#FF8C42] focus:ring-offset-2"
          >
            Get in touch
          </Link>
        </div>

        {/* Bagian Foto */}
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl border-4">
          <Image
            src="/Fami.png"
            alt="Profile"
            fill
            priority
            sizes="(max-width: 768px) 500vw, 150vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}