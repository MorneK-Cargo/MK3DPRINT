'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Box, RotateCcw, ZoomIn, ZoomOut, Play, Pause, Eye, Layers } from 'lucide-react';

interface ViewerState {
  rotationX: number;
  rotationY: number;
  zoom: number;
  autoRotate: boolean;
  wireframe: boolean;
}

export default function ModelViewer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  
  const [state, setState] = useState<ViewerState>({
    rotationX: 0,
    rotationY: 0,
    zoom: 1,
    autoRotate: true,
    wireframe: false,
  });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState({ x: 0, y: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const size = 100 * state.zoom;
      
      // Convert rotation to radians
      const rotX = (state.rotationX * Math.PI) / 180;
      const rotY = (state.rotationY * Math.PI) / 180;
      
      // Define cube vertices
      const vertices = [
        [-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1],
        [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1],
      ];
      
      // Project 3D to 2D with rotation
      const project = (x: number, y: number, z: number) => {
        // Rotate Y
        const x1 = x * Math.cos(rotY) - z * Math.sin(rotY);
        const z1 = x * Math.sin(rotY) + z * Math.cos(rotY);
        
        // Rotate X
        const y1 = y * Math.cos(rotX) - z1 * Math.sin(rotX);
        const z2 = y * Math.sin(rotX) + z1 * Math.cos(rotX);
        
        // Simple perspective
        const scale = 3 / (3 + z2);
        return {
          x: centerX + x1 * size * scale,
          y: centerY + y1 * size * scale,
          z: z2,
        };
      };
      
      const projected = vertices.map((v) => project(v[0], v[1], v[2]));
      
      // Draw edges with gradient
      const edges = [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ];
      
      // Draw faces if not wireframe
      if (!state.wireframe) {
        const faces = [
          { vertices: [0, 1, 2, 3], color: 'rgba(0, 200, 200, 0.3)' },
          { vertices: [4, 5, 6, 7], color: 'rgba(0, 180, 180, 0.3)' },
          { vertices: [0, 1, 5, 4], color: 'rgba(0, 160, 160, 0.3)' },
          { vertices: [2, 3, 7, 6], color: 'rgba(0, 220, 220, 0.3)' },
          { vertices: [0, 3, 7, 4], color: 'rgba(0, 140, 140, 0.3)' },
          { vertices: [1, 2, 6, 5], color: 'rgba(0, 240, 240, 0.3)' },
        ];
        
        faces.sort((a, b) => {
          const zA = a.vertices.reduce((sum, i) => sum + projected[i].z, 0) / 4;
          const zB = b.vertices.reduce((sum, i) => sum + projected[i].z, 0) / 4;
          return zB - zA;
        });
        
        faces.forEach((face) => {
          ctx.beginPath();
          ctx.moveTo(projected[face.vertices[0]].x, projected[face.vertices[0]].y);
          for (let i = 1; i < face.vertices.length; i++) {
            ctx.lineTo(projected[face.vertices[i]].x, projected[face.vertices[i]].y);
          }
          ctx.closePath();
          ctx.fillStyle = face.color;
          ctx.fill();
        });
      }
      
      // Draw edges
      ctx.strokeStyle = 'rgba(0, 255, 255, 0.8)';
      ctx.lineWidth = 2;
      ctx.shadowColor = 'rgba(0, 255, 255, 0.5)';
      ctx.shadowBlur = 10;
      
      edges.forEach(([i, j]) => {
        ctx.beginPath();
        ctx.moveTo(projected[i].x, projected[i].y);
        ctx.lineTo(projected[j].x, projected[j].y);
        ctx.stroke();
      });
      
      // Draw vertices
      ctx.shadowBlur = 20;
      projected.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0, 255, 255, 1)';
        ctx.fill();
      });
    };
    
    const animate = () => {
      if (state.autoRotate) {
        setState((prev) => ({
          ...prev,
          rotationY: prev.rotationY + 0.5,
        }));
      }
      draw();
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [mounted, state.autoRotate, state.wireframe, state.zoom, state.rotationX, state.rotationY]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setLastMouse({ x: e.clientX, y: e.clientY });
    setState((prev) => ({ ...prev, autoRotate: false }));
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - lastMouse.x;
    const dy = e.clientY - lastMouse.y;
    setState((prev) => ({
      ...prev,
      rotationY: prev.rotationY + dx * 0.5,
      rotationX: prev.rotationX + dy * 0.5,
    }));
    setLastMouse({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  if (!mounted) {
    return (
      <section id="viewer" className="py-24 bg-gray-950/50" ref={ref}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Interactive <span className="gradient-text">3D Viewer</span>
            </h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="viewer" className="py-24 bg-gray-950/50" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Interactive <span className="gradient-text">3D Viewer</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience how we visualize 3D models. Drag to rotate, use controls to zoom and toggle display modes.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-950 border border-white/10"
        >
          {/* Viewer */}
          <div
            className="relative aspect-video cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <canvas
              ref={canvasRef}
              width={800}
              height={450}
              className="w-full h-full"
            />
            
            {/* Overlay Grid */}
            <div className="absolute inset-0 pointer-events-none grid-bg opacity-20" />
            
            {/* Info Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center gap-2">
              <Box className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-white">Sample 3D Model</span>
            </div>
          </div>

          {/* Controls */}
          <div className="p-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setState((prev) => ({ ...prev, autoRotate: !prev.autoRotate }))}
                className={`p-2 rounded-lg transition-all ${
                  state.autoRotate ? 'bg-cyan-500 text-black' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                title={state.autoRotate ? 'Pause rotation' : 'Auto rotate'}
              >
                {state.autoRotate ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              <button
                onClick={() => setState((prev) => ({ ...prev, rotationX: 0, rotationY: 0 }))}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
                title="Reset view"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={() => setState((prev) => ({ ...prev, wireframe: !prev.wireframe }))}
                className={`p-2 rounded-lg transition-all ${
                  state.wireframe ? 'bg-cyan-500 text-black' : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                title="Toggle wireframe"
              >
                <Layers className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setState((prev) => ({ ...prev, zoom: Math.max(0.5, prev.zoom - 0.2) }))}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
                title="Zoom out"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-400 min-w-[60px] text-center">
                {Math.round(state.zoom * 100)}%
              </span>
              <button
                onClick={() => setState((prev) => ({ ...prev, zoom: Math.min(2, prev.zoom + 0.2) }))}
                className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all"
                title="Zoom in"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Eye className="w-4 h-4" />
              <span>Drag to rotate • Scroll to zoom</span>
            </div>
          </div>
        </motion.div>

        {/* Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 grid md:grid-cols-3 gap-4"
        >
          {[
            { title: 'Upload Your Model', desc: 'Support for STL, OBJ, 3MF, and more formats' },
            { title: 'Get Instant Preview', desc: 'See how your model will look before printing' },
            { title: 'Optimize for Print', desc: 'We analyze and optimize for best results' },
          ].map((item, i) => (
            <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
