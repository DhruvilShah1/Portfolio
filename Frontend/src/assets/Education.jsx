import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Engineering in Information Technology",
    institute: "Madhuben and Bhanubhai Patel Institute of Technology, Vallabh Vidyanagar",
    year: "2021 - 2025",
    score: "CGPA: 7.82/10",
    description:
      "Built a strong foundation in programming, databases, algorithms, and data analytics.",
  },
  {
    degree: "Higher Secondary Education",
    institute: "Shri S.B Vakil English Medium School Khambhat",
    year: "2019 - 2021",
    score: "Percentage: 65%",
    description:
      "Focused on Mathematics and Science, developing analytical and problem-solving skills.",
  },
];

const Education = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-[#D89C95] shadow backdrop-blur-md">
            🎓 Academic Journey
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-800 md:text-5xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            My educational background has shaped my passion for
            Data Science, Artificial Intelligence, and problem-solving.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 hidden h-full w-1 rounded-full bg-[#D89C95]/30 md:block"></div>

          <div className="space-y-10">
            {educationData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col md:flex-row md:gap-10"
              >
                {/* Timeline Icon */}
                <div className="relative z-10 hidden md:flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D89C95] shadow-lg">
                    <GraduationCap
                      size={20}
                      className="text-white"
                    />
                  </div>
                </div>

                {/* Card */}
                <div className="w-full rounded-3xl border border-white/40 bg-white/60 p-8 shadow-xl backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.degree}
                    </h3>

                    <span className="rounded-full bg-[#D89C95]/10 px-4 py-2 text-sm font-semibold text-[#D89C95]">
                      {item.score}
                    </span>
                  </div>

                  <p className="mt-2 text-lg font-medium text-gray-700">
                    {item.institute}
                  </p>

                  <div className="mt-3 flex items-center gap-2 text-gray-500">
                    <Calendar size={16} />
                    <span>{item.year}</span>
                  </div>

                  <p className="mt-5 leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;