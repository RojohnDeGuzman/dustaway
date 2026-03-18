"use client";

import Image from "next/image";

const upholsteryDropdowns = [
  {
    title: "Carpet",
    defaultOpen: true,
    rows: [
      { label: "Small ( <44 sqft)", price: "$80" },
      { label: "Medium (44 - 97 sqft)", price: "$120" },
      { label: "Large (97 - 172 sqft)", price: "$160" },
    ],
  },
  {
    title: "Mattress",
    rows: [
      { label: "Baby Cot", price: "$80" },
      { label: "Single", price: "$80" },
      { label: "Queen", price: "$100" },
      { label: "King", price: "$120" },
      { label: "Bed Frame", price: "$70" },
    ],
  },
  {
    title: "Fabric Sofa",
    rows: [
      { label: "Single Seater", price: "$80" },
      { label: "2 Seater", price: "$120" },
      { label: "3 Seater", price: "$150" },
      { label: "4 Seater", price: "$190" },
      { label: "Ottoman", price: "$30" },
    ],
  },
  {
    title: "Leather Sofa",
    rows: [
      { label: "Single Seater", price: "$100" },
      { label: "2 Seater", price: "$140" },
      { label: "3 Seater", price: "$170" },
      { label: "4 Seater", price: "$210" },
      { label: "Ottoman", price: "$50" },
    ],
  },
  {
    title: "Other Upholstery",
    rows: [
      { label: "Dining Chair", price: "$30" },
      { label: "Gaming/Office Chair", price: "$60" },
      { label: "Curtain <= 2.5m", price: "$25" },
      { label: "Curtain > 2.5m", price: "$50" },
      { label: "Baby Stroller", price: "$80" },
      { label: "Baby Car Seat", price: "$80" },
    ],
  },
] as const;

