import React from "react";

function About() {
  return (
    <div className="w-full">
      <div
        className="w-full h-75 bg-cover bg-center relative"
        style={{
          backgroundImage: "url('aboutheader.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-2 text-sm">Home / About Us</p>
        </div>
      </div>

      <div className="bg-linear-to-r from-gray-300 to-gray-500 py-16 px-6 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-semibold">About us</h2>
            <div className="w-16 h-1 bg-yellow-500 mx-auto mt-3"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <img
                src="About-us.svg"
                alt="About-Us-Frame"
                className="rounded-xl shadow-lg"
              />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-4">
                Setting the Benchmark with Exceptional Catering
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                We set industry standards through uncompromising quality,
                authentic flavors, and meticulous execution. Every event is
                crafted with precision, combining traditional expertise with
                modern catering excellence.
              </p>

              <p className="text-gray-600 leading-relaxed mb-6">
                From ingredient selection to presentation, we maintain
                benchmarks that exceed expectations. Our commitment to
                consistency, hygiene, and service defines true culinary
                professionalism.
              </p>

              <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-full shadow-md transition">
                Book Now →
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 py-20 text-center">
        <h2 className="text-3xl font-semibold mb-10">
          Founder
          <div className="w-16 h-1 bg-yellow-600 mx-auto mt-2"></div>
        </h2>

        <div className="flex flex-col items-center">
          <img
            src="./founder-mockup-image.jpg"
            alt="founder"
            className="w-65 h-64 rounded-full object-cover shadow-lg mb-6"
          />

          <h3 className="text-2xl font-semibold">Founder Name here</h3>
          <p className="text-[#322E2E]-600">Solo proprietor</p>
        </div>
      </div>
    </div>
  );
}
export default About;
