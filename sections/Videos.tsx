import Image from 'apps/website/components/Image.tsx';
import type { ImageWidget } from 'apps/admin/widgets.ts';

type Type = 'dark' | 'light';

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Video {
  title?: string;
  navigation?: {
    videos: {
      label?: string;
      url?: string;
      thumbnail?: {
        src?: ImageWidget;
        alt?: string;
      };
    }[];
  };
}

export default function Videos({
  navigation = {
    videos: [
      {
        label: 'Home',
        url: '/',
        thumbnail: {
          src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04',
          alt: 'Logo',
        },
      },
    ],
  },
}: Video) {
  return (
    // background: #00030C; padding-bottom: 100px;
    <div
      id="videos"
      className="flex flex-col items-center justify-between py-4 mb-12 videos r-scroll bg-[#283045]"
    >
      <h2 className="text-white font text-3xl text-center w-full px-2 pt-7 pb-5">
        VÍDEOS
      </h2>
      <ul className="flex flex-nowrap gap-3 overflow-x-auto overflow-y-hidden group py-6 w-full">
        {navigation.videos?.map((item, i) => (
          <li
            className={`flex-1 basis-1/3 min-w-[70%] lg:min-w-[480px] group-hover:opacity-80 hover:hover-i transition-all duration-500 ${
              i === 0 ? 'origin-left' : 'origin-right'
            }`}
          >
            <a
              key={item?.id}
              id={item?.id}
              href={item?.url}
              target={item?.url.includes('http') ? '_blank' : '_self'}
              className={`block  ${item.outline && 'btn-outline'}`}
            >
              <Image
                className="pointer-events-none"
                src={item.thumbnail.src || ''}
                width="100%"
                height="auto"
                alt={item.thumbnail.alt}
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
