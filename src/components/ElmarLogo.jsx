import React, { useRef } from 'react'
import ScrambleText from './ScrambleText'
import { Link } from 'react-router-dom'

const ElmarLogo = ({ bgColor = '' }) => {
  const ref1 = useRef()
  const ref2 = useRef()

  const handleHover = () => {
    ref1.current?.triggerScramble()
    ref2.current?.triggerScramble()
  }

  return (
    <Link
      to="/"
      className="flex flex-col items-start cursor-pointer w-fit"
      onMouseEnter={handleHover}
    >
      <ScrambleText
        ref={ref1}
        text="Elmar"
        className={`xl:text-8xl text-4xl select-none font-bold ${bgColor} zilla-slab-regular pl-10 xl:pl-20 pr-2 xl:pr-4 mb-2 py-2 w-fit`}
      />
      <ScrambleText
        ref={ref2}
        text="Lampson"
        className={`xl:text-8xl text-4xl select-none font-bold ${bgColor} zilla-slab-regular pr-10 xl:pr-20 pl-2 xl:pl-4 ml-8 pb-1 pt-2 w-fit`}
      />
    </Link>
  );
};

export default ElmarLogo;
