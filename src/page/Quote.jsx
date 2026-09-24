import React from 'react';
import { ArrowRight, Calculator, FileCheck } from 'lucide-react';

export default function Quote() {
  return (
    <div className="min-h-[calc(100vh-80px)] bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="inline-block px-4 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-[#b88f44] text-sm font-semibold mb-4">
          Cost Estimation & Quotation
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0c1b2a] tracking-tight">
          Hello from <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#caa359] to-[#9c7128]">Get a Quote</span>
        </h1>

        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Fill out the form below to receive a personalized cost breakdown and project schedule from MBA Contracting.
        </p>

        <div className="mt-10 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-gray-100">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Project Type</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359] text-gray-700">
                  <option>Commercial Finishing</option>
                  <option>Residential Contracting</option>
                  <option>Interior Fit-Out</option>
                  <option>Turnkey Architectural Build</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Approx. Area (Sq. Ft.)</label>
                <input
                  type="number"
                  placeholder="e.g. 2500"
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 uppercase mb-2">Project Details / Scope</label>
              <textarea
                rows="4"
                placeholder="Describe your requirements, timeline, and design expectations..."
                className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#caa359]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-white font-semibold text-base bg-gradient-to-r from-[#caa359] to-[#a37930] hover:shadow-lg transition-all"
            >
              <span>Submit Quote Request</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
