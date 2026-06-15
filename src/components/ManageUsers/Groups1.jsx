import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Groups1.module.css";

const Groups1 = ({ className = "" }) => {
  return (
    <Box className={[styles.groups, className].join(" ")}>
      <Box className={styles.groups2}>
        <img
          className={styles.containerIcon}
          loading="lazy"
          alt=""
          src="/Container@2x.png"
        />
        <Box className={styles.groupsColumn1}>
          <Typography
            className={styles.rentconnect}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "900" }}
          >
            CV Properties
          </Typography>
          <div className={styles.adminPanel}>Admin Panel</div>
        </Box>
      </Box>
      <Box className={styles.groupsRow1}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/Image27.svg"
        />
        <div className={styles.dashboard}>Dashboard</div>
      </Box>
      <Box className={styles.button}>
        <Box className={styles.button2}>
          <Box className={styles.frame}>
            <Box className={styles.groups3}>
              <img
                className={styles.imageIcon2}
                loading="lazy"
                alt=""
                src="/Image43.svg"
              />
              <Box className={styles.users}>
                <div className={styles.dashboard}>Users</div>
              </Box>
              <Box className={styles.image}>
                <img
                  className={styles.imageIcon3}
                  loading="lazy"
                  alt=""
                  src="/Image24.svg"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.groups4}>
        <Box className={styles.groups5}>
          <div className={styles.manageUsers}>Manage Users</div>
          <Box className={styles.button3}>
            <Box className={styles.background} />
            <Box className={styles.groups6}>
              <div className={styles.addNewUser}>Add New User</div>
            </Box>
          </Box>
          <Box className={styles.sidebarNavItems}>
            <Box className={styles.navItem}>
              <img className={styles.listIcon} alt="" src="/list.svg" />
              <div className={styles.listings}>Listings</div>
            </Box>
            <Box className={styles.navItem2}>
              <img className={styles.listIcon} alt="" src="/briefcase.svg" />
              <div className={styles.listings}>Services</div>
            </Box>
            <Box className={styles.navItem}>
              <img
                className={styles.listIcon}
                alt=""
                src="/calendar-check.svg"
              />
              <div className={styles.listings}>Bookings</div>
            </Box>
            <Box className={styles.navItem}>
              <img className={styles.listIcon} alt="" src="/shield-check.svg" />
              <div className={styles.listings}>Verification</div>
            </Box>
            <Box className={styles.navItem5}>
              <img className={styles.listIcon} alt="" src="/credit-card.svg" />
              <div className={styles.listings}>{`Earnings & Transactions`}</div>
            </Box>
            <Box className={styles.navItem6}>
              <img className={styles.listIcon} alt="" src="/chart-column.svg" />
              <div className={styles.listings}>{`Reports & Analytics`}</div>
            </Box>
            <Box className={styles.navItem}>
              <img className={styles.listIcon} alt="" src="/bell.svg" />
              <div className={styles.listings}>Notifications</div>
            </Box>
            <Box className={styles.navItem6}>
              <img className={styles.listIcon} alt="" src="/settings.svg" />
              <div className={styles.listings}>Settings</div>
            </Box>
            <Box className={styles.navItem}>
              <img className={styles.listIcon} alt="" src="/history.svg" />
              <div className={styles.listings}>System Logs</div>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.groups7}>
        <Box className={styles.groups8}>
          <Box className={styles.frame2}>
            <Box className={styles.groups9}>
              <img className={styles.imageIcon4} alt="" src="/Image44.svg" />
              <Box className={styles.userInfo}>
                <div className={styles.adminUser}>Admin User</div>
                <div className={styles.sucntAdmcistiat}>
                  Super Administrator
                </div>
              </Box>
              <Box className={styles.image2}>
                <img
                  className={styles.imageIcon5}
                  loading="lazy"
                  alt=""
                  src="/Image26.svg"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Groups1.propTypes = {
  className: PropTypes.string,
};

export default Groups1;
