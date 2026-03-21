import React from "react";
import { Link } from "react-router-dom";
import { Briefcase, ThumbsUp, HandHeart, Award } from "lucide-react";
import NavBar from "../components/NavBar";

function Landingpage() {
  const features = [
    {
      icon: <Briefcase size={60} />,
      title: "Heritage",
      desc: "Rooted in generations of traditional Tamil culinary heritage.",
    },
    {
      icon: <Award size={60} />,
      title: "Best Quality",
      desc: "Premium ingredients with uncompromised quality standards.",
    },
    {
      icon: <HandHeart size={60} />,
      title: "Good Service",
      desc: "Professional, timely, and courteous service at every event.",
    },
    {
      icon: <ThumbsUp size={60} />,
      title: "Authentic Taste",
      desc: "True Tamil Nadu flavors prepared the traditional way.",
    },
  ];
  const stats = [
    {
      value: "20+",
      label: "years of Experience",
    },
    {
      value: "1000+",
      label: "Successful projects",
    },
    {
      value: "500+",
      label: "Happy Customer",
    },
    {
      value: "350+",
      label: "Team Members",
    },
  ];

  return (
    <>
      <NavBar />
      <div className="hero-section">
        {/* Center Content */}
        <div className="hero-box">
          <h1 className="hero-text">
            From grand wedding feasts to homely functions, we serve
            time-honoured Tamil recipes prepared with care and devotion.
          </h1>

          <div className="hero-buttons">
            <button className="hero-btn">
              <Link to="/about">Explore →</Link>
            </button>

            <button className="hero-btn">Ask for a quote →</button>
          </div>
        </div>
      </div>
      <section className="why-bg py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-semibold whychooshead">
            why choose us
          </h2>

          <div className="w-32 h-2px bg-black mx-auto mt-2 mb-4 headunderline"></div>

          <p className="max-w-3xl mx-auto text-gray-700 text-sm whychooseparaha">
            We dont just cook food we preserve the heritage and soul of
            authentic Tamil Nadu cuisine. Every dish is crafted with traditional
            methods and native spices to deliver a taste that feels truly
            home-grown.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-10">
          {features.map((item, index) => (
            <div key={index} className="feature-card text-center p-8">
              <div className="flex justify-center mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>

              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* WHAT WE DO SECTION */}
      <section className="services-bg py-20 text-center">
        <h3 className="text-3xl font-serif font-semibold whychooshead">
          What we Do
        </h3>
        <h2 className="text-2xl font-semibold ">Premium Catering Service</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {/* Card 1 */}
          <div className="service-card">
            <img src="merrageimg.svg" className="service-img" />

            <div className="p-4">
              <h3 className="font-semibold text-lg">Wedding Event</h3>

              <p className="text-sm text-gray-700 mt-2">
                Traditional Tamil wedding feasts with authentic menu options for
                reception, muhurtham, and other ceremonies.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <img src="birthdayevent.svg" className="service-img" />

            <div className="p-4">
              <h3 className="font-semibold text-lg">Birthday Event</h3>

              <p className="text-sm text-gray-700 mt-2">
                Daily tiffin delivery with variety rice options, curries, and
                accompaniments.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <img src="dimondweding.svg" className="service-img" />

            <div className="p-4">
              <h3 className="font-semibold text-lg">Authentic Meals</h3>

              <p className="text-sm text-gray-700 mt-2">
                Authentic Tamil Nadu meals served on banana leaves with all
                accompaniments.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}

        <button className="services-btn mt-10">View all our Services →</button>
      </section>
      {/*experience block */}
      <section className="max-w-7xl mx-auto px-6 py-12 overexperience">
        <div className="bg-gradient-to-r from-[#a88946] via-[#947a3d] to-[#6d5a2d] rounded-[40px] md:rounded-[80px] p-12 md:p-16 shadow-2xl innerexperience">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <span className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-2">
                  {stat.value}
                </span>
                <p className="text-xl md:text-2xl font-bold text-black leading-tight max-w-[200px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/*short about us */}
      <section id="about" className=" mx-auto px-4 py-16 outerabout">
        <div className="bg-gradient-to-br from-gray-700 via-gray-600 to-gray-500 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl">
          <div className="md:w-1/2 h-[400px] md:h-auto overflow-hidden">
            <img
              src="aboutshorimg.svg"
              alt="Gourmet Food"
              className="w-full object-cover opacity-80 aboutimage"
            />
          </div>
          <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center items-center text-center text-white">
            <h2 className="text-2xl font-serif mb-10 border-b-2 border-white inline-block pb-1 headabout">
              About Us
            </h2>
            <div className="aboutpara">
              <h3 className="text-3xl md:text-4xl font-bold mt-6 mb-4">
                A Legacy of Excellence Since 2005
              </h3>
              <p className="text-lg opacity-90 max-w-lg mb-10 leading-relaxed">
                For over 15 years, SPR Catering has been the premier choice for
                discerning clients seeking extraordinary culinary experiences.
              </p>
            </div>
            <button className="bg-gradient-to-r from-[#e5cf94] to-[#c5a86a] text-black font-bold px-10 py-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2 aboutusbutton">
              <Link to="/about">More About Us</Link>{" "}
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Landingpage;
