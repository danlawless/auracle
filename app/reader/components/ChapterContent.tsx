'use client';

import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { type Chapter } from '../chapters';

interface ChapterContentProps {
  content: string;
  chapter: Chapter;
  prevChapter: Chapter | null;
  nextChapter: Chapter | null;
}

export default function ChapterContent({
  content,
  chapter,
  prevChapter,
  nextChapter,
}: ChapterContentProps) {
  return (
    <article className="max-w-3xl mx-auto px-6 py-12">
      {/* Chapter header */}
      <header className="mb-10 pb-6 border-b border-soft-lavender/30">
        <span className="text-xs font-medium text-vibrant-pink uppercase tracking-wider">
          {chapter.type === 'appendix' ? 'Appendix' : 'Chapter'}
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
              href={`/reader/${prevChapter.slug}`}
              className="group flex items-center gap-2 text-gray-600 hover:text-deep-purple transition-colors"
            >
              <svg
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              <div className="text-left">
                <span className="text-xs text-gray-400 block">Previous</span>
                <span className="text-sm font-medium">{prevChapter.title}</span>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {nextChapter ? (
            <Link
              href={`/reader/${nextChapter.slug}`}
              className="group flex items-center gap-2 text-gray-600 hover:text-deep-purple transition-colors text-right"
            >
              <div>
                <span className="text-xs text-gray-400 block">Next</span>
                <span className="text-sm font-medium">{nextChapter.title}</span>
              </div>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </nav>
    </article>
  );
}

