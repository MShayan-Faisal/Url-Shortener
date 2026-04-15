import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#0f0a14] text-white overflow-hidden relative">

      {/* Marquee Background Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="whitespace-nowrap text-[120px] font-bold text-white/5 animate-pulse">
          URL SHORTENER • GYPSY CODART • FAST LINKS •
        </div>
      </div>

      {/* Hero Content */}
      <section className="relative z-10 max-w-6xl w-full px-6 grid md:grid-cols-2 gap-10 items-center">

        {/* Left Text */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Shorten Your Links Instantly
          </h1>

          <p className="text-white/70 leading-relaxed">
            Welcome to the URL Shortener! A simple and efficient tool to shorten your long URLs.
            Gypsy CodArt helps you manage your links with ease, speed, and style.
          </p>
          <Link href="/shorten">
            <button className="bg-[#5D1C6A] hover:bg-purple-700 px-6 py-3 rounded-lg transition hover:cursor-pointer text-white font-medium ">
              Get Started
            </button>
          </Link>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/image.jpg"
            alt="diagram"
            width={500}
            height={400}
            className="rounded-xl shadow-2xl"
          />
        </div>

      </section>
    </main>
  );
}