import { Box, Typography } from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Frame from "../../components/ServiceListings/Frame/Frame";
import Frame1 from "../../components/ServiceListings/Frame1/Frame1";
import styles from "./ServiceListings.module.css";

const ServiceListings = () => {
  return (
    <MainLayout adminName="Admin User" adminRole="Super Admin">
    <Box className={styles.serviceListingsUi}>
      <Box className={styles.root}>
        <Box className={styles.groups}>
          <Box className={styles.frame}>
            <Box className={styles.frameRow0}>
              <Box className={styles.groups2}>
                <img className={styles.imageIcon} alt="" src="/Image183.svg" />
                <div className={styles.dashboard}>Dashboard</div>
              </Box>
              <Box className={styles.groups3}>
                <Box className={styles.image}>
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/Image177.svg"
                  />
                </Box>
                <Box className={styles.users}>
                  <div className={styles.dashboard}>Users</div>
                </Box>
                <img className={styles.imageIcon3} alt="" src="/Image153.svg" />
              </Box>
            </Box>
            <Box className={styles.groups4}>
              <Box className={styles.groups5}>
                <img className={styles.imageIcon4} alt="" src="/Image137.svg" />
                <Box className={styles.listings}>
                  <div className={styles.dashboard}>Listings</div>
                </Box>
                <img className={styles.imageIcon5} alt="" src="/Image156.svg" />
              </Box>
            </Box>
            <Box className={styles.groups6}>
              <Box className={styles.groups7}>
                <Box className={styles.button}>
                  <Box className={styles.button2}>
                    <Box className={styles.background} />
                    <Box className={styles.groups8}>
                      <img
                        className={styles.imageIcon6}
                        alt=""
                        src="/Image143.svg"
                      />
                      <div className={styles.services}>Services</div>
                      <img
                        className={styles.imageIcon7}
                        alt=""
                        src="/Image135.svg"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups9}>
                  <Box className={styles.groups10}>
                    <Box className={styles.button3}>
                      <Box className={styles.frame2}>
                        <div className={styles.allServices}>All Services</div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.addNewService}>
                  <div className={styles.dashboard}>Add New Service</div>
                </Box>
                <Box className={styles.groups11}>
                  <Box className={styles.groups12}>
                    <div className={styles.serviceProvider}>
                      Service Providers
                    </div>
                  </Box>
                </Box>
                <Box className={styles.groups13}>
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/Image120.svg"
                  />
                  <Box className={styles.bookings}>
                    <div className={styles.dashboard}>Bookings</div>
                  </Box>
                  <img
                    className={styles.imageIcon3}
                    alt=""
                    src="/Image134.svg"
                  />
                </Box>
                <Box className={styles.groups14}>
                  <img
                    className={styles.imageIcon10}
                    alt=""
                    src="/Image118.svg"
                  />
                  <div className={styles.verification}>Verification</div>
                  <Box className={styles.image2}>
                    <img
                      className={styles.imageIcon11}
                      alt=""
                      src="/Image185.svg"
                    />
                  </Box>
                </Box>
                <Box className={styles.groups15}>
                  <img
                    className={styles.imageIcon6}
                    alt=""
                    src="/Image182.svg"
                  />
                  <div
                    className={styles.eamingsTransa}
                  >{`Eamings & Transactions`}</div>
                  <img
                    className={styles.imageIcon7}
                    alt=""
                    src="/Image136.svg"
                  />
                </Box>
                <Box className={styles.groups16}>
                  <img
                    className={styles.imageIcon14}
                    alt=""
                    src="/Image176.svg"
                  />
                  <Box className={styles.reportsAnalyt}>
                    <div
                      className={styles.dashboard}
                    >{`Reports & Analytics`}</div>
                  </Box>
                  <img
                    className={styles.imageIcon3}
                    alt=""
                    src="/Image171.svg"
                  />
                </Box>
                <Box className={styles.groups17}>
                  <Box className={styles.groups18}>
                    <img
                      className={styles.imageIcon6}
                      alt=""
                      src="/Image142.svg"
                    />
                    <div className={styles.notifications}>Notifications</div>
                  </Box>
                </Box>
                <Box className={styles.groups19}>
                  <Box className={styles.groupsRow1}>
                    <img
                      className={styles.imageIcon17}
                      alt=""
                      src="/Image179.svg"
                    />
                    <div className={styles.systemLogs}>System Logs</div>
                  </Box>
                  <Box className={styles.groups20}>
                    <img
                      className={styles.imageIcon14}
                      alt=""
                      src="/Image141.svg"
                    />
                    <Box className={styles.settings}>
                      <div className={styles.dashboard}>Settings</div>
                    </Box>
                    <img
                      className={styles.imageIcon3}
                      alt=""
                      src="/Image161.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.groups21}>
              <Box className={styles.groups22}>
                <Box className={styles.frame3}>
                  <Box className={styles.groups23}>
                    <img
                      className={styles.imageIcon20}
                      alt=""
                      src="/Image124.svg"
                    />
                    <Box className={styles.userInfo}>
                      <div className={styles.adminUser}>Admin User</div>
                      <div className={styles.saiperAdmnetrat}>
                        Super Administrator
                      </div>
                    </Box>
                    <img
                      className={styles.imageIcon21}
                      alt=""
                      src="/Image116.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className={styles.groups24}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/Container@2x.png"
            />
            <Box className={styles.groupsColumn1}>
              <Typography
                className={styles.cvProperties}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >
                CV Properties
              </Typography>
              <div className={styles.adminPanel}>Admin Panel</div>
            </Box>
          </Box>
        </Box>
        <Box className={styles.rootColumn1}>
          <Box className={styles.groups25}>
            <Box className={styles.groups26}>
              <Box className={styles.frame4}>
                <Box className={styles.navbarLeft}>
                  <Box className={styles.image3}>
                    <img
                      className={styles.imageIcon22}
                      alt=""
                      src="/Image110.svg"
                    />
                  </Box>
                  <Box className={styles.text}>
                    <Box className={styles.searchContainer}>
                      <img
                        className={styles.imageIcon23}
                        alt=""
                        src="/Image112.svg"
                      />
                      <Box className={styles.searchColumn}>
                        <div className={styles.searchBySorvic}>
                          Search by Service, provider, category
                        </div>
                        <img
                          className={styles.imageIcon24}
                          alt=""
                          src="/Image189.svg"
                        />
                      </Box>
                      <div className={styles.k}>K</div>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.navbarRight}>
                  <Box className={styles.frame5}>
                    <Box className={styles.frame6}>
                      <img
                        className={styles.buttonIcon}
                        alt=""
                        src="/Button20.svg"
                      />
                    </Box>
                  </Box>
                  <Box className={styles.button4}>
                    <Box className={styles.frame7}>
                      <div className={styles.a}>a</div>
                    </Box>
                  </Box>
                  <Box className={styles.userProfile}>
                    <img
                      className={styles.imageIcon26}
                      alt=""
                      src="/Image127.svg"
                    />
                    <Box className={styles.userInfo2}>
                      <div className={styles.a}>Admin User</div>
                      <div className={styles.superAdmin}>Super Admin</div>
                    </Box>
                    <Box className={styles.image4}>
                      <img
                        className={styles.imageIcon27}
                        alt=""
                        src="/Image160.svg"
                      />
                    </Box>
                  </Box>
                </Box>
                <img
                  className={styles.imageIcon28}
                  alt=""
                  src="/Image178.svg"
                />
              </Box>
            </Box>
          </Box>
          <Box className={styles.groups27}>
            <Box className={styles.frame8}>
              <Box className={styles.groups28}>
                <Box className={styles.groups29}>
                  <Box className={styles.servicesHeaderColumn0}>
                    <div className={styles.services2}>Services</div>
                    <Box className={styles.breadcrumbNav}>
                      <div className={styles.systemLogs}>Dashboard</div>
                      <Box className={styles.image5}>
                        <img
                          className={styles.imageIcon29}
                          alt=""
                          src="/Image152.svg"
                        />
                      </Box>
                      <div className={styles.systemLogs}>Services</div>
                      <Box className={styles.image6}>
                        <img
                          className={styles.imageIcon30}
                          alt=""
                          src="/Image162.svg"
                        />
                      </Box>
                      <div className={styles.systemLogs}>All Services</div>
                    </Box>
                  </Box>
                  <Box className={styles.actionButtons}>
                    <Box className={styles.button5}>
                      <Box className={styles.frame9}>
                        <img
                          className={styles.imageIcon31}
                          alt=""
                          src="/Image184.svg"
                        />
                        <div className={styles.a}>Export Services</div>
                      </Box>
                    </Box>
                    <Box className={styles.button6}>
                      <Box className={styles.frame10}>
                        <img
                          className={styles.imageIcon32}
                          alt=""
                          src="/Image149.svg"
                        />
                        <div className={styles.systemLogs}>Add New Service</div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.serviceRow}>
                <Box className={styles.groups30}>
                  <Box className={styles.frame11}>
                    <Box className={styles.image7}>
                      <img
                        className={styles.imageIcon33}
                        alt=""
                        src="/Image111.svg"
                      />
                    </Box>
                    <Box className={styles.cardInfo}>
                      <Typography
                        className={styles.totaiServices}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Totai Services
                      </Typography>
                      <Typography
                        className={styles.placeholderValue}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontSize: "17px", fontWeight: "700" }}
                      >
                        2,568
                      </Typography>
                      <Box className={styles.cardTrend}>
                        <div className={styles.trendingStats}>12.5%</div>
                        <div className={styles.vsLzatMorth}>vs last morth</div>
                      </Box>
                    </Box>
                    <img
                      className={styles.imageIcon34}
                      alt=""
                      src="/Image190.svg"
                    />
                  </Box>
                </Box>
                <Box className={styles.groups31}>
                  <Box className={styles.groups32}>
                    <Box className={styles.frame12}>
                      <Box className={styles.image8}>
                        <img
                          className={styles.imageIcon35}
                          alt=""
                          src="/Image157.svg"
                        />
                      </Box>
                      <Box className={styles.cardInfo2}>
                        <Typography
                          className={styles.activeServicas}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Active Services
                        </Typography>
                        <Typography
                          className={styles.servicasValue}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontSize: "17px", fontWeight: "700" }}
                        >
                          1,850
                        </Typography>
                        <Box className={styles.cardTrend2}>
                          <div className={styles.percentageValue}>6.7%</div>
                          <div className={styles.vsLzatMorth}>
                            vs last month
                          </div>
                        </Box>
                      </Box>
                      <img
                        className={styles.imageIcon36}
                        alt=""
                        src="/Image115.svg"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups33}>
                  <Box className={styles.groups34}>
                    <Box className={styles.groups35}>
                      <Box className={styles.frame13}>
                        <img
                          className={styles.imageIcon37}
                          alt=""
                          src="/Image123.svg"
                        />
                        <Box className={styles.statInfo}>
                          <Typography
                            className={styles.pendingApprovai}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Pending Approvai
                          </Typography>
                          <Typography
                            className={styles.pendingValue}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontSize: "17px", fontWeight: "700" }}
                          >
                            312
                          </Typography>
                          <Box className={styles.statTrend}>
                            <img
                              className={styles.imageIcon38}
                              alt=""
                              src="/Image188.svg"
                            />
                            <div className={styles.trendingStats}>4.2%</div>
                            <div className={styles.vsLzatMorth}>
                              vs last month
                            </div>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups36}>
                  <Box className={styles.groups37}>
                    <Box className={styles.frame14}>
                      <Box className={styles.image9}>
                        <img
                          className={styles.imageIcon37}
                          alt=""
                          src="/Image114.svg"
                        />
                      </Box>
                      <Box className={styles.statInfo2}>
                        <Typography
                          className={styles.rejectedService}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Rejected Services
                        </Typography>
                        <Typography
                          className={styles.rejectionValue}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontSize: "17px", fontWeight: "700" }}
                        >
                          128
                        </Typography>
                        <Box className={styles.statTrend2}>
                          <img
                            className={styles.imageIcon40}
                            alt=""
                            src="/Image196.svg"
                          />
                          <div className={styles.trendingStats}>2.1%</div>
                          <div className={styles.vsLzatMorth}>
                            vs last monith
                          </div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups38}>
                  <Box className={styles.frame15}>
                    <img
                      className={styles.imageIcon41}
                      alt=""
                      src="/Image131.svg"
                    />
                    <Box className={styles.statInfo3}>
                      <Typography
                        className={styles.reportedService}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Reported Services
                      </Typography>
                      <Typography
                        className={styles.reportedValue}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontSize: "17px", fontWeight: "700" }}
                      >
                        46
                      </Typography>
                      <Box className={styles.statTrend3}>
                        <Box className={styles.image10}>
                          <img
                            className={styles.imageIcon42}
                            alt=""
                            src="/Image197.svg"
                          />
                        </Box>
                        <div className={styles.trendingStats}>1.2%</div>
                        <div className={styles.vsLzatMorth}>vs last morith</div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.groups39}>
                <Box className={styles.groups40}>
                  <Box className={styles.filterBox}>
                    <Box className={styles.groups41}>
                      <Box className={styles.text2}>
                        <Box className={styles.serviceLabel}>
                          <img
                            className={styles.imageIcon43}
                            alt=""
                            src="/Image195.svg"
                          />
                          <Typography
                            className={styles.seaichByTitie}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Search by title provider, category..
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.groups42}>
                      <Box className={styles.groups43}>
                        <Typography
                          className={styles.category}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Category
                        </Typography>
                        <Box className={styles.text3}>
                          <Box className={styles.selectForm}>
                            <Typography
                              className={styles.seaichByTitie}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{ fontWeight: "700" }}
                            >
                              All Categories
                            </Typography>
                            <img
                              className={styles.imageIcon27}
                              alt=""
                              src="/Image154.svg"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.groups44}>
                      <Box className={styles.serviceTypeFilter}>
                        <Typography
                          className={styles.serviceType}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Service Type
                        </Typography>
                        <Box className={styles.text4}>
                          <Box className={styles.typeSelector}>
                            <img
                              className={styles.imageIcon45}
                              alt=""
                              src="/Image139.svg"
                            />
                            <Box className={styles.types}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Types
                              </Typography>
                            </Box>
                            <Box className={styles.image11}>
                              <img
                                className={styles.imageIcon27}
                                alt=""
                                src="/Image164.svg"
                              />
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={styles.statusFilter}>
                        <Typography
                          className={styles.status}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Status
                        </Typography>
                        <Box className={styles.text5}>
                          <Box className={styles.frame16}>
                            <Typography
                              className={styles.a}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{ fontWeight: "700" }}
                            >
                              All Statuses
                            </Typography>
                            <img
                              className={styles.imageIcon47}
                              alt=""
                              src="/Image163.svg"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.locationFilterGroup}>
                      <Box className={styles.text6}>
                        <Box className={styles.locationSelector}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            All Locations
                          </Typography>
                          <img
                            className={styles.imageIcon48}
                            alt=""
                            src="/Image119.svg"
                          />
                        </Box>
                      </Box>
                      <Typography
                        className={styles.location}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontSize: "10px", fontWeight: "700" }}
                      >
                        Location
                      </Typography>
                    </Box>
                    <Box className={styles.button7}>
                      <Box className={styles.button8}>
                        <Box className={styles.frame17}>
                          <Box className={styles.image12}>
                            <img
                              className={styles.imageIcon43}
                              alt=""
                              src="/Image194.svg"
                            />
                          </Box>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            More Filters
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.resetGroup}>
                      <Box className={styles.image12}>
                        <img
                          className={styles.imageIcon43}
                          alt=""
                          src="/Image133.svg"
                        />
                      </Box>
                      <Typography
                        className={styles.a}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Reset
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Typography
                className={styles.showing11o10}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >
                Showing 1 to 10 of 2,568 services
              </Typography>
              <Box className={styles.groups45}>
                <Box className={styles.groups46}>
                  <Box className={styles.groups47}>
                    <Box className={styles.tableBody}>
                      <Box className={styles.frame18}>
                        <Box className={styles.image14}>
                          <img
                            className={styles.imageIcon51}
                            alt=""
                            src="/Image129@2x.png"
                          />
                        </Box>
                        <Box className={styles.button9}>
                          <Box className={styles.button10}>
                            <Box className={styles.frame19}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Cleaning
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.image15}>
                          <img
                            className={styles.imageIcon52}
                            alt=""
                            src="/Image180.svg"
                          />
                        </Box>
                        <Box className={styles.image16}>
                          <img
                            className={styles.imageIcon53}
                            alt=""
                            src="/Image187.svg"
                          />
                        </Box>
                        <Box className={styles.button11}>
                          <Box className={styles.frame20}>
                            <img
                              className={styles.imageIcon54}
                              alt=""
                              src="/Image122.svg"
                            />
                            <Typography
                              className={styles.a}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{ fontWeight: "700" }}
                            >
                              Active
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={styles.button12}>
                          <Box className={styles.button13}>
                            <Box className={styles.frame21}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Available
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button14}>
                          <img
                            className={styles.buttonIcon2}
                            alt=""
                            src="/Button16.svg"
                          />
                        </Box>
                      </Box>
                      <Box className={styles.rowEventDecoration}>
                        <Box className={styles.cellServiceEvent}>
                          <div className={styles.eventDecoration}>
                            Event Decoration
                          </div>
                          <div className={styles.decorForAll}>
                            Decor for all events
                          </div>
                          <div className={styles.decorForAll}>10.328.009</div>
                        </Box>
                        <Box className={styles.button15}>
                          <Box className={styles.button16}>
                            <Box className={styles.frame22}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Event Services
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button17}>
                          <Box className={styles.button18}>
                            <Box className={styles.frame23}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                One-time
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellProviderEvent}>
                          <Typography
                            className={styles.michestBrowes}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Michest Browes
                          </Typography>
                          <Typography
                            className={styles.seruiceProolder}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Service Provider
                          </Typography>
                        </Box>
                        <Typography
                          className={styles.lagosNguria}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontSize: "11px", fontWeight: "700" }}
                        >
                          Lagos, Nigeria
                        </Typography>
                        <Box className={styles.button19}>
                          <Box className={styles.button20}>
                            <Box className={styles.frame24}>
                              <Box className={styles.image17}>
                                <img
                                  className={styles.imageIcon56}
                                  alt=""
                                  src="/Image193.svg"
                                />
                              </Box>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Rejected
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellDateEvent}>
                          <Box className={styles.cellDateEvent2}>
                            <Box className={styles.cellDateEvent3}>
                              <Typography
                                className={styles.may21202}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                May 21,202%
                              </Typography>
                              <Typography
                                className={styles.dpmm}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                12:45 PM
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={styles.button21}>
                        <Box className={styles.frame25}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Available
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.rowGardenMaintenance}>
                        <Box className={styles.cellServiceGarden}>
                          <div className={styles.decorForAll}>
                            Garden care and treaming
                          </div>
                          <div className={styles.decorForAll}>0:184-090</div>
                        </Box>
                        <Box className={styles.button22}>
                          <Box className={styles.button23}>
                            <Box className={styles.frame26}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Recruiting
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellProviderGarden}>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Robert Teyltr
                          </Typography>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Service Provider
                          </Typography>
                        </Box>
                        <Typography
                          className={styles.abuaNigma}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Abuja, NIgeria
                        </Typography>
                        <Box className={styles.n7000visit}>
                          <Typography
                            className={styles.seaichByTitie}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            N7.000/visit
                          </Typography>
                        </Box>
                        <Box className={styles.cellDateGarden}>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            May 22,2024
                          </Typography>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            11:40 PM
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.button24}>
                        <Box className={styles.frame27}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Recruiting
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.button25}>
                        <Box className={styles.frame28}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Cleaning
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.rowCarWash}>
                        <Box className={styles.cellServiceCarwash}>
                          <div className={styles.eventDecoration}>
                            Car Wash Service
                          </div>
                          <div className={styles.decorForAll}>
                            EXterrior and Interrior Cleaning
                          </div>
                          <div className={styles.decorForAll}>ID:星#-007</div>
                        </Box>
                        <Box className={styles.button26}>
                          <Box className={styles.button27}>
                            <Box className={styles.frame29}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Automative
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button28}>
                          <Box className={styles.button29}>
                            <Box className={styles.frame30}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                One-time
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellProviderCarwash}>
                          <Typography
                            className={styles.emilyDavis}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Emily Davis
                          </Typography>
                          <Typography
                            className={styles.emilyDavis}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Service Provider
                          </Typography>
                        </Box>
                        <Box className={styles.laganNgeria}>
                          <Typography
                            className={styles.seaichByTitie}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Lagos, NIgeria
                          </Typography>
                        </Box>
                        <Box className={styles.n6000wash}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            N6,000/wash
                          </Typography>
                        </Box>
                        <Box className={styles.button30}>
                          <Box className={styles.button31}>
                            <Box className={styles.frame31}>
                              <Box className={styles.image18}>
                                <img
                                  className={styles.imageIcon57}
                                  alt=""
                                  src="/Image146.svg"
                                />
                              </Box>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Active
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.frame32}>
                          <Box className={styles.frame33}>
                            <Typography
                              className={styles.a}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{ fontWeight: "700" }}
                            >
                              Buy
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={styles.cellDateCarwash}>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            May 25,2024
                          </Typography>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            03.20 PM
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.rowElectricalInstallation}>
                        <Box className={styles.cellServiceElectrical}>
                          <Box className={styles.electricalIstal}>
                            <div className={styles.electricalIstal2}>
                              Electrical istallation
                            </div>
                          </Box>
                          <div className={styles.elctricalWiring}>
                            Electrical wirring and installation
                          </div>
                          <div className={styles.decorForAll}>SE36-.006</div>
                        </Box>
                        <Box className={styles.button32}>
                          <Box className={styles.button33}>
                            <Box className={styles.frame34}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Electrical
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button34}>
                          <Box className={styles.button10}>
                            <Box className={styles.frame35}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                One-time
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellProviderElectrical}>
                          <Typography
                            className={styles.johnDoe}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            John Doe
                          </Typography>
                          <Typography
                            className={styles.seruiceProolder}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Service Provider
                          </Typography>
                        </Box>
                        <Box className={styles.lag1Ngurie}>
                          <Typography
                            className={styles.seaichByTitie}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Lagos, Nigeria
                          </Typography>
                        </Box>
                        <Box className={styles.n100d07job}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            N10.0D07/job
                          </Typography>
                        </Box>
                        <Box className={styles.button36}>
                          <Box className={styles.button37}>
                            <Box className={styles.frame36}>
                              <img
                                className={styles.imageIcon58}
                                alt=""
                                src="/Image199.svg"
                              />
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Active
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button38}>
                          <Box className={styles.button39}>
                            <Box className={styles.frame37}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Available
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellDateElectrical}>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            May 28,2024
                          </Typography>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            01.10 PM
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.rowMovingService}>
                        <Box className={styles.cellServiceMoving}>
                          <div className={styles.eventDecoration}>
                            Moving Service
                          </div>
                          <div
                            className={styles.decorForAll}
                          >{`Home & office moving`}</div>
                          <div className={styles.decorForAll}>ID.SER-0OS</div>
                        </Box>
                        <Box className={styles.button40}>
                          <Box className={styles.button41}>
                            <Box className={styles.frame38}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Moving
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button42}>
                          <Box className={styles.button43}>
                            <Box className={styles.frame39}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                One-time
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellProviderMoving}>
                          <Typography
                            className={styles.michestBrowes}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Jarss Andarcon
                          </Typography>
                          <Typography
                            className={styles.seruiceProolder}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Service Provider
                          </Typography>
                        </Box>
                        <Typography
                          className={styles.ibadetigerta}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontSize: "11px", fontWeight: "700" }}
                        >
                          Ibadan, Nigeria
                        </Typography>
                        <Box className={styles.button44}>
                          <Box className={styles.button45}>
                            <Box className={styles.frame40}>
                              <Box className={styles.image19}>
                                <img
                                  className={styles.imageIcon59}
                                  alt=""
                                  src="/Image79.svg"
                                />
                              </Box>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Pending
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button46}>
                          <Box className={styles.frame41}>
                            <Typography
                              className={styles.a}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{ fontWeight: "700" }}
                            >
                              Available
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={styles.cellDateMoving}>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            May 27,2024
                          </Typography>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            1:10AM
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.rowLaundryService}>
                        <Box className={styles.cellServiceLaundry}>
                          <div className={styles.eventDecoration}>
                            Laundry Service
                          </div>
                          <Box className={styles.electricalIstal}>
                            <div className={styles.electricalIstal2}>
                              Wash,dry and foid
                            </div>
                          </Box>
                          <div className={styles.decorForAll}>1TE8-004</div>
                        </Box>
                        <Box className={styles.button47}>
                          <Box className={styles.button48}>
                            <Box className={styles.frame42}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Laundry
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button49}>
                          <Box className={styles.button50}>
                            <Box className={styles.frame43}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Recruiting
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellProviderLaundry}>
                          <Typography
                            className={styles.emilyDavis}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Dauld Wison
                          </Typography>
                          <Typography
                            className={styles.emilyDavis}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Service Provider
                          </Typography>
                        </Box>
                        <Box className={styles.bortHarcourtNa}>
                          <Typography
                            className={styles.bortHarcourtNa2}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Port Harcourt Nigeria
                          </Typography>
                        </Box>
                        <Box className={styles.n2500}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            N2,500/Load
                          </Typography>
                        </Box>
                        <Box className={styles.button51}>
                          <Box className={styles.button10}>
                            <Box className={styles.frame44}>
                              <img
                                className={styles.imageIcon60}
                                alt=""
                                src="/Image165.svg"
                              />
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Active
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellDateLaundry}>
                          <Box className={styles.cellDateLaundry2}>
                            <Box className={styles.cellDateLaundry3}>
                              <Typography
                                className={styles.cvProperties}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                May 29.2024
                              </Typography>
                              <Typography
                                className={styles.cvProperties}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                2:20AM用
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={styles.rowWeddingPhotography}>
                        <Box className={styles.rowWeddingPhotographyColumn}>
                          <div className={styles.decorForAll}>
                            Wedding Photography
                          </div>
                          <div className={styles.elctricalWiring}>
                            Professional Wedding Photos
                          </div>
                        </Box>
                        <Box className={styles.button53}>
                          <Box className={styles.button54}>
                            <Box className={styles.actionArea}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Photography
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button55}>
                          <Box className={styles.frame45}>
                            <Typography
                              className={styles.a}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{ fontWeight: "700" }}
                            >
                              One-time
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={styles.cellProviderWedding}>
                          <Typography
                            className={styles.olviaMartinez}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Olvia Martinez
                          </Typography>
                          <Typography
                            className={styles.olviaMartinez}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Service Provider
                          </Typography>
                        </Box>
                        <Box className={styles.lagasNgeria}>
                          <Typography
                            className={styles.seaichByTitie}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Lagos, Nigeria
                          </Typography>
                        </Box>
                        <Box className={styles.n150000}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            N150.000
                          </Typography>
                        </Box>
                        <Box className={styles.button56}>
                          <Box className={styles.button45}>
                            <Box className={styles.frame40}>
                              <Box className={styles.image19}>
                                <img
                                  className={styles.imageIcon59}
                                  alt=""
                                  src="/Image79.svg"
                                />
                              </Box>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Pending
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button58}>
                          <Box className={styles.button59}>
                            <Box className={styles.frame47}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Available
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.rowWeddingPhotographyColumn2}>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            May 2%, 2024
                          </Typography>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            10:20 AM
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.rowPlumbingRepair}>
                        <Box className={styles.cellServicePlumbing}>
                          <div className={styles.eventDecoration}>
                            Plumbing Repair
                          </div>
                          <div className={styles.decorForAll}>
                            Fix Pipe Issues
                          </div>
                          <div className={styles.decorForAll}>1D-10H.002</div>
                        </Box>
                        <Box className={styles.button60}>
                          <Box className={styles.button61}>
                            <Box className={styles.typeContainer}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Plumbing
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button62}>
                          <Box className={styles.button63}>
                            <Box className={styles.frame48}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                One-time
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellProviderPlumbing}>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Mke Anderon
                          </Typography>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Service Provider
                          </Typography>
                        </Box>
                        <Typography
                          className={styles.buiaNgeria}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontSize: "11px", fontWeight: "700" }}
                        >
                          Abuja, NIgeria
                        </Typography>
                        <Box className={styles.n8000job}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            N8,000/job
                          </Typography>
                        </Box>
                        <Box className={styles.button64}>
                          <Box className={styles.button65}>
                            <Box className={styles.availabilityState}>
                              <img
                                className={styles.imageIcon62}
                                alt=""
                                src="/Image166.svg"
                              />
                              <Box className={styles.actrve}>
                                <Typography
                                  className={styles.a}
                                  variant="inherit"
                                  variantMapping={{ inherit: "b" }}
                                  sx={{ fontWeight: "700" }}
                                >
                                  Active
                                </Typography>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button66}>
                          <Box className={styles.frame49}>
                            <Typography
                              className={styles.a}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{ fontWeight: "700" }}
                            >
                              Available
                            </Typography>
                          </Box>
                        </Box>
                        <Box className={styles.cellDatePlumbing}>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            May 30,2024
                          </Typography>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            02:45 PM
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.rowHomeCleaning}>
                        <Box className={styles.cellServiceHomeCleaning}>
                          <div className={styles.eventDecoration}>
                            Home Cleaning Servics
                          </div>
                          <div className={styles.decorForAll}>
                            Professional Home Cleaning
                          </div>
                          <div className={styles.decorForAll}>© 1994-001</div>
                        </Box>
                        <Box className={styles.button67}>
                          <Box className={styles.button68}>
                            <Box className={styles.frame50}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Cleaning
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.button69}>
                          <Box className={styles.button70}>
                            <Frame />
                          </Box>
                        </Box>
                        <Box className={styles.cellProviderHomeCleaning}>
                          <Typography
                            className={styles.michestBrowes}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Satah Juhvagn
                          </Typography>
                          <Typography
                            className={styles.seruiceProolder}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Service Provider
                          </Typography>
                        </Box>
                        <Box className={styles.lagesNomia}>
                          <Typography
                            className={styles.seaichByTitie}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Lagos, NIgeria
                          </Typography>
                        </Box>
                        <Box className={styles.n15000job}>
                          <Typography
                            className={styles.a}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            N15.000/job
                          </Typography>
                        </Box>
                        <Box className={styles.button71}>
                          <Box className={styles.button72}>
                            <Frame1 />
                          </Box>
                        </Box>
                        <Box className={styles.button73}>
                          <Box className={styles.button74}>
                            <Box className={styles.frame51}>
                              <Typography
                                className={styles.a}
                                variant="inherit"
                                variantMapping={{ inherit: "b" }}
                                sx={{ fontWeight: "700" }}
                              >
                                Available
                              </Typography>
                            </Box>
                          </Box>
                        </Box>
                        <Box className={styles.cellDateHomeCleaning}>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            Mey 31.2024
                          </Typography>
                          <Typography
                            className={styles.cvProperties}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{ fontWeight: "700" }}
                          >
                            10-30AM
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.cellDateTutoring}>
                        <Typography
                          className={styles.cvProperties}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          May 24,2024
                        </Typography>
                        <Typography
                          className={styles.cvProperties}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          10.05AM
                        </Typography>
                      </Box>
                      <Box className={styles.cellProviderTutoring}>
                        <Typography
                          className={styles.cvProperties}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Linits Thempeon
                        </Typography>
                        <Typography
                          className={styles.cvProperties}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Service Provider
                        </Typography>
                      </Box>
                      <Box className={styles.cellServiceTutoring}>
                        <div className={styles.eventDecoration}>
                          Tutoring (Math)
                        </div>
                        <div className={styles.oneOnAneMath}>
                          One-on-ane math tutoring
                        </div>
                        <div className={styles.decorForAll}>D125.004</div>
                      </Box>
                      <Typography
                        className={styles.enuguHiguria}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontSize: "11px", fontWeight: "700" }}
                      >
                        Enugu, NIgeria
                      </Typography>
                    </Box>
                    <img
                      className={styles.backgroundIcon3}
                      alt=""
                      src="/Background14.svg"
                    />
                    <img
                      className={styles.buttonIcon3}
                      alt=""
                      src="/Button17.svg"
                    />
                    <img
                      className={styles.imageIcon64}
                      alt=""
                      src="/Image117.svg"
                    />
                    <img
                      className={styles.imageIcon65}
                      alt=""
                      src="/Image198.svg"
                    />
                    <img
                      className={styles.imageIcon66}
                      alt=""
                      src="/Image150.svg"
                    />
                    <img
                      className={styles.imageIcon67}
                      alt=""
                      src="/Image126@2x.png"
                    />
                    <img
                      className={styles.backgroundIcon5}
                      alt=""
                      src="/Background19.svg"
                    />
                    <img
                      className={styles.buttonIcon4}
                      alt=""
                      src="/Button15.svg"
                    />
                    <img
                      className={styles.imageIcon69}
                      alt=""
                      src="/Image186.svg"
                    />
                    <img
                      className={styles.imageIcon70}
                      alt=""
                      src="/Image113.svg"
                    />
                    <img
                      className={styles.imageIcon71}
                      alt=""
                      src="/Image140@2x.png"
                    />
                    <img
                      className={styles.backgroundIcon7}
                      alt=""
                      src="/Background13.svg"
                    />
                    <img
                      className={styles.imageIcon72}
                      alt=""
                      src="/Image169.svg"
                    />
                    <img
                      className={styles.imageIcon73}
                      alt=""
                      src="/Image147.svg"
                    />
                    <img
                      className={styles.imageIcon74}
                      alt=""
                      src="/Image132.svg"
                    />
                    <img
                      className={styles.imageIcon75}
                      alt=""
                      src="/Image158@2x.png"
                    />
                    <img
                      className={styles.backgroundIcon8}
                      alt=""
                      src="/Background11.svg"
                    />
                    <img
                      className={styles.imageIcon76}
                      alt=""
                      src="/Image170.svg"
                    />
                    <img
                      className={styles.imageIcon77}
                      alt=""
                      src="/Image148.svg"
                    />
                    <img
                      className={styles.imageIcon78}
                      alt=""
                      src="/Image172.svg"
                    />
                    <img
                      className={styles.imageIcon79}
                      alt=""
                      src="/Image145@2x.png"
                    />
                    <img
                      className={styles.backgroundIcon9}
                      alt=""
                      src="/Background12.svg"
                    />
                    <img
                      className={styles.buttonIcon5}
                      alt=""
                      src="/Button14.svg"
                    />
                    <img
                      className={styles.imageIcon81}
                      alt=""
                      src="/Image192.svg"
                    />
                    <img
                      className={styles.imageIcon82}
                      alt=""
                      src="/Image155.svg"
                    />
                    <img
                      className={styles.imageIcon83}
                      alt=""
                      src="/Image144@2x.png"
                    />
                    <img
                      className={styles.backgroundIcon11}
                      alt=""
                      src="/Background15.svg"
                    />
                    <img
                      className={styles.buttonIcon6}
                      alt=""
                      src="/Button21.svg"
                    />
                    <Box className={styles.button75}>
                      <Box className={styles.orderInterface}>
                        <Box className={styles.image21} />
                      </Box>
                      <Box className={styles.pricingBlock}>
                        <Typography
                          className={styles.a}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Buy
                        </Typography>
                      </Box>
                    </Box>
                    <img
                      className={styles.imageIcon85}
                      alt=""
                      src="/Image191.svg"
                    />
                    <img
                      className={styles.imageIcon86}
                      alt=""
                      src="/Image174.svg"
                    />
                    <img
                      className={styles.imageIcon87}
                      alt=""
                      src="/Image138@2x.png"
                    />
                    <img
                      className={styles.backgroundIcon13}
                      alt=""
                      src="/Background18.svg"
                    />
                    <img
                      className={styles.buttonIcon7}
                      alt=""
                      src="/Button18.svg"
                    />
                    <img
                      className={styles.imageIcon89}
                      alt=""
                      src="/Image151.svg"
                    />
                    <img
                      className={styles.imageIcon90}
                      alt=""
                      src="/Image175.svg"
                    />
                    <img
                      className={styles.imageIcon91}
                      alt=""
                      src="/Image128@2x.png"
                    />
                    <img
                      className={styles.backgroundIcon15}
                      alt=""
                      src="/Background17.svg"
                    />
                    <img
                      className={styles.imageIcon92}
                      alt=""
                      src="/Image121.svg"
                    />
                    <img className={styles.imageIcon93} alt="" />
                    <img
                      className={styles.imageIcon94}
                      alt=""
                      src="/Image173.svg"
                    />
                    <img
                      className={styles.imageIcon95}
                      alt=""
                      src="/Image130@2x.png"
                    />
                    <img className={styles.backgroundIcon16} alt="" />
                    <Box className={styles.backgroundTable}>
                      <img
                        className={styles.imageIcon96}
                        alt=""
                        src="/Image121.svg"
                      />
                    </Box>
                    <img
                      className={styles.imageIcon97}
                      alt=""
                      src="/Image109.svg"
                    />
                    <img
                      className={styles.imageIcon98}
                      alt=""
                      src="/Image181.svg"
                    />
                    <img
                      className={styles.imageIcon99}
                      alt=""
                      src="/Image125@2x.png"
                    />
                    <img
                      className={styles.backgroundIcon17}
                      alt=""
                      src="/Background16.svg"
                    />
                    <img
                      className={styles.backgroundIcon18}
                      alt=""
                      src="/Background10.svg"
                    />
                    <div className={styles.gardenMaintenan}>
                      Garden Maintenance
                    </div>
                    <div className={styles.event}>/event</div>
                    <Typography
                      className={styles.n00000}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ fontWeight: "700" }}
                    >
                      N80000/ event
                    </Typography>
                    <div className={styles.he}>he</div>
                    <Typography
                      className={styles.n5000}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ fontWeight: "700" }}
                    >
                      N5,000/ hr
                    </Typography>
                    <div className={styles.trip}>trip</div>
                    <Typography
                      className={styles.n25000}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ fontWeight: "700" }}
                    >
                      N25,000/ trip
                    </Typography>
                    <div className={styles.ier3e300}>iEr3E3 00)</div>
                    <div className={styles.event2}>/event</div>
                    <Box className={styles.tableHeaderRow}>
                      <Typography
                        className={styles.sorvice}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Service
                      </Typography>
                      <Box className={styles.category2}>
                        <Typography
                          className={styles.a}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Category
                        </Typography>
                      </Box>
                      <Typography
                        className={styles.a}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Type
                      </Typography>
                      <Typography
                        className={styles.provider}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Provider
                      </Typography>
                      <Typography
                        className={styles.location2}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Location
                      </Typography>
                      <Box className={styles.price}>
                        <Typography
                          className={styles.seaichByTitie}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Price
                        </Typography>
                      </Box>
                      <Box className={styles.status2}>
                        <Typography
                          className={styles.a}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Status
                        </Typography>
                      </Box>
                      <Typography
                        className={styles.a}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Avalability
                      </Typography>
                      <Box className={styles.dateCreated}>
                        <Typography
                          className={styles.a}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Date Created
                        </Typography>
                      </Box>
                      <Typography
                        className={styles.a}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ fontWeight: "700" }}
                      >
                        Actions
                      </Typography>
                    </Box>
                    <Box className={styles.button76}>
                      <Box className={styles.menuItemActions}>
                        <Box className={styles.image19}>
                          <img
                            className={styles.imageIcon59}
                            alt=""
                            src="/Image79.svg"
                          />
                        </Box>
                        <Typography
                          className={styles.a}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ fontWeight: "700" }}
                        >
                          Pending
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={styles.groups48}>
                      <Box className={styles.menuOptions}>
                        <Box className={styles.menuItemEdit}>
                          <img
                            className={styles.imageIcon101}
                            alt=""
                            src="/Image60.svg"
                          />
                          <div className={styles.seaichByTitie}>
                            Edit Service Details
                          </div>
                        </Box>
                        <Box className={styles.menuItemVerify}>
                          <img
                            className={styles.imageIcon101}
                            alt=""
                            src="/Image81.svg"
                          />
                          <div className={styles.seaichByTitie}>
                            Verify/ Approve
                          </div>
                        </Box>
                        <Box className={styles.menuItemSuspend}>
                          <img
                            className={styles.imageIcon103}
                            alt=""
                            src="/Image58.svg"
                          />
                          <div className={styles.seaichByTitie}>
                            Suspend Service
                          </div>
                        </Box>
                        <Box className={styles.menuItemBan}>
                          <img
                            className={styles.imageIcon104}
                            alt=""
                            src="/Image57.svg"
                          />
                          <div className={styles.a}>Ban Service</div>
                        </Box>
                        <Box className={styles.menuItemDelete}>
                          <img
                            className={styles.imageIcon103}
                            alt=""
                            src="/Image61.svg"
                          />
                          <div className={styles.a}>Delete Service</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.groups49}>
                    <div className={styles.show}>Show</div>
                    <Box className={styles.text7}>
                      <Box className={styles.text8}>
                        <Box className={styles.frame52}>
                          <div className={styles.a}>10</div>
                          <img
                            className={styles.imageIcon60}
                            alt=""
                            src="/Image159.svg"
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.prtriers}>
                      <div className={styles.prtriers2}>entries</div>
                    </Box>
                    <Box className={styles.button77}>
                      <Box className={styles.button8}>
                        <Box className={styles.buttonContents}>
                          <div className={styles.systemLogs}>(</div>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.button79}>
                      <Box className={styles.button80}>
                        <Box className={styles.frame53}>
                          <div className={styles.a}>1</div>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.button81}>
                      <Box className={styles.button8}>
                        <Box className={styles.frame54}>
                          <div className={styles.a}>2</div>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.button83}>
                      <Box className={styles.button8}>
                        <Box className={styles.frame55}>
                          <div className={styles.a}>1</div>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.frame56}>
                      <Box className={styles.frame57}>
                        <img
                          className={styles.imageIcon107}
                          alt=""
                          src="/Image167.svg"
                        />
                      </Box>
                    </Box>
                    <Box className={styles.button85}>
                      <Box className={styles.button8}>
                        <Box className={styles.frame58}>
                          <div className={styles.a}>257</div>
                        </Box>
                      </Box>
                    </Box>
                    <img
                      className={styles.buttonIcon8}
                      alt=""
                      src="/Button19.svg"
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
    </MainLayout>
  );
};

export default ServiceListings;

