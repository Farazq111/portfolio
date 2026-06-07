import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: '01',
    title: 'Discovery & Audit',
    description:
      'Deep-dive into your brand, market position, and competitive landscape. Comprehensive analytics audit to uncover hidden opportunities and silent bottlenecks.',
    detail: '7-10 Days',
  },
  {
    number: '02',
    title: 'Strategy Development',
    description:
      'Architect a bespoke growth roadmap. Channel selection, budget allocation, messaging frameworks, and KPI benchmarks — every decision backed by data, not guesswork.',
    detail: '10-14 Days',
  },
  {
    number: '03',
    title: 'Execution & Optimization',
    description:
      'Launch with precision. Continuous A/B testing, performance monitoring, and iterative refinements ensure every dollar works harder than the last.',
    detail: 'Ongoing',
  },
  {
    number: '04',
    title: 'Scaling & Reports',
    description:
      'Amplify what works. Systematic scaling of winning campaigns paired with transparent, executive-level reporting that proves ROI beyond dispute.',
    detail: 'Monthly',
  },
];

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative"
    >
      {/* Connector line */}
      {index < steps.length - 1 && (
        <div className="hidden lg:block absolute top-full left-8 w-px h-16 bg-gradient-to-b from-grey-700 to-transparent" />
      )}

      <div className="flex gap-6 lg:gap-8">
        <div className="flex-shrink-0 w-16 h-16 border border-grey-800 flex items-center justify-center">
          <span className="font-mono text-sm text-grey-500">
            {step.number}
          </span>
        </div>
        <div className="flex-1 pb-16 lg:pb-20">
          <h3 className="font-serif text-xl lg:text-2xl font-500 tracking-tight mb-3">
            {step.title}
          </h3>
          <p className="text-grey-500 leading-relaxed text-sm lg:text-base max-w-md mb-4">
            {step.description}
          </p>
          <span className="inline-block px-3 py-1 border border-grey-800 text-[10px] tracking-[0.2em] uppercase text-grey-600">
            {step.detail}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-100px' });

  return (
    <section id="process" className="py-30 lg:py-40 bg-grey-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 lg:mb-24"
        >
          <p className="text-sm font-sans tracking-[0.2em] uppercase text-grey-600 mb-4">
            The Framework
          </p>
          <h2 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-500 tracking-tight max-w-xl">
            A process built on
            <span className="italic font-400 text-grey-400"> precision</span>
          </h2>
          <p className="text-grey-500 mt-6 max-w-lg leading-relaxed">
            No guesswork. No fluff. Every engagement follows a rigorous,
            data-backed methodology engineered for measurable growth.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-0 lg:gap-16">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
