'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/booking', label: 'Book' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  function handleNavClick() {
    setMenuOpen(false)
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-[var(--bg-cream)]/88 backdrop-blur-lg border-b border-pastel-green-200/40"
    >
      <div className="section-container h-14 sm:h-16 flex items-center justify-between">
        <Link
          href="/"
          className="focus-ring font-display text-xl font-semibold text-[var(--text-dark)] tracking-tight rounded-lg py-1 transition-opacity hover:opacity-85"
        >
          Dustaway
        </Link>
        <nav className="hidden sm:flex items-center gap-1">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.04 * i, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                href={link.href}
                className="focus-ring relative px-4 py-2 rounded-lg text-[var(--text-body)] hover:text-[var(--text-dark)] font-medium transition-colors after:absolute after:left-4 after:right-4 after:bottom-1 after:h-px after:scale-x-0 after:bg-pastel-green-200 after:origin-left after:transition-transform hover:after:scale-x-100"
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <Link
              href="/dashboard"
              className="focus-ring ml-2 px-5 py-2.5 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-medium hover:bg-pastel-green-200 transition-all duration-300 shadow-sm hover:shadow"
            >
              My bookings
            </Link>
          </motion.div>
        </nav>

        {/* Mobile: hamburger */}
        <div className="flex sm:hidden items-center">
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            className="focus-ring w-11 h-11 rounded-xl flex flex-col items-center justify-center gap-1.5 bg-pastel-green-lighter/60 hover:bg-pastel-green-200/50 transition-colors"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-5 h-0.5 rounded-full bg-[var(--text-dark)] transition-all duration-200 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full bg-[var(--text-dark)] transition-all duration-200 ${
                menuOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-0.5 rounded-full bg-[var(--text-dark)] transition-all duration-200 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay + panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-14 sm:top-16 bg-black/30 z-40 sm:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden
            />
            <motion.nav
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="fixed left-0 right-0 top-14 sm:top-16 z-50 sm:hidden bg-[var(--bg-cream)] border-b border-pastel-green-200/50 shadow-lg"
            >
              <div className="section-container py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={handleNavClick}
                    className="focus-ring block w-full px-4 py-3.5 rounded-xl text-[var(--text-body)] font-medium hover:bg-pastel-green-lighter/50 hover:text-[var(--text-dark)] active:bg-pastel-green-200/40"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/dashboard"
                  onClick={handleNavClick}
                  className="focus-ring mt-2 mx-4 py-3.5 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-medium text-center hover:bg-pastel-green-200"
                >
                  My bookings
                </Link>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
