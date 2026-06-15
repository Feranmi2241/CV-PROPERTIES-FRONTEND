import PropTypes from "prop-types";
import { useAuth } from "../../../context/AuthContext";
import styles from "./DashboardHeader.module.css";

const DashboardHeader = ({ className = "", loading = false }) => {
  const { admin } = useAuth();
  const firstName = admin?.user?.firstName || "Admin";
  const timeOfDay = new Date().getHours() < 12 ? "morning" : new Date().getHours() < 18 ? "afternoon" : "evening";

  return (
    <div className={[styles.dashboardHeader, className].join(" ")}>
      <div className={styles.headerTitleGroup}>
        <h3 className={styles.welcomeBackAdmin}>
          {loading ? "Loading..." : `Good ${timeOfDay}, ${firstName}! 👋`}
        </h3>
        <div className={styles.heresWhatsHappening}>
          {loading
            ? "Fetching your marketplace data..."
            : "Here's what's happening on your marketplace today."}
        </div>
      </div>
      <div className={styles.headerActions}>
        <div className={styles.container}>
          <img className={styles.imageIcon} alt="" src="/merged-asset-1.svg" />
          <div className={styles.filter}>Filter</div>
        </div>
        <div className={styles.button}>
          <img className={styles.imageIcon} alt="" src="/download.svg" />
          <div className={styles.export}>Export</div>
        </div>
      </div>
    </div>
  );
};

DashboardHeader.propTypes = {
  className: PropTypes.string,
  loading: PropTypes.bool,
};

export default DashboardHeader;
