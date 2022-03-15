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


      </div>
    </div>
  </div>
);
export default VisaCard;
