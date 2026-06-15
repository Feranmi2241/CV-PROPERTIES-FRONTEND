import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./BrandHeader.module.css";

const BrandHeader = ({
  className = "",
  brandHeaderAlignItems,
  brandHeaderGap,
  brandHeaderPadding,
  brandTextPadding,
}) => {
  const brandHeaderStyle = useMemo(() => {
    return {
      alignItems: brandHeaderAlignItems,
      gap: brandHeaderGap,
      padding: brandHeaderPadding,
    };
  }, [brandHeaderAlignItems, brandHeaderGap, brandHeaderPadding]);

  const brandTextStyle = useMemo(() => {
    return {
      padding: brandTextPadding,
    };
  }, [brandTextPadding]);

  return (
    <Box
      className={[styles.brandHeader, className].join(" ")}
      style={brandHeaderStyle}
    >
      <img
        className={styles.containerIcon}
        loading="lazy"
        alt=""
        src="/Container5@2x.png"
      />
      <Box className={styles.brandText} style={brandTextStyle}>
        <Typography
          className={styles.cvProperties}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{ fontWeight: "700", lineHeight: "var(--lh-23)" }}
        >
          CV Properties
        </Typography>
        <div className={styles.adminPanel}>Admin Panel</div>
      </Box>
    </Box>
  );
};

BrandHeader.propTypes = {
  className: PropTypes.string,

  /** Style props */
  brandHeaderAlignItems: PropTypes.string,
  brandHeaderGap: PropTypes.string,
  brandHeaderPadding: PropTypes.string,
  brandTextPadding: PropTypes.string,
};

export default BrandHeader;
