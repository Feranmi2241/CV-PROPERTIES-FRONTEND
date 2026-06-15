import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./Container.module.css";

const Container = ({
  className = "",
  containerMinWidth,
  containerFlex,
  containerPadding,
  cardTopRowAlignSelf,
  cardTopRowPadding,
  container,
  totalUsers,
  metricValueRowPadding,
  metricValueRowJustifyContent,
  currencySymbols,
  containerPadding1,
  valueSeparators,
}) => {
  const containerStyle = useMemo(() => {
    return {
      minWidth: containerMinWidth,
      flex: containerFlex,
      padding: containerPadding,
    };
  }, [containerMinWidth, containerFlex, containerPadding]);

  const cardTopRowStyle = useMemo(() => {
    return {
      alignSelf: cardTopRowAlignSelf,
      padding: cardTopRowPadding,
    };
  }, [cardTopRowAlignSelf, cardTopRowPadding]);

  const metricValueRowStyle = useMemo(() => {
    return {
      padding: metricValueRowPadding,
      justifyContent: metricValueRowJustifyContent,
    };
  }, [metricValueRowPadding, metricValueRowJustifyContent]);

  const container1Style = useMemo(() => {
    return {
      padding: containerPadding1,
    };
  }, [containerPadding1]);

  return (
    <div
      className={[styles.container, className].join(" ")}
      style={containerStyle}
    >
      <div className={styles.cardTopRow} style={cardTopRowStyle}>
        <img className={styles.containerIcon} alt="" src={container} />
        <div className={styles.button}>
          <img className={styles.infoIcon} alt="" src="/Info.svg" />
          <div className={styles.text} />
        </div>
      </div>
      <div className={styles.totalUsers}>{totalUsers}</div>
      <div className={styles.metricValueRow} style={metricValueRowStyle}>
        <h3 className={styles.currencySymbols}>{currencySymbols}</h3>
        <div className={styles.container2} style={container1Style}>
          <b className={styles.valueSeparators}>{valueSeparators}</b>
        </div>
      </div>
      <div className={styles.vsLastMonth}>vs last month</div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  container: PropTypes.string,
  totalUsers: PropTypes.string,
  currencySymbols: PropTypes.string,
  valueSeparators: PropTypes.string,

  /** Style props */
  containerMinWidth: PropTypes.string,
  containerFlex: PropTypes.string,
  containerPadding: PropTypes.string,
  cardTopRowAlignSelf: PropTypes.string,
  cardTopRowPadding: PropTypes.string,
  metricValueRowPadding: PropTypes.string,
  metricValueRowJustifyContent: PropTypes.string,
  containerPadding1: PropTypes.string,
};

export default Container;
