"use client";

import Image from "next/image";
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

const paymentLogos = [
  { src: "/assets/paynow.svg", alt: "PayNow", width: 104, height: 20 },
  { src: "/assets/visa.svg", alt: "Visa", width: 52, height: 16 },
  { src: "/assets/mastercard.svg", alt: "Mastercard", width: 38, height: 20 },
  { src: "/assets/maestro.svg", alt: "Maestro", width: 42, height: 20 },
  { src: "/assets/amex.svg", alt: "American Express", width: 28, height: 22 },
  { src: "/assets/UnionPay_logo.svg", alt: "UnionPay", width: 52, height: 22 },
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
      <div className="max-w-[1700px] mx-auto px-6 sm:px-8 lg:px-10 py-8 sm:py-9">
        <div className="grid grid-cols-1 gap-5 text-center sm:grid-cols-2 sm:text-left lg:grid-cols-4 lg:gap-6">
          <div>
            <Link
              href="/"
              className="mx-auto mb-2 flex w-fit justify-center sm:mx-0"
              aria-label="Dustaway home"
            >
              <Image
                src="/assets/dustaway-logo.png"
                alt="Dustaway logo"
                width={86}
                height={86}
                unoptimized
                className="h-auto w-20 object-contain sm:w-24"
              />
            </Link>
            <Link
              href="/"
              className="font-display text-lg sm:text-xl font-semibold text-[var(--text-dark)]"
            >
              Dustaway
            </Link>
            <p className="mt-1.5 text-sm leading-5 text-[var(--text-body)] font-medium">
              Novelty Bizcentre, <br />
              18 Howard Road #03-07 <br />
              Singapore 369585
            </p>
          </div>

          <div>
            <h3 className="font-display text-[15px] font-semibold text-[var(--text-dark)]">
              Quick links
            </h3>
            <ul className="mt-2.5 space-y-1">
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
            <h3 className="font-display text-[15px] font-semibold text-[var(--text-dark)]">
              Our services
            </h3>
            <ul className="mt-2.5 space-y-1">
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

          <div>
            <h3 className="font-display text-[15px] font-semibold text-[var(--text-dark)]">
              Get in touch
            </h3>
            <ul className="mt-2.5 space-y-1.5 text-sm leading-5 text-[var(--text-body)] font-medium">
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

        <div className="mt-6 border-t border-pastel-green-200/50 pt-4">
          <div className="flex flex-col items-center gap-3 text-center lg:grid lg:grid-cols-[minmax(0,1.7fr)_auto_minmax(240px,0.9fr)] lg:items-center lg:gap-5 lg:text-left">
            <p className="text-xs leading-5 text-[var(--text-body)] font-medium lg:justify-self-start">
              DustAwaySvcs © {new Date().getFullYear()} All rights reserved.
              Owned by Dustaway Services Pte. Ltd. |{" "}
              <Link href="/terms">Terms & Conditions</Link>
            </p>

            <div className="flex items-center justify-center gap-2 whitespace-nowrap sm:gap-2.5">
              {paymentLogos.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  unoptimized
                  className="h-auto max-h-4.5 w-auto object-contain sm:max-h-5"
                />
              ))}
            </div>

            <p className="text-xs leading-5 text-[var(--text-muted)] font-medium lg:justify-self-end">
              Modern cleaning, made simple.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
