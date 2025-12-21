'use client';

import Link from 'next/link';
import { useState } from 'react';
import { chapters, type Chapter } from '../chapters';

interface ChapterSidebarProps {
  currentSlug: string;
}

export default function ChapterSidebar({ currentSlug }: ChapterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const mainChapters = chapters.filter((c) => c.type === 'chapter');
  const appendices = chapters.filter((c) => c.type === 'appendix');

  return (
    <>
      {/* Mobile toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-20 left-4 z-50 md:hidden bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg border border-soft-lavender/30"
        aria-label="Toggle chapter menu"
      >
        <svg
          className="w-6 h-6 text-deep-purple"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 h-[calc(100vh-4rem)] w-72 bg-white/95 backdrop-blur-sm
          border-r border-soft-lavender/30 overflow-y-auto z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="p-6">
          {/* Book title */}
          <div className="mb-6 pb-4 border-b border-soft-lavender/30">
            <h2 className="font-serif text-lg text-deep-purple font-medium">
              The Narcissism Decoder
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Control Disguised as Care
            </p>
          </div>

          {/* Main chapters */}
          <nav className="space-y-1">
            {mainChapters.map((chapter) => (
              <ChapterLink
                key={chapter.slug}
                chapter={chapter}
                isActive={currentSlug === chapter.slug}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>

          {/* Appendices */}
          <div className="mt-6 pt-4 border-t border-soft-lavender/30">
            <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 px-3">
              Appendices
            </h3>
            <nav className="space-y-1">
              {appendices.map((chapter) => (
                <ChapterLink
                  key={chapter.slug}
                  chapter={chapter}
                  isActive={currentSlug === chapter.slug}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
}

function ChapterLink({
  chapter,
  isActive,
  onClick,
}: {
  chapter: Chapter;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <Link
      href={`/reader/${chapter.slug}`}
      onClick={onClick}
      className={`
        block px-3 py-2 rounded-lg text-sm transition-all duration-200
        ${
          isActive
            ? 'bg-gradient-to-r from-deep-purple/10 to-vibrant-pink/10 text-deep-purple font-medium border-l-2 border-vibrant-pink'
            : 'text-gray-600 hover:bg-soft-lavender/20 hover:text-deep-purple'
        }
      `}
    >
      {chapter.title}
    </Link>
  );
}




