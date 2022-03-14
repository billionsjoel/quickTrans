import SideList from '../SideList';
import { endlist, startlist } from './data';
import style from './style.module.scss';

const Sidebar = () => (
  <div className={style.sidebar}>
    <SideList array={startlist} />
    <SideList array={endlist} />
  </div>
);

export default Sidebar;
