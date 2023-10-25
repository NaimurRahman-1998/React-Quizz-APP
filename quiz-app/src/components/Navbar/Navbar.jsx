import styles from "./Navbar.module.css";
import logo from '../../assets/logo-bg.png'
const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <a href="#" className={styles.brand}>
            <img src={logo} alt="" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <div className={styles.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <a href="#">Signup</a>
        <span className="material-icons-outlined" title="Logout"> logout </span> 
      </div>
    </nav>
  );
};

export default Navbar;
