import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from "react-icons/md";
import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/MenuLink";
import Image from "next/image";
// import { auth, signOut } from "@/app/auth";

const menuItems = [
  {
    title: "Pages",
    list: [
      {
        title: "Dashboard",
        path: "/",
        icon: <MdDashboard />,
      },
      {
        title: "Users",
        path: "users",
        icon: <MdSupervisedUserCircle />,
      },
      {
        title: "Products",
        path: "products",
        icon: <MdShoppingBag />,
      },
      {
        title: "Transactions",
        path: "transactions",
        icon: <MdAttachMoney />,
        disabled: true,
      },
    ],
  },
  {
    title: "Analytics",
    list: [
      {
        title: "Revenue",
        path: "revenue",
        icon: <MdWork />,
        disabled: true,
      },
      {
        title: "Reports",
        path: "reports",
        icon: <MdAnalytics />,
        disabled: true,
      },
      {
        title: "Teams",
        path: "teams",
        icon: <MdPeople />,
        disabled: true,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Settings",
        path: "settings",
        icon: <MdOutlineSettings />,
        disabled: true,
      },
      {
        title: "Help",
        path: "help",
        icon: <MdHelpCenter />,
        disabled: true,
      },
    ],
  },
];

const Sidebar = async () => {
  // const { user } = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src={"/noavatar.png"}
          alt="user image"
          width={50}
          height={50}
        />
        <div className={styles.userDetail}>
          <span className={styles.userName}>Adham</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((item, index) => (
          <li key={index}>
            <span className={styles.cat}>{item.title}</span>
            {item.list.map((item, index) => (
              <MenuLink key={index} item={item} />
            ))}
          </li>
        ))}
      </ul>
      <form
        action={async () => {
          "use server";
          // await signOut();
        }}
      >
        <button className={`${styles.logout} ${styles.disabled}`}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar;
