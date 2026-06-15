import { Typography, Box, Button } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container1.module.css";

const Container1 = ({ className = "" }) => {
  return (
    <Box className={[styles.container, className].join(" ")}>
      <Box className={styles.container2}>
        <Box className={styles.containerRow0}>
          <Typography
            className={styles.bookingDetails}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "700", lineHeight: "var(--lh-28)" }}
          >
            Booking Details
          </Typography>
          <img className={styles.imageIcon} alt="" src="/Image9.svg" />
        </Box>
        <img className={styles.lineIcon} alt="" src="/Line10@2x.png" />
      </Box>
      <img className={styles.lineIcon2} alt="" src="/Line1.svg" />
      <Box className={styles.container3}>
        <Box className={styles.container4}>
          <Box className={styles.bookingHeader}>
            <Box className={styles.image} />
            <Box className={styles.bookingMeta}>
              <Box className={styles.bookingIdBk9021}>
                <Typography
                  className={styles.bookingIdBk90212}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-15)",
                    letterSpacing: "var(--ls-1)",
                    fontWeight: "700",
                  }}
                >
                  Booking ID: BK-9021
                </Typography>
              </Box>
              <Typography
                className={styles.luxuryVillaWith}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{
                  fontSize: "var(--fs-16)",
                  lineHeight: "var(--lh-24)",
                  fontWeight: "700",
                }}
              >
                Luxury Villa with Private Pool
              </Typography>
              <div className={styles.lekkiPhase1}>Lekki Phase 1, Lagos</div>
            </Box>
          </Box>
          <Box className={styles.container5}>
            <Box className={styles.checkinGroup}>
              <Typography
                className={styles.checkIn}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ lineHeight: "var(--lh-15)", fontWeight: "700" }}
              >
                Check-in
              </Typography>
              <div className={styles.oct152024}>Oct 15, 2024</div>
            </Box>
            <Box className={styles.checkoutGroup}>
              <Typography
                className={styles.checkIn}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ lineHeight: "var(--lh-15)", fontWeight: "700" }}
              >
                Check-out
              </Typography>
              <div className={styles.oct202024}>Oct 20, 2024</div>
            </Box>
          </Box>
          <Box className={styles.guestInformationSection}>
            <Typography
              className={styles.guestInformation}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{
                lineHeight: "var(--lh-16)",
                letterSpacing: "var(--ls-0_6)",
                fontWeight: "700",
              }}
            >
              Guest Information
            </Typography>
            <Box className={styles.guestProfileRow}>
              <Box className={styles.guestAvatarInfo}>
                <img className={styles.imageIcon2} alt="" src />
                <Box className={styles.guestNameMembership}>
                  <Typography
                    className={styles.johnSmith}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                  >
                    John Smith
                  </Typography>
                  <div className={styles.verifiedMember}>
                    Verified Member • Joined 2023
                  </div>
                </Box>
              </Box>
              <img
                className={styles.containerIcon}
                alt=""
                src="/Container6.svg"
              />
            </Box>
            <Box className={styles.guestEmailRow}>
              <img className={styles.imageIcon3} alt="" src="/Image7.svg" />
              <div className={styles.johncooperemailcom}>
                john.smith@email.com
              </div>
            </Box>
            <Box className={styles.guestPhoneRow}>
              <img className={styles.imageIcon4} alt="" src />
              <div className={styles.div}>+234 802 345 6789</div>
            </Box>
          </Box>
          <Box className={styles.container6}>
            <Box className={styles.image2} />
            <Box className={styles.frame}>
              <Box className={styles.frame2}>
                <Box className={styles.button}>
                  <Typography
                    className={styles.div}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                  >
                    Get Directions
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.bookingTimelineSection}>
            <Typography
              className={styles.bookingTimeline}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{
                lineHeight: "var(--lh-16)",
                letterSpacing: "var(--ls-0_6)",
                fontWeight: "700",
              }}
            >
              Booking Timeline
            </Typography>
            <Box className={styles.timelineItems}>
              <Box className={styles.timelineItemBookingRequeste}>
                <Box className={styles.timelineIndicatorCol}>
                  <img className={styles.lineIcon3} alt="" src="/Line1.svg" />
                  <Box className={styles.rectangle} />
                </Box>
                <Box className={styles.timelineContent1}>
                  <Typography
                    className={styles.bookingRequested}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                  >
                    Booking Requested
                  </Typography>
                  <div className={styles.oct100915}>Oct 10, 09:15 AM</div>
                </Box>
              </Box>
              <Box className={styles.timelineItemBookingRequeste}>
                <Box className={styles.timelineIndicatorCol}>
                  <img className={styles.lineIcon3} alt="" src="/Line1.svg" />
                  <Box className={styles.rectangle} />
                </Box>
                <Box className={styles.timelineContent1}>
                  <Typography
                    className={styles.bookingRequested}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                  >
                    Payment Confirmed
                  </Typography>
                  <div className={styles.oct100915}>Oct 10, 10:30 AM</div>
                </Box>
              </Box>
              <Box className={styles.timelineItemBookingRequeste}>
                <Box className={styles.rectangle3} />
                <Box className={styles.timelineContent1}>
                  <Typography
                    className={styles.bookingRequested}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                  >
                    Host Approved
                  </Typography>
                  <div className={styles.oct100915}>Oct 11, 02:45 PM</div>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.internalNotesSection}>
            <Typography
              className={styles.bookingTimeline}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{
                lineHeight: "var(--lh-16)",
                letterSpacing: "var(--ls-0_6)",
                fontWeight: "700",
              }}
            >
              Internal Notes
            </Typography>
            <Box className={styles.textarea}>
              <div className={styles.addAPrivate}>
                Add a private note for admins...
              </div>
              <img
                className={styles.resizingHandleIcon}
                alt=""
                src="/Resizing-handle.svg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className={styles.container7}>
        <Box className={styles.container8}>
          <img className={styles.lineIcon} alt="" src="/Line10@2x.png" />
          <Box className={styles.containerRow1}>
            <Button
              className={styles.button2}
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#ef4444",
                fontSize: "14",
                background: "#fff",
                border: "#dee1e6 solid 1px",
                borderRadius: "16px",
                "&:hover": { background: "#fff" },
                width: 157,
                height: 46,
              }}
            >
              Cancel Booking
            </Button>
            <Button
              className={styles.button3}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "14",
                background: "#2f9e5b",
                borderRadius: "16px",
                "&:hover": { background: "#2f9e5b" },
                width: 157,
                height: 46,
              }}
            >
              Process Payout
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
};

export default Container1;
