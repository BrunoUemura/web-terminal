import styles from "./styles.module.scss";
import banner from "../../assets/banner.png";

export default function Header() {
  return (
    <div className={styles.header}>
      <p>Bruno Uemura (BU) Not a Corporation. No rights reserved.</p>
      <img src={banner} alt="banner" />
      <p>Welcome to my interactive web terminal.</p>
      <p>For a list of available commands, type 'help'.</p>
    </div>
  );
}
