import Image from 'apps/website/components/Image.tsx';
import type { ImageWidget } from 'apps/admin/widgets.ts';

type Type = 'dark' | 'light';

export interface CTA {
  id?: string;
  href: string;
  text: string;
  outline?: boolean;
}

export interface Quote {
  quote?: {
    quotes: {
      author?: string;
      quote?: string;
      character: string;
      color?: 'blue' | 'green' | 'red' | 'purple';
      avatar?: {
        src?: ImageWidget;
        alt?: string;
      };
    }[];
  };
}

const bgAvatar = (color: string, type?: 'bg' | 'border' = 'bg') => {
  let value = null;

  if (type === 'bg') {
    if (color === 'blue') return 'bg-[#3592D6]';
    if (color === 'green') return 'bg-[#35D66C]';
    if (color === 'red') return 'bg-[#D6353F]';
    if (color === 'purple') return 'bg-[#9935D6]';
  }

  if (type === 'border') {
    if (color === 'blue') return 'border-[#3592D6] border-b-[#D6353F]';
    if (color === 'green') return 'border-[#35D66C] border-b-[#D6353F]';
    if (color === 'red') return 'border-[#D6353F] border-b-[#3592D6]';
    if (color === 'purple') return 'border-[#9935D6] border-b-[#D6353F]';
  }

  // return value;
};

const gradientQuote = (color: string) => {
  if (color === 'blue')
    return 'bg-gradient-to-b from-[#3592D6]/50  to-[#D6353F]/50';
  if (color === 'green')
    return 'bg-gradient-to-b from-[#35D66C]/50  to-[#D6353F]/50';
  if (color === 'red')
    return 'bg-gradient-to-b from-[#D6353F]/50  to-[#3592D6]/50';
  if (color === 'purple')
    return 'bg-gradient-to-b from-[#9935D6]/50  to-[#D6353F]/50';
};

export default function Quotes({
  quote = {
    quotes: [
      {
        author: 'James Earl Jones',
        quote: 'você não conhece o poder do lado sombrio',
        character: 'Darth Vader',

        avatar: {
          src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04',
          alt: 'Logo',
        },
      },
      {
        author: 'James Earl Jones',
        quote: 'você não conhece o poder do lado sombrio',
        character: 'Darth Vader',

        avatar: {
          src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04',
          alt: 'Logo',
        },
      },
    ],
  },
}: Quote) {
  return (
    <div id="quotes" class="flex gap-8 items-center justify-between py-8">
      <ul class="flex flex-col gap-3 max-w-7xl mx-auto">
        {quote.quotes?.map((item) => (
          <li
            key={item?.id}
            id={item?.id}
            href={item?.href}
            // target={item?.href.includes("http") ? "_blank" : "_self"}
            class={`flex font-normal w-full mt-10 mb-20 ${
              item.outline && 'btn-outline'
            } ${gradientQuote(item.color)} rounded p-1`}
          >
            <div
              class={`grid grid-cols-3 justify-between items-center bg-black/90 p-8 w-full border-2 border-solid ${bgAvatar(
                item.color,
                'border'
              )}`}
            >
              <h4 class="self-start text-3xl">{item.author}</h4>

              {/* <button class="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded p-1">
                <span class="flex w-full bg-gray-900 text-white rounded p-2">
                  Gradient border
                </span>
              </button> */}

              <div class="flex flex-col items-center justify-center -mt-20 -mb-10">
                <div
                  class={`flex items-center justify-between rounded-full w-[420px] h-[420px] ${bgAvatar(
                    item.color,
                    'bg'
                  )}`}
                >
                  <Image
                    src={item.avatar.src || ''}
                    width="100%"
                    height="auto"
                    alt={item.avatar.alt}
                    class="hover:animate-pulse"
                  />
                </div>
                <h3 class="flex items-center justify-center w-96 h-16 bg-[#000513] p-3 -mt-12 text-2xl z-10">
                  {item.character}
                </h3>
              </div>

              <div class="flex flex-col items-end self-start pt-6">
                <svg
                  width="46"
                  height="29"
                  viewBox="0 0 46 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="mb-3"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.8264 10.3996C13.2983 11.0085 11.44 11.3655 9.43578 11.3655C4.22454 11.3655 0 8.95151 0 5.97366C0 2.99581 4.22454 0.581787 9.43578 0.581787C14.1869 0.581787 18.1179 2.58838 18.775 5.19941C20.1819 8.59242 21.2909 13.2527 20.5166 17.6925C20.1108 20.019 19.1772 22.3315 17.4551 24.3191C15.7277 26.3128 13.3271 27.8405 10.2106 28.7755C8.78446 29.2033 7.28152 28.394 6.85368 26.9679C6.42585 25.5418 7.23512 24.0388 8.66125 23.611C10.9366 22.9284 12.4114 21.9062 13.38 20.7883C14.3538 19.6644 14.9367 18.3036 15.2049 16.766C15.5577 14.7435 15.3468 12.5038 14.8264 10.3996Z"
                    fill="#D9D9D9"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M38.9906 10.227C37.483 10.885 35.6372 11.3021 33.6341 11.367C28.4256 11.5359 24.125 9.25996 24.0286 6.28367C23.9321 3.30738 28.0762 0.757771 33.2847 0.588955C38.0332 0.435051 42.0269 2.31306 42.7685 4.90124C44.2845 8.24689 45.544 12.8687 44.9138 17.3312C44.5836 19.6697 43.7254 22.0112 42.0686 24.0535C40.4067 26.1021 38.0569 27.7068 34.9723 28.7422C33.5608 29.216 32.0324 28.4559 31.5586 27.0444C31.0848 25.6328 31.8449 24.1045 33.2565 23.6307C35.5085 22.8747 36.9494 21.8053 37.8813 20.6566C38.8182 19.5017 39.3567 18.1228 39.5749 16.5773C39.862 14.5446 39.5788 12.3131 38.9906 10.227Z"
                    fill="#D9D9D9"
                  />
                </svg>

                <p class="text-4xl text-right max-w-80">{item.quote}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
