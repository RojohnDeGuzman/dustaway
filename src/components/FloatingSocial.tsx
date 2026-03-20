"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const SOCIALS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/6580579500",
    icon: (
      <svg
        className="w-6 h-6 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
    color: "bg-[#25D366] hover:bg-[#20bd5a]",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/dustawaysvcs/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6"
        aria-hidden
      >
        <path d="M22 12A10 10 0 1 0 10.94 21.95v-7.03H8.08V12h2.86V9.8c0-2.82 1.68-4.37 4.25-4.37 1.23 0 2.52.22 2.52.22v2.78h-1.42c-1.4 0-1.84.87-1.84 1.76V12h3.13l-.5 2.92h-2.63v7.03A10 10 0 0 0 22 12z" />
      </svg>
    ),
    color: "bg-[#0084FF] hover:bg-[#0073E6]",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/dustawaysvcs",
    icon: (
      <svg
        className="w-6 h-6 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden
      >
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    color:
      "bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#dc2743] hover:opacity-90",
  },
  {
    name: "Tiktok",
    href: "https://www.tiktok.com/@dustawaysvcs",
    icon: (
      <svg
        className="w-6 h-6 flex-shrink-0"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M21 8.02a7.48 7.48 0 01-4.41-1.43V14.3a6.3 6.3 0 11-5.46-6.25v3.1a3.2 3.2 0 102.26 3.06V2h3.14a4.35 4.35 0 004.01 3.02v3z" />
      </svg>
    ),
    color: "bg-black hover:bg-neutral-800",
  },
];

const SCROLL_THRESHOLD = 280;

export default function FloatingSocial() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [hasHover, setHasHover] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(hover: hover)");
    setHasHover(mql.matches);
    const handler = () => setHasHover(mql.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > SCROLL_THRESHOLD);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const setExpandedTrue = () => setExpanded(true);
  const setExpandedFalse = () => setExpanded(false);
  const toggleExpanded = () => setExpanded((e) => !e);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3 pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]"
          onMouseEnter={hasHover ? setExpandedTrue : undefined}
          onMouseLeave={hasHover ? setExpandedFalse : undefined}
        >
          {/* Expanded: WhatsApp, Messenger, IG */}
          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col-reverse gap-2 overflow-hidden"
              >
                {SOCIALS.map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ delay: i * 0.04 }}
                    className={`flex items-center gap-3 rounded-full pl-4 pr-5 py-3 sm:py-2.5 min-h-[44px] ${social.color} text-white shadow-lg focus-ring touch-manipulation`}
                    aria-label={social.name}
                  >
                    <span className="flex-shrink-0">{social.icon}</span>
                    <span className="font-medium text-sm whitespace-nowrap">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main button: mascot — min 44px touch target; tap toggles menu on touch devices */}
          <motion.button
            type="button"
            onClick={toggleExpanded}
            className="relative w-14 h-14 sm:w-16 sm:h-16 min-w-[3.5rem] min-h-[3.5rem] rounded-full bg-white overflow-hidden shadow-lg border-2 border-pastel-pink-200/60 flex items-center justify-center p-1.5 focus-ring hover:shadow-xl active:scale-95 sm:hover:scale-105 transition-transform duration-200 touch-manipulation"
            aria-label={expanded ? "Close social links" : "Chat with us"}
            aria-expanded={expanded}
          >
            <Image
              src="/assets/dustaway-logo.png"
              alt=""
              width={56}
              height={56}
              className="object-contain object-center w-full h-full"
              unoptimized
            />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
