import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  return (
    <div className={styles.main}>
      <Navbar></Navbar>
      <div className={styles.container}>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
