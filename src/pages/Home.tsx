import React from "react";
import video from "../assets/mitopulse.mp4";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Video Section */}
      <section className="relative w-full h-[50vh] md:h-[75vh]">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="object-fill w-full h-full"
        />
        
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-white">
          <h1 className="text-2xl md:text-6xl font-bold font-exo2">Accelerating Muscle Recovery</h1>
          <p className="md:text-2xl text-center mt-5 font-exo2">
            Empowering your body’s energy. Discover the future of cellular health with revolutionary solutions.
          </p>
          <button className="mt-10 px-8 py-3 border-2 bg-transparent rounded-full font-exo2 text-lg transition-all duration-300 ease-in-out hover:bg-accent cursor-pointer">
            Get Started
          </button>
        </div>
      </section>

      {/* Information Section */}
      <section className="w-full bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">The Future of Muscle Recovery</h2>
          <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
            Unlock the power of BIXEPS and Quantum Mitohormesis to enhance mitochondrial health, optimize energy production, and accelerate recovery.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">BIXEPS Technology</h3>
              <p className="text-lg text-gray-600">
                BIXEPS integrates cutting-edge biological intelligence to enhance performance, recovery, and longevity at a cellular level.
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">QMT</h3>
              <p className="text-lg text-gray-600">
                Quantum Mitohormesis uses quantum energy to stimulate and optimize mitochondrial function, boosting energy production and recovery.
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mitochondria Health</h3>
              <p className="text-lg text-gray-600">
                Mitochondria power your muscles. Improving mitochondrial function enhances energy production, endurance, and accelerates muscle recovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-10 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-900 text-center">What Our Users Say</h2>
          <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-md">
              <p className="text-lg text-gray-700">
                "Using BIXEPS has transformed my recovery routine. The results were amazing, and I felt stronger within days!"
              </p>
              <p className="mt-4 text-lg font-semibold text-gray-900">John D.</p>
              <p className="text-sm text-gray-500">Professional Athlete</p>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-gray-100 p-8 rounded-xl shadow-lg max-w-md">
              <p className="text-lg text-gray-700">
                "Quantum Mitohormesis has been a game-changer. My energy levels and muscle recovery have never been better."
              </p>
              <p className="mt-4 text-lg font-semibold text-gray-900">Emily R.</p>
              <p className="text-sm text-gray-500">Fitness Enthusiast</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
