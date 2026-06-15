import PropTypes from "prop-types";
import styles from "./DashboardHeader.module.css";

const DashboardHeader = ({ className = "" }) => {
  return (
    <div className={[styles.dashboardHeader, className].join(" ")}>
      <div className={styles.headerTitleGroup}>
        <h3 className={styles.welcomeBackAdmin}>Welcome back, Admin! 👋</h3>
        <div className={styles.heresWhatsHappening}>
          Here's what's happening on your marketplace today.
        </div>
      </div>
      <div className={styles.headerActions}>
        <div className={styles.container}>
          <img className={styles.imageIcon} alt="" src="/Image187.svg" />
          <div className={styles.filter}>Filter</div>
        </div>
        <div className={styles.button}>
          <img className={styles.imageIcon} alt="" src="/Download.svg" />
          <div className={styles.export}>Export</div>
        </div>
      </div>
    </div>
  );
};

DashboardHeader.propTypes = {
  className: PropTypes.string,
};

export default DashboardHeader;
