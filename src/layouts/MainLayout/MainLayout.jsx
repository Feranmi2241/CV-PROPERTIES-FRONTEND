import { useState } from "react";
import { Box, TextField, Typography, Badge, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./MainLayout.module.css";

const MainLayout = ({ children, adminName, adminRole, hideTopBar }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <Box className={styles.shell}>
      <Sidebar
        adminName={adminName}
        adminRole={adminRole}
        mobileOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      <Box className={styles.content}>
        {!hideTopBar && <header className={styles.topBar}>
          {/* Hamburger toggle (mobile) */}
          <IconButton
            className={styles.menuToggle}
            size="small"
            onClick={() => setSidebarOpen(true)}
          >
            <img width="20px" height="20px" src="/menu.svg" alt="menu" />
          </IconButton>

          {/* Search */}
          <TextField
            className={styles.search}
            placeholder="Search by users, listings, bookings..."
            variant="outlined"
            size="small"
            slotProps={{
              input: {
                startAdornment: (
                  <img width="15px" height="15px" src="/search.svg" alt="" style={{ marginRight: "8px", opacity: 0.4 }} />
                ),
              },
            }}
            sx={{
              "& fieldset": { border: "1px solid #e2e8f0", borderRadius: "8px" },
              "& .MuiInputBase-root": { height: "36px", fontSize: "13px", backgroundColor: "#fff", borderRadius: "8px" },
              "& .MuiInputBase-input": { color: "#475569" },
              "& .MuiInputBase-input::placeholder": { color: "#94a3b8", opacity: 1 },
            }}
          />

          <Box className={styles.topBarRight}>
            {/* Date range badge */}
            <Box className={styles.dateBadge}>
              <img width="14px" height="14px" src="/calendar.svg" alt="" style={{ opacity: 0.6 }} />
              <span className={styles.dateText}>May 1 - May 31, 2024</span>
            </Box>

            {/* Bell with badge */}
            <Badge badgeContent={4} color="error">
              <IconButton size="small">
                <img width="18px" height="18px" src="/bell.svg" alt="" />
              </IconButton>
            </Badge>

            {/* Settings */}
            <IconButton size="small">
              <img width="18px" height="18px" src="/settings.svg" alt="" />
            </IconButton>

            <div className={styles.topBarDivider} />

            {/* Admin info */}
            <Box className={styles.userInfo}>
              <Typography className={styles.userName}>{adminName || "Admin User"}</Typography>
              <div className={styles.userRole}>{adminRole || "Super Admin"}</div>
            </Box>

            {/* Avatar */}
            <Box className={styles.avatar}>
              <Typography className={styles.avatarInitial}>
                {(adminName || "A").charAt(0).toUpperCase()}
              </Typography>
            </Box>
          </Box>
        </header>}

        <main className={`${styles.main} ${hideTopBar ? styles.mainNoTopBar : ""}`}>{children}</main>
      </Box>
    </Box>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  adminName: PropTypes.string,
  adminRole: PropTypes.string,
  hideTopBar: PropTypes.bool,
};

export default MainLayout;
