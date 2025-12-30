import ScheduleHero from '../components/schedule/ScheduleHero'
import SessionTypes from '../components/schedule/SessionTypes'
import JaeProfile from '../components/schedule/JaeProfile'
import BookingProcess from '../components/schedule/BookingProcess'

export const metadata = {
  title: 'Schedule Your Spiritual Guidance Session - The Aura',
  description: 'Book a personal spiritual guidance session with Jae. Transform your spiritual journey with personalized insights and divine guidance.',
}

export default function SchedulePage() {
  return (
    <div className="overflow-hidden">
      <ScheduleHero />
      <JaeProfile />
      <SessionTypes />
      <BookingProcess />
      <div className="py-20 bg-white/20 backdrop-blur-sm text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-serif font-medium text-gradient-primary mb-6">
            Ready to Begin Your Sacred Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Your transformation awaits. Book your session now with our streamlined process.
          </p>
          <a href="/book" className="btn-primary text-xl px-12 py-4 inline-block">
            Book Your Session Now
          </a>
        </div>
      </div>
    </div>
  )
}
