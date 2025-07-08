import { useEffect, useRef } from 'react';

const ScrambleText = ({ text, className = '' }) => {
  const ref = useRef();

  useEffect(() => {
    const el = ref.current;
    const original = text;
    let interval = null;

    const scramble = () => {
      let iterations = 0;
      clearInterval(interval);
      interval = setInterval(() => {
        el.innerText = original
          .split('')
          .map((letter, i) => {
            if (i < iterations) return letter;
            return String.fromCharCode(65 + Math.floor(Math.random() * 26));
          })
          .join('');

        iterations += 1 / 6;

        if (iterations >= original.length) clearInterval(interval);
      }, 40);
    };

    el.addEventListener('mouseenter', scramble);

    return () => {
      el.removeEventListener('mouseenter', scramble);
      clearInterval(interval);
    };
  }, [text]);

  return <h1 ref={ref} className={className}>{text}</h1>;
};

export default ScrambleText;
