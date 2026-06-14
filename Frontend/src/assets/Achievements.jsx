import React from "react";
import {
  Trophy,
  Target,
  Users,
  Zap,
  Medal,
  Shield,
} from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "State-Level Representation",
    description:
      "Represented a Jio-sponsored cricket team in tournaments organized by the Gujarat Cricket Association (GCA).",
  },
  {
    icon: Medal,
    title: "District-Level Cricket",
    description:
      "Participated in competitive matches under the Anand District Cricket Association (ADCA).",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "Developed collaboration, communication, and trust through team sports.",
  },
  {
    icon: Shield,
    title: "Leadership",
    description:
      "Learned responsibility and decision-making under pressure.",
  },
  {
    icon: Zap,
    title: "Adaptability",
    description:
      "Improved resilience and the ability to perform in dynamic situations.",
  },
  {
    icon: Target,
    title: "Discipline",
    description:
      "Built consistency, focus, and commitment through years of training.",
  },
];

const Achievements = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="rounded-full bg-white/60 px-5 py-2 text-sm font-medium text-[#D89C95] shadow backdrop-blur-md">
            🏏 Beyond The Screen
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            Achievements & Activities
          </h2>

          <p className="mt-4 max-w-2xl mx-auto text-gray-600">
            The values I gained through sports continue to shape
            my approach toward technology, teamwork, and problem-solving.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Feature Card */}
          <div className="rounded-[40px] border border-white/40 bg-white/60 p-10 shadow-xl backdrop-blur-md">

            <div className="inline-flex rounded-2xl bg-[#D89C95] p-5 text-white">
              <Trophy size={40} />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-gray-800">
              Jio-Sponsored Cricket Team
            </h3>

            <p className="mt-5 text-lg leading-relaxed text-gray-600">
              Represented a Jio-sponsored team in
              <span className="font-semibold text-[#D89C95]">
                {" "}state-level tournaments{" "}
              </span>
              conducted by the Gujarat Cricket Association (GCA)
              and competed in district-level matches organized
              by the Anand District Cricket Association (ADCA).
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full bg-[#D89C95]/10 px-4 py-2 text-sm font-medium text-[#D89C95]">
                Gujarat Cricket Association
              </span>

              <span className="rounded-full bg-[#D89C95]/10 px-4 py-2 text-sm font-medium text-[#D89C95]">
                ADCA
              </span>

              <span className="rounded-full bg-[#D89C95]/10 px-4 py-2 text-sm font-medium text-[#D89C95]">
                Jio Sponsored
              </span>
            </div>
          </div>

          {/* Right Cards */}
          <div className="grid gap-6 sm:grid-cols-2">

            {achievements.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="rounded-3xl border border-white/40 bg-white/60 p-6 shadow-lg backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="inline-flex rounded-2xl bg-[#D89C95]/10 p-4">
                    <Icon
                      size={28}
                      className="text-[#D89C95]"
                    />
                  </div>

                  <h4 className="mt-5 text-xl font-bold text-gray-800">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
};

export default Achievements;