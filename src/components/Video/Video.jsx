import video from '../../video/moon.mp4';
import video1 from '../../video/moon1.webm';
import s from './Video.module.css';

export default function Video() {
  return (
    <>
      <div className={s.videoWrapper}>
        <video autoPlay muted loop className={s.video}>
          <source src={video} type="video/mp4" />
          <source src={video1} type="video/webm" />
        </video>
      </div>
    </>
  );
}
