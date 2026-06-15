import { Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container6.module.css";

const Container6 = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <header className={styles.containerRow0}>
        <div className={styles.admin}>Admin</div>
        <Box className={styles.chevronRight}>
          <img
            className={styles.chevronRightIcon}
            alt=""
            src="/chevron-right4.svg"
          />
        </Box>
        <div className={styles.admin}>Finance</div>
        <img
          className={styles.chevronRightIcon}
          alt=""
          src="/chevron-right4.svg"
        />
        <Box className={styles.createPayoutBatch}>
          <Box className={styles.admin}>Create Payout Batch</Box>
        </Box>
        <TextField
          className={styles.textbox}
          placeholder="Search by Request ID, User, or Bank..."
          variant="outlined"
          sx={{
            "& fieldset": { border: "none" },
            "& .MuiInputBase-root": {
              height: "40px",
              paddingLeft: "11.9px",
              borderRadius: "0px 0px 0px 0px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { paddingLeft: "6px", color: "#5b5b6b" },
            width: "511px",
          }}
        />
        <Box className={styles.container2}>
          <img className={styles.containerIcon} alt="" />
        </Box>
        <Box className={styles.line}>
          <img className={styles.lineIcon} alt="" src="/Line1.svg" />
        </Box>
        <Button
          className={styles.button}
          startIcon={<img width="16px" height="16px" src="/zap.svg" />}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14",
            background: "#2f9e5b",
            borderRadius: "18px",
            "&:hover": { background: "#2f9e5b" },
            width: 168,
            height: 40,
          }}
        >
          Quick Action
        </Button>
      </header>
      <img className={styles.lineIcon2} alt="" src="/Line22@2x.png" />
    </section>
  );
};

Container6.propTypes = {
  className: PropTypes.string,
};

export default Container6;
