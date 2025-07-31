import React from 'react'
import tybLogo from "../assets/logoThomas.png"
import logoSky from "../assets/logo-sky.png"
import facebook from "../assets/facebookIcon.png"
import youtube from "../assets/youtubeIcon.png"
import instagram from "../assets/instagramIcon.png"

const Footer = () => {
    return (
        <footer id='contact' className='bg-fuchsia-975 mt-auto sm:py-12 py-8 z-20 relative'>
            <div className='container mx-auto flex flex-col sm:items-start items-center sm:gap-4 gap-8 px-10 xl:px-0'>
                <h1 className='xl:text-4xl sm:text-3xl text-xl font-medium text-white mx-auto lg:mx-0 tracking-widest md:pb-6'>
                    Contact
                </h1>
                <div className='flex lg:flex-row flex-col w-full justify-between lg:items-start items-center  lg:gap-8 gap-10'>
                    <div className='flex items-center justify-center'>
                        <img className='sm:w-full md:w-3/4 w-2/3' src={tybLogo} alt="" />
                    </div>
                    <div className='sm:text-left text-center'>
                        <p className='text-white text-xl'>General Management</p>
                        <p className='font-medium text-white text-xl'>Thomas Yaksic Beckdorf</p>
                    </div>
                    <div className='sm:text-left text-center'>
                        <a href="mailto:contact@tybarts.com" className='text-white text-xl'>contact@tybarts.com</a>
                        <p className='text-white text-xl'>+44 20 3535 5611</p>
                        <a href="https://www.tybarts.com" target="_blank" rel="noreferrer" className='text-white text-xl'>www.tybarts.com </a>

                    </div>
                    <div className='relative pl-12 sm:pb-0 pb-16 w-fit'>
                        <img className='md:w-3/5 lg:w-3/4 2xl:w-full' src={logoSky} alt="" />
                        <div className='flex flex-row items-center gap-2 md:gap-0 xl:gap-2 pt-4 h-fit absolute bottom-0 right-1/4 sm:top-5 sm:right-0 md:top-0 md:right-1/4 lg:right-0 xl:right-17 xl:top-2 lg:-top-2 2xl:right-0 2xl:top-5'>
                            <a href="https://www.instagram.com/elmarlampson/" target="_blank" rel="noreferrer" className='p-2 rounded-full h-fit '>
                               <img src={instagram} alt="" />
                            </a>

                            <a href="https://www.linkedin.com/search/results/all/?fetchDeterministicClustersOnly=true&heroEntityKey=urn%3Ali%3Afsd_profile%3AACoAAE0f1IABe4DhJOGmgchKYW75GQOT6wGaLNg&keywords=elmar%20lampson&origin=RICH_QUERY_SUGGESTION&position=0&searchId=5116bbfe-690d-48d0-802c-2a46fade8730&sid=ZFv&spellCorrectionEnabled=false" target="_blank" rel="noreferrer" className='p-2 rounded-full '>
                              <img src={facebook} alt="" />
                            </a>

                            <a href="https://www.instagram.com/elmarlampson/" target="_blank" rel="noreferrer" className='p-2 rounded-full h-fit '>
                                <img src={youtube} alt="" />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
