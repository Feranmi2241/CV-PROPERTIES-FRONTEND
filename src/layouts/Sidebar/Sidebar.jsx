import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Box, Typography, Collapse, Drawer, IconButton } from "@mui/material";
import PropTypes from "prop-types";
import ROUTES from "../../routes/routes";
import styles from "./Sidebar.module.css";

const NAV_ITEMS = [
  { label: "Dashboard", icon: "/layout-dashboard.svg", to: ROUTES.DASHBOARD },
  {
    label: "Users",
    icon: "/users.svg",
    to: ROUTES.USERS,
    children: [
      { label: "Manage Users", to: ROUTES.USERS },
      { label: "Add New User", to: ROUTES.USERS_ADD },
    ],
  },
  {
    label: "Listings",
    icon: "/list.svg",
    to: ROUTES.LISTINGS_PROPERTIES,
    children: [
      { label: "All Listings", to: ROUTES.LISTINGS_PROPERTIES },
      { label: "Add New Listing", to: ROUTES.LISTINGS_PROPERTY_TYPE },
    ],
  },
  {
    label: "Services",
    icon: "/briefcase.svg",
    to: ROUTES.LISTINGS_SERVICES,
    children: [
      { label: "All Services", to: ROUTES.LISTINGS_SERVICES },
      { label: "Add New Service", to: "/services/add" },
      { label: "Service Providers", to: "/services/providers" },
    ],
  },
  { label: "Bookings", icon: "/calendar-check.svg", to: ROUTES.BOOKINGS },
  { label: "Verification", icon: "/shield-check.svg", to: "/verification" },
  {
    label: "Earnings & Transactions",
    icon: "/credit-card.svg",
    to: "/earnings",
    children: [
      { label: "Withdrawals", to: "/earnings/withdrawals", icon: "/arrow-right-left.svg" },
      { label: "Payout Batches", to: ROUTES.EARNINGS_PAYOUT_BATCH, icon: "/layers.svg" },
    ],
  },
  { label: "Reports & Analytics", icon: "/chart-column.svg", to: "/reports" },
  { label: "Notifications", icon: "/bell.svg", to: ROUTES.NOTIFICATIONS },
  { label: "Settings", icon: "/settings.svg", to: "/settings" },
  { label: "System Logs", icon: "/history.svg", to: "/logs" },
];

const Sidebar = ({ adminName = "Admin User", adminRole = "Super Administrator", mobileOpen = false, onClose }) => {
  const [openMenus, setOpenMenus] = useState({});

  const toggle = (label) =>
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));

  const sidebarContent = (
    <>
      <Box className={styles.brandHeader}>
        <img className={styles.brandLogo} alt="CV Properties" src="/merged-asset-1@2x.png" />
        <Box>
          <Typography className={styles.brandName}>CV Properties</Typography>
          <div className={styles.adminPanel}>Admin Panel</div>
        </Box>
        <IconButton onClick={onClose} className={styles.closeBtn} size="small">
          <img src="/chevron-right1.svg" alt="close" width="16" height="16" style={{ filter: "brightness(0) invert(1)", opacity: 0.7 }} />
        </IconButton>
      </Box>

      <nav className={styles.navMenu}>
        {NAV_ITEMS.map((item) => {
          const hasChildren = item.children?.length > 0;
          const isOpen = openMenus[item.label];

          return (
            <div key={item.label}>
              {hasChildren ? (
                <button
                  className={styles.navButton}
                  onClick={() => toggle(item.label)}
                  type="button"
                >
                  <img className={styles.navIcon} alt="" src={item.icon} />
                  <span className={styles.navLabel}>{item.label}</span>
                  <img
                    className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
                    alt=""
                    src="/chevron-right.svg"
                  />
                </button>
              ) : (
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `${styles.navItem} ${isActive ? styles.navItemActive : ""}`
                  }
                >
                  <img className={styles.navIcon} alt="" src={item.icon} />
                  <span className={styles.navLabel}>{item.label}</span>
                </NavLink>
              )}

              {hasChildren && (
                <Collapse in={isOpen} timeout="auto" unmountOnExit>
                  <div className={styles.subMenu}>
                    {item.children.map((child) => (
                      <NavLink
                        key={child.to}
                        to={child.to}
                        end
                        className={({ isActive }) =>
                          `${styles.subItem} ${isActive ? styles.subItemActive : ""}`
                        }
                      >
                        {child.icon && (
                          <img className={styles.subIcon} alt="" src={child.icon} />
                        )}
                        {child.label}
                      </NavLink>
                    ))}
                  </div>
                </Collapse>
              )}
            </div>
          );
        })}
      </nav>

      <Box className={styles.adminProfile}>
        <div className={styles.divider} />
        <Box className={styles.profileRow}>
          <img className={styles.avatarImg} alt="Admin" src="/Image2.svg" />
          <Box className={styles.profileInfo}>
            <div className={styles.adminName}>{adminName}</div>
            <div className={styles.adminRole}>{adminRole}</div>
          </Box>
          <img className={styles.chevronRight} alt="" src="/chevron-right3.svg" />
        </Box>
      </Box>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className={styles.sidebarDesktop}>
        {sidebarContent}
      </aside>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={onClose}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            width: 260,
            backgroundColor: "#012113",
            border: "none",
          },
        }}
      >
        {sidebarContent}
      </Drawer>
    </>
  );
};

Sidebar.propTypes = {
  adminName: PropTypes.string,
  adminRole: PropTypes.string,
  mobileOpen: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Sidebar;
