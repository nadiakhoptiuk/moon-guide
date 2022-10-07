import video1 from 'video/moon1.webm';
import video from 'video/moon2.mov';

export default function Video({ className }) {
  return (
    <>
      <video autoPlay muted loop className={className} playsInline>
        <source src={video} type="video/quicktime" />
        <source src={video1} type="video/webm" />
      </video>
    </>
  );
}
