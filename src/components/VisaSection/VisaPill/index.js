import { RiVisaLine } from 'react-icons/ri';
import style from './style.module.scss';

const VisaPill = () => (
  <div className={style.container}>
    <div className={style.pill}>
      <div className={style.currency}>
        <span className={style.figure}>
          3453
          <span className={style.zeros}>,000</span>
        </span>
        <span className={style.type}>USD</span>
      </div>


    </div>

  </div>
);
export default VisaPill;
