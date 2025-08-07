import ScheduleHero from '../components/schedule/ScheduleHero'
import SessionTypes from '../components/schedule/SessionTypes'
import CalendarSection from '../components/schedule/CalendarSection'
import JaeProfile from '../components/schedule/JaeProfile'
import BookingProcess from '../components/schedule/BookingProcess'

export const metadata = {
  title: 'Schedule Your Spiritual Guidance Session - The Auracle',
  description: 'Book a personal spiritual guidance session with Jae. Transform your spiritual journey with personalized insights and divine guidance.',
}

export default function SchedulePage() {
  return (
    <div className="overflow-hidden">
      <ScheduleHero />
      <JaeProfile />
      <SessionTypes />
      <BookingProcess />
      <CalendarSection />
    </div>
  )
}
