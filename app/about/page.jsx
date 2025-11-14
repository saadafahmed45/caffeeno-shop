import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-[#F7F3EF] text-gray-800">
      {/* ========== HERO SECTION ========== */}
      <section className="relative w-full h-[70vh]">
        <img
          src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg"
          alt="Coffee hero"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow">
            About <span className="text-amber-500">Caffeeno</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
            Where passion meets perfection — discover the story behind the cup.
          </p>
        </div>
      </section>

      {/* ========== STORY SECTION ========== */}
      <section className="py-20 px-6 md:px-16 lg:px-28">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT IMAGE */}
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/585750/pexels-photo-585750.jpeg"
              alt="Barista"
              className="rounded-2xl shadow-xl w-full h-[420px] object-cover"
            />
            <div className="absolute inset-0 bg-black/10 rounded-2xl"></div>
          </div>

          {/* RIGHT CONTENT */}
          <div>
            <h2 className="text-4xl font-bold text-gray-900">
              A Journey Rooted in Passion
            </h2>
            <p className="mt-6 leading-relaxed text-gray-700">
              Caffeeno began as a small dream — to bring authentic, premium
              coffee to people who value quality and comfort. What started from
              a tiny corner shop has grown into a warm, welcoming coffee brand
              loved by thousands.
            </p>

            <p className="mt-4 leading-relaxed text-gray-700">
              From carefully selected beans to expert roasting and brewing
              techniques, every cup we serve carries our heart and dedication.
              We want every sip to feel like a warm hug, every aroma to spark
              joy, and every visit to feel like home.
            </p>
          </div>
        </div>
      </section>

      {/* ========== MISSION SECTION ========== */}
      <section className="py-20 px-6 bg-[#EDE7E1]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#603809]">
            Our Mission
          </h2>
          <p className="mt-6 text-center max-w-3xl mx-auto text-gray-700 leading-relaxed">
            Our mission is simple — **to create unforgettable coffee moments**.
            Whether it's the morning boost, a relaxing evening blend, or a quiet
            conversation with a friend, we aim to elevate every moment with the
            best possible coffee experience. We believe coffee is not just a
            drink — it's an emotion.
          </p>
        </div>
      </section>

      {/* ========== 3 IMAGES SHOWCASE ========== */}
      <section className="py-20 px-6 md:px-16 lg:px-28">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg"
              alt="Coffee beans"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg"
              alt="Brewing"
              className="w-full h-72 object-cover"
            />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/977876/pexels-photo-977876.jpeg"
              alt="Cafe interior"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* ========== VALUES SECTION ========== */}
      <section className="py-20 px-6 bg-[#F4EFEA]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-[#603809]">
            What Makes Caffeeno Special?
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-12">
            {/* Single Value */}
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-amber-700">
                Premium Beans
              </h3>
              <p className="mt-3 text-gray-700">
                We carefully hand-pick the finest Arabica & Robusta beans to
                ensure a smooth, rich, and aromatic taste in every sip.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-amber-700">
                Expert Craft
              </h3>
              <p className="mt-3 text-gray-700">
                Our baristas blend passion with skill to craft the perfect cup,
                using traditional and modern brewing techniques.
              </p>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-semibold text-amber-700">
                Cozy Atmosphere
              </h3>
              <p className="mt-3 text-gray-700">
                Whether you're studying, working, or just relaxing, Caffeeno
                offers a warm and comfortable ambience for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FOOTER CTA SECTION ========== */}
      <section className="py-24 bg-[#603809] text-white text-center">
        <h2 className="text-4xl font-bold">Join Our Coffee Family</h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-200">
          Follow our journey, explore our flavors, and stay updated with
          everything brewing at Caffeeno.
        </p>

        <button className="mt-8 bg-amber-500 hover:bg-amber-600 px-10 py-4 rounded-xl text-lg font-semibold transition">
          Explore Menu
        </button>
      </section>
    </div>
  );
};

export default AboutPage;
