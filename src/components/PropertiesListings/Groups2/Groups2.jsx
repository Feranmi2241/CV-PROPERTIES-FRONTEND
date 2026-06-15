import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Groups2.module.css";

const Groups2 = ({ className = "" }) => {
  return (
    <Box className={[styles.groups, className].join(" ")}>
      <img
        className={styles.mergedAsset1Icon}
        alt=""
        src="/merged-asset-1.svg"
      />
      <header className={styles.frame}>
        <img className={styles.imageIcon3} alt="" src="/Image72.svg" />
        <img className={styles.imageIcon4} alt="" />
        <Box className={styles.frame2}>
          <img className={styles.buttonIcon} alt="" src="/Button10.svg" />
        </Box>
        <Box className={styles.text}>
          <Box className={styles.frame3}>
            <img className={styles.imageIcon6} alt="" src="/Image55.svg" />
            <img className={styles.imageIcon7} alt="" />
            <Typography
              className={styles.c01}
              variantMapping={{ inherit: "input" }}
              sx={{ fontFamily: "Inter", fontSize: "12.3px" }}
            />
            <div className={styles.searchByUser}>
              Search by user, listing, booking,service.
            </div>
          </Box>
        </Box>
        <img className={styles.imageIcon8} alt="" />
        <div className={styles.superAdmin}>Super Admin</div>
        <div className={styles.adminUser}>Admin User</div>
      </header>
    </Box>
  );
};

Groups2.propTypes = {
  className: PropTypes.string,
};

export default Groups2;
