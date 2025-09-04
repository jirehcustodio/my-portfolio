"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [introDone, setIntroDone] = useState(false);

  // Auto-hide intro after 2.5s as a fallback (still requires tap/click to continue)
  useEffect(() => {
    const t = setTimeout(() => setIntroDone(true), 2500);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Intro overlay */}
      {showIntro && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-white/70 backdrop-blur-md text-[#222222] transition-opacity duration-700 data-[hide=true]:opacity-0" data-hide={introDone}>
          <div className="text-center">
            <p className="text-xs tracking-widest text-[#7B7B7B] mb-2">WELCOME</p>
            <h1 className="text-3xl sm:text-5xl font-bold">Welcome To My Portfolio</h1>
            <button
              onClick={() => {
                setIntroDone(true);
                setTimeout(() => setShowIntro(false), 650); // allow fade-out
              }}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#222222] text-white px-6 py-3 text-sm hover:opacity-90 transition"
            >
              Enter
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-6 pt-28 pb-16">
          {/* Left: Headline and intro */}
          <div className="flex flex-col justify-center [animation:zoomIn_.8s_ease-out_both]">
            <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-6">
              Engr. Jireh B. Custodio, CCSA
            </h1>
            <p className="mb-8 text-lg text-[#7B7B7B] max-w-prose">
              I turn complex problems into elegant, human-centered solutions—
              with a minimalist approach and smooth, intentional motion.
            </p>
            <div className="flex gap-3">
              <a className="rounded-xl bg-[#222222] text-white px-5 py-3 text-sm shadow hover:opacity-90 transition" href="#projects">View Projects</a>
              <a className="rounded-xl border border-black/10 px-5 py-3 text-sm hover:bg-black/[.03] transition" href="#about">About Me</a>
            </div>
          </div>

          {/* Right: Portrait image, magazine/brochure style */}
          <div className="flex justify-end items-center">
            <div className="relative w-72 h-96 sm:w-96 sm:h-[28rem] rounded-3xl shadow-xl overflow-hidden ring-1 ring-black/5 bg-[#F8F8F8] flex items-end">
              <Image
                src="/Me.png"
                alt="Portrait of Jireh Custodio"
                fill
                sizes="(max-width: 768px) 288px, 384px"
                className="object-cover grayscale hover:grayscale-0 transition duration-500 ease-out"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About + Stats */}
      <section id="about" className="border-t border-black/5 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-6 py-16">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">About</h2>
            <p className="mt-4 text-[#7B7B7B] leading-relaxed">
              With experience across design systems, front-end engineering, and
              product thinking, I craft experiences that are clean, accessible,
              and highly performant—focused on clarity and purpose.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-4">
            {[
              { label: "Projects", value: "24+" },
              { label: "Years", value: "5+" },
              { label: "Clients", value: "12+" },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl bg-[#F8F8F8] p-6 shadow-sm ring-1 ring-black/5">
                <div className="text-3xl font-bold">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-[#7B7B7B]">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects placeholder */}
      <section id="projects" className="bg-[#F8F8F8]">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <h2 className="text-2xl sm:text-3xl font-bold">Selected Projects</h2>
          <p className="mt-3 text-[#7B7B7B]">Coming soon.</p>
        </div>
      </section>

      {/* Keyframe helpers (scoped to page) */}
      <style jsx global>{`
        @keyframes zoomIn {
          from { transform: scale(0.98); opacity: .001; filter: blur(2px) }
          to { transform: scale(1); opacity: 1; filter: blur(0) }
        }
      `}</style>
    </main>
  );
}
