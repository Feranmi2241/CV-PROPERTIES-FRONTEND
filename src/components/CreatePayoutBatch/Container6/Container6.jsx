import { Box, Button, TextField, Badge } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container6.module.css";

const Container6 = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <header className={styles.containerRow0}>
        {/* Breadcrumb */}
        <div className={styles.breadcrumb}>
          <span className={styles.breadcrumbItem}>Admin</span>
          <img className={styles.chevronRightIcon} alt="" src="/chevron-right4.svg" />
          <span className={styles.breadcrumbItem}>Finance</span>
          <img className={styles.chevronRightIcon} alt="" src="/chevron-right4.svg" />
          <span className={styles.breadcrumbCurrent}>Create Payout Batch</span>
        </div>

        {/* Search */}
        <TextField
          className={styles.textbox}
          placeholder="Search by Request ID, User, or Bank..."
          variant="outlined"
          size="small"
          slotProps={{
            input: {
              startAdornment: (
                <img
                  width="16px"
                  height="16px"
                  src="/search.svg"
                  alt=""
                  style={{ marginRight: "8px", opacity: 0.45, flexShrink: 0 }}
                />
              ),
            },
          }}
          sx={{
            "& fieldset": { border: "1px solid #e2e8f0", borderRadius: "8px" },
            "& .MuiInputBase-root": {
              height: "38px",
              fontSize: "13px",
              backgroundColor: "#fff",
              borderRadius: "8px",
            },
            "& .MuiInputBase-input": { color: "#5b5b6b" },
            "& .MuiInputBase-input::placeholder": { color: "#9ca3af", opacity: 1 },
          }}
        />

        {/* Bell with badge */}
        <Box className={styles.bellWrapper}>
          <Badge
            badgeContent=" "
            variant="dot"
            color="error"
            overlap="circular"
            sx={{
              "& .MuiBadge-badge": {
                minWidth: "8px",
                height: "8px",
                padding: 0,
                top: "3px",
                right: "3px",
              },
            }}
          >
            <img className={styles.bellIcon} alt="Notifications" src="/bell.svg" />
          </Badge>
        </Box>

        {/* Divider */}
        <div className={styles.headerDivider} />

        {/* Quick Action button */}
        <Button
          className={styles.button}
          startIcon={<img width="16px" height="16px" src="/zap.svg" />}
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "14px",
            fontWeight: 600,
            fontFamily: "Inter, sans-serif",
            background: "#2f9e5b",
            borderRadius: "20px",
            boxShadow: "0 2px 8px rgba(47,158,91,0.3)",
            "&:hover": { background: "#27894e" },
            height: 40,
            paddingLeft: "18px",
            paddingRight: "18px",
            whiteSpace: "nowrap",
          }}
        >
          Quick Action
        </Button>
      </header>
      <div className={styles.headerLine} />
    </section>
  );
};

Container6.propTypes = {
  className: PropTypes.string,
};

export default Container6;
