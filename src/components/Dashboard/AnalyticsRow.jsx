import PropTypes from "prop-types";
import styles from "./AnalyticsRow.module.css";

const AnalyticsRow = ({ className = "" }) => {
  return (
    <section className={[styles.analyticsRow, className].join(" ")}>
      <div className={styles.container}>
        <div className={styles.containerRow0}>
          <b className={styles.overviewAnalytics}>Overview Analytics</b>
          <div className={styles.container2}>
            <div className={styles.button}>
              <div className={styles.daily}>Daily</div>
            </div>
            <div className={styles.button2}>
              <div className={styles.daily}>Weekly</div>
            </div>
            <div className={styles.button3}>
              <div className={styles.button4}>
                <div className={styles.daily}>Monthly</div>
              </div>
            </div>
            <div className={styles.button5}>
              <div className={styles.daily}>Yearly</div>
            </div>
          </div>
        </div>
        <div className={styles.container3}>
          <div className={styles.frame}>
            <div className={styles.groups}>
              <div className={styles.frame2}>
                <div className={styles.groups2}>
                  <div className={styles.chartLegend}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/Image183.svg"
                    />
                    <div className={styles.users}>
                      <div className={styles.o}>Users</div>
                    </div>
                    <div className={styles.image}>
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/Image202.svg"
                      />
                    </div>
                    <div className={styles.bookings}>Bookings</div>
                  </div>
                  <div className={styles.chartBody}>
                    <div className={styles.yAxisLabels}>
                      <div className={styles.c}>
                        <div className={styles.o}>44</div>
                      </div>
                      <div className={styles.coordinateLabels}>34</div>
                      <div className={styles.coordinateLabels2}>
                        <div className={styles.div}>24</div>
                      </div>
                      <div className={styles.coordinateLabels3}>
                        <div className={styles.percentagePlaceholder}>14</div>
                      </div>
                      <div className={styles.o}>o</div>
                    </div>
                    <div className={styles.chartPlotArea}>
                      <img
                        className={styles.imageIcon3}
                        loading="lazy"
                        alt=""
                        src="/Image186@2x.png"
                      />
                      <div className={styles.xAxisLabels}>
                        <div className={styles.may}>
                          <div className={styles.o}>May</div>
                        </div>
                        <div className={styles.may3}>
                          <div className={styles.o}>May 8</div>
                        </div>
                        <div className={styles.mary11}>Mary 11</div>
                        <div className={styles.mayT}>
                          <div className={styles.o}>May 16</div>
                        </div>
                        <div className={styles.may21}>May 21</div>
                        <div className={styles.may25}>
                          <div className={styles.o}>May 25</div>
                        </div>
                        <div className={styles.percentagePlaceholder}>
                          May 31
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.groups3}>
                  <div className={styles.tooltipContainers}>
                    <div className={styles.tooltipUsersSection}>
                      <div className={styles.upers}>Users</div>
                      <div className={styles.usersValueRow}>
                        <div className={styles.o}>18,458</div>
                        <div className={styles.usersChartPct}>
                          <img
                            className={styles.imageIcon}
                            alt=""
                            src="/Image184.svg"
                          />
                          <div className={styles.div3}>
                            <div className={styles.percentagePlaceholder}>
                              12.5%
                            </div>
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.backgroundIcon}
                        loading="lazy"
                        alt=""
                        src="/Background22@2x.png"
                      />
                    </div>
                    <div className={styles.tooltipBookingsSection}>
                      <div className={styles.upers}>Bookings</div>
                      <div className={styles.bookingsValueRow}>
                        <div className={styles.o}>2,431</div>
                        <div className={styles.bookingsChartPct}>
                          <img
                            className={styles.imageIcon5}
                            alt=""
                            src="/Image200.svg"
                          />
                          <div className={styles.div5}>15.3%</div>
                        </div>
                      </div>
                      <img
                        className={styles.backgroundIcon2}
                        loading="lazy"
                        alt=""
                        src="/Background23@2x.png"
                      />
                    </div>
                    <div className={styles.tooltipRevenueSection}>
                      <div className={styles.upers}>Revenue</div>
                      <div className={styles.revenueValueRow}>
                        <div className={styles.o}>N24,560,000</div>
                        <div className={styles.currencyAndValue}>18.6%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container4}>
        <b className={styles.bookingStatus}>Booking Status</b>
        <div className={styles.frame3}>
          <div className={styles.plusButton}>
            <b className={styles.plusIcon}>2,431</b>
          </div>
          <div className={styles.total}>Total</div>
        </div>
        <div className={styles.legendList}>
          <div className={styles.legendItemCompleted}>
            <div className={styles.legendLabelGroup}>
              <div className={styles.legendIcon} />
              <div className={styles.completed}>Completed</div>
            </div>
            <div className={styles.legendSpace}>
              <span className={styles.span}>{`1,512 `}</span>
              <span className={styles.span2}>(62%)</span>
            </div>
          </div>
          <div className={styles.legendItemConfirmed}>
            <div className={styles.legendLabelGroup}>
              <div className={styles.confirmIcon} />
              <div className={styles.completed}>Confirmed</div>
            </div>
            <div className={styles.confirmedSpace}>
              <span className={styles.span}>{`542 `}</span>
              <span className={styles.span2}>(22%)</span>
            </div>
          </div>
          <div className={styles.legendItemConfirmed}>
            <div className={styles.legendLabelGroup3}>
              <div className={styles.pendingIcon} />
              <div className={styles.completed}>Pending</div>
            </div>
            <div className={styles.pendingSpace}>
              <span className={styles.span}>{`231 `}</span>
              <span className={styles.span2}>(9%)</span>
            </div>
          </div>
          <div className={styles.legendItemConfirmed}>
            <div className={styles.legendLabelGroup}>
              <div className={styles.rectangle} />
              <div className={styles.completed}>Cancelled</div>
            </div>
            <div className={styles.spacing}>
              <span className={styles.span}>{`146 `}</span>
              <span className={styles.span2}>(6%)</span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.container5}>
        <div className={styles.quickActions}>
          <b className={styles.quickActions2}>Quick Actions</b>
        </div>
        <div className={styles.container6}>
          <img
            className={styles.shieldCheckIcon}
            loading="lazy"
            alt=""
            src="/plus.svg"
          />
          <div className={styles.addPropertyListing}>
            <div className={styles.addProperty}>Add Property / Listing</div>
          </div>
          <img
            className={styles.chevronRightIcon}
            alt=""
            src="/chevron-right2.svg"
          />
        </div>
        <div className={styles.container7}>
          <img className={styles.briefcaseIcon} alt="" src="/briefcase1.svg" />
          <div className={styles.addServices}>Add Services</div>
          <img
            className={styles.chevronRightIcon2}
            alt=""
            src="/chevron-right2.svg"
          />
        </div>
        <div className={styles.container8}>
          <img className={styles.briefcaseIcon} alt="" src="/bell1.svg" />
          <div className={styles.sendAnnouncement}>
            <div className={styles.addProperty}>Send Announcement</div>
          </div>
          <img
            className={styles.chevronRightIcon2}
            alt=""
            src="/chevron-right2.svg"
          />
        </div>
        <div className={styles.container9}>
          <img className={styles.briefcaseIcon} alt="" src="/users.svg" />
          <div className={styles.addServices}>Manage Users</div>
          <img
            className={styles.chevronRightIcon2}
            alt=""
            src="/chevron-right2.svg"
          />
        </div>
        <div className={styles.container10}>
          <div className={styles.shieldCheck}>
            <img
              className={styles.shieldCheckIcon}
              alt=""
              src="/shield-check.svg"
            />
          </div>
          <div className={styles.approveVerifications}>
            <div className={styles.approveVerifications2}>
              Approve Verifications
            </div>
          </div>
          <div className={styles.container11}>
            <b className={styles.emptyContainer}>12</b>
          </div>
          <img
            className={styles.chevronRightIcon}
            alt=""
            src="/chevron-right2.svg"
          />
        </div>
        <div className={styles.container12}>
          <div className={styles.container13}>
            <img
              className={styles.shieldCheckIcon}
              loading="lazy"
              alt=""
              src="/chart-column1.svg"
            />
            <div className={styles.addServices}>View Reports</div>
            <img
              className={styles.chevronRightIcon}
              loading="lazy"
              alt=""
              src="/chevron-right2.svg"
            />
          </div>
        </div>
        <div className={styles.button6}>
          <div className={styles.viewAllShortcuts}>View all shortcuts</div>
        </div>
      </div>
    </section>
  );
};

AnalyticsRow.propTypes = {
  className: PropTypes.string,
};

export default AnalyticsRow;
