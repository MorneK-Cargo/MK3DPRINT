'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ShoppingCart, Zap } from 'lucide-react';

interface QuickPrint {
  id: string;
  title: string;
  price: number;
  currency: string;
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
      price: 85,
      currency: 'NAD',
      image: 'https://cdn.thingiverse.com/assets/phone-stand.jpg',
      description: 'Adjustable phone stand for desk and streaming',
      printTime: '2-3 hours',
      material: 'PLA'
    },
    {
      id: 'cable-clip',
      title: 'Cable Clips (Pack of 5)',
      price: 65,
      currency: 'NAD',
      image: 'https://cdn.thingiverse.com/assets/cable-clip.jpg',
      description: 'Keep your cables organized and tidy',
      printTime: '1-2 hours',
      material: 'PLA'
    },
    {
      id: 'pen-holder',
      title: 'Pen Holder',
      price: 75,
      currency: 'NAD',
      image: 'https://cdn.thingiverse.com/assets/pen-holder.jpg',
      description: 'Desktop organizer for pens and pencils',
      printTime: '2 hours',
      material: 'PLA'
    },
    {
      id: 'door-hanger',
      title: 'Door Hanger',
      price: 45,
      currency: 'NAD',
      image: 'https://cdn.thingiverse.com/assets/door-hanger.jpg',
      description: 'Customizable door hanger for any message',
      printTime: '1-2 hours',
      material: 'PLA'
    },
    {
      id: 'plant-pot-small',
      title: 'Small Plant Pot',
      price: 55,
      currency: 'NAD',
      image: 'https://cdn.thingiverse.com/assets/plant-pot.jpg',
      description: 'Drainage plant pot for small plants',
      printTime: '2-3 hours',
      material: 'PLA'
    },
    {
      id: 'desk-organizer',
      title: 'Desk Organizer',
      price: 95,
      currency: 'NAD',
      image: 'https://cdn.thingiverse.com/assets/desk-organizer.jpg',
      description: 'Multi-compartment desk organizer',
      printTime: '3-4 hours',
      material: 'PLA'
    },
    {
      id: 'battery-holder',
      title: 'Battery Holder',
      price: 40,
      currency: 'NAD',
      image: 'https://cdn.thingiverse.com/assets/battery-holder.jpg',
      description: 'Organize AA and AAA batteries',
      printTime: '1 hour',
      material: 'PLA'
    },
    {
      id: 'cable-organizer',
      title: 'Cable Organizer',
      price: 85,
      currency: 'NAD',
      image: 'https://cdn.thingiverse.com/assets/cable-organizer.jpg',
      description: 'Desktop cable management solution',
      printTime: '2-3 hours',
      material: 'PLA'
    }
  ];

  const handleOrderClick = (item: QuickPrint) => {
    const message = `Hi, I'm interested in the ${item.title} (NAD ${item.price})`;
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
            Pre-designed items under NAD 100 - ready to print! No quotes needed, just order via WhatsApp.
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
              <div className="relative h-48 bg-gradient-to-br from-[#f5f5f7] to-[#e8e8ed] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                  }}
                />
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-[#36c1b3] text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  NAD {item.price}
                </div>
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
                  Order Now
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
            Ready to Go! 🚀
          </h3>
          <p className="text-[#86868b] mb-6 leading-relaxed">
            All our Quick Prints are pre-configured and ready for immediate printing. Simply select your item, click "Order Now", and we'll print and deliver it to you as soon as possible!
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-4">
              <div className="text-3xl mb-2">📦</div>
              <p className="text-sm font-medium text-[#1d1d1f]">Same-Day Printing</p>
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

        {/* Custom Order CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-[#86868b] mb-6">
            Don't see what you're looking for? We can custom-design and print anything you want!
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
