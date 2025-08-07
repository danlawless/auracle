import ScheduleHero from '../components/schedule/ScheduleHero'
import ReadingTypes from '../components/schedule/ReadingTypes'
import CalendarSection from '../components/schedule/CalendarSection'
import JenniferProfile from '../components/schedule/JenniferProfile'
import BookingProcess from '../components/schedule/BookingProcess'

export const metadata = {
  title: 'Schedule Your Spiritual Guidance Session - The Auracle',
  description: 'Book a personal spiritual guidance session with Jennifer. Transform your spiritual journey with personalized insights and divine guidance.',
}

export default function SchedulePage() {
  return (
    <div className="overflow-hidden">
      <ScheduleHero />
      <JenniferProfile />
      <ReadingTypes />
      <BookingProcess />
      <CalendarSection />
    </div>
  )
}
