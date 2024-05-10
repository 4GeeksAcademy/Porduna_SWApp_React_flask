import React from "react";
import { Link } from "react-router-dom";
import "../../styles/swiper.css";


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

export const Swiper = () => {
    return (
    <Link to="/swiper" className="py-3 py-md-5">
        <div className="container">
            <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
                <h3 className="fs-6 text-secondary mb-2 text-uppercase text-center">Our News</h3>
                <h1 className="display-5 mb-4 mb-md-5 text-center">Here is our blog's latest company news about regularly publishing fresh content.</h1>
                <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" /> 
            </div>
            </div>
        </div>

        {/* <!-- Slider main container --> */}
        <div className="container">
            {/* <!-- Slider Swiper Container --> */}
            <div className="swiper bsb-blog-pro-2 swiper-initialized swiper-horizontal swiper-backface-hidden">
            {/* <!-- Additional required wrapper --> */}
            <div className="swiper-wrapper mb-5 mb-md-6" id="swiper-wrapper-c0ccb1064ee1ec2b2" aria-live="polite" style="transform: translate3d(0px, 0px, 0px);">
                {/* <!-- Slides --> */}
                <div className="swiper-slide swiper-slide-active" style="width: 335.5px; margin-right: 25px;" role="group" aria-label="1 / 6">
                <article>
                    <div className="card border-0">
                    <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                        <a href="#!">
                        <img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src="https://bootstrapbrain.com/demo/components-pro/blogs-pro/blog-2/assets/img/blog-image-1.jpg" alt="Business"/>
                        </a>
                        <figcaption>
                        <i className="fa-solid fa-arrows-to-eye fa-fade" width="32" height="32" fill="currentColor" />
                        <h4 className="h6 text-white bsb-hover-fadeInRight mt-2">Read More</h4>
                        </figcaption>
                    </figure><span className="ezoic-autoinsert-video ezoic-under_first_paragraph"></span>
                    {/* <!-- ezoic_video_placeholder-under_first_paragraph-1280x720-999998-clearholder --><!-- ezoic_video_placeholder-under_first_paragraph-1280x720-999998-nonexxxclearxxxblock --><!-- ezoic_video_placeholder-under_first_paragraph-854x480-999998-clearholder --><!-- ezoic_video_placeholder-under_first_paragraph-854x480-999998-nonexxxclearxxxblock --><!-- ezoic_video_placeholder-under_first_paragraph-640x360-999998-clearholder --><!-- ezoic_video_placeholder-under_first_paragraph-640x360-999998-nonexxxclearxxxblock --><!-- ezoic_video_placeholder-under_first_paragraph-426x240-999998-clearholder --><!-- ezoic_video_placeholder-under_first_paragraph-426x240-999998-nonexxxclearxxxblock --><!-- ezoic_video_placeholder-under_first_paragraph-384x216-999998-clearholder --><!-- ezoic_video_placeholder-under_first_paragraph-384x216-999998-nonexxxclearxxxblock --> */}
                    <div className="card-body border bg-white p-4">
                        <div className="entry-header mb-3">
                        <ul className="entry-meta list-unstyled d-flex mb-2">
                            <li>
                            <a className="link-primary text-decoration-none" href="#!">Business</a>
                            </li>
                        </ul>
                        <h2 className="card-title entry-title h4 mb-0">
                            <a className="link-dark text-decoration-none" href="#!">Overcoming Challenges to Make a Living Online</a>
                        </h2>
                        </div>
                        <p className="card-text entry-summary text-secondary">
                        Making money online is attainable. However, even if the processes are simple, you may still need help with issues.
                        </p>
                    </div>
                    <div className="card-footer border border-top-0 bg-white p-4">
                        <ul className="entry-meta list-unstyled d-flex align-items-center m-0">
                        <li>
                            <a className="fs-7 link-secondary text-decoration-none d-flex align-items-center" href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-calendar3" viewBox="0 0 16 16">
                            <path d=""></path>
                            <path d=""></path>
                            </svg>
                            <span className="ms-2 fs-7">7 Feb 2023</span>
                            </a>
                        </li>
                        <li>
                            <span className="px-3">•</span>
                        </li>
                        <li>
                            <a className="link-secondary text-decoration-none d-flex align-items-center" href="#!">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" className="bi bi-chat-dots" viewBox="0 0 16 16">
                                <path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path>
                                <path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"></path>
                            </svg>
                            <span className="ms-2 fs-7">55</span>
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </article>
                </div>

            </div>

            {/* <!-- If we need pagination --> */}
            <div className="swiper-pagination position-relative bottom-0 swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal" style="--swiper-pagination-color: var(--bs-primary);  --swiper-pagination-bullet-size: 10px;"><span className="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 1" aria-current="true"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span className="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 5"></span></div>
            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
        </div>
    </Link>
    );
};