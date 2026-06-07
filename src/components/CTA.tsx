import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="py-30 lg:py-40 bg-grey-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20"
        >
          {/* Left - Headline */}
          <div>
            <p className="text-sm font-sans tracking-[0.2em] uppercase text-grey-600 mb-4">
              Let's Talk
            </p>
            <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-500 tracking-tight leading-[1.1] mb-6">
              Ready to dominate
              <br />
              <span className="italic font-400 text-grey-400">
                your market?
              </span>
            </h2>
            <p className="text-grey-500 leading-relaxed max-w-md mb-10">
              Every great partnership starts with a conversation. Share your
              vision, and I'll show you the roadmap to get there.
            </p>

            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-sm font-medium tracking-wide hover:bg-grey-200 transition-all duration-300"
            >
              Book a Strategy Call
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-black border border-grey-800/50 p-8 lg:p-12">
            <h3 className="font-serif text-2xl font-500 tracking-tight mb-8">
              Send a Message
            </h3>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col gap-6"
            >
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-grey-600 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-transparent border-b border-grey-800 py-3 text-white placeholder:text-grey-700 focus:border-grey-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-grey-600 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-transparent border-b border-grey-800 py-3 text-white placeholder:text-grey-700 focus:border-grey-500 focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs tracking-[0.15em] uppercase text-grey-600 mb-2">
                  Project Details
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell me about your brand and goals..."
                  className="w-full bg-transparent border-b border-grey-800 py-3 text-white placeholder:text-grey-700 focus:border-grey-500 focus:outline-none transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="group self-start inline-flex items-center gap-3 px-8 py-4 border border-grey-600 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300 mt-4"
              >
                Send Message
                <Send
                  size={14}
                  className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                />
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
