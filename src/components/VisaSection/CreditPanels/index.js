/* eslint-disable no-tabs */
/* eslint-disable no-mixed-spaces-and-tabs */
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { HiChevronRight } from 'react-icons/hi';

import style from './style.module.scss';
import 'react-circular-progressbar/dist/styles.css';

function CreditPanel() {
  return (
    <div className={style.container}>
      <hr />
      <div className={style.bar}>
        <div className={style.bar__left}>
          <CircularProgressbar
            value={60}
            strokeWidth={50}
            styles={buildStyles({
						  strokeLinecap: 'butt',
						  pathColor: '#2f345f',
						  trailColor: '#ebe6e6',
            })}
            className={style.progress}
          />
          <div className={style.credit__limit}>
            <h6>Credit limit</h6>
            <span className={style.values}>500 / 1000</span>
            <span className={style.curr}>EUR</span>
          </div>
        </div>

        <HiChevronRight className={style.chev} />
      </div>
     
    </div>
  );
}

export default CreditPanel;
