import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";

const Contact = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="rounded-full bg-white/60 px-5 py-2 text-sm font-medium text-[#D89C95] shadow backdrop-blur-md">
            💌 Let's Connect
          </span>

          <h2 className="mt-5 text-4xl font-bold text-gray-800 md:text-5xl">
            Let's Create Something Extraordinary
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Whether you have an exciting project, internship opportunity,
            collaboration idea, or simply want to say hello,
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">

          {/* Left Side */}
          <div className="rounded-[40px] bg-gradient-to-br from-[#D89C95] to-[#C98780] p-10 text-white shadow-2xl">

            <h3 className="text-3xl font-bold">
              Let's Build the Future Together 🚀
            </h3>

            <p className="mt-6 leading-relaxed text-white/90">
              I'm always open to discussing innovative ideas,
              AI/ML opportunities, freelance projects,
              and meaningful collaborations.
            </p>

            {/* Contact Cards */}
            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-4 rounded-3xl bg-white/15 p-5 backdrop-blur-md">
                <Mail />
                <div>
                  <p className="text-sm text-white/70">Email</p>
                  <p className="font-medium">
                    dhruvil@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl bg-white/15 p-5 backdrop-blur-md">
                <Phone />
                <div>
                  <p className="text-sm text-white/70">Phone</p>
                  <p className="font-medium">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-3xl bg-white/15 p-5 backdrop-blur-md">
                <MapPin />
                <div>
                  <p className="text-sm text-white/70">Location</p>
                  <p className="font-medium">
                    Gujarat, India
                  </p>
                </div>
              </div>

            </div>

            {/* Social */}
            <div className="mt-10 flex gap-4">

              <a
                href="https://www.linkedin.com/in/dhruvil-shah-988a94204/"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/15 p-4 transition hover:bg-white hover:text-[#D89C95]"
              >
                <Linkedin />
              </a>

              <a
                href="https://github.com/DhruvilShah1"
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-white/15 p-4 transition hover:bg-white hover:text-[#D89C95]"
              >
                <Github />
              </a>

              <a
                href="#"
                className="rounded-2xl bg-white/15 p-4 transition hover:bg-white hover:text-[#D89C95]"
              >
                <MessageCircle />
              </a>

            </div>

          </div>

          {/* Right Side Form */}
          <div className="rounded-[40px] border border-white/40 bg-white/60 p-10 shadow-2xl backdrop-blur-md">

            <h3 className="text-3xl font-bold text-gray-800">
              Send Me a Message
            </h3>

            <p className="mt-3 text-gray-600">
              Fill out the form below and I'll get back to you soon.
            </p>

            <form className="mt-10 space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#D89C95]"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#D89C95]"
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#D89C95]"
              />

              <textarea
                rows="6"
                placeholder="Tell me about your project..."
                className="w-full rounded-3xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#D89C95]"
              />

              <button
                type="submit"
                className="flex items-center gap-2 rounded-full bg-[#D89C95] px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#C98780]"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;