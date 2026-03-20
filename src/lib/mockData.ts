import type { Service, TimeSlot } from './types'
import { servicesCatalog } from './servicesCatalog'

export const SERVICES: Service[] = [...servicesCatalog]

export const TIME_SLOTS: TimeSlot[] = (() => {
  const slots: TimeSlot[] = []
  const start = 8 * 2 // 8 AM in half-hours
  const end = 18 * 2 // 6 PM in half-hours
  for (let h = start; h <= end; h++) {
    const hours = Math.floor(h / 2)
    const mins = (h % 2) * 30
    const id = `${hours.toString().padStart(2, '0')}-${mins.toString().padStart(2, '0')}`
    const period = hours >= 12 ? 'PM' : 'AM'
    const displayHours = hours === 0 ? 12 : hours > 12 ? hours - 12 : hours
    const label = `${displayHours}:${mins === 0 ? '00' : '30'} ${period}`
    slots.push({ id, label, available: true })
  }
  return slots
})()

export const EXTRA_OPTIONS = [
  'Inside fridge',
  'Inside oven',
  'Laundry & ironing',
  'Window cleaning',
  'Carpet cleaning',
]
