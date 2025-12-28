'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { type Chapter, type Volume, getNextVolume } from '../chapters';

interface ChapterContentProps {
  content: string;
  chapter: Chapter;
  volume: Volume;
  prevChapter: Chapter | null;
  nextChapter: Chapter | null;
}

const volumeColors: Record<string, { text: string; bg: string; border: string }> = {
  'vol-1-decoder': { text: 'text-rose-600', bg: 'bg-rose-50', border: 'border-rose-200' },
  'vol-2-bridge': { text: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' },
  'vol-3-sovereignty': { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200' },
  'vol-4-embodied-leadership': { text: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' },
  'vol-5-lineage': { text: 'text-sky-600', bg: 'bg-sky-50', border: 'border-sky-200' },
  'vol-6-guide': { text: 'text-fuchsia-600', bg: 'bg-fuchsia-50', border: 'border-fuchsia-200' },
  'vol-7-return': { text: 'text-lime-600', bg: 'bg-lime-50', border: 'border-lime-200' },
  'vol-8-quantum': { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'border-indigo-200' },
};

function getChapterLabel(type: Chapter['type']): string {
  switch (type) {
    case 'front-matter':
      return 'Introduction';
    case 'chapter':
      return 'Chapter';
    case 'appendix':
      return 'Appendix';
    case 'back-matter':
      return 'Back Matter';
    default:
      return 'Section';
  }
}

export default function ChapterContent({
  content,
  chapter,
  volume,
  prevChapter,
  nextChapter,
}: ChapterContentProps) {
  const colors = volumeColors[volume.id] || volumeColors['vol-1-decoder'];
  const nextVolume = getNextVolume(volume.id);

  // Check if this is the last chapter of the volume
  const isLastChapter = !nextChapter;

  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {/* Volume breadcrumb */}
      <div className="mb-4">
        <Link
          href="/reader"
          className="text-xs text-gray-400 hover:text-deep-purple transition-colors"
        >
          All Volumes
        </Link>
        <span className="text-xs text-gray-300 mx-2">→</span>
        <Link
          href={`/reader/${volume.id}`}
          className={`text-xs ${colors.text} hover:opacity-80 transition-opacity`}
        >
          {volume.title}
        </Link>
      </div>

      {/* Chapter header */}
      <header className="mb-10 pb-6 border-b border-soft-lavender/30">
        <span className={`text-xs font-medium ${colors.text} uppercase tracking-wider`}>
          {getChapterLabel(chapter.type)}
        </span>
        <h1 className="font-serif text-3xl md:text-4xl text-deep-purple mt-2">
          {chapter.title}
        </h1>
      </header>

      {/* Markdown content */}
      <div className="prose-reader">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      {/* Navigation */}
      <nav className="mt-16 pt-8 border-t border-soft-lavender/30">
        <div className="flex justify-between items-center gap-4">
          {prevChapter ? (
            <Link
              href={`/reader/${volume.id}/${prevChapter.slug}`}
              className="group flex-1 p-4 rounded-lg border border-soft-lavender/30 hover:border-deep-purple/30 hover:bg-soft-lavender/10 transition-all"
            >
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Previous
              </span>
              <p className="font-serif text-deep-purple mt-1 group-hover:text-vibrant-pink transition-colors">
                ← {prevChapter.title}
              </p>
            </Link>
          ) : (
            <div className="flex-1" />
          )}

          {nextChapter ? (
            <Link
              href={`/reader/${volume.id}/${nextChapter.slug}`}
              className="group flex-1 p-4 rounded-lg border border-soft-lavender/30 hover:border-deep-purple/30 hover:bg-soft-lavender/10 transition-all text-right"
            >
              <span className="text-xs text-gray-400 uppercase tracking-wider">
                Next
              </span>
              <p className="font-serif text-deep-purple mt-1 group-hover:text-vibrant-pink transition-colors">
                {nextChapter.title} →
              </p>
            </Link>
          ) : nextVolume ? (
            // Show next volume when at end of current volume
            <Link
              href={`/reader/${nextVolume.id}`}
              className={`group flex-1 p-4 rounded-lg ${colors.bg} ${colors.border} border hover:shadow-md transition-all text-right`}
            >
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Continue to Next Volume
              </span>
              <p className={`font-serif ${colors.text} mt-1`}>
                {nextVolume.title} →
              </p>
              <p className="text-xs text-gray-500 mt-0.5">
                {nextVolume.subtitle}
              </p>
            </Link>
          ) : (
            // End of series
            <div className={`flex-1 p-4 rounded-lg ${colors.bg} ${colors.border} border text-right`}>
              <span className="text-xs text-gray-500 uppercase tracking-wider">
                Series Complete
              </span>
              <p className={`font-serif ${colors.text} mt-1`}>
                You&apos;ve completed the journey
              </p>
              <Link
                href="/reader"
                className="text-xs text-gray-500 hover:text-deep-purple mt-2 inline-block"
              >
                ← Return to All Volumes
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Volume completion message */}
      {isLastChapter && nextVolume && (
        <div className={`mt-8 p-6 rounded-xl ${colors.bg} ${colors.border} border`}>
          <h3 className="font-serif text-lg text-deep-purple mb-2">
            Congratulations on completing {volume.title}!
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            You&apos;ve finished this volume. When you&apos;re ready, continue your journey with the next book in the series.
          </p>
          <Link
            href={`/reader/${nextVolume.id}`}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg ${colors.text} bg-white shadow-sm hover:shadow-md transition-shadow text-sm font-medium`}
          >
            Continue to {nextVolume.title}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}
    </article>
  );
}
