"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { springCleaning } from "@/app/data/springCleaning";
import { importantNotes } from "@/app/data/importantNotes";
import { addBenefits } from "@/app/data/addBenefits";

type TabType = "3hr" | "4hr";

export default function SpringCleaningPage() {
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
    }, 4000);
    return () => clearInterval(intervalId);
  }, [emblaApi]);

  return (
    <div className="w-full bg-gray-100 py-5 lg:py-10">
      <div className="w-[96%] mx-auto px-3 sm:px-4 lg:px-6 rounded-none lg:rounded-xl flex flex-col gap-5 mt-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="relative w-full lg:w-[35%] aspect-[4/5] lg:aspect-auto lg:min-h-full flex-shrink-0">
            <Image
              src="/assets/da-5.jpg"
              alt="Cleaning"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Spring Cleaning
              </h2>
              <p className="text-sm text-gray-600 mt-1 mb-4">
              Give your home a renewal with an extra set of hands! Our 3 or 4-hour spring cleaning service includes an addition professional crew member, covering more within the same time for a comprehensive clean, leaving your home sparkling from top to bottom.     <br/>
              With a crew of 2 professionals, this enhanced cleaning goes beyond the basics, reaching those hard-to-reach areas and tackling dust bunnies and cobwebs for a thorough spring refresh.         
              </p>

            </div>

            <div className="inline-flex bg-[#d9dbc9] rounded-lg p-1 mb-6">
              {(["3hr", "4hr"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2 rounded-md font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-white shadow-sm"
                      : "text-gray-600 hover:text-black"
                  }`}
                >
                  {tab} Cleaning
                </button>
              ))}
            </div>

            {activeTab === "3hr" && (
              <div className="relative mb-8 px-6 sm:px-8">
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 sm:-left-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center z-10 text-gray-700 hover:text-gray-900 focus-ring"
                >
                  <span className="material-symbols-outlined text-[20px] leading-none">
                    arrow_back_ios
                  </span>
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 sm:-right-2 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center z-10 text-gray-700 hover:text-gray-900 focus-ring"
                >
                  <span className="material-symbols-outlined text-[20px] leading-none">
                    arrow_forward_ios
                  </span>
                </button>
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="-mx-3 flex">
                    {springCleaning.map((service) => (
                      <div
                        key={service.title}
                        className="flex-[0_0_50%] px-3"
                      >
                        <div className="h-full bg-white border rounded-lg p-6">
                          <h3 className="font-bold mb-3">{service.title}</h3>
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
              <div className="mb-6 flex justify-center">
                <div className="bg-white border rounded-lg p-6 max-w-xl w-full">
                  <h3 className="font-bold mb-4">SCOPE</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    The 4-hours cleaning service includes everything in our
                    3-hour services as well as cleaning of window frames and
                    sill, perfect for 4-5 room apartments or if you want more
                    thorough cleaning for your 2-3 room apartment.
                  </p>
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="w-full flex justify-between items-center p-5 font-semibold">
                  IMPORTANT NOTES
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

              <div className="bg-white border rounded-lg overflow-hidden">
                <div className="w-full flex justify-between items-center p-5 font-semibold">
                  ADDITIONAL BENEFITS
                </div>
                <div className="p-6 pt-0">
                  <ul className="list-disc pl-5 text-sm space-y-2">
                    {addBenefits.map((benefit, i) => (
                      <li key={i}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-[#fbe9e4] to-[#fdf5f1] py-10 rounded-xl">
          <div className="flex flex-col md:flex-row items-stretch gap-10 px-4 lg:px-8">
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div className="mb-4">
                <p className="text-4xl font-semibold text-gray-900">4.9</p>
                <p className="text-yellow-500 text-xl mt-1">★★★★★</p>
              </div>
              <div className="space-y-4 text-sm text-gray-700 max-w-md mx-auto">
                <div>
                  <p className="font-semibold tracking-wide">TRUSTED PROFESSIONALS</p>
                  <p>Our crew are all employed and certified in accordance to the law.</p>
                </div>
                <div>
                  <p className="font-semibold tracking-wide">DEDICATED SUPPORT</p>
                  <p>Our support team will assist on all your needs, from booking to post service support. (Mon–Sun, from 9am–6pm)</p>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
                <div className="bg-[#d7b8a0] text-white text-center py-3 font-semibold tracking-wide">
                  PRICING
                </div>
                <div className="grid grid-cols-2 text-xs sm:text-sm font-semibold text-gray-700 border-b">
                  <div className="py-3 pl-5 border-r flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px] leading-none">schedule</span>
                    <span>HRS</span>
                  </div>
                  <div className="py-3 pl-5 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px] leading-none">attach_money</span>
                    <span>PRICE</span>
                  </div>
                </div>
                <div className="divide-y text-xs sm:text-sm">
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r flex items-center justify-center">
                      <span>3hr Clean</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">$150</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r flex items-center justify-center">
                      <span>4hr Clean</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">$200</p>
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
