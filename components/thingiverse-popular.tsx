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
          className="rounded-2xl overflow-hidden shadow-lg w-full max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { 
                title: 'Mechanical Design', 
                desc: 'Engineering components',
                image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop'
              },
              { 
                title: 'Miniatures', 
                desc: 'Collectibles & gaming',
                image: 'https://images.unsplash.com/photo-1606664515524-2c3c2b1c9a34?w=400&h=300&fit=crop'
              },
              { 
                title: 'Household', 
                desc: 'Practical objects',
                image: 'https://images.unsplash.com/photo-1532635255-c1a23266385d?w=400&h=300&fit=crop'
              },
              { 
                title: 'Prototypes', 
                desc: 'Experimental designs',
                image: 'https://images.unsplash.com/photo-1581092195953-66302748bb9d?w=400&h=300&fit=crop'
              },
              { 
                title: 'Art & Fashion', 
                desc: 'Creative projects',
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop'
              },
              { 
                title: 'Replacement Parts', 
                desc: 'Fix & upgrade items',
                image: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?w=400&h=300&fit=crop'
              }
            ].map((category, idx) => (
              <a 
                key={idx} 
                href="https://www.thingiverse.com/search?sort=popular"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-xl h-48 bg-[#e5e5ea]"
              >
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex flex-col justify-end p-4 text-white">
                  <h4 className="font-semibold text-lg mb-1">{category.title}</h4>
                  <p className="text-sm text-white/90">{category.desc}</p>
                </div>
              </a>
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
