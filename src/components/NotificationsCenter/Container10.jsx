import { useMemo } from "react";
import { Button, Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container10.module.css";

const Container10 = ({
  className = "",
  johnDoe,
  iDUSR001234,
  johndoegmailcom,
  phoneRowAlignSelf,
  phoneRowPadding,
  prop,
  frameFlex,
  framePadding,
  framePadding1,
  client,
  frameFlex1,
  framePadding2,
  verified,
  joinedDateCellFlex,
  joinedDateCellPadding,
  may312024,
  today,
  aM,
}) => {
  const amountColStyle = useMemo(() => {
    return {
      alignSelf: phoneRowAlignSelf,
      padding: phoneRowPadding,
    };
  }, [phoneRowAlignSelf, phoneRowPadding]);

  const frameStyle = useMemo(() => {
    return {
      flex: frameFlex,
      padding: framePadding,
    };
  }, [frameFlex, framePadding]);

  const frame1Style = useMemo(() => {
    return {
      padding: framePadding1,
    };
  }, [framePadding1]);

  const frame2Style = useMemo(() => {
    return {
      flex: frameFlex1,
      padding: framePadding2,
    };
  }, [frameFlex1, framePadding2]);

  const joinedDateCellStyle = useMemo(() => {
    return {
      flex: joinedDateCellFlex,
      padding: joinedDateCellPadding,
    };
  }, [joinedDateCellFlex, joinedDateCellPadding]);

  return (
    <Box className={[styles.container, className].join(" ")}>
      <img className={styles.lineIcon} alt="" src="/Line11@2x.png" />
      <Box className={styles.datesTimeCol}>
        <Button
          className={styles.avatar}
          disableElevation
          variant="contained"
          sx={{
            background: "#ecfae1",
            borderRadius: "22px",
            "&:hover": { background: "#ecfae1" },
            width: 44,
            height: 44,
          }}
        />
        <Box className={styles.userNameId}>
          <Typography
            className={styles.johnDoe}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "700", lineHeight: "var(--lh-20)" }}
          >
            {johnDoe}
          </Typography>
          <div className={styles.idUsr001234}>{iDUSR001234}</div>
        </Box>
      </Box>
      <Box className={styles.contactInfoCell}>
        <Box className={styles.emailRow}>
          <img
            className={styles.mailIcon}
            loading="lazy"
            alt=""
            src="/mail1.svg"
          />
          <div className={styles.johndoegmailcom}>{johndoegmailcom}</div>
        </Box>
        <Box className={styles.amountCol}>
          <img
            className={styles.phoneIcon}
            loading="lazy"
            alt=""
            src="/phone1.svg"
          />
          <div className={styles.div}>{prop}</div>
        </Box>
      </Box>
      <Box className={styles.frame} style={frameStyle}>
        <Box className={styles.tag}>
          <Box className={styles.frame2} style={frame1Style}>
            <Typography
              className={styles.client}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
            >
              {client}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box className={styles.frame3}>
        <Box className={styles.tag}>
          <Box className={styles.frame4}>
            <div className={styles.johndoegmailcom}>Active</div>
          </Box>
        </Box>
      </Box>
      <Box className={styles.frame5} style={frame2Style}>
        <Box className={styles.tag}>
          <Box className={styles.frame4}>
            <div className={styles.johndoegmailcom}>{verified}</div>
          </Box>
        </Box>
      </Box>
      <Box className={styles.joinedDateCell} style={joinedDateCellStyle}>
        <div className={styles.may312024}>{may312024}</div>
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

Container10.propTypes = {
  className: PropTypes.string,
  johnDoe: PropTypes.string,
  iDUSR001234: PropTypes.string,
  johndoegmailcom: PropTypes.string,
  prop: PropTypes.string,
  client: PropTypes.string,
  verified: PropTypes.string,
  may312024: PropTypes.string,
  today: PropTypes.string,
  aM: PropTypes.string,

  /** Style props */
  phoneRowAlignSelf: PropTypes.string,
  phoneRowPadding: PropTypes.string,
  frameFlex: PropTypes.string,
  framePadding: PropTypes.string,
  framePadding1: PropTypes.string,
  frameFlex1: PropTypes.string,
  framePadding2: PropTypes.string,
  joinedDateCellFlex: PropTypes.string,
  joinedDateCellPadding: PropTypes.string,
};

export default Container10;
