import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({ className = "" }) => {
  return (
    <header className={[styles.container, className].join(" ")}>
      <img className={styles.buttonIcon} alt="" src="/Button13@2x.png" />
      <Typography
        className={styles.listAProperty}
        variant="inherit"
        variantMapping={{ inherit: "h3" }}
        sx={{ fontWeight: "600", lineHeight: "36px" }}
      >
        List a Property
      </Typography>
      <img className={styles.buttonIcon} alt="" src="/Button12@2x.png" />
    </header>
  );
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
