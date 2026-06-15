import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container2.module.css";

const Container2 = ({ className = "" }) => {
  return (
    <Box className={[styles.container, className].join(" ")}>
      <Box className={styles.containerRow0}>
        <Box className={styles.containerRow0Column0}>
          <Typography
            className={styles.logsAudit}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{
              fontWeight: "700",
              lineHeight: "28px",
              letterSpacing: "-0.45px",
            }}
          >{`Logs & Audit Trail`}</Typography>
          <div className={styles.complianceAndSystem}>
            Compliance and system health logs
          </div>
        </Box>
        <TextField
          className={styles.textbox}
          placeholder="Filter logs..."
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#dee1e6" },
            "& .MuiInputBase-root": {
              height: "41.4px",
              borderRadius: "16px",
              fontSize: "14px",
            },
            "& .MuiInputBase-input": { color: "#565d6d" },
            width: "256px",
          }}
        />
        <Button
          className={styles.container2}
          startIcon={<img width="16px" height="16px" src="/image.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#171a1f",
            fontSize: "14",
            background: "#fff",
            border: "#dee1e6 solid 1px",
            borderRadius: "16px",
            "&:hover": { background: "#fff" },
            width: 108,
            height: 40,
          }}
        >
          Filters
        </Button>
      </Box>
      <img className={styles.lineIcon} alt="" src="/Line2@2x.png" />
    </Box>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
