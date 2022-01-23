import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs';
import { FaFire, FaPoo } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg">

        <SideBarIcon icon={<FaFire size="28" />} />
        <Divider />
        <SideBarIcon2 icon={<BsPlus size="32" />} />
        <SideBarIcon3 icon={<BsFillLightningFill size="20" />} />
        <SideBarIcon4 icon={<FaPoo size="20" />} />
        <Divider />
        <SideBarIcon5 icon={<BsGearFill size="22" />} />
    </div>
  );
};

const SideBarIcon = ({ icon, text = 'Page of Batya' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const SideBarIcon2 = ({ icon, text = 'Mister ALKP ☺️ ' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const SideBarIcon3 = ({ icon, text = 'Krunkers' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const SideBarIcon4 = ({ icon, text = 'Balmond' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);

const SideBarIcon5 = ({ icon, text = 'Settings' }) => (
  <div className="sidebar-icon group">
    {icon}
    <span class="sidebar-tooltip group-hover:scale-100">
      {text}
    </span>
  </div>
);




const Divider = () => <hr className="sidebar-hr" />;

export default SideBar;