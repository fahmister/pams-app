import "@/app/pages/home/homestyle.css"
import Image from "next/image";
export default function HomeView() {
  return (
    <div className="hero-section">
      <div className="hero-text">
        <p className="text-lg">Hello, I’m Fahmi Muhammad,</p>
        <h1 className="hero-title">Full Stack Developer</h1>
        <button className="hero-button">Contact Me</button>
      </div>
      <Image src="/Fahmi.jpg" alt="Profile" className="rounded-2xl object-cover mx-auto"
      width={600} height={736}
      />
    </div>
  );
}