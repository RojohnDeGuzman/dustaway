"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { services3hr } from "@/app/data/services3hr";
import { importantNotes } from "@/app/data/importantNotes";
import ArrowIcon from "@/components/ArrowIcon";
import LocalAssetIcon from "@/components/LocalAssetIcon";

type TabType = "3hr" | "4hr";

export default function ThreeHrFourHrCleaningPage() {
  const [activeTab, setActiveTab] = useState<TabType>("3hr");

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;
    const intervalId = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.scrollNext();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="w-full bg-[var(--bg-cream)] py-5 lg:py-10 services-info-glow">
      <div className="w-[96%] mx-auto px-3 sm:px-4 lg:px-6 rounded-none lg:rounded-xl flex flex-col gap-5 mt-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="relative w-full lg:w-[35%] aspect-[4/5] lg:aspect-auto lg:min-h-full flex-shrink-0">
            <Image
              src="/assets/da-12.jpg"
              alt="Cleaning"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="flex-1">
            <div className="mb-4 text-center">
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--text-dark)]">
                3hr / 4hr Cleaning
              </h2>
              <p className="text-sm text-[var(--text-body)] mt-1 mb-4 font-medium">
                Every home is unique oasis. Get a custom cleaning experience
                with a dedicated professional! Choose between a 3-hour or 4-hour
                service and let us take care of your cleaning needs!
              </p>
            </div>

            <div className="flex justify-center mb-6">
              <div className="inline-flex bg-pastel-green-lighter rounded-xl p-1 border border-pastel-green-200/50">
                {(["3hr", "4hr"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-5 py-2 rounded-md font-medium transition-all duration-300 ${
                      activeTab === tab
                        ? "bg-white shadow-sm text-[var(--text-dark)]"
                        : "text-[var(--text-body)] hover:text-[var(--text-dark)]"
                    }`}
                  >
                    {tab} Cleaning
                  </button>
                ))}
              </div>
            </div>

            {activeTab === "3hr" && (
              <div className="relative mb-8 px-6 sm:px-8">
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center z-10 text-[var(--text-body)] hover:text-[var(--text-dark)] focus-ring"
                >
                  <ArrowIcon direction="back" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center z-10 text-[var(--text-body)] hover:text-[var(--text-dark)] focus-ring"
                >
                  <ArrowIcon direction="forward" />
                </button>
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="-mx-3 flex">
                    {services3hr.map((service) => (
                      <div key={service.title} className="flex-[0_0_100%] sm:flex-[0_0_50%] px-3">
                        <div className="h-full bg-white/90 border border-pastel-green-200/50 rounded-xl p-6 shadow-sm services-carousel-card">
                          <div className="flex items-center gap-4 mb-3">
                            <Image
                              src={service.icon}
                              alt={`${service.title} icon`}
                              width={56}
                              height={56}
                              className="w-[56px] h-[56px] object-contain"
                            />
                            <h3 className="font-bold">{service.title}</h3>
                          </div>
                          <ul className="list-disc pl-5 text-sm space-y-2">
                            {service.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "4hr" && (
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-white/90 border border-pastel-green-200/50 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold mb-4">SCOPE</h3>
                  <p className="text-sm text-[var(--text-body)] leading-relaxed font-medium">
                    The 4-hours cleaning service includes everything in our
                    3-hour services as well as cleaning of window frames and
                    sill, perfect for 4-5 room apartments or if you want more
                    thorough cleaning for your 2-3 room apartment.
                  </p>
                </div>
                <div className="bg-white/90 border border-pastel-green-200/50 rounded-xl p-6 shadow-sm">
                  <h3 className="font-bold mb-4">ADDITIONAL DETAILS</h3>
                  <p className="text-sm text-[var(--text-body)] font-medium">
                    Includes deeper cleaning areas and window frames that are
                    not covered in the standard 3-hour service.
                  </p>
                </div>
              </div>
            )}

            <div className="bg-white/90 border border-pastel-green-200/50 rounded-xl overflow-hidden shadow-sm">
              <div className="w-full flex items-center gap-3 p-5 font-semibold">
                <Image
                  src="/assets/loupe.png"
                  alt=""
                  width={24}
                  height={24}
                  className="h-6 w-6 flex-shrink-0 object-contain"
                />
                <span>IMPORTANT NOTES</span>
              </div>
              <div className="p-6 pt-0">
                <ul className="list-disc pl-5 text-sm space-y-2 mb-4">
                  <li>
                    Please be reminded that cleaning supplies & equipment are to
                    be provided by you
                  </li>
                  <li>
                    Additional services as listed below are <b>NOT</b> included
                  </li>
                </ul>
                <ol className="list-decimal pl-5 text-sm space-y-2">
                  {importantNotes.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-pastel-pink-lighter via-white to-pastel-green-lighter py-10 rounded-[1.75rem] soft-divider">
          <div className="flex flex-col md:flex-row items-stretch gap-10 px-4 lg:px-8">
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div className="mb-4">
                <p className="text-4xl font-semibold text-[var(--text-dark)]">
                  4.9
                </p>
                <p className="text-yellow-500 text-xl mt-1">★★★★★</p>
              </div>
              <div className="space-y-4 text-sm text-[var(--text-body)] max-w-md mx-auto font-medium">
                <div>
                  <p className="font-semibold tracking-wide">
                    TRUSTED PROFESSIONALS
                  </p>
                  <p>
                    Our crew are all employed and certified in accordance to the
                    law.
                  </p>
                </div>
                <div>
                  <p className="font-semibold tracking-wide">
                    DEDICATED SUPPORT
                  </p>
                  <p>
                    Our support team will assist on all your needs, from booking
                    to post service support. (Mon–Sun, from 9am–6pm)
                  </p>
                </div>
                <div>
                  <p className="font-semibold tracking-wide">
                    CLEANING SUPPLIES PROVIDED
                  </p>
                  <p>
                  Professional graded cleaning supplies provided. Simply provide vacuum & mop and we will settle the rest
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 self-start">
              <div className="bg-white/95 rounded-xl shadow-sm overflow-hidden border border-pastel-green-200/40">
                <div className="bg-[var(--pastel-green-strong)] text-white text-center py-3 font-semibold tracking-wide">
                  PRICING
                </div>
                <div className="grid grid-cols-2 text-xs sm:text-sm font-semibold text-[var(--text-body)] border-b border-pastel-green-200/40">
                  <div className="py-3 pl-5 border-r border-pastel-green-200/40 flex items-center justify-center gap-2">
                    <LocalAssetIcon src="/assets/clock.png" />
                    <span>HRS</span>
                  </div>
                  <div className="py-3 pl-5 flex items-center justify-center gap-2">
                    <LocalAssetIcon src="/assets/cash.png" />
                    <span>PRICE</span>
                  </div>
                </div>
                <div className="divide-y divide-pastel-green-200/30 text-xs sm:text-sm text-[var(--text-body)]">
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r border-pastel-green-200/40 flex items-center justify-center">
                      <span>3hr Clean</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">$75</p>
                      <p className="text-[var(--text-muted)] text-[11px] sm:text-xs">
                        9am – 12pm / 2pm – 5pm
                      </p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r border-pastel-green-200/40 flex items-center justify-center">
                      <span>4hr Clean</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">$100</p>
                      <p className="text-[var(--text-muted)] text-[11px] sm:text-xs">
                        8am – 12pm / 2pm – 6pm
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
  );
}
