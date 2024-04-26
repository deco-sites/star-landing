import type { ImageWidget } from 'apps/admin/widgets.ts';
import VideoListIsland from '../islands/VideoList.tsx';

export interface Video {
  title?: string;
  videos: {
    label?: string;
    url?: string;
    thumbnail?: {
      src?: ImageWidget;
      alt?: string;
    };
  }[];
}

export default function VideoList({
  title = "VÍDEOS",
  videos = [
  {
    label: 'Home',
    url: 'https://www.youtube.com/embed/erLk59H86ww',
    thumbnail: {
      src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/5369/31106976-24e8-48d0-8415-3be6d69cd6a6',
      alt: 'Logo',
    },
  },
  {
    label: 'Home',
    url: 'https://www.youtube.com/embed/ty1yoqsS9mE',
    thumbnail: {
      src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/5369/6c69ff79-1183-4f8c-9bc6-534afeb58408',
      alt: 'Logo',
    },
  },
  {
    label: 'Home',
    url: 'https://www.youtube.com/embed/Sjs6cgPmxbw',
    thumbnail: {
      src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/5369/64036a80-0034-41f3-83dd-6f0caff1acb1',
      alt: 'Logo',
    },
  },
],
}: Video) {
  return <VideoListIsland title={title} videos={videos} />;
}
