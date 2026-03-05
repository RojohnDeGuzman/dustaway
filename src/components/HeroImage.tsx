"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

export function HeroImage() {
  const [heroError, setHeroError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-[480px] mx-auto lg:mx-0 lg:max-w-[580px] xl:max-w-[640px] aspect-square flex items-center justify-center"
    >
      {/* Dashed ring - same size and radius as container */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-[2rem] border-2 border-dashed border-pastel-pink-200/50 pointer-events-none"
        aria-hidden
      />

      {/* Main container: gradient bg, same rounded corners - aligns with ring */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-float-slow hero-image-bg"
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {/* Inner white area - aligned with container, same center */}
        <div className="absolute inset-6 rounded-[1.5rem] bg-white/90 backdrop-blur-sm flex items-center justify-center">
          {!heroError ? (
            <Image
              src="/assets/da-4.jpg"
              alt="Professional cleaning service"
              width={560}
              height={560}
              className="object-contain object-center w-full h-full max-w-full max-h-full"
              priority
              unoptimized
              onError={() => setHeroError(true)}
            />
          ) : (
            <svg
              viewBox="0 0 200 200"
              className="w-2/3 h-2/3 text-pastel-pink-soft/80 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="100" cy="85" r="32" />
              <path d="M60 120 Q100 165 140 120" />
              <circle cx="85" cy="80" r="4" fill="currentColor" />
              <circle cx="115" cy="80" r="4" fill="currentColor" />
              <rect x="75" y="135" width="50" height="25" rx="4" />
            </svg>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function CleanHomeImage() {
  const [error, setError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className="w-full max-w-[540px] lg:max-w-[620px] xl:max-w-[680px] mx-auto lg:mx-0 aspect-[4/3] flex items-center justify-center"
    >
      {error ? (
        <div className="img-card w-full h-full flex items-center justify-center border-2 border-dashed border-pastel-green-200/60">
          <span className="text-5xl opacity-60" aria-hidden>
            ✨
          </span>
        </div>
      ) : (
        <motion.div className="img-card w-full h-full relative overflow-hidden">
          <Image
            src="/assets/da-2.png"
            alt="Clean home interior"
            fill
            sizes="(max-width: 640px) 92vw, (max-width: 1024px) 72vw, (max-width: 1280px) 48vw, 680px"
            className="object-cover object-[50%_25%]"
            unoptimized
            onError={() => setError(true)}
          />
        </motion.div>
      )}
    </motion.div>
  );
}

export function MascotImage({ className = "" }: { className?: string }) {
  const [error, setError] = useState(false);

  if (error) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-24 h-24 flex-shrink-0 img-circle flex items-center justify-center p-1 ${className}`}
    >
      <Image
        src="/assets/dustaway-mascot.png"
        alt="Dustaway"
        width={96}
        height={96}
        className="object-contain object-center w-full h-full animate-float"
        unoptimized
        onError={() => setError(true)}
      />
    </motion.div>
  );
}
