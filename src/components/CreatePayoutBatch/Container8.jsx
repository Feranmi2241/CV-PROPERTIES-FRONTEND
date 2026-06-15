import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container8.module.css";

const Container8 = ({
  className = "",
  userDetailsCellFlex,
  sarahJohnson,
  iDUSR001235,
  contactInfoCellFlex,
  sarahjgmailcom,
  prop,
  frameFlex,
  framePadding,
  framePadding1,
  serviceProvider,
  frameFlex1,
  framePadding2,
  active,
  frameFlex2,
  joinedDateCellFlex,
  joinedDateCellPadding,
  may302024,
  today,
  aM,
  frameFlex3,
  checkboxHeight,
  checkboxPadding,
  selectAllFlex,
  selectAllJustifyContent,
  selectAllMinWidth,
}) => {
  const checkboxStyle = useMemo(() => {
    return {
      height: checkboxHeight,
      padding: checkboxPadding,
      flex: selectAllFlex,
      justifyContent: selectAllJustifyContent,
      minWidth: selectAllMinWidth,
    };
  }, [
    checkboxHeight,
    checkboxPadding,
    selectAllFlex,
    selectAllJustifyContent,
    selectAllMinWidth,
  ]);

  return (
    <Box
      className={[styles.checkbox, className].join(" ")}
      style={checkboxStyle}
    >
      <img
        className={styles.checkboxIcon}
        loading="lazy"
        alt=""
        src="/Checkbox.svg"
      />
    </Box>
  );
};

Container8.propTypes = {
  className: PropTypes.string,
  sarahJohnson: PropTypes.string,
  iDUSR001235: PropTypes.string,
  sarahjgmailcom: PropTypes.string,
  prop: PropTypes.string,
  serviceProvider: PropTypes.string,
  active: PropTypes.string,
  may302024: PropTypes.string,
  today: PropTypes.string,
  aM: PropTypes.string,

  /** Style props */
  userDetailsCellFlex: PropTypes.string,
  contactInfoCellFlex: PropTypes.string,
  frameFlex: PropTypes.string,
  framePadding: PropTypes.string,
  framePadding1: PropTypes.string,
  frameFlex1: PropTypes.string,
  framePadding2: PropTypes.string,
  frameFlex2: PropTypes.string,
  joinedDateCellFlex: PropTypes.string,
  joinedDateCellPadding: PropTypes.string,
  frameFlex3: PropTypes.string,
  checkboxHeight: PropTypes.string,
  checkboxPadding: PropTypes.string,
  selectAllFlex: PropTypes.string,
  selectAllJustifyContent: PropTypes.string,
  selectAllMinWidth: PropTypes.string,
};

export default Container8;
