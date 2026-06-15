import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container7.module.css";

const Container7 = ({
  className = "",
  containerFlex,
  containerAlignSelf,
  containerMarginTop,
  userNameIdWidth,
  userNameIdFlex,
  davidWilson,
  iDUSR001238,
  emailRowAlignSelf,
  davidwgmailcom,
  prop,
  frameFlex,
  framePadding,
  serviceProvider,
  joinedDateCellFlex,
  joinedDateCellPadding,
  may272024,
  today,
  aM,
}) => {
  const container5Style = useMemo(() => {
    return {
      flex: containerFlex,
      alignSelf: containerAlignSelf,
      marginTop: containerMarginTop,
    };
  }, [containerFlex, containerAlignSelf, containerMarginTop]);

  const bankNameRowStyle = useMemo(() => {
    return {
      width: userNameIdWidth,
      flex: userNameIdFlex,
    };
  }, [userNameIdWidth, userNameIdFlex]);

  const bookingRowContentStyle = useMemo(() => {
    return {
      alignSelf: emailRowAlignSelf,
    };
  }, [emailRowAlignSelf]);

  const frame3Style = useMemo(() => {
    return {
      flex: frameFlex,
      padding: framePadding,
    };
  }, [frameFlex, framePadding]);

  return (
    <Box
      className={[styles.container, className].join(" ")}
      style={container5Style}
    >
      <img className={styles.lineIcon} alt="" src="/Line11@2x.png" />
      <Box className={styles.userDetailsCell}>
        <img className={styles.avatarIcon} loading="lazy" alt="" />
        <Box className={styles.userNameId}>
          <Typography
            className={styles.davidWilson}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "700", lineHeight: "var(--lh-20)" }}
          >
            {davidWilson}
          </Typography>
          <div className={styles.idUsr001238}>{iDUSR001238}</div>
        </Box>
      </Box>
      <Box className={styles.contactInfoCell}>
        <Box className={styles.bookingRowContent}>
          <img className={styles.mailIcon} alt="" src="/mail1.svg" />
          <div className={styles.davidwgmailcom}>{davidwgmailcom}</div>
        </Box>
        <Box className={styles.phoneRow}>
          <img className={styles.phoneIcon} alt="" src="/phone1.svg" />
          <div className={styles.div}>{prop}</div>
        </Box>
      </Box>
      <Box className={styles.frame} style={frame3Style}>
        <Box className={styles.tag}>
          <Box className={styles.frame2}>
            <Typography
              className={styles.div}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
            >
              {serviceProvider}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.frame3}>
        <Box className={styles.tag}>
          <Box className={styles.frame4}>
            <div className={styles.active}>Active</div>
          </Box>
        </Box>
      </Box>
      <Box className={styles.frame5}>
        <Box className={styles.tag}>
          <Box className={styles.frame4}>
            <div className={styles.active}>Verified</div>
          </Box>
        </Box>
      </Box>
      <Box className={styles.joinedDateCell}>
        <div className={styles.may272024}>{may272024}</div>
        <div className={styles.am}>10:30 AM</div>
      </Box>
      <Box className={styles.lastActiveCell}>
        <div className={styles.today}>{today}</div>
        <div className={styles.am}>{aM}</div>
      </Box>
      <Box className={styles.frame7}>
        <img className={styles.buttonIcon} alt="" />
      </Box>
    </Box>
  );
};

Container7.propTypes = {
  className: PropTypes.string,
  davidWilson: PropTypes.string,
  iDUSR001238: PropTypes.string,
  davidwgmailcom: PropTypes.string,
  prop: PropTypes.string,
  serviceProvider: PropTypes.string,
  may272024: PropTypes.string,
  today: PropTypes.string,
  aM: PropTypes.string,

  /** Style props */
  containerFlex: PropTypes.string,
  containerAlignSelf: PropTypes.string,
  containerMarginTop: PropTypes.string,
  userNameIdWidth: PropTypes.string,
  userNameIdFlex: PropTypes.string,
  emailRowAlignSelf: PropTypes.string,
  frameFlex: PropTypes.string,
  framePadding: PropTypes.string,
  joinedDateCellFlex: PropTypes.string,
  joinedDateCellPadding: PropTypes.string,
};

export default Container7;
