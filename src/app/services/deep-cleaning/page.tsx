"use client";

import Image from "next/image";
import LocalAssetIcon from "@/components/LocalAssetIcon";
import { deepClean } from "@/app/data/deepClean";
import PageReveal from "@/components/PageReveal";

export default function DeepCleaningPage() {
  return (
    <PageReveal className="w-full bg-[var(--bg-cream)] py-5 lg:py-10 services-info-glow">
      <div className="w-[96%] mx-auto mt-10 flex flex-col gap-5 rounded-none px-3 sm:px-4 lg:rounded-xl lg:px-6">
        <div className="flex flex-col items-stretch gap-8 lg:flex-row">
          <div className="relative w-full flex-shrink-0 aspect-[4/5] lg:min-h-full lg:w-[35%] lg:aspect-auto">
            <Image
              src="/assets/da-6.png"
              alt="Cleaning"
              fill
              className="rounded-xl object-cover"
            />
          </div>

          <div className="flex-1">
            <div className="mb-4 text-center">
              <h2 className="font-display text-4xl font-semibold text-[var(--text-dark)] md:text-5xl">
                Deep Cleaning
              </h2>
              <p className="mt-1 mb-4 text-center text-sm font-medium text-[var(--text-body)]">
                Our post-renovation / tenancy specialist cleaning service is
                perfect for those looking for a deep clean for a place that
                needs to be moved into or returned to its original move-in
                condition.
              </p>
              <h2 className="mb-2 text-center text-sm font-semibold text-[var(--text-dark)] md:text-base">
                Specialist cleaning team for post-renovation or tenancy cleaning
              </h2>
              <p className="mt-1 mb-4 text-center text-sm font-medium text-[var(--text-body)]">
                Need a deep clean to get your place ready to move into or move
                out of? Look no further than our post-renovation / tenancy
                specialist cleaning service! Depending on the size of the
                premise, a professional team of 2 to 4 cleaners will be sent to
                your premise to conduct a thorough deep clean. Apart from the
                usual areas, this specialized service also includes:
              </p>
            </div>

            <div className="mb-8 grid gap-6 md:grid-cols-2">
              {deepClean.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-pastel-green-200/50 bg-white/90 p-6 shadow-sm"
                >
                  <div className="mb-3 flex items-center gap-4">
                    <Image
                      src={service.icons}
                      alt={`${service.title} icon`}
                      width={56}
                      height={56}
                      className="h-[56px] w-[56px] object-contain"
                    />
                    <h3 className="font-bold">{service.title}</h3>
                  </div>
                  <ul className="list-disc space-y-2 pl-5 text-sm">
                    {service.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full rounded-[1.5rem] border border-pastel-pink-200/50 bg-pastel-pink-lighter/45 p-6 shadow-sm">
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src="/assets/cancel.png"
              alt=""
              width={40}
              height={40}
              className="h-10 w-10 flex-shrink-0 object-contain"
            />
            <div>
              <h3 className="mb-3 text-lg font-bold text-[var(--text-dark)]">
                SERVICE DOES NOT INCLUDE:
              </h3>
              <ul className="inline-block list-disc space-y-2 pl-5 text-sm font-medium text-[var(--text-body)]">
                <li>Cove Lights, Chandelier, Walls & Paint Marks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-10 w-full">
          <div className="soft-divider w-full rounded-[1.75rem] bg-gradient-to-r from-pastel-pink-lighter via-white to-pastel-green-lighter py-10">
            <div className="flex flex-col items-stretch gap-10 px-4 md:flex-row lg:px-8">
              <div className="flex flex-1 flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <p className="text-4xl font-semibold text-[var(--text-dark)]">
                    4.9
                  </p>
                  <p className="mt-1 text-xl text-yellow-500">★★★★★</p>
                </div>
                <div className="mx-auto max-w-md space-y-4 text-sm font-medium text-[var(--text-body)]">
                  <div>
                    <p className="font-semibold tracking-wide">
                      TRUSTED PROFESSIONALS
                    </p>
                    <p>
                      Our crew are all employed and certified in accordance to
                      the law.
                    </p>
                  </div>
                  <div>
                    <p className="font-semibold tracking-wide">
                      DEDICATED SUPPORT
                    </p>
                    <p>
                      Our support team will assist on all your needs, from
                      booking to post service support. (Mon-Sun, from 9am-6pm)
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-start flex-1">
                <div className="overflow-hidden rounded-xl border border-pastel-green-200/40 bg-white/95 shadow-sm">
                  <div className="bg-[var(--pastel-green-strong)] py-3 text-center font-semibold tracking-wide text-white">
                    PRICING
                  </div>
                  <div className="grid grid-cols-2 border-b border-pastel-green-200/40 text-xs font-semibold text-[var(--text-body)] sm:text-sm">
                    <div className="flex items-center justify-center gap-2 border-r border-pastel-green-200/40 py-3 pl-5">
                      <LocalAssetIcon src="/assets/fullscreen.png" />
                      <span>SIZE</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 py-3 pl-5">
                      <LocalAssetIcon src="/assets/cash.png" />
                      <span>PRICE</span>
                    </div>
                  </div>
                  <div className="divide-y divide-pastel-green-200/30 text-xs text-[var(--text-body)] sm:text-sm">
                    <div className="grid grid-cols-2">
                      <div className="flex items-center justify-center border-r border-pastel-green-200/40 py-4 pl-5">
                        <span>&lt; 700 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$380</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="flex items-center justify-center border-r border-pastel-green-200/40 py-4 pl-5">
                        <span>700 - 1000 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$430</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="flex items-center justify-center border-r border-pastel-green-200/40 py-4 pl-5">
                        <span>1001 - 1300 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$480</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="flex items-center justify-center border-r border-pastel-green-200/40 py-4 pl-5">
                        <span>1301 - 1600 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$580</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="flex items-center justify-center border-r border-pastel-green-200/40 py-4 pl-5">
                        <span>&gt; 1600 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="text-[11px] text-[var(--text-muted)] sm:text-xs">
                          Message us on WhatsApp or Instagram for a quote!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageReveal>
  );
}
