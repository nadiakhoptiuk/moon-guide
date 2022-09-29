import Sprite from '../../images/sprite.svg';
import PropTypes from 'prop-types';

export default function Icon({ iconId, width, height, style, className }) {
  return (
    <svg width={width} height={height} style={style} className={className}>
      <use href={`${Sprite}#${iconId}`}></use>
    </svg>
  );
}

Icon.propTypes = {
  iconId: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  style: PropTypes.object,
  className: PropTypes.object,
};
