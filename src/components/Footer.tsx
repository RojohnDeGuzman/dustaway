"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { serviceLinks } from "@/lib/serviceLinks";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/#faq", label: "FAQ" },
  { href: "/booking", label: "Book" },
  { href: "/dashboard", label: "My bookings" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[color:var(--bg-soft-strong)] soft-divider-top"
    >
      <div className="max-w-[1700px] mx-auto px-6 sm:px-8 lg:px-10 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 text-center sm:text-left">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-semibold text-[var(--text-dark)]"
            >
              Dustaway
            </Link>
            <p className="mt-3 text-sm text-[var(--text-body)] font-medium">
              Novelty Bizcentre , <br />
              18 Howard Road #03-07 <br />
              Singapore 369585
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-semibold text-[var(--text-dark)]">
              Quick links
            </h3>
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

          <div>
            <h3 className="font-display font-semibold text-[var(--text-dark)]">
              Our services
            </h3>
            <ul className="mt-4 space-y-2">
              {serviceLinks.map((link) => (
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
            <h3 className="font-display font-semibold text-[var(--text-dark)]">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-body)] font-medium">
              <li>
                <Link
                  href="/booking"
                  className="focus-ring text-[var(--accent-green)] hover:underline font-semibold"
                >
                  Book a cleaning →
                </Link>
              </li>
              <li>
                Email: cs@dustaway.sg <br />
                marketing@dustaway.sg
              </li>
              <li>Contact Number: +65 8057 9500</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 soft-divider-top flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-sm text-[var(--text-body)] font-medium">
            DustAwaySvcs © {new Date().getFullYear()} All rights reserved. Owned
            by Dustaway Services Pte. Ltd. |{" "}
            <Link href="/terms">Terms & Conditions</Link>
          </p>
          <p className="text-sm text-[var(--text-muted)] font-medium">
            Modern cleaning, made simple.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
