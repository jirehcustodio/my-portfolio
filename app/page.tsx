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
        <div className="fixed inset-0 z-50 grid place-items-center bg-white/70 backdrop-blur-md text-[#222222] transition-opacity duration-500 data-[hide=true]:opacity-0" data-hide={introDone}>
          <div className="text-center">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">Welcome To My Portfolio</h1>
            <button
              onClick={() => {
                setIntroDone(true);
                setTimeout(() => setShowIntro(false), 500);
              }}
              className="mt-6 inline-flex items-center rounded-full border border-black/10 bg-[#222222] text-white px-6 py-3 text-sm hover:opacity-90 transition"
            >
              Enter
            </button>
          </div>
        </div>
      )}

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center px-6 sm:px-8 pt-28 pb-24">
          {/* Left: Headline and intro */}
          <div className="flex flex-col justify-center [animation:zoomIn_.7s_ease-out_both]">
            <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight tracking-tight mb-6">
              Engr. Jireh B. Custodio, CCSA
            </h1>
            <p className="mb-10 text-base sm:text-lg text-[#7B7B7B] max-w-prose">
              I turn complex problems into elegant, human-centered solutions—
              with a minimalist approach and smooth, intentional motion.
            </p>
            <div className="flex gap-3">
              <a className="rounded-full bg-[#222222] text-white px-6 py-3 text-sm shadow-sm hover:opacity-90 transition" href="#projects">View Projects</a>
              <a className="rounded-full border border-black/10 px-6 py-3 text-sm hover:bg-black/[.03] transition" href="#about">About Me</a>
            </div>
          </div>

          {/* Right: Portrait image, magazine/brochure style */}
          <div className="flex justify-end items-center">
            <div className="relative w-72 h-96 sm:w-[26rem] sm:h-[32rem] rounded-3xl shadow-md overflow-hidden ring-1 ring-black/10 bg-[#F8F8F8]">
              <Image
                src="/Me.png"
                alt="Portrait of Jireh Custodio"
                fill
                sizes="(max-width: 768px) 288px, 416px"
                className="object-cover grayscale hover:grayscale-0 transition duration-500 ease-out"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About + Stats */}
      <section id="about" className="border-t border-black/5 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 px-6 sm:px-8 py-24">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">About</h2>
            <p className="mt-5 text-[#7B7B7B] leading-relaxed max-w-prose">
              With experience across design systems, front-end engineering, and
              product thinking, I craft experiences that are clean, accessible,
              and highly performant—focused on clarity and purpose.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            <StatCard label="Projects" value="24+">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <rect x="3" y="3" width="7" height="7" rx="1"/>
                <rect x="14" y="3" width="7" height="7" rx="1"/>
                <rect x="3" y="14" width="7" height="7" rx="1"/>
                <rect x="14" y="14" width="7" height="7" rx="1"/>
              </svg>
            </StatCard>
            <StatCard label="Years" value="5+">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <circle cx="12" cy="12" r="9"/>
                <path d="M12 7v6l4 2"/>
              </svg>
            </StatCard>
            <StatCard label="Clients" value="12+">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#7B7B7B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="3"/>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </StatCard>
          </div>
        </div>
      </section>

      {/* Projects placeholder */}
      <section id="projects" className="bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-24">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Selected Projects</h2>
          <p className="mt-4 text-[#7B7B7B]">Coming soon.</p>
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

function StatCard({ label, value, children }: { label: string; value: string; children: React.ReactNode }) {
  return (
  <div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/10">
      <div className="flex items-center gap-3 mb-2">
        {children}
        <div className="text-xs uppercase tracking-widest text-[#7B7B7B]">{label}</div>
      </div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}
