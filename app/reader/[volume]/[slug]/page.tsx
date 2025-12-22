import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import { volumes, getVolumeById, getChapterBySlug, getAdjacentChapters, getChapterPath } from '../../chapters';
import ChapterSidebar from '../../components/ChapterSidebar';
import ChapterContent from '../../components/ChapterContent';

interface ChapterPageProps {
  params: Promise<{ volume: string; slug: string }>;
}

export async function generateStaticParams() {
  const params: { volume: string; slug: string }[] = [];

  for (const volume of volumes) {
    for (const chapter of volume.chapters) {
      params.push({
        volume: volume.id,
        slug: chapter.slug,
      });
    }
  }

  return params;
}

export async function generateMetadata({ params }: ChapterPageProps) {
  const { volume: volumeId, slug } = await params;
  const volume = getVolumeById(volumeId);
  const chapter = volume ? getChapterBySlug(volumeId, slug) : null;

  if (!volume || !chapter) {
    return { title: 'Chapter Not Found' };
  }

  return {
    title: `${chapter.title} | ${volume.title}`,
    description: `Read ${chapter.title} from ${volume.title} - ${volume.subtitle}`,
  };
}

async function getChapterContent(volumeId: string, chapter: { filename: string; type: string }): Promise<string> {
  const chapterPath = getChapterPath(volumeId, chapter as any);
  const filePath = path.join(process.cwd(), 'book', volumeId, chapterPath);

  try {
    const content = await fs.readFile(filePath, 'utf-8');
    return content;
  } catch (error) {
    console.error(`Failed to read file: ${filePath}`, error);
    throw error;
  }
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { volume: volumeId, slug } = await params;
  const volume = getVolumeById(volumeId);

  if (!volume) {
    notFound();
  }

  const chapter = getChapterBySlug(volumeId, slug);

  if (!chapter) {
    notFound();
  }

  const content = await getChapterContent(volumeId, chapter);
  const { prev, next } = getAdjacentChapters(volumeId, slug);

  return (
    <div className="min-h-screen bg-soft-ivory">
      <ChapterSidebar currentSlug={slug} volumeId={volumeId} />

      {/* Main content area - offset for sidebar on desktop */}
      <main className="md:ml-72 pt-16">
        <ChapterContent
          content={content}
          chapter={chapter}
          volume={volume}
          prevChapter={prev}
          nextChapter={next}
        />
      </main>
    </div>
  );
}

