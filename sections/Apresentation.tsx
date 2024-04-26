import { useId } from 'preact/hooks';

const script = (id: string) => `
const callback = () => {
  const KEY = 'store-cookie-consent';
  const ACCEPTED = 'accepted';
  const HIDDEN = "translate-y-[200%]";
  
  const consent = localStorage.getItem(KEY);
  const elem = document.getElementById("${id}");
  
  if (consent !== ACCEPTED) {
    elem.querySelector('[data-button-cc-accept]').addEventListener('click', function () {
      localStorage.setItem(KEY, ACCEPTED);
      elem.classList.add(HIDDEN);
    });
    elem.querySelector('[data-button-cc-close]').addEventListener('click', function () {
      elem.classList.add(HIDDEN);
    });
    elem.classList.remove(HIDDEN);
  }
};

// window.addEventListener('scroll', callback, { once: true });

    class StarWars {
      constructor(args) {
        this.el = document.querySelector(args.el);
        
        this.audio = this.el.querySelector('audio');
        
        this.start = this.el.querySelector('.start');
        
        this.animation = this.el.querySelector('.animation');
        
        this.main = document.querySelector('.section-starwars');

        this.btn = document.querySelector('#change-me-2');
        console.log(this.btn);

        this.reset();

        this.start.addEventListener('click', () => {
          this.start.style.display = "none";
          this.audio.play();
          this.el.appendChild(this.animation);
        });
        
        this.audio.addEventListener('ended', () => {
          this.audio.currentTime = 0;
          this.reset();
          this.main.classList.add('off');
        })
      }
      
      reset() {
        this.start.style.display = "block";
        this.cloned = this.animation.cloneNode(true);
        this.animation.remove();
        this.animation = this.cloned;
      };

    }

    const intro = new StarWars({
      el : '.starwars'
    });


`;

export interface Props {
  title?: string;
  subtitle?: string;
  paragraphs: {
    label: string;
  }[];
}

