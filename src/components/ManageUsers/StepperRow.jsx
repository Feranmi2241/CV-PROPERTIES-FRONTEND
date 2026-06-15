import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./StepperRow.module.css";

const StepperRow = ({ className = "" }) => {
  return (
    <Box className={[styles.stepperRow, className].join(" ")}>
      <img
        className={styles.lineIcon}
        loading="lazy"
        alt=""
        src="/Line@2x.png"
      />
      <Box className={styles.step1}>
        <Box className={styles.container}>
          <Typography
            className={styles.stepIcon}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "20px", fontWeight: "700" }}
          >
            1
          </Typography>
        </Box>
        <div className={styles.selectType}>Select Type</div>
      </Box>
      <div className={styles.propertyDetails}>Property Details</div>
      <Box className={styles.step3}>
        <Box className={styles.image}>
          <Box className={styles.container2}>
            <Typography
              className={styles.stepIcon}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "20px", fontWeight: "700" }}
            >
              3
            </Typography>
          </Box>
        </Box>
        <div className={styles.reviewSubmit}>{`Review & Submit`}</div>
      </Box>
    </Box>
  );
};

StepperRow.propTypes = {
  className: PropTypes.string,
};

export default StepperRow;
