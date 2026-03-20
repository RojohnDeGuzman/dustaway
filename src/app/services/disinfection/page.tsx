"use client";

import Image from "next/image";
import LocalAssetIcon from "@/components/LocalAssetIcon";
import PageReveal from "@/components/PageReveal";



export default function DisinfectionPage() {


  return (
    <PageReveal className="w-full bg-[var(--bg-cream)] py-5 lg:py-10 services-info-glow">
      <div className="w-[96%] mx-auto px-3 sm:px-4 lg:px-6 rounded-none lg:rounded-xl flex flex-col gap-5 mt-10">
        <div className="w-full">
          <div className="mb-6 text-center max-w-3xl mx-auto">
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--text-dark)]">
              Disinfection
            </h2>
            <p className="text-sm text-[var(--text-body)] mt-3 font-medium">
              Our NEA-certified disinfection service is designed to protect you
              and your family members from harmful viruses and bacteria. Our
              specialized disinfectant and equipment are 100% safe for children
              and pets.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 max-w-[1280px] mx-auto">
            <div className="relative rounded-[1.75rem] border border-pastel-green-200/40 bg-white/85 shadow-sm overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/da-9.jpg"
                  alt="Disinfection service"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="relative rounded-[1.75rem] border border-pastel-pink-200/40 bg-white/85 shadow-sm overflow-hidden">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src="/assets/da-14.jpg"
                  alt="Pet and kid-friendly disinfection"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-br from-pastel-green-lighter/55 via-white to-pastel-pink-lighter/55 rounded-[1.75rem] shadow-sm overflow-hidden mt-4 border border-pastel-green-200/50">
          <div className="grid lg:grid-cols-[1.35fr_0.95fr] gap-8 lg:gap-10 p-6 lg:p-8 items-start">
            <div className="max-w-none text-center">
              <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--text-dark)] mb-3">
                Pet &amp; Kid-Friendly Disinfection
              </h3>
              <p className="text-sm text-[var(--text-body)] mb-4 font-medium">
                Keep your family safe and healthy with our pet and kid-friendly disinfection service. We use hospital-grade disinfectants proven to eliminate 99.9% of germs and bacteria, while remaining safe for your furry friends and little ones.
              </p>
              <p className="text-sm font-semibold text-[var(--text-dark)] mb-2">
                Our comprehensive disinfection service includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-start text-sm text-[var(--text-body)] font-medium">
                <li>
                  <span className="font-extrabold">High-Touch Surface Focus:</span> 
                  We target areas frequently touched by hands, like doorknobs, light switches, countertops, and toys.
                </li>
                <li>
                  <span className="font-extrabold">Targeted Aerosol Disinfection &amp; Sanitization:</span> We utilize a pet-safe, broad-spectrum aerosol treatment to effectively sanitize surfaces and eliminate airborne bacteria and viruses.
                </li>
                <li>
                  <span className="font-extrabold">Safe for All Surface:</span> Our disinfectants are effective yet gentle, ensuring the safety of your children&apos;s toys, pet beds, and everyday household items.
                </li>
                <li>
                  <span className="font-extrabold">Transparent Communication:</span> We&apos;ll discuss the disinfection process with you beforehand and answer any questions you may have.
                </li>
              </ul>
              <p className="text-sm text-[var(--text-body)] mt-4 font-medium">
                <span className="font-extrabold">Breathe Easy with a Clean Home:</span> Experience the peace of mind that comes with a sanitized environment. Our pet and kid-friendly disinfection service keeps your family safe and healthy, allowing you to focus on what matters most.
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-pastel-pink-200/50 bg-pastel-pink-lighter/45 p-5 lg:p-6">
              <p className="font-semibold tracking-wide text-[var(--text-dark)] mb-4 text-center">BENEFITS</p>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-3 text-sm text-[var(--text-body)] font-medium">
                <li className="flex items-start gap-2">
                  <Image
                    src="/assets/eco-friendly.png"
                    alt=""
                    width={20}
                    height={20}
                    className="mt-[2px] h-5 w-5 flex-shrink-0 object-contain"
                  />
                  <span>Providing a safe and clean environment for everyone</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/assets/eco-friendly.png"
                    alt=""
                    width={20}
                    height={20}
                    className="mt-[2px] h-5 w-5 flex-shrink-0 object-contain"
                  />
                  <span>Services by our specialized team of professionals</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/assets/eco-friendly.png"
                    alt=""
                    width={20}
                    height={20}
                    className="mt-[2px] h-5 w-5 flex-shrink-0 object-contain"
                  />
                  <span>Scientifically tested to eliminate 99.99% of germs and bacteria</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/assets/eco-friendly.png"
                    alt=""
                    width={20}
                    height={20}
                    className="mt-[2px] h-5 w-5 flex-shrink-0 object-contain"
                  />
                  <span>Reduces allergens</span>
                </li>
                <li className="flex items-start gap-2">
                  <Image
                    src="/assets/eco-friendly.png"
                    alt=""
                    width={20}
                    height={20}
                    className="mt-[2px] h-5 w-5 flex-shrink-0 object-contain"
                  />
                  <span>Kids and pet friendly</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full bg-gradient-to-r from-pastel-pink-lighter via-white to-pastel-green-lighter py-10 rounded-[1.75rem] soft-divider">
          <div className="flex flex-col md:flex-row items-stretch gap-10 px-4 lg:px-8">
            <div className="flex-1 flex flex-col justify-center items-center text-center">
              <div className="mb-4">
                <p className="text-4xl font-semibold text-[var(--text-dark)]">4.9</p>
                <p className="text-yellow-500 text-xl mt-1">★★★★★</p>
              </div>
              <div className="space-y-4 text-sm text-[var(--text-body)] max-w-md mx-auto font-medium">
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


            <div className="flex-1 self-start">
  <div className="bg-white/95 rounded-xl shadow-sm overflow-hidden border border-pastel-green-200/40">
    
    {/* Header */}
    <div className="bg-[var(--pastel-green-strong)] text-white text-center py-3 font-semibold tracking-wide">
      PRICING
    </div>

    {/* Table Header */}
    <div className="grid grid-cols-2 text-xs sm:text-sm font-semibold text-[var(--text-body)] border-b border-pastel-green-200/40">
      <div className="py-4 flex items-center justify-center gap-2 border-r border-pastel-green-200/40">
        <LocalAssetIcon src="/assets/fullscreen.png" />
        <span>SIZE</span>
      </div>
      <div className="py-4 flex items-center justify-center gap-2">
        <LocalAssetIcon src="/assets/cash.png" />
        <span>PRICE</span>
      </div>
    </div>

    {/* Table Content */}
    <div className="grid grid-cols-2 text-sm text-[var(--text-body)]">
      
      {/* Left Column */}
      <div className="flex items-center justify-center py-10 border-r border-pastel-green-200/40 bg-pastel-green-lighter/35">
        <p className="font-medium">Minimum 430 Sqft</p>
      </div>

      {/* Right Column */}
      <div className="flex flex-col items-center justify-center py-10 px-6 text-center space-y-3">
        <p className="font-semibold">$0.35/Sqft. Price starts from $150</p>
        <p className="text-[var(--text-muted)]">
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
    </PageReveal>
  );
}
