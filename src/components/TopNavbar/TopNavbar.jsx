import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./TopNavbar.module.css";

const TopNavbar = ({ className = "" }) => {
  return (
    <header className={[styles.topNavbar, className].join(" ")}>
      <Box className={styles.topNavbar2}>
        <Box className={styles.topNavbar3}>
          <Box className={styles.brandLogo}>
            <img
              className={styles.containerIcon}
              loading="lazy"
              alt=""
              src="/Container3@2x.png"
            />
            <Box className={styles.image}>
              <Typography
                className={styles.cvProperties}
                variant="inherit"
                variantMapping={{ inherit: "h1" }}
                sx={{ fontWeight: "700", lineHeight: "31px" }}
              >
                CV Properties
              </Typography>
            </Box>
          </Box>
          <Box className={styles.languageSelector}>
            <img
              className={styles.globeIcon}
              loading="lazy"
              alt=""
              src="/globe.svg"
            />
            <div className={styles.englishUs}>English (US)</div>
            <img
              className={styles.chevronDownIcon}
              loading="lazy"
              alt=""
              src="/chevron-down.svg"
            />
          </Box>
        </Box>
      </Box>
    </header>
  );
};

TopNavbar.propTypes = {
  className: PropTypes.string,
};

export default TopNavbar;
