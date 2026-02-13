'use client';

import { motion } from 'framer-motion';

export default function ThingiversePopular() {
  return (
    <section className="section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="section-title">Popular on Thingiverse</h2>
          <p className="text-center text-[#86868b] text-lg max-w-2xl mx-auto">
            Browse the most popular 3D models from Thingiverse. Click to explore thousands of free designs.
          </p>
        </motion.div>

        {/* Thingiverse Popular Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl overflow-hidden shadow-lg bg-[#f5f5f7] w-full max-w-5xl mx-auto p-8 md:p-12"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Mechanical Design', count: '50K+', desc: 'Engineering components' },
              { title: 'Miniatures', count: '30K+', desc: 'Collectibles & gaming' },
              { title: 'Household', count: '45K+', desc: 'Practical objects' },
              { title: 'Prototypes', count: '25K+', desc: 'Experimental designs' },
              { title: 'Art & Fashion', count: '35K+', desc: 'Creative projects' },
              { title: 'Replacement Parts', count: '28K+', desc: 'Fix & upgrade items' }
            ].map((category, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-3xl font-bold text-[#36c1b3] mb-2">{category.count}</div>
                <h4 className="font-semibold text-[#1d1d1f] mb-1">{category.title}</h4>
                <p className="text-sm text-[#86868b]">{category.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Explore Thingiverse Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mt-8"
        >
          <a
            href="https://www.thingiverse.com/search?sort=popular"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-[#36c1b3] text-white rounded-lg font-medium hover:bg-[#2aa39a] transition-colors"
          >
            Explore All Popular Models on Thingiverse →
          </a>
        </motion.div>

        {/* Alternative Section - If iframe doesn't work well on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t-2 border-[#d5d5d7]"
        >
          <p className="text-center text-[#86868b] mb-6">
            Or visit Thingiverse directly to:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.thingiverse.com/search?sort=popular"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#36c1b3] text-white rounded-lg font-medium hover:bg-[#2aa39a] transition-colors"
            >
              Most Popular Models
            </a>
            <a
              href="https://www.thingiverse.com/search?sort=newest"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#36c1b3] text-[#36c1b3] rounded-lg font-medium hover:bg-[#36c1b3] hover:text-white transition-colors"
            >
              Newest Designs
            </a>
            <a
              href="https://www.thingiverse.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border-2 border-[#36c1b3] text-[#36c1b3] rounded-lg font-medium hover:bg-[#36c1b3] hover:text-white transition-colors"
            >
              Browse All
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
