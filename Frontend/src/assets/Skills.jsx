import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaLaravel,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

const skillCategories = {
  Frontend: [
    { name: "React", icon: FaReact, color: "text-sky-500", level: "Intermediate" },
    { name: "PHP", icon: FaPhp, color: "text-indigo-500", level: "Intermediate" },
    { name: "Python", icon: FaPython, color: "text-yellow-500", level: "Intermediate" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500", level: "Intermediate" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-400", level: "Intermediate" },
    { name: "HTML/CSS", icon: FaHtml5, color: "text-orange-500", level: "Intermediate" },
  ],

  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500", level: "Intermediate" },
    { name: "Laravel", icon: FaLaravel, color: "text-red-500", level: "Intermediate" },
    { name: "Express", icon: SiExpress, color: "text-gray-700", level: "Intermediate" },
  ],

  Database: [
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600", level: "Intermediate" },
    { name: "MySQL", icon: SiMysql, color: "text-blue-600", level: "Intermediate" },
    { name: "Firebase", icon: SiFirebase, color: "text-yellow-500", level: "Intermediate" },
  ],

  Libraries: [
    { name: "Pandas", icon: SiPandas, color: "text-purple-600", level: "Intermediate" },
    { name: "NumPy", icon: SiNumpy, color: "text-blue-500", level: "Intermediate" },
    { name: "Scikit-Learn", icon: SiScikitlearn, color: "text-orange-500", level: "Intermediate" },
    { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-600", level: "Intermediate" },
  ],
};

const Skills = () => {
  const categories = Object.keys(skillCategories);
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-[#D89C95] shadow backdrop-blur-md">
            🚀 Technical Expertise
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            Skills & Technologies
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Technologies I use to build full-stack applications,
            intelligent systems, and scalable solutions.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="mb-12 flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className={`rounded-full px-6 py-3 font-medium transition-all duration-300 ${
                activeTab === category
                  ? "bg-[#D89C95] text-white shadow-lg"
                  : "bg-white/60 text-gray-700 backdrop-blur-md hover:bg-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {skillCategories[activeTab].map((skill) => {
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="group rounded-3xl border border-white/40 bg-white/60 p-8 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Logo */}
                <div className="flex justify-center">
                  <div className="rounded-2xl bg-[#FDF7F6] p-5 transition group-hover:scale-110">
                    <Icon size={50} className={skill.color} />
                  </div>
                </div>

                {/* Name */}
                <h3 className="mt-6 text-center text-xl font-bold text-gray-800">
                  {skill.name}
                </h3>

                {/* Level Badge */}
                <div className="mt-4 flex justify-center">
                  <span
                    className={`rounded-full px-4 py-2 text-sm font-medium ${
                      skill.level === "Advanced"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {skill.level}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Skills;