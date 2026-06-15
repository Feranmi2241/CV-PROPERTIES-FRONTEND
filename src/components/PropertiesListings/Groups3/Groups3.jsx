import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Groups3.module.css";

const Groups3 = ({ className = "" }) => {
  return (
    <Box className={[styles.groups, className].join(" ")}>
      <Box className={styles.groups2}>
        <Box className={styles.frame}>
          <Box className={styles.groups3}>
            <img className={styles.imageIcon} alt="" src="/Image26.svg" />
            <div className={styles.adminUser}>Admin User</div>
            <img className={styles.imageIcon2} alt="" />
            <div className={styles.sucntAdmcistiat}>Super Administrator</div>
          </Box>
        </Box>
      </Box>
      <Box className={styles.groups4}>
        <img className={styles.briefcaseIcon} alt="" />
        <div className={styles.services}>Services</div>
        <img
          className={styles.calendarCheckIcon}
          alt=""
          src="/calendar-check.svg"
        />
        <div className={styles.bookings}>Bookings</div>
        <img
          className={styles.shieldCheckIcon}
          alt=""
          src="/shield-check.svg"
        />
        <div className={styles.verification}>Verification</div>
        <img className={styles.creditCardIcon} alt="" src="/credit-card.svg" />
        <div
          className={styles.earningsTransactions}
        >{`Earnings & Transactions`}</div>
        <img className={styles.chartColumnIcon} alt="" />
        <div className={styles.reportsAnalytics}>{`Reports & Analytics`}</div>
        <img className={styles.bellIcon} alt="" />
        <div className={styles.notifications}>Notifications</div>
        <img className={styles.settingsIcon} alt="" />
        <div className={styles.settings}>Settings</div>
        <img className={styles.historyIcon} alt="" />
        <div className={styles.systemLogs}>System Logs</div>
        <Box className={styles.groups5}>
          <div className={styles.addNewListing}>Add New Listing</div>
        </Box>
        <Box className={styles.groups6}>
          <Box className={styles.button}>
            <Box className={styles.frame2}>
              <img className={styles.imageIcon3} alt="" src="/Image76.svg" />
              <img className={styles.listIcon} alt="" src="/list.svg" />
              <div className={styles.listings}>Listings</div>
            </Box>
          </Box>
        </Box>
      </Box>
      <img className={styles.usersIcon} alt="" src="/users.svg" />
      <div className={styles.users}>Users</div>
      <img className={styles.imageIcon4} alt="" />
      <Box className={styles.groups7}>
        <div className={styles.adminPanel}>Admin Panel</div>
        <Typography
          className={styles.rentconnect}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "900", fontSize: "17px" }}
        >
          CV Properties
        </Typography>
        <img
          className={styles.containerIcon}
          loading="lazy"
          alt=""
          src="/Container@2x.png"
        />
      </Box>
      <div className={styles.dashboard}>Dashboard</div>
    </Box>
  );
};

Groups3.propTypes = {
  className: PropTypes.string,
};

export default Groups3;
