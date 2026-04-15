import React from 'react'

export default function About() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-6 py-20">

      <div className="max-w-4xl text-center space-y-10">

        {/* Small label */}
        <p className="tracking-[0.3em] text-sm text-gray-500 animate-fade-in">
          ABOUT US
        </p>

        {/* Big headline */}
        <h1 className="text-4xl md:text-6xl font-light text-black leading-tight animate-fade-up">
          Minimal Design.
          <br />
          Maximum Impact.
        </h1>

        {/* Divider line */}
        <div className="w-20 h-0.5 bg-black mx-auto opacity-30"></div>

        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto animate-fade-in">
          Gypsy CodArt is a modern URL shortener platform focused on simplicity,
          performance, and clean user experience. We believe in removing complexity
          and delivering fast, elegant tools that just work.
        </p>

        {/* Feature row */}
        <div className="flex flex-col md:flex-row justify-center gap-10 pt-6 text-sm text-gray-500 animate-fade-in-up">

          <div>
            <p className="text-black font-medium">FAST</p>
            <p>Instant link generation</p>
          </div>

          <div>
            <p className="text-black font-medium">MINIMAL</p>
            <p>No unnecessary clutter</p>
          </div>

          <div>
            <p className="text-black font-medium">RELIABLE</p>
            <p>Stable & scalable system</p>
          </div>

        </div>

      </div>
    </main>
  );
}
