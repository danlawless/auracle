import { redirect } from 'next/navigation';
import { volumes, getVolumeById } from '../chapters';

interface VolumePageProps {
  params: Promise<{ volume: string }>;
}

export async function generateStaticParams() {
  return volumes.map((volume) => ({
    volume: volume.id,
  }));
}

export async function generateMetadata({ params }: VolumePageProps) {
  const { volume: volumeId } = await params;
  const volume = getVolumeById(volumeId);

  if (!volume) {
    return { title: 'Volume Not Found' };
  }

  return {
    title: `${volume.title} | The Aura Series`,
    description: `${volume.subtitle} - ${volume.description}`,
  };
}

export default async function VolumePage({ params }: VolumePageProps) {
  const { volume: volumeId } = await params;
  const volume = getVolumeById(volumeId);

  if (!volume || volume.chapters.length === 0) {
    redirect('/reader');
  }

  // Redirect to the first chapter of the volume
  redirect(`/reader/${volumeId}/${volume.chapters[0].slug}`);
}

