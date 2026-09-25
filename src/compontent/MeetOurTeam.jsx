import React from 'react';

export default function MeetOurTeam() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Image with shadow/offset effect */}
          <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-none">
            {/* Background shadow/offset block */}
            <div className="absolute inset-0 bg-gray-200 rounded-[2rem] transform translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6"></div>
            
            {/* Main Image */}
            <div className="relative h-[450px] sm:h-[550px] rounded-[2rem] overflow-hidden bg-white shadow-xl">
              <img 
                src="/who_we_are_team.jpg" 
                alt="Meet Our Team - MBA Contracting" 
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="flex flex-col justify-center space-y-6 mt-8 lg:mt-0">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#1f2937] tracking-tight mb-2">
              Meet Our Team
            </h2>
            
            <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
              Our success is built on the expertise and dedication of our team. From certified engineers and skilled technicians to project managers and customer support specialists, every team member is committed to delivering exceptional service.
            </p>

            <div className="space-y-5">
              <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                <strong className="text-[#1f2937] font-bold">Our Engineers:</strong> Licensed professionals with years of experience in Doha's property maintenance industry. Certified in their respective fields and continuously trained on the latest techniques and technologies.
              </p>
              
              <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                <strong className="text-[#1f2937] font-bold">Our Technicians:</strong> Skilled craftsmen who take pride in their work. From AC specialists to plumbers, electricians to painters, every technician brings expertise and professionalism to every job.
              </p>
              
              <p className="text-[#4b5563] text-[15px] sm:text-base leading-relaxed">
                <strong className="text-[#1f2937] font-bold">Our Support Team:</strong> Friendly, knowledgeable staff ready to answer questions, schedule services, and ensure your experience with MBA Contracting exceeds expectations.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
