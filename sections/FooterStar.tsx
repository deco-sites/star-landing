import Image from 'apps/website/components/Image.tsx';
import type { ImageWidget } from 'apps/admin/widgets.ts';

export interface Column {
  title: string;
  items: Items[];
}

export interface Items {
  label: string;
  href: string;
}

export interface Subscribe {
  title: string;
  description: string;
  /** @format rich-text */
  instructions: string;
}

export interface Social {
  network: 'Facebook' | 'Instagram' | 'Linkedin' | 'X - Twitter' | 'Youtube';
  href: string;
}

export interface Props {
  background?: {
    src?: ImageWidget;
    alt?: string;
  };
  links?: Column[];
  subscribe?: Subscribe;
  madeWith?: {
    label?: string;
    src?: ImageWidget;
    href?: string;
  };
  copyright?: string;
  bottomLinks?: Items[];
  social?: Social[];
}

export default function FooterStar({
  background = {
    src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/67120bcd-936a-4ea5-a760-02ed5c4a3d04',
    alt: 'background',
  },
  links = [
    {
      title: 'Column One',
      items: [
        { label: 'Link One', href: '/' },
        { label: 'Link Two', href: '/' },
        { label: 'Link Three', href: '/' },
        { label: 'Link Four', href: '/' },
        { label: 'Link Five', href: '/' },
      ],
    },
    {
      title: 'Column Two',
      items: [
        { label: 'Link Six', href: '/' },
        { label: 'Link Seven', href: '/' },
        { label: 'Link Eight', href: '/' },
        { label: 'Link Nine', href: '/' },
        { label: 'Link Ten', href: '/' },
      ],
    },
    {
      title: 'Column Three',
      items: [
        { label: 'Link Eleven', href: '/' },
        { label: 'Link Twelve', href: '/' },
        { label: 'Link FourThirteenteen', href: '/' },
        { label: 'Link Fourteen', href: '/' },
        { label: 'Link Fifteen', href: '/' },
      ],
    },
  ],
  subscribe = {
    title: 'Subcribe',
    description:
      'Join our newsletter to stay up to date on features and releases.',
    instructions:
      "By subscribing you agree to with our <a href='/' target='_blank' class='link'>Privacy Policy</a> and provide consent to receive updates from our company.",
  },
  madeWith = {
    label: 'Made with',
    src: 'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1527/cc202be0-af57-4b32-b9c9-d1d7dc97bf85',
    href: 'https://deco.cx',
  },
  copyright = '© 2024 deco.cx. All rights reserved.',
  bottomLinks = [
    { label: 'Privacy Policy', href: '/' },
    { label: 'Terms of Service', href: '/' },
    { label: 'Cookies Settings', href: '/' },
  ],
  social = [
    { network: 'Facebook', href: '' },
    { network: 'Instagram', href: '' },
    { network: 'X - Twitter', href: '' },
    { network: 'Linkedin', href: '' },
    { network: 'Youtube', href: '' },
  ],
}: Props) {
  return (
    <div class="mt-6 text-sm relative">
      <div class="lg:container lg:mx-auto md:max-w-6xl absolute left-0 right-0 bottom-0 py-6 px-3 xl:px-0 ">
        <p>Landing page star wars</p>
      </div>
      <Image
        src={background.src || ''}
        width="100%"
        height="auto"
        alt={background.alt}
        class="pointer-events-none"
      />
    </div>
  );
}
