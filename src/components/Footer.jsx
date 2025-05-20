import React from 'react'
import tybLogo from "../assets/logoThomas.png"
import elmarLogoBlanco from "../assets/elmarLogoWhite.png"

const Footer = () => {
    return (
        <footer className='bg-fuchsia-975 mt-auto py-24'>
            <div className='container mx-auto flex flex-col'>
                <h1 className='orbitron text-2xl font-medium text-white tracking-widest '>
                    Contact
                </h1>
                <div className='flex flex-row w-full justify-between items-center'>
                    <div>
                        <img src={tybLogo} alt="" />
                    </div>
                    <div>
                        <p className='text-white text-xl'>General Management</p>
                        <p className='font-medium text-white text-xl'>Thomas Yaksic Beckdorf</p>
                    </div>
                    <div>
                        <p className='text-white text-xl'>contact@tybarts.com</p>
                        <p className='text-white text-xl'>+44 20 3535 5611</p>
                        <p className='text-white text-xl'>www.tybarts.com </p>
                        <div>
                            < i class='bxl  bx-linkedin'  ></i> 
                        </div>
                    </div>
                    <div>
                        <img src={elmarLogoBlanco} alt="" />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
