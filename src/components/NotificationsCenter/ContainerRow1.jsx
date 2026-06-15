import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./ContainerRow1.module.css";

const ContainerRow1 = ({ className = "" }) => {
  return (
    <Box className={[styles.containerRow1, className].join(" ")}>
      <Box className={styles.checkbox}>
        <img
          className={styles.imageIcon}
          loading="lazy"
          alt=""
          src="/Image2.svg"
        />
      </Box>
      <Box className={styles.containerRow1Column1}>
        <Box className={styles.container}>
          <Typography
            className={styles.adminUser}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "500", lineHeight: "var(--lh-20)" }}
          >
            Admin User
          </Typography>
        </Box>
        <Box className={styles.container2}>
          <div className={styles.superAdministrator}>Super Administrator</div>
        </Box>
      </Box>
      <Box className={styles.moon}>
        <img className={styles.chevronRightIcon} loading="lazy" alt="" />
      </Box>
    </Box>
  );
};

ContainerRow1.propTypes = {
  className: PropTypes.string,
};

export default ContainerRow1;