export default function VinylCleaningPage() {
  return (
    <div className="w-full bg-[var(--bg-cream)] py-6 lg:py-10">
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
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-[var(--text-dark)]">
                Upholstery Cleaning
              </h2>
              <p className="text-sm text-[var(--text-body)] mt-1 mb-4 font-medium">
                Our upholstery deep clean service can clean the toughest stains
                but gentle enough not to damage your furniture, giving everyone
                a clean, safe and sanitized environment.
              </p>
            </div>
          </div>
        </div>

        {/* PROFESSIONAL UPHOLSTERY CLEANING */}
        <div className="w-full bg-white/90 rounded-[1.75rem] border border-pastel-green-200/50 shadow-sm overflow-hidden flex flex-col lg:flex-row mt-6 lg:h-[460px]">
          <div className="flex-1 p-6 lg:p-10 flex flex-col justify-center">
            <h3 className="font-display text-2xl md:text-3xl font-semibold text-[var(--text-dark)] mb-4">
              Professional Upholstery Cleaning
            </h3>

            <p className="text-sm text-[var(--text-body)] font-medium mb-4">
              Reclaim the comfort and freshness of your furniture with our
              comprehensive upholstery cleaning service. Our expert technicians
              use gentle yet effective methods to remove dirt, allergens, and
              stains from a wide range of materials.
            </p>

            <ul className="space-y-3 text-sm text-[var(--text-body)] font-medium mb-4">
              <li>
                <span className="font-semibold">
                  Sofas (Fabric or Leather):
                </span>
                We remove grime and restore both fabric and leather sofas,
                leaving them sanitized and refreshed. Cushions included.
              </li>
              <li>
                <span className="font-semibold">Cushions & Pillows:</span>
                Eliminates dust mites, allergens, and odors for a cleaner and
                healthier environment.
              </li>
              <li>
                <span className="font-semibold">Soft Toys:</span>
                Gentle cleaning that removes dirt and allergens, making them
                safe for everyday use.
              </li>
              <li>
                <span className="font-semibold">Carpets & Rugs:</span>
                Deep extraction cleaning that removes embedded dirt and restores
                color.
              </li>
              <li>
                <span className="font-semibold">Curtains & Fabrics:</span>
                Refreshes curtains, drapes, and fabric surfaces, leaving them
                dust-free and revitalized.
              </li>
              <li>
                <span className="font-semibold">Tailored Care:</span>
                Every material is treated with the most suitable cleaning method
                for safe and effective results.
              </li>
            </ul>

            <p className="text-sm text-[var(--text-body)] font-medium">
              Enjoy a healthier, more comfortable home. Your furniture will be
              clean, fresh, and ready to be enjoyed for years to come.
            </p>
          </div>

          {/* Image */}
          <div className="relative w-full lg:w-[45%] h-[300px] lg:h-full">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=1200&auto=format&fit=crop"
              alt="Upholstery cleaning"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* OUR PROCESS SECTION */}
        <div className="w-full mt-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-[var(--text-dark)] text-center">
              Our Process
            </h2>

            <div className="grid md:grid-cols-4 gap-6 mt-10">
              {[
                {
                  title: "Step 1",
                  copy: "Our specialists begin with an inspection and assessment of the condition of your item.",
                },
                {
                  title: "Step 2",
                  copy: "Large particles are then removed* from the surface of the item to prevent damaging our equipment.",
                },
                {
                  title: "Step 3",
                  copy: "High heat pressure* steaming will be done to remove bad odour, loosen clogged dirt and further break down any tough stains.",
                },
                {
                  title: "Step 4",
                  copy: "A special high pH level solution will be applied to double down on stains.",
                },
                {
                  title: "Step 5",
                  copy: "Sanitization and deep cleaning will be performed by injecting a specialized solution into the fabric with our heavy-duty carpet/upholstery cleaning machine.",
                },
                {
                  title: "Step 6",
                  copy: "The deep cleaning process is completed as the solution is extracted alongside unwanted particles.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="bg-white/90 rounded-[1.5rem] shadow-sm p-6 text-center border border-pastel-green-200/50"
                >
                  <h3 className="font-display text-lg font-semibold text-[var(--text-dark)] mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--text-body)] leading-relaxed font-medium">
                    {step.copy}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[1.5rem] border border-pastel-pink-200/50 bg-pastel-pink-lighter/40 p-6 text-sm text-[var(--text-body)] font-medium">
              *Removal of large particles and high heat steaming are not
              available for carpets above 100sqft in size. Please keep your
              carpet free from any large particles.
            </div>
          </div>
          <section className="mt-8">
            <div className="w-full bg-gradient-to-r from-[#fbe9e4] to-[#fdf5f1] py-10 rounded-xl">
              <div className="flex flex-col md:flex-row items-stretch gap-10 px-4 lg:px-8">
                <div className="flex-1 flex flex-col justify-center items-center text-center">
                  <div className="mb-4">
                    <p className="text-4xl font-semibold text-gray-900">4.9</p>
                    <p className="text-yellow-500 text-xl mt-1">
                      {"\u2605".repeat(5)}
                    </p>
                  </div>
                  <div className="space-y-4 text-sm text-gray-700 max-w-md mx-auto">
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

                <div className="flex-1">
                  <div className="text-center mb-6">
                    <h2 className="text-4xl font-semibold text-gray-900">
                      PRICING
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {upholsteryDropdowns.map((section) => (
                      <details
                        key={section.title}
                        open={section.defaultOpen}
                        className="group overflow-hidden rounded-xl border border-[#ead8c8] bg-white"
                      >
                        <summary className="list-none cursor-pointer bg-[#fdf3ec] px-5 py-5">
                          <div className="flex items-center justify-between gap-4">
                            <span className="text-xl font-medium text-[var(--text-dark)]">
                              {section.title}
                            </span>
                            <span className="flex items-center justify-center text-[var(--text-dark)] transition-transform duration-300 group-open:rotate-180">
                              <span className="material-symbols-outlined text-[24px] leading-none">
                                expand_more
                              </span>
                            </span>
                          </div>
                        </summary>

                        <div className="p-4 sm:p-5">
                          <div className="bg-white rounded-xl shadow-sm overflow-hidden h-full">
                            <div className="grid grid-cols-2 bg-[#d8b79c] text-white">
                              <div className="py-3 pl-5 border-r border-white/15 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold">
                                <span className="material-symbols-outlined text-[20px] leading-none">
                                  straighten
                                </span>
                                <span>SIZE</span>
                              </div>
                              <div className="py-3 pl-5 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold">
                                <span className="material-symbols-outlined text-[20px] leading-none">
                                  attach_money
                                </span>
                                <span>PRICE</span>
                              </div>
                            </div>

                            <div className="divide-y text-xs sm:text-sm">
                              {section.rows.map((row) => (
                                <div
                                  key={`${section.title}-${row.label}`}
                                  className="grid grid-cols-2"
                                >
                                  <div className="py-4 pl-5 border-r border-[#ece7df] flex items-center justify-center text-center">
                                    <span>{row.label}</span>
                                  </div>
                                  <div className="py-4 pl-5 text-center flex items-center justify-center">
                                    <span className="font-semibold">
                                      {row.price}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
