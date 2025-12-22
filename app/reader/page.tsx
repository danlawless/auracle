import Link from 'next/link';
import { volumes } from './chapters';

export const metadata = {
  title: 'The Auracle Series | Reader',
  description: 'A four-volume journey from recognition through healing to sovereignty and embodied leadership.',
};

const volumeColors = [
  { gradient: 'from-rose-500 to-pink-600', bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700' },
  { gradient: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
  { gradient: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
  { gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700' },
];

export default function ReaderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-ivory to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-purple mb-4">
            The Auracle Series
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A four-volume journey from recognizing manipulation patterns through healing 
            attachment wounds to living from sovereignty and embodied presence.
          </p>
        </div>
      </section>

      {/* Volume Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {volumes.map((volume, index) => {
            const colors = volumeColors[index];
            const chapterCount = volume.chapters.filter(c => c.type === 'chapter').length;
            const appendixCount = volume.chapters.filter(c => c.type === 'appendix').length;

            return (
              <Link
                key={volume.id}
                href={`/reader/${volume.id}`}
                className={`
                  group relative overflow-hidden rounded-2xl ${colors.bg} ${colors.border} border-2
                  p-8 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]
                `}
              >
                {/* Volume Number Badge */}
                <div className={`
                  absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient}
                  flex items-center justify-center text-white font-bold text-lg shadow-lg
                `}>
                  {index + 1}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h2 className={`font-serif text-2xl ${colors.text} mb-1`}>
                      {volume.title}
                    </h2>
                    <p className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                      {volume.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {volume.description}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      {chapterCount} Chapters
                    </span>
                    {appendixCount > 0 && (
                      <span className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {appendixCount} Appendices
                      </span>
                    )}
                  </div>

                  {/* Arrow indicator */}
                  <div className={`flex items-center gap-2 ${colors.text} font-medium text-sm pt-2`}>
                    <span>Begin Reading</span>
                    <svg 
                      className="w-4 h-4 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Reading Journey */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-soft-lavender/30 p-8 shadow-sm">
            <h3 className="font-serif text-xl text-deep-purple mb-4">
              Your Reading Journey
            </h3>
            <div className="space-y-4 text-gray-600 text-sm">
              <p>
                <strong className="text-deep-purple">Volume 1</strong> helps you recognize and name 
                the patterns of manipulation you've experienced.
              </p>
              <p>
                <strong className="text-deep-purple">Volume 2</strong> guides you through healing 
                attachment wounds and learning secure connection.
              </p>
              <p>
                <strong className="text-deep-purple">Volume 3</strong> installs internal authority 
                and teaches you to live from sovereignty.
              </p>
              <p>
                <strong className="text-deep-purple">Volume 4</strong> explores embodied leadership, 
                aura coherence, and living from full presence.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-soft-lavender/30">
              <p className="text-xs text-gray-500 italic">
                Each volume builds on the previous, but you can start wherever you are in your journey.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
