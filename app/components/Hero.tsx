'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-4">
      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-2 sm:px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Main Heading - ELEVATE with special styling for 25 */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-2 sm:mb-4 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          ELEVATE<span className="text-blue-500">25</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.h2
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-2 leading-tight tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ letterSpacing: '0.2em' }}
        >
          SHAPING THE FUTURE
        </motion.h2>

        
        <motion.h2
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-widest"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          style={{ letterSpacing: '0.2em' }}
        >
          LEADING THROUGH THE HUMAN -AI NEXUS
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-sm sm:text-base md:text-lg lg:text-xl text-purple-200 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed px-2 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          Elevate&apos;25 is a one-day conclave for People Leaders organized by HR Evolve, on 20th November 2025 at Technopark.
          As organizations stand at the threshold of intelligent transformation, leadership itself is being redefined.
          Elevate 2025, &apos;Shaping the Future: Leading through the Human&ndash;AI Nexus&apos; explores how People Leaders can architect
          agile, ethical, and purpose-driven workplaces in an era of intelligent machines. The conclave brings together thinkers,
          technologists, and HR visionaries to discuss how human insight, emotional intelligence, and adaptive learning can
          amplify &mdash; not compete with &mdash; AI. Together, we will decode how to reimagine work, redeploy talent, and design
          governance frameworks that ensure technology serves humanity, not the other way around.
        </motion.p>

        {/* Join Us On */}
        <motion.div
          className="mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
        >
          <span className="text-lg sm:text-xl md:text-2xl text-white font-semibold">
            JOIN US ON
          </span>
        </motion.div>

        {/* Date */}
        <motion.p
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-blue-500 font-bold mb-6 sm:mb-8 px-2 sm:px-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        >
          20<sup className="text-lg sm:text-xl">th</sup> NOVEMBER 2025
        </motion.p>

        {/* HR Conclave text */}
        <motion.div
          className="mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
        >
          <span className="text-base sm:text-lg md:text-xl text-white">
            Stay tuned for the ultimate <span className="text-blue-500 font-semibold">HR Conclave!</span>
          </span>
        </motion.div>

        {/* CTA Button */}
        <Link href="https://makemypass.com/event/elevate25-hr-conclave" target="_blank" rel="noopener noreferrer">
          <motion.button
            className="group bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 rounded-full text-lg sm:text-xl font-bold shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 flex items-center gap-2 sm:gap-3 mx-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 1.2,
              ease: [0.25, 0.46, 0.45, 0.94],
              opacity: { duration: 0.3, delay: 1.2 },
              scale: { duration: 0.4, delay: 1.2, ease: "backOut" }
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2, ease: "easeOut" }
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.1 }
            }}
          >
            Register Now
            <svg
              className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </Link>
      </motion.div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  );
}
