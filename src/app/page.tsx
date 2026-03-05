"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AnimateIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/AnimateIn";
import { HeroImage, CleanHomeImage } from "@/components/HeroImage";

const services = [
  {
    title: "Home cleaning",
    desc: "Every home is unique oasis. Get a custom cleaning experience with a dedicated professional! Choose between a 3-hour or 4-hour service and let us take care of your cleaning needs!",
    image: "/assets/da-12.jpg",
    href: "/booking",
  },
  {
    title: "Evening cleaning",
    desc: "Ditch the cleaning after work! This 3-hour evening service lets you come home to a spotless haven, perfect for unwinding and recharging.",
    image: "/assets/da-11.jpg",
    href: "/booking",
  },
  {
    title: "Spring Cleaning",
    desc: "Give your home a renewal with an extra set of hands! Our 3 or 4-hour spring cleaning service includes an addition professional crew member, covering more within the same time for a comprehensive clean, leaving your home sparkling from top to bottom.",
    image: "/assets/da-5.jpg",
    href: "/booking",
  },
  {
    title: "Deep cleaning",
    desc: "Our post-renovation / tenancy specialist cleaning service is perfect for those looking for a deep clean for a place that needs to be moved into or returned to its original move-in condition.",
    image: "/assets/da-6.png",
    href: "/booking",
  },
  {
    title: "Upholstery cleaning",
    desc: "Our upholstery deep clean service can clean the toughest stains but gentle enough not to damage your furniture, giving everyone a clean, safe and sanitized environment.",
    image: "/assets/da-7.png",
    href: "/booking",
  },
  {
    title: "Vinyl Cleaning",
    desc: "Breathe new life into your vinyl floors! Our cleaning service tackles dirt, grime, and minor scuffs, restoring a brilliant shine. We use gentle methods safe for all vinyl types. Enjoy long-lasting beauty and get expert maintenance tips - all in one service.",
    image: "/assets/da-8.jpg",
    href: "/booking",
  },
  {
    title: "Disinfection",
    desc: "Our NEA-certified disinfection service is designed to protect you and your family members from harmful viruses and bacteria. Our specialized disinfectant and equipment are 100% safe for children and pets.",
    image: "/assets/da-9.jpg",
    href: "/booking",
  },
];
const trustItems = ["Book in 60 seconds", "Trusted cleaners", "Cancel anytime"];

const testimonials = [
  {
    quote:
      "The team was professional and did a really good job! Highly recommended.",
    name: "Sarah M.",
    rating: 5,
    date: "2 days ago",
  },
  {
    quote:
      "Arranging an appointment is hassle-free. Very satisfied with the results.",
    name: "James L.",
    rating: 5,
    date: "1 week ago",
  },
  {
    quote:
      "Huge improvement to my home. Definitely recommending for the next cleaning.",
    name: "Emma K.",
    rating: 5,
    date: "1 month ago",
  },
];

const whyChoose = [
  {
    title: "Excellent results",
    desc: "Trained, experienced cleaners who take cleanliness to the next level.",
    icon: "✓",
  },
  {
    title: "Satisfaction guaranteed",
    desc: "We guarantee you’ll want to call us back for your next session.",
    icon: "★",
  },
  {
    title: "Easy booking",
    desc: "Book in seconds online. Reschedule or cancel anytime.",
    icon: "📅",
  },
  {
    title: "No strings attached",
    desc: "Transparent pricing and no obligation. Book when you need us.",
    icon: "🔓",
  },
  {
    title: "Eco-friendly options",
    desc: "We use organic and environmentally friendly products when you prefer.",
    icon: "🌿",
  },
  {
    title: "Professional team",
    desc: "Skilled, dedicated cleaners who take pride in their work.",
    icon: "👋",
  },
];

const stats = [
  { value: "5/5", label: "Google reviews" },
  { value: "500+", label: "Happy customers" },
  { value: "5+", label: "Years experience" },
  { value: "100%", label: "Satisfaction focus" },
];

