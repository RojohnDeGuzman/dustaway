'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
  { href: '/#faq', label: 'FAQ' },
  { href: '/booking', label: 'Book' },
  { href: '/dashboard', label: 'My bookings' },
]

const ourServices = [
  { href: '/booking', label: 'Home cleaning' },
  { href: '/booking', label: 'Deep cleaning' },
  { href: '/booking', label: 'Office & commercial' },
  { href: '/booking', label: 'Carpet cleaning' },
  { href: '/booking', label: 'End of tenancy' },
  { href: '/booking', label: 'Disinfection' },
]

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-pastel-green-lighter/50 border-t border-pastel-green-200/50"
    >
      <div className="section-container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-center sm:text-left">
          {/* Brand */}
          <div>
            <Link href="/" className="font-display text-xl font-semibold text-[var(--text-dark)]">
              Dustaway
            </Link>
            <p className="mt-3 text-sm text-[var(--text-body)] font-medium">
              Your trusted home cleaning service. Book in seconds, manage in one place.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-dark)]">Quick links</h3>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="focus-ring text-sm text-[var(--text-body)] hover:text-[var(--text-dark)] font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-dark)]">Our services</h3>
            <ul className="mt-4 space-y-2">
              {ourServices.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="focus-ring text-sm text-[var(--text-body)] hover:text-[var(--text-dark)] font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Get in touch */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-dark)]">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-body)] font-medium">
              <li>
                <Link href="/booking" className="focus-ring text-[var(--accent-green)] hover:underline font-semibold">
                  Book a cleaning →
                </Link>
              </li>
              <li>Email: hello@dustaway.com</li>
              <li>Mon–Fri, 9am–6pm</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-pastel-green-200/50 flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-[var(--text-body)] font-medium">
            © {new Date().getFullYear()} Dustaway. All rights reserved.
          </p>
          <p className="text-sm text-[var(--text-muted)] font-medium">
            Modern cleaning, made simple.
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
