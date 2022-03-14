import style from './style.module.scss';
import Transaction from '../Transaction';

const History = () => {
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

  return (
    <div className={style.history}>
      <h2>Quick Transaction</h2>
      <h2>Recent Activity</h2>
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
  );
};
export default History;
