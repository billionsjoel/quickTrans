/* eslint-disable no-tabs */
import style from './visa.module.scss';
import CreditPanel from './VisaSection/CreditPanels';
import VisaCard from './VisaSection/VisaCard';
import VisaPill from './VisaSection/VisaPill';

const Visa = () => (
  <div className={style.visa}>
    <div className={style.heading}>
      <div className={style.title}>
        <h2>Your cards</h2>
        <div className={style.visa_btn}>
          <span className={style.text}>Add new</span>
          <button type="button">+</button>
        </div>
      </div>
    </div>
    <VisaCard />
    <VisaPill />
    <VisaPill />

  </div>
);

export default Visa;
