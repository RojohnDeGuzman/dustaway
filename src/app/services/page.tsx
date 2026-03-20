"use client";

import Link from "next/link";
import Image from "next/image";
import { serviceLinks } from "@/lib/serviceLinks";
import PageReveal from "@/components/PageReveal";

export default function ServicesPage() {
  return (
    <PageReveal className="section-container py-12 lg:py-16">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
          What we offer
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)]">
          Our services
        </h1>
        <p className="mt-4 text-[var(--text-body)] font-medium">
          Choose a service below to learn more and book.
        </p>
      </div>

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {serviceLinks.map((s) => (
          <li key={s.href}>
            <Link
              href={s.href}
              className="focus-ring block p-5 rounded-xl bg-pastel-green-lighter/40 border border-pastel-green-200/50 hover:bg-pastel-green-lighter/60 hover:border-pastel-green-200 font-medium text-[var(--text-dark)] transition-colors"
            >
              <span className="flex items-center gap-4">
                <Image
                  src={s.icon}
                  alt={`${s.label} icon`}
                  width={72}
                  height={72}
                  className="w-[72px] h-[72px] object-contain"
                />
                <span>{s.label}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </PageReveal>
  );
}
