"use client";

import { useState } from "react";
import Image from "next/image";
import { deepClean } from "@/app/data/deepClean";


export default function ThreeHrFourHrCleaningPage() {

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
                Deep Cleaning
              </h2>
              <p className="text-sm text-gray-600 mt-1 mb-4">
                Our post-renovation / tenancy specialist cleaning service is perfect for those looking for a deep clean for a place that needs to be moved into or returned to its original move-in condition.
              </p>
              <h2 className="text-sm md:text-base font-semibold text-gray-900 mb-2">
                Specialist cleaning team for post-renovation or tenancy cleaning
              </h2>
              <p className="text-sm text-gray-600 mt-1 mb-4">
                Need a deep clean to get your place ready to move into or move out of? Look no further than our post-renovation / tenancy specialist cleaning service! Depending on the size of the premise, a professional team of 2 to 4 cleaners will be sent to your premise to conduct a thorough deep clean. Apart from the usual areas, this specialized service also includes:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {deepClean.map((service) => (
                <div key={service.title} className="bg-white border rounded-lg p-6">
                  <h3 className="font-bold mb-3">{service.title}</h3>
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

        <div className="w-full border rounded-xl p-6 bg-white">
          <div className="flex flex-col items-center text-center gap-4">
            <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-gray-700">
              <span className="text-white text-lg font-bold">✕</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-3">SERVICE DOES NOT INCLUDE:</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600 space-y-2 inline-block">
                <li>Cove Lights, Chandelier, Walls & Paint Marks</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full mb-10">
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
                <div className="bg-white rounded-lg overflow-hidden h-full">
                  <div className="bg-[#c9aca0] text-white text-center py-3 font-semibold tracking-wide">
                    PRICING
                  </div>
                  <div className="grid grid-cols-2 text-xs sm:text-sm font-semibold text-gray-700 border-b">
                    <div className="py-3 pl-5 border-r flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[20px] leading-none">fullscreen</span>
                      <span>SIZE</span>
                    </div>
                    <div className="py-3 pl-5 flex items-center justify-center gap-2">
                      <span className="material-symbols-outlined text-[20px] leading-none">attach_money</span>
                      <span>PRICE</span>
                    </div>
                  </div>
                  <div className="divide-y text-xs sm:text-sm">
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r flex items-center justify-center">
                        <span>&lt; 700 Sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$380</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r flex items-center justify-center">
                        <span>700 - 1000 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$430</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r flex items-center justify-center">
                        <span>1001 - 1300 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$480</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r flex items-center justify-center">
                        <span>1301 - 1600 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="font-semibold">$580</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2">
                      <div className="py-4 pl-5 border-r flex items-center justify-center">
                        <span>&gt; 1600 sqft</span>
                      </div>
                      <div className="py-4 pl-5 text-center">
                        <p className="text-gray-600 text-[11px] sm:text-xs">Message us on WhatsApp or Instagram for a quote!</p>
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
