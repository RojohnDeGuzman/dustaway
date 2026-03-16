"use client";
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@/app/globals.css';
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  AnimateIn,
  StaggerChildren,
  StaggerItem,
} from "@/components/AnimateIn";
import { HeroImage, CleanHomeImage } from "@/components/HeroImage";

const services = [
  {
    title: "3hr / 4hr Cleaning",
    desc: "Every home is unique oasis. Get a custom cleaning experience with a dedicated professional! Choose between a 3-hour or 4-hour service and let us take care of your cleaning needs!",
    image: "/assets/da-12.jpg",
    href: "/booking",
  },
  {
    title: "Evening cleaning",
    desc: "Ditch the cleaning after work! This 3-hour evening service lets you come home to a spotless haven, perfect for unwinding and recharging.",
    image: "/assets/da-11.jpg",
    href: "/booking",
  },
  {
    title: "Spring Cleaning",
    desc: "Give your home a renewal with an extra set of hands! Our 3 or 4-hour spring cleaning service includes an addition professional crew member, covering more within the same time for a comprehensive clean, leaving your home sparkling from top to bottom.",
    image: "/assets/da-5.jpg",
    href: "/booking",
  },
  {
    title: "Deep cleaning",
    desc: "Our post-renovation / tenancy specialist cleaning service is perfect for those looking for a deep clean for a place that needs to be moved into or returned to its original move-in condition.",
    image: "/assets/da-6.png",
    href: "/booking",
  },
  {
    title: "Upholstery cleaning",
    desc: "Our upholstery deep clean service can clean the toughest stains but gentle enough not to damage your furniture, giving everyone a clean, safe and sanitized environment.",
    image: "/assets/da-7.png",
    href: "/booking",
  },
  {
    title: "Vinyl Cleaning",
    desc: "Breathe new life into your vinyl floors! Our cleaning service tackles dirt, grime, and minor scuffs, restoring a brilliant shine. We use gentle methods safe for all vinyl types. Enjoy long-lasting beauty and get expert maintenance tips - all in one service.",
    image: "/assets/da-8.jpg",
    href: "/booking",
  },
  {
    title: "Disinfection",
    desc: "Our NEA-certified disinfection service is designed to protect you and your family members from harmful viruses and bacteria. Our specialized disinfectant and equipment are 100% safe for children and pets.",
    image: "/assets/da-9.jpg",
    href: "/booking",
  },
];
const trustItems = ["Book in 60 seconds", "Trusted cleaners", "Cancel anytime"];

const testimonials = [
  {
    quote:
      "The team was professional and did a really good job! Highly recommended.",
    name: "Sarah M.",
    rating: 5,
    date: "2 days ago",
  },
  {
    quote:
      "Arranging an appointment is hassle-free. Very satisfied with the results.",
    name: "James L.",
    rating: 5,
    date: "1 week ago",
  },
  {
    quote:
      "Huge improvement to my home. Definitely recommending for the next cleaning.",
    name: "Emma K.",
    rating: 5,
    date: "1 month ago",
  },
];

const whyChoose = [
  {
    title: "Excellent results",
    desc: "Trained, experienced cleaners who take cleanliness to the next level.",
    icon: "✓",
  },
  {
    title: "Satisfaction guaranteed",
    desc: "We guarantee you’ll want to call us back for your next session.",
    icon: "★",
  },
  {
    title: "Easy booking",
    desc: "Book in seconds online. Reschedule or cancel anytime.",
    icon: "📅",
  },
  {
    title: "No strings attached",
    desc: "Transparent pricing and no obligation. Book when you need us.",
    icon: "🔓",
  },
  {
    title: "Eco-friendly options",
    desc: "We use organic and environmentally friendly products when you prefer.",
    icon: "🌿",
  },
  {
    title: "Professional team",
    desc: "Skilled, dedicated cleaners who take pride in their work.",
    icon: "👋",
  },
];

