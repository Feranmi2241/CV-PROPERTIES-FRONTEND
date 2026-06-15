import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Frame1.module.css";

const Frame1 = ({ className = "" }) => {
  return (
    <Box className={[styles.operatingIndicator, className].join(" ")}>
      <img className={styles.imageIcon} alt="" src="/Image168.svg" />
      <Box className={styles.active}>
        <Typography
          className={styles.active2}
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ fontWeight: "700" }}
        >
          Active
        </Typography>
      </Box>
    </Box>
  );
};

Frame1.propTypes = {
  className: PropTypes.string,
};

export default Frame1;
