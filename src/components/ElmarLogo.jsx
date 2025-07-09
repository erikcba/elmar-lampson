import React, { useRef } from 'react';
import ScrambleText from './ScrambleText';

const ElmarLogo = ({ bgColor = '' }) => {
  const ref1 = useRef();
  const ref2 = useRef();

  const handleHover = () => {
    ref1.current?.triggerScramble();
    ref2.current?.triggerScramble();
  };

  return (
    <div
      className="flex flex-col items-start cursor-pointer w-fit"
      onMouseEnter={handleHover}
    >
      <ScrambleText
        ref={ref1}
        text="Elmar"
        className={`text-8xl font-bold ${bgColor} zilla-slab-regular pl-20 pr-4 mb-2 py-2 w-fit`}
      />
      <ScrambleText
        ref={ref2}
        text="Lampson"
        className={`text-8xl font-bold ${bgColor} zilla-slab-regular pr-20 pl-4 ml-8 pb-1 pt-2 w-fit`}
      />
    </div>
  );
};

export default ElmarLogo;
