import { notFound } from 'next/navigation';
import { promises as fs } from 'fs';
import path from 'path';
import { chapters, getChapterBySlug, getAdjacentChapters } from '../chapters';
import ChapterSidebar from '../components/ChapterSidebar';
import ChapterContent from '../components/ChapterContent';

interface ChapterPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return chapters.map((chapter) => ({
    slug: chapter.slug,
  }));
}

export async function generateMetadata({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    return { title: 'Chapter Not Found' };
  }

  return {
    title: `${chapter.title} | The Narcissism Decoder`,
    description: `Read ${chapter.title} from The Narcissism Decoder - Control Disguised as Care`,
  };
}

async function getChapterContent(filename: string): Promise<string> {
  const filePath = path.join(process.cwd(), 'book', 'chapters', filename);
  const content = await fs.readFile(filePath, 'utf-8');
  return content;
}

export default async function ChapterPage({ params }: ChapterPageProps) {
  const { slug } = await params;
  const chapter = getChapterBySlug(slug);

  if (!chapter) {
    notFound();
  }

  const content = await getChapterContent(chapter.filename);
  const { prev, next } = getAdjacentChapters(slug);

  return (
    <div className="min-h-screen bg-soft-ivory">
      <ChapterSidebar currentSlug={slug} />

      {/* Main content area - offset for sidebar on desktop */}
      <main className="md:ml-72 pt-16">
        <ChapterContent
          content={content}
          chapter={chapter}
          prevChapter={prev}
          nextChapter={next}
        />
      </main>
    </div>
  );
}




