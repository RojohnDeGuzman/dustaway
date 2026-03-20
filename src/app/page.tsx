"use client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/app/globals.css";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  AnimateIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/AnimateIn";
import ArrowIcon from "@/components/ArrowIcon";
import { HeroImage, CleanHomeImage } from "@/components/HeroImage";
import { serviceLinks } from "@/lib/serviceLinks";

const SERVICES_AUTO_ADVANCE_MS = 3000;

const services = [
  {
    title: "3hr / 4hr Cleaning",
    desc: "Every home is unique oasis. Get a custom cleaning experience with a dedicated professional! Choose between a 3-hour or 4-hour service and let us take care of your cleaning needs!",
    image: "/assets/da-12.jpg",
    href: serviceLinks[0].href,
  },
  {
    title: "Evening cleaning",
    desc: "Ditch the cleaning after work! This 3-hour evening service lets you come home to a spotless haven, perfect for unwinding and recharging.",
    image: "/assets/da-11.jpg",
    href: serviceLinks[1].href,
  },
  {
    title: "Spring Cleaning",
    desc: "Give your home a renewal with an extra set of hands! Our 3 or 4-hour spring cleaning service includes an addition professional crew member, covering more within the same time for a comprehensive clean, leaving your home sparkling from top to bottom.",
    image: "/assets/da-5.jpg",
    href: serviceLinks[2].href,
  },
  {
    title: "Deep cleaning",
    desc: "Our post-renovation / tenancy specialist cleaning service is perfect for those looking for a deep clean for a place that needs to be moved into or returned to its original move-in condition.",
    image: "/assets/da-6.png",
    href: serviceLinks[3].href,
  },
  {
    title: "Upholstery cleaning",
    desc: "Our upholstery deep clean service can clean the toughest stains but gentle enough not to damage your furniture, giving everyone a clean, safe and sanitized environment.",
    image: "/assets/da-7.png",
    href: serviceLinks[4].href,
  },
  {
    title: "Vinyl Cleaning",
    desc: "Breathe new life into your vinyl floors! Our cleaning service tackles dirt, grime, and minor scuffs, restoring a brilliant shine. We use gentle methods safe for all vinyl types. Enjoy long-lasting beauty and get expert maintenance tips - all in one service.",
    image: "/assets/da-8.jpg",
    href: serviceLinks[5].href,
  },
  {
    title: "Disinfection",
    desc: "Our NEA-certified disinfection service is designed to protect you and your family members from harmful viruses and bacteria. Our specialized disinfectant and equipment are 100% safe for children and pets.",
    image: "/assets/da-9.jpg",
    href: serviceLinks[6].href,
  },
];
const trustItems = ["Book in 60 seconds", "Trusted cleaners", "Cancel anytime"];

const testimonials = [
  {
    quote:
      "I recently engaged the cleaning service from Dustaway, and couldn't be happier with the results! The helper was punctual, friendly, and did an amazing job cleaning my home. Every corner was sparkling clean, and she paid attention to details. Will definitely engage them again!",
    name: "TWW",
    rating: 5,
    date: "2024-09-07",
  },
  {
    quote:
      "The session with Dustaway was very good. Aung is very fast and efficient, and does her work very clean too. Highly recommended, and will book her again in future! 👍🏻😊",
    name: "leng xing yu",
    rating: 5,
    date: "2024-07-06",
  },
  {
    quote:
      "As a family in Singapore, we've had a fantastic experience with Dust Away. Their team is always punctual, friendly, and incredibly thorough. It’s such a relief to come home to a spotless house after a long day. The booking process is simple and convenient, and their attention to detail is impressive. We really appreciate how much easier they've made our lives, giving us more time to spend together. Highly recommend Dust Away for anyone in need of reliable and efficient cleaning services!",
    name: "Joel Fu",
    rating: 5,
    date: "2024-07-01",
  },
  {
    quote:
      "For the post Reno cleaning, the crew was very dedicated and thorough. Every single corner of the house was carefully vacuumed and cleaned. I engaged again a few weeks later for general house cleaning and they didn’t disappoint as well. San San was very experienced and knowledgeable in the use of various cleaning machines and products so I had a peace of mind leaving her to take care of the house.",
    name: "Semantha Tan",
    rating: 5,
    date: "2024-06-07",
  },
  {
    quote:
      "We had Hein over for general cleaning and she did a great job during the 3 hours. Will definitely engage them again",
    name: "Casey",
    rating: 5,
    date: "2024-06-03",
  },
  {
    quote: "Great cleaning services!",
    name: "Winnie Lie",
    rating: 5,
    date: "2024-05-18",
  },
];

