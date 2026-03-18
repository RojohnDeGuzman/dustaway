"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";



export default function VinylCleaningPage() {


  return (
    <div className="w-full bg-gray-100 py-5 lg:py-10">
      <div className="w-[96%] mx-auto px-3 sm:px-4 lg:px-6 rounded-none lg:rounded-xl flex flex-col gap-5 mt-10">
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          <div className="relative w-full lg:w-[35%] aspect-[4/5] lg:aspect-auto lg:min-h-auto flex-shrink-0">
            <Image
              src="/assets/da-10.png"
              alt="Cleaning"
              fill
              className="object-cover object-top rounded-xl"
            />
          </div>

          <div className="flex-1">
            <div className="mb-4">
              <h2 className="text-4xl md:text-5xl font-semibold text-gray-900">
                Vinyl Cleaning
              </h2>
              <p className="text-sm text-gray-600 mt-1 mb-4">
              Breathe new life into your vinyl floors! Our cleaning service tackles dirt, grime, and minor scuffs, restoring a brilliant shine. We use gentle methods safe for all vinyl types. Enjoy long-lasting beauty and get expert maintenance tips – all in one service.              </p>
            </div>
          </div>
        </div>

        <div className="w-full bg-white rounded-xl shadow-sm overflow-hidden flex flex-col lg:flex-row mt-4 lg:h-[460px]">
          <div className="flex-1 p-6 lg:p-8 flex flex-col h-full">
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Professional Vinyl Cleaning
            </h3>
            <p className="text-sm text-gray-700 mb-4">
              Maintain the beauty of your vinyl floors with our professional cleaning service. Our technicians use gentle yet effective methods to remove dirt, grime, and restore a brilliant shine.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700 mb-4">
              <li>
                <span className="font-semibold">Deep Cleanse:</span> We remove built-up dirt and debris, leaving your floors sparkling clean.
              </li>
              <li>
                <span className="font-semibold">Scuff Removal:</span> We tackle minor scuff marks and surface scratches, revitalizing the appearance of your vinyl.
              </li>
              <li>
                <span className="font-semibold">Shine Revival:</span> We use specialized solutions that restore the natural luster of your vinyl without a greasy finish.
              </li>
              <li>
                <span className="font-semibold">Maintenance Tips:</span> We provide helpful guidance to maintain the beauty and longevity of your vinyl floors.
              </li>
            </ul>
            <p className="text-sm text-gray-700">
              Enjoy long-lasting beauty and protect your flooring investment with regular professional cleaning that keeps your vinyl floors looking their best.
            </p>
          </div>
          <div className="relative w-full lg:w-[40%] h-[320px] lg:h-full">
            <Image
              src="/assets/da-8.jpg"
              alt="Professional vinyl floor cleaning"
              fill
              className="object-cover object-center"
            />
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
                <div className="bg-[#d7b8a0] text-white text-center py-3 font-semibold tracking-wide">
                  PRICING
                </div>
                <div className="grid grid-cols-2 text-xs sm:text-sm font-semibold text-gray-700 border-b">
                  <div className="py-3 pl-5 border-r flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px] leading-none">fullscreen</span>
                    <span>ROOM</span>
                  </div>
                  <div className="py-3 pl-5 flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined text-[20px] leading-none">attach_money</span>
                    <span>PRICE</span>
                  </div>
                </div>
                <div className="divide-y text-xs sm:text-sm">
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r flex items-center">
                      <span>Bedroom</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">$135 Each</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r flex items-center">
                      <span>Living Room + Hallway</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">$165</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r flex items-center">
                      <span>1 Living Room + 1 Bedroom</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">$300</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r flex items-center">
                      <span>1 Living Room + 2 Bedroom</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">$440</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r flex items-center">
                      <span>1 Living Room + 3 Bedroom</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">$580</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r flex items-center">
                      <span>Add-on Kitchen (w/ Service Yard)</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">+ $90</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="py-4 pl-5 border-r flex items-center">
                      <span>Add-on Toilet</span>
                    </div>
                    <div className="py-4 pl-5 text-center">
                      <p className="font-semibold">+ $70 Each</p>
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
