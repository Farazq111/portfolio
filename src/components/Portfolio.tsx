import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Luxe Interiors',
    category: 'E-Commerce / Interior Design',
    result: '+140% Revenue Growth',
    services: ['Paid Ads', 'SEO', 'Content Strategy'],
    image:
      'https://images.pexels.com/photos/6444/drawer-home-interior-decoration.jpg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'VitalFit Athletics',
    category: 'D2C / Fitness Brand',
    result: '+210% ROAS Improvement',
    services: ['Meta Ads', 'Social Strategy', 'Copywriting'],
    image:
      'https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Meridian Finance',
    category: 'Fintech / B2B SaaS',
    result: '+85% Lead Generation',
    services: ['LinkedIn Ads', 'SEO', 'Content Marketing'],
    image:
      'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Aura Skincare',
    category: 'Beauty / D2C',
    result: '+320% Social Engagement',
    services: ['Social Strategy', 'Paid Ads', 'Brand Positioning'],
    image:
      'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [hovered, setHovered] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.2,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={`grid lg:grid-cols-2 gap-0 ${
        isEven ? '' : 'lg:direction-rtl'
      }`}
      style={isEven ? {} : { direction: 'rtl' }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden aspect-[4/3]"
        style={{ direction: 'ltr' }}
      >
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover grayscale transition-all duration-700 ${
            hovered ? 'grayscale-0 scale-105' : 'scale-100'
          }`}
        />
        <div
          className={`absolute inset-0 bg-black/40 transition-opacity duration-500 ${
            hovered ? 'opacity-0' : 'opacity-30'
          }`}
        />
      </div>

      {/* Content */}
      <div
        className={`bg-grey-950 p-10 lg:p-14 flex flex-col justify-center border border-grey-800/30 ${
          isEven ? '' : 'lg:border-l-0'
        }`}
        style={{ direction: 'ltr' }}
      >
        <p className="text-xs tracking-[0.2em] uppercase text-grey-600 mb-4">
          {project.category}
        </p>
        <h3 className="font-serif text-3xl lg:text-4xl font-500 tracking-tight mb-4">
          {project.title}
        </h3>
        <p className="font-serif text-xl lg:text-2xl italic text-grey-400 mb-6">
          {project.result}
        </p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.services.map((s) => (
            <span
              key={s}
              className="px-3 py-1 border border-grey-800 text-[10px] tracking-[0.15em] uppercase text-grey-500"
            >
              {s}
            </span>
          ))}
        </div>
        <button className="group inline-flex items-center gap-2 text-sm text-grey-400 hover:text-white transition-colors">
          View Case Study
          <ArrowUpRight
            size={14}
            className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
          />
        </button>
      </div>
    </motion.div>
  );
}

export default function Portfolio() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="work" className="py-30 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-24"
        >
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-grey-600 mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-500 tracking-tight">
            Case Studies
          </h2>
          <p className="text-grey-500 mt-6 max-w-lg leading-relaxed">
            Results speak louder than promises. Each project represents a
            partnership built on trust, transparency, and relentless execution.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
