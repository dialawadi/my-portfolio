import React from 'react'
import './Footer.css'
import { GiOppositeHearts } from 'react-icons/gi'
import { socials } from '../../data'

export default function Footer({theme}) {
  const icons = socials.map(social => {
    return (
      <a href={social.href} className={social.class} key={social.id} rel="noreferrer"
        target="_blank"> {social.icon} </a>
    )
  })
  return (
    <footer className='p-3 text-center' data-theme={theme}>
      <h3 className='fw-bold'>contact me</h3>
      <div className='socials d-flex justify-content-center align-items-center gap-2 mt-3 fs-3'>
        {icons}
      </div>
      <p className='mt-3 fs-5'>made with love by diala <GiOppositeHearts /></p>
    </footer>
  )
}
