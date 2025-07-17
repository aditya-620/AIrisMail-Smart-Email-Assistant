export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4169E1] via-[#9370DB] to-[#20B2AA] text-white px-6 py-12 font-serif">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8 text-gray-900">
        
        {/* Title */}
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#1f2937] via-[#111827] to-[#0f172a] mb-4 text-center">
          AIrisMail
        </h2>

        {/* Intro Paragraph */}
        <p className="text-lg mb-6 text-center text-gray-800">
          Welcome to <span className="font-bold text-pink-500">AIrisMail</span> — a project crafted with passion and dedication by a solo developer. This is my personal journey to create a seamless, AI-powered email response tool that empowers anyone to communicate efficiently and securely.
        </p>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Story */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">My Story</h3>
            <p className="text-gray-800">
              AIrisMail was born from my own need for smarter, faster email replies. Frustrated by repetitive email tasks and the desire for quick, thoughtful responses, I set out to build a solution that combines cutting-edge AI with a privacy-first mindset. Every line of code, every design choice, and every feature is a reflection of my commitment to making digital communication effortless.
            </p>
          </div>

          {/* Mission & Values */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-gray-900">Mission & Values</h3>
            <ul className="list-disc pl-5 text-gray-800 space-y-2">
              <li><span className="font-semibold text-pink-500">Innovation:</span> Leveraging advanced AI to simplify communication.</li>
              <li><span className="font-semibold text-pink-500">Privacy:</span> Your data stays yours—always.</li>
              <li><span className="font-semibold text-pink-500">Simplicity:</span> Designed to be intuitive, accessible, and visually modern.</li>
              <li><span className="font-semibold text-pink-500">Trust:</span> Built with transparency and user empowerment at its core.</li>
            </ul>
          </div>
        </div>

        {/* Why Choose */}
        <h3 className="text-2xl font-bold mb-4 text-center text-gray-900">Why Choose AIrisMail?</h3>
        <ul className="list-disc pl-5 text-gray-800 space-y-2 mb-6">
          <li>Solo Crafted: Every aspect of this project is personally designed, coded, and maintained by me.</li>
          <li>Save Time: Instantly generate smart, context-aware replies.</li>
          <li>Stay Secure: Your emails never leave your device.</li>
          <li>Look Professional: Choose your tone and let AI polish your message.</li>
          <li>Always Improving: I listen to feedback and continuously enhance features.</li>
        </ul>

        <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-800">
  {/* Gmail */}
  <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl hover:scale-105 transition duration-300">
    <span className="text-red-500 text-xl">📧</span>
    <a href="mailto:adityarastogi620@gmail.com" className="font-semibold text-pink-600 hover:underline">
      Gmail
    </a>
  </div>

  {/* LinkedIn */}
  <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl hover:scale-105 transition duration-300">
    <span className="text-blue-600 text-xl">💼</span>
    <a
      href="https://www.linkedin.com/in/aditya-rastogi-5b5054231/"
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-blue-600 hover:underline"
    >
      LinkedIn
    </a>
  </div>

  {/* GitHub */}
  <div className="flex items-center gap-3 bg-white/20 backdrop-blur-md px-6 py-4 rounded-xl hover:scale-105 transition duration-300">
    <span className="text-gray-900 text-xl">🐱</span>
    <a
      href="https://github.com/aditya-620"
      target="_blank"
      rel="noreferrer"
      className="font-semibold text-gray-900 hover:underline"
    >
      GitHub
    </a>
  </div>
</div>



        {/* Footer Note */}
        <p className="mt-8 text-center text-sm text-gray-600">
          Thank you for exploring AIrisMail. Built solo, for everyone who values their time and privacy.
        </p>
      </div>
    </div>
  );
}
