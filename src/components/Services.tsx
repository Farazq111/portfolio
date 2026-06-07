import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const services = [
  {
    number: '01',
    title: 'SEO & Performance Marketing',
    description:
      'Dominate search rankings with technical SEO audits, content architecture, and data-backed link strategies that compound growth month over month.',
  },
  {
    number: '02',
    title: 'Social Media Strategy & Brand Positioning',
    description:
      'Build an unmistakable brand presence across platforms. Strategic content calendars, community engagement frameworks, and identity systems that convert followers into advocates.',
  },
  {
    number: '03',
    title: 'High-Converting Paid Ads',
    subtitle: 'Meta / Google / LinkedIn',
    description:
      'Precision-targeted campaigns with relentless optimization. A/B testing frameworks, audience segmentation, and creative strategies that maximize ROAS across every channel.',
  },
  {
    number: '04',
    title: 'Content Strategy & Copywriting',
    description:
      'Narrative-driven content that commands attention and drives action. From long-form thought leadership to conversion-optimized landing pages, every word earns its place.',
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative border-b border-grey-800/50 py-12 lg:py-16 first:border-t"
    >
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-1">
          <span className="text-sm text-grey-600 font-mono">
            {service.number}
          </span>
        </div>
        <div className="lg:col-span-4">
          <h3 className="font-serif text-2xl lg:text-3xl font-500 tracking-tight group-hover:text-grey-300 transition-colors duration-300">
            {service.title}
          </h3>
          {service.subtitle && (
            <p className="text-xs tracking-[0.15em] uppercase text-grey-600 mt-2">
              {service.subtitle}
            </p>
          )}
        </div>
        <div className="lg:col-span-5">
          <p className="text-grey-500 leading-relaxed text-sm lg:text-base">
            {service.description}
          </p>
        </div>
        <div className="lg:col-span-2 flex justify-end">
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <ArrowUpRight size={20} className="text-grey-400" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="services" className="py-30 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-grey-600 mb-4">
            What I Do
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-500 tracking-tight">
            Services
          </h2>
        </motion.div>

        <div>
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
