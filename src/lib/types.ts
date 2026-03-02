export type ServiceId = 'home' | 'deep' | 'office'

export interface Service {
  id: ServiceId
  title: string
  description: string
  duration: string
  price: string
}

export interface TimeSlot {
  id: string
  label: string
  available: boolean
}

export interface Booking {
  id: string
  serviceId: ServiceId
  serviceTitle: string
  date: string
  time: string
  status: 'upcoming' | 'completed' | 'cancelled'
  address?: string
  createdAt: string
}

export interface UserProfile {
  name: string
  email: string
  phone: string
  address: string
}

export interface UserPreferences {
  frequency: 'once' | 'weekly' | 'biweekly' | 'monthly'
  notes: string
  extras: string[]
}
