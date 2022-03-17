import { useState } from 'react';
import style from './style.module.scss';
import Transaction from '../Transaction';
import PersonCard from '../PersonCard';
import TransactionModal from '../TransactionModal';

const History = () => {
  const [showModal, setShowModal] = useState(false);

  const activities = [
    {
      receive: false,
      amount: 100,
      currency: 'USD',
      title: 'By a thing',
      description: 'Sending',
    },
    {
      receive: true,
      amount: 80,
      currency: 'USD',
      title: 'By a thing',
      description: 'Receiving',
    },
    {
      receive: false,
      amount: 105,
      currency: 'USD',
      title: 'By a thing',
      description: 'Cafe & restaurant',
    },
  ];

  const peps = [];

  return (
    <div className={style.history}>
      <h2>Quick Transaction</h2>
      <div className={style.carousel}>
        {showModal && <TransactionModal friend="" hide={setShowModal} />}
        <PersonCard name={false} img={false} show={setShowModal} />
        {peps.map((p) => (
          <PersonCard
            key={p.name}
            name={p.name}
            img={p.img}
            show={setShowModal}
          />
        ))}
      </div>
      <h2>Recent Activity</h2>
      <div className={style.list}>
        {activities.map((a) => (
          <Transaction
            key={a.amount}
            receive={a.receive}
            amount={a.amount}
            currency={a.currency}
            title={a.title}
            description={a.description}
          />
        ))}
      </div>
    </div>
  );
};
export default History;
