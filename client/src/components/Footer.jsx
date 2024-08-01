import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'
import AngleLogo from '../assets/ANGLE.png'
import { BsFacebook, BsInstagram, BsWhatsapp, BsGithub, BsTwitter, BsPinterest } from 'react-icons/bs'


export default function FooterCoomponent() {
  return (
    <Footer container className='border border-t-8 border-teal-500'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className='mt-5 m-24'>
                    <img
                        src={AngleLogo}
                        alt='Angle Software Company'
                        className="w-40 h-41 border-gray-100 shadow-sm transition-transform transform hover:scale-125" 
                    />
                </div>
                <div className="grid grid-cols-2 gap-5 mt-4 sm:grid-cols-3 sm:gap-6">
                    <div>
                        <Footer.Title className='font-extrabold' title='Legal'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>
                                Privacy Policy
                            </Footer.Link>
                            <Footer.Link href='#'>
                                Terms and Conditions
                            </Footer.Link>

                        </Footer.LinkGroup>
                    </div>
                    <div>
                        <Footer.Title className='font-extrabold' title='Contact'/>
                        <Footer.LinkGroup col>
                            <Footer.Link href='#'>
                                connect@anglesoftware.com
                            </Footer.Link>
                            <Footer.Link href='#'>
                                official@anglesoftware.com
                            </Footer.Link>
                            <p className='mt-9'>
                                +91 ##### #####
                            </p>

                        </Footer.LinkGroup>
                    </div>
                    <div className=''>
                        <Footer.Title className='font-extrabold' title='Follow Us'/>
                        <Footer.LinkGroup className='flex mr-8 gap-4'>
                            <Footer.Icon href='#' icon={BsFacebook}/>
                            <Footer.Icon href='#' icon={BsInstagram}/>
                            <Footer.Icon href='#' icon={BsTwitter}/>
                            <Footer.Icon href='https://github.com/Mukesh-Kumar-Balusami' target='_blank' rel='noopener noreferrer' icon={BsGithub}/>
                            <Footer.Icon href='#' icon={BsWhatsapp}/>
                            <Footer.Icon href='#' icon={BsPinterest}/>
                        </Footer.LinkGroup>
                    </div>
                </div>
            </div>
            <Footer.Divider/>
            <div className="">
                <Footer.Copyright
                    href='#'
                    by='Angle Software Company'
                    year={new Date().getFullYear()}
                />
            </div>
        </div>
    </Footer>
  )
}