const faqs = [
  {
    q: "How does booking work?",
    a: "Choose your service, pick a date and time, and enter your contact details. We’ll confirm by email. No account needed.",
  },
  {
    q: "What’s included in a standard clean?",
    a: "Dusting, vacuuming, mopping, bathroom sanitization, kitchen wipe-down, and taking out trash. Deep cleans include inside appliances and detailed work.",
  },
  {
    q: "Can I cancel or reschedule?",
    a: "Yes. Cancel or reschedule from your bookings page up to 24 hours before the appointment at no extra charge.",
  },
  {
    q: "Do you bring your own supplies?",
    a: "Yes. Our teams bring professional-grade products. You can request eco-friendly options in your preferences.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — MCSC-style: headline + trusted line + CTAs */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        {/* Blurs positioned to frame the image area on the right */}
        <div className="absolute top-1/2 right-0 w-[28rem] h-[28rem] -translate-y-1/2 rounded-full bg-pastel-pink-soft/40 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-pastel-green-soft/45 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-pastel-pink-lighter/35 blur-3xl animate-float-delay -translate-y-1/2" />

        <div className="section-container relative w-full flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20 py-12 sm:py-20 lg:py-24">
          <div className="flex-1 max-w-xl order-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4"
            >
              Modern cleaning
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] font-semibold text-[var(--text-dark)] tracking-tight leading-[1.1]"
            >
              A clean home without the dirty work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-lg text-[var(--text-body)] max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              But who wants to actually do all the cleaning? With Dustaway, you
              can now kick back, relax and let us take care of the cleaning!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/#services"
                className="btn-secondary focus-ring inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-pastel-pink-soft text-[var(--text-dark)] font-medium hover:bg-pastel-pink-lighter/50 btn-press"
              >
                View services
              </Link>
              <Link
                href="/booking"
                className="btn-primary focus-ring inline-flex items-center justify-center px-8 py-4 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-medium hover:bg-pastel-green-200"
              >
                Book a cleaning
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-12 pt-8 border-t border-pastel-green-200/50 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-medium text-[var(--text-body)]"
            >
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span className="text-pastel-pink-200">·</span>}
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
          <div className="flex-1 w-full max-w-[480px] lg:max-w-none flex items-center justify-center order-2">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* Our Professional Cleaning Services — MCSC-style grid with Read more */}
      <section
        id="services"
        className="py-[var(--section-padding)] bg-pastel-green-lighter/25"
      >
        <div className="section-container">
          <AnimateIn className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
              What we offer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)]">
              Our professional cleaning services
            </h2>
            <p className="mt-4 text-[var(--text-body)] font-medium">
              Choose between our general home cleaning and specialized cleaning
              such as deep cleaning, upholstery cleaning, vinyl cleaning and
              disinfection services!
            </p>
          </AnimateIn>
          <StaggerChildren
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            delay={0.1}
          >
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card-hover p-6 rounded-2xl bg-white/95 border border-pastel-green-200/50 shadow-sm h-full flex flex-col text-center sm:text-left"
                >
                  <div className="relative w-full max-w-[520px] aspect-square overflow-hidden rounded-xl mx-auto sm:mx-0">
                    <Image
                      src={s.image}
                      alt={`${s.title} image`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-[var(--text-dark)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[var(--text-body)] text-sm font-medium flex-1">
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-1 text-[var(--accent-green)] font-semibold hover:gap-2 transition-all focus-ring justify-center sm:justify-start"
                  >
                    Read more
                    <span aria-hidden>→</span>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          <AnimateIn delay={0.3} className="mt-12 text-center">
            <Link
              href="/booking"
              className="btn-primary focus-ring inline-flex items-center justify-center px-8 py-4 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-medium"
            >
              Book a service
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* Why Choose Dustaway? — MCSC-style benefit cards */}
      <section className="py-[var(--section-padding)] bg-white">
        <div className="section-container">
          <AnimateIn className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
              Why choose us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)]">
              Why choose Dustaway?
            </h2>
          </AnimateIn>
          <StaggerChildren
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            delay={0.08}
          >
            {whyChoose.map((w) => (
              <StaggerItem key={w.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-pastel-green-lighter/40 border border-pastel-green-200/50 flex flex-col sm:flex-row gap-4 text-center sm:text-left items-center sm:items-start"
                >
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-pastel-pink-soft flex items-center justify-center text-[var(--text-dark)] font-bold">
                    {w.icon}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-[var(--text-dark)]">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-body)] font-medium">
                      {w.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials strip — MCSC-style top testimonials */}
      <section
        id="testimonials"
        className="py-12 bg-pastel-pink-lighter/40 border-y border-pastel-pink-200/40"
      >
        <div className="section-container">
          <AnimateIn className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Testimonials
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-dark)] mt-2">
              What our customers say
            </h2>
          </AnimateIn>
          <StaggerChildren className="grid sm:grid-cols-3 gap-6" delay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white/90 border border-pastel-pink-200/50 shadow-sm h-full flex flex-col text-center"
                >
                  <p className="text-[var(--accent-green)] font-semibold">
                    ★★★★★ {t.rating}/5
                  </p>
                  <p className="mt-3 text-[var(--text-body)] font-medium flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[var(--text-dark)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">{t.date}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats — MCSC-style numbers */}
      <section className="py-14 bg-pastel-pink-lighter/40 border-y border-pastel-pink-200/40">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl sm:text-4xl font-semibold text-[var(--accent-green)]">
                  {s.value}
                </p>
                <p className="mt-1 text-[var(--text-body)] font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About + image + CTA */}
      <section id="about" className="py-[var(--section-padding)]">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-end gap-8">
              <CleanHomeImage />
              <div className="w-full max-w-[680px]">
                <p className="text-2xl font-display font-semibold text-[var(--text-dark)] text-center lg:text-left">
                  Accreditations
                </p>
                <div className="mt-5 relative w-full aspect-[16/4]">
                  <Image
                    src="/assets/dustaway_partners_strip.svg"
                    alt="Dustaway accreditations strip"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
              <AnimateIn direction="right" amount={0.2}>
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                  About us
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)]">
                  Your trusted local brand for all your cleaning needs!
                </h2>
                <p className="mt-6 text-lg text-[var(--text-body)] leading-relaxed font-medium">
                  Since 2019, Dustaway Services has been a trusted, homegrown
                  brand, committed to creating clean, comfortable homes. Our
                  team offers a wide range of cleaning services, from efficient
                  3- to 4-hour general cleaning sessions to comprehensive
                  deep-cleaning options like post-renovation cleaning, tenancy
                  cleaning, vinyl floor care, mattress and upholstery cleaning,
                  and disinfection. Founded by a single working mother inspired
                  to support other busy parents, Dustaway has grown from a small
                  team of 3 to over 20 dedicated professionals. Our commitment
                  to exceptional customer service sets us apart—when you choose
                  Dustaway Services, you’ll enjoy a hassle-free booking
                  experience and the satisfaction of a spotless & refreshed home
                  after our sessions.
                </p>
                <Link
                  href="/dashboard"
                  className="btn-primary focus-ring mt-8 inline-flex items-center justify-center px-8 py-4 rounded-full bg-pastel-pink-soft text-[var(--text-dark)] font-medium hover:bg-pastel-pink-200 btn-press w-fit mx-auto lg:mx-0"
                >
                  View my bookings
                </Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA — Your roadmap to a cleaner home */}
      <section className="py-16 bg-pastel-green-lighter/50 border-t border-pastel-green-200/50">
        <div className="section-container text-center">
          <AnimateIn>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-dark)]">
              Your roadmap to a cleaner home starts here
            </h2>
            <p className="mt-4 text-[var(--text-body)] font-medium max-w-xl mx-auto">
              Book a cleaning in a few clicks. We’ll confirm by email and you
              can manage your bookings anytime.
            </p>
            <Link
              href="/booking"
              className="btn-primary focus-ring mt-8 inline-flex items-center justify-center px-10 py-4 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-semibold text-lg"
            >
              Book now
            </Link>
          </AnimateIn>
        </div>
      </section>

      {/* FAQ — MCSC-style */}
      <section id="faq" className="py-[var(--section-padding)] bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="font-display text-3xl font-semibold text-[var(--text-dark)] mt-2">
              Frequently asked questions
            </h2>
          </AnimateIn>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <AnimateIn key={f.q} delay={i * 0.05}>
                <details className="group p-5 rounded-xl bg-pastel-green-lighter/30 border border-pastel-green-200/50">
                  <summary className="font-display font-semibold text-[var(--text-dark)] cursor-pointer list-none flex justify-between items-center">
                    {f.q}
                    <span className="text-pastel-pink-200 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <p className="mt-3 text-[var(--text-body)] font-medium pl-0">
                    {f.a}
                  </p>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
