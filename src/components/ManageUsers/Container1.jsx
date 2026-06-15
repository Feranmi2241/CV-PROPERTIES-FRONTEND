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
import styles from "./Container1.module.css";

const Container1 = ({ className = "" }) => {
  return (
    <header className={[styles.container, className].join(" ")}>
      <img className={styles.lineIcon} alt="" src="/Line7@2x.png" />
      <Box className={styles.brandAndSearch}>
        <img className={styles.buttonIcon} alt="" src="/Button13@2x.png" />
        <Box className={styles.brandAndSearchColumn1}>
          <Box className={styles.notifyhub}>
            <Typography
              className={styles.notifyhub2}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "700", lineHeight: "28px" }}
            >
              Notifications
            </Typography>
          </Box>
          <TextField
            className={styles.textbox}
            placeholder="Search notifications, users, or logs..."
            variant="outlined"
            slotProps={{
              input: {
                startAdornment: (
                  <img width="16px" height="16px" src="/search.svg" />
                ),
              },
            }}
            sx={{
              "& fieldset": { borderColor: "#e2e8f0" },
              "& .MuiInputBase-root": {
                height: "40px",
                backgroundColor: "#f8fafc",
                paddingLeft: "12.5px",
                borderRadius: "16px",
                fontSize: "14px",
              },
              "& .MuiInputBase-input": { paddingLeft: "8px", color: "#565d6d" },
            }}
          />
        </Box>
      </Box>
      <Box className={styles.actionButtons}>
        <Button
          className={styles.button}
          startIcon={<img width="16px" height="16px" src="/download.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#171a1f",
            fontSize: "14",
            background: "#fff",
            border: "#e2e8f0 solid 1px",
            borderRadius: "16px",
            "&:hover": { background: "#fff" },
            width: 138,
            height: 40,
          }}
        >
          Export Logs
        </Button>
        <Button
          className={styles.button}
          startIcon={<img width="16px" height="16px" src="/calendar.svg" />}
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#171a1f",
            fontSize: "14",
            background: "#fff",
            border: "#e2e8f0 solid 1px",
            borderRadius: "16px",
            "&:hover": { background: "#fff" },
            width: 120,
            height: 40,
          }}
        >
          Schedule
        </Button>
        <button className={styles.button3}>
          <img className={styles.plusIcon} alt="" src="/Plus2.svg" />
          <div className={styles.createNotification}>Create Notification</div>
        </button>
      </Box>
      <Box className={styles.userInfo}>
        <img className={styles.lineIcon2} alt="" src="/Line1.svg" />
        <Box className={styles.userTextInfo}>
          <div className={styles.adminUser}>Admin User</div>
          <div className={styles.superAdmin}>Super Admin</div>
        </Box>
        <Button
          className={styles.container2}
          disableElevation
          variant="contained"
          sx={{
            background: "#e2e8f0",
            borderRadius: "20px",
            "&:hover": { background: "#e2e8f0" },
            width: 40,
            height: 40,
          }}
        />
      </Box>
    </header>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
