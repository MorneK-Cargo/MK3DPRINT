'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Zap } from 'lucide-react';

interface QuickPrint {
  id: string;
  title: string;
  emoji: string;
  image: string;
  description: string;
  printTime: string;
  material: string;
}

export default function QuickPrints() {
  const quickPrints: QuickPrint[] = [
    {
      id: 'phone-stand',
      title: 'Phone Stand',
      emoji: '📱',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2336c1b3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white"%3E📱 Phone Stand%3C/text%3E%3C/svg%3E',
      description: 'Adjustable phone stand for desk and streaming',
      printTime: '2-3 hours',
      material: 'PLA'
    },
    {
      id: 'cable-clip',
      title: 'Cable Clips',
      emoji: '🔌',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2336c1b3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white"%3E🔌 Cable Clips%3C/text%3E%3C/svg%3E',
      description: 'Keep your cables organized and tidy',
      printTime: '1-2 hours',
      material: 'PLA'
    },
    {
      id: 'pen-holder',
      title: 'Pen Holder',
      emoji: '✏️',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2336c1b3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white"%3E✏️ Pen Holder%3C/text%3E%3C/svg%3E',
      description: 'Desktop organizer for pens and pencils',
      printTime: '2 hours',
      material: 'PLA'
    },
    {
      id: 'door-hanger',
      title: 'Door Hanger',
      emoji: '🚪',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2336c1b3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white"%3E🚪 Door Hanger%3C/text%3E%3C/svg%3E',
      description: 'Customizable door hanger for any message',
      printTime: '1-2 hours',
      material: 'PLA'
    },
    {
      id: 'plant-pot-small',
      title: 'Plant Pot',
      emoji: '🌱',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2336c1b3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white"%3E🌱 Plant Pot%3C/text%3E%3C/svg%3E',
      description: 'Drainage plant pot for small plants',
      printTime: '2-3 hours',
      material: 'PLA'
    },
    {
      id: 'desk-organizer',
      title: 'Desk Organizer',
      emoji: '📚',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2336c1b3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white"%3E📚 Desk Organizer%3C/text%3E%3C/svg%3E',
      description: 'Multi-compartment desk organizer',
      printTime: '3-4 hours',
      material: 'PLA'
    },
    {
      id: 'battery-holder',
      title: 'Battery Holder',
      emoji: '🔋',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2336c1b3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white"%3E🔋 Battery Holder%3C/text%3E%3C/svg%3E',
      description: 'Organize AA and AAA batteries',
      printTime: '1 hour',
      material: 'PLA'
    },
    {
      id: 'cable-organizer',
      title: 'Cable Organizer',
      emoji: '🎯',
      image: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="400" height="300"%3E%3Crect fill="%2336c1b3" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" font-size="48" font-weight="bold" text-anchor="middle" dominant-baseline="middle" fill="white"%3E🎯 Cable Organizer%3C/text%3E%3C/svg%3E',
      description: 'Desktop cable management solution',
      printTime: '2-3 hours',
      material: 'PLA'
    }
  ];

  const handleOrderClick = (item: QuickPrint) => {
    const message = `Hi, I'm interested in the ${item.title}`;
    window.open(`https://wa.me/264836750117?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="quick-prints" className="section bg-white">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-4"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Zap className="w-6 h-6 text-[#36c1b3]" />
            <h2 className="section-title mb-0">Quick Prints</h2>
            <Zap className="w-6 h-6 text-[#36c1b3]" />
          </div>
          <p className="section-intro">
            Ready-to-print designs - just order via WhatsApp and we'll print it for you!
          </p>
        </motion.div>

        {/* Quick Prints Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {quickPrints.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="bg-[#f5f5f7] rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] overflow-hidden flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-[#1d1d1f] mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[#86868b] text-sm mb-4 flex-1 line-clamp-2">
                  {item.description}
                </p>

                {/* Details */}
                <div className="space-y-2 mb-4 text-xs text-[#86868b]">
                  <div className="flex justify-between">
                    <span>⏱️ {item.printTime}</span>
                    <span>{item.material}</span>
                  </div>
                </div>

                {/* Order Button */}
                <button
                  onClick={() => handleOrderClick(item)}
                  className="w-full btn-apple btn-primary flex items-center justify-center gap-2 py-2"
                >
                  <ShoppingCart className="w-4 h-4" />
                  Get Quote
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-[#36c1b3]/10 to-[#36c1b3]/5 rounded-3xl p-8 max-w-3xl mx-auto text-center"
        >
          <h3 className="text-2xl font-semibold text-[#1d1d1f] mb-4">
            Ready to Print! 🚀
          </h3>
          <p className="text-[#86868b] mb-6 leading-relaxed">
            Found something you like? Simply click "Get Quote" and send us a message on WhatsApp. We'll calculate the exact cost based on your specifications and print it for you!
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4">
              <div className="text-3xl mb-2">📦</div>
              <p className="text-sm font-medium text-[#1d1d1f]">Fast Printing</p>
            </div>
            <div className="bg-white rounded-2xl p-4">
              <div className="text-3xl mb-2">💚</div>
              <p className="text-sm font-medium text-[#1d1d1f]">Eco-Friendly PLA</p>
            </div>
            <div className="bg-white rounded-2xl p-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-sm font-medium text-[#1d1d1f]">Quality Guaranteed</p>
            </div>
          </div>
        </motion.div>

        {/* Custom Design CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-[#86868b] mb-6">
            Have a custom design in mind? We can help bring your ideas to life!
          </p>
          <a
            href="https://wa.me/264836750117?text=Hi%2C%20I%20have%20a%20custom%203D%20printing%20project"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple btn-secondary px-8 py-3 inline-flex items-center gap-2"
          >
            Get a Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