const whyChoose = [
  {
    title: "Excellent results",
    desc: "Trained, experienced cleaners who take cleanliness to the next level.",
    icon: "/assets/ex.png",
  },
  {
    title: "Satisfaction guaranteed",
    desc: "We guarantee you’ll want to call us back for your next session.",
    icon: "/assets/customer-satisfaction.png",
  },
  {
    title: "Easy booking",
    desc: "Book in seconds online. Reschedule or cancel anytime.",
    icon: "/assets/calendar.png",
  },
  {
    title: "No strings attached",
    desc: "Transparent pricing and no obligation. Book when you need us.",
    icon: "/assets/feedback.png",
  },
  {
    title: "Eco-friendly options",
    desc: "We use organic and environmentally friendly products when you prefer.",
    icon: "/assets/eco-friendly.png",
  },
  {
    title: "Professional team",
    desc: "Skilled, dedicated cleaners who take pride in their work.",
    icon: "/assets/team-lead.png",
  },
];

const faqs = [
  {
    section: "General Cleaning",
    questions: [
      {
        q: "My house is X size, how many hours should I book?",
        a: "We endeavor to clean as much as possible during the allocated time. We recommend a 3 hours session for a 2-3 room apartment and 4 hours for a 4-5 room apartment. However, you may choose to book whichever suits you best.",
      },
      {
        q: "What are the payment options?",
        a: "Paynow is our preferred payment option. We also accept all major debit and credit cards.",
      },
      {
        q: "Why do we need to pay first?",
        a: "We understand that pre-payment might seem inconvenient. As a small, privately-owned business, it helps us ensure we can continue providing high-quality services to all our customers. Your satisfaction is our priority. If you're unhappy with any aspect of our service, please let us know. Your feedback is invaluable in helping us improve.",
      },
      {
        q: "Can I get a trial of your services?",
        a: "We offer a discounted rate for first time users of our service. Please enquire via whatsapp to learn more.",
      },
      {
        q: "Can I cancel or reschedule my sessions?",
        a: "Yes we allow cancellation and rescheduling of sessions. A $20 surcharge will be applied for rescheduling done less than 24 hours before the session.",
      },
      {
        q: "Can I get a refund if I have to cancel the session?",
        a: "A partial refund of 50% will be given if you are cancelling more than 72 hours before the session. We do not offer refund for cancellations less than 72 hours before the session.",
      },
      {
        q: "Do residents need to be home during the general cleaning service?",
        a: "Yes, you are highly encouraged to be present during the cleaning process. We are not liable for any missing items.",
      },
      {
        q: "Are pets allowed to be on premise?",
        a: "Yes, please do inform us prior to your session.",
      },
      {
        q: "Will the helpers have cleaning equipment?",
        a: "For our 3hr and 4hr home cleaning and spring cleaning services, cleaning supplies & equipment are to be provided by you. If you prefer a comprehensive service with professional cleaning equipment provided, please schedule our deep cleaning service.",
      },
      {
        q: "Can you clean ceiling fans and chandeliers?",
        a: "We can clean ceiling fans if an adequate ladder is provided and if the fan does not exceed the height limit of our safety regulations. We do not clean chandeliers.",
      },
    ],
  },
  {
    section: "Deep Clean",
    questions: [
      {
        q: "Will cleaning equipment be provided?",
        a: "Yes, for deep clean sessions, ALL cleaning equipment will be provided.",
      },
      {
        q: "How long does cleaning take?",
        a: "3-4 hours depending on the size of your house.",
      },
      {
        q: "Is there chemical wash?",
        a: "No. Chemical wash is required to be performed by your ID.",
      },
      {
        q: "What if some areas of my house are not fully renovated yet?",
        a: "Please make sure that there will be no ongoing construction works on the day of service.",
      },
      {
        q: "Can I cancel/reschedule before the appointment date?",
        a: "Cancellation are to be done at least 1 week before the appointment date. Any cancellation less than 1 week will incur a penalty fee of $150. If you would like to reschedule your appointment, please do it at least 3 days before appointment.",
      },
    ],
  },
  {
    section: "Upholstery",
    questions: [
      {
        q: "Why is there a need to wait 6-8 hours for the mattress to dry?",
        a: "Disinfection solutions are injected into the mattress to extract any impurities and dirt, penetrating the surface into the material. This is a tedious process and takes up to 8 hours for the mattress to dry and be fully sanitized and disinfected.",
      },
      {
        q: "Will the mattress be hot and dry after the cleaning process?",
        a: "No. If the mattress feels dry immediately after cleaning, it means that deep cleaning was not carried out. This would mean that the mattress was only cleaned on the surface, and would not be considered sanitised or disinfected.",
      },
      {
        q: "Is the upholstery deep cleaning process more suitable for old mattresses?",
        a: "Upholstery deep cleaning is suitable for both old and new mattresses. However, some stains on old mattresses will be harder to remove and may have permanently set into the material. It is recommended to sanitise and disinfect your mattresses regardless of their age if they are used regularly.",
      },
      {
        q: "Will upholstery deep cleaning affect a new mattress?",
        a: "No, our upholstery deep cleaning process is effective yet delicate and gentle. The cleaning process helps sterilise, disinfect and clean the mattress to avoid any stubborn stain or odour that can potentially be permanent.",
      },
      {
        q: "Will the mattresses be fully soaked during the cleansing process?",
        a: "No. Our cleaning process penetrates about 10cm deep into the material to remove any stain, smell or bacteria that may remain.",
      },
      {
        q: "Does the cleaning process include the drying of the cleaning services?",
        a: "No, our cleaning solution requires natural drying for sanitization and disinfection to take place. Please wait 6-8 hours for the mattress to dry. That’s why we will suggest having the upholstery session in the morning.",
      },
      {
        q: "Do you do bamboo mattress cleaning?",
        a: "It’s not advisable to do as it will soften the firmness of the mattress and might not remove harder stains.",
      },
    ],
  },
  {
    section: "Disinfection",
    questions: [
      {
        q: "What is the scope of your disinfection?",
        a: "We will wipe down all high touch areas such as cabinets and door handles and do misting to help with the removal of virus and bacteria.",
      },
      {
        q: "Are your chemicals safe?",
        a: "Yes, the chemicals we use are NEA approved and friendly for kids and pets!",
      },
      {
        q: "Are we allowed to stay in the house during the disinfection process?",
        a: "You are advised to stay outside the house as the chemicals might irritate the throat.",
      },
    ],
  },
  {
    section: "Vinyl Floor Cleaning",
    questions: [
      {
        q: "How much does the vinyl floor cleaning service cost?",
        a: "Depending on the unit sizes/number of rooms our price starts from $300 onwards.",
      },
      {
        q: "How long is the duration for the session?",
        a: "Depending on the size of the surface area, it can take up to 2.5 to 5 hrs. As a gauge, vinyl cleaning for 3 bedrooms and 1 living room will take about 4hrs.",
      },
      {
        q: "How often should I have my vinyl floors professionally cleaned?",
        a: "The frequency of professional cleaning for vinyl floors depends on factors such as foot traffic, pets, and the level of soiling. Commercial premises will usually require deep cleaning every 1-2 years. For Homes, about once every 3-5 years will be good to maintain it.",
      },
      {
        q: "How to care for a vinyl floor after professional cleaning has been completed?",
        a: "Try not to use floor detergents that are too harsh when mopping regularly because it might “stripped off” the protective coating layer faster. Neutral cleaning agents are recommended.",
      },
      {
        q: "Can professional vinyl floor cleaning remove scratches and scuffs?",
        a: "Professional cleaning can improve the appearance of minor scratches and scuffs on vinyl floors. However, deeper scratches or damage may require additional repair or restoration services.",
      },
      {
        q: "If my vinyl flooring has defects can we still engage the cleaning?",
        a: "Yes you can. Our specialist will inspect and evaluate for any defects before commencing the job and will advise cx accordingly on the steps they will take. In fact some scratches will look less visible after the Cleaning.",
      },
      {
        q: "Will you be able to reach beneath my furniture?",
        a: "We will shift all movable furniture for cleaning. Do take note that furniture that are too heavy/bulky will not be moved. (e.g. Storage bed/Wardrobes/TV cabinets, that are filled with items)",
      },
      {
        q: "After cleaning & sealing, is it safe for kids/pets?",
        a: "Yes it is absolutely safe once the full process is completed. There will be better friction in fact.",
      },
      {
        q: "Can I clean my vinyl floors myself instead of hiring a professional service?",
        a: "While regular maintenance and light cleaning of vinyl floors can be done by homeowners, professional cleaning offers a deeper level of cleaning and can address more stubborn stains and buildup. We have the expertise, specialized equipment, and cleaning solutions to achieve optimal results without causing damage to the floors.",
      },
    ],
  },
];

