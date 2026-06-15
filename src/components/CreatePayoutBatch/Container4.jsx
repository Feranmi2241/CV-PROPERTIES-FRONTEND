import { useMemo } from "react";
import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container4.module.css";

const Container4 = ({
  className = "",
  containerTop,
  containerPadding,
  line,
  requestIdGroupPadding,
  wD9922,
  userIdentityGroupFlex,
  containerWidth,
  containerPadding1,
  aminaYusuf,
  hostSilver,
  bankDetailsFlex,
  zenithBank,
  prop,
  aMINAYUSUF,
  textboxPadding,
  textboxAlignItems,
  textboxPadding1,
  prop1,
  boxPadding,
  prop2,
  prop3,
}) => {
  const container2Style = useMemo(() => {
    return {
      top: containerTop,
      padding: containerPadding,
    };
  }, [containerTop, containerPadding]);

  const requestIdGroupStyle = useMemo(() => {
    return {
      padding: requestIdGroupPadding,
    };
  }, [requestIdGroupPadding]);

  const userIdentityGroupStyle = useMemo(() => {
    return {
      flex: userIdentityGroupFlex,
    };
  }, [userIdentityGroupFlex]);

  const container3Style = useMemo(() => {
    return {
      width: containerWidth,
      padding: containerPadding1,
    };
  }, [containerWidth, containerPadding1]);

  const checkboxIdRowStyle = useMemo(() => {
    return {
      flex: bankDetailsFlex,
    };
  }, [bankDetailsFlex]);

  const textboxStyle = useMemo(() => {
    return {
      padding: textboxPadding,
    };
  }, [textboxPadding]);

  const textbox1Style = useMemo(() => {
    return {
      alignItems: textboxAlignItems,
      padding: textboxPadding1,
    };
  }, [textboxAlignItems, textboxPadding1]);

  const boxStyle = useMemo(() => {
    return {
      padding: boxPadding,
    };
  }, [boxPadding]);

  return (
    <Box
      className={[styles.container, className].join(" ")}
      style={container2Style}
    >
      <img className={styles.lineIcon} alt="" src={line} />
      <Box className={styles.requestIdGroup} style={requestIdGroupStyle}>
        <input className={styles.checkbox} type="checkbox" />
        <Typography
          className={styles.wd9922}
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
        >
          {wD9922}
        </Typography>
      </Box>
      <Box className={styles.userIdentityGroup} style={userIdentityGroupStyle}>
        <img className={styles.imageIcon} alt="" />
        <Box className={styles.userInfo}>
          <Box className={styles.container2} style={container3Style}>
            <Typography
              className={styles.aminaYusuf}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "var(--lh-13)", fontWeight: "700" }}
            >
              {aminaYusuf}
            </Typography>
          </Box>
          <div className={styles.hostSilver}>{hostSilver}</div>
        </Box>
      </Box>
      <Box className={styles.bankDetails}>
        <Box className={styles.bankNameRow}>
          <Typography
            className={styles.zenithBank}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{ lineHeight: "var(--lh-11)", fontWeight: "700" }}
          >
            {zenithBank}
          </Typography>
          <img className={styles.circleCheckIcon} alt="" />
        </Box>
        <div className={styles.div}>{prop}</div>
        <Box className={styles.container3}>
          <Typography
            className={styles.aminaYusuf2}
            variant="inherit"
            variantMapping={{ inherit: "i" }}
            sx={{ lineHeight: "var(--lh-20)" }}
          >
            {aMINAYUSUF}
          </Typography>
        </Box>
      </Box>
      <Box className={styles.textbox} style={textboxStyle}>
        <Box className={styles.textbox2} style={textbox1Style}>
          <div className={styles.div2}>{prop1}</div>
        </Box>
      </Box>
      <Box className={styles.div3} style={boxStyle}>
        <div className={styles.div4}>{prop2}</div>
      </Box>
      <Typography
        className={styles.b}
        variant="inherit"
        variantMapping={{ inherit: "b" }}
        sx={{
          fontSize: "var(--fs-14)",
          lineHeight: "var(--lh-20)",
          fontWeight: "700",
        }}
      >
        {prop3}
      </Typography>
    </Box>
  );
};

Container4.propTypes = {
  className: PropTypes.string,
  line: PropTypes.string,
  wD9922: PropTypes.string,
  aminaYusuf: PropTypes.string,
  hostSilver: PropTypes.string,
  zenithBank: PropTypes.string,
  prop: PropTypes.string,
  aMINAYUSUF: PropTypes.string,
  prop1: PropTypes.string,
  prop2: PropTypes.string,
  prop3: PropTypes.string,

  /** Style props */
  containerTop: PropTypes.string,
  containerPadding: PropTypes.string,
  requestIdGroupPadding: PropTypes.string,
  userIdentityGroupFlex: PropTypes.string,
  containerWidth: PropTypes.string,
  containerPadding1: PropTypes.string,
  bankDetailsFlex: PropTypes.string,
  textboxPadding: PropTypes.string,
  textboxAlignItems: PropTypes.string,
  textboxPadding1: PropTypes.string,
  boxPadding: PropTypes.string,
};

export default Container4;
