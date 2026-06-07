import { motion } from 'framer-motion';
import { ArrowRight, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 border border-white rounded-full" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 border border-white rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-48 h-48 border border-white rotate-45" />
      </div>

      {/* Vertical accent lines */}
      <div className="absolute left-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-grey-800/30 to-transparent" />
      <div className="absolute right-[10%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-grey-800/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-32 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-sm font-sans tracking-[0.2em] uppercase text-grey-500 mb-6">
                Digital Marketing Specialist
              </p>

              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-600 leading-[1.05] tracking-tight mb-8">
                Scaling Brands
                <br />
                Into Digital
                <br />
                <span className="italic font-400 text-grey-400">Empires.</span>
              </h1>

              <p className="text-lg sm:text-xl text-grey-500 max-w-lg leading-relaxed mb-12 font-light">
                Data-driven growth strategies for ambitious brands ready to
                dominate their market. Performance meets precision.
              </p>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black text-sm font-medium tracking-wide hover:bg-grey-100 transition-all duration-300"
                >
                  View Work
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 border border-grey-600 text-white text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300"
                >
                  Book a Strategy Call
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Premium portrait placeholder */}
              <div className="aspect-[3/4] bg-grey-950 border border-grey-800/50 relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7691105/pexels-photo-7691105.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Digital Marketing Professional"
                  className="w-full h-full object-cover grayscale opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <p className="text-xs tracking-[0.2em] uppercase text-grey-400">
                    Based in Mumbai
                  </p>
                  <p className="text-sm text-grey-500 mt-1">
                    Serving clients globally
                  </p>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-grey-700/30" />
              <div className="absolute -top-4 -left-4 w-16 h-16 border border-grey-700/30" />
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-grey-600">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={14} className="text-grey-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