export default function Home() {
  const [servicesIndex, setServicesIndex] = useState(0);
  const [visibleServicesCount, setVisibleServicesCount] = useState(3);
  const [activeTestimonial, setActiveTestimonial] = useState<
    null | (typeof testimonials)[number]
  >(null);
  const [contactName, setContactName] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [contactStatus, setContactStatus] = useState("");

  const maxServicesIndex = Math.max(0, services.length - visibleServicesCount);

  useEffect(() => {
    function updateVisibleServicesCount() {
      if (window.innerWidth < 640) {
        setVisibleServicesCount(1);
        return;
      }
      if (window.innerWidth < 1024) {
        setVisibleServicesCount(2);
        return;
      }
      setVisibleServicesCount(3);
    }

    updateVisibleServicesCount();
    window.addEventListener("resize", updateVisibleServicesCount);
    return () =>
      window.removeEventListener("resize", updateVisibleServicesCount);
  }, []);

  useEffect(() => {
    setServicesIndex((current) => Math.min(current, maxServicesIndex));
  }, [maxServicesIndex]);

  const goToNext = useCallback(() => {
    setServicesIndex((i) => (i >= maxServicesIndex ? 0 : i + 1));
  }, [maxServicesIndex]);

  const goToPrev = useCallback(() => {
    setServicesIndex((i) => (i <= 0 ? maxServicesIndex : i - 1));
  }, [maxServicesIndex]);

  useEffect(() => {
    const t = setInterval(goToNext, SERVICES_AUTO_ADVANCE_MS);
    return () => clearInterval(t);
  }, [goToNext]);

  const [testimonialsRef, testimonialsApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    dragFree: false,
  });

  const scrollTestimonialsPrev = () =>
    testimonialsApi && testimonialsApi.scrollPrev();
  const scrollTestimonialsNext = () =>
    testimonialsApi && testimonialsApi.scrollNext();

  useEffect(() => {
    if (!testimonialsApi) return;
    const intervalId = setInterval(() => {
      if (!testimonialsApi) return;
      testimonialsApi.scrollNext();
    }, 3000);
    return () => clearInterval(intervalId);
  }, [testimonialsApi]);

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setContactStatus(
      "You're query have been submitted! We'll get back to you soon.",
    );
  }

  return (
    <>
      {/* Hero — MCSC-style: headline + trusted line + CTAs */}
      <section className="relative min-h-[84vh] sm:min-h-[89vh] lg:min-h-[91vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-mesh" />
        {/* Blurs positioned to frame the image area on the right */}
        <div className="absolute top-1/2 right-0 w-[28rem] h-[28rem] -translate-y-1/2 rounded-full bg-pastel-pink-soft/40 blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-0 w-80 h-80 rounded-full bg-pastel-green-soft/45 blur-3xl animate-float-slow" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full bg-pastel-pink-lighter/35 blur-3xl animate-float-delay -translate-y-1/2" />

        <div className="section-container relative w-full flex flex-col lg:flex-row items-center gap-10 sm:gap-14 lg:gap-20 py-12 sm:py-20 lg:py-24">
          <div className="flex-1 max-w-xl order-1 text-center lg:text-left">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-4"
            >
              Modern cleaning
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.25rem] font-semibold text-[var(--text-dark)] tracking-tight leading-[1.1]"
            >
              A clean home without the dirty work
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-4 text-lg text-[var(--text-body)] max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium"
            >
              But who wants to actually do all the cleaning? With Dustaway, you
              can now kick back, relax and let us take care of the cleaning!
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/services"
                className="btn-secondary focus-ring inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-pastel-pink-soft text-[var(--text-dark)] font-medium hover:bg-pastel-pink-lighter/50 btn-press"
              >
                View services
              </Link>
              <Link
                href="/booking"
                className="btn-primary focus-ring inline-flex items-center justify-center px-8 py-4 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-medium hover:bg-pastel-green-200"
              >
                Book a cleaning
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-10 pt-7 soft-divider-top flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-medium text-[var(--text-body)]"
            >
              {trustItems.map((item, i) => (
                <span key={item} className="flex items-center gap-2">
                  {i > 0 && <span className="text-pastel-pink-200">·</span>}
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
          <div className="flex-1 w-full max-w-[480px] lg:max-w-none flex items-center justify-center order-2">
            <HeroImage />
          </div>
        </div>
      </section>

      {/* Our Professional Cleaning Services — automatic carousel */}
      <section
        id="services"
        className="py-[var(--section-padding)] bg-pastel-green-lighter/25"
        aria-label="Our professional cleaning services carousel"
      >
        <div className="section-container">
          <AnimateIn className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
              What we offer
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)]">
              Our professional cleaning services
            </h2>
            <p className="mt-4 text-[var(--text-body)] font-medium">
              Choose between our general home cleaning and specialized cleaning
              such as deep cleaning, upholstery cleaning, vinyl cleaning and
              disinfection services!
            </p>
          </AnimateIn>

          <div className="mt-14 relative">
            {/* Prev/Next */}
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous services"
              className="hidden sm:flex items-center justify-center absolute -left-10 lg:-left-12 top-1/2 -translate-y-1/2 w-10 h-10 text-gray-700 hover:text-gray-900 focus-ring z-10"
            >
              <ArrowIcon direction="back" size={22} />
            </button>
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next services"
              className="hidden sm:flex items-center justify-center absolute -right-10 lg:-right-12 top-1/2 -translate-y-1/2 w-10 h-10 text-gray-700 hover:text-gray-900 focus-ring z-10"
            >
              <ArrowIcon direction="forward" size={22} />
            </button>

            {/* Viewport (clipped), arrows live outside */}
            <div className="overflow-hidden">
              <motion.div
                className="flex"
                animate={{
                  x: `-${servicesIndex * (100 / visibleServicesCount)}%`,
                }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                {services.map((s) => (
                  <div
                    key={s.title}
                    className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3"
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="card-hover p-4 rounded-xl bg-white/95 border border-pastel-green-200/50 shadow-sm h-full flex flex-col text-center sm:text-left"
                    >
                      <Link
                        href={s.href}
                        className="block rounded-lg focus-ring"
                      >
                        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                          <Image
                            src={s.image}
                            alt={`${s.title} image`}
                            fill
                            sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                            className="object-cover"
                          />
                        </div>
                      </Link>
                      <h3 className="mt-3 font-display text-base font-semibold text-[var(--text-dark)]">
                        {s.title}
                      </h3>
                      <p className="mt-1.5 text-[var(--text-body)] text-xs font-medium line-clamp-3 flex-1">
                        {s.desc}
                      </p>
                      <Link
                        href={s.href}
                        className="mt-3 inline-flex items-center gap-1 text-[var(--accent-green)] font-semibold text-sm hover:gap-2 transition-all focus-ring justify-center sm:justify-start"
                      >
                        Read more
                        <span aria-hidden>→</span>
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Dots — one per slide position (slide one by one, 3 visible) */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: maxServicesIndex + 1 }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setServicesIndex(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-ring ${
                    i === servicesIndex
                      ? "w-8 bg-pastel-green-soft"
                      : "w-2.5 bg-pastel-green-200/60 hover:bg-pastel-green-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Dustaway? — MCSC-style benefit cards */}
      <section className="py-[var(--section-padding)] bg-white">
        <div className="section-container">
          <AnimateIn className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
              Why choose us
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)]">
              Why choose Dustaway?
            </h2>
          </AnimateIn>
          <StaggerChildren
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            delay={0.08}
          >
            {whyChoose.map((w) => (
              <StaggerItem key={w.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-pastel-green-lighter/40 border border-pastel-green-200/50 flex flex-col sm:flex-row gap-4 text-center sm:text-left items-center sm:items-start"
                >
                  <span className="flex-shrink-0 w-16 h-16 rounded-full bg-pastel-pink-soft flex items-center justify-center text-[var(--text-dark)] font-bold">
                    <Image
                      src={w.icon}
                      alt={w.title}
                      width={46}
                      height={46}
                      className="object-contain"
                    />
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display font-semibold text-[var(--text-dark)]">
                      {w.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--text-body)] font-medium">
                      {w.desc}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Testimonials strip — MCSC-style top testimonials */}
      <section
        id="testimonials"
        className="py-12 bg-pastel-pink-lighter/55 soft-divider"
      >
        <div className="section-container">
          <AnimateIn className="text-center mb-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              Testimonials
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-dark)] mt-2">
              What our customers say
            </h2>
          </AnimateIn>

          <div className="relative">
            {/* Arrows */}
            <button
              type="button"
              onClick={scrollTestimonialsPrev}
              aria-label="Previous testimonials"
              className="hidden sm:flex items-center justify-center absolute -left-12 lg:-left-14 top-1/2 -translate-y-1/2 w-10 h-10 text-gray-700 hover:text-gray-900 focus-ring z-10"
            >
              <ArrowIcon direction="back" size={22} />
            </button>
            <button
              type="button"
              onClick={scrollTestimonialsNext}
              aria-label="Next testimonials"
              className="hidden sm:flex items-center justify-center absolute -right-12 lg:-right-14 top-1/2 -translate-y-1/2 w-10 h-10 text-gray-700 hover:text-gray-900 focus-ring z-10"
            >
              <ArrowIcon direction="forward" size={22} />
            </button>

            {/* Carousel */}
            <div className="overflow-hidden" ref={testimonialsRef}>
              <div className="flex -mx-3">
                {testimonials.map((t) => (
                  <div
                    key={`${t.name}-${t.date}`}
                    className="px-3 flex-[0_0_85%] sm:flex-[0_0_50%] md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
                  >
                    <motion.button
                      type="button"
                      onClick={() => setActiveTestimonial(t)}
                      whileHover={{ y: -4 }}
                      className="w-full text-left p-5 rounded-2xl bg-white/90 border border-pastel-pink-200/50 shadow-sm h-full flex flex-col"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-pastel-green-lighter/60 border border-pastel-green-200/60 flex items-center justify-center font-semibold text-[var(--text-dark)]">
                          {t.name
                            .split(" ")
                            .slice(0, 2)
                            .map((p) => p[0])
                            .join("")}
                        </div>
                        <div className="min-w-0">
                          <p className="font-semibold text-[var(--text-dark)] truncate">
                            {t.name}
                          </p>
                          <p className="text-xs text-[var(--text-muted)]">
                            {t.date}
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-yellow-500 font-semibold text-sm">
                        {"★".repeat(t.rating)}{" "}
                        <span className="text-[var(--text-muted)] font-medium">
                          {t.rating}/5
                        </span>
                      </p>

                      <p className="mt-3 text-sm text-[var(--text-body)] font-medium line-clamp-4 flex-1">
                        {t.quote}
                      </p>

                      <span className="mt-3 inline-flex items-center gap-1 text-[var(--accent-green)] font-semibold text-sm hover:gap-2 transition-all focus-ring justify-center sm:justify-start">
                        Read more
                      </span>
                    </motion.button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Read more modal */}
          <AnimatePresence>
            {activeTestimonial && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/35 z-[60]"
                  onClick={() => setActiveTestimonial(null)}
                  aria-hidden
                />
                <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
                  <motion.div
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full max-w-lg rounded-2xl bg-[var(--bg-cream)] border border-pastel-pink-200/60 shadow-xl p-6"
                    role="dialog"
                    aria-modal="true"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <p className="font-display text-xl font-semibold text-[var(--text-dark)]">
                          {activeTestimonial.name}
                        </p>
                        <p className="text-xs text-[var(--text-muted)] mt-1">
                          {activeTestimonial.date} •{" "}
                          <span className="text-yellow-500">
                            {"★".repeat(activeTestimonial.rating)}
                          </span>{" "}
                          <span className="font-medium text-[var(--text-muted)]">
                            {activeTestimonial.rating}/5
                          </span>
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setActiveTestimonial(null)}
                        className="focus-ring w-10 h-10 rounded-xl bg-white/70 hover:bg-white border border-pastel-pink-200/60 flex items-center justify-center"
                        aria-label="Close"
                      >
                        ✕
                      </button>
                    </div>

                    <p className="mt-4 text-[var(--text-body)] font-medium leading-relaxed whitespace-pre-line">
                      {activeTestimonial.quote}
                    </p>
                  </motion.div>
                </div>
              </>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* About + image + CTA */}
      <section id="about" className="py-[var(--section-padding)]">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            <div className="order-2 lg:order-1 flex flex-col items-center lg:items-end gap-8">
              <CleanHomeImage />
              <AnimateIn className="w-full">
                <div className="w-full max-w-[680px]">
                  <p className="text-2xl font-display font-semibold text-[var(--text-dark)] text-center lg:text-center">
                    Accreditations
                  </p>
                  <div className="mt-5 relative w-full aspect-[16/4]">
                    <Image
                      src="/assets/dustaway_partners_strip.svg"
                      alt="Dustaway accreditations strip"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </AnimateIn>
            </div>
            <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
              <AnimateIn direction="right" amount={0.2}>
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                  About us
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)]">
                  Your trusted local brand for all your cleaning needs!
                </h2>
                <p className="mt-6 text-lg text-[var(--text-body)] leading-relaxed font-medium">
                  Since 2019, Dustaway Services has been a trusted, homegrown
                  brand, committed to creating clean, comfortable homes. Our
                  team offers a wide range of cleaning services, from efficient
                  3- to 4-hour general cleaning sessions to comprehensive
                  deep-cleaning options like post-renovation cleaning, tenancy
                  cleaning, vinyl floor care, mattress and upholstery cleaning,
                  and disinfection. Founded by a single working mother inspired
                  to support other busy parents, Dustaway has grown from a small
                  team of 3 to over 20 dedicated professionals. Our commitment
                  to exceptional customer service sets us apart—when you choose
                  Dustaway Services, you’ll enjoy a hassle-free booking
                  experience and the satisfaction of a spotless & refreshed home
                  after our sessions.
                </p>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <AnimateIn>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)] text-center mb-10">
          Featured on
        </h1>
        <div className="w-full overflow-hidden">
          <Image
            src="/assets/logo_no_background.png"
            alt="Dustaway logo"
            width={1200}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </AnimateIn>

      {/* CTA — Your roadmap to a cleaner home */}
      <section className="py-16 bg-[color:var(--bg-soft-strong)] soft-divider-top">
        <div className="section-container">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
            <AnimateIn className="text-center">
              <h2 className="font-display text-center text-2xl sm:text-3xl font-semibold text-[var(--text-dark)]">
                Your roadmap to a cleaner home starts here
              </h2>
              <p className="mt-4 text-center text-[var(--text-body)] font-medium max-w-xl mx-auto">
                Book a cleaning in a few clicks!
              </p>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=Novelty%20BizCentre%2C%2018%20Howard%20Road%20%2303-07%2C%20Singapore%20369585"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-ring mt-8 inline-flex items-center justify-center px-10 py-4 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-semibold text-lg"
              >
                Get directions
              </a>
            </AnimateIn>
            <AnimateIn delay={0.08}>
              <div className="overflow-hidden rounded-[1.75rem] border border-pastel-green-200/50 bg-white shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.736981120991!2d103.88327887472458!3d1.3339877986533746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da17e668bf124b%3A0xcb1f2977df9d2db6!2sNovelty%20BizCentre!5e0!3m2!1sen!2sph!4v1774010569192!5m2!1sen!2sph"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dustaway location map"
                  className="h-[320px] w-full md:h-[360px]"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <section id="contact" className="py-[var(--section-padding)] bg-white">
        <div className="section-container">
          <div className="rounded-[2rem] bg-gradient-to-br from-pastel-green-lighter/70 via-white to-pastel-pink-lighter/55 border border-pastel-green-200/40 p-8 lg:p-10 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-12">
              {/* Left: Info */}
              <AnimateIn>
                <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)] mb-3">
                  Contact us
                </p>
                <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)]">
                  Let&apos;s make your home feel fresh again
                </h2>
                <p className="mt-4 text-[var(--text-body)] font-medium leading-relaxed">
                  Reach out for bookings, quotations, or questions about the
                  right cleaning service for your space.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="rounded-2xl bg-white/80 border border-pastel-pink-200/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      Call us
                    </p>
                    <p className="mt-2 font-semibold text-[var(--text-dark)]">
                      +65 8057 9500
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/80 border border-pastel-pink-200/40 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)]">
                      Email
                    </p>
                    <p className="mt-2 text-[var(--text-dark)] font-semibold break-all">
                      cs@dustaway.sg
                    </p>
                  </div>
                </div>
              </AnimateIn>

              {/* Right: Form */}
              <AnimateIn delay={0.08}>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const res = await fetch("/api/emails", {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({
                        fullName: contactName,
                        phoneNumber: contactPhone,
                        email: contactEmail,
                        message: contactMessage,
                      }),
                    });

                    if (!res.ok) {
                      setContactStatus(
                        "Something went wrong. Please try again.",
                      );
                      return;
                    }
                    setContactName("");
                    setContactPhone("");
                    setContactEmail("");
                    setContactMessage("");
                    setContactStatus(
                      "Your inquiry has been sent! We'll be in touch soon. 🎉",
                    );
                  }}
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-medium text-[var(--text-body)] mb-2"
                      >
                        Full name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border bg-white/80 border border-pastel-pink-200/40 outline-none"
                        placeholder="Jane Doe"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-medium text-[var(--text-body)] mb-2"
                      >
                        Phone number
                      </label>
                      <input
                        id="contact-phone"
                        type="text"
                        className="w-full px-4 py-3 rounded-xl border border-pastel-pink-200/40 bg-white/80 outline-none"
                        placeholder="+65 1234 5678"
                        value={contactPhone}
                        onChange={(e) => setContactPhone(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="contact-email"
                      className="block text-sm font-medium text-[var(--text-body)] mb-2"
                    >
                      Email address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      className="w-full px-4 py-3 rounded-xl border border-pastel-pink-200/40 bg-white/80 outline-none"
                      placeholder="jane@example.com"
                      value={contactEmail}
                      onChange={(e) => setContactEmail(e.target.value)}
                    />
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium text-[var(--text-body)] mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl border border-pastel-pink-200/40 bg-white/80 outline-none resize-none"
                      placeholder="Tell us what kind of cleaning help you need..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                    />
                  </div>
                  <button
                    type="submit"
                    className="mx-auto block px-6 py-3 my-5 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-medium shadow-sm"
                  >
                    Send inquiry
                  </button>
                  {contactStatus ? (
                    <p className="text-center text-sm text-[var(--text-muted)] font-medium">
                      {contactStatus}
                    </p>
                  ) : null}
                </form>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — MCSC-style */}
      <section id="faq" className="py-[var(--section-padding)] bg-white">
        <div className="section-container max-w-3xl mx-auto">
          <AnimateIn className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-[var(--text-muted)]">
              FAQ
            </p>
            <h2 className="font-display text-3xl font-semibold text-[var(--text-dark)] mt-2">
              Frequently asked questions
            </h2>
          </AnimateIn>

          <div className="space-y-4">
            {faqs.map((section, i) => (
              <AnimateIn key={section.section} delay={i * 0.05}>
                <details className="group p-5 rounded-xl bg-pastel-green-lighter/30 border border-pastel-green-200/50">
                  <summary className="font-display font-semibold text-[var(--text-dark)] cursor-pointer list-none flex justify-between items-center">
                    {section.section}
                    <span className="text-pastel-pink-200 group-open:rotate-180 transition-transform">
                      ▼
                    </span>
                  </summary>
                  <div className="mt-3 space-y-3">
                    {section.questions.map((q, j) => (
                      <details
                        key={j}
                        className="group p-3 rounded-lg bg-white/50 border border-pastel-green-200/30"
                      >
                        <summary className="font-medium text-[var(--text-dark)] cursor-pointer list-none flex justify-between items-center">
                          {q.q}
                          <span className="text-pastel-pink-200 group-open:rotate-180 transition-transform text-sm">
                            ▼
                          </span>
                        </summary>
                        <p className="mt-2 text-[var(--text-body)] whitespace-pre-line">
                          {q.a}
                        </p>
                      </details>
                    ))}
                  </div>
                </details>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
