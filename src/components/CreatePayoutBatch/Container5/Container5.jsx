import { Typography, Box } from "@mui/material";
import BrandHeader from "../BrandHeader";
import ContainerRow1 from "../ContainerRow1";
import PropTypes from "prop-types";
import styles from "./Container5.module.css";

const Container5 = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <BrandHeader />
      <Box className={styles.navMenu}>
        <Box className={styles.navItem}>
          <img
            className={styles.layoutDashboardIcon}
            alt=""
            src="/layout-dashboard.svg"
          />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >
            Dashboard
          </Typography>
        </Box>
        <Box className={styles.navItem2}>
          <img className={styles.layoutDashboardIcon} alt="" src="/users.svg" />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >
            Users
          </Typography>
        </Box>
        <Box className={styles.navItem3}>
          <img className={styles.layoutDashboardIcon} alt="" src="/list.svg" />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >
            Listings
          </Typography>
        </Box>
        <Box className={styles.navItem4}>
          <img
            className={styles.layoutDashboardIcon}
            alt=""
            src="/briefcase.svg"
          />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >
            Services
          </Typography>
        </Box>
        <Box className={styles.navItem}>
          <img className={styles.layoutDashboardIcon} alt="" />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >
            Bookings
          </Typography>
        </Box>
        <Box className={styles.navItem6}>
          <img
            className={styles.layoutDashboardIcon}
            alt=""
            src="/shield-check.svg"
          />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >
            Verification
          </Typography>
        </Box>
        <Box className={styles.earningsNavGroup}>
          <Box className={styles.navItem}>
            <img
              className={styles.layoutDashboardIcon}
              alt=""
              src="/credit-card.svg"
            />
            <Typography
              className={styles.dashboard}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
            >{`Earnings & Transactions`}</Typography>
          </Box>
          <Box className={styles.arrowRightLeftParent}>
            <img
              className={styles.arrowRightLeftIcon}
              alt=""
              src="/arrow-right-left.svg"
            />
            <Typography
              className={styles.withdrawals}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "500", lineHeight: "var(--lh-20)" }}
            >
              Withdrawals
            </Typography>
          </Box>
          <Box className={styles.container2}>
            <img
              className={styles.arrowRightLeftIcon}
              alt=""
              src="/layers.svg"
            />
            <Typography
              className={styles.payoutBatches}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "500", lineHeight: "var(--lh-20)" }}
            >
              Payout Batches
            </Typography>
          </Box>
        </Box>
        <Box className={styles.navItem}>
          <img
            className={styles.layoutDashboardIcon}
            alt=""
            src="/chart-column.svg"
          />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >{`Reports & Analytics`}</Typography>
        </Box>
        <Box className={styles.navItem8}>
          <img className={styles.layoutDashboardIcon} alt="" src="/bell.svg" />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >
            Notifications
          </Typography>
        </Box>
        <Box className={styles.navItem}>
          <img className={styles.layoutDashboardIcon} alt="" />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >
            Settings
          </Typography>
        </Box>
        <Box className={styles.navItem10}>
          <img className={styles.layoutDashboardIcon} alt="" />
          <Typography
            className={styles.dashboard}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
          >
            System Logs
          </Typography>
        </Box>
      </Box>
      <Box className={styles.container3}>
        <Box className={styles.container4}>
          <img
            className={styles.lineIcon}
            loading="lazy"
            alt=""
            src="/Line3@2x.png"
          />
          <Box className={styles.containerRow1}>
            <Box className={styles.image}>
              <img className={styles.imageIcon} alt="" src="/Image2.svg" />
            </Box>
            <Box className={styles.containerRow1Column1}>
              <Box className={styles.container5}>
                <Typography
                  className={styles.payoutBatches}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "500", lineHeight: "var(--lh-20)" }}
                >
                  Admin User
                </Typography>
              </Box>
              <Box className={styles.container6}>
                <div className={styles.superAdministrator}>
                  Super Administrator
                </div>
              </Box>
            </Box>
            <Box className={styles.chevronRight}>
              <img
                className={styles.chevronRightIcon}
                loading="lazy"
                alt=""
                src="/chevron-right3.svg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.container7}>
        <img className={styles.lineIcon2} alt="" src="/Line3@2x.png" />
        <ContainerRow1 />
      </Box>
    </section>
  );
};

Container5.propTypes = {
  className: PropTypes.string,
};

export default Container5;
