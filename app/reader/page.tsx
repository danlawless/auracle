import { redirect } from 'next/navigation';
import { chapters } from './chapters';

export const metadata = {
  title: 'The Narcissism Decoder | Reader',
  description: 'Read The Narcissism Decoder - Control Disguised as Care. A guide to recognizing, understanding, and breaking free from manipulation patterns.',
};

export default function ReaderPage() {
  // Redirect to the first chapter
  redirect(`/reader/${chapters[0].slug}`);
}

