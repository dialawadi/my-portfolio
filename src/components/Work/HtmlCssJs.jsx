import React from 'react'
import { htmlCssJsProjects } from '../../data'
import { SectionP, SectionSpan, SectionTitle } from "../Title";


export default function HtmlCssJs({theme}) {
  const projects = htmlCssJsProjects.map(project => {
    return (
      <div className={project.class} key={project.id}>
        <div className="card">
          <img src={project.img} className="card-img-top img-fluid" alt="templates" />
          <div className="card-body">
            <a href={project.href} rel="noreferrer" target="_blank" className='text-decoration-none fw-bold'><p className='card-text'>{project.text}</p></a>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div className='projects-section py-5 text-center' data-theme={theme}>
      <div className='container'>
        <SectionSpan className="fs-5 text-uppercase">html5 & css3 & js</SectionSpan>
        <SectionTitle className=" my-4 fw-bold fs-1 text-uppercase">html5 & css3 & js</SectionTitle>
        <SectionP className="fs-5  position-relative text-capitalize">here you can find my projects using html5 , css3 and javascript</SectionP>
        <div className='row mt-5' data-aos="zoom-in">
          {projects}
        </div>
      </div>
    </div>
  )
}
