import React from 'react';
import step1 from '../assets/step1.png';
import step2 from '../assets/step2.png';
import step3 from '../assets/step3.png';
import step4 from '../assets/step4.png';
import step5 from '../assets/step5.png';

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#4169E1] via-[#9370DB] to-[#20B2AA] text-white px-6 py-12 font-sans">
      <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-8">

        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#334155] mb-8 text-center">
  Install AIrisMail Extension
</h1>


        <ol className="space-y-10 text-white">
          <li>
            <h2 className="text-2xl font-bold mb-2">Step 1: Download the ZIP File</h2>
            <p className="text-gray-100 mb-4">Click the button below to download the AIrisMail Chrome Extension ZIP file to your computer.</p>
            
            <a
              href="https://drive.google.com/file/d/1uYj5d6VVQtIXwi41Vnb38fxAI0-48CMY/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#0f172a] hover:bg-[#1e293b] text-white font-bold py-3 px-6 rounded-xl shadow-lg transition duration-300"
            >
              📦 Download ZIP File
            </a>


          </li>

          <li>
            <h2 className="text-2xl font-bold mb-2">Step 2: Extract the ZIP</h2>
            <p className="text-gray-100 mb-4">Unzip the downloaded file to a folder on your system.</p>
            
          </li>

          <li>
            <h2 className="text-2xl font-bold mb-2">Step 3: Load Extension in Chrome</h2>
            <p className="text-gray-100 mb-2">1. Open Chrome and go to <span className="text-yellow-200 font-mono">chrome://extensions</span></p>
            <img src={step1} alt="Download Step" className="rounded-lg shadow-lg mb-4 w-full max-w-md" />

            <p className="text-gray-100 mb-2">2. Enable <strong>Developer mode</strong> from the top right corner.</p>
            <img src={step2} alt="Extract ZIP Step" className="rounded-lg shadow-lg mb-4 w-full max-w-md" />

            <p className="text-gray-100 mb-4">3. Click <strong>Load unpacked</strong> and select the extracted folder.</p>
            <img src={step3} alt="Load Extension Step" className="rounded-lg shadow-lg mb-4 w-full max-w-md" />

            <p className="text-gray-100 mb-4">4. <strong>RESULT</strong> </p>
            <img src={step4} alt="Load Extension Step" className="rounded-lg shadow-lg mb-4 w-full max-w-md" />
            <img src={step5} alt="Load Extension Step" className="rounded-lg shadow-lg mb-4 w-full max-w-md" />
          </li>
        </ol>

        <div className="mt-12 text-center text-sm text-gray-300">
          Having issues? Reach out at <a href="mailto:adityarastogi620@gmail.com" className="underline text-pink-300">adityarastogi620@gmail.com</a>
        </div>
      </div>
    </div>
  );
}
