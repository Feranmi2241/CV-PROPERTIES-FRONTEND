import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Box,
  Typography,
} from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Container1 from "../../components/ManageUsers/Container1/Container1";
import MainPanelsRow from "../../components/ManageUsers/MainPanelsRow/MainPanelsRow";
import Container2 from "../../components/ManageUsers/Container2/Container2";
import Table from "../../components/ManageUsers/Table/Table";
import styles from "./ManageUsers.module.css";

const ManageUsers = () => {
  return (
    <MainLayout adminName="Admin User" adminRole="Super Admin">
    <Box className={styles.manageUsers}>
      <Container1 />
      <main className={styles.mainContent}>
        <Box className={styles.filterAndConfigRow}>
          <Box className={styles.container}>
            <FormControl
              className={styles.container2}
              variant="standard"
              sx={{
                borderColor: "#e2e8f0",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                width: "21.663442940038685%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#475569",
                  fontSize: 12,
                  fontWeight: "Medium",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "13px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="12px"
                    height="12px"
                    src="/chevron-down.svg"
                    style={{ marginRight: "14px" }}
                  />
                )}
              >
                <MenuItem>Channel: All</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className={styles.container3}
              variant="standard"
              sx={{
                borderColor: "#e2e8f0",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                width: "23.21083172147002%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#475569",
                  fontSize: 12,
                  fontWeight: "Medium",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "14px",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="12px"
                    height="12px"
                    src="/chevron-down.svg"
                    style={{ marginRight: "14px" }}
                  />
                )}
              >
                <MenuItem>Priority: High</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className={styles.container2}
              variant="standard"
              sx={{
                borderColor: "#e2e8f0",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                width: "23.404255319148938%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#475569",
                  fontSize: 12,
                  fontWeight: "Medium",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "12px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="12px"
                    height="12px"
                    src="/chevron-down.svg"
                    style={{ marginRight: "14px" }}
                  />
                )}
              >
                <MenuItem>Status: Failed</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
            <FormControl
              className={styles.container2}
              variant="standard"
              sx={{
                borderColor: "#e2e8f0",
                borderStyle: "SOLID",
                borderTopWidth: "1px",
                borderRightWidth: "1px",
                borderBottomWidth: "1px",
                borderLeftWidth: "1px",
                backgroundColor: "#fff",
                borderRadius: "10px",
                width: "27.659574468085108%",
                height: "30px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "30px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "30px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#475569",
                  fontSize: 12,
                  fontWeight: "Medium",
                  fontFamily: "Inter",
                  textAlign: "left",
                  p: "0 !important",
                  marginLeft: "13px",
                },
              }}
            >
              <InputLabel color="secondary" />
              <Select
                color="secondary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="12px"
                    height="12px"
                    src="/chevron-down.svg"
                    style={{ marginRight: "14px" }}
                  />
                )}
              >
                <MenuItem>Date: Last 7 Days</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </Box>
          <Box className={styles.button}>
            <img
              className={styles.settingsIcon}
              loading="lazy"
              alt=""
              src="/Settings1.svg"
            />
            <div className={styles.channelConfigs}>Channel Configs</div>
          </Box>
        </Box>
        <section className={styles.statsCardsRow}>
          <Box className={styles.container6}>
            <div className={styles.totalNotifications}>Total Notifications</div>
            <Box className={styles.statValueRow}>
              <Typography
                className={styles.m}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", lineHeight: "32px" }}
              >
                1.2M
              </Typography>
              <Box className={styles.container7}>
                <Typography
                  className={styles.b}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "16px", fontWeight: "700" }}
                >
                  +12%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.container8}>
            <div className={styles.totalNotifications}>Unread</div>
            <Box className={styles.statValueRow2}>
              <Typography
                className={styles.m}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", lineHeight: "32px" }}
              >
                4,281
              </Typography>
              <Box className={styles.container9}>
                <Typography
                  className={styles.b}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "16px", fontWeight: "700" }}
                >
                  -2%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.container10}>
            <div className={styles.totalNotifications}>Failed</div>
            <Box className={styles.statValueRow}>
              <Typography
                className={styles.m}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", lineHeight: "32px" }}
              >
                124
              </Typography>
              <Box className={styles.container11}>
                <Typography
                  className={styles.b}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "16px", fontWeight: "700" }}
                >
                  +5%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.container12}>
            <div className={styles.totalNotifications}>Deliverability %</div>
            <Box className={styles.statValueRow4}>
              <Typography
                className={styles.h33}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", lineHeight: "32px" }}
              >
                99.8%
              </Typography>
              <Box className={styles.container13}>
                <Typography
                  className={styles.b}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "16px", fontWeight: "700" }}
                >
                  +0.1%
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.container14}>
            <div className={styles.totalNotifications}>Avg Delivery Time</div>
            <Box className={styles.statValueRow}>
              <Typography
                className={styles.m}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", lineHeight: "32px" }}
              >
                1.2s
              </Typography>
              <Box className={styles.container15}>
                <Typography
                  className={styles.b}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "16px", fontWeight: "700" }}
                >
                  -10%
                </Typography>
              </Box>
            </Box>
          </Box>
        </section>
        <MainPanelsRow />
        <footer className={styles.container16}>
          <Container2 />
          <Table />
        </footer>
      </main>
      <Box className={styles.container17}>
        <img className={styles.lineIcon} alt="" src="/Line7@2x.png" />
        <Box className={styles.containerRow1}>
          <Box className={styles.rectangle} />
          <Typography
            className={styles.systemStatusOperational}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "15px", letterSpacing: "1px", fontWeight: "700" }}
          >
            System Status: Operational
          </Typography>
          <Box className={styles.rectangle2} />
          <Typography
            className={styles.apiVersionV240Stable}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "15px", letterSpacing: "1px", fontWeight: "700" }}
          >
            API Version: v2.4.0-stable
          </Typography>
          <Typography
            className={styles.termsOfService}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "15px", letterSpacing: "1px", fontWeight: "700" }}
          >
            Terms of Service
          </Typography>
          <Typography
            className={styles.documentation}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "15px", letterSpacing: "1px", fontWeight: "700" }}
          >
            Documentation
          </Typography>
          <Typography
            className={styles.support}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "15px", letterSpacing: "1px", fontWeight: "700" }}
          >
            Support
          </Typography>
        </Box>
      </Box>
    </Box>
    </MainLayout>
  );
};

export default ManageUsers;


