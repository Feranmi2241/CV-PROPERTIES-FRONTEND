import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./BottomRow.module.css";

function timeAgo(dateStr) {
  if (!dateStr) return "";
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now - date;
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "Just now";
  if (diffMins === 1) return "1 min ago";
  if (diffMins < 60) return `${diffMins} mins ago`;
  const diffHrs = Math.floor(diffMins / 60);
  if (diffHrs === 1) return "1 hour ago";
  if (diffHrs < 24) return `${diffHrs} hours ago`;
  const diffDays = Math.floor(diffHrs / 24);
  return `${diffDays} day(s) ago`;
}

const activityIcons = {
  user: "/Container9.svg",
  property: "/Container8.svg",
  booking: "/Container2.svg",
  payment: "/Container10.svg",
  verification: "/Container.svg",
  default: "/Container.svg",
};

const BottomRow = ({ className = "", data = {}, loading = false }) => {
  const { pendingApprovals = 12, recentActivity = [], platformSummary = {} } = data;
  const { properties = 4562, hotels = 0, eventCenters = 634, services = 2220, reviews = 8543 } = platformSummary;

  const displayedActivity = useMemo(() => {
    // Show up to 5 items; if none, use empty state
    if (recentActivity.length === 0) {
      return [
        { id: 1, title: "New user registered", description: "Sarah Johnson", time: "2024-05-31T10:00:00Z", type: "user" },
        { id: 2, title: "New property listing submitted", description: "Modern Apartment in Ikoyi", time: "2024-05-31T09:45:00Z", type: "property" },
        { id: 3, title: "Booking confirmed", description: "Hotel Sunshine - 2 Nights", time: "2024-05-31T09:35:00Z", type: "booking" },
        { id: 4, title: "Payout request received", description: "John Doe - ₦120,000", time: "2024-05-31T08:00:00Z", type: "payment" },
        { id: 5, title: "User verification submitted", description: "Michael Brown", time: "2024-05-31T07:00:00Z", type: "verification" },
      ];
    }
    return recentActivity.slice(0, 5);
  }, [recentActivity]);

  return (
    <div className={[styles.bottomRow, className].join(" ")}>
      {/* ── Pending Approvals ── */}
      <section className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.containerRow0}>
            <div className={styles.container3}>
              <div className={styles.containerRow02}>
                <div className={styles.pendingApprovals}>
                  <b className={styles.pendingApprovals2}>
                    {loading ? "Loading..." : "Pending Approvals"}
                  </b>
                </div>
                <div className={styles.containerRow0Column1}>
                  <div className={styles.button}>
                    <div className={styles.listings12}>Listings ({loading ? "—" : pendingApprovals})</div>
                  </div>
                  <div className={styles.button2}>
                    <div className={styles.listings12}>Services (—)</div>
                  </div>
                </div>
                <div className={styles.button3}>
                  <div className={styles.listings12}>Verifications (—)</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.container4}>
            <div className={styles.button22}>
              <div className={styles.button23}>
                <div className={styles.viewAllPending}>
                  {loading ? "Loading..." : "View all pending approvals"}
                </div>
                <img
                  className={styles.chevronRightIcon}
                  alt=""
                  src="/Chevron-right.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Recent Activity ── */}
      <section className={styles.container5}>
        <b className={styles.recentActivity}>
          {loading ? "Loading..." : "Recent Activity"}
        </b>
        {displayedActivity.map((item) => (
          <div className={styles.activityItem1} key={item.id}>
            <img
              className={styles.containerIcon}
              alt=""
              src={activityIcons[item.type] || activityIcons.default}
            />
            <div className={styles.activityTextGroup}>
              <div className={styles.activityLabelRow}>
                <div className={styles.newUserRegistered}>{item.title}</div>
                <div className={styles.minAgo}>
                  {item.time ? timeAgo(item.time) : ""}
                </div>
              </div>
              <div className={styles.container6}>
                <div className={styles.sarahJohnson}>{item.description}</div>
              </div>
            </div>
          </div>
        ))}
        <div className={styles.button24}>
          <div className={styles.viewAllPending}>View all activity</div>
          <img
            className={styles.chevronRightIcon}
            alt=""
            src="/Chevron-right.svg"
          />
        </div>
      </section>

      {/* ── Platform Summary ── */}
      <div className={styles.groups12}>
        <div className={styles.groups13}>
          <div className={styles.platformSummary}>
            {loading ? "Loading..." : "Platform Summary"}
          </div>
          <div className={styles.statRowTotalProperties}>
            <div className={styles.detailValue}>Total Properties</div>
            <div className={styles.detailValue}>
              {loading ? "—" : properties.toLocaleString()}
            </div>
          </div>
          <div className={styles.totalHoteis}>
            Total Hotels: {loading ? "—" : hotels.toLocaleString()}
          </div>
          <div className={styles.statRowTotalEvents}>
            <div className={styles.detailValue}>Total Event Centers</div>
            <div className={styles.div3}>
              {loading ? "—" : eventCenters.toLocaleString()}
            </div>
          </div>
          <div className={styles.statRowTotalServices}>
            <div className={styles.totalReviews}>Total Services</div>
            <div className={styles.div4}>
              {loading ? "—" : services.toLocaleString()}
            </div>
          </div>
          <div className={styles.statRowTotalReviews}>
            <div className={styles.totalReviews}>Total Reviews</div>
            <div className={styles.detailValue}>
              {loading ? "—" : reviews.toLocaleString()}
            </div>
          </div>
          <div className={styles.statRowActiveCities}>
            <div className={styles.detailValue}>Active Cities</div>
            <div className={styles.div}>
              <div className={styles.div2}>1,366</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BottomRow.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  loading: PropTypes.bool,
};

export default BottomRow;
