import {
  Box,
  Typography,
  Button,
  TextField,
  InputAdornment,
  Icon,
  IconButton,
} from "@mui/material";
import Container2 from "./Container2";
import Container8 from "./Container8";
import Container9 from "./Container9";
import Container from "./Container";
import PropTypes from "prop-types";
import styles from "./Container3.module.css";

const Container3 = ({ className = "" }) => {
  return (
    <Box className={[styles.container, className].join(" ")}>
      <Box className={styles.pageHeader}>
        <Box className={styles.titleBreadcrumbGroup}>
          <Box className={styles.breadcrumbRow}>
            <div className={styles.bookings}>Bookings</div>
            <img
              className={styles.chevronRightIcon}
              alt=""
              src="/chevron-right2.svg"
            />
            <div className={styles.manageBookings}>Manage Bookings</div>
          </Box>
          <Typography
            className={styles.manageBookings2}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{
              fontSize: "var(--fs-30)",
              lineHeight: "45px",
              letterSpacing: "-0.75px",
              fontWeight: "700",
            }}
          >
            Manage Bookings
          </Typography>
        </Box>
        <Box className={styles.headerActions}>
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
              border: "#dee1e6 solid 1px",
              borderRadius: "16px",
              "&:hover": { background: "#fff" },
              width: 137,
              height: 43,
            }}
          >
            Export Data
          </Button>
          <Button
            className={styles.button2}
            startIcon={<img width="16px" height="16px" src="/plus.svg" />}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "14",
              background: "#171717",
              borderRadius: "16px",
              "&:hover": { background: "#171717" },
              height: 43,
            }}
          >
            Create Booking
          </Button>
        </Box>
      </Box>
      <section className={styles.statsCardsRow}>
        <Box className={styles.container2}>
          <Box className={styles.containerRow0}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/Container8.svg"
            />
            <Box className={styles.arrowUpRight}>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/arrow-up-right2.svg"
              />
            </Box>
            <Typography
              className={styles.b}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "var(--lh-18)", fontWeight: "700" }}
            >
              12.5%
            </Typography>
          </Box>
          <div className={styles.totalBookings}>Total Bookings</div>
          <Typography
            className={styles.h3}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{
              fontWeight: "700",
              fontSize: "var(--fs-24)",
              lineHeight: "var(--lh-36)",
            }}
          >
            1,248
          </Typography>
          <div className={styles.newToday}>84 new today</div>
        </Box>
        <Box className={styles.container3}>
          <Box className={styles.containerRow02}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/Container11.svg"
            />
            <Box className={styles.arrowUpRight}>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/arrow-up-right2.svg"
              />
            </Box>
            <Typography
              className={styles.b}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "var(--lh-18)", fontWeight: "700" }}
            >
              8.2%
            </Typography>
          </Box>
          <div className={styles.upcoming}>Upcoming</div>
          <Typography
            className={styles.k}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{
              fontWeight: "700",
              fontSize: "var(--fs-24)",
              lineHeight: "var(--lh-36)",
            }}
          >
            432
          </Typography>
          <div className={styles.checkingIn}>12 checking in</div>
        </Box>
        <Box className={styles.container4}>
          <Box className={styles.iconTrendRow}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/Container7.svg"
            />
            <Box className={styles.trendGroup}>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/arrow-down-right1.svg"
              />
              <Typography
                className={styles.b}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ lineHeight: "var(--lh-18)", fontWeight: "700" }}
              >
                2.4%
              </Typography>
            </Box>
          </Box>
          <div className={styles.upcoming}>Pending</div>
          <Typography
            className={styles.k}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{
              fontWeight: "700",
              fontSize: "var(--fs-24)",
              lineHeight: "var(--lh-36)",
            }}
          >
            64
          </Typography>
          <div className={styles.urgentActions}>4 urgent actions</div>
        </Box>
        <Box className={styles.container5}>
          <Box className={styles.containerRow03}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/Container10.svg"
            />
            <Box className={styles.arrowUpRight}>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/arrow-down-right1.svg"
              />
            </Box>
            <Typography
              className={styles.b}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "var(--lh-18)", fontWeight: "700" }}
            >
              1.2%
            </Typography>
          </Box>
          <div className={styles.upcoming}>Cancelled</div>
          <Typography
            className={styles.k}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{
              fontWeight: "700",
              fontSize: "var(--fs-24)",
              lineHeight: "var(--lh-36)",
            }}
          >
            28
          </Typography>
          <div className={styles.vs34Last}>vs 34 last month</div>
        </Box>
        <Box className={styles.container6}>
          <Box className={styles.containerRow04}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/Container9.svg"
            />
            <Box className={styles.arrowUpRight}>
              <img
                className={styles.chevronRightIcon}
                alt=""
                src="/arrow-up-right2.svg"
              />
            </Box>
            <Typography
              className={styles.b}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "var(--lh-18)", fontWeight: "700" }}
            >
              15.6%
            </Typography>
          </Box>
          <div className={styles.upcoming}>Revenue</div>
          <Typography
            className={styles.k}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{
              fontWeight: "700",
              fontSize: "var(--fs-24)",
              lineHeight: "var(--lh-36)",
            }}
          >
            $142.5k
          </Typography>
          <div className={styles.kProjected}>+$12k projected</div>
        </Box>
      </section>
      <Box className={styles.container7}>
        <Box className={styles.container8}>
          <Box className={styles.container9}>
            <Box className={styles.container10}>
              <Box className={styles.filterTopRow}>
                <Box className={styles.container11}>
                  <Box className={styles.button3}>
                    <div className={styles.all}>All</div>
                  </Box>
                  <Box className={styles.button4}>
                    <div className={styles.all}>Active</div>
                  </Box>
                  <Box className={styles.button5}>
                    <Box className={styles.button6}>
                      <div className={styles.all}>Pending</div>
                    </Box>
                  </Box>
                  <Box className={styles.button7}>
                    <div className={styles.all}>Completed</div>
                  </Box>
                </Box>
                <Box className={styles.filterActionsGroup}>
                  <img className={styles.lineIcon} alt="" src="/Line1.svg" />
                  <button className={styles.container12}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/Image8.svg"
                    />
                    <div className={styles.moreFilters}>More Filters</div>
                  </button>
                </Box>
              </Box>
              <Box className={styles.bulkActionsRow}>
                <div className={styles.bulkActions}>Bulk Actions:</div>
                <TextField
                  className={styles.container13}
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#dee1e6" },
                    "& .MuiInputBase-root": {
                      height: "32px",
                      backgroundColor: "#efefef",
                      borderRadius: "10px",
                    },
                    width: "156px",
                  }}
                />
                <button className={styles.button8}>
                  <div className={styles.apply}>Apply</div>
                </button>
              </Box>
            </Box>
          </Box>
          <img className={styles.lineIcon2} alt="" src="/Line.svg" />
        </Box>
        <Box className={styles.container14}>
          <Box className={styles.container15}>
            <Box className={styles.container16}>
              <Box className={styles.containerRow05}>
                <input className={styles.checkbox} type="checkbox" />
                <Typography
                  className={styles.bookingId}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-18)",
                    letterSpacing: "var(--ls-0_6)",
                    fontWeight: "700",
                  }}
                >
                  Booking ID
                </Typography>
                <Box className={styles.guest}>
                  <Typography
                    className={styles.status}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      lineHeight: "var(--lh-18)",
                      letterSpacing: "var(--ls-0_6)",
                      fontWeight: "700",
                    }}
                  >
                    Guest
                  </Typography>
                </Box>
                <Typography
                  className={styles.listingservice}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-18)",
                    letterSpacing: "var(--ls-0_6)",
                    fontWeight: "700",
                  }}
                >
                  Listing/Service
                </Typography>
                <Typography
                  className={styles.datesTime}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-18)",
                    letterSpacing: "var(--ls-0_6)",
                    fontWeight: "700",
                  }}
                >{`Dates & Time`}</Typography>
                <Typography
                  className={styles.amount}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-18)",
                    letterSpacing: "var(--ls-0_6)",
                    fontWeight: "700",
                  }}
                >
                  Amount
                </Typography>
                <Typography
                  className={styles.status}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-18)",
                    letterSpacing: "var(--ls-0_6)",
                    fontWeight: "700",
                  }}
                >
                  Status
                </Typography>
                <Typography
                  className={styles.actions}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-18)",
                    letterSpacing: "var(--ls-0_6)",
                    fontWeight: "700",
                  }}
                >
                  Actions
                </Typography>
              </Box>
              <img className={styles.lineIcon3} alt="" src="/Line.svg" />
            </Box>
            <img className={styles.checkboxIcon} alt="" src="/Checkbox.svg" />
            <Box className={styles.firstBookingRow}>
              <Box className={styles.bookingIdCell}>
                <Typography
                  className={styles.bk20241000}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                >
                  BK-2024-1000
                </Typography>
                <div className={styles.may201030}>May 20, 10:30 AM</div>
              </Box>
              <Box className={styles.guestCell}>
                <img className={styles.imageIcon2} alt="" src />
                <Box className={styles.guestInfo}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    John Smith
                  </Typography>
                  <div className={styles.jsmithexamplecom}>
                    j.smith@example.com
                  </div>
                </Box>
              </Box>
              <Box className={styles.listingCell}>
                <div className={styles.luxuryVilla}>Luxury Villa</div>
                <div className={styles.accommodation}>Accommodation</div>
              </Box>
              <Box className={styles.datesCell}>
                <Box className={styles.dateRangeRow}>
                  <img
                    className={styles.calendarIcon}
                    alt=""
                    src="/calendar1.svg"
                  />
                  <div className={styles.jun10}>Jun 10 - Jun 15</div>
                </Box>
                <Box className={styles.nightsRow}>
                  <Box className={styles.moon}>
                    <img className={styles.moonIcon} alt="" src="/moon.svg" />
                  </Box>
                  <div className={styles.nights}>5 nights</div>
                  <Box className={styles.clock}>
                    <img className={styles.clockIcon} alt="" src="/clock.svg" />
                  </Box>
                  <Box className={styles.pm}>
                    <div className={styles.pm2}>2:00 PM</div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.amountCell}>
                <Typography
                  className={styles.johnSmith}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                >
                  $450
                </Typography>
                <Box className={styles.container17}>
                  <Typography
                    className={styles.paid}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                  >
                    Paid
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.container18}>
                <Box className={styles.container19}>
                  <div className={styles.confirmed}>Upcoming</div>
                </Box>
              </Box>
            </Box>
            <section className={styles.container20}>
              <img className={styles.lineIcon4} alt="" src="/Line.svg" />
              <Box className={styles.bookingIdCol}>
                <Box className={styles.bookingIdRow}>
                  <Box className={styles.checkbox2}>
                    <img
                      className={styles.checkboxIcon2}
                      loading="lazy"
                      alt=""
                      src="/Checkbox.svg"
                    />
                  </Box>
                  <Typography
                    className={styles.bk20241000}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    BK-2024-1001
                  </Typography>
                </Box>
                <div className={styles.may211030}>May 21, 10:30 AM</div>
              </Box>
              <Box className={styles.guestCol}>
                <img className={styles.imageIcon2} alt="" src />
                <Box className={styles.guestInfo2}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    Sarah Doe
                  </Typography>
                  <div className={styles.jsmithexamplecom}>
                    j.smith@example.com
                  </div>
                </Box>
              </Box>
              <Box className={styles.listingCol}>
                <div className={styles.luxuryVilla}>City Apartment</div>
                <div className={styles.service}>Service</div>
              </Box>
              <Box className={styles.datesCol}>
                <Box className={styles.dateRangeRow}>
                  <img
                    className={styles.calendarIcon}
                    alt=""
                    src="/calendar1.svg"
                  />
                  <div className={styles.jun10}>Jun 11 - Jun 16</div>
                </Box>
                <Box className={styles.nightsTimeRow}>
                  <img className={styles.moonIcon} alt="" src="/moon.svg" />
                  <div className={styles.nights}>6 nights</div>
                  <Box className={styles.clock2}>
                    <img className={styles.clockIcon} alt="" src="/clock.svg" />
                  </Box>
                  <div className={styles.pm3}>2:00 PM</div>
                </Box>
              </Box>
              <Box className={styles.amountCol}>
                <Typography
                  className={styles.bk20241000}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                >
                  $500
                </Typography>
                <Box className={styles.container21}>
                  <Typography
                    className={styles.paid}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                  >
                    Partial
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.container22}>
                <div className={styles.pending3}>Pending</div>
              </Box>
            </section>
            <section className={styles.container23}>
              <img className={styles.lineIcon5} alt="" src="/Line.svg" />
              <Box className={styles.bookingIdCol2}>
                <Box className={styles.checkboxIdRow}>
                  <input className={styles.checkbox3} type="checkbox" />
                  <Typography
                    className={styles.bk20241000}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    BK-2024-1002
                  </Typography>
                </Box>
                <div className={styles.may221030}>May 22, 10:30 AM</div>
              </Box>
              <Box className={styles.guestCol2}>
                <img className={styles.imageIcon2} alt="" src />
                <Box className={styles.guestInfo3}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    Michael Chen
                  </Typography>
                  <div className={styles.jsmithexamplecom}>
                    j.smith@example.com
                  </div>
                </Box>
              </Box>
              <Box className={styles.serviceCol}>
                <div className={styles.luxuryVilla}>Pool Cleaning</div>
                <div className={styles.jsmithexamplecom}>Accommodation</div>
              </Box>
              <Box className={styles.datesTimeCol}>
                <Box className={styles.dateRangeRow3}>
                  <img
                    className={styles.calendarIcon}
                    alt=""
                    src="/calendar1.svg"
                  />
                  <div className={styles.jun10}>Jun 12 - Jun 17</div>
                </Box>
                <Box className={styles.nightsTimeRow}>
                  <Box className={styles.moon2}>
                    <img className={styles.moonIcon} alt="" src="/moon.svg" />
                  </Box>
                  <div className={styles.nights}>7 nights</div>
                  <Box className={styles.clock}>
                    <img className={styles.clockIcon} alt="" src="/clock.svg" />
                  </Box>
                  <div className={styles.pm4}>2:00 PM</div>
                </Box>
              </Box>
              <Box className={styles.amountCol2}>
                <Box className={styles.div}>
                  <Typography
                    className={styles.bk20241000}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    $550
                  </Typography>
                </Box>
                <Box className={styles.container21}>
                  <Typography
                    className={styles.paid}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                  >
                    Partial
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.container25}>
                <div className={styles.confirmed}>Confirmed</div>
              </Box>
            </section>
            <Container2 moon="/moon.svg" />
            <section className={styles.bookingsTableRow5}>
              <Box className={styles.container26}>
                <Box className={styles.container27}>
                  <img className={styles.lineIcon6} alt="" src="/Line.svg" />
                  <Box className={styles.bookingIdCol3}>
                    <Box className={styles.checkboxIdRow}>
                      <Container8 />
                      <Typography
                        className={styles.bk20241000}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                      >
                        BK-2024-1004
                      </Typography>
                    </Box>
                    <div className={styles.may241030}>May 24, 10:30 AM</div>
                  </Box>
                  <Box className={styles.guestCol3}>
                    <img className={styles.imageIcon2} alt="" src />
                    <Box className={styles.guestColColumn1}>
                      <Typography
                        className={styles.johnSmith}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                      >
                        John Smith
                      </Typography>
                      <div className={styles.jsmithexamplecom}>
                        j.smith@example.com
                      </div>
                    </Box>
                  </Box>
                  <Box className={styles.listingCol2}>
                    <div className={styles.luxuryVilla}>Luxury Villa</div>
                    <div className={styles.jsmithexamplecom}>Accommodation</div>
                  </Box>
                  <Box className={styles.datesTimeCol2}>
                    <Box className={styles.dateRangeRow4}>
                      <img
                        className={styles.calendarIcon}
                        alt=""
                        src="/calendar1.svg"
                      />
                      <div className={styles.jun10}>Jun 14 - Jun 19</div>
                    </Box>
                    <Box className={styles.nightsRow}>
                      <Container8
                        checkboxHeight="9.9px"
                        checkboxPadding="1.9px 0px 0px"
                        selectAllFlex="unset"
                        selectAllJustifyContent="unset"
                        selectAllMinWidth="unset"
                      />
                      <div className={styles.nights}>9 nights</div>
                      <Box className={styles.clock4}>
                        <img
                          className={styles.clockIcon}
                          alt=""
                          src="/clock.svg"
                        />
                      </Box>
                      <div className={styles.pm3}>2:00 PM</div>
                    </Box>
                  </Box>
                  <Box className={styles.amountStatusCol}>
                    <Typography
                      className={styles.bk20241000}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      $650
                    </Typography>
                    <Box className={styles.container21}>
                      <Typography
                        className={styles.paid}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                      >
                        Partial
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.container29}>
                    <div className={styles.confirmed}>Upcoming</div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.container30}>
                <img className={styles.lineIcon4} alt="" src="/Line.svg" />
                <Box className={styles.checkbox4}>
                  <img
                    className={styles.checkboxIcon2}
                    loading="lazy"
                    alt=""
                    src="/Checkbox.svg"
                  />
                </Box>
                <Box className={styles.bookingIdCell2}>
                  <Typography
                    className={styles.bk202410012}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    BK-2024-1001
                  </Typography>
                  <div className={styles.may2110302}>May 21, 10:30 AM</div>
                </Box>
                <Box className={styles.guestCell2}>
                  <img className={styles.imageIcon2} alt="" src />
                  <Box className={styles.guestInfo2}>
                    <Typography
                      className={styles.johnSmith}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      Sarah Doe
                    </Typography>
                    <div className={styles.jsmithexamplecom}>
                      j.smith@example.com
                    </div>
                  </Box>
                </Box>
                <Box className={styles.listingCell2}>
                  <div className={styles.luxuryVilla}>City Apartment</div>
                  <div className={styles.service}>Service</div>
                </Box>
                <Box className={styles.datesTimeCell}>
                  <Box className={styles.dateRangeRow5}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/calendar1.svg"
                    />
                    <div className={styles.jun10}>Jun 11 - Jun 16</div>
                  </Box>
                  <Box className={styles.nightsTimeRow4}>
                    <img className={styles.moonIcon} alt="" src="/moon.svg" />
                    <div className={styles.nights5}>6 nights</div>
                    <Box className={styles.clock5}>
                      <img
                        className={styles.clockIcon}
                        alt=""
                        src="/clock.svg"
                      />
                    </Box>
                    <div className={styles.pm2}>2:00 PM</div>
                  </Box>
                </Box>
                <Box className={styles.amountCell2}>
                  <Typography
                    className={styles.bk20241000}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    $500
                  </Typography>
                  <Box className={styles.container21}>
                    <Typography
                      className={styles.paid}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                    >
                      Partial
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.container32}>
                  <Box className={styles.container33}>
                    <div className={styles.pending3}>Pending</div>
                  </Box>
                </Box>
              </Box>
            </section>
            <section className={styles.container34}>
              <img className={styles.lineIcon3} alt="" src="/Line.svg" />
              <Box className={styles.bookingRowContent}>
                <Box className={styles.bookingIdCell3}>
                  <Box className={styles.bookingIdRow3}>
                    <Box className={styles.checkbox2}>
                      <img
                        className={styles.checkboxIcon2}
                        loading="lazy"
                        alt=""
                        src="/Checkbox.svg"
                      />
                    </Box>
                    <Typography
                      className={styles.bk20241000}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      BK-2024-1002
                    </Typography>
                  </Box>
                  <div className={styles.may221030}>May 22, 10:30 AM</div>
                </Box>
                <Box className={styles.guestCell3}>
                  <img className={styles.imageIcon2} alt="" src />
                  <Box className={styles.guestInfo2}>
                    <Typography
                      className={styles.johnSmith}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      Michael Chen
                    </Typography>
                    <div className={styles.jsmithexamplecom}>
                      j.smith@example.com
                    </div>
                  </Box>
                </Box>
                <Box className={styles.listingServiceCell}>
                  <div className={styles.poolCleaning2}>Pool Cleaning</div>
                  <div className={styles.jsmithexamplecom}>Accommodation</div>
                </Box>
                <Box className={styles.datesTimeCell2}>
                  <Box className={styles.dateRangeRow3}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/calendar1.svg"
                    />
                    <div className={styles.jun10}>Jun 12 - Jun 17</div>
                  </Box>
                  <Box className={styles.nightsTimeRow}>
                    <Box className={styles.moon2}>
                      <img className={styles.moonIcon} alt="" src="/moon.svg" />
                    </Box>
                    <div className={styles.nights}>7 nights</div>
                    <Container9 />
                    <div className={styles.pm7}>2:00 PM</div>
                  </Box>
                </Box>
                <Box className={styles.amountStatusCell}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    $550
                  </Typography>
                  <Box className={styles.container21}>
                    <Typography
                      className={styles.paid}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                    >
                      Partial
                    </Typography>
                  </Box>
                </Box>
                <Container9
                  clockHeight="28.9px"
                  clockPadding="6.9px 0px 0px"
                  createPayoutBatchFlex="unset"
                  createPayoutBatchDisplay="flex"
                  createPayoutBatchAlignItems="flex-start"
                  createPayoutBatchMinWidth="unset"
                  createPayoutBatchBorder="unset"
                  createPayoutBatchBackgroundColor="unset"
                  createPayoutBatchFontFamily="unset"
                  createPayoutBatchFontSize="unset"
                  createPayoutBatchColor="unset"
                />
              </Box>
            </section>
            <Container2 containerTop="987px" moon="/moon.svg" />
            <section className={styles.container36}>
              <img className={styles.lineIcon5} alt="" src="/Line.svg" />
              <Box className={styles.rowContent}>
                <Box className={styles.bookingIdCol4}>
                  <Box className={styles.checkbox6}>
                    <img
                      className={styles.checkboxIcon2}
                      loading="lazy"
                      alt=""
                      src="/Checkbox.svg"
                    />
                  </Box>
                  <Box className={styles.bookingIdTextGroup}>
                    <Typography
                      className={styles.johnSmith}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      BK-2024-1004
                    </Typography>
                    <div className={styles.may2410302}>May 24, 10:30 AM</div>
                  </Box>
                </Box>
                <Box className={styles.guestCol4}>
                  <img className={styles.imageIcon2} alt="" src />
                  <Box className={styles.guestInfo6}>
                    <Typography
                      className={styles.johnSmith}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      John Smith
                    </Typography>
                    <div className={styles.jsmithexamplecom}>
                      j.smith@example.com
                    </div>
                  </Box>
                </Box>
                <Box className={styles.listingCol3}>
                  <div className={styles.luxuryVilla}>Luxury Villa</div>
                  <div className={styles.accommodation5}>Accommodation</div>
                </Box>
                <Box className={styles.datesCol2}>
                  <Box className={styles.dateRangeRow7}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/calendar1.svg"
                    />
                    <div className={styles.jun10}>Jun 14 - Jun 19</div>
                  </Box>
                  <Box className={styles.nightsTimeRow5}>
                    <Box className={styles.moon4}>
                      <img className={styles.moonIcon} alt="" src="/moon.svg" />
                    </Box>
                    <div className={styles.nights5}>9 nights</div>
                    <Box className={styles.clock6}>
                      <img
                        className={styles.clockIcon}
                        alt=""
                        src="/clock.svg"
                      />
                    </Box>
                    <div className={styles.pm2}>2:00 PM</div>
                  </Box>
                </Box>
                <Box className={styles.amountCol3}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    $650
                  </Typography>
                  <Box className={styles.container21}>
                    <Typography
                      className={styles.paid}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                    >
                      Partial
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.container38}>
                  <Box className={styles.container19}>
                    <div className={styles.confirmed}>Upcoming</div>
                  </Box>
                </Box>
              </Box>
            </section>
            <section className={styles.container40}>
              <img className={styles.lineIcon4} alt="" src="/Line.svg" />
              <Box className={styles.checkbox7}>
                <img
                  className={styles.checkboxIcon2}
                  loading="lazy"
                  alt=""
                  src="/Checkbox.svg"
                />
              </Box>
              <Box className={styles.bookingIdCol5}>
                <Typography
                  className={styles.bk202410012}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                >
                  BK-2024-1001
                </Typography>
                <div className={styles.may2110302}>May 21, 10:30 AM</div>
              </Box>
              <Box className={styles.guestCol5}>
                <img className={styles.imageIcon2} alt="" src />
                <Box className={styles.guestInfo2}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    Sarah Doe
                  </Typography>
                  <div className={styles.jsmithexamplecom}>
                    j.smith@example.com
                  </div>
                </Box>
              </Box>
              <Box className={styles.listingCol4}>
                <div className={styles.luxuryVilla}>City Apartment</div>
                <div className={styles.service}>Service</div>
              </Box>
              <Box className={styles.datesTimeCol3}>
                <Box className={styles.dateRangeRow8}>
                  <img
                    className={styles.calendarIcon}
                    alt=""
                    src="/calendar1.svg"
                  />
                  <div className={styles.jun10}>Jun 11 - Jun 16</div>
                </Box>
                <Box className={styles.nightsTimeRow4}>
                  <img className={styles.moonIcon} alt="" src="/moon.svg" />
                  <div className={styles.nights5}>6 nights</div>
                  <Box className={styles.clock2}>
                    <img className={styles.clockIcon} alt="" src="/clock.svg" />
                  </Box>
                  <div className={styles.pm2}>2:00 PM</div>
                </Box>
              </Box>
              <Box className={styles.amountCol4}>
                <Typography
                  className={styles.bk20241000}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                >
                  $500
                </Typography>
                <Box className={styles.container21}>
                  <Typography
                    className={styles.paid}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                  >
                    Partial
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.container42}>
                <Box className={styles.container33}>
                  <div className={styles.pending3}>Pending</div>
                </Box>
              </Box>
            </section>
            <section className={styles.container44}>
              <img className={styles.lineIcon3} alt="" src="/Line.svg" />
              <Box className={styles.rowContent2}>
                <Box className={styles.bookingIdCell4}>
                  <Box className={styles.checkbox6}>
                    <img
                      className={styles.checkboxIcon2}
                      loading="lazy"
                      alt=""
                      src="/Checkbox.svg"
                    />
                  </Box>
                  <Box className={styles.bookingIdTexts}>
                    <Typography
                      className={styles.johnSmith}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      BK-2024-1002
                    </Typography>
                    <div className={styles.may2410302}>May 22, 10:30 AM</div>
                  </Box>
                </Box>
                <Box className={styles.guestCell3}>
                  <img className={styles.imageIcon2} alt="" src />
                  <Box className={styles.guestInfo2}>
                    <Typography
                      className={styles.johnSmith}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      Michael Chen
                    </Typography>
                    <div className={styles.jsmithexamplecom}>
                      j.smith@example.com
                    </div>
                  </Box>
                </Box>
                <Box className={styles.serviceCell}>
                  <div className={styles.poolCleaning2}>Pool Cleaning</div>
                  <div className={styles.jsmithexamplecom}>Accommodation</div>
                </Box>
                <Box className={styles.datesTimeCell3}>
                  <Box className={styles.dateRangeRow9}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/calendar1.svg"
                    />
                    <div className={styles.jun10}>Jun 12 - Jun 17</div>
                  </Box>
                  <Box className={styles.nightsTimeRow7}>
                    <Box className={styles.moon2}>
                      <img className={styles.moonIcon} alt="" src="/moon.svg" />
                    </Box>
                    <div className={styles.nights5}>7 nights</div>
                    <Box className={styles.clock}>
                      <img
                        className={styles.clockIcon}
                        alt=""
                        src="/clock.svg"
                      />
                    </Box>
                    <div className={styles.pm2}>2:00 PM</div>
                  </Box>
                </Box>
                <Box className={styles.amountCell3}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    $550
                  </Typography>
                  <Box className={styles.container21}>
                    <Typography
                      className={styles.paid}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                    >
                      Partial
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.container46}>
                  <Box className={styles.container47}>
                    <div className={styles.confirmed}>Confirmed</div>
                  </Box>
                </Box>
              </Box>
            </section>
            <Container moon="/moon.svg" />
            <section className={styles.container48}>
              <img className={styles.lineIcon5} alt="" src="/Line.svg" />
              <Box className={styles.bookingIdCol6}>
                <Box className={styles.bookingIdRow4}>
                  <Box className={styles.checkbox2}>
                    <img
                      className={styles.checkboxIcon2}
                      loading="lazy"
                      alt=""
                      src="/Checkbox.svg"
                    />
                  </Box>
                  <Typography
                    className={styles.bk20241000}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    BK-2024-1004
                  </Typography>
                </Box>
                <div className={styles.may241030}>May 24, 10:30 AM</div>
              </Box>
              <Box className={styles.guestCol6}>
                <img className={styles.imageIcon2} alt="" src />
                <Box className={styles.guestInfo3}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    John Smith
                  </Typography>
                  <div className={styles.jsmithexamplecom}>
                    j.smith@example.com
                  </div>
                </Box>
              </Box>
              <Box className={styles.listingCol5}>
                <div className={styles.luxuryVilla}>Luxury Villa</div>
                <div className={styles.accommodation5}>Accommodation</div>
              </Box>
              <Box className={styles.datesTimeCol4}>
                <Box className={styles.dateRangeRow4}>
                  <img
                    className={styles.calendarIcon}
                    alt=""
                    src="/calendar1.svg"
                  />
                  <div className={styles.jun10}>Jun 14 - Jun 19</div>
                </Box>
                <Box className={styles.nightsRow}>
                  <Box className={styles.moon4}>
                    <img className={styles.moonIcon} alt="" src="/moon.svg" />
                  </Box>
                  <div className={styles.nights}>9 nights</div>
                  <Box className={styles.clock6}>
                    <img className={styles.clockIcon} alt="" src="/clock.svg" />
                  </Box>
                  <div className={styles.pm4}>2:00 PM</div>
                </Box>
              </Box>
              <Box className={styles.amountCol5}>
                <Typography
                  className={styles.johnSmith}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                >
                  $650
                </Typography>
                <Box className={styles.container21}>
                  <Typography
                    className={styles.paid}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                  >
                    Partial
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.container29}>
                <div className={styles.confirmed}>Upcoming</div>
              </Box>
            </section>
            <section className={styles.container51}>
              <img className={styles.lineIcon4} alt="" src="/Line.svg" />
              <Box className={styles.checkbox7}>
                <img
                  className={styles.checkboxIcon2}
                  loading="lazy"
                  alt=""
                  src="/Checkbox.svg"
                />
              </Box>
              <Box className={styles.bookingIdCol7}>
                <Typography
                  className={styles.johnSmith}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                >
                  BK-2024-1001
                </Typography>
                <div className={styles.may2410302}>May 21, 10:30 AM</div>
              </Box>
              <Box className={styles.guestCol7}>
                <img className={styles.imageIcon2} alt="" src />
                <Box className={styles.guestInfo2}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    Sarah Doe
                  </Typography>
                  <div className={styles.jsmithexamplecom}>
                    j.smith@example.com
                  </div>
                </Box>
              </Box>
              <Box className={styles.listingCol6}>
                <div className={styles.poolCleaning2}>City Apartment</div>
                <div className={styles.service4}>Service</div>
              </Box>
              <Box className={styles.datesTimeCol5}>
                <Box className={styles.dateRangeRow11}>
                  <img
                    className={styles.calendarIcon}
                    alt=""
                    src="/calendar1.svg"
                  />
                  <div className={styles.jun10}>Jun 11 - Jun 16</div>
                </Box>
                <Box className={styles.nightsTimeRow}>
                  <img className={styles.moonIcon} alt="" src="/moon.svg" />
                  <div className={styles.nights}>6 nights</div>
                  <Box className={styles.clock2}>
                    <img className={styles.clockIcon} alt="" src="/clock.svg" />
                  </Box>
                  <div className={styles.pm3}>2:00 PM</div>
                </Box>
              </Box>
              <Box className={styles.amountCol6}>
                <Typography
                  className={styles.bk20241000}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                >
                  $500
                </Typography>
                <Box className={styles.container21}>
                  <Typography
                    className={styles.paid}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                  >
                    Partial
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.container53}>
                <Box className={styles.container33}>
                  <div className={styles.pending3}>Pending</div>
                </Box>
              </Box>
            </section>
            <section className={styles.container55}>
              <img className={styles.lineIcon5} alt="" src="/Line.svg" />
              <Box className={styles.rowContent3}>
                <Box className={styles.bookingIdCell5}>
                  <Box className={styles.checkbox6}>
                    <img
                      className={styles.checkboxIcon2}
                      alt=""
                      src="/Checkbox.svg"
                    />
                  </Box>
                  <Box className={styles.bookingIdTexts2}>
                    <Typography
                      className={styles.johnSmith}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      BK-2024-1002
                    </Typography>
                    <div className={styles.may2410302}>May 22, 10:30 AM</div>
                  </Box>
                </Box>
                <Box className={styles.guestCell5}>
                  <img className={styles.imageIcon2} alt="" src />
                  <Box className={styles.guestInfo6}>
                    <Typography
                      className={styles.johnSmith}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      Michael Chen
                    </Typography>
                    <div className={styles.jsmithexamplecom}>
                      j.smith@example.com
                    </div>
                  </Box>
                </Box>
                <Box className={styles.serviceCell2}>
                  <div className={styles.poolCleaning2}>Pool Cleaning</div>
                  <div className={styles.jsmithexamplecom}>Accommodation</div>
                </Box>
                <Box className={styles.datesTimeCell4}>
                  <Box className={styles.dateRangeRow12}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/calendar1.svg"
                    />
                    <div className={styles.jun10}>Jun 12 - Jun 17</div>
                  </Box>
                  <Box className={styles.nightsTimeRow5}>
                    <Box className={styles.moon2}>
                      <img className={styles.moonIcon} alt="" src="/moon.svg" />
                    </Box>
                    <div className={styles.nights5}>7 nights</div>
                    <Box className={styles.clock}>
                      <img
                        className={styles.clockIcon}
                        alt=""
                        src="/clock.svg"
                      />
                    </Box>
                    <div className={styles.pm2}>2:00 PM</div>
                  </Box>
                </Box>
                <Box className={styles.amountCell4}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    $550
                  </Typography>
                  <Box className={styles.container21}>
                    <Typography
                      className={styles.paid}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                    >
                      Partial
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.container57}>
                  <Box className={styles.container47}>
                    <div className={styles.confirmed}>Confirmed</div>
                  </Box>
                </Box>
              </Box>
            </section>
            <Container
              containerTop="2064px"
              containerPadding="42px 176px 39.1px 9px"
              bookingIdColHeight="unset"
              bookingIdColPadding="11px 5px 0px 0px"
              bookingIdColFlex="1"
              bookingIdRowHeight="unset"
              guestColPadding="1px 0px 0px"
              guestInfoFlex="unset"
              guestInfoMinWidth="unset"
              guestInfoWidth="115px"
              serviceColHeight="unset"
              serviceColAlignItems="center"
              serviceColPadding="0px 2px 2.8px"
              serviceColWidth="108px"
              gardenMaintTextAlign="center"
              gardenMaintAlignSelf="stretch"
              serviceAlignSelf="unset"
              serviceDisplay="inline-block"
              moon="/moon.svg"
              typographyAlignSelf="unset"
            />
            <section className={styles.container59}>
              <img className={styles.lineIcon3} alt="" src="/Line.svg" />
              <Box className={styles.bookingRowContent2}>
                <Box className={styles.bookingIdCol8}>
                  <Box className={styles.bookingIdRow4}>
                    <Box className={styles.checkbox2}>
                      <img
                        className={styles.checkboxIcon2}
                        alt=""
                        src="/Checkbox.svg"
                      />
                    </Box>
                    <Typography
                      className={styles.bk20241000}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      BK-2024-1004
                    </Typography>
                  </Box>
                  <div className={styles.may241030}>May 24, 10:30 AM</div>
                </Box>
                <Box className={styles.guestCol8}>
                  <img className={styles.imageIcon2} alt="" src />
                  <Box className={styles.guestInfo12}>
                    <Typography
                      className={styles.johnSmith}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      John Smith
                    </Typography>
                    <div className={styles.jsmithexamplecom}>
                      j.smith@example.com
                    </div>
                  </Box>
                </Box>
                <Box className={styles.listingCol3}>
                  <div className={styles.luxuryVilla}>Luxury Villa</div>
                  <div className={styles.accommodation5}>Accommodation</div>
                </Box>
                <Box className={styles.datesCol2}>
                  <Box className={styles.dateRangeRow7}>
                    <img
                      className={styles.calendarIcon}
                      alt=""
                      src="/calendar1.svg"
                    />
                    <div className={styles.jun10}>Jun 14 - Jun 19</div>
                  </Box>
                  <Box className={styles.nightsTimeRow5}>
                    <Box className={styles.moon4}>
                      <img className={styles.moonIcon} alt="" src="/moon.svg" />
                    </Box>
                    <div className={styles.nights5}>9 nights</div>
                    <Box className={styles.clock6}>
                      <img
                        className={styles.clockIcon}
                        alt=""
                        src="/clock.svg"
                      />
                    </Box>
                    <div className={styles.pm2}>2:00 PM</div>
                  </Box>
                </Box>
                <Box className={styles.amountCol3}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    $650
                  </Typography>
                  <Box className={styles.container21}>
                    <Typography
                      className={styles.paid}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-14)", fontWeight: "700" }}
                    >
                      Partial
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.container38}>
                  <Box className={styles.container19}>
                    <div className={styles.confirmed}>Upcoming</div>
                  </Box>
                </Box>
              </Box>
            </section>
          </Box>
        </Box>
        <Box className={styles.container63}>
          <img className={styles.lineIcon3} alt="" src="/Line.svg" />
          <Box className={styles.containerRow1}>
            <div className={styles.showing1ToContainer}>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
                sx={{ lineHeight: "var(--lh-22)" }}
              >{`Showing `}</Typography>
              <Typography
                className={styles.to15}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ lineHeight: "var(--lh-22)" }}
              >
                1 to 15
              </Typography>
              <Typography
                variant="inherit"
                variantMapping={{ inherit: "span" }}
                sx={{ lineHeight: "var(--lh-22)" }}
              >
                {" "}
                of 1,248 bookings
              </Typography>
            </div>
            <img className={styles.buttonIcon} alt="" src="/Button.svg" />
            <button className={styles.button9}>
              <div className={styles.div2}>1</div>
            </button>
            <button className={styles.button10}>
              <div className={styles.div3}>2</div>
            </button>
            <button className={styles.button10}>
              <div className={styles.div4}>3</div>
            </button>
            <Box className={styles.button12}>
              <div className={styles.all}>...</div>
            </Box>
            <button className={styles.button10}>
              <div className={styles.div4}>12</div>
            </button>
            <img className={styles.buttonIcon2} alt="" src="/Button1.svg" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Container3.propTypes = {
  className: PropTypes.string,
};

export default Container3;
