import { Typography, Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Groups.module.css";

const Groups = ({ className = "" }) => {
  return (
    <section className={[styles.groups, className].join(" ")}>
      <Box className={styles.titleAndBreadcrumb}>
        <Typography
          className={styles.addNewUser}
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ fontWeight: "700" }}
        >
          Add New User
        </Typography>
        <Box className={styles.breadcrumb}>
          <Box className={styles.dashboard}>
            <div className={styles.dashboard2}>Dashboard</div>
          </Box>
          <Box className={styles.image}>
            <img
              className={styles.imageIcon}
              loading="lazy"
              alt=""
              src="/Image34.svg"
            />
          </Box>
          <Box className={styles.users}>
            <div className={styles.dashboard2}>Users</div>
          </Box>
          <Box className={styles.image2}>
            <img className={styles.imageIcon} alt="" src="/Image29.svg" />
          </Box>
          <Box className={styles.addNewUser2}>
            <div className={styles.dashboard2}>Add New User</div>
          </Box>
        </Box>
      </Box>
      <Box className={styles.headerActions}>
        <Box className={styles.button}>
          <Button
            className={styles.frame}
            startIcon={
              <img width="10.9px" height="10.9px" src="/image-44.svg" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#a6a6a8",
              fontSize: "12.3",
              background: "#fdfdfd",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#fdfdfd" },
              width: 106.6,
              height: 42.4,
            }}
          >
            Cancel
          </Button>
        </Box>
        <Button
          className={styles.button2}
          startIcon={<img width="12.3px" height="12.3px" src="/image-45.svg" />}
          disableElevation
          variant="outlined"
          sx={{
            textTransform: "none",
            color: "#fdfdfd",
            fontSize: "12.3",
            borderColor: "#0c582c",
            borderRadius: "5.1px",
            "&:hover": { borderColor: "#0c582c" },
            width: 135.3,
            height: 40.9,
          }}
        >
          Create User
        </Button>
      </Box>
    </section>
  );
};

Groups.propTypes = {
  className: PropTypes.string,
};

export default Groups;
