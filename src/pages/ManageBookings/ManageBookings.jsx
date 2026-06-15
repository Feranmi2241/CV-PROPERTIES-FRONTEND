import { Box, Typography, Button, Chip, TextField, InputAdornment, IconButton } from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import styles from "./ManageBookings.module.css";

const STATS = [
  { label: "Total Bookings", value: "1,248", change: "+12.5%", positive: true },
  { label: "Upcoming", value: "432", sub: "84 new today", change: "+8.2%", positive: true },
  { label: "Pending", value: "64", sub: "4 urgent actions", change: "+2.4%", positive: false },
  { label: "Cancelled", value: "28", sub: "vs last month", change: "+1.2%", positive: false },
  { label: "Revenue", value: "$142.5k", change: "+15.8%", positive: true },
];

const TABS = ["All", "Active", "Pending", "Completed"];

const BOOKINGS = [
  { id: "BK-2024-1000", guest: "John Smith", email: "j.smith@example.com", listing: "Luxury Villa", type: "Accommodation", dates: "Jun 10 - Jun 15", nights: "5 nights · 7:00 PM", amount: "$450", status: "Upcoming", payment: "PARTIAL" },
  { id: "BK-2024-1001", guest: "Sarah Doe", email: "sarah@example.com", listing: "City Apartment", type: "Service", dates: "Jun 11 - Jun 16", nights: "6 nights · 7:00 PM", amount: "$500", status: "Pending", payment: "PARTIAL" },
  { id: "BK-2024-1002", guest: "Michael Chen", email: "j.smith@example.com", listing: "Pool Cleaning", type: "Accommodation", dates: "Jun 12 - Jun 17", nights: "7 nights · 2:00 PM", amount: "$550", status: "Confirmed", payment: "PARTIAL" },
  { id: "BK-2024-1003", guest: "Emma Wilson", email: "j.smith@example.com", listing: "Garden Maint.", type: "Service", dates: "Jun 13 - Jun 18", nights: "6 nights · 3:00 PM", amount: "$600", status: "Cancelled", payment: "PAID" },
  { id: "BK-2024-1004", guest: "John Smith", email: "j.smith@example.com", listing: "Luxury Villa", type: "Accommodation", dates: "Jun 14 - Jun 18", nights: "5 nights · 7:00 PM", amount: "$850", status: "Upcoming", payment: "PARTIAL" },
];

const STATUS_COLORS = {
  Upcoming: { bg: "#dbeafe", color: "#1d4ed8" },
  Pending: { bg: "#fef3c7", color: "#92400e" },
  Confirmed: { bg: "#d1fae5", color: "#065f46" },
  Cancelled: { bg: "#fee2e2", color: "#991b1b" },
};

