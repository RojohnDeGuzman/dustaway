"use client";

import Image from "next/image";
import LocalAssetIcon from "@/components/LocalAssetIcon";
import { deepClean } from "@/app/data/deepClean";

export default function DeepCleaningPage() {
  return (
    <div className="w-full bg-[var(--bg-cream)] py-5 lg:py-10 services-info-glow">
      <div className="w-[96%] mx-auto px-3 sm:px-4 lg:px-6 rounded-none lg:rounded-xl flex flex-col gap-5 mt-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="relative w-full lg:w-[35%] aspect-[4/5] lg:aspect-auto lg:min-h-full flex-shrink-0">
            <Image
              src="/assets/da-6.png"
              alt="Cleaning"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div className="flex-1">
            <div className="mb-4 text-center ">
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--text-dark)]">
                Deep Cleaning
              </h2>
              <p className="text-sm text-[var(--text-body)] mt-1 mb-4 font-medium text-center">
                Our post-renovation / tenancy specialist cleaning service is
                perfect for those looking for a deep clean for a place that
                needs to be moved into or returned to its original move-in
                condition.
              </p>
              <h2 className="text-sm md:text-base font-semibold text-[var(--text-dark)] mb-2 text-center">
                Specialist cleaning team for post-renovation or tenancy cleaning
              </h2>
              <p className="text-sm text-[var(--text-body)] mt-1 mb-4 font-medium text-center">
                Need a deep clean to get your place ready to move into or move
                out of? Look no further than our post-renovation / tenancy
                specialist cleaning service! Depending on the size of the
                premise, a professional team of 2 to 4 cleaners will be sent to
                your premise to conduct a thorough deep clean. Apart from the
                usual areas, this specialized service also includes:
              </p>
            </div>

	            <div className="grid md:grid-cols-2 gap-6 mb-8">
	              {deepClean.map((service) => (
	                <div
	                  key={service.title}
	                  className="bg-white/90 border border-pastel-green-200/50 rounded-xl p-6 shadow-sm"
	                >
	                  <div className="flex items-center gap-4 mb-3">
	                    <Image
	                      src={service.icons}
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
              ))}
            </div>
          </div>
        </div>

        <div className="w-full border border-pastel-pink-200/50 rounded-[1.5rem] p-6 bg-pastel-pink-lighter/45 shadow-sm">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-[var(--pastel-green-strong)]">
              <span className="text-white text-lg font-bold">✕</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[var(--text-dark)] mb-3">
                SERVICE DOES NOT INCLUDE:
              </h3>
              <ul className="list-disc pl-5 text-sm text-[var(--text-body)] space-y-2 inline-block font-medium">
                <li>Cove Lights, Chandelier, Walls & Paint Marks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full mb-10">
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
                      booking to post service support. (Mon–Sun, from 9am–6pm)
                    </p>
                  </div>
                  <div>
                  <p className="font-semibold tracking-wide">
                    CLEANING SUPPLIES PROVIDED
                  </p>
                  <p>
                  Professional graded cleaning supplies provided. 
                  </p>
                </div>
                </div>
              </div>
              <div className="flex-1 self-start">
                <div className="bg-white/95 rounded-xl overflow-hidden border border-pastel-green-200/40 shadow-sm">
                  <div className="bg-[var(--pastel-green-strong)] text-white text-center py-3 font-semibold tracking-wide">
                    PRICING
                  </div>
                  <div className="grid grid-cols-2 text-xs sm:text-sm font-semibold text-[var(--text-body)] border-b border-pastel-green-200/40">
                    <div className="py-3 pl-5 border-r border-pastel-green-200/40 flex items-center justify-center gap-2">
                      <LocalAssetIcon src="/assets/fullscreen.png" />
                      <span>SIZE</span>
                    </div>
                    <div className="py-3 pl-5 flex items-center justify-center gap-2">
                      <LocalAssetIcon src="/assets/cash.png" />
                      <span>PRICE</span>
                    </div>
                  </div>
                  <div className="divide-y divide-pastel-green-200/30 text-xs sm:text-sm text-[var(--text-body)]">
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r border-pastel-green-200/40 flex items-center justify-center">
                        <span>&lt; 700 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$380</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r border-pastel-green-200/40 flex items-center justify-center">
                        <span>700 - 1000 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$430</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r border-pastel-green-200/40 flex items-center justify-center">
                        <span>1001 - 1300 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$480</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r border-pastel-green-200/40 flex items-center justify-center">
                        <span>1301 - 1600 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$580</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r border-pastel-green-200/40 flex items-center justify-center">
                        <span>&gt; 1600 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="text-[var(--text-muted)] text-[11px] sm:text-xs">
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
    </div>
  );
}
