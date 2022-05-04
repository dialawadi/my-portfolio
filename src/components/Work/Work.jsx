import React from "react";
import { works } from "../../data";
import { SectionP, SectionSpan, SectionTitle } from "../Title";
import { Link } from "react-router-dom";
import './Work.css'

export default function Work({theme}) {
  const size = {
    width: "500px",
    height: "200px",

  }
  const myWorks = works.map((work) => {
    return (
      <div className={work.class} key={work.id}>
        <div className="card position-relative border-0">
          <div className="overlay"></div>
          <img
            src={work.img}
            className="card-img-top img-fluid"
            alt="works"
            style={size}
          />
          <div className="card-body">
            <Link to={work.href} className="btn bg-light fs-4">
              {work.projects}
            </Link>
          </div>
        </div>
      </div>
    )
  })
  return (
      <section className="work text-center py-5" id="work" data-theme={theme}>
        <div className="container">
          <SectionSpan className="fs-5">my work</SectionSpan>
          <SectionTitle className=" my-4 fw-bold fs-1">My Work</SectionTitle>
          <SectionP className="fs-5  position-relative">here you can find all my work and projects</SectionP>
          <div className="row mt-5" data-aos="zoom-in">
            {myWorks}
          </div>
        </div>
      </section>
  );
}
