import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({
  className = "",
  containerTop,
  containerPadding,
  bookingIdColHeight,
  bookingIdColPadding,
  bookingIdColFlex,
  bookingIdRowHeight,
  guestColPadding,
  guestInfoFlex,
  guestInfoMinWidth,
  guestInfoWidth,
  serviceColHeight,
  serviceColAlignItems,
  serviceColPadding,
  serviceColWidth,
  gardenMaintTextAlign,
  gardenMaintAlignSelf,
  serviceAlignSelf,
  serviceDisplay,
  moon,
  typographyAlignSelf,
}) => {
  const container1Style = useMemo(() => {
    return {
      top: containerTop,
      padding: containerPadding,
    };
  }, [containerTop, containerPadding]);

  const bookingIdColStyle = useMemo(() => {
    return {
      height: bookingIdColHeight,
      padding: bookingIdColPadding,
      flex: bookingIdColFlex,
    };
  }, [bookingIdColHeight, bookingIdColPadding, bookingIdColFlex]);

  const bookingIdRowStyle = useMemo(() => {
    return {
      height: bookingIdRowHeight,
    };
  }, [bookingIdRowHeight]);

  const guestColStyle = useMemo(() => {
    return {
      padding: guestColPadding,
    };
  }, [guestColPadding]);

  const guestInfoStyle = useMemo(() => {
    return {
      flex: guestInfoFlex,
      minWidth: guestInfoMinWidth,
      width: guestInfoWidth,
    };
  }, [guestInfoFlex, guestInfoMinWidth, guestInfoWidth]);

  const serviceColStyle = useMemo(() => {
    return {
      height: serviceColHeight,
      alignItems: serviceColAlignItems,
      padding: serviceColPadding,
      width: serviceColWidth,
    };
  }, [
    serviceColHeight,
    serviceColAlignItems,
    serviceColPadding,
    serviceColWidth,
  ]);

  const gardenMaintStyle = useMemo(() => {
    return {
      textAlign: gardenMaintTextAlign,
      alignSelf: gardenMaintAlignSelf,
    };
  }, [gardenMaintTextAlign, gardenMaintAlignSelf]);

  const serviceStyle = useMemo(() => {
    return {
      alignSelf: serviceAlignSelf,
      display: serviceDisplay,
    };
  }, [serviceAlignSelf, serviceDisplay]);

  const typographyStyle = useMemo(() => {
    return {
      alignSelf: typographyAlignSelf,
    };
  }, [typographyAlignSelf]);

  return (
    <section
      className={[styles.container, className].join(" ")}
      style={container1Style}
    >
      <img className={styles.lineIcon} alt="" src="/Line.svg" />
      <Box className={styles.bookingIdCol} style={bookingIdColStyle}>
        <Box className={styles.bookingIdRow} style={bookingIdRowStyle}>
          <img className={styles.checkboxIcon} alt="" src="/Checkbox.svg" />
          <Typography
            className={styles.bk20241003}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
          >
            BK-2024-1003
          </Typography>
        </Box>
        <div className={styles.may231030}>May 23, 10:30 AM</div>
      </Box>
      <Box className={styles.guestCol} style={guestColStyle}>
        <img className={styles.imageIcon} alt="" src />
        <Box className={styles.guestInfo} style={guestInfoStyle}>
          <Typography
            className={styles.emmaWilson}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
          >
            Emma Wilson
          </Typography>
          <div className={styles.jsmithexamplecom}>j.smith@example.com</div>
        </Box>
      </Box>
      <Box className={styles.serviceCol} style={serviceColStyle}>
        <div className={styles.gardenMaint} style={gardenMaintStyle}>
          Garden Maint.
        </div>
        <div className={styles.jsmithexamplecom} style={serviceStyle}>
          Service
        </div>
      </Box>
      <Box className={styles.datesTimeCol}>
        <Box className={styles.dateRangeRow}>
          <img className={styles.calendarIcon} alt="" src="/calendar1.svg" />
          <div className={styles.jun13}>Jun 13 - Jun 18</div>
        </Box>
        <Box className={styles.nightsTimeRow}>
          <Box className={styles.moon}>
            <img className={styles.moonIcon} alt="" src={moon} />
          </Box>
          <div className={styles.nights}>8 nights</div>
          <Box className={styles.clock}>
            <img className={styles.clockIcon} alt="" src="/clock.svg" />
          </Box>
          <div className={styles.pm}>2:00 PM</div>
        </Box>
      </Box>
      <Box className={styles.amountStatusCol}>
        <Typography
          className={styles.emmaWilson}
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
          style={typographyStyle}
        >
          $600
        </Typography>
        <Box className={styles.container2}>
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
      <Box className={styles.container3}>
        <div className={styles.cancelled}>Cancelled</div>
      </Box>
    </section>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  moon: PropTypes.string,

  /** Style props */
  containerTop: PropTypes.string,
  containerPadding: PropTypes.string,
  bookingIdColHeight: PropTypes.string,
  bookingIdColPadding: PropTypes.string,
  bookingIdColFlex: PropTypes.string,
  bookingIdRowHeight: PropTypes.string,
  guestColPadding: PropTypes.string,
  guestInfoFlex: PropTypes.string,
  guestInfoMinWidth: PropTypes.string,
  guestInfoWidth: PropTypes.string,
  serviceColHeight: PropTypes.string,
  serviceColAlignItems: PropTypes.string,
  serviceColPadding: PropTypes.string,
  serviceColWidth: PropTypes.string,
  gardenMaintTextAlign: PropTypes.string,
  gardenMaintAlignSelf: PropTypes.string,
  serviceAlignSelf: PropTypes.string,
  serviceDisplay: PropTypes.string,
  typographyAlignSelf: PropTypes.string,
};

export default Container;
