import Container from "../Container";
import PropTypes from "prop-types";
import styles from "./StatsCardsRow.module.css";

function formatNumber(num) {
  if (num >= 1_000_000) return `₦${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `₦${(num / 1_000).toFixed(1)}K`;
  if (num === 0) return "0";
  return num?.toLocaleString() || "0";
}

function formatPlain(num) {
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1)}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1)}K`;
  return num?.toLocaleString() || "0";
}

const StatsCardsRow = ({ className = "", data = {}, loading = false }) => {
  const {
    totalUsers = 18458,
    activeListings = 6782,
    totalBookings = 2431,
    totalRevenue = 24560000,
    platformCommission = 4912000,
  } = data;

  return (
    <section className={[styles.statsCardsRow, className].join(" ")}>
      <Container
        container="/Container11.svg"
        totalUsers={loading ? "Loading..." : "Total Users"}
        currencySymbols={loading ? "—" : formatPlain(totalUsers)}
        valueSeparators=""
      />
      <Container
        containerMinWidth="192px"
        containerFlex="1"
        containerPadding="20px 12px"
        cardTopRowAlignSelf="unset"
        cardTopRowPadding="0px 1px 8px 0px"
        container="/Container1.svg"
        totalUsers={loading ? "Loading..." : "Active Listings"}
        metricValueRowPadding="unset"
        metricValueRowJustifyContent="unset"
        currencySymbols={loading ? "—" : formatPlain(activeListings)}
        containerPadding1="2px 7px 2px 5px"
        valueSeparators=""
      />
      <div className={styles.container}>
        <Container
          containerMinWidth="unset"
          containerFlex="1"
          containerPadding="20px 12px"
          cardTopRowAlignSelf="stretch"
          cardTopRowPadding="0px 8px 8px"
          container="/Container5.svg"
          totalUsers={loading ? "Loading..." : "Total Bookings"}
          metricValueRowPadding="unset"
          metricValueRowJustifyContent="unset"
          currencySymbols={loading ? "—" : formatPlain(totalBookings)}
          containerPadding1="2px 8px 2px 4px"
          valueSeparators=""
        />
      </div>
      <Container
        containerMinWidth="195px"
        containerFlex="1"
        containerPadding="20px 12px"
        cardTopRowAlignSelf="unset"
        cardTopRowPadding="0px 0px 8px"
        container="/Container7.svg"
        totalUsers={loading ? "Loading..." : "Total Revenue"}
        metricValueRowPadding="unset"
        metricValueRowJustifyContent="unset"
        currencySymbols={loading ? "—" : formatNumber(totalRevenue)}
        containerPadding1="2px 6px 2px 5px"
        valueSeparators=""
      />
      <Container
        containerMinWidth="196px"
        containerFlex="1.0324"
        containerPadding="20px 9px"
        cardTopRowAlignSelf="stretch"
        cardTopRowPadding="0px 11px 8px"
        container="/Container4.svg"
        totalUsers={loading ? "Loading..." : "Platform Commission"}
        metricValueRowPadding="0px 0px 0px 12px"
        metricValueRowJustifyContent="flex-end"
        currencySymbols={loading ? "—" : formatNumber(platformCommission)}
        containerPadding1="2px 6px 2px 5px"
        valueSeparators=""
      />
    </section>
  );
};

StatsCardsRow.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  loading: PropTypes.bool,
};

export default StatsCardsRow;
