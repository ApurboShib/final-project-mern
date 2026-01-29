import React from "react";

// Import brand logos
import amazon from "../../../assets/brands/amazon.png";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";

const companies = [
  { name: "Amazon", logo: amazon },
  { name: "Amazon Vector", logo: amazonVector },
  { name: "Casio", logo: casio },
  { name: "Moonstar", logo: moonstar },
  { name: "Randstad", logo: randstad },
  { name: "Star", logo: star },
  { name: "Start People", logo: startPeople },
];

const Companies = () => {
  // Duplicate companies for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header with fade-in animation */}
        <div className="text-center mb-16 animate-fade-in">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary font-semibold text-sm uppercase tracking-wider rounded-full font-urbanist mb-4">
            Trusted Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mt-2 mb-4 font-urbanist">
            Companies We Serve
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto font-urbanist text-lg">
            We are proud to provide our logistics services to these amazing
            companies, delivering excellence and reliability every day.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="w-12 h-1 bg-primary/30 rounded-full"></div>
            <div className="w-24 h-1.5 bg-primary rounded-full"></div>
            <div className="w-12 h-1 bg-primary/30 rounded-full"></div>
          </div>
        </div>

        {/* Marquee Container */}
        <div className="relative">
          {/* Gradient Overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Row - Moving Left */}
          <div className="flex marquee-container">
            <div className="flex gap-8 animate-marquee">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`row1-${index}`}
                  className="group flex-shrink-0 flex items-center justify-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 w-44 h-28 hover:scale-105"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-14 max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
            <div className="flex gap-8 animate-marquee" aria-hidden="true">
              {duplicatedCompanies.map((company, index) => (
                <div
                  key={`row1-dup-${index}`}
                  className="group flex-shrink-0 flex items-center justify-center p-6 rounded-2xl bg-white border border-gray-100 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 w-44 h-28 hover:scale-105"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="max-h-14 max-w-full object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section with animated counters */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="text-center group cursor-default">
            <div className="relative">
              <span className="text-5xl md:text-6xl font-bold text-primary font-urbanist transition-transform duration-300 group-hover:scale-110 inline-block">
                7+
              </span>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary/20 rounded-full animate-ping"></div>
            </div>
            <p className="text-gray-600 font-urbanist mt-2 text-sm uppercase tracking-wider">
              Partner Companies
            </p>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
          <div className="text-center group cursor-default">
            <span className="text-5xl md:text-6xl font-bold text-primary font-urbanist transition-transform duration-300 group-hover:scale-110 inline-block">
              100%
            </span>
            <p className="text-gray-600 font-urbanist mt-2 text-sm uppercase tracking-wider">
              Satisfaction Rate
            </p>
          </div>
          <div className="w-px h-16 bg-gray-200 hidden md:block"></div>
          <div className="text-center group cursor-default">
            <span className="text-5xl md:text-6xl font-bold text-primary font-urbanist transition-transform duration-300 group-hover:scale-110 inline-block">
              24/7
            </span>
            <p className="text-gray-600 font-urbanist mt-2 text-sm uppercase tracking-wider">
              Support Available
            </p>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        @keyframes marquee-reverse {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(0);
          }
        }

        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }

        .animate-marquee-reverse {
          animation: marquee-reverse 30s linear infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .marquee-container {
          display: flex;
          width: max-content;
        }

        .marquee-container:hover .animate-marquee,
        .marquee-container:hover .animate-marquee-reverse {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Companies;
