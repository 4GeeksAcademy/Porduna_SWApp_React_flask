import React, { useState } from "react";
import { Link } from "react-router-dom";
import SWLogo from "../../img/Star_Wars_Logo.png";


export const Characters = () => {
  const [status, setStatus] = useState({ icon: "fa-solid fa-book-journal-whills" });


  const imageSwitch = () => {
    if (true) {
      setStatus({ icon: "fa-solid fa-book-journal-whills fa-flip" });
    } else {
      setStatus({ icon: "fa-solid fa-book-journal-whills" });
      }
  };

  return (
    <Link to="/characters">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="shadow p-3 col-3">
            <div className="carousel carousel-dark slide" >
              <article>
                <div className="card border-0">
                  <figure className="card-img-top m-0 overflow-hidden bsb-overlay-hover">
                    <a href="#!">
                      <Link to="/characters"><img className="img-fluid bsb-scale bsb-hover-scale-up" loading="lazy" src={SWLogo} alt="SW logo" /></Link>
                    </a>
                    <figcaption>
                      <i className="fa-solid fa-arrows-to-eye fa-fade" fill="currentColor">
                      </i>
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
                        <button className="btn btn-outline-warning" onMouseOut={imageSwitch} onMouseOver={imageSwitch}><i className={status.icon} /></button>
                      </div>
                    </p>
                  </div>

                </div>
              </article>
            </div>
            {/* <div className="card shadow-sm">
                    <svg className="bd-placeholder-img card-img-top" width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: " preserveAspectRatio="xMidYMid slice" focusable="false">
                        <title>Placeholder</title>
                        <rect width="100%" height="100%" fill="#55595c"></rect>
                        <text x="50%" y="50%" fill="#eceeef" dy=".3em">whatever</text></svg>
                    <div className="card-body">
                        <h3 className="card-text">Lorem ipsum</h3>
                        <p className="card-text mb-auto">Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                            <Link to="/characters"><button type="button" className="btn btn-sm btn-outline-secondary">Details</button></Link>
                                <button type="button" className="btn btn-sm btn-outline-secondary">
                                <i className="fa-regular fa-star" />
                                </button>
                            </div>
                            <small className="text-muted"></small>
                        </div>
                    </div>
                </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
};