import { useMemo } from "react";
import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container2.module.css";

const Container2 = ({ className = "", containerTop, image, moon }) => {
  const containerStyle = useMemo(() => {
    return {
      top: containerTop,
    };
  }, [containerTop]);

  return (
    <section
      className={[styles.container, className].join(" ")}
      style={containerStyle}
    >
      <img className={styles.lineIcon} alt="" src="/Line.svg" />
      <Box className={styles.bookingRowContent}>
        <Box className={styles.bookingIdSection}>
          <Box className={styles.checkbox}>
            <img
              className={styles.checkboxIcon}
              loading="lazy"
              alt=""
              src="/Checkbox.svg"
            />
          </Box>
          <Box className={styles.bookingIdTextGroup}>
            <Typography
              className={styles.emmaWilson}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
            >
              BK-2024-1003
            </Typography>
            <div className={styles.may231030}>May 23, 10:30 AM</div>
          </Box>
        </Box>
        <Box className={styles.guestSection}>
          <img className={styles.imageIcon} alt="" src={image} />
          <Box className={styles.guestInfo}>
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
        <Box className={styles.serviceSection}>
          <div className={styles.gardenMaint}>Garden Maint.</div>
          <div className={styles.jsmithexamplecom}>Service</div>
        </Box>
        <Box className={styles.datesTimeSection}>
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
        <Box className={styles.amountStatusSection}>
          <Typography
            className={styles.emmaWilson}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
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
      </Box>
    </section>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string,
  moon: PropTypes.string,

  /** Style props */
  containerTop: PropTypes.string,
};

export default Container2;
