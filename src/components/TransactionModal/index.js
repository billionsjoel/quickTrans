/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import style from './style.module.scss';
import { sendMoney } from '../../redux/user/reducer';

const TransactionModal = ({ friend, hide }) => {
  const store = useSelector((reducer) => reducer);
  console.log(store);

  const dispatch = useDispatch();

  const close = (e) => {
    if (e.target.className.includes('modal')) {
      hide(false);
    }
  };

  const send = async (e) => {
    e.preventDefault();

    const sentAmount = e.target.elements.amount.value;
    const receiver = friend || e.target.elements.email.value.trim();

    const payload = {
      uid: store.user.uid,
      sentAmount,
      receiver,
      amount: store.user.amount - sentAmount,
      friends: [...store.user.friends],
      email: store.user.email,
    };

    payload.history = [
      {
        amount: sentAmount,
        description: e.target.elements.description.value.trim(),
        received: false,
        title: `Sent to (${receiver})`,
      },
      ...store.user.history,
    ];

    if (!payload.friends.includes(receiver)) {
      payload.friends.push(receiver);
    }

    await dispatch(sendMoney(payload));

    hide(false);
  };

  return (
    <div className={style.modal} onClick={close}>
      <div className={style.content}>
        <form onSubmit={send}>
          <h2>Make a transaction</h2>
          {!friend && (
            <input
              type="text"
              name="email"
              placeholder="Receiver Email"
              required
            />
          )}
          <input
            type="text"
            name="description"
            placeholder="Description"
            required
          />
          <input type="number" name="amount" min={0} max={1000} required />
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
