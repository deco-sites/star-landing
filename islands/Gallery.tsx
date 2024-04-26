import Image from 'apps/website/components/Image.tsx';

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

function GalleryModal({ imageName, id }: { imageName: string; id: string }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box rounded-none w-screen max-w-none max-h-none p-0 flex  items-center justify-center bg-black h-full">
        <iframe
          className="z-50"
          width="1168"
          height="657"
          src={id ? id : 'https://www.youtube.com/embed/L-_xHEv0l-w'}
          title="Star Wars: Episode IV - A New Hope (1977) Trailer #1 | Movieclips Classic Trailers"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <form
          method="dialog"
          className="modal-backdrop bg-transparent z-10 w-full h-full absolute left-0"
        >
          <button>Close</button>

          <button class="btn btn-circle btn-outline text-gray-50 hover:text-gray-900 fixed top-6 right-6 opacity-75">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>
      </div>
      <div class="modal-backdrop bg-black" />
    </dialog>
  );
}

function GalleryItem({
  imageName,
  modalId,
  index,
}: {
  imageName: string;
  modalId: string;
  index: number;
}) {
  return (
    <>
      <GalleryModal imageName={imageName} id={modalId} />
      <button
        onClick={() =>
          (document?.getElementById(modalId) as HTMLFormElement)?.showModal()
        }
        class="hover:scale-105 hover:drop-shadow-2xl transition duration-500 "
      >
        <Image
          src={`${imageName}`}
          width="100%"
          height="auto"
          fetchPriority="low"
        />
      </button>
    </>
  );
}

export default function Gallery({
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
  return (
    <>
      <section class="bg-[#0D0D0D] relative text-stone-100 text-3xl px-5 md:px-16">
        <div class="m-auto py-24 " id="gallery">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
            {videos.map((item, index) => (
              <GalleryItem
                imageName={item.thumbnail.src}
                modalId={item.url}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
