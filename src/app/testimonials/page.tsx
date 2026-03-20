'use client';
 
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
 
// Define the structure for our data
interface Testimonial {
  name: string;
  quote: string;
  rating: number;
  date: string;
  image: string;
  source: 'google' | 'facebook' | 'instagram' | 'tiktok';
}
 
const testimonials: Testimonial[] = [
  {
    name: "Azri Jaafar",
    quote: "The team was professional, efficient, and meticulous in their work. Thank you so much 🙏🏻",
    rating: 5, date: "2024-09-24",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
    source: "google"
  },
  {
    name: "B Dev Rai",
    quote: "Very nicely, efficiently and swiftly done. The house has become a home finally, thanks to you guys. Really professional. Very friendly staff and very helpful. Thankyou so much. Really appreciate. Strongly recommend Dustaway for all your post reno and even normal cleaning of your homes.",
    rating: 5, date: "2024-09-12",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
    source: "facebook"
  },
  {
    name: "Winnie Lie",
    quote: "Great cleaning services!",
    rating: 5, date: "2024-05-18",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100",
    source: "instagram"
  },
  {
    name: "Joel Fu",
    quote: "As a family in Singapore, we've had a fantastic experience with Dust Away. Their team is always punctual, friendly, and incredibly thorough. It's such a relief to come home to a spotless house after a long day.",
    rating: 5, date: "2024-07-01",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100",
    source: "tiktok"
  }
];
 
export default function TestimonialPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showReadMore, setShowReadMore] = useState<boolean[]>(new Array(testimonials.length).fill(false));
  const quoteRefs = useRef<(HTMLParagraphElement | null)[]>([]);
 
  // Check for text overflow to show "Read More" button
  useEffect(() => {
    const overflowStatus = testimonials.map((_, i) => {
      const el = quoteRefs.current[i];
      if (el) {
        return el.scrollHeight > el.offsetHeight;
      }
      return false;
    });
    setShowReadMore(overflowStatus);
  }, []);
 
  const nextSlide = () => {
    setExpandedIndex(null); // Auto-collapse on move
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };
 
  const prevSlide = () => {
    setExpandedIndex(null); // Auto-collapse on move
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
 
  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
 
  return (
<div className="min-h-screen bg-[#fefcfb] flex items-center justify-center p-6 text-[#3d3935]">
<main className="max-w-2xl mx-auto w-full">
<div className="text-center mb-8">
<h2 className="text-2xl md:text-3xl font-bold text-[#1c1917] mb-2">What Our Customers Say</h2>
<div className="w-24 h-1 bg-indigo-500 mx-auto rounded-full"></div>
</div>
 
        <div className="relative group">
          {/* Carousel Window */}
<div className="overflow-hidden rounded-2xl shadow-xl bg-white border border-gray-100">
<div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
>
              {testimonials.map((t, i) => (
<div key={i} className="w-full flex-shrink-0 px-8 py-10">
<div className="flex items-center mb-6">
<Image
  src={t.image}
  alt={t.name}
  width={40}
  height={40}
  className="w-10 h-10 rounded-full object-cover grayscale"
/>
<div className="ml-4">
<h3 className="font-bold text-gray-800 text-sm">{t.name}</h3>
<div className="flex items-center gap-2">
<div className="text-yellow-400 text-lg">{'★'.repeat(t.rating)}</div>
<span className="text-sm text-gray-400 capitalize flex items-center gap-1">
                           {t.source}
</span>
</div>
</div>
</div>
 
                  <div className="min-h-[60px] relative transition-all duration-300">
<p 
                      ref={(el) => { quoteRefs.current[i] = el; }}
                      className={`text-[#3d3935] italic text-lg leading-relaxed transition-all duration-300 ${
                        expandedIndex === i ? '' : 'line-clamp-2'
                      }`}
>
                      <span aria-hidden>&ldquo;</span>
                      {t.quote}
                      <span aria-hidden>&rdquo;</span>
</p>
                    {showReadMore[i] && (
<button 
                        onClick={() => toggleExpand(i)}
                        className="text-indigo-600 font-bold text-xs mt-2 uppercase tracking-tight hover:underline"
>
                        {expandedIndex === i ? 'Show Less' : 'Read More'}
</button>
                    )}
</div>
 
                  <div className="mt-6 text-gray-400 text-xs font-bold tracking-widest uppercase">{t.date}</div>
</div>
              ))}
</div>
</div>
 
          {/* Navigation Buttons */}
<button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 bg-white rounded-full p-3 shadow-md hover:bg-gray-50 transition-all hidden md:block"
>
<i className="fas fa-chevron-left text-gray-400"></i>
</button>
<button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 bg-white rounded-full p-3 shadow-md hover:bg-gray-50 transition-all hidden md:block"
>
<i className="fas fa-chevron-right text-gray-400"></i>
</button>
</div>
 
        {/* Dots */}
<div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
<button
              key={i}
              onClick={() => { setExpandedIndex(null); setCurrentIndex(i); }}
              className={`h-2 rounded-full transition-all ${
                currentIndex === i ? 'w-6 bg-indigo-500' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
</div>
</main>
</div>
  );
}
