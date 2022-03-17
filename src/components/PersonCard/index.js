/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import PropTypes from 'prop-types';
import style from './style.module.scss';

const PersonCard = ({ img, name, show }) => {
  const handleClick = () => {
    show(true);
  };

  return (
    <>
      {img && name ? (
        <div className={style.person} onClick={handleClick}>
          <img src={img} alt={name} />
          <p>{name}</p>
        </div>
      ) : (
        <div
          className={`${style.person} ${style.manual}`}
          onClick={handleClick}
        >
          <svg viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M6 20H11V22H6C4.89 22 4 21.11 4 20V4C4 2.9 4.89 2 6 2H18C19.11 2 20 2.9 20 4V10.3C19.78 10.42 19.57 10.56 19.39 10.74L18 12.13V4H13V12L10.5 9.75L8 12V4H6V20M22.85 13.47L21.53 12.15C21.33 11.95 21 11.95 20.81 12.15L19.83 13.13L21.87 15.17L22.85 14.19C23.05 14 23.05 13.67 22.85 13.47M13 19.96V22H15.04L21.17 15.88L19.13 13.83L13 19.96Z"
            />
          </svg>
          <p>Manual</p>
        </div>
      )}
    </>
  );
};

PersonCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  show: PropTypes.func.isRequired,
};
export default PersonCard;
