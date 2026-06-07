import { ArrowUp, Linkedin, Twitter } from 'lucide-react';

const footerLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: Linkedin },
  { label: 'Twitter', href: 'https://twitter.com', icon: Twitter },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-grey-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="py-12 lg:py-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
            <a
              href="#"
              className="font-serif text-lg font-500 tracking-tight"
            >
              Arjun<span className="text-grey-500">.</span>Mehta
            </a>
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-grey-600 hover:text-white transition-colors duration-300"
                  aria-label={link.label}
                >
                  <link.icon size={18} />
                </a>
              ))}
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-grey-600 hover:text-white transition-colors duration-300 text-xs tracking-[0.15em] uppercase"
              >
                Behance
              </a>
            </div>
          </div>

          <div className="flex items-center gap-8">
            <p className="text-xs text-grey-700 tracking-wide">
              &copy; {new Date().getFullYear()} Arjun Mehta. All rights
              reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="group w-10 h-10 border border-grey-800 flex items-center justify-center hover:bg-white hover:border-white transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp
                size={14}
                className="text-grey-500 group-hover:text-black transition-colors"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
