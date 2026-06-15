import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./AuditEvent.module.css";

const AuditEvent = ({
  className = "",
  auditEvent1Padding,
  adminInitializedBatch,
  today1015AMJamesonBurkPadding,
  today1015AMJamesonBurke,
}) => {
  const auditEvent1Style = useMemo(() => {
    return {
      padding: auditEvent1Padding,
    };
  }, [auditEvent1Padding]);

  const today1015AMJamesonBurkStyle = useMemo(() => {
    return {
      padding: today1015AMJamesonBurkPadding,
    };
  }, [today1015AMJamesonBurkPadding]);

  return (
    <Box
      className={[styles.auditEvent1, className].join(" ")}
      style={auditEvent1Style}
    >
      <Box className={styles.auditEvent1Header}>
        <img className={styles.containerIcon} alt="" />
        <Typography
          className={styles.adminInitializedBatch}
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ lineHeight: "var(--lh-17)", fontWeight: "700" }}
        >
          {adminInitializedBatch}
        </Typography>
      </Box>
      <Box
        className={styles.today1015AmJamesonBurk}
        style={today1015AMJamesonBurkStyle}
      >
        <div className={styles.today1015Am}>{today1015AMJamesonBurke}</div>
      </Box>
    </Box>
  );
};

AuditEvent.propTypes = {
  className: PropTypes.string,
  adminInitializedBatch: PropTypes.string,
  today1015AMJamesonBurke: PropTypes.string,

  /** Style props */
  auditEvent1Padding: PropTypes.string,
  today1015AMJamesonBurkPadding: PropTypes.string,
};

export default AuditEvent;
