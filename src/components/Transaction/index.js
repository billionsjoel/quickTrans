import style from './style.module.scss';

const Transaction = ({ receive, amount, currency, title, description }) => (
  <div className={style.transaction}>
    <div>
      {receive ? (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M13,5V11H14.17L12,13.17L9.83,11H11V5H13M15,3H9V9H5L12,16L19,9H15V3M19,18H5V20H19V18Z"
          />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M9,10V16H15V10H19L12,3L5,10H9M12,5.8L14.2,8H13V14H11V8H9.8L12,5.8M19,18H5V20H19V18Z"
          />
        </svg>
      )}
      <div className="details">
        <p>{title}</p>
        <span>{description}</span>
      </div>
    </div>
    <p>
      {`${receive ? '+' : '-'} ${amount} `}
      <b>{currency}</b>
    </p>
  </div>
);
export default Transaction;
