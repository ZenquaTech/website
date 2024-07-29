import React from 'react'
import {BsLinkedin,BsInstagram,BsGithub} from 'react-icons/bs'
import "./ui.css"
import { FaFacebookF  , FaTwitter} from "react-icons/fa";
import { GoDash } from "react-icons/go";



function HeaderSocial() {
  return (
    <div className="header__socials">
    <a className="linkedin-link" href="//www.linkedin.com/company/zenqua-technologies/" target='_blank'><BsLinkedin/></a>
    <a className="linkedin-link" href="//github.com/zenqua-technologies" target='_blank'><BsGithub/></a>
    <a className="linkedin-link" href="//www.instagram.com/zenqua_technologies/" target='_blank'><BsInstagram/></a>
    <a className="linkedin-link" href="//www.facebook.com/profile.php?id=61557762022662" target='_blank'><FaFacebookF/></a>
    <a className="linkedin-link" href="https://twitter.com/zenquaTech" target='_blank'><FaTwitter/></a>
    < GoDash className="blue-dash"/> 
    < h2 className='follow-us'>Follow Us</h2>


</div>
  )
}

export default HeaderSocial
