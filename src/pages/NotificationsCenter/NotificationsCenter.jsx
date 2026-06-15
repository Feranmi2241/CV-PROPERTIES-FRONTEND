import { Typography, Box, TextField } from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Container3 from "../../components/NotificationsCenter/Container3/Container3";
import Container1 from "../../components/NotificationsCenter/Container1/Container1";
import styles from "./NotificationsCenter.module.css";

const NotificationsCenter = () => {
  return (
    <MainLayout adminName="Admin User" adminRole="Super Admin">
    <Box className={styles.manageUsers}>
      <Box className={styles.container}>
        <Box className={styles.brandHeader}>
          <img
            className={styles.mergedAsset1Icon}
            loading="lazy"
            alt=""
            src="/merged-asset-1@2x.png"
          />
          <Box className={styles.brandText}>
            <Typography
              className={styles.cvProperties}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "700", lineHeight: "var(--lh-23)" }}
            >
              CV Properties
            </Typography>
            <div className={styles.adminPanel}>Admin Panel</div>
          </Box>
        </Box>
        <Box className={styles.navMenu}>
          <section className={styles.navItemsList}>
            <Box className={styles.navItemDashboard}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/layout-dashboard1.svg"
              />
              <div className={styles.dashboard}>Dashboard</div>
            </Box>
            <Box className={styles.navItemUsers}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/users1.svg"
              />
              <div className={styles.dashboard}>Users</div>
            </Box>
            <Box className={styles.navItemListings}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/house1.svg"
              />
              <div className={styles.dashboard}>Listings</div>
            </Box>
            <Box className={styles.navItemUsers}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/briefcase1.svg"
              />
              <div className={styles.dashboard}>Services</div>
            </Box>
            <Box className={styles.container2}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/calendar-check.svg"
              />
              <div className={styles.bookings}>Bookings</div>
            </Box>
            <Box className={styles.navItemDashboard}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/shield-check1.svg"
              />
              <div className={styles.dashboard}>Verification</div>
            </Box>
            <Box className={styles.navItemUsers}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/wallet.svg"
              />
              <div
                className={styles.dashboard}
              >{`Earnings & Transactions`}</div>
            </Box>
            <Box className={styles.navItemListings}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/chart-column1.svg"
              />
              <div className={styles.dashboard}>{`Reports & Analytics`}</div>
            </Box>
            <Box className={styles.navItemUsers}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/bell1.svg"
              />
              <div className={styles.dashboard}>Notifications</div>
            </Box>
            <Box className={styles.navItemListings}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/settings1.svg"
              />
              <div className={styles.dashboard}>Settings</div>
            </Box>
            <Box className={styles.navItemUsers}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/history1.svg"
              />
              <div className={styles.dashboard}>System Logs</div>
            </Box>
          </section>
          <Box className={styles.container3}>
            <img className={styles.lineIcon} alt="" src="/Line.svg" />
            <Box className={styles.containerRow1}>
              <Box className={styles.image} />
              <Box className={styles.containerRow1Column1}>
                <div className={styles.adminUser}>Admin User</div>
                <div className={styles.superAdministrator}>
                  Super Administrator
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <main className={styles.mainArea}>
        <section className={styles.mainAreaColumn0}>
          <Box className={styles.container4}>
            <Box className={styles.containerRow0}>
              <TextField
                className={styles.textbox}
                placeholder="Search bookings, guests, or IDs..."
                variant="outlined"
                slotProps={{
                  input: {
                    startAdornment: (
                      <img width="16px" height="16px" src="/search.svg" />
                    ),
                  },
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "43px",
                    paddingLeft: "16.5px",
                    borderRadius: "0px 0px 0px 0px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": {
                    paddingLeft: "8px",
                    color: "#9ca3af",
                  },
                }}
              />
              <Box className={styles.mergedAsset2}>
                <img
                  className={styles.mergedAsset2Icon}
                  alt=""
                  src="/merged-asset-2.svg"
                />
              </Box>
              <img className={styles.lineIcon2} alt="" src="/Line1.svg" />
              <Box className={styles.containerRow0Column3}>
                <Typography
                  className={styles.adminUser2}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-21)", fontWeight: "700" }}
                >
                  Admin User
                </Typography>
                <div className={styles.superAdmin}>Super Admin</div>
              </Box>
              <Box className={styles.image2} />
            </Box>
            <img className={styles.lineIcon} alt="" src="/Line.svg" />
          </Box>
          <Container3 />
        </section>
        <section className={styles.container5}>
          <Container1 />
        </section>
      </main>
    </Box>
    </MainLayout>
  );
};

export default NotificationsCenter;

