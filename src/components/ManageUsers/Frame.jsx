import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Frame.module.css";

const Frame = ({ className = "" }) => {
  return (
    <Box className={[styles.frame, className].join(" ")}>
      <Typography
        className={styles.omeFame}
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{ fontWeight: "700" }}
      >
        One-time
      </Typography>
    </Box>
  );
};

Frame.propTypes = {
  className: PropTypes.string,
};

export default Frame;
