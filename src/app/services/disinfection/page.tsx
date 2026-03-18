"use client";

import { useEffect, useState } from "react";
import Image from "next/image";



export default function DisinfectionPage() {


  return (
    <div className="w-full bg-gray-100 py-5 lg:py-10">
      <div className="w-[96%] mx-auto px-3 sm:px-4 lg:px-6 rounded-none lg:rounded-xl flex flex-col gap-5 mt-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="relative w-full lg:w-[35%] aspect-[4/5] lg:aspect-auto lg:min-h-auto flex-shrink-0 bg-white rounded-xl">
            <Image
              src="/assets/da-14.jpg"
              alt="Cleaning"
              fill
              className="object-contain rounded-xl"
            />
          </div>

          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Disinfection
              </h2>
              <p className="text-sm text-gray-600 mt-1 mb-4">
              Our NEA-certified disinfection service is designed to protect you and your family members from harmful viruses and bacteria. Our specialized disinfectant and equipment are 100% safe for children and pets. 
              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden mt-4">
          <div className="grid lg:grid-cols-2 gap-8 p-6 lg:p-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
                Pet &amp; Kid-Friendly Disinfection
              </h3>
              <p className="text-sm text-gray-700 mb-4">
                Keep your family safe and healthy with our pet and kid-friendly disinfection service. We use hospital-grade disinfectants proven to eliminate 99.9% of germs and bacteria, while remaining safe for your furry friends and little ones.
              </p>
              <p className="text-sm font-semibold text-gray-900 mb-2">
                Our comprehensive disinfection service includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>
                  <span className="font-semibold">High-Touch Surface Focus:</span> We target areas frequently touched by hands, like doorknobs, light switches, countertops, and toys.
                </li>
                <li>
                  <span className="font-semibold">Targeted Aerosol Disinfection &amp; Sanitization:</span> We utilize a pet-safe, broad-spectrum aerosol treatment to effectively sanitize surfaces and eliminate airborne bacteria and viruses.
                </li>
                <li>
                  <span className="font-semibold">Safe for All Surface:</span> Our disinfectants are effective yet gentle, ensuring the safety of your children&apos;s toys, pet beds, and everyday household items.
                </li>
                <li>
                  <span className="font-semibold">Transparent Communication:</span> We&apos;ll discuss the disinfection process with you beforehand and answer any questions you may have.
                </li>
              </ul>
              <p className="text-sm text-gray-700 mt-4">
                <span className="font-semibold">Breathe Easy with a Clean Home:</span> Experience the peace of mind that comes with a sanitized environment. Our pet and kid-friendly disinfection service keeps your family safe and healthy, allowing you to focus on what matters most.
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-xl overflow-hidden">
                <Image
                  src="/assets/da-14.jpg"
                  alt="Pet and kid-friendly disinfection"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="px-6 lg:px-8 pb-6 lg:pb-8">
            <div className="rounded-xl border bg-gray-50 p-5 lg:p-6">
              <p className="font-semibold tracking-wide text-gray-900 mb-4">BENEFITS</p>
              <ul className="grid sm:grid-cols-2 gap-3 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-white border text-gray-700 text-[12px]">
                    ✓
                  </span>
                  <span>Providing a safe and clean environment for everyone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-white border text-gray-700 text-[12px]">
                    ✓
                  </span>
                  <span>Services by our specialized team of professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-white border text-gray-700 text-[12px]">
                    ✓
                  </span>
                  <span>Scientifically tested to eliminate 99.99% of germs and bacteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-white border text-gray-700 text-[12px]">
                    ✓
                  </span>
                  <span>Reduces allergens</span>
                </li>
                <li className="flex items-start gap-2 sm:col-span-2">
                  <span className="mt-[2px] inline-flex h-5 w-5 items-center justify-center rounded-full bg-white border text-gray-700 text-[12px]">
                    ✓
                  </span>
                  <span>Kids and pet friendly</span>
                </li>
              </ul>
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
                <div>
                  <p className="font-semibold tracking-wide">CLEANING SUPPLIES PROVIDED</p>
                  <p>Professional graded cleaning supplies provided.</p>
                </div>
              </div>
            </div>


            <div className="flex-1">
  <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full">
    
    {/* Header */}
    <div className="bg-[#d7b8a0] text-white text-center py-3 font-semibold tracking-wide">
      PRICING
    </div>

    {/* Table Header */}
    <div className="grid grid-cols-2 text-xs sm:text-sm font-semibold text-gray-700 border-b">
      <div className="py-4 flex items-center justify-center gap-2 border-r">
        <span className="material-symbols-outlined text-[20px]">fullscreen</span>
        <span>SIZE</span>
      </div>
      <div className="py-4 flex items-center justify-center gap-2">
        <span className="material-symbols-outlined text-[20px]">attach_money</span>
        <span>PRICE</span>
      </div>
    </div>

    {/* Table Content */}
    <div className="grid grid-cols-2 text-sm text-gray-700">
      
      {/* Left Column */}
      <div className="flex items-center justify-center py-10 border-r bg-gray-50">
        <p className="font-medium">Minimum 430 Sqft</p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center justify-center py-10 px-6 text-center space-y-3">
        <p className="font-semibold">$0.35/Sqft. Price starts from $150</p>
        <p className="text-gray-600">
          WhatsApp or drop us a message on{" "}
          <span className="font-medium">Instagram</span> for a quote
        </p>
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
