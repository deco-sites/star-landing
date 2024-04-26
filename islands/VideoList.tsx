import Image from 'apps/website/components/Image.tsx';
import { Video } from '../sections/VideoList.tsx';

function VideoModal({ imageName, id}: { imageName: string; id: string }) {
  return (
    <dialog id={id} data-videomodal className="modal">
      <div className="modal-box rounded-none w-screen max-w-none max-h-none p-0 flex  items-center justify-center bg-black h-full">
        <iframe
          className="z-50 hidden"
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

function VideoItem({
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
      {/* <VideoModal imageName={imageName} id={modalId} /> */}
      <button
        onClick={() => {
          // (document?.getElementById(modalId) as HTMLFormElement)?.showModal()
          //  document?.querySelector('[data-videomodal] iframe')?.src = modalId
          const iframe = document?.querySelector('[data-videomodal] iframe');

          if(iframe.src) {

            if(iframe.src !== modalId) iframe.src = modalId;
            (document?.querySelector('[data-videomodal]') as HTMLFormElement)?.showModal();
          }

          if(modalId) {
            document?.querySelector('[data-videomodal] iframe').classList.remove('hidden');
          }
        }
        }
        class="block"
      >
        <Image
          className="pointer-events-none"
          src={`${imageName}`}
          width={"886"}
          height={"499"}
          fetchPriority="low"
        />
      </button>
    </>
  );
}

export default function VideoList(props:Video) {
  const { title, videos } = props;
  return (
    <>
      <section
        id="videos"
        class="flex flex-col items-center justify-between py-4 mb-12 videos r-scroll bg-[#283045]"
      >
        <h2 className="text-white font text-3xl text-center w-full px-2 pt-7 pb-5">
          {title}
        </h2>
        <ul className="flex flex-nowrap gap-3 overflow-x-auto overflow-y-hidden group py-6 w-full">
          {videos.map((item, i) => (
            <li
              className={`flex-1 basis-1/3 min-w-[70%] lg:min-w-[480px] group-hover:opacity-80 hover:hover-i transition-all duration-500 ${
                i === 0 ? 'origin-left' : 'origin-right'
              }`}
            >
              <VideoItem
                imageName={item.thumbnail.src}
                modalId={item.url}
                index={i}
                alt={item.thumbnail.alt}
              />
            </li>
          ))}
        </ul>
        <VideoModal imageName={'video'} data-videomodal id={''} />
      </section>
    </>
  );
}
