import React, { useState } from "react";
import { Link } from "react-router-dom";
import SWLogo from "../../img/Star_Wars_Logo.png";
import "../../styles/swiper-bundle.min.css";
import { Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from 'swiper/modules';


// Feature icono favoritos girando onMouseOver
export const Characters = () => {
  const [status, setStatus] = useState({ icon: "fa-solid fa-book-journal-whills" });
  const staticImage = () => setStatus({ icon: "fa-solid fa-book-journal-whills" });
  const movingImage = () => setStatus({ icon: "fa-solid fa-book-journal-whills fa-flip" });

  !function() {
    var e = {
        924: function() {
            !function() {
                const e = {
                    init() {
                        new Swiper(".bsb-blog-pro-2",{
                            slidesPerGroup: 1,
                            pagination: {
                                el: ".swiper-pagination",
                                clickable: !0
                            },
                            breakpoints: {
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 25
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 25
                                }
                            }
                        })
                    }
                };
                "loading" === document.readyState && document.addEventListener("DOMContentLoaded", (function() {}
                )),
                window.addEventListener("load", (function() {
                    e.init()
                }
                ), !1)
            }()
        }
    }
      , n = {};
    function t(o) {
        var r = n[o];
        if (void 0 !== r)
            return r.exports;
        var i = n[o] = {
            exports: {}
        };
        return e[o](i, i.exports, t),
        i.exports
    }
    t.n = function(e) {
        var n = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return t.d(n, {
            a: n
        }),
        n
    }
    ,
    t.d = function(e, n) {
        for (var o in n)
            t.o(n, o) && !t.o(e, o) && Object.defineProperty(e, o, {
                enumerable: !0,
                get: n[o]
            })
    }
    ,
    t.o = function(e, n) {
        return Object.prototype.hasOwnProperty.call(e, n)
    }
    ,
    function() {
        "use strict";
        t(924)
    }()
}();


  return (
    <Link to="/characters">

      {/* <!-- Slider main container --> */}
      <div className="container">
        {/* <!-- Slider Swiper Container --> */}
        <div className="swiper bsb-blog-pro-2">
          {/* <!-- Additional required wrapper --> */}
          <div className="swiper-wrapper mb-5 mb-md-6">
            {/* <!-- Slide 1 --> */}
            <div className="swiper-slide">
              <article>
                <div className="card border-0">
                  {/* Imagen a mostrar con un fadein  */}
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover" >
                    <a href="#!">
                      <Link to="/planets"><img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={SWLogo} alt="SW logo" /></Link>
                    </a>
                    <figcaption>
                      <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                    </figcaption>
                  </figure>

                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#">Character name</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-justify" >
                      "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the Death Star..."
                      <div className="text-end">
                        <button className="btn btn-outline-warning" onMouseOut={staticImage} onMouseOver={movingImage} onClick='Link to="/crafts"'><i className={status.icon} /></button>
                      </div>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Slide 2 --> */}
            <div className="swiper-slide">
              <article>
                <div className="card border-0">
                  {/* Imagen a mostrar con un fadein  */}
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover" >
                    <a href="#!">
                      <Link to="/planets"><img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={SWLogo} alt="SW logo" /></Link>
                    </a>
                    <figcaption>
                      <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                    </figcaption>
                  </figure>

                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#">Character name</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-justify" >
                      "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the Death Star..."
                      <div className="text-end">
                        <button className="btn btn-outline-warning" onMouseOut={staticImage} onMouseOver={movingImage} onClick='Link to="/crafts"'><i className={status.icon} /></button>
                      </div>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Slide 3 --> */}
            <div className="swiper-slide">
              <article>
                <div className="card border-0">
                  {/* Imagen a mostrar con un fadein  */}
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover" >
                    <a href="#!">
                      <Link to="/planets"><img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={SWLogo} alt="SW logo" /></Link>
                    </a>
                    <figcaption>
                      <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                    </figcaption>
                  </figure>

                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#">Character name</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-justify" >
                      "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the Death Star..."
                      <div className="text-end">
                        <button className="btn btn-outline-warning" onMouseOut={staticImage} onMouseOver={movingImage} onClick='Link to="/crafts"'><i className={status.icon} /></button>
                      </div>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Slide 4 --> */}
            <div className="swiper-slide">
              <article>
                <div className="card border-0">
                  {/* Imagen a mostrar con un fadein  */}
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover" >
                    <a href="#!">
                      <Link to="/planets"><img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={SWLogo} alt="SW logo" /></Link>
                    </a>
                    <figcaption>
                      <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                    </figcaption>
                  </figure>

                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#">Character name</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-justify" >
                      "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the Death Star..."
                      <div className="text-end">
                        <button className="btn btn-outline-warning" onMouseOut={staticImage} onMouseOver={movingImage} onClick='Link to="/crafts"'><i className={status.icon} /></button>
                      </div>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Slide 5 --> */}
            <div className="swiper-slide">
              <article>
                <div className="card border-0">
                  {/* Imagen a mostrar con un fadein  */}
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover" >
                    <a href="#!">
                      <Link to="/planets"><img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={SWLogo} alt="SW logo" /></Link>
                    </a>
                    <figcaption>
                      <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                    </figcaption>
                  </figure>

                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#">Character name</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-justify" >
                      "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the Death Star..."
                      <div className="text-end">
                        <button className="btn btn-outline-warning" onMouseOut={staticImage} onMouseOver={movingImage} onClick='Link to="/crafts"'><i className={status.icon} /></button>
                      </div>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- Slide 6 --> */}
            <div className="swiper-slide">
              <article>
                <div className="card border-0">
                  {/* Imagen a mostrar con un fadein  */}
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover" >
                    <a href="#!">
                      <Link to="/planets"><img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={SWLogo} alt="SW logo" /></Link>
                    </a>
                    <figcaption>
                      <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                    </figcaption>
                  </figure>

                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#">Character name</a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-justify" >
                      "It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire. During the battle, Rebel spies managed to steal secret plans to the Empire's ultimate weapon, the Death Star..."
                      <div className="text-end">
                        <button className="btn btn-outline-warning" onMouseOut={staticImage} onMouseOver={movingImage} onClick='Link to="/crafts"'><i className={status.icon} /></button>
                      </div>
                    </p>
                  </div>
                </div>
              </article>
            </div>
            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span className="swiper-pagination-bullet swiper-pagination-bullet-active"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
              <span className="swiper-pagination-bullet"></span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};