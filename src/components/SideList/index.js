import propTypes from 'prop-types';
import SideTile from '../SideTile';
import style from './style.module.scss';

const SideList = ({ array }) => (
  <ul className={style.list}>
    {
        array.map(({ text, icon }) => (
          <li key={text}>
            <SideTile
              text={text}
              icon={icon}
            />
          </li>
        ))
      }
  </ul>
);

SideList.propTypes = {
  array: propTypes.instanceOf(Array).isRequired,
};

export default SideList;
