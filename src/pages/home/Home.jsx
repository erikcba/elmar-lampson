import React from 'react'
import imgMusic from '../../assets/myMusic-img.png'
import arrowDown from '../../assets/arrow-down.png'
import newsVector from '../../assets/newsFondo.png'
import aboutHomeImg from '../../assets/about-home.jpg'
import divisor from '../../assets/divisor.png'


const Home = () => {
  return (
    <div>
      <section id='hero' className='bg-hero'>

      </section>
      <section id='news' className='bg-gray-100  mt-10' >
        <div className='bg-news pt-32'>
          <div className='container flex flex-row justify-start mx-auto pl-12'>
            <div className="relative w-3xs">
              <h1 className='bg-fuchsia-975-80 flex items-center justify-center w-fit h-fit text-gray-300 pb-2 pt-2 pl-10 font-normal text-6xl relative z-10'>
                News
              </h1>
              <img
                className='absolute left-1/2 top-4 -translate-x-1/2 mt-[-30px] z-0 w-max h-max '
                src={newsVector}
                alt=""
              />
            </div>
            <p className='font-bold text-3xl w-1/3 text-fuchsia-975 ml-4 '>
              Waves <br />
              A new opera by Elmar Lampson
              with a libretto by Julia Spinola after
              Eduard von Keyserling
            </p>
            <a href="" className='font-normal text-2xl text-fuchsia-975 self-center flex flex-row items-center justify-start gap-2 pt-10'>
              <img src={arrowDown} alt="" />
              Read more
            </a>
          </div>
        </div>
      </section>
      <section id='about' className='pt-20 bg-gray-100 relative'>
        <div className='container flex flex-row h-[950px] justify-center items-center mx-auto'>
          <div className='flex flex-row items-start justify-center gap-10 h-full'>
            <div className='w-1/2 h-full flex flex-col items-center justify-start gap-16'>
              <div className='h-1/2 flex flex-col justify-center items-start gap-12'>
                <h1 className='bg-fuchsia-975-80 text-gray-100 font-normal text-6xl ml-16 w-fit pl-4 pt-3 pr-2 pb-2'>
                  About
                </h1>
                <p className='text-3xl font-light'>
                  Born in Koblenz, Germany, Elmar Lampson is a renowned
                  composer, conductor, and music educator.
                </p>
              </div>
              <div className='h-1/2 ml-auto flex flex-row justify-center items-start gap-2'>
                <a href="" className='text-2xl font-normal text-gray-900'>Read more</a>
                <img className='h-fit' src={arrowDown} alt="" />
              </div>
            </div>
            <div className='w-1/2 h-[870px] overflow-hidden py-24 px-12 z-10'>
              <img className='w-full object-cover scale-140 -translate-y-70 -translate-x-20' src={aboutHomeImg} alt="" />
            </div>
          </div>
        </div>
        <div className='h-fit bg-transparent absolute bottom-1 z-0'>
          <img src={divisor} alt="" />
        </div>
      </section>
      <section id="myMusic" className="pt-10 bg-gray-100">

      </section>
      <img src={imgMusic} alt="" />
      <section id='media' className='mt-10'>

      </section>
    </div>
  )
}

export default Home
