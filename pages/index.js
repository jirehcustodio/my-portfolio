import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

export default function Home() {
  return (
    <div className="bg-[#F8F8F8] min-h-screen text-[#222222]">
      <Navbar />
      <main className="max-w-5xl mx-auto py-24 px-6">
        <h1 className="text-5xl font-bold mb-6">Hi, I’m Absol 👋</h1>
        <p className="text-[#7B7B7B] text-lg leading-relaxed mb-12">
          I specialize in turning complex problems into elegant solutions. My
          approach blends creativity with strategy to deliver designs that not
          only look great but work seamlessly.
        </p>
        <a
          href="/about"
          className="px-6 py-3 bg-[#222222] text-white rounded-xl shadow hover:opacity-80"
        >
          Learn More About Me
        </a>
      </main>
      <Footer />
    </div>
  );
}
