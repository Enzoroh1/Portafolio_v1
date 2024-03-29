import React, { useEffect } from "react";
import style from "./Trabajos.module.css";
import pokemon from "../../Assets/trabajos/Captura de pantalla 2022-10-12 190024.png";
import countries from "../../Assets/trabajos/countries.png";
import programax from "../../Assets/trabajos/programax.png";
import videogames from "../../Assets/trabajos/videogames.png";
import bikeTraining from "../../Assets/trabajos/bikeTraining.png";
import useObserver from "../../Hooks/useObserver";
import useLanguaje from "../../Hooks/useLanguaje";
import { BsChevronDoubleUp } from "react-icons/bs";

export default function Trabajos({ trabajos }) {
  const { text } = useLanguaje();
  const [observer, setElements, entries] = useObserver({
    threshold: 0,
    root: null,
  });
  useEffect(() => {
    const res = document.querySelectorAll(`.${style.portfolio}`);
    setElements(res);
  }, [setElements]);
  const intersecting = entries[0]?.isIntersecting;

  return (
    <section id="works">
      <div className={style.portfolio} ref={trabajos}>
        <div className={style.container}>
          <h1>{text.work.title}</h1>
          <div
            className={intersecting ? style.trabajos_lista : style.trabajosOff}
          >
            {/* Proyecto 1 */}
            {/* <div className={style.trabajo}>
              <img
                src={programax}
                className={style.imgTrabajos}
                alt="programax"
              />
              <div className={style.layer}>
                <BsChevronDoubleUp className={style.arrow} />
                <h3>{text.work.programax.title}</h3>
                <p>{text.work.programax.description}</p>
                <div className={style.linksTrabajos}>
                  <a
                    target="_blank"
                    href="https://enzodev.com.ar/"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  <a
                    target="_blank"
                    href="https://github.com/"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div> */}

            {/* Proyecto 2
            <div className={style.trabajo}>
              <img
                src={videogames}
                alt="videogames"
                className={style.imgTrabajos}
              />
              <div className={style.layer}>
                <BsChevronDoubleUp className={style.arrow} />
                <h3>{text.work.videogames.title}</h3>
                <p>{text.work.videogames.description}</p>
                <div className={style.linksTrabajos}>
                  <a
                    target="_blank"
                    href="https://wp.enzodev.com.ar/"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div> */}
            
            {/* Proyecto 5 */}
            <div className={style.trabajo}>
              <img
                src={bikeTraining}
                alt="durandoBike"
                className={style.imgTrabajos}
              />
              <div className={style.layer}>
                <BsChevronDoubleUp className={style.arrow} />
                <h3>{text.work.bikeTraining.title}</h3>
                <p>{text.work.bikeTraining.description}</p>
                <div className={style.linksTrabajos}>
                  <a
                    target="_blank"
                    href="https://soporteremoto.tech/"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                  {/* <a
                    target="_blank"
                    href="https://github.com/RamiroFerradas/BIKE-TRAINING.git"
                    rel="noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a> */}
                </div>
              </div>
            </div>
           
            {/* Proyecto 3 */}
            <div className={style.trabajo}>
              <img
                src={countries}
                className={style.imgTrabajos}
                alt="countries"
              />
              <div className={style.layer}>
                <BsChevronDoubleUp className={style.arrow} />
                <h3>{text.work.countries.title}</h3>
                <p>{text.work.countries.description}</p>
                <div className={style.linksTrabajos}>
                  <a
                    target="_blank"
                    href="https://integral.marketinados.com/"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Proyecto 4 */}
            <div className={style.trabajo}>
              <img src={pokemon} alt="pokemon" className={style.imgTrabajos} />
              <div className={style.layer}>
                <BsChevronDoubleUp className={style.arrow} />
                <h3>{text.work.pokemon.title}</h3>
                <p>{text.work.pokemon.description}</p>
                <div className={style.linksTrabajos}>
                  <a
                    target="_blank"
                    href="https://microingenieria.com.ar/"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
