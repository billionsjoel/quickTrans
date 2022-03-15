import { FaHome } from 'react-icons/fa';
import { BsCreditCard2Back, BsFillPieChartFill } from 'react-icons/bs';
import { MdOutlinePayments } from 'react-icons/md';
import { GiStarFormation } from 'react-icons/gi';
import { AiFillSetting } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';

export const startlist = [
  {
    icon: <FaHome />,
    text: 'Overview',
  },
  {
    icon: <BsCreditCard2Back />,
    text: 'Cards',
  },
  {
    icon: <MdOutlinePayments />,
    text: 'Payments',
  },
  {
    icon: <BsFillPieChartFill />,
    text: 'My stats',
  },
  {
    icon: <GiStarFormation />,
    text: 'Referrals',
  },
];
export const endlist = [

  {
    icon: <VscAccount />,
    text: 'Account',
  },
  {
    icon: <AiFillSetting />,
    text: 'Settings',
  },
];
