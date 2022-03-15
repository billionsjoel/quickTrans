import propTypes from 'prop-types';
import style from './style.module.scss';

const SideTile = ({ text, icon }) => (
  <button className={style.button} type="button">
    <span>{icon}</span>
    <span>{text}</span>
  </button>
);

SideTile.propTypes = {
  text: propTypes.string.isRequired,
  icon: propTypes.instanceOf(Object).isRequired,
};

export default SideTile;
