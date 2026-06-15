import PropTypes from "prop-types";
import styles from "./Container2.module.css";

const Container2 = ({ className = "" }) => {
  return (
    <section className={[styles.container, className].join(" ")}>
      <div className={styles.sidebarBrand}>
        <img
          className={styles.containerIcon}
          loading="lazy"
          alt=""
          src="/Container3@2x.png"
        />
        <div className={styles.brandText}>
          <h3 className={styles.cvProperties}>CV Properties</h3>
          <div className={styles.adminPanel}>Admin Panel</div>
        </div>
      </div>
      <div className={styles.navMenu}>
        <div className={styles.container2}>
          <img
            className={styles.layoutDashboardIcon}
            alt=""
            src="/layout-dashboard.svg"
          />
          <div className={styles.dashboard}>Dashboard</div>
        </div>
        <div className={styles.navItemUsers}>
          <img className={styles.usersIcon} alt="" src="/users1.svg" />
          <div className={styles.users}>Users</div>
        </div>
        <div className={styles.navItemListings}>
          <img className={styles.usersIcon} alt="" src="/list.svg" />
          <div className={styles.users}>Listings</div>
        </div>
        <div className={styles.navItemUsers}>
          <img className={styles.usersIcon} alt="" src="/briefcase.svg" />
          <div className={styles.users}>Services</div>
        </div>
        <div className={styles.navItemListings}>
          <img className={styles.usersIcon} alt="" src="/calendar-check.svg" />
          <div className={styles.users}>Bookings</div>
        </div>
        <div className={styles.navItemVerification}>
          <img className={styles.usersIcon} alt="" src="/shield-check1.svg" />
          <div className={styles.users}>Verification</div>
        </div>
        <div className={styles.navItemUsers}>
          <img
            className={styles.layoutDashboardIcon}
            alt=""
            src="/credit-card.svg"
          />
          <div
            className={styles.earningsTransactions}
          >{`Earnings & Transactions`}</div>
        </div>
        <div className={styles.navItemListings}>
          <img
            className={styles.layoutDashboardIcon}
            alt=""
            src="/chart-column.svg"
          />
          <div
            className={styles.earningsTransactions}
          >{`Reports & Analytics`}</div>
        </div>
        <div className={styles.navItemUsers}>
          <img className={styles.usersIcon} alt="" src="/bell.svg" />
          <div className={styles.users}>Notifications</div>
        </div>
        <div className={styles.navItemListings}>
          <img className={styles.usersIcon} alt="" src="/settings.svg" />
          <div className={styles.users}>Settings</div>
        </div>
        <div className={styles.navItemUsers}>
          <img className={styles.usersIcon} alt="" src="/history.svg" />
          <div className={styles.users}>System Logs</div>
        </div>
      </div>
      <div className={styles.container3}>
        <img className={styles.lineIcon} alt="" src="/Line@2x.png" />
        <div className={styles.containerRow1}>
          <div className={styles.image}>
            <img className={styles.imageIcon} alt="" src="/Image193.svg" />
          </div>
          <div className={styles.containerRow1Column1}>
            <div className={styles.container4}>
              <div className={styles.dashboard}>Admin User</div>
            </div>
            <div className={styles.container5}>
              <div className={styles.superAdministrator}>
                Super Administrator
              </div>
            </div>
          </div>
          <div className={styles.chevronRight}>
            <img
              className={styles.chevronRightIcon}
              alt=""
              src="/chevron-right1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