const ManageBookings = () => {
  return (
    <MainLayout adminName="Admin User" adminRole="Super Admin">
      <Box className={styles.page}>
        {/* Breadcrumb + Header */}
        <Box className={styles.pageHeader}>
          <Box className={styles.breadcrumb}>
            <span>Dashboard</span>
            <span className={styles.sep}>›</span>
            <span>Manage Bookings</span>
          </Box>
          <Box className={styles.headerRow}>
            <Typography variant="h5" className={styles.pageTitle}>
              Manage Bookings
            </Typography>
            <Box className={styles.headerActions}>
              <Button
                variant="outlined"
                size="small"
                sx={{ borderColor: "#e2e8f0", color: "#475569", textTransform: "none", borderRadius: "8px" }}
                startIcon={<img width="14" height="14" src="/download.svg" alt="" />}
              >
                Export Data
              </Button>
              <Button
                variant="contained"
                size="small"
                sx={{ background: "#0c693c", textTransform: "none", borderRadius: "8px", "&:hover": { background: "#0a5a33" } }}
              >
                + Create Booking
              </Button>
            </Box>
          </Box>
        </Box>

        {/* Stats */}
        <Box className={styles.statsRow}>
          {STATS.map((s) => (
            <Box key={s.label} className={styles.statCard}>
              <div className={styles.statLabel}>{s.label}</div>
              <Typography className={styles.statValue}>{s.value}</Typography>
              {s.sub && <div className={styles.statSub}>{s.sub}</div>}
              <Box className={styles.statBadge} sx={{ background: s.positive ? "#d1fae5" : "#fee2e2", color: s.positive ? "#065f46" : "#991b1b" }}>
                {s.change}
              </Box>
            </Box>
          ))}
        </Box>

        {/* Table section */}
        <Box className={styles.tableSection}>
          {/* Filter row */}
          <Box className={styles.filterRow}>
            <Box className={styles.tabs}>
              {TABS.map((tab, i) => (
                <button key={tab} className={`${styles.tab} ${i === 0 ? styles.tabActive : ""}`} type="button">
                  {tab}
                </button>
              ))}
            </Box>
            <Box className={styles.filterRight}>
              <TextField
                placeholder="Search bookings, guests, or IDs..."
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <img width="14" height="14" src="/search.svg" alt="" style={{ opacity: 0.4 }} />
                    </InputAdornment>
                  ),
                }}
                sx={{ "& .MuiOutlinedInput-root": { borderRadius: "8px", fontSize: "13px", height: "36px" }, width: 260 }}
              />
              <Button
                variant="outlined"
                size="small"
                sx={{ borderColor: "#e2e8f0", color: "#475569", textTransform: "none", borderRadius: "8px", whiteSpace: "nowrap" }}
              >
                More Filters
              </Button>
            </Box>
          </Box>

          {/* Bulk actions row */}
          <Box className={styles.bulkRow}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <label className={styles.bulkLabel}>Bulk Actions:</label>
              <select className={styles.bulkSelect}>
                <option value="">Select action</option>
                <option>Approve</option>
                <option>Cancel</option>
                <option>Export</option>
              </select>
              <button className={styles.applyBtn} type="button">Apply</button>
            </Box>
          </Box>

          {/* Table */}
          <Box className={styles.tableWrapper}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th><input type="checkbox" /></th>
                  <th>BOOKING ID</th>
                  <th>GUEST</th>
                  <th>LISTING / SERVICE</th>
                  <th>DATES & TIME</th>
                  <th>AMOUNT</th>
                  <th>STATUS</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {BOOKINGS.map((b) => {
                  const sc = STATUS_COLORS[b.status] || { bg: "#f1f5f9", color: "#475569" };
                  return (
                    <tr key={b.id}>
                      <td><input type="checkbox" /></td>
                      <td>
                        <div className={styles.bookingId}>{b.id}</div>
                        <div className={styles.bookingDate}>May 20, 10:30 AM</div>
                      </td>
                      <td>
                        <div className={styles.guestName}>{b.guest}</div>
                        <div className={styles.guestEmail}>{b.email}</div>
                      </td>
                      <td>
                        <div className={styles.listingName}>{b.listing}</div>
                        <div className={styles.listingType}>{b.type}</div>
                      </td>
                      <td>
                        <div className={styles.dates}>{b.dates}</div>
                        <div className={styles.nights}>{b.nights}</div>
                      </td>
                      <td>
                        <div className={styles.amount}>{b.amount}</div>
                        <Chip label={b.payment} size="small" sx={{ fontSize: "10px", height: "18px", background: b.payment === "PAID" ? "#d1fae5" : "#fef3c7", color: b.payment === "PAID" ? "#065f46" : "#92400e" }} />
                      </td>
                      <td>
                        <Chip label={b.status} size="small" sx={{ fontSize: "11px", background: sc.bg, color: sc.color, fontWeight: 600 }} />
                      </td>
                      <td>
                        <IconButton size="small">⋮</IconButton>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Box>

          {/* Pagination */}
          <Box className={styles.pagination}>
            <Typography className={styles.paginationText}>Showing 1 to 15 of 1,248 bookings</Typography>
            <Box className={styles.pageButtons}>
              <button className={styles.pageBtn} type="button">‹</button>
              <button className={`${styles.pageBtn} ${styles.pageBtnActive}`} type="button">1</button>
              <button className={styles.pageBtn} type="button">2</button>
              <button className={styles.pageBtn} type="button">3</button>
              <button className={styles.pageBtn} type="button">...</button>
              <button className={styles.pageBtn} type="button">12</button>
              <button className={styles.pageBtn} type="button">›</button>
            </Box>
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default ManageBookings;
