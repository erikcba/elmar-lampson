// ScrambleText.jsx
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const ScrambleText = forwardRef(({ text, className = '' }, ref) => {
  const el = useRef();
  const original = text;
  let interval = null;

  const scramble = () => {
    let iterations = 0;
    clearInterval(interval);
    const randomChar = () => {
      const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*';
      return chars[Math.floor(Math.random() * chars.length)];
    }
    interval = setInterval(() => {
      el.current.innerText = original
        .split('')
        .map((letter, i) => {
          if (i < iterations) return letter;
          return randomChar();
        })
        .join('');

      iterations += 1 / 8;
      if (iterations >= original.length) clearInterval(interval);
    }, 30);
  };

  // 👇 Permite que el padre llame a `scramble()` externamente
  useImperativeHandle(ref, () => ({
    triggerScramble: scramble
  }));

  return <h1 ref={el} className={className}>{text}</h1>;
});

export default ScrambleText;
