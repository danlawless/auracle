'use client';

import Link from 'next/link';
import { useState } from 'react';
import { volumes, getVolumeById, getNextVolume, type Chapter, type Volume } from '../chapters';

interface ChapterSidebarProps {
  currentSlug: string;
  volumeId: string;
}

const volumeColors: Record<string, { accent: string; bg: string }> = {
  'vol-1-decoder': { accent: 'border-rose-500', bg: 'from-rose-500/10 to-pink-500/10' },
  'vol-2-bridge': { accent: 'border-amber-500', bg: 'from-amber-500/10 to-orange-500/10' },
  'vol-3-sovereignty': { accent: 'border-emerald-500', bg: 'from-emerald-500/10 to-teal-500/10' },
  'vol-4-embodied-leadership': { accent: 'border-violet-500', bg: 'from-violet-500/10 to-purple-500/10' },
  'vol-5-lineage': { accent: 'border-sky-500', bg: 'from-sky-500/10 to-blue-500/10' },
  'vol-6-guide': { accent: 'border-fuchsia-500', bg: 'from-fuchsia-500/10 to-pink-500/10' },
  'vol-7-return': { accent: 'border-lime-500', bg: 'from-lime-500/10 to-green-500/10' },
  'vol-8-quantum': { accent: 'border-indigo-500', bg: 'from-indigo-500/10 to-cyan-500/10' },
};

export default function ChapterSidebar({ currentSlug, volumeId }: ChapterSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [showVolumeSelector, setShowVolumeSelector] = useState(false);

  const volume = getVolumeById(volumeId);
  const nextVolume = getNextVolume(volumeId);
  const colors = volumeColors[volumeId] || volumeColors['vol-1-decoder'];

  if (!volume) return null;

  const frontMatter = volume.chapters.filter((c) => c.type === 'front-matter');
  const mainChapters = volume.chapters.filter((c) => c.type === 'chapter');
  const appendices = volume.chapters.filter((c) => c.type === 'appendix');
  const backMatter = volume.chapters.filter((c) => c.type === 'back-matter');

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
          {/* Volume Selector */}
          <div className="mb-6 relative">
            <button
              onClick={() => setShowVolumeSelector(!showVolumeSelector)}
              className={`
                w-full text-left pb-4 border-b ${colors.accent} border-b-2
                hover:bg-soft-lavender/10 rounded-t-lg transition-colors
              `}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-serif text-lg text-deep-purple font-medium">
                    {volume.title}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {volume.subtitle}
                  </p>
                </div>
                <svg
                  className={`w-5 h-5 text-gray-400 transition-transform ${showVolumeSelector ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </button>

            {/* Volume Dropdown */}
            {showVolumeSelector && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-xl border border-soft-lavender/30 z-50 overflow-hidden">
                <Link
                  href="/reader"
                  className="block px-4 py-3 text-sm text-deep-purple font-medium hover:bg-soft-lavender/20 border-b border-soft-lavender/20"
                  onClick={() => {
                    setShowVolumeSelector(false);
                    setIsOpen(false);
                  }}
                >
                  ← All Volumes
                </Link>
                {volumes.map((vol) => (
                  <Link
                    key={vol.id}
                    href={`/reader/${vol.id}`}
                    className={`
                      block px-4 py-3 text-sm hover:bg-soft-lavender/20 transition-colors
                      ${vol.id === volumeId ? 'bg-soft-lavender/10 font-medium text-deep-purple' : 'text-gray-600'}
                    `}
                    onClick={() => {
                      setShowVolumeSelector(false);
                      setIsOpen(false);
                    }}
                  >
                    <span className="font-medium">{vol.title}</span>
                    <span className="block text-xs text-gray-400 mt-0.5">{vol.subtitle}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Front Matter */}
          {frontMatter.length > 0 && (
            <nav className="space-y-1 mb-4">
              {frontMatter.map((chapter) => (
                <ChapterLink
                  key={chapter.slug}
                  chapter={chapter}
                  volumeId={volumeId}
                  isActive={currentSlug === chapter.slug}
                  accentColor={colors.accent}
                  bgColor={colors.bg}
                  onClick={() => setIsOpen(false)}
                />
              ))}
            </nav>
          )}

          {/* Main chapters */}
          <nav className="space-y-1">
            {mainChapters.map((chapter) => (
              <ChapterLink
                key={chapter.slug}
                chapter={chapter}
                volumeId={volumeId}
                isActive={currentSlug === chapter.slug}
                accentColor={colors.accent}
                bgColor={colors.bg}
                onClick={() => setIsOpen(false)}
              />
            ))}
          </nav>

          {/* Appendices */}
          {appendices.length > 0 && (
            <div className="mt-6 pt-4 border-t border-soft-lavender/30">
              <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 px-3">
                Appendices
              </h3>
              <nav className="space-y-1">
                {appendices.map((chapter) => (
                  <ChapterLink
                    key={chapter.slug}
                    chapter={chapter}
                    volumeId={volumeId}
                    isActive={currentSlug === chapter.slug}
                    accentColor={colors.accent}
                    bgColor={colors.bg}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </nav>
            </div>
          )}

          {/* Back Matter */}
          {backMatter.length > 0 && (
            <div className="mt-6 pt-4 border-t border-soft-lavender/30">
              <nav className="space-y-1">
                {backMatter.map((chapter) => (
                  <ChapterLink
                    key={chapter.slug}
                    chapter={chapter}
                    volumeId={volumeId}
                    isActive={currentSlug === chapter.slug}
                    accentColor={colors.accent}
                    bgColor={colors.bg}
                    onClick={() => setIsOpen(false)}
                  />
                ))}
              </nav>
            </div>
          )}

          {/* Next Volume Link */}
          {nextVolume && (
            <div className="mt-8 pt-6 border-t border-soft-lavender/30">
              <Link
                href={`/reader/${nextVolume.id}`}
                className="block p-4 rounded-lg bg-gradient-to-r from-soft-lavender/20 to-vibrant-pink/10 hover:from-soft-lavender/30 hover:to-vibrant-pink/20 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
                  Next Volume
                </span>
                <p className="font-serif text-deep-purple mt-1">
                  {nextVolume.title}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  {nextVolume.subtitle}
                </p>
              </Link>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}

function ChapterLink({
  chapter,
  volumeId,
  isActive,
  accentColor,
  bgColor,
  onClick,
}: {
  chapter: Chapter;
  volumeId: string;
  isActive: boolean;
  accentColor: string;
  bgColor: string;
  onClick: () => void;
}) {
  return (
    <Link
      href={`/reader/${volumeId}/${chapter.slug}`}
      onClick={onClick}
      className={`
        block px-3 py-2 rounded-lg text-sm transition-all duration-200
        ${
          isActive
            ? `bg-gradient-to-r ${bgColor} text-deep-purple font-medium border-l-2 ${accentColor}`
            : 'text-gray-600 hover:bg-soft-lavender/20 hover:text-deep-purple'
        }
      `}
    >
      {chapter.title}
    </Link>
  );
}
