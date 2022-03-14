import style from './style.module.scss';

const VisaPill = () => (
  <div className={style.pill}>
    <div>
      <div className="amount">4096</div>
      <div className="currency">USD</div>
    </div>
    <div>
      <div className="card-number">...5456</div>
      <div className="logo"><img src="https://images.unsplash.com/photo-1647228969057-9a503a852097?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="splash" /></div>
    </div>
  </div>
);
export default VisaPill;
