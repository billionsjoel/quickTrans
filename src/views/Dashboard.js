import style from './dashboard.module.scss';
import Sidebar from '../components/Sidebar';
import Visa from '../components/Visa';

const Dashboard = () => (
  <div className={style.dashboard}>
    <Sidebar />
    <Visa />
    <Visa />
  </div>
);
export default Dashboard;
