import style from './style.module.scss';
import Transaction from '../Transaction';
import PersonCard from '../PersonCard';

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

  const peps = [
    {
      name: 'Sergio',
      img: 'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    },
    {
      img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Christop',
    },
    {
      img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      name: 'Kakaroto',
    },
    {
      img: 'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80',
      name: 'Daniel',
    },
  ];

  return (
    <div className={style.history}>
      <h2>Quick Transaction</h2>
      <div className={style.carousel}>
        <PersonCard name={false} img={false} />
        {peps.map((p) => (
          <PersonCard key={p.name} name={p.name} img={p.img} />
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
