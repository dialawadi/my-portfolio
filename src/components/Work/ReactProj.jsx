import React from 'react'
import {reactProjects} from '../../data';
import { SectionP, SectionSpan, SectionTitle } from "../Title";

export default function ReactProj({theme}) {
  const projects = reactProjects.map(project => {
    return (
      <div className={project.class} key={project.id}>
        <div className="card">
          <a href={project.href} rel="noreferrer" target="_blank"><img src={project.img} className="card-img-top img-fluid" alt="templates" /></a> 
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
      <SectionSpan className="fs-5 text-capitalize">react projects</SectionSpan>
        <SectionTitle className=" my-4 fw-bold fs-1 text-capitalize">react projects</SectionTitle>
        <SectionP className="fs-5  position-relative text-capitalize">here you can find my projects using react js</SectionP>
        <div className='row mt-5' data-aos="zoom-in">
          {projects}
        </div>
      </div>
    </div>
  )
}
