import { useId } from 'preact/hooks';
import Image from 'apps/website/components/Image.tsx';
import type { ImageWidget } from 'apps/admin/widgets.ts';

const script = (id: string) => `
const callback = () => {
  const elem = document.getElementById("${id}");
  const inputs = document.querySelectorAll("#sabers input");
  const audio = document.getElementById("audio");
  const audio2 = document.getElementById("audio2");
  inputs.forEach(item => item.addEventListener('click', ()=> {
    if(!audio.paused && !audio2.paused) {
      audio2.currentTime = 0;
      return audio2.play();
    }
    if(!audio.paused) return audio2.play();
    audio.play();

   
  }));
}

window.addEventListener('scroll', callback, { once: true });
`;

/**
 * @titleBy saber
 */
export interface Saber {
  saber?: {
    sabers: {
      /**
       * @title Sabre
       */
      saber?: string;
      desc?: string;
      character?: string;
      color?: 'blue' | 'green' | 'red' | 'purple';
      open?: boolean;
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

const openSaber = (open: boolean) => {
  if (!open) return null;

  return {
    checked: 'checked',
  };
};

export default function Sabers({
  saber = {
    sabers: [
      {
        saber: 'Sabre Verde',
        desc: 'diplomacia, a negociação e a disciplina mental',
        character: 'Yoda',
        color: 'green',
        open: true,
      },

      {
        saber: 'Sabre Vermelho',
        desc: 'a gema é corrompida',
        character: 'Darth Vader',
        color: 'red',
        open: false,
      },
    ],
  },
}: Saber) {
  const id = `saber-${useId()}`;
  return (
    <>
      <div
        id="sabers"
        data-id={id}
        class="r-scroll flex gap-8 items-center justify-between py-8"
      >
        <ul class="flex gap-3 max-w-7xl mx-auto overflow-x-auto">
          {saber.sabers?.map((item) => (
            <li
              id={item?.id}
              // target={item?.href.includes("http") ? "_blank" : "_self"}
              class={`flex font-normal w-full mt-10 mb-20 min-w-[83%] max-w-[210px] sm:max-w-[100%] sm:min-w-[320px] ${
                item.outline && 'btn-outline'
              } ${gradientQuote(item.color)} rounded p-1`}
            >
              <div
                class={`grid grid-cols-3 justify-between items-center bg-black/90 p-8 w-full border-2 border-solid ${bgAvatar(
                  item.color,
                  'border'
                )}`}
              >
                <h4 class="self-start text-1xl">{item.saber}</h4>

                {/* <button class="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded p-1">
                <span class="flex w-full bg-gray-900 text-white rounded p-2">
                  Gradient border
                </span>
              </button> */}

                <div class="flex flex-col items-center justify-center -mt-20 -mb-10">
                  <div
                    class={`flex items-center justify-center rounded-full pt-[325px] h-[420px] relative ${bgAvatar(
                      item.color,
                      'bg'
                    )}`}
                  >
                    <div className="lightsaber">
                      <label class="animate-pulse" htmlFor={item.color}></label>
                      <input
                        title={`sabre ${item.color}`}
                        type="checkbox"
                        id={item.color}
                        {...openSaber(item.open)}
                      />
                      <div className="switch"></div>
                      <div className={`plasma ${item.color}`}></div>
                    </div>
                  </div>
                  {item.character && (
                    <h3 class="flex items-center justify-center bg-[#000513] p-3 -mt-12 text-2xl">
                      {item.character}
                    </h3>
                  )}
                </div>

                <div class="flex flex-col items-end self-start pt-6">
                  <p class="text-sm text-right max-w-80">{item.desc}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <audio id="audio" preload="auto">
          <source
            src="https://assets.codepen.io/308367/coolsaber.mp3"
            type="audio/mp3"
          />
        </audio>
        <audio id="audio2" preload="auto">
          <source
            src="https://assets.codepen.io/308367/coolsaber.mp3"
            type="audio/mp3"
          />
        </audio>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}
