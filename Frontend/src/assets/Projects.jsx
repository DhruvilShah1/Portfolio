import React from "react";
import {
  Video,
  CalendarDays,
  HeartHandshake,
  Brain,
  Github,
  ExternalLink,
  ArrowRight,
  Image,
} from "lucide-react";

const projects = [
  {
    title: "Video Conferencing SolutionDoctor",
    icon: CalendarDays,
    category: "Full Stack",
    description:
    "Engineered a browser-based video conferencing platform with AI chatbot integration, screen sharing,live chat, Q&A, polls, and role-based host controls." , 
    technologies: [
                  "Laravel",
                  "PHP",
                  "WebRTC",
                  "Firestore",
                  "JavaScript",
                ],
    github: "#",
  },

  {
    title: "Organ Donation Management System",
    icon: HeartHandshake,
    category: "Full Stack",
    description:
      "A platform connecting donors, hospitals, and recipients with secure registration, request tracking, and transparency throughout the donation process.",
    technologies: [
      "PHP",
      "Laravel",
      "MySQL",
      "JavaScript",
      "Bootstrap",
    ],
    github: "https://github.com/DhruvilShah1/OrganDonationManagementSystem",
    demo: null,
  },

  {
    title: "Loan Approval Prediction",
    icon: Brain,
    category: "Machine Learning",
    description:
      "Compared six ML models and achieved 98% accuracy using XGBoost for loan approval classification.",
    technologies: [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Pandas",
      "NumPy",
    ],
    github: "https://github.com/DhruvilShah1/loan_approved_model",
    demo: null,
  },
];

const Projects = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="rounded-full bg-white/60 px-5 py-2 text-sm font-medium text-[#D89C95] shadow backdrop-blur-md">
            🚀 Featured Work
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-800 md:text-5xl">
            Projects That Define My Journey
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-gray-600">
            From real-time communication systems to AI-powered
            solutions and healthcare applications, these projects
            showcase my passion for solving real-world problems.
          </p>
        </div>

        {/* Featured Project */}
        <div className="mb-16 overflow-hidden rounded-[40px] bg-gradient-to-r from-[#D89C95] to-[#C98780] p-10 text-white shadow-2xl">

          <div className="grid items-center gap-10 lg:grid-cols-2">

            <div>
              <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
                ⭐ Featured Project
              </span>

              <h3 className="mt-6 text-4xl font-bold">
                Doctor Appointment & Queue Management System
              </h3>

              <p className="mt-5 leading-relaxed text-white/90">
                Healthcare platform with appointment booking, role-based dashboards,
                 real-time patient queues, and QR-based prescriptions.

              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {
                
                [      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "Tailwind",
].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/20 px-4 py-2 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">

                <a
                  href="https://github.com/DhruvilShah1/DoctorAppointment"
                  className="flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#D89C95]"
                >
                  <Github size={18} />
                  GitHub
                </a>

                <a
                  href="https://doctor-appointment-kohl-phi.vercel.app/"
                  className="flex items-center gap-2 rounded-full border border-white px-6 py-3"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>

              </div>
            </div>

            <div className="flex justify-center">
              <div className="rounded-[40px] bg-white/10 p-10 backdrop-blur-md">
                <Image size={120} />
              </div>
            </div>

          </div>
        </div>

        {/* Other Projects */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <div
                key={project.title}
                className="group rounded-[32px] border border-white/40 bg-white/60 p-8 shadow-xl backdrop-blur-md transition hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className="inline-flex rounded-2xl bg-[#D89C95]/10 p-4">
                  <Icon
                    className="text-[#D89C95]"
                    size={32}
                  />
                </div>

                <span className="mt-6 inline-block rounded-full bg-[#D89C95]/10 px-4 py-1 text-sm text-[#D89C95]">
                  {project.category}
                </span>

                <h3 className="mt-4 text-2xl font-bold text-gray-800">
                  {project.title}
                </h3>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-3">

                  <a
                    href={project.github}
                    className="flex items-center gap-2 rounded-full border border-[#D89C95] px-5 py-3 text-[#D89C95] transition hover:bg-[#D89C95] hover:text-white"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      className="flex items-center gap-2 rounded-full bg-[#D89C95] px-5 py-3 text-white"
                    >
                      <ExternalLink size={18} />
                      Demo
                    </a>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-[40px] border border-white/40 bg-white/60 p-10 text-center shadow-xl backdrop-blur-md">

          <h3 className="text-3xl font-bold text-gray-800">
            Want to Explore More?
          </h3>

          <p className="mt-4 text-gray-600">
            Check out my GitHub for additional projects,
            experiments, and open-source contributions.
          </p>

          <a
            href="https://github.com/YOUR_USERNAME"
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#D89C95] px-8 py-4 text-white shadow-lg transition hover:-translate-y-1"
          >
            Visit GitHub
            <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Projects;