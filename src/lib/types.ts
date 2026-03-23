export type ServiceId =
  | 'cleaning-3hr-4hr'
  | 'evening-cleaning'
  | 'spring-cleaning'
  | 'deep-cleaning'
  | 'upholstery-cleaning'
  | 'vinyl-cleaning'
  | 'disinfection'

export interface Service {
  id: ServiceId
  title: string
  description: string
  icon: string
  href: string
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
  fullName?: string
  email?: string
  phoneNumber?: string
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
