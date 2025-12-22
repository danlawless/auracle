import Link from 'next/link';
import { volumes } from './chapters';

export const metadata = {
  title: 'The Sovereignty Series | Reader',
  description: 'A seven-volume, 555,000-word journey from recognition through healing to sovereignty, embodied leadership, parenting, helping others, and prosperity.',
};

const volumeColors = [
  { gradient: 'from-rose-500 to-pink-600', bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700' },
  { gradient: 'from-amber-500 to-orange-600', bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700' },
  { gradient: 'from-emerald-500 to-teal-600', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700' },
  { gradient: 'from-violet-500 to-purple-600', bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700' },
  { gradient: 'from-sky-500 to-blue-600', bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700' },
  { gradient: 'from-fuchsia-500 to-pink-600', bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-fuchsia-700' },
  { gradient: 'from-lime-500 to-green-600', bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-700' },
];

const volumeKeywords = [
  'SEE',
  'HEAL',
  'STAND',
  'LIVE',
  'GIVE',
  'SERVE',
  'THRIVE',
];

export default function ReaderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-soft-ivory to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-deep-purple mb-4">
            The Sovereignty Series
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
            A seven-volume journey from recognizing manipulation patterns through healing, 
            sovereignty, embodied leadership, parenting, helping others, and building prosperity.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
            {volumeKeywords.map((keyword, index) => (
              <span key={keyword} className="flex items-center gap-1">
                <span className={`font-semibold ${volumeColors[index].text}`}>{keyword}</span>
                {index < volumeKeywords.length - 1 && <span className="text-gray-300">→</span>}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Grid */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {volumes.map((volume, index) => {
            const colors = volumeColors[index];
            const keyword = volumeKeywords[index];
            const chapterCount = volume.chapters.filter(c => c.type === 'chapter').length;
            const appendixCount = volume.chapters.filter(c => c.type === 'appendix').length;

            return (
              <Link
                key={volume.id}
                href={`/reader/${volume.id}`}
                className={`
                  group relative overflow-hidden rounded-2xl ${colors.bg} ${colors.border} border-2
                  p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]
                `}
              >
                {/* Volume Number Badge */}
                <div className={`
                  absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br ${colors.gradient}
                  flex items-center justify-center text-white font-bold text-lg shadow-lg
                `}>
                  {index + 1}
                </div>

                {/* Keyword Badge */}
                <div className={`inline-block px-2 py-1 rounded text-xs font-bold ${colors.text} bg-white/50 mb-3`}>
                  {keyword}
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <div>
                    <h2 className={`font-serif text-xl ${colors.text} mb-1`}>
                      {volume.title}
                    </h2>
                    <p className="text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {volume.subtitle}
                    </p>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
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
            <h3 className="font-serif text-xl text-deep-purple mb-6">
              Your Reading Journey
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600 text-sm">
              <p>
                <strong className="text-rose-700">Volume 1: SEE</strong> — Recognize and name 
                the patterns of manipulation you've experienced.
              </p>
              <p>
                <strong className="text-amber-700">Volume 2: HEAL</strong> — Guide you through healing 
                attachment wounds and learning secure connection.
              </p>
              <p>
                <strong className="text-emerald-700">Volume 3: STAND</strong> — Install internal authority 
                and teach you to live from sovereignty.
              </p>
              <p>
                <strong className="text-violet-700">Volume 4: LIVE</strong> — Explore embodied leadership, 
                aura coherence, and living from full presence.
              </p>
              <p>
                <strong className="text-sky-700">Volume 5: GIVE</strong> — Break generational cycles 
                and parent consciously after trauma.
              </p>
              <p>
                <strong className="text-fuchsia-700">Volume 6: SERVE</strong> — Help others heal 
                without losing yourself in the process.
              </p>
              <p className="md:col-span-2 text-center">
                <strong className="text-lime-700">Volume 7: THRIVE</strong> — Build a life of prosperity, 
                purpose, and sustainable success after survival mode.
              </p>
            </div>
            <div className="mt-6 pt-6 border-t border-soft-lavender/30">
              <p className="text-xs text-gray-500 italic text-center">
                Each volume builds on the previous, but you can start wherever you are in your journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Series Stats */}
      <section className="pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-deep-purple/5 to-soft-lavender/10 rounded-2xl p-8">
            <div className="grid grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-deep-purple">7</div>
                <div className="text-sm text-gray-500">Volumes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-deep-purple">555K</div>
                <div className="text-sm text-gray-500">Words</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-deep-purple">2,021</div>
                <div className="text-sm text-gray-500">Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-deep-purple">143</div>
                <div className="text-sm text-gray-500">Chapters</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
