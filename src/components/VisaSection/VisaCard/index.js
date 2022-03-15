import {
  HiMap,
  HiOutlineDotsVertical,
  HiOutlineDuplicate,
} from 'react-icons/hi';
import style from './style.module.scss';

const VisaCard = () => (
  <div className={style.container}>
    <div className={style.card}>
      <div className={style.card__info}>
        <div className={style.logo}>
          <span className={style.icon}>
            <HiMap className={style.svg} />
          </span>
          <span className={style.text}>Visa</span>
        </div>
        <div className={style.kebab__menu}>
          <HiOutlineDotsVertical className={style.kebab} />
        </div>
      </div>
      <div className={style.card__date}>04/25</div>
      <div className={style.card__footer}>
        <div className={style.currency}>
          <span className={style.figure}>
            245
            <span className={style.zeros}>,000</span>
          </span>
          <span className={style.type}>USD</span>
        </div>

        <div className={style.more}>
          <span>...5460</span>
          <button type="button">
            <HiOutlineDuplicate className={style.svg} />
          </button>
        </div>
      </div>
    </div>
  </div>
);
export default VisaCard;
