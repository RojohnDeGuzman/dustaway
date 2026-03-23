"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, TIME_SLOTS } from "@/lib/mockData";
import type { ServiceId } from "@/lib/types";
import ArrowIcon from "@/components/ArrowIcon";
import ThemedModal from "@/components/ThemedModal";

const STORAGE_BOOKINGS = "dustaway_bookings";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function formatLocalDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

/** Build one month of calendar cells (with leading empty cells). */
function getMonthGrid(year: number, month: number, today: Date) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const startPad = first.getDay();
  const daysInMonth = last.getDate();
  today.setHours(0, 0, 0, 0);

  const cells: (
    | { type: "empty" }
    | { type: "day"; date: string; day: number; isPast: boolean }
  )[] = [];
  for (let i = 0; i < startPad; i++) cells.push({ type: "empty" });
  for (let d = 1; d <= daysInMonth; d++) {
    const dDate = new Date(year, month, d);
    dDate.setHours(0, 0, 0, 0);
    const dateStr = formatLocalDate(dDate);
    cells.push({
      type: "day",
      date: dateStr,
      day: d,
      isPast: dDate.getTime() < today.getTime(),
    });
  }
  return cells;
}

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState<ServiceId | null>(null);
  const [date, setDate] = useState("");
  const [timeId, setTimeId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [bookingId, setBookingId] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const today = useMemo(() => new Date(), []);
  const [calendarMonth, setCalendarMonth] = useState(() => ({
    year: today.getFullYear(),
    month: today.getMonth(),
  }));

  const selectedService = SERVICES.find((s) => s.id === serviceId);
  const monthGrid = useMemo(
    () => getMonthGrid(calendarMonth.year, calendarMonth.month, new Date()),
    [calendarMonth.year, calendarMonth.month],
  );
  const monthLabel = useMemo(
    () =>
      new Date(calendarMonth.year, calendarMonth.month).toLocaleDateString(
        "en-US",
        { month: "long", year: "numeric" },
      ),
    [calendarMonth.year, calendarMonth.month],
  );

  function prevMonth() {
    setCalendarMonth((prev) => {
      const d = new Date(prev.year, prev.month - 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }

  function nextMonth() {
    setCalendarMonth((prev) => {
      const d = new Date(prev.year, prev.month + 1);
      return { year: d.getFullYear(), month: d.getMonth() };
    });
  }

  function resetBookingFlow() {
    setStep(1);
    setServiceId(null);
    setDate("");
    setTimeId("");
    setName("");
    setEmail("");
    setPhone("");
    setAddress("");
    setBookingId(null);
    setConfirmed(false);
    setCalendarMonth({
      year: today.getFullYear(),
      month: today.getMonth(),
    });
  }

  const canGoPrev =
    calendarMonth.year > today.getFullYear() ||
    calendarMonth.month > today.getMonth();
  const maxMonth = new Date(today.getFullYear(), today.getMonth() + 2);
  const canGoNext =
    calendarMonth.year < maxMonth.getFullYear() ||
    calendarMonth.month < maxMonth.getMonth();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedService || !date || !timeId || isSubmitting) return;

    setIsSubmitting(true);
    const slot = TIME_SLOTS.find((t) => t.id === timeId);
    const id = `B${Date.now()}`;
    const booking = {
      id,
      serviceId: selectedService.id,
      serviceTitle: selectedService.title,
      date,
      time: slot?.label ?? timeId,
      status: "upcoming" as const,
      fullName: name,
      email,
      phoneNumber: phone,
      address: address || undefined,
      createdAt: new Date().toISOString(),
    };
    try {
      const stored = localStorage.getItem(STORAGE_BOOKINGS);
      const list = stored ? JSON.parse(stored) : [];
      list.push(booking);
      localStorage.setItem(STORAGE_BOOKINGS, JSON.stringify(list));
    } catch (_) {}

    try {
      await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "booking",
          bookingId: id,
          serviceTitle: selectedService.title,
          date,
          time: slot?.label ?? timeId,
          fullName: name,
          email,
          phoneNumber: phone,
          address: address || undefined,
        }),
      });
    } catch (error) {
      console.error("Booking email failed:", error);
    } finally {
      setIsSubmitting(false);
    }

    setBookingId(id);
    setConfirmed(true);
  }

  if (confirmed && bookingId) {
    return (
      <div className="section-container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-lg mx-auto text-center"
        >
          <div className="w-28 h-28 flex items-center justify-center mx-auto text-[0] text-transparent">
            <Image
              src="/assets/eco-friendly.png"
              alt="Eco-friendly confirmation icon"
              width={76}
              height={76}
              className="h-[76px] w-[76px] object-contain"
            />
            ✓
          </div>
          <h1 className="font-display text-2xl sm:text-3xl font-semibold text-[var(--text-dark)] mt-6">
            Booking confirmed
          </h1>
          <p className="mt-3 text-[var(--text-body)] font-medium">
            Your {selectedService?.title} is scheduled for{" "}
            {new Date(date + "T12:00:00").toLocaleDateString("en-US", {
              weekday: "long",
              month: "long",
              day: "numeric",
            })}{" "}
            at {TIME_SLOTS.find((t) => t.id === timeId)?.label}.
          </p>
          <p className="mt-2 text-sm text-[var(--text-muted)]">
            A confirmation has been sent to {email}.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              onClick={resetBookingFlow}
              className="btn-primary focus-ring inline-flex items-center justify-center px-6 py-3 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-medium"
            >
              Book another
            </button>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-pastel-pink-soft text-[var(--text-dark)] font-medium hover:bg-pastel-pink-lighter/50"
            >
              Back to home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="section-container py-16">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-display text-3xl font-semibold text-[var(--text-dark)] text-center sm:text-left">
          Book a cleaning
        </h1>
        <p className="mt-2 text-[var(--text-body)] font-medium text-center sm:text-left">
          Choose a service, date, and time.
        </p>

        <div className="mt-8 flex gap-2">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                step >= s ? "bg-pastel-green-200" : "bg-pastel-green-200/30"
              }`}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-10"
            >
              <h2 className="font-display text-xl font-semibold text-[var(--text-dark)] mb-4 text-center sm:text-left">
                Select service
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setServiceId(s.id)}
                    className={`p-5 rounded-2xl border-2 text-center sm:text-left transition-all card-hover focus-ring flex flex-col items-start justify-start ${
                      serviceId === s.id
                        ? "border-pastel-green-200 bg-pastel-green-lighter/50"
                        : "border-pastel-green-200/50 bg-white hover:border-pastel-pink-soft"
                    }`}
                  >
                    <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left">
                      <Image
                        src={s.icon}
                        alt=""
                        width={56}
                        height={56}
                        className="h-14 w-14 object-contain"
                      />
                      <span className="font-display font-semibold text-[var(--text-dark)]">
                        {s.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
              <div className="mt-8 flex justify-center sm:justify-end">
                <button
                  type="button"
                  onClick={() => serviceId && setStep(2)}
                  disabled={!serviceId}
                  className="px-6 py-3 rounded-full bg-pastel-green-soft font-medium text-[var(--text-dark)] disabled:opacity-50 disabled:cursor-not-allowed btn-primary focus-ring"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-10"
            >
              <h2 className="font-display text-xl font-semibold text-[var(--text-dark)] mb-4 text-center sm:text-left">
                Date & time
              </h2>

              {/* Date: single-month calendar with prev/next */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-sm font-medium text-[var(--text-body)]">
                    Date
                  </p>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={prevMonth}
                      disabled={!canGoPrev}
                      className="w-9 h-9 rounded-lg font-medium text-[var(--text-body)] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-pastel-green-lighter/50 focus-ring"
                      aria-label="Previous month"
                    >
                      <ArrowIcon direction="back" />
                    </button>
                    <span className="min-w-0 flex-1 text-center font-display font-semibold text-[var(--text-dark)]">
                      {monthLabel}
                    </span>
                    <button
                      type="button"
                      onClick={nextMonth}
                      disabled={!canGoNext}
                      className="w-9 h-9 rounded-lg font-medium text-[var(--text-body)] disabled:opacity-40 disabled:cursor-not-allowed hover:bg-pastel-green-lighter/50 focus-ring"
                      aria-label="Next month"
                    >
                      <ArrowIcon direction="forward" />
                    </button>
                  </div>
                </div>
                <div className="rounded-xl border border-pastel-green-200/50 bg-white p-4">
                  <div className="grid grid-cols-7 gap-1 mb-2">
                    {WEEKDAYS.map((w) => (
                      <div
                        key={w}
                        className="text-center text-xs font-semibold text-[var(--text-muted)] py-1"
                      >
                        {w}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-7 gap-1">
                    {monthGrid.map((cell, i) =>
                      cell.type === "empty" ? (
                        <div key={`e-${i}`} className="aspect-square" />
                      ) : (
                        <button
                          key={cell.date}
                          type="button"
                          disabled={cell.isPast}
                          onClick={() => setDate(cell.date)}
                          className={`aspect-square rounded-lg text-sm font-medium focus-ring transition-colors ${
                            cell.isPast
                              ? "text-[var(--text-muted)]/40 cursor-not-allowed"
                              : date === cell.date
                                ? "bg-pastel-green-200 text-[var(--text-dark)]"
                                : "text-[var(--text-body)] hover:bg-pastel-green-lighter/60"
                          }`}
                        >
                          {cell.day}
                        </button>
                      ),
                    )}
                  </div>
                </div>
                {date && (
                  <p className="mt-2 text-sm text-[var(--text-body)]">
                    Selected:{" "}
                    <span className="font-semibold text-[var(--text-dark)]">
                      {new Date(date + "T12:00:00").toLocaleDateString(
                        "en-US",
                        { weekday: "long", month: "long", day: "numeric" },
                      )}
                    </span>
                  </p>
                )}
              </div>

              {/* Time: standard dropdown */}
              <div>
                <label
                  htmlFor="booking-time"
                  className="block text-sm font-medium text-[var(--text-body)] mb-2"
                >
                  Time
                </label>
                <select
                  id="booking-time"
                  value={timeId}
                  onChange={(e) => setTimeId(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-pastel-green-200/50 bg-white text-[var(--text-body)] font-medium focus:ring-2 focus:ring-pastel-green-200 focus:border-transparent outline-none"
                >
                  <option value="">Choose a time</option>
                  {TIME_SLOTS.filter((t) => t.available).map((t) => (
                    <option key={t.id} value={t.id}>
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mt-8 flex flex-col-reverse sm:flex-row justify-center sm:justify-between gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-6 py-3 rounded-full border-2 border-pastel-pink-soft text-[var(--text-dark)] font-medium"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => date && timeId && setStep(3)}
                  disabled={!date || !timeId}
                  className="px-6 py-3 rounded-full bg-pastel-green-soft font-medium text-[var(--text-dark)] disabled:opacity-50 btn-primary focus-ring"
                >
                  Next
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -12 }}
              transition={{ duration: 0.25 }}
              className="mt-10"
            >
              <h2 className="font-display text-xl font-semibold text-[var(--text-dark)] mb-4 text-center sm:text-left">
                Contact details
              </h2>
              <p className="text-sm text-[var(--text-body)] mb-4 text-center sm:text-left">
                We’ll use this to confirm your booking.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[var(--text-body)] mb-1"
                  >
                    Full name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-pastel-green-200/50 bg-white focus:ring-2 focus:ring-pastel-green-200 focus:border-transparent outline-none"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[var(--text-body)] mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-pastel-green-200/50 bg-white focus:ring-2 focus:ring-pastel-green-200 focus:border-transparent outline-none"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-[var(--text-body)] mb-1"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-pastel-green-200/50 bg-white focus:ring-2 focus:ring-pastel-green-200 focus:border-transparent outline-none"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium text-[var(--text-body)] mb-1"
                  >
                    Address (cleaning location)
                  </label>
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    rows={2}
                    className="w-full px-4 py-3 rounded-xl border border-pastel-green-200/50 bg-white focus:ring-2 focus:ring-pastel-green-200 focus:border-transparent outline-none resize-none"
                    placeholder="123 Main St, City"
                  />
                </div>
                <div className="pt-4 flex flex-col-reverse sm:flex-row justify-center sm:justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-6 py-3 rounded-full border-2 border-pastel-pink-soft text-[var(--text-dark)] font-medium"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-full bg-pastel-green-soft font-medium text-[var(--text-dark)] btn-primary focus-ring disabled:cursor-wait disabled:opacity-70"
                  >
                    {isSubmitting ? "Confirming..." : "Confirm booking"}
                  </button>
                </div>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <ThemedModal
        open={isSubmitting}
        title="Confirming your booking"
        description="Please hold on while we save your booking details and send your confirmation."
        dismissible={false}
      >
        <div className="flex flex-col items-center justify-center gap-4 py-4 text-center">
          <motion.div
            className="h-14 w-14 rounded-full border-4 border-pastel-green-100 border-t-pastel-green-200"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
          />
          <p className="max-w-xs text-sm leading-6 text-[var(--text-body)]">
            We&apos;re preparing your booking summary and email updates now.
          </p>
        </div>
      </ThemedModal>
    </div>
  );
}
