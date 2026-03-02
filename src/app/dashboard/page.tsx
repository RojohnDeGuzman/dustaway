'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import type { Booking } from '@/lib/types'

const STORAGE_BOOKINGS = 'dustaway_bookings'

function loadBookings(): Booking[] {
  if (typeof window === 'undefined') return []
  try {
    const s = localStorage.getItem(STORAGE_BOOKINGS)
    return s ? JSON.parse(s) : []
  } catch {
    return []
  }
}

function saveBookings(bookings: Booking[]) {
  try {
    localStorage.setItem(STORAGE_BOOKINGS, JSON.stringify(bookings))
  } catch (_) {}
}

export default function DashboardPage() {
  const [bookings, setBookings] = useState<Booking[]>([])

  useEffect(() => {
    setBookings(loadBookings())
  }, [])

  const upcomingBookings = bookings.filter((b) => b.status === 'upcoming')

  function handleCancelBooking(id: string) {
    if (!confirm('Cancel this booking?')) return
    const next = bookings.map((b) => (b.id === id ? { ...b, status: 'cancelled' as const } : b))
    setBookings(next)
    saveBookings(next)
  }

  return (
    <div className="section-container py-16">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
          <div>
            <h1 className="font-display text-3xl font-semibold text-[var(--text-dark)]">
              My bookings
            </h1>
            <p className="mt-2 text-[var(--text-body)] font-medium">
              View and manage your upcoming cleanings.
            </p>
          </div>
          <Link
            href="/booking"
            className="btn-primary focus-ring inline-flex items-center justify-center px-6 py-3 rounded-full bg-pastel-green-soft text-[var(--text-dark)] font-medium w-fit mx-auto sm:mx-0"
          >
            Book a cleaning
          </Link>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-10"
        >
          {upcomingBookings.length === 0 ? (
            <div className="p-8 rounded-2xl bg-pastel-green-lighter/30 border border-pastel-green-200/50 text-center">
              <p className="text-[var(--text-body)] font-medium">No upcoming bookings.</p>
              <Link
                href="/booking"
                className="mt-4 inline-block text-[var(--accent-green)] font-semibold hover:underline"
              >
                Book a cleaning →
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {upcomingBookings.map((b) => (
                <li
                  key={b.id}
                  className="p-5 rounded-2xl bg-white border border-pastel-green-200/50 shadow-sm flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left"
                >
                  <div className="min-w-0">
                    <p className="font-display font-semibold text-[var(--text-dark)]">{b.serviceTitle}</p>
                    <p className="text-[var(--text-body)] font-medium mt-1">
                      {new Date(b.date + 'T12:00:00').toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })} · {b.time}
                    </p>
                    {b.address && (
                      <p className="text-sm text-[var(--text-muted)] mt-1">{b.address}</p>
                    )}
                  </div>
                  <div className="flex justify-center sm:justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => handleCancelBooking(b.id)}
                      className="px-4 py-2 rounded-lg border border-pastel-pink-200 text-[var(--text-body)] font-medium hover:bg-pastel-pink-lighter/50 focus-ring"
                    >
                      Cancel
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </div>
  )
}
