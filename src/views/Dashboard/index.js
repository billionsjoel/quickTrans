import style from './style.module.scss';
import Sidebar from '../../components/Sidebar';
import Visa from '../../components/Visa';
import History from '../../components/History';

const Dashboard = () => (
  <div className={style.dashboard}>
    <div className={style.dashboardLine}>
      <Sidebar />
    </div>
    <main className={style.mainContainer}>
      <Visa />
      <History />
    </main>
  </div>
);
export default Dashboard;
