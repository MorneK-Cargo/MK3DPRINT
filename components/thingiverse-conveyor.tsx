'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ThingiverseModel {
  title: string;
  url: string;
  image: string;
}

export default function ThingiverseConveyor() {
  const [models, setModels] = useState<ThingiverseModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<Animation | null>(null);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleMotionChange);
    return () => mediaQuery.removeEventListener('change', handleMotionChange);
  }, []);

  useEffect(() => {
    const fetchModels = async () => {
      try {
        setLoading(true);
        const response = await fetch('/.netlify/functions/thingiversePopular');

        if (!response.ok) throw new Error('Failed to fetch models');

        const data: ThingiverseModel[] = await response.json();
        setModels(data.length > 0 ? data : []);
        setError(false);
      } catch (err) {
        console.error('Error fetching Thingiverse models:', err);
        setError(true);
        setModels([]);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, []);

  useEffect(() => {
    if (!scrollContainerRef.current || models.length === 0 || prefersReducedMotion) {
      return;
    }

    const container = scrollContainerRef.current;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    if (scrollWidth <= clientWidth) {
      return; // No need to scroll if content fits
    }

    // Cancel existing animation
    if (animationRef.current) {
      animationRef.current.cancel();
    }

    // Create seamless loop animation
    const keyframes: Keyframe[] = [
      { transform: 'translateX(0px)', offset: 0 },
      { transform: `translateX(-${scrollWidth / 2}px)`, offset: 1 },
    ];

    const duration = (scrollWidth / 50) * 1000; // ~50px per second

    animationRef.current = container.animate(keyframes, {
      duration,
      iterations: Infinity,
      easing: 'linear',
    });

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        animationRef.current.cancel();
      }
    };
  }, [models, prefersReducedMotion]);

  // Pause animation on hover
  useEffect(() => {
    if (!animationRef.current) return;

    if (isHovering) {
      animationRef.current.pause();
    } else {
      animationRef.current.play();
    }
  }, [isHovering]);

  // Hide gracefully on error or if no models
  if (error || models.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="container-apple">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl md:text-3xl font-semibold text-[#1d1d1f] mb-2">
            Popular on Thingiverse
          </h2>
          <p className="text-[#86868b]">
            Discover trending 3D printable designs from the community
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex items-center justify-center h-48 bg-[#f5f5f7] rounded-2xl">
            <div className="animate-pulse">
              <div className="h-32 w-48 bg-[#e5e5ea] rounded-lg" />
            </div>
          </div>
        )}

        {/* Conveyor Belt */}
        {!loading && models.length > 0 && (
          <div
            className="overflow-hidden rounded-2xl bg-[#f5f5f7]"
            ref={scrollContainerRef}
          >
            <div
              className={`flex gap-4 p-4 ${
                prefersReducedMotion ? 'overflow-x-auto' : ''
              }`}
              style={{
                width: prefersReducedMotion ? 'auto' : `${models.length * 210}px`,
              }}
            >
              {/* Duplicate models for seamless loop */}
              {[...models, ...models].map((model, idx) => (
                <a
                  key={`${idx}-${model.url}`}
                  href={model.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-48 group cursor-pointer"
                  title={`Open ${model.title} on Thingiverse`}
                >
                  <div className="relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 h-48">
                    {model.image ? (
                      <img
                        src={model.image}
                        alt={model.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.src =
                            'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23e5e5ea" width="200" height="200"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" dy="0.3em" fill="%23999" font-size="14"%3E3D Model%3C/text%3E%3C/svg%3E';
                        }}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#e5e5ea] flex items-center justify-center text-[#999]">
                        3D Model
                      </div>
                    )}
                  </div>
                  <h4 className="mt-3 text-sm font-medium text-[#1d1d1f] line-clamp-2 group-hover:text-[#36c1b3] transition-colors">
                    {model.title}
                  </h4>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Manual scroll hint for reduced motion */}
        {prefersReducedMotion && models.length > 0 && (
          <p className="mt-4 text-xs text-[#86868b] text-center">
            Scroll horizontally to browse more models
          </p>
        )}
      </div>
    </section>
  );
}
