import Container from "./Container";
import PropTypes from "prop-types";
import styles from "./StatsCardsRow.module.css";

const StatsCardsRow = ({ className = "" }) => {
  return (
    <section className={[styles.statsCardsRow, className].join(" ")}>
      <Container
        container="/Container11.svg"
        totalUsers="Total Users"
        currencySymbols="18,458"
        valueSeparators="+12.5%"
      />
      <Container
        containerMinWidth="192px"
        containerFlex="1"
        containerPadding="20px 12px"
        cardTopRowAlignSelf="unset"
        cardTopRowPadding="0px 1px 8px 0px"
        container="/Container1.svg"
        totalUsers="Active Listings"
        metricValueRowPadding="unset"
        metricValueRowJustifyContent="unset"
        currencySymbols="6,782"
        containerPadding1="2px 7px 2px 5px"
        valueSeparators="+4.7%"
      />
      <div className={styles.container}>
        <Container
          containerMinWidth="unset"
          containerFlex="1"
          containerPadding="20px 12px"
          cardTopRowAlignSelf="stretch"
          cardTopRowPadding="0px 8px 8px"
          container="/Container5.svg"
          totalUsers="Total Bookings"
          metricValueRowPadding="unset"
          metricValueRowJustifyContent="unset"
          currencySymbols="2,431"
          containerPadding1="2px 8px 2px 4px"
          valueSeparators="+15.3%"
        />
      </div>
      <Container
        containerMinWidth="195px"
        containerFlex="1"
        containerPadding="20px 12px"
        cardTopRowAlignSelf="unset"
        cardTopRowPadding="0px 0px 8px"
        container="/Container7.svg"
        totalUsers="Total Revenue"
        metricValueRowPadding="unset"
        metricValueRowJustifyContent="unset"
        currencySymbols="₦24,560,000"
        containerPadding1="2px 6px 2px 5px"
        valueSeparators="+18.6%"
      />
      <Container
        containerMinWidth="196px"
        containerFlex="1.0324"
        containerPadding="20px 9px"
        cardTopRowAlignSelf="stretch"
        cardTopRowPadding="0px 11px 8px"
        container="/Container4.svg"
        totalUsers="Platform Commission"
        metricValueRowPadding="0px 0px 0px 12px"
        metricValueRowJustifyContent="flex-end"
        currencySymbols="₦4,912,000"
        containerPadding1="2px 6px 2px 5px"
        valueSeparators="+16.2%"
      />
    </section>
  );
};

StatsCardsRow.propTypes = {
  className: PropTypes.string,
};

export default StatsCardsRow;
