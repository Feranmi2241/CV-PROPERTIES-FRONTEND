import { useMemo } from "react";
import { Button, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container11.module.css";

const Container11 = ({
  className = "",
  cardTopRowAlignSelf,
  cardTopRowJustifyContent,
  cardTopRowGap,
  prop,
  typographyColor,
  totalUsers,
  prop1,
  containerMinWidth,
}) => {
  const cardTopRowStyle = useMemo(() => {
    return {
      alignSelf: cardTopRowAlignSelf,
      justifyContent: cardTopRowJustifyContent,
      gap: cardTopRowGap,
    };
  }, [cardTopRowAlignSelf, cardTopRowJustifyContent, cardTopRowGap]);

  const typography1Style = useMemo(() => {
    return {
      color: typographyColor,
    };
  }, [typographyColor]);

  const container4Style = useMemo(() => {
    return {
      minWidth: containerMinWidth,
    };
  }, [containerMinWidth]);

  return (
    <Box
      className={[styles.container, className].join(" ")}
      style={container4Style}
    >
      <Box className={styles.cardTopRow} style={cardTopRowStyle}>
        <Button
          className={styles.container2}
          disableElevation
          variant="contained"
          sx={{
            background: "#3b82f6",
            borderRadius: "18px",
            "&:hover": { background: "#3b82f6" },
            width: 40,
            height: 40,
          }}
        />
        <Box className={styles.trendIndicator}>
          <img
            className={styles.arrowUpRightIcon}
            alt=""
            src="/arrow-up-right.svg"
          />
          <Typography
            className={styles.b}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
            style={typography1Style}
          >
            {prop}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.cardBottomSection}>
        <div className={styles.totalUsers}>{totalUsers}</div>
        <Typography
          className={styles.h3}
          variant="inherit"
          variantMapping={{ inherit: "h3" }}
          sx={{
            fontWeight: "700",
            fontSize: "var(--fs-24)",
            lineHeight: "var(--lh-32)",
            letterSpacing: "var(--ls--0_6)",
          }}
        >
          {prop1}
        </Typography>
        <div className={styles.vsLastMonth}>vs last month</div>
      </Box>
    </Box>
  );
};

Container11.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  totalUsers: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  cardTopRowAlignSelf: PropTypes.string,
  cardTopRowJustifyContent: PropTypes.string,
  cardTopRowGap: PropTypes.string,
  typographyColor: PropTypes.string,
  containerMinWidth: PropTypes.string,
};

export default Container11;
