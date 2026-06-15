import { useMemo } from "react";
import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Container9.module.css";

const Container9 = ({
  className = "",
  prop,
  clients,
  prop1,
  clockHeight,
  clockPadding,
  createPayoutBatchFlex,
  createPayoutBatchDisplay,
  createPayoutBatchAlignItems,
  createPayoutBatchMinWidth,
  createPayoutBatchBorder,
  createPayoutBatchBackgroundColor,
  createPayoutBatchFontFamily,
  createPayoutBatchFontSize,
  createPayoutBatchColor,
}) => {
  const clockStyle = useMemo(() => {
    return {
      height: clockHeight,
      padding: clockPadding,
      flex: createPayoutBatchFlex,
      display: createPayoutBatchDisplay,
      alignItems: createPayoutBatchAlignItems,
      minWidth: createPayoutBatchMinWidth,
      border: createPayoutBatchBorder,
      backgroundColor: createPayoutBatchBackgroundColor,
      fontFamily: createPayoutBatchFontFamily,
      fontSize: createPayoutBatchFontSize,
      color: createPayoutBatchColor,
    };
  }, [
    clockHeight,
    clockPadding,
    createPayoutBatchFlex,
    createPayoutBatchDisplay,
    createPayoutBatchAlignItems,
    createPayoutBatchMinWidth,
    createPayoutBatchBorder,
    createPayoutBatchBackgroundColor,
    createPayoutBatchFontFamily,
    createPayoutBatchFontSize,
    createPayoutBatchColor,
  ]);

  return (
    <Box className={[styles.clock, className].join(" ")} style={clockStyle}>
      <img className={styles.clockIcon} alt="" src="/clock.svg" />
    </Box>
  );
};

Container9.propTypes = {
  className: PropTypes.string,
  prop: PropTypes.string,
  clients: PropTypes.string,
  prop1: PropTypes.string,

  /** Style props */
  clockHeight: PropTypes.string,
  clockPadding: PropTypes.string,
  createPayoutBatchFlex: PropTypes.string,
  createPayoutBatchDisplay: PropTypes.string,
  createPayoutBatchAlignItems: PropTypes.string,
  createPayoutBatchMinWidth: PropTypes.string,
  createPayoutBatchBorder: PropTypes.string,
  createPayoutBatchBackgroundColor: PropTypes.string,
  createPayoutBatchFontFamily: PropTypes.string,
  createPayoutBatchFontSize: PropTypes.string,
  createPayoutBatchColor: PropTypes.string,
};

export default Container9;
