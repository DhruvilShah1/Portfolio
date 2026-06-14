import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Heart,
  ArrowUp,
  FileText,
} from "lucide-react";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative mt-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-[#D89C95]" />

      {/* Decorative Circles */}
      <div className="absolute -top-16 -left-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

      <div className="relative z-10">

        {/* Main Footer */}
        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="grid gap-12 lg:grid-cols-3">

            {/* About */}
            <div>
              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#D89C95] shadow-lg">
                  DS
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Dhruvil Shah
                  </h3>

                  <p className="text-sm text-white/80">
                    Data Scientist • AI Engineer
                  </p>
                </div>
              </div>

              <p className="mt-6 max-w-md leading-relaxed text-white/90">
                Passionate about transforming data into actionable
                insights and building intelligent applications through
                AI, Machine Learning, and Full Stack Development.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-6 text-xl font-semibold text-white">
                Get In Touch
              </h4>

              <div className="space-y-5">

                <div className="flex items-center gap-4">
                  <Mail className="text-white" size={20} />

                  <span className="text-white/90">
                    dhruvilshah3383@gmail.com
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <Phone className="text-white" size={20} />

                  <span className="text-white/90">
                    +91 XXXXX XXXXX
                  </span>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="text-white" size={20} />

                  <span className="text-white/90">
                    Khambhat, Gujarat, India
                  </span>
                </div>

              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-6 text-xl font-semibold text-white">
                Quick Links
              </h4>

              <div className="flex flex-wrap gap-4">

                <a
                  href="#"
                  className="rounded-2xl bg-white/15 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white hover:text-[#D89C95]"
                >
                  Home
                </a>

                <a
                  href="#"
                  className="rounded-2xl bg-white/15 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white hover:text-[#D89C95]"
                >
                  About
                </a>

                <a
                  href="#"
                  className="rounded-2xl bg-white/15 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white hover:text-[#D89C95]"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="rounded-2xl bg-white/15 px-5 py-3 text-white backdrop-blur-md transition hover:bg-white hover:text-[#D89C95]"
                >
                  Contact
                </a>

              </div>

              {/* Social */}
              <div className="mt-8 flex gap-4">

                <a
                  href="https://www.linkedin.com/in/dhruvil-shah-988a94204"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white/15 p-4 text-white backdrop-blur-md transition hover:bg-white hover:text-[#D89C95]"
                >
                  <Linkedin size={22} />
                </a>

                <a
                  href="https://github.com/DhruvilShah1"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-white/15 p-4 text-white backdrop-blur-md transition hover:bg-white hover:text-[#D89C95]"
                >
                  <Github size={22} />
                </a>

                <a
                  href="/resume.pdf"
                  className="rounded-2xl bg-white/15 p-4 text-white backdrop-blur-md transition hover:bg-white hover:text-[#D89C95]"
                >
                  <FileText size={22} />
                </a>

              </div>
            </div>

          </div>

          {/* Bottom */}
          <div className="mt-14 border-t border-white/20 pt-8">

            <div className="flex flex-col items-center justify-between gap-5 md:flex-row">

              <p className="flex items-center gap-2 text-center text-white/80">
                © {new Date().getFullYear()} Dhruvil Shah.
                Made with
                <Heart
                  size={16}
                  className="fill-white text-white"
                />
                using React & Tailwind CSS.
              </p>

              {/* Scroll To Top */}
              <button
                onClick={scrollTop}
                className="flex items-center gap-2 rounded-full bg-white px-5 py-3 font-medium text-[#D89C95] shadow-lg transition hover:-translate-y-1"
              >
                Back to Top
                <ArrowUp size={18} />
              </button>

            </div>

          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;