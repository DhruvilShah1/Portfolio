import React from "react";
import {
  Briefcase,
  Laptop,
  Brain,
  Database,
  Code2,
  Globe,
  CheckCircle2,
  Download,
  ArrowRight,
} from "lucide-react";

const roles = [
  "Data Scientist",
  "Machine Learning Engineer",
  "AI Engineer",
  "Full Stack Developer",
  "Software Developer",
];

const services = [
  {
    title: "Full Stack Development",
    icon: Globe,
    description:
      "Building responsive and scalable web applications using MERN Stack, PHP, and Laravel.",
  },
  {
    title: "AI & Machine Learning",
    icon: Brain,
    description:
      "Developing ML models, predictive systems, and AI-powered solutions.",
  },
  {
    title: "Database Solutions",
    icon: Database,
    description:
      "Designing efficient databases and integrating real-time data workflows.",
  },
  {
    title: "Custom Web Applications",
    icon: Code2,
    description:
      "Creating tailored solutions for startups, businesses, and clients.",
  },
];

const strengths = [
  "Internship Experience",
  "Real-World Projects",
  "Fast Learner",
  "Problem Solver",
  "Clean & Scalable Code",
  "Strong Team Collaboration",
];

const Opportunities = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Hero */}
        <div className="rounded-[40px] bg-gradient-to-r from-[#D89C95] to-[#C98780] p-10 text-center text-white shadow-2xl">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm backdrop-blur-md">
            🚀 Open To Opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-6xl">
            Looking for Full-Time Roles
            <br />
            & Freelance Projects
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-white/90">
            I'm actively seeking opportunities where I can contribute,
            learn, and grow as a developer while building impactful
            solutions.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <a
              href="/New_Resume.pdf"
              className="rounded-full bg-white px-8 py-4 font-semibold text-[#D89C95] shadow-lg transition hover:-translate-y-1"
            >
              <div className="flex items-center gap-2">
                <Download size={18} />
                Download Resume
              </div>
            </a>

            <a
              href="/contact"
              className="rounded-full border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#D89C95]"
            >
              <div className="flex items-center gap-2">
                Let's Talk
                <ArrowRight size={18} />
              </div>
            </a>

          </div>
        </div>

        {/* Roles */}
        <div className="mt-20">

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800">
              💼 Full-Time Opportunities
            </h2>

            <p className="mt-4 text-gray-600">
              Roles I'm currently interested in.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">

            {roles.map((role) => (
              <div
                key={role}
                className="rounded-3xl border border-white/40 bg-white/60 p-6 text-center shadow-lg backdrop-blur-md transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <Briefcase
                  className="mx-auto text-[#D89C95]"
                  size={32}
                />

                <h3 className="mt-4 font-semibold text-gray-800">
                  {role}
                </h3>
              </div>
            ))}

          </div>
        </div>

        {/* Freelance Services */}
        <div className="mt-24">

          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800">
              🚀 Freelance Services
            </h2>

            <p className="mt-4 text-gray-600">
              Helping businesses and startups build impactful solutions.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">

            {services.map((service) => {
              const Icon = service.icon;

              return (
                <div
                  key={service.title}
                  className="rounded-[32px] border border-white/40 bg-white/60 p-8 shadow-xl backdrop-blur-md transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="inline-flex rounded-2xl bg-[#D89C95]/10 p-4">
                    <Icon
                      className="text-[#D89C95]"
                      size={32}
                    />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-800">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              );
            })}

          </div>
        </div>

        {/* Why Hire Me */}
        <div className="mt-24 rounded-[40px] border border-white/40 bg-white/60 p-10 shadow-xl backdrop-blur-md">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-gray-800">
              ✨ Why Work With Me?
            </h2>

            <p className="mt-4 text-gray-600">
              What I bring to every project and opportunity.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {strengths.map((item) => (
              <div
                key={item}
                className="flex items-center gap-4 rounded-2xl bg-[#FDF7F6] p-5"
              >
                <CheckCircle2
                  className="text-[#D89C95]"
                  size={24}
                />

                <span className="font-medium text-gray-700">
                  {item}
                </span>
              </div>
            ))}

          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 rounded-[40px] bg-[#D89C95] p-12 text-center text-white shadow-2xl">

          <Laptop
            className="mx-auto"
            size={50}
          />

          <h2 className="mt-6 text-4xl font-bold">
            Ready to Collaborate?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-white/90">
            Whether you're hiring for a full-time role,
            internship, freelance project, or collaboration,
            I'd be excited to connect and discuss how I can help.
          </p>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#D89C95] transition hover:-translate-y-1"
          >
            Contact Me
            <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
};

export default Opportunities;