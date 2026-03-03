import type { Service, TimeSlot } from './types'

export const SERVICES: Service[] = [
  {
    id: 'home',
    title: 'Home cleaning',
    description: 'Regular or one-off cleans for apartments and houses.',
    duration: '2–3 hours',
    price: 'From $89',
  },
  {
    id: 'deep',
    title: 'Deep cleaning',
    description: 'Thorough top-to-bottom cleans when you need a reset.',
    duration: '4–5 hours',
    price: 'From $149',
  },
  {
    id: 'office',
    title: 'Office & commercial',
    description: 'Keep your workspace spotless and professional.',
    duration: '2–4 hours',
    price: 'From $120',
  },
]

export const TIME_SLOTS: TimeSlot[] = (() => {
  const slots: TimeSlot[] = []
  const start = 8 * 2
  const end = 18 * 2
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
