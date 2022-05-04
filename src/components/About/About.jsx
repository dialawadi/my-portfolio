import React from 'react'
import { SectionP, SectionSpan, SectionTitle } from "../Title";
import './About.css'

export default function About({theme}) {
  return (
    <>
      <section className="about text-center py-5" id='about' data-theme={theme}>
        <div className="container">
          <SectionSpan className="fs-5">about me</SectionSpan>
          <SectionTitle className=" my-4 fw-bold fs-1 text-capitalize">about me</SectionTitle>
          <SectionP className="fs-5  position-relative">get to know me</SectionP>
          <div className="row mt-5 d-flex flex-column flex-lg-row">
            <div className='col text-center text-lg-start img-fluid'><img src='img/removed bg.png' alt="diala" data-aos="zoom-in" /></div>
            <div className='col text-start'>
              <h2 className='text-capitalize fw-bold mt-5 mt-lg-0' data-aos="zoom-in">my profile</h2>
              <div className='profile-table row' data-aos="zoom-in">
                <div className='col d-flex flex-column mt-3 gap-2 fw-bold text-capitalize'>
                  <span>name</span>
                  <span>age</span>
                  <span>address</span>
                  <span>phone number</span>
                  <span>email</span>
                </div>
                <div className='col d-flex flex-column mt-3 gap-2 text-capitalize'>
                  <span>diala wadi</span>
                  <span>22</span>
                  <span>amman-jordan</span>
                  <span>+962781860685</span>
                  <span>dialaghassan1366@gmail.com</span>
                </div>
                <h2 className='text-capitalize fw-bold mt-5'>my skills</h2>
                <div className='col d-flex flex-column mt-3 gap-2 text-capitalize'>
                  <span className='text-uppercase'>html5</span>
                  <span className='text-uppercase'>css3</span>
                  <span>javascript</span>
                  <span>react js</span>
                  <span>bootsrap</span>
                  <span>dealing with API</span>
                </div>
                <div className='col'><img src='img/skills.png' alt='skills' className='img-fluid' /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="spikes-about"></div>
    </>

  )
}
