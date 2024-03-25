import HomeActiveIcon from "../../assets/icons/home_active.svg";
import HomeNormalIcon from "../../assets/icons/home_normal.svg";
import UserActiveIcon from "../../assets/icons/user_active.svg";
import UserNormalIcon from "../../assets/icons/user_normal.svg";
import WavesIcon from "../../assets/icons/waves.svg";
import HomeComp from "../../components/index/home";
import UserComp from "../../components/index/user";

type tabbarItemType = {
  index: number;
  icon: {
    default: string;
    active: string;
  };
  title?: string;
  comp?: React.FC;
  enableRefresh: boolean;
  className: string;
  iconClass?: string;
  mustLogin: boolean;
};

const tabbarItems: tabbarItemType[] = [
  {
    index: 0,
    icon: {
      default: HomeNormalIcon,
      active: HomeActiveIcon,
    },
    title: "首页",
    comp: HomeComp,
    className: "flex flex-1 flex-column height-110px flex-center",
    enableRefresh: true,
    mustLogin: false,
  },
  {
    index: 1,
    icon: {
      default: WavesIcon,
      active: WavesIcon,
    },
    title: "",
    className: "flex  flex-column  flex-center app-waves tabbar-box-shadow",
    iconClass: "icon",
    enableRefresh: true,
    mustLogin: false,
  },

  {
    index: 2,
    icon: {
      default: UserNormalIcon,
      active: UserActiveIcon,
    },
    title: "我的",
    comp: UserComp,
    className: "flex flex-1 flex-column height-110px flex-center",
    enableRefresh: true,
    mustLogin: false,
  },
];

export { tabbarItems };
