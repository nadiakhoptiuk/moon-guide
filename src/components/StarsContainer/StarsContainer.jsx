import { useEffect, useState } from 'react';
import s from './StarsContainer.module.css';

export default function StarsContainer() {
  const starsCount = 3;
  const [starsArray, setStarsArray] = useState([]);

  useEffect(() => {
    starsArray.length = starsCount;

    console.log(starsArray);
    const newStarsArray = starsArray.fill(0);
    setStarsArray(newStarsArray);
  }, [starsArray]);

  return (
    <div className={s.starsContainer}>
      {starsArray?.map((star, index) => {
        return <span key={index} className={s.star}></span>;
      })}
    </div>
  );
}
