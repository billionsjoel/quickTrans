/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import style from './style.module.scss';

const TransactionModal = ({ friend, hide }) => {
  const close = (e) => {
    if (e.target.className.includes('modal')) {
      hide(false);
    }
  };

  const send = (e) => {
    e.preventDefault();
  };

  return (
    <div className={style.modal} onClick={close}>
      <div className={style.content}>
        <form onSubmit={send}>
          <h2>Make a transaction</h2>
          {!friend && <input type="text" placeholder="ID" required />}
          <input type="text" placeholder="Title" required />
          <input type="text" placeholder="Description" required />
          <input type="number" value={0} required />
          <button type="submit">Send</button>
        </form>
        <small>click outside to close the modal</small>
      </div>
    </div>
  );
};

TransactionModal.propTypes = {
  friend: PropTypes.string.isRequired,
  hide: PropTypes.func.isRequired,
};

export default TransactionModal;
