import React from "react";
import { ArrowRight, Download, Brain, Database, Code } from "lucide-react";
import Chatbot from "./Chatbot";
import Education from "./Education";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import Achievements from "./Achievements";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <>
    <section className="min-h-[85vh] flex items-center py-10">
<div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 min-[1008px]:grid-cols-2 lg:px-10">
<div className="order-1 space-y-7 text-center min-[1008px]:text-left">
          <span className="inline-flex items-center rounded-full bg-white/60 px-5 py-2 text-sm font-medium text-[#D89C95] shadow-md backdrop-blur-md">
            👋 Welcome to my Portfolio
          </span>

          <div>
            <h1 className="text-4xl font-bold leading-tight text-gray-800 sm:text-5xl md:text-6xl">
              Hi, I'm{" "}
              <span className="text-[#D89C95]">
                Dhruvil Shah
              </span>
            </h1>

            <h2 className="mt-4 text-xl font-semibold text-gray-700 sm:text-2xl md:text-3xl">
              Data Scientist & AI/ML Enthusiast
            </h2>
          </div>

          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-600 md:text-lg lg:mx-0">
            Passionate about transforming data into actionable insights
            through Machine Learning, Deep Learning, and Generative AI.
            I enjoy building intelligent applications that solve
            real-world problems and create meaningful impact.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">

            <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow backdrop-blur-md">
              <Brain size={18} className="text-[#D89C95]" />
              <span className="text-sm font-medium">
                Machine Learning
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow backdrop-blur-md">
              <Database size={18} className="text-[#D89C95]" />
              <span className="text-sm font-medium">
                Data Science
              </span>
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/60 px-4 py-2 shadow backdrop-blur-md">
              <Code size={18} className="text-[#D89C95]" />
              <span className="text-sm font-medium">
                Nodejs & React
              </span>
            </div>

          </div>

          <div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">

            <button 
            onClick={() => window.location.href = '/projects'}
            className="flex items-center justify-center gap-2 rounded-full bg-[#D89C95] px-8 py-4 font-medium text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-[#C98780]">
              View Projects
              <ArrowRight size={18} />
            </button>

            <button
            onClick={() =>  window.open('/New_Resume.pdf', '_blank')}
             className="flex items-center justify-center gap-2 rounded-full border border-[#D89C95] bg-white/60 px-8 py-4 font-medium text-[#D89C95] shadow backdrop-blur-md transition duration-300 hover:bg-white">
              Download CV
              <Download size={18} />
            </button>

          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">

          <div className="relative">

            <div className="absolute -top-8 -left-8 h-72 w-72 rounded-full bg-[#D89C95]/20 blur-3xl" />

            <div className="relative overflow-hidden rounded-[40px] border border-white/40 bg-white/50 p-5 shadow-2xl backdrop-blur-md">

              <img
              src="/Screenshot 2023-12-17 163800.png"
                alt="Dhruvil Shah"
                className="h-[350px] w-[260px] rounded-[30px] object-cover sm:h-[420px] sm:w-[320px]"
              />

              <div className="mt-5 text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  Dhruvil Shah
                </h3>

                <p className="mt-1 text-gray-600">
                  Data Scientist | AI/ML Engineer
                </p>
              </div>

            </div>

    

          </div>
        </div>

      </div>



    </section>

    <Education/>
    <Skills/>
    <WorkExperience/>   
    <Achievements/>

    </>
  );
};

export default HomePage;