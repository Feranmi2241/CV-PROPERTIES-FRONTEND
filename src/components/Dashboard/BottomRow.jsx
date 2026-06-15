import PropTypes from "prop-types";
import styles from "./BottomRow.module.css";

const BottomRow = ({ className = "" }) => {
  return (
    <div className={[styles.bottomRow, className].join(" ")}>
      <section className={styles.container}>
        <div className={styles.container2}>
          <div className={styles.containerRow0}>
            <div className={styles.container3}>
              <div className={styles.containerRow02}>
                <div className={styles.pendingApprovals}>
                  <b className={styles.pendingApprovals2}>Pending Approvals</b>
                </div>
                <div className={styles.containerRow0Column1}>
                  <div className={styles.button}>
                    <div className={styles.listings12}>Listings (12)</div>
                  </div>
                  <div className={styles.button2}>
                    <div className={styles.listings12}>Services (7)</div>
                  </div>
                </div>
                <div className={styles.button3}>
                  <div className={styles.listings12}>Verifications (12)</div>
                </div>
              </div>
              <div className={styles.frame}>
                <img className={styles.lineIcon} alt="" src="/Line2@2x.png" />
              </div>
            </div>
            <div className={styles.groups}>
              <div className={styles.groups2}>
                <div className={styles.mergedAsset1}>
                  <img
                    className={styles.mergedAsset1Icon}
                    loading="lazy"
                    alt=""
                    src="/merged-asset-11@2x.png"
                  />
                </div>
                <div className={styles.groups3}>
                  <div className={styles.groups4}>
                    <img
                      className={styles.imageIcon}
                      loading="lazy"
                      alt=""
                      src="/Image204@2x.png"
                    />
                    <div className={styles.propertyInfo}>
                      <div className={styles.titleBadgeRow}>
                        <div className={styles.luxury4Bedroom}>
                          Luxury 4 Bedroom Duplex
                        </div>
                        <div className={styles.button4}>
                          <div className={styles.background} />
                          <div className={styles.peoperty}>Property</div>
                        </div>
                      </div>
                      <div className={styles.leickjPhaseT}>
                        Lekki, Phase 1, Lagos
                      </div>
                      <div className={styles.submitterRow}>
                        <div className={styles.luxury4Bedroom}>
                          Submitted by
                        </div>
                        <div className={styles.image}>
                          <img
                            className={styles.imageIcon2}
                            loading="lazy"
                            alt=""
                            src="/Image189.svg"
                          />
                        </div>
                        <div className={styles.jchnDoe}>
                          <div className={styles.luxury4Bedroom}>Jchn Doe</div>
                        </div>
                        <div className={styles.luxury4Bedroom}>May 31.2024</div>
                      </div>
                    </div>
                    <div className={styles.actionButtons}>
                      <div className={styles.button5}>
                        <div className={styles.frame2}>
                          <div className={styles.luxury4Bedroom}>Approve</div>
                        </div>
                      </div>
                      <div className={styles.button6}>
                        <div className={styles.button7}>
                          <div className={styles.frame3}>
                            <div className={styles.luxury4Bedroom}>Reject</div>
                          </div>
                        </div>
                      </div>
                      <img
                        className={styles.imageIcon3}
                        alt=""
                        src="/Image201.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.groups5}>
                  <div className={styles.groups6}>
                    <img
                      className={styles.imageIcon4}
                      alt=""
                      src="/Image199.svg"
                    />
                    <div className={styles.button8}>
                      <div className={styles.frame4}>
                        <div className={styles.luxury4Bedroom}>Reject</div>
                      </div>
                    </div>
                    <div className={styles.button9}>
                      <div className={styles.frame5}>
                        <div className={styles.luxury4Bedroom}>Approve</div>
                      </div>
                    </div>
                    <div className={styles.may312024}>May 31 .2024</div>
                    <div className={styles.maryJohnson}>Mary Johnson</div>
                    <img
                      className={styles.imageIcon5}
                      alt=""
                      src="/Image192.svg"
                    />
                    <div className={styles.suomittodTly}>Submitted by</div>
                    <div className={styles.victoriaHsandL}>
                      Victoria Island Lagos
                    </div>
                    <div className={styles.button10}>
                      <img
                        className={styles.backgroundIcon}
                        loading="lazy"
                        alt=""
                        src="/Background25.svg"
                      />
                      <div className={styles.servre}>Service</div>
                    </div>
                    <div className={styles.professionalCle}>
                      Professional Cleaning Service
                    </div>
                    <img
                      className={styles.imageIcon6}
                      loading="lazy"
                      alt=""
                      src="/Image206@2x.png"
                    />
                  </div>
                </div>
                <img
                  className={styles.backgroundIcon2}
                  loading="lazy"
                  alt=""
                  src="/Background27@2x.png"
                />
                <div className={styles.groups7}>
                  <div className={styles.groups8}>
                    <img
                      className={styles.imageIcon}
                      loading="lazy"
                      alt=""
                      src="/Image205@2x.png"
                    />
                    <div className={styles.listingInfo}>
                      <div className={styles.titleBadgeRow2}>
                        <div className={styles.luxury4Bedroom}>
                          2 Bedroom Apartment
                        </div>
                        <div className={styles.button11}>
                          <img
                            className={styles.backgroundIcon3}
                            loading="lazy"
                            alt=""
                            src="/Background24.svg"
                          />
                          <div className={styles.property}>Property</div>
                        </div>
                      </div>
                      <div className={styles.ikoyiLagos}>Ikoyi. Lagos</div>
                      <div className={styles.submitterRow2}>
                        <div className={styles.luxury4Bedroom}>
                          Submitted by
                        </div>
                        <div className={styles.image}>
                          <img
                            className={styles.imageIcon2}
                            alt=""
                            src="/Image185.svg"
                          />
                        </div>
                        <div className={styles.luxury4Bedroom}>David Smith</div>
                      </div>
                    </div>
                    <div className={styles.may3120242}>
                      <div className={styles.luxury4Bedroom}>May 31 ,2024</div>
                    </div>
                    <div className={styles.actionButtons2}>
                      <div className={styles.button12}>
                        <div className={styles.actionButtonContainers}>
                          <div className={styles.luxury4Bedroom}>Approve</div>
                        </div>
                      </div>
                      <div className={styles.button13}>
                        <div className={styles.frame6}>
                          <div className={styles.luxury4Bedroom}>Reject</div>
                        </div>
                      </div>
                    </div>
                    <div className={styles.image3}>
                      <img
                        className={styles.imageIcon9}
                        alt=""
                        src="/Image191.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.groups9}>
                  <img
                    className={styles.imageIcon}
                    loading="lazy"
                    alt=""
                    src="/Image205@2x.png"
                  />
                  <div className={styles.propertyInfo2}>
                    <div className={styles.titleAndBadgeRow}>
                      <div className={styles.luxury4Bedroom}>
                        2 Bedroom Apartment
                      </div>
                      <div className={styles.button11}>
                        <img
                          className={styles.backgroundIcon4}
                          alt=""
                          src="/Background24.svg"
                        />
                        <div className={styles.peoperty}>Property</div>
                      </div>
                    </div>
                    <div className={styles.ikoyiLagos2}>Ikoyi. Lagos</div>
                    <div className={styles.submitterAndDateRow}>
                      <div className={styles.luxury4Bedroom}>Submitted by</div>
                      <div className={styles.image}>
                        <img
                          className={styles.imageIcon2}
                          alt=""
                          src="/Image185.svg"
                        />
                      </div>
                      <div className={styles.jchnDoe}>
                        <div className={styles.luxury4Bedroom}>David Smith</div>
                      </div>
                      <div className={styles.luxury4Bedroom}>May 31 ,2024</div>
                    </div>
                  </div>
                  <div className={styles.actionButtonsRow}>
                    <div className={styles.button12}>
                      <div className={styles.actionButtonContainers}>
                        <div className={styles.luxury4Bedroom}>Approve</div>
                      </div>
                    </div>
                    <div className={styles.button16}>
                      <div className={styles.button17}>
                        <div className={styles.frame6}>
                          <div className={styles.luxury4Bedroom}>Reject</div>
                        </div>
                      </div>
                    </div>
                    <img
                      className={styles.imageIcon9}
                      alt=""
                      src="/Image191.svg"
                    />
                  </div>
                </div>
                <div className={styles.background2} />
                <img
                  className={styles.imageIcon13}
                  alt=""
                  src="/Image198.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.groups10}>
            <div className={styles.groups11}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/Image205@2x.png"
              />
              <div className={styles.propertyInfoBlock}>
                <div className={styles.titleAndBadgeRow}>
                  <div className={styles.luxury4Bedroom}>
                    2 Bedroom Apartment
                  </div>
                  <div className={styles.button11}>
                    <img
                      className={styles.backgroundIcon5}
                      alt=""
                      src="/Background24.svg"
                    />
                    <div className={styles.property3}>Property</div>
                  </div>
                </div>
                <div className={styles.ikoyiLagos2}>Ikoyi. Lagos</div>
                <div className={styles.submitterAndDateRow}>
                  <div className={styles.luxury4Bedroom}>Submitted by</div>
                  <div className={styles.image}>
                    <img
                      className={styles.imageIcon2}
                      alt=""
                      src="/Image185.svg"
                    />
                  </div>
                  <div className={styles.jchnDoe}>
                    <div className={styles.luxury4Bedroom}>David Smith</div>
                  </div>
                  <div className={styles.luxury4Bedroom}>May 31 ,2024</div>
                </div>
              </div>
              <div className={styles.actionButtonsRow}>
                <div className={styles.button12}>
                  <div className={styles.actionButtonContainers}>
                    <div className={styles.luxury4Bedroom}>Approve</div>
                  </div>
                </div>
                <div className={styles.button16}>
                  <div className={styles.button17}>
                    <div className={styles.frame6}>
                      <div className={styles.luxury4Bedroom}>Reject</div>
                    </div>
                  </div>
                </div>
                <img className={styles.imageIcon9} alt="" src="/Image191.svg" />
              </div>
            </div>
          </div>
          <div className={styles.container4}>
            <img className={styles.lineIcon2} alt="" src="/Line2@2x.png" />
            <div className={styles.button22}>
              <div className={styles.button23}>
                <div className={styles.viewAllPending}>
                  View all pending approvals
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
      <section className={styles.container5}>
        <b className={styles.recentActivity}>Recent Activity</b>
        <div className={styles.activityItem1}>
          <img className={styles.containerIcon} alt="" src="/Container9.svg" />
          <div className={styles.activityTextGroup}>
            <div className={styles.activityLabelRow}>
              <div className={styles.newUserRegistered}>
                New user registered
              </div>
              <div className={styles.minAgo}>2 min ago</div>
            </div>
            <div className={styles.container6}>
              <div className={styles.sarahJohnson}>Sarah Johnson</div>
            </div>
          </div>
        </div>
        <div className={styles.activityItem1}>
          <img className={styles.containerIcon} alt="" src="/Container8.svg" />
          <div className={styles.activityTextGroup2}>
            <div className={styles.activityLabelRow2}>
              <div className={styles.newUserRegistered}>
                New property listing submitted
              </div>
              <div className={styles.minAgo}>15 mins ago</div>
            </div>
            <div className={styles.container6}>
              <div className={styles.sarahJohnson}>
                Modern Apartment in Ikoyi
              </div>
            </div>
          </div>
        </div>
        <div className={styles.activityItem1}>
          <img className={styles.containerIcon} alt="" src="/Container2.svg" />
          <div className={styles.activityTextGroup3}>
            <div className={styles.activityLabelRow3}>
              <div className={styles.newUserRegistered}>Booking confirmed</div>
              <div className={styles.minAgo}>25 mins ago</div>
            </div>
            <div className={styles.container6}>
              <div className={styles.sarahJohnson}>
                Hotel Sunshine - 2 Nights
              </div>
            </div>
          </div>
        </div>
        <div className={styles.activityItem4}>
          <img className={styles.containerIcon} alt="" src="/Container10.svg" />
          <div className={styles.activityTextGroup4}>
            <div className={styles.activityLabelRow4}>
              <div className={styles.payoutRequestReceived}>
                Payout request received
              </div>
              <div className={styles.hourAgo}>1 hour ago</div>
            </div>
            <div className={styles.container9}>
              <div className={styles.sarahJohnson}>John Doe - ₦120,000</div>
            </div>
          </div>
        </div>
        <div className={styles.activityItem1}>
          <img className={styles.containerIcon} alt="" src="/Container.svg" />
          <div className={styles.activityTextGroup5}>
            <div className={styles.activityLabelRow5}>
              <div className={styles.newUserRegistered}>
                User verification submitted
              </div>
              <div className={styles.minAgo}>2 hours ago</div>
            </div>
            <div className={styles.container6}>
              <div className={styles.sarahJohnson}>Michael Brown</div>
            </div>
          </div>
        </div>
        <div className={styles.button24}>
          <div className={styles.viewAllPending}>View all activity</div>
          <img
            className={styles.chevronRightIcon}
            alt=""
            src="/Chevron-right.svg"
          />
        </div>
      </section>
      <div className={styles.groups12}>
        <div className={styles.groups13}>
          <div className={styles.frame11}>
            <img className={styles.imageIcon17} alt="" src="/Image195.svg" />
          </div>
          <img
            className={styles.backgroundIcon6}
            loading="lazy"
            alt=""
            src="/Background26@2x.png"
          />
          <img className={styles.imageIcon18} alt="" src="/Image197.svg" />
          <img className={styles.imageIcon19} alt="" src="/Image194.svg" />
          <img className={styles.imageIcon20} alt="" src="/Image196.svg" />
          <img className={styles.imageIcon21} alt="" src="/Image190.svg" />
          <img className={styles.imageIcon22} alt="" src="/Image188.svg" />
          <img
            className={styles.imageIcon23}
            loading="lazy"
            alt=""
            src="/Image203.svg"
          />
          <div className={styles.viewFullReport}>View full report</div>
          <div className={styles.statRowTotalReviews}>
            <div className={styles.totalReviews}>Total Reviews</div>
            <div className={styles.detailValue}>8,543</div>
          </div>
          <div className={styles.detailItem}>24</div>
          <div className={styles.statRowActiveCities}>
            <div className={styles.detailValue}>Active Cities</div>
            <div className={styles.div}>
              <div className={styles.div2}>1,366</div>
            </div>
          </div>
          <div className={styles.totalHoteis}>Total Hoteis</div>
          <div className={styles.statRowTotalEvents}>
            <div className={styles.detailValue}>Total Events Centars</div>
            <div className={styles.div3}>634</div>
          </div>
          <div className={styles.statRowTotalServices}>
            <div className={styles.totalReviews}>Total Sarvices</div>
            <div className={styles.div4}>2.220</div>
          </div>
          <div className={styles.statRowTotalProperties}>
            <div className={styles.detailValue}>Total Properties</div>
            <div className={styles.detailValue}>4,562</div>
          </div>
          <div className={styles.platformSummary}>Platform Summary</div>
        </div>
      </div>
    </div>
  );
};

BottomRow.propTypes = {
  className: PropTypes.string,
};

export default BottomRow;
