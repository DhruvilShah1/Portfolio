import React from "react";
import {
  Briefcase,
  Calendar,
  MapPin,
  Building2,
  CheckCircle,
} from "lucide-react";

const experiences = [
  {
    company: "Axe Force Technologies LLP",
    role: "Full Stack Developer Intern",
    location: "Ahmedabad",
    duration: "January 2025 – May 2025",
    type: "Internship",
    achievements: [
      "Designed a WebRTC-based video conferencing solution compatible with shared hosting environments, eliminating the need for VPS or root-level server access.",
      "Built real-time communication features using Laravel, PHP, JavaScript, Firestore, and WebRTC including camera/microphone controls, screen sharing, live chat, polls, and an AI chatbot.",
      "Developed an admin tracking dashboard to monitor in-meeting activities and implemented host controls for managing participants.",
      "Followed clean code principles to build maintainable, scalable, and well-structured applications.",
    ],
  },
  {
    company: "Jinarth Infotech",
    role: "Web Development Intern",
    location: "Anand",
    duration: "May 2024 – June 2024",
    type: "Internship",
    achievements: [
      "Developed a complete e-commerce website featuring product listings, shopping cart, checkout, and order tracking using HTML, CSS, JavaScript, and PHP.",
      "Built an admin panel to manage products, orders, and user accounts aligned with industry practices.",
      "Collaborated within a professional development team to deliver client-ready solutions.",
    ],
  },
];

const WorkExperience = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-[#D89C95] shadow backdrop-blur-md">
            💼 Professional Journey
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-800 md:text-5xl">
            Work Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Hands-on industry experience building scalable applications,
            real-time systems, and client-focused solutions.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-5 top-0 hidden h-full w-1 rounded-full bg-[#D89C95]/30 md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:gap-8"
              >
                {/* Timeline Icon */}
                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D89C95] shadow-lg">
                    <Briefcase className="text-white" size={24} />
                  </div>
                </div>

                {/* Card */}
                <div className="w-full rounded-3xl border border-white/40 bg-white/60 p-8 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  {/* Top Section */}
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <Building2
                          className="text-[#D89C95]"
                          size={24}
                        />

                        <h3 className="text-2xl font-bold text-gray-800">
                          {exp.company}
                        </h3>

                        <span className="rounded-full bg-[#D89C95]/10 px-4 py-1 text-sm font-semibold text-[#D89C95]">
                          {exp.type}
                        </span>
                      </div>

                      <p className="mt-2 text-lg font-semibold text-gray-700">
                        {exp.role}
                      </p>
                    </div>

                    <div className="space-y-2 text-sm text-gray-500">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-8 space-y-4">
                    {exp.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle
                          className="mt-1 shrink-0 text-[#D89C95]"
                          size={18}
                        />

                        <p className="leading-relaxed text-gray-600">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkExperience;