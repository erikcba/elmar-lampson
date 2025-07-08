import React from 'react';
import ScrambleText from './ScrambleText';

const ElmarLogo = () => {
  return (
    <div className="flex flex-col items-start">
      <ScrambleText text="Elmar" className="text-5xl font-bold text-fuchsia-700" />
      <ScrambleText text="Lampson" className="text-5xl font-bold text-fuchsia-700" />
    </div>
  );
};

export default ElmarLogo