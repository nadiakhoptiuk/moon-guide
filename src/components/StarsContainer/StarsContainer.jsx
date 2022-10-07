import { useEffect, useState } from 'react';
import s from './StarsContainer.module.css';

export default function StarsContainer() {
  const starsCount = 3;
  const [starsArray, setStarsArray] = useState(new Array(starsCount));

  useEffect(() => {
    starsArray.length = starsCount;

    const newStarsArray = starsArray.fill(0);
    setStarsArray(newStarsArray);
  }, [starsArray]);

  return (
    <div className={s.starsContainer}>
      <span className={s.star}></span>
      <span className={s.star}></span>
    </div>
  );
}
