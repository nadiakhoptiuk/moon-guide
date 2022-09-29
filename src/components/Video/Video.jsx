import video1 from '../../video/moon1.webm';
import video from '../../video/moon.mov';
import s from './Video.module.css';

export default function Video() {
  return (
    <>
      <video autoPlay muted loop className={s.video}>
        <source src={video1} type="video/webm" />
        <source src={video} type="video/mov" />
      </video>
    </>
  );
}
