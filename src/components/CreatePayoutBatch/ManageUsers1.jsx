import { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import BrandHeader from "./BrandHeader";
import ContainerRow1 from "./ContainerRow1";
import Container11 from "./Container11";
import Container10 from "./Container10";
import Container7 from "./Container7";
import PropTypes from "prop-types";
import styles from "./ManageUsers1.module.css";

const ManageUsers1 = ({
  className = "",
  brandHeaderAlignItems,
  brandHeaderGap,
  brandHeaderPadding,
  brandTextPadding,
}) => {
  const [containerDateTimePickerValue, setContainerDateTimePickerValue] =
    useState(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box className={[styles.manageUsers, className].join(" ")}>
        <section className={styles.container}>
          <BrandHeader
            brandHeaderAlignItems={brandHeaderAlignItems}
            brandHeaderGap={brandHeaderGap}
            brandHeaderPadding={brandHeaderPadding}
            brandTextPadding={brandTextPadding}
          />
          <Box className={styles.navMenu}>
            <Box className={styles.navItem}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/layout-dashboard.svg"
              />
              <Typography
                className={styles.dashboard}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >
                Dashboard
              </Typography>
            </Box>
            <Box className={styles.frame}>
              <Box className={styles.groups}>
                <img
                  className={styles.layoutDashboardIcon}
                  alt=""
                  src="/users.svg"
                />
                <div className={styles.users}>Users</div>
              </Box>
            </Box>
            <Box className={styles.navItem2}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/list.svg"
              />
              <Typography
                className={styles.dashboard}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >
                Listings
              </Typography>
            </Box>
            <Box className={styles.navItem3}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/briefcase.svg"
              />
              <Typography
                className={styles.dashboard}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >
                Services
              </Typography>
            </Box>
            <Box className={styles.navItem4}>
              <img className={styles.layoutDashboardIcon} alt="" />
              <Typography
                className={styles.dashboard}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >
                Bookings
              </Typography>
            </Box>
            <Box className={styles.navItem5}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/shield-check.svg"
              />
              <Typography
                className={styles.dashboard}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >
                Verification
              </Typography>
            </Box>
            <Box className={styles.navItem6}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/credit-card.svg"
              />
              <Typography
                className={styles.dashboard}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >{`Earnings & Transactions`}</Typography>
            </Box>
            <Box className={styles.navItem7}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/chart-column.svg"
              />
              <Typography
                className={styles.dashboard}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >{`Reports & Analytics`}</Typography>
            </Box>
            <Box className={styles.navItem8}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/bell.svg"
              />
              <Typography
                className={styles.dashboard}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >
                Notifications
              </Typography>
            </Box>
            <Box className={styles.bookingIdRow}>
              <img className={styles.settingsIcon} alt="" src="/settings.svg" />
              <Typography
                className={styles.settings}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >
                Settings
              </Typography>
            </Box>
            <Box className={styles.navItem9}>
              <img
                className={styles.layoutDashboardIcon}
                alt=""
                src="/history.svg"
              />
              <Typography
                className={styles.dashboard}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "800", lineHeight: "var(--lh-20)" }}
              >
                System Logs
              </Typography>
            </Box>
          </Box>
          <Box className={styles.container2}>
            <img className={styles.lineIcon} alt="" src="/Line3@2x.png" />
            <ContainerRow1 />
          </Box>
        </section>
        <main className={styles.mainLayout}>
          <Box className={styles.container3}>
            <Box className={styles.containerRow0}>
              <TextField
                className={styles.textbox}
                placeholder="Search by name, email, phone or ID..."
                variant="outlined"
                slotProps={{
                  input: {
                    startAdornment: (
                      <img width="16px" height="16px" src="/Search.svg" />
                    ),
                  },
                }}
                sx={{
                  "& fieldset": { border: "none" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    paddingLeft: "12.5px",
                    borderRadius: "0px 0px 0px 0px",
                    fontSize: "14px",
                  },
                  "& .MuiInputBase-input": {
                    paddingLeft: "8px",
                    color: "#565d6d",
                  },
                  width: "815.5px",
                }}
              />
              <img
                className={styles.containerIcon}
                loading="lazy"
                alt=""
                src="/Container3@2x.png"
              />
              <Box className={styles.containerRow0Column2}>
                <Typography
                  className={styles.adminUser}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "700", lineHeight: "var(--lh-14)" }}
                >
                  Admin User
                </Typography>
                <div className={styles.superAdmin}>Super Admin</div>
              </Box>
              <Button
                className={styles.avatar}
                disableElevation
                variant="contained"
                sx={{
                  background: "#d9d9d9",
                  borderRadius: "20px",
                  "&:hover": { background: "#d9d9d9" },
                  width: 40,
                  height: 40,
                }}
              />
              <img className={styles.chevronRightIcon} alt="" />
            </Box>
            <img className={styles.lineIcon2} alt="" src="/Line23@2x.png" />
          </Box>
          <Box className={styles.container4}>
            <Box className={styles.pageHeader}>
              <Box className={styles.pageHeaderColumn0}>
                <Box className={styles.breadcrumb}>
                  <img className={styles.houseIcon} alt="" src="/house.svg" />
                  <Box className={styles.chevronRight}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/chevron-right.svg"
                    />
                  </Box>
                  <div className={styles.users2}>Users</div>
                  <Box className={styles.chevronRight2}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/chevron-right.svg"
                    />
                  </Box>
                  <div className={styles.manageUsers2}>Manage Users</div>
                </Box>
                <Typography
                  className={styles.manageUsers3}
                  variant="inherit"
                  variantMapping={{ inherit: "h1" }}
                  sx={{
                    fontWeight: "700",
                    fontSize: "var(--fs-30)",
                    lineHeight: "var(--lh-36)",
                    letterSpacing: "-0.75px",
                  }}
                >
                  Manage Users
                </Typography>
              </Box>
              <Box className={styles.actionButtons}>
                <Button
                  className={styles.button}
                  startIcon={
                    <img width="16px" height="16px" src="/download.svg" />
                  }
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#171a1f",
                    fontSize: "14",
                    background: "#fff",
                    border: "rgba(222, 225, 230, 0.8) solid 1px",
                    borderRadius: "14px",
                    "&:hover": { background: "#fff" },
                    width: 144.6,
                    height: 40,
                  }}
                >
                  Export Users
                </Button>
                <Button
                  className={styles.button2}
                  startIcon={
                    <img width="16px" height="16px" src="/User-plus.svg" />
                  }
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fafafa",
                    fontSize: "14",
                    background: "#171717",
                    borderRadius: "14px",
                    "&:hover": { background: "#171717" },
                    width: 161,
                    height: 40,
                  }}
                >
                  Add New User
                </Button>
              </Box>
            </Box>
            <section className={styles.statsCardsRow}>
              <Container11
                prop="12.5%"
                totalUsers="Total Users"
                prop1="18,458"
              />
              <Box className={styles.clock}>
                <Container11
                  cardTopRowAlignSelf="stretch"
                  cardTopRowJustifyContent="center"
                  cardTopRowGap="59px"
                  prop="11.2%"
                  typographyColor="#171a1f"
                  totalUsers="Clients"
                  prop1="9,856"
                  containerMinWidth="unset"
                />
              </Box>
              <Box className={styles.container5}>
                <Box className={styles.containerRow02}>
                  <Box className={styles.clock2}>
                    <Button
                      className={styles.container6}
                      disableElevation
                      variant="contained"
                      sx={{
                        background: "#a855f7",
                        borderRadius: "18px",
                        "&:hover": { background: "#a855f7" },
                        width: 40,
                        height: 40,
                      }}
                    />
                  </Box>
                  <Box className={styles.checkbox}>
                    <img
                      className={styles.arrowUpRightIcon}
                      alt=""
                      src="/arrow-up-right.svg"
                    />
                  </Box>
                  <Box className={styles.moon}>
                    <Typography
                      className={styles.b}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                    >
                      8.7%
                    </Typography>
                  </Box>
                </Box>
                <div className={styles.serviceProviders}>Service Providers</div>
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
                  5,214
                </Typography>
                <div className={styles.vsLastMonth}>vs last month</div>
              </Box>
              <Box className={styles.container7}>
                <Container11
                  cardTopRowAlignSelf="stretch"
                  cardTopRowJustifyContent="center"
                  cardTopRowGap="57px"
                  prop="15.6%"
                  typographyColor="#171a1f"
                  totalUsers="Agents"
                  prop1="3,388"
                  containerMinWidth="unset"
                />
              </Box>
              <Container11
                cardTopRowAlignSelf="unset"
                cardTopRowJustifyContent="unset"
                cardTopRowGap="61px"
                prop="3.4%"
                typographyColor="#ef4444"
                totalUsers="Banned Users"
                prop1="156"
                containerMinWidth="169px"
              />
            </section>
            <section className={styles.container8}>
              <Box className={styles.textbox2}>
                <Typography
                  className={styles.searchUser}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                >
                  SEARCH USER
                </Typography>
                <TextField
                  className={styles.textfield}
                  placeholder="Name, email, phone or ID..."
                  variant="outlined"
                  slotProps={{
                    input: {
                      startAdornment: (
                        <img width="16px" height="16px" src="/Search-1.svg" />
                      ),
                    },
                  }}
                  sx={{
                    "& fieldset": { borderColor: "#dee1e6" },
                    "& .MuiInputBase-root": {
                      height: "45px",
                      backgroundColor: "#fff",
                      paddingLeft: "12.5px",
                      borderRadius: "14px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": {
                      paddingLeft: "8px",
                      color: "#565d6d",
                    },
                    width: "340px",
                  }}
                />
              </Box>
              <Box className={styles.userTypeFilter}>
                <Typography
                  className={styles.userType}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-16)",
                    letterSpacing: "1.2px",
                    fontWeight: "700",
                  }}
                >
                  User Type
                </Typography>
                <FormControl
                  className={styles.container9}
                  variant="standard"
                  sx={{
                    borderColor: "#dee1e6",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "14px",
                    width: "100%",
                    height: "44px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "44px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "44px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "44px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "44px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#171a1f",
                      fontSize: 14,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "14px",
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
                        width="16px"
                        height="16px"
                        src="/chevron-right-4.svg"
                        style={{ marginRight: "14.000000000007276px" }}
                      />
                    )}
                  >
                    <MenuItem>All Types</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </Box>
              <Box className={styles.statusFilter}>
                <Typography
                  className={styles.status}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-16)",
                    letterSpacing: "1.2px",
                    fontWeight: "700",
                  }}
                >
                  Status
                </Typography>
                <FormControl
                  className={styles.container9}
                  variant="standard"
                  sx={{
                    borderColor: "#dee1e6",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "14px",
                    width: "94.04761904761904%",
                    height: "44px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "44px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "44px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "44px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "44px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#171a1f",
                      fontSize: 14,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "14px",
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
                        width="16px"
                        height="16px"
                        src="/chevron-right-5.svg"
                        style={{ marginRight: "14px" }}
                      />
                    )}
                  >
                    <MenuItem>All Status</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </Box>
              <Box className={styles.amountCol}>
                <Typography
                  className={styles.joinedDate}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-16)",
                    letterSpacing: "1.2px",
                    fontWeight: "700",
                  }}
                >
                  Joined Date
                </Typography>
                <Box className={styles.container11}>
                  <DatePicker
                    value={containerDateTimePickerValue}
                    onChange={(newValue) => {
                      setContainerDateTimePickerValue(newValue);
                    }}
                    sx={{
                      fieldset: {
                        borderColor: "#dee1e6",
                        borderTopWidth: 1,
                        borderRightWidth: 1,
                        borderBottomWidth: 1,
                        borderLeftWidth: 1,
                      },
                      "&:hover": {
                        fieldset: { borderColor: "#dee1e6" },
                        ".MuiOutlinedInput-notchedOutline": {
                          borderColor: "#dee1e6",
                        },
                      },
                      "& input::placeholder": {
                        textColor: "#171a1f",
                        fontSize: 14,
                      },
                      input: {
                        color: "#171a1f",
                        fontSize: 14,
                        textAlign: "left",
                        fontWeight: "400",
                      },
                      "& .MuiButtonBase-root": { width: "32px" },
                      "& .MuiPickersInputBase-root": {
                        backgroundColor: "#fff",
                        height: 44,
                        gap: "21px",
                        flexDirection: { flexDirection: "row" },
                      },
                      "& .MuiPickersInputBase-sectionsContainer": {
                        width: "unset",
                      },
                    }}
                    slotProps={{
                      textField: {
                        size: "medium",
                        fullWidth: true,
                        required: false,
                        autoFocus: false,
                        error: false,
                        placeholder: "Select Range",
                      },
                      openPickerIcon: {
                        component: () => (
                          <img width="16px" height="16px" src="/calendar.svg" />
                        ),
                      },
                    }}
                  />
                </Box>
              </Box>
              <Box className={styles.actionButtons2}>
                <button className={styles.button3}>
                  <img
                    className={styles.rotateCcwIcon}
                    alt=""
                    src="/Rotate-ccw.svg"
                  />
                  <div className={styles.reset}>Reset</div>
                </button>
                <Button
                  className={styles.container12}
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fafafa",
                    fontSize: "14",
                    background: "#171717",
                    borderRadius: "14px",
                    "&:hover": { background: "#171717" },
                    width: 74,
                    height: 44,
                  }}
                >
                  Filter
                </Button>
              </Box>
            </section>
            <Box className={styles.container13}>
              <Box className={styles.container14}>
                <Box className={styles.containerRow03}>
                  <Typography
                    className={styles.userDirectory}
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "700", lineHeight: "var(--lh-28)" }}
                  >
                    User Directory
                  </Typography>
                  <Box className={styles.showing1To10Of18458User}>
                    <div className={styles.showing1ToContainer}>
                      <Typography
                        variant="inherit"
                        variantMapping={{ inherit: "span" }}
                        sx={{ lineHeight: "var(--lh-20)" }}
                      >{`Showing `}</Typography>
                      <Typography
                        className={styles.to10}
                        variant="inherit"
                        variantMapping={{ inherit: "span" }}
                        sx={{ lineHeight: "var(--lh-20)" }}
                      >
                        1 to 10
                      </Typography>
                      <Typography
                        variant="inherit"
                        variantMapping={{ inherit: "span" }}
                        sx={{ lineHeight: "var(--lh-20)" }}
                      >
                        {" "}
                        of 18,458 users
                      </Typography>
                    </div>
                  </Box>
                </Box>
                <img className={styles.lineIcon2} alt="" src="/Line11@2x.png" />
              </Box>
              <Box className={styles.clock3}>
                <Box className={styles.container15}>
                  <Box className={styles.container16}>
                    <Box className={styles.container17}>
                      <Box className={styles.container18}>
                        <Box className={styles.containerRow04}>
                          <Typography
                            className={styles.userDetails}
                            variant="inherit"
                            variantMapping={{ inherit: "h3" }}
                            sx={{
                              fontWeight: "500",
                              lineHeight: "var(--lh-20)",
                            }}
                          >
                            User Details
                          </Typography>
                          <Typography
                            className={styles.contactInformation}
                            variant="inherit"
                            variantMapping={{ inherit: "h3" }}
                            sx={{
                              fontWeight: "500",
                              lineHeight: "var(--lh-20)",
                            }}
                          >
                            Contact Information
                          </Typography>
                          <Typography
                            className={styles.type}
                            variant="inherit"
                            variantMapping={{ inherit: "h3" }}
                            sx={{
                              fontWeight: "500",
                              lineHeight: "var(--lh-20)",
                            }}
                          >
                            Type
                          </Typography>
                          <Typography
                            className={styles.status2}
                            variant="inherit"
                            variantMapping={{ inherit: "h3" }}
                            sx={{
                              fontWeight: "500",
                              lineHeight: "var(--lh-20)",
                            }}
                          >
                            Status
                          </Typography>
                          <Typography
                            className={styles.verification2}
                            variant="inherit"
                            variantMapping={{ inherit: "h3" }}
                            sx={{
                              fontWeight: "500",
                              lineHeight: "var(--lh-20)",
                            }}
                          >
                            Verification
                          </Typography>
                          <Box className={styles.frame2}>
                            <Typography
                              className={styles.joinedDate2}
                              variant="inherit"
                              variantMapping={{ inherit: "h3" }}
                              sx={{
                                fontWeight: "500",
                                lineHeight: "var(--lh-20)",
                              }}
                            >
                              Joined Date
                            </Typography>
                          </Box>
                          <Box className={styles.frame3}>
                            <Typography
                              className={styles.lastActive}
                              variant="inherit"
                              variantMapping={{ inherit: "h3" }}
                              sx={{
                                fontWeight: "500",
                                lineHeight: "var(--lh-20)",
                              }}
                            >
                              Last Active
                            </Typography>
                          </Box>
                          <Typography
                            className={styles.actions}
                            variant="inherit"
                            variantMapping={{ inherit: "h3" }}
                            sx={{
                              fontWeight: "500",
                              lineHeight: "var(--lh-20)",
                            }}
                          >
                            Actions
                          </Typography>
                        </Box>
                        <img
                          className={styles.lineIcon2}
                          alt=""
                          src="/Line11@2x.png"
                        />
                      </Box>
                    </Box>
                    <Container10
                      johnDoe="John Doe"
                      iDUSR001234="ID: USR-001234"
                      johndoegmailcom="johndoe@gmail.com"
                      phoneRowAlignSelf="stretch"
                      prop="+234 801 234 5678"
                      client="Client"
                      verified="Verified"
                      may312024="May 31, 2024"
                      today="Today"
                      aM="09:15 AM"
                    />
                    <Box className={styles.groups2}>
                      <Box className={styles.frame4}>
                        <Box className={styles.menuItemViewProfile}>
                          <img className={styles.imageIcon} alt="" />
                          <div className={styles.viewPrafio}>View Profile</div>
                        </Box>
                        <Box className={styles.menuItemViewProfile}>
                          <img
                            className={styles.imageIcon}
                            alt=""
                            src="/Image3.svg"
                          />
                          <div className={styles.viewPrafio}>Edit User</div>
                        </Box>
                        <Box className={styles.menuItemVerifyApprove}>
                          <img
                            className={styles.imageIcon}
                            alt=""
                            src="/Image4.svg"
                          />
                          <div className={styles.viewPrafio}>
                            Verify/ Approve
                          </div>
                        </Box>
                        <Box className={styles.menuItemSuspendUser}>
                          <img
                            className={styles.imageIcon4}
                            alt=""
                            src="/Image.svg"
                          />
                          <div className={styles.viewPrafio}>Suspend User</div>
                        </Box>
                        <Box className={styles.menuItemBanUser}>
                          <img className={styles.imageIcon5} alt="" />
                          <div className={styles.viewPrafio}>Ban User</div>
                        </Box>
                        <Box className={styles.menuItemResetPassword}>
                          <img className={styles.imageIcon} alt="" />
                          <div className={styles.resetPassword}>
                            Reset Password
                          </div>
                        </Box>
                        <Box className={styles.menuItemDeleteUser}>
                          <img
                            className={styles.imageIcon4}
                            alt=""
                            src="/Image1.svg"
                          />
                          <div className={styles.viewPrafio}>Delete User</div>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.checkbox2}>
                      <Box className={styles.container19}>
                        <img
                          className={styles.lineIcon5}
                          alt=""
                          src="/Line11@2x.png"
                        />
                        <Box className={styles.userDetailsCell}>
                          <Button
                            className={styles.avatar2}
                            disableElevation
                            variant="contained"
                            sx={{
                              background: "#e8f5f8",
                              borderRadius: "22px",
                              "&:hover": { background: "#e8f5f8" },
                              width: 44,
                              height: 44,
                            }}
                          />
                          <Box className={styles.userNameId}>
                            <Typography
                              className={styles.sarahJohnson}
                              variant="inherit"
                              variantMapping={{ inherit: "h3" }}
                              sx={{
                                fontWeight: "700",
                                lineHeight: "var(--lh-20)",
                              }}
                            >
                              Sarah Johnson
                            </Typography>
                            <div className={styles.idUsr001235}>
                              ID: USR-001235
                            </div>
                          </Box>
                        </Box>
                        <Box className={styles.breadcrumbRow}>
                          <Box className={styles.emailRow}>
                            <img
                              className={styles.houseIcon}
                              alt=""
                              src="/mail1.svg"
                            />
                            <div className={styles.sarahjgmailcom}>
                              sarahj@gmail.com
                            </div>
                          </Box>
                          <Box className={styles.phoneRow}>
                            <img
                              className={styles.houseIcon}
                              alt=""
                              src="/phone1.svg"
                            />
                            <div className={styles.div}>+234 802 345 6789</div>
                          </Box>
                        </Box>
                        <Box className={styles.frame5}>
                          <Box className={styles.tag}>
                            <Box className={styles.frame6}>
                              <Typography
                                className={styles.div}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{
                                  lineHeight: "var(--lh-16)",
                                  fontWeight: "700",
                                }}
                              >
                                Service Provider
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.frame7}>
                          <Box className={styles.tag}>
                            <Box className={styles.frame8}>
                              <div className={styles.sarahjgmailcom}>
                                Active
                              </div>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.frame9}>
                          <Box className={styles.tag}>
                            <Box className={styles.frame8}>
                              <div className={styles.sarahjgmailcom}>
                                Verified
                              </div>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.joinedDateCell}>
                          <div className={styles.may302024}>May 30, 2024</div>
                          <div className={styles.am}>10:30 AM</div>
                        </Box>
                        <Box className={styles.lastActiveCell}>
                          <div className={styles.today}>Today</div>
                          <div className={styles.am}>08:40 AM</div>
                        </Box>
                        <Box className={styles.frame11}>
                          <img className={styles.buttonIcon} alt="" />
                        </Box>
                      </Box>
                    </Box>
                    <Container10
                      johnDoe="Michael Brown"
                      iDUSR001234="ID: USR-001236"
                      johndoegmailcom="michaelb@gmail.com"
                      phoneRowAlignSelf="unset"
                      phoneRowPadding="0px 8.9px 0px 0px"
                      prop="+234 803 456 7890"
                      frameFlex="1.0892"
                      framePadding="0px 51px 0px 1.4px"
                      framePadding1="4px 10px"
                      client="Agent"
                      frameFlex1="1.2344"
                      framePadding2="0px 20.1px 0px 26.7px"
                      verified="Pending"
                      joinedDateCellFlex="1.0605"
                      joinedDateCellPadding="0px 30.9px"
                      may312024="May 29, 2024"
                      today="Yesterday"
                      aM="06:30 PM"
                    />
                    <Box className={styles.moon2}>
                      <Box className={styles.container19}>
                        <img
                          className={styles.lineIcon5}
                          alt=""
                          src="/Line11@2x.png"
                        />
                        <Box className={styles.userDetailsCell2}>
                          <Button
                            className={styles.avatar2}
                            disableElevation
                            variant="contained"
                            sx={{
                              background: "#eaf8e3",
                              borderRadius: "22px",
                              "&:hover": { background: "#eaf8e3" },
                              width: 44,
                              height: 44,
                            }}
                          />
                          <Box className={styles.userNameId}>
                            <Typography
                              className={styles.sarahJohnson}
                              variant="inherit"
                              variantMapping={{ inherit: "h3" }}
                              sx={{
                                fontWeight: "700",
                                lineHeight: "var(--lh-20)",
                              }}
                            >
                              Emily Davis
                            </Typography>
                            <div className={styles.idUsr001235}>
                              ID: USR-001237
                            </div>
                          </Box>
                        </Box>
                        <Box className={styles.dateRangeRow}>
                          <Box className={styles.emailRow}>
                            <img
                              className={styles.houseIcon}
                              alt=""
                              src="/mail1.svg"
                            />
                            <div className={styles.sarahjgmailcom}>
                              emilyd@gmail.com
                            </div>
                          </Box>
                          <Box className={styles.phoneRow}>
                            <img
                              className={styles.houseIcon}
                              alt=""
                              src="/phone1.svg"
                            />
                            <div className={styles.div}>+234 804 567 8901</div>
                          </Box>
                        </Box>
                        <Box className={styles.frame12}>
                          <Box className={styles.tag}>
                            <Box className={styles.frame13}>
                              <Typography
                                className={styles.div}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{
                                  lineHeight: "var(--lh-16)",
                                  fontWeight: "700",
                                }}
                              >
                                Client
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.frame14}>
                          <Box className={styles.tag}>
                            <Box className={styles.frame8}>
                              <div className={styles.sarahjgmailcom}>
                                Suspended
                              </div>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.frame16}>
                          <Box className={styles.tag}>
                            <Box className={styles.frame8}>
                              <div className={styles.sarahjgmailcom}>
                                Verified
                              </div>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.joinedDateCell2}>
                          <div className={styles.may282024}>May 28, 2024</div>
                          <div className={styles.am}>10:30 AM</div>
                        </Box>
                        <Box className={styles.lastActiveCell2}>
                          <div className={styles.today}>May 30</div>
                          <div className={styles.am}>2024</div>
                        </Box>
                        <Box className={styles.frame18}>
                          <img className={styles.buttonIcon} alt="" />
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.clock4}>
                      <Container7
                        userNameIdWidth="90px"
                        davidWilson="David Wilson"
                        iDUSR001238="ID: USR-001238"
                        emailRowAlignSelf="stretch"
                        davidwgmailcom="davidw@gmail.com"
                        prop="+234 805 678 9012"
                        serviceProvider="Service Provider"
                        joinedDateCellFlex="1.0225"
                        joinedDateCellPadding="0px 32.9px 0px 30.9px"
                        may272024="May 27, 2024"
                        today="Today"
                        aM="07:50 AM"
                      />
                    </Box>
                    <Container7
                      containerFlex="unset"
                      containerAlignSelf="stretch"
                      containerMarginTop="-1px"
                      userNameIdWidth="unset"
                      userNameIdFlex="1"
                      davidWilson="Linda Thompson"
                      iDUSR001238="ID: USR-001239"
                      emailRowAlignSelf="unset"
                      davidwgmailcom="lindat@gmail.com"
                      prop="+234 806 789 0123"
                      frameFlex="1.0892"
                      framePadding="0px 51px 0px 1.4px"
                      serviceProvider="Agent"
                      joinedDateCellFlex="unset"
                      joinedDateCellPadding="unset"
                      may272024="May 26, 2024"
                      today="Yesterday"
                      aM="09:40 PM"
                    />
                    <Box className={styles.tableRowJamesAnderson}>
                      <Box className={styles.userDetailsCell3}>
                        <img
                          className={styles.avatarIcon}
                          loading="lazy"
                          alt=""
                          src="/Avatar1.svg"
                        />
                        <Box className={styles.userNameId}>
                          <Typography
                            className={styles.sarahJohnson}
                            variant="inherit"
                            variantMapping={{ inherit: "h3" }}
                            sx={{
                              fontWeight: "700",
                              lineHeight: "var(--lh-20)",
                            }}
                          >
                            James Anderson
                          </Typography>
                          <div className={styles.idUsr001235}>
                            ID: USR-001240
                          </div>
                        </Box>
                      </Box>
                      <Box className={styles.contactInfoCell}>
                        <Box className={styles.emailRow3}>
                          <img
                            className={styles.houseIcon}
                            alt=""
                            src="/mail1.svg"
                          />
                          <div className={styles.sarahjgmailcom}>
                            jamesa@gmail.com
                          </div>
                        </Box>
                        <Box className={styles.phoneRow3}>
                          <img
                            className={styles.houseIcon}
                            alt=""
                            src="/phone1.svg"
                          />
                          <div className={styles.div}>+234 807 890 1234</div>
                        </Box>
                      </Box>
                      <Box className={styles.frame19}>
                        <Box className={styles.tag}>
                          <Box className={styles.frame13}>
                            <Typography
                              className={styles.div}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{
                                lineHeight: "var(--lh-16)",
                                fontWeight: "700",
                              }}
                            >
                              Client
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={styles.frame21}>
                        <Box className={styles.tag}>
                          <Box className={styles.frame22}>
                            <div className={styles.sarahjgmailcom}>Banned</div>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={styles.frame23}>
                        <Box className={styles.tag}>
                          <Box className={styles.frame22}>
                            <div className={styles.sarahjgmailcom}>
                              Rejected
                            </div>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={styles.joinedDateCell3}>
                        <div className={styles.may282024}>May 25, 2024</div>
                        <div className={styles.am}>10:30 AM</div>
                      </Box>
                      <Box className={styles.lastActiveCell3}>
                        <div className={styles.today}>May 25</div>
                        <div className={styles.am}>2024</div>
                      </Box>
                      <Box className={styles.frame25}>
                        <img className={styles.buttonIcon} alt="" />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.container21}>
                <img className={styles.lineIcon2} alt="" src="/Line11@2x.png" />
                <Box className={styles.containerRow1}>
                  <Box className={styles.moon3}>
                    <div className={styles.show}>Show</div>
                  </Box>
                  <Box className={styles.clock5}>
                    <Box className={styles.container22}>
                      <Typography
                        className={styles.div}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                      >
                        10
                      </Typography>
                    </Box>
                  </Box>
                  <div className={styles.entries}>entries</div>
                  <img className={styles.buttonIcon4} alt="" />
                  <button className={styles.button4}>
                    <Typography
                      className={styles.b3}
                      variantMapping={{ inherit: "b" }}
                      sx={{
                        fontFamily: "var(--font-inter)",
                        fontSize: "var(--fs-12)",
                      }}
                    >
                      1
                    </Typography>
                  </button>
                  <button className={styles.button5}>
                    <div className={styles.div6}>2</div>
                  </button>
                  <button className={styles.button6}>
                    <Box className={styles.button7}>
                      <div className={styles.div7}>3</div>
                    </Box>
                  </button>
                  <Box className={styles.div8}>
                    <Typography
                      className={styles.h2}
                      variant="inherit"
                      variantMapping={{ inherit: "h2" }}
                      sx={{ fontWeight: "400", lineHeight: "var(--lh-24)" }}
                    >
                      ...
                    </Typography>
                  </Box>
                  <Box className={styles.button8}>
                    <div className={styles.div9}>1846</div>
                  </Box>
                  <img className={styles.buttonIcon5} alt="" />
                </Box>
              </Box>
            </Box>
          </Box>
        </main>
      </Box>
    </LocalizationProvider>
  );
};

ManageUsers1.propTypes = {
  className: PropTypes.string,
  brandHeaderAlignItems: PropTypes.any,
  brandHeaderGap: PropTypes.any,
  brandHeaderPadding: PropTypes.any,
  brandTextPadding: PropTypes.any,
};

export default ManageUsers1;