export default function Apresentation({
  title = 'Episódio IV',
  subtitle = 'UMA NOVA ESPERANÇA',
  paragraphs = [
    {
      label: `É um período de guerra civil. Partindo de uma base secreta,
                    naves rebeldes atacam e conquistam sua primeira vitória
                    contra o perverso Império Galáctico.`,
    },
    {
      label: `
                    Durante a batalha, espiões rebeldes conseguem roubar os
                    planos secretos da arma decisiva do Império, a ESTRELA DA
                    MORTE, uma estação espacial blindada com poder suficiente
                    para destruir um planeta inteiro.`,
    },
    {
      label: `
                    Perseguida pelos sinistros agentes do Império, a princesa
                    Leia, apressa-se em voltar para casa a bordo de sua nave
                    estelar, protegendo os planos roubados que podem salvar seu
                    povo e restaurar a liberdade na galáxia....`,
    },
  ],
}: Props) {
  const id = `cookie-consent-${useId()}`;
  return (
    <>
      <div
        id={id}
        className="flex flex-col items-start justify-start
        z-50 w-full
        "
      >
        <section className="section-starwars">
          <article className="starwars">
            <audio preload="auto">
              <source
                src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg"
                type="audio/ogg"
              />
              <source
                src="https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3"
                type="audio/mpeg"
              />
            </audio>

            <section className="start">
              <p>
                Está pronto para começar sua <span>Jornada?</span>
                <br />
                Aperte o Play
                <button
                  class="bg-[#3592D6] text-xl text-black rounded-md px-5 py-2"
                  type="button"
                >
                  Play
                </button>
              </p>
            </section>

            <div className="animation">
              <section className="intro">
                A long time ago, in a galaxy far,
                <br /> far away....
              </section>

              <section className="titles">
                <div contenteditable="true" spellcheck="false">
                  {title && <h5>{title}</h5>}
                  {subtitle && <h2>{subtitle}</h2>}

                  {paragraphs.map((item) => (
                    <p>{item.label}</p>
                  ))}
                </div>
              </section>

              <section className="logo">
                <svg
                  version="1.0"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  width="693.615px"
                  height="419.375px"
                  viewBox="0 0 693.615 419.375"
                  enable-background="new 0 0 693.615 419.375"
                  xml:space="preserve"
                >
                  <g id="Layer_2">
                    <g>
                      <path
                        fill="#FFE81F"
                        d="M148.718,221.207l8.67,25.461c4.691,13.768,8.879,24.779,9.425,24.779c0.009,0,0.017-0.004,0.024-0.01
                      c0.6-0.53,17.57-49.811,17.57-49.811h32.89l-39.68,115.619h-22.86c0,0-24.4-70.471-24.3-70.739l-25.47,69.851h-22.63
                      l-39.18-115.15l32.73,0.021c0,0,17.929,50.821,18.168,50.821c0.001,0,0.001-0.001,0.002-0.002l17.89-50.841H148.718 M32.003,213.2
                      l3.601,10.584l39.18,115.149l1.845,5.424h5.729h22.63h5.598l1.918-5.26l17.685-48.5c1.524,4.434,3.171,9.213,4.818,13.988
                      c6.089,17.655,12.191,35.277,12.191,35.277l1.864,5.383h5.696h22.86h5.712l1.854-5.403l39.68-115.618l3.637-10.598h-11.204h-32.89
                      h-5.706l-1.858,5.396c-2.974,8.635-6.921,20.031-10.296,29.676c-0.509-1.463-1.039-3.001-1.587-4.611l-8.669-25.46l-1.846-5.421
                      h-5.727h-36.75h-5.666l-1.881,5.345l-10.453,29.706c-3.453-9.706-7.456-21.017-10.516-29.691l-1.882-5.334l-5.657-0.004
                      l-32.73-0.021L32.003,213.2L32.003,213.2z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFE81F"
                        d="M655.258,220.758l-0.075,30.305c0,0-32.643-0.109-49.239-0.109c-5.521,0-9.266,0.013-9.444,0.045
                      c-2.86,0.521-4.681,6.602-3.87,9.271c0.399,1.35,3.391,5.76,6.63,9.81c3.229,4.051,8.54,10.681,11.78,14.729
                      c8.319,10.381,9.46,12.43,10.229,18.391c1.25,9.681-3.329,20.16-11.829,27.07c-8.518,6.93-8.145,6.979-71.383,6.979
                      c-0.916,0-1.835,0-2.777,0c-38.46-0.01-58.8-0.329-61.761-0.989c-5.26-1.19-13.64-8.03-35.79-29.28
                      c-7.967-7.636-15.309-14.322-15.686-14.324c-0.01,0-0.015,0.006-0.015,0.016l-0.261,44.579l-35.899-0.159l-0.221-114.98h45.271
                      h34.79c24.13,0.871,40.46,24.91,37.21,40.24c-0.74,3.479-2.62,8.521-4.181,11.2c-3.21,5.5-11.38,12.56-18.011,15.591
                      c-2.449,1.108-4.449,2.398-4.449,2.858c0,1.71,8.061,9.649,11.08,10.91c2.579,1.079,10.09,1.319,43.21,1.319
                      c3.882,0,7.408,0.002,10.608,0.002c33.293,0,31.618-0.24,34.19-5.741c1.801-3.83,0.431-6.12-12.239-20.39
                      c-16.051-15.971-14.37-23.621-14.48-29.271c-0.229-6.77,5.102-28.069,32.812-28.069L655.258,220.758 M440.188,273.878
                      c15.37,0,18.49-0.239,21.761-1.66c11.04-4.8,11.63-18.979,1.04-25.271c-2.319-1.381-5.3-1.609-21.96-1.7l-19.279-0.101
                      c0.159,0.15-0.061,27.57-0.061,27.57S426.518,273.878,440.188,273.878 M663.277,212.758h-8.021h-73.8
                      c-16.032,0-25.515,6.328-30.646,11.637c-8.347,8.633-10.313,19.504-10.162,24.629c0.008,0.427,0.003,0.865-0.002,1.322
                      c-0.073,8.329,1.154,17.758,16.659,33.246c3.065,3.452,8.193,9.239,10.131,12.115c-4.238,0.521-14.98,0.521-26.262,0.521h-4.792
                      l-5.816-0.002c-19.904,0-36.688-0.057-40.128-0.736c-0.481-0.314-1.156-0.854-1.898-1.498c6.877-4.235,13.83-10.799,17.104-16.412
                      c1.987-3.413,4.178-9.243,5.098-13.568c2.04-9.625-1.325-21.236-9.001-31.068c-8.956-11.471-21.985-18.334-35.746-18.83
                      l-0.145-0.006h-0.145h-34.79h-45.271h-8.016l0.016,8.017l0.221,114.979l0.016,7.949l7.949,0.035l35.899,0.159l7.988,0.035
                      l0.047-7.988l0.155-26.706c0.733,0.696,1.491,1.419,2.269,2.165c24.227,23.24,32.359,29.679,39.562,31.308
                      c1.979,0.441,5.253,1.172,63.523,1.188h2.779c31.546,0,47.38,0,56.799-0.91c10.789-1.043,14.259-3.49,19.461-7.725l0.173-0.141
                      c10.685-8.687,16.323-21.83,14.715-34.3c-1.048-8.11-3.194-11.479-11.922-22.368l-2.594-3.24
                      c-3.04-3.799-6.713-8.387-9.175-11.475c-1.986-2.484-3.546-4.689-4.487-6.133c1.236-0.003,2.841-0.005,4.918-0.005
                      c16.395,0,48.887,0.108,49.213,0.11l8.008,0.026l0.02-8.008l0.075-30.306L663.277,212.758L663.277,212.758z M429.739,265.586
                      c0.013-2.021,0.025-4.287,0.038-6.557c0.01-2,0.019-4.004,0.022-5.84l11.187,0.058c6.429,0.035,16.103,0.088,17.989,0.623
                      c2.407,1.461,3.75,3.72,3.604,6.06c-0.08,1.264-0.682,3.588-3.821,4.951c-1.75,0.76-4.54,0.997-18.57,0.997
                      C435.738,265.878,432.305,265.749,429.739,265.586L429.739,265.586z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFE81F"
                        d="M312.908,220.287l40.29,115.92l-32.83,0.15l-5.45-17.41l-58.7-0.471l-5.18,17.431l-32.5-0.341
                      l39.78-115.229L312.908,220.287 M286.507,237.283c-0.083,0.333-5.144,14.219-10.222,28.104c-5.12,14-10.257,28-10.328,28.109
                      c0,0.001-0.001,0.001,0,0.001l0,0c0,0,0,0,0-0.001c0.136-0.04,18.316-0.08,29.968-0.08c5.453,0,9.475,0.009,9.55,0.029
                      c0.001,0.004,0.001,0.005,0.001,0.005s0-0.001,0-0.003c0,0,0,0-0.001-0.002C305.271,292.916,286.566,237.959,286.507,237.283
                      c0.001-0.004,0.001-0.006,0.001-0.006l0,0C286.507,237.277,286.507,237.279,286.507,237.283 M318.595,212.282l-5.693,0.005
                      l-54.59,0.051l-5.696,0.005l-1.859,5.386l-39.78,115.229l-3.623,10.494l11.102,0.115l32.5,0.341l6.033,0.063l1.719-5.782
                      l3.466-11.662l46.854,0.375l3.708,11.848l1.765,5.638l5.907-0.026l32.829-0.15l11.195-0.052l-3.676-10.574l-40.29-115.92
                      L318.595,212.282L318.595,212.282z M277.472,285.424c1.515-4.129,3.556-9.71,6.327-17.289c0.869-2.376,1.664-4.551,2.393-6.545
                      c0.663,1.956,1.385,4.084,2.169,6.398c0.646,1.906,3.485,10.27,5.92,17.428C287.041,285.416,281.591,285.417,277.472,285.424
                      L277.472,285.424z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFE81F"
                        d="M326.488,81.928v28.6h-57.28v87.47h-34.15v-87.54l-66.86,0.19c-8.06,0-9.14,6.42-9.14,8.88
                      c0,3.02,1.97,6.04,12.79,19.74c7.02,8.9,13.47,17.78,14.32,19.72c4.64,10.68-1.36,27.32-12.29,34.08
                      c-7.79,4.813-6.459,4.931-64.308,4.931c-2.974,0-6.096,0-9.392,0h-62.27v-32.13h97.9l2.89-2.01c1.95-1.36,3.08-3.23,3.51-5.79
                      c0.6-3.68,0.29-4.16-11.8-17.78c-14.29-16.1-15.8-19.04-15.06-29.32c0.84-11.73,11.3-28.77,29.58-28.77L326.488,81.928
                      M334.488,73.916l-8.013,0.012l-181.56,0.27c-10.458,0-20.171,4.518-27.342,12.722c-5.814,6.652-9.63,15.429-10.206,23.477
                      c-0.973,13.511,2.137,18.393,17.056,35.202c4.33,4.877,8.447,9.516,9.821,11.486c-0.022,0.079-0.042,0.13-0.054,0.159
                      c-0.015,0.012-0.038,0.03-0.07,0.052l-0.822,0.572H37.908h-8v8v32.13v8h8h62.27h4.937h4.455c28.522,0,42.6-0.027,50.894-0.635
                      c9.49-0.695,12.518-2.323,17.054-5.14l0.566-0.351c14.262-8.821,21.612-29.827,15.422-44.074
                      c-1.91-4.358-14.003-19.746-15.376-21.486c-3.796-4.807-10.062-12.74-11.054-15.036c0.024-0.193,0.071-0.393,0.121-0.532
                      c0.165-0.042,0.481-0.098,1.001-0.098l58.86-0.167v79.517v8h8h34.15h8v-8v-79.47h49.28h8v-8v-28.6V73.916L334.488,73.916z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFE81F"
                        d="M419.548,82.857l40.18,116.22l-32.77-0.18l-5.32-17.41l-58.439-0.26l-5.221,16.77h-33.369l39.739-115.14
                      H419.548 M372.737,156.478l39.801-0.05c0.001,0,0.001,0.001,0.001,0.001c0.136,0-19.342-57.201-19.472-57.241l0,0
                      C392.925,99.183,372.288,156.478,372.737,156.478 M425.247,74.857h-5.699h-55.2h-5.701l-1.86,5.39l-39.74,115.141l-3.662,10.61
                      h11.225h33.37h5.889l1.75-5.623l3.461-11.121l46.632,0.207l3.599,11.774l1.721,5.629l5.887,0.033l32.77,0.18l11.297,0.062
                      l-3.691-10.676l-40.18-116.22L425.247,74.857L425.247,74.857z M383.851,148.464c2.468-7.027,5.904-16.657,9.014-25.312
                      c2.948,8.644,6.209,18.245,8.588,25.29L383.851,148.464L383.851,148.464z"
                      />
                    </g>
                    <g>
                      <path
                        fill="#FFE81F"
                        d="M532.396,82.857c25.921,0,43.91,0.37,47.37,0.97c8,1.39,15.23,5.66,20.65,12.22
                      c5.67,6.86,6.97,10.14,7.71,19.54c1.061,13.27-5.25,24.72-17.7,32.15c-3.63,2.17-7.359,4.28-8.29,4.7
                      c-1.43,0.65-1.239,1.27,1.32,4.27c1.649,1.93,4.51,4.68,6.35,6.11l3.36,2.61l62.08,0.89l0.609,31.68h-38.061
                      c-29.439,0-38.86-0.27-41.62-1.2c-4.13-1.4-14.069-9.82-34.271-29.04l-14.42-13.72l0.152,43.96h-37.043V82.857H532.396
                      M526.938,134.627h19.671c19.141,0,19.739-0.06,22.47-2.11c4.881-3.66,6.609-7.43,6.091-13.22c-0.53-5.97-2.83-9.08-8.601-11.58
                      c-3.25-1.42-6.381-1.65-21.721-1.65h-17.91V134.627 M532.396,74.857h-41.8h-8v8v115.14v8h8h37.043h8.028l-0.028-8.028
                      l-0.088-25.216l0.84,0.799c24.986,23.773,32.356,29.173,37.218,30.821c3.733,1.259,9.982,1.624,44.188,1.624h38.061h8.154
                      l-0.156-8.154l-0.609-31.68l-0.148-7.734l-7.734-0.111l-59.402-0.851l-1.245-0.967c-0.396-0.309-0.876-0.717-1.389-1.179
                      c0.446-0.264,0.854-0.507,1.207-0.717c15.003-8.953,22.866-23.407,21.569-39.653c-0.863-10.959-2.82-15.896-9.52-24
                      c-6.584-7.969-15.621-13.298-25.447-15.005C575.678,74.999,548.257,74.857,532.396,74.857L532.396,74.857z M534.938,114.067h9.91
                      c14.027,0,16.806,0.233,18.518,0.981c3.25,1.408,3.58,2.091,3.835,4.957c0.256,2.848-0.097,3.994-2.922,6.112
                      c-0.093,0.069-0.164,0.123-0.223,0.166c-1.865,0.345-8.786,0.345-17.447,0.345h-11.67L534.938,114.067L534.938,114.067z"
                      />
                    </g>
                  </g>
                </svg>
              </section>
            </div>
          </article>
        </section>
      </div>
      <script type="module" dangerouslySetInnerHTML={{ __html: script(id) }} />
    </>
  );
}
