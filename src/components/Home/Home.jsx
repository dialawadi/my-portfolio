import React from "react";
import { socials } from '../../data';
import './Home.css';

export default function Home({theme}) {
  const socialIcons = socials.map(social => {
    return (
      <a
        href={social.href}
        className={social.class}
        rel="noreferrer"
        target="_blank"
        key={social.id}
      >
        {social.icon}
      </a>
    )
  })
  return (
    <>
      <main className="home  py-5" data-theme={theme}>
        <div className="container">
          <div className="row text-center d-flex flex-column flex-lg-row">
            <div className="col text-white d-flex justify-content-center align-items-center flex-column gap-4">
              <div className="socials d-flex gap-3 gap-sm-5 mb-4 fs-3" data-aos="zoom-in">
                {socialIcons}
              </div>
              <h2>front-end developer</h2>
              <p className="mt-4 fs-4 fw-bold" data-aos="zoom-in">
                Hi , my name is diala wadi I am front end web developer , welcome
                to my portfolio , enjoy seeing my work !
              </p>
              <a href="img/diala's CV.pdf" className="btn text-capitalize fs-4 get-started border border-2 mb-3 mb-lg-0" data-aos="zoom-in">download CV</a>
            </div>
            <div className="col">
              <img
                src="img/diala-removebg-preview.png"
                className="img-fluid"
                alt="diala"
                data-aos="zoom-in"
              />
            </div>
          </div>
        </div>
      </main>
      <div className="spikes-home"></div>
    </>

  );
}
