import React from 'react';
import { Link } from 'react-router-dom';
import { Gem, Handshake, Settings, Users, ArrowRight } from 'lucide-react';

export default function CtaSection() {
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 overflow-hidden bg-[#070e17]">
      {/* Doha Skyline Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/doha_skyline.jpg"
          alt="Doha Qatar Skyline"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#060c14]/95 via-[#08121d]/90 to-[#070e17]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Side: Headline & 4 Pillars */}
          <div className="lg:col-span-8">
            <span className="text-[11px] font-bold tracking-[0.2em] text-gray-400 uppercase">
              WHY CHOOSE MBA CONTRACTING
            </span>

            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
              Built on Trust. Focused on Results.
            </h2>
            <div className="w-12 h-1 bg-[#caa359] mt-3 rounded-full" />

            {/* 4 Value Pillars in a horizontal grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              
              {/* 1. Quality-Focused Approach */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-[#caa359] flex items-center justify-center mb-3">
                  <Gem className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  Quality-Focused Approach
                </h4>
              </div>

              {/* 2. Complete Solutions */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-[#caa359] flex items-center justify-center mb-3">
                  <Handshake className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  Complete Solutions
                </h4>
              </div>

              {/* 3. Practical Project Execution */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-[#caa359] flex items-center justify-center mb-3">
                  <Settings className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  Practical Project Execution
                </h4>
              </div>

              {/* 4. Client-Centered Service */}
              <div className="flex flex-col items-start">
                <div className="w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/10 text-[#caa359] flex items-center justify-center mb-3">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold text-white leading-snug">
                  Client-Centered Service
                </h4>
              </div>

            </div>
          </div>

          {/* Right Side: Golden Card ("Let's Build Your Next Project") */}
          <div className="lg:col-span-4">
            <div className="p-8 rounded-2xl bg-gradient-to-br from-[#caa359] via-[#b88d44] to-[#9c7128] text-white shadow-2xl relative overflow-hidden">
              <div className="w-10 h-1 bg-white/60 rounded-full mb-4" />
              <h3 className="text-2xl font-black tracking-tight leading-snug">
                Let's Build Your Next Project
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-white/90 leading-relaxed">
                Get in touch with our team today.
              </p>

              <div className="mt-6">
                <Link
                  to="/contact"
                  className="w-full inline-flex items-center justify-between px-5 py-3 rounded-lg bg-[#0c1b2a] hover:bg-[#16293d] text-white font-semibold text-xs sm:text-sm shadow-md transition-all group"
                >
                  <span>Request a Consultation</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