const stats = [
  { value: "5/5", label: "Google reviews" },
  { value: "500+", label: "Happy customers" },
  { value: "5+", label: "Years experience" },
  { value: "100%", label: "Satisfaction focus" },
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
        q:"After cleaning & sealing, is it safe for kids/pets?",
        a:"Yes it is absolutely safe once the full process is completed. There will be better friction in fact."
      },
      {
        q:"Can I clean my vinyl floors myself instead of hiring a professional service?",
        a:"While regular maintenance and light cleaning of vinyl floors can be done by homeowners, professional cleaning offers a deeper level of cleaning and can address more stubborn stains and buildup. We have the expertise, specialized equipment, and cleaning solutions to achieve optimal results without causing damage to the floors."
      }
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero — MCSC-style: headline + trusted line + CTAs */}
      <section className="relative min-h-[85vh] sm:min-h-[90vh] lg:min-h-[92vh] flex flex-col lg:flex-row items-center justify-center overflow-hidden">
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
              className="mt-12 pt-8 border-t border-pastel-green-200/50 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 text-sm font-medium text-[var(--text-body)]"
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

      {/* Our Professional Cleaning Services — MCSC-style grid with Read more */}
      <section
        id="services"
        className="py-[var(--section-padding)] bg-pastel-green-lighter/25"
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
          <StaggerChildren
            className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            delay={0.1}
          >
            {services.map((s) => (
              <StaggerItem key={s.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card-hover p-6 rounded-2xl bg-white/95 border border-pastel-green-200/50 shadow-sm h-full flex flex-col text-center sm:text-left"
                >
                  <div className="relative w-full max-w-[520px] aspect-square overflow-hidden rounded-xl mx-auto sm:mx-0">
                    <Image
                      src={s.image}
                      alt={`${s.title} image`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-[var(--text-dark)]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[var(--text-body)] text-sm font-medium flex-1">
                    {s.desc}
                  </p>
                  <Link
                    href={s.href}
                    className="mt-4 inline-flex items-center gap-1 text-[var(--accent-green)] font-semibold hover:gap-2 transition-all focus-ring justify-center sm:justify-start"
                  >
                    Read more
                    <span aria-hidden>→</span>
                  </Link>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
          
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
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-pastel-pink-soft flex items-center justify-center text-[var(--text-dark)] font-bold">
                    {w.icon}
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
        className="py-12 bg-pastel-pink-lighter/40 border-y border-pastel-pink-200/40"
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
          <StaggerChildren className="grid sm:grid-cols-3 gap-6" delay={0.1}>
            {testimonials.map((t) => (
              <StaggerItem key={t.name}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="p-6 rounded-2xl bg-white/90 border border-pastel-pink-200/50 shadow-sm h-full flex flex-col text-center"
                >
                  <p className="text-[var(--accent-green)] font-semibold">
                    ★★★★★ {t.rating}/5
                  </p>
                  <p className="mt-3 text-[var(--text-body)] font-medium flex-1">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[var(--text-dark)]">
                    {t.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">{t.date}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Stats — MCSC-style numbers
      <section className="py-14 bg-pastel-pink-lighter/40 border-y border-pastel-pink-200/40">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-3xl sm:text-4xl font-semibold text-[var(--accent-green)]">
                  {s.value}
                </p>
                <p className="mt-1 text-[var(--text-body)] font-medium">
                  {s.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </section> */}

      {/* About + image + CTA */}
      <section id="about" className="py-[var(--section-padding)]">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
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
                <Link
                  href="/dashboard"
                  className="btn-primary focus-ring mt-8 inline-flex items-center justify-center px-8 py-4 rounded-full bg-pastel-pink-soft text-[var(--text-dark)] font-medium hover:bg-pastel-pink-200 btn-press w-fit mx-auto lg:mx-0"
                >
                  View my bookings
                </Link>
              </AnimateIn>
            </div>
          </div>
        </div>
      </section>

      <AnimateIn>
        <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[var(--text-dark)] text-center mb-10">
          Featured on
        </h1>
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
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
      <section className="py-16 bg-pastel-green-lighter/50 border-t border-pastel-green-200/50">
        <div className="section-container text-center">
          <AnimateIn>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-dark)]">
              Your roadmap to a cleaner home starts here
            </h2>
            <p className="mt-4 text-[var(--text-body)] font-medium max-w-xl mx-auto">
              Book a cleaning in a few clicks!
            </p>
            <Link
              href="/booking"
              className="btn-primary focus-ring mt-8 inline-flex items-center justify-center px-10 py-4 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-semibold text-lg"
            >
              Book now
            </Link>
          </AnimateIn>
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
                      <details key={j} className="group p-3 rounded-lg bg-white/50 border border-pastel-green-200/30">
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
