import PropTypes from "prop-types";
import styles from "./Container1.module.css";

const Container1 = ({ className = "" }) => {
  return (
    <header className={[styles.container, className].join(" ")}>
      <div className={styles.containerRow0}>
        <div className={styles.textbox}>
          <div className={styles.textbox2}>
            <img className={styles.searchIcon} alt="" src="/Search.svg" />
            <div className={styles.searchByUsers}>
              Search by users, listings, bookings...
            </div>
          </div>
        </div>
        <div className={styles.container2}>
          <div className={styles.container3}>
            <img className={styles.calendarIcon} alt="" src="/calendar.svg" />
            <div className={styles.may1May312024}>
              <div className={styles.may1}>May 1 - May 31, 2024</div>
            </div>
          </div>
        </div>
        <div className={styles.mergedAsset2}>
          <img
            className={styles.mergedAsset2Icon}
            alt=""
            src="/merged-asset-2.svg"
          />
        </div>
        <img className={styles.lineIcon} alt="" src="/Line1.svg" />
        <div className={styles.containerRow0Column4}>
          <div className={styles.adminUser}>Admin User</div>
          <div className={styles.superAdmin}>Super Admin</div>
        </div>
        <img className={styles.containerIcon} alt="" src="/Container6.svg" />
      </div>
      <img className={styles.lineIcon2} alt="" src="/Line3@2x.png" />
    </header>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
