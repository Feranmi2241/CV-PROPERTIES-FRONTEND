import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./HotelListings.module.css";

const HotelListings = ({ className = "" }) => {
  return (
    <Box className={[styles.hotelListings, className].join(" ")}>
      <Box className={styles.root}>
        <Box className={styles.frame}>
          <Box className={styles.groups}>
            <img
              className={styles.backgroundIcon}
              alt=""
              src="/Background15@2x.png"
            />
            <Box className={styles.groups2}>
              <img className={styles.imageIcon} alt="" src="/Image161.svg" />
              <Box className={styles.image}>
                <img className={styles.imageIcon2} alt="" src="/Image176.svg" />
              </Box>
              <img className={styles.imageIcon3} alt="" src="/Image180.svg" />
            </Box>
            <Box className={styles.groups3}>
              <Box className={styles.groups4}>
                <Box className={styles.groups5}>
                  <div className={styles.listAHotel}>List a Hotel</div>
                  <div className={styles.step}>Step</div>
                  <div className={styles.of3}>of 3</div>
                </Box>
              </Box>
            </Box>
            <img className={styles.imageIcon4} alt="" src="/Image107.svg" />
            <Box className={styles.stepTabsRow}>
              <Box className={styles.groups6}>
                <Box className={styles.button}>
                  <Box className={styles.button2}>
                    <Box className={styles.frame2}>
                      <div className={styles.div}>1</div>
                    </Box>
                  </Box>
                </Box>
                <div className={styles.propertyDetails}>Property Details</div>
              </Box>
              <Box className={styles.step2Tab}>
                <Box className={styles.button3}>
                  <Box className={styles.button4}>
                    <Box className={styles.frame3}>
                      <div className={styles.div}>2</div>
                    </Box>
                  </Box>
                </Box>
                <div className={styles.pricingMedis}>{`Pricing & Media`}</div>
              </Box>
              <Box className={styles.groups7}>
                <Box className={styles.button5}>
                  <Box className={styles.frame4}>
                    <div className={styles.div}>3</div>
                  </Box>
                </Box>
                <div className={styles.pricingMedis}>{`Review & Submit`}</div>
              </Box>
            </Box>
            <img
              className={styles.backgroundIcon2}
              alt=""
              src="/Background21@2x.png"
            />
            <img
              className={styles.backgroundIcon3}
              alt=""
              src="/Background20@2x.png"
            />
            <Box className={styles.groups8}>
              <div className={styles.tellUsAbout}>Tell us about your hotel</div>
              <div className={styles.provideAccursto}>
                Provide accurate details to attract more guests
              </div>
            </Box>
            <img className={styles.imageIcon5} alt="" src="/Image125@2x.png" />
            <Box className={styles.basicInfoSection}>
              <Box className={styles.basicInfoHeadingRow}>
                <img className={styles.imageIcon6} alt="" src="/Image143.svg" />
                <div className={styles.basicInformatio}>Basic Information</div>
              </Box>
              <Box className={styles.hotelNameLabelRow}>
                <div className={styles.hotelName}>Hotel Name</div>
                <Box className={styles.image2}>
                  <img
                    className={styles.imageIcon7}
                    alt=""
                    src="/Image137.svg"
                  />
                </Box>
              </Box>
              <Box className={styles.text}>
                <Box className={styles.text2}>
                  <Box className={styles.frame5}>
                    <img
                      className={styles.imageIcon8}
                      alt=""
                      src="/Image187.svg"
                    />
                    <div className={styles.ggrandPalaceH}>
                      e.g.Grand Palace Hotal
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.groups9}>
                <Box className={styles.groups10}>
                  <Box className={styles.locationFieldGroup}>
                    <Box className={styles.locationLabelRow}>
                      <div className={styles.div}>Location</div>
                      <Box className={styles.image3}>
                        <img
                          className={styles.imageIcon9}
                          alt=""
                          src="/Image134.svg"
                        />
                      </Box>
                    </Box>
                    <Box className={styles.text3}>
                      <Box className={styles.frame6}>
                        <img
                          className={styles.imageIcon10}
                          alt=""
                          src="/Image177.svg"
                        />
                        <div className={styles.hotelName}>
                          Enter address, city or stata
                        </div>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.stateFieldGroup}>
                    <Box className={styles.stateLabelRow}>
                      <div className={styles.hotelName}>State</div>
                      <Box className={styles.image3}>
                        <img
                          className={styles.imageIcon11}
                          alt=""
                          src="/Image138.svg"
                        />
                      </Box>
                    </Box>
                    <Box className={styles.text4}>
                      <Box className={styles.frame7}>
                        <Box className={styles.selectStatz}>
                          <div className={styles.hotelName}>Select state</div>
                        </Box>
                        <img
                          className={styles.imageIcon12}
                          alt=""
                          src="/Image90.svg"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.groups11}>
                <Box className={styles.groupsRow0}>
                  <div className={styles.hotelName}>Short Description</div>
                  <Box className={styles.image5}>
                    <img
                      className={styles.imageIcon11}
                      alt=""
                      src="/Image108.svg"
                    />
                  </Box>
                  <div className={styles.div4}>1/120</div>
                </Box>
                <Box className={styles.text5}>
                  <Box className={styles.frame8}>
                    <img
                      className={styles.imageIcon14}
                      alt=""
                      src="/Image164.svg"
                    />
                    <div className={styles.ggrandPalaceH}>
                      A short summary about your hotel
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.groups12}>
                <Box className={styles.groups13}>
                  <Box className={styles.groupsRow02}>
                    <div className={styles.fulDescription}>Ful Description</div>
                    <Box className={styles.image6}>
                      <img
                        className={styles.imageIcon11}
                        alt=""
                        src="/Image108.svg"
                      />
                    </Box>
                    <div className={styles.ontood}>ONTOOD</div>
                  </Box>
                  <Box className={styles.text6}>
                    <Box className={styles.frame9}>
                      <Box className={styles.image7}>
                        <img
                          className={styles.imageIcon16}
                          alt=""
                          src="/Image124.svg"
                        />
                      </Box>
                      <div className={styles.describeYouHot}>
                        Describe you hotel, services and what makes your
                        <br />
                        property Special
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.yearStarRow}>
              <Box className={styles.groups14}>
                <div className={styles.yearEstabished}>Year Estabished</div>
                <Box className={styles.text7}>
                  <Box className={styles.frame10}>
                    <img
                      className={styles.imageIcon17}
                      alt=""
                      src="/Image151.svg"
                    />
                    <Box className={styles.div5}>
                      <div className={styles.hotelName}>e.g 2018</div>
                    </Box>
                    <img
                      className={styles.imageIcon18}
                      alt=""
                      src="/Image117.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={styles.starRatingGroup}>
                <div className={styles.starRatingOpt}>
                  Star Rating (Optional)
                </div>
                <Box className={styles.starIconsRow}>
                  <img
                    className={styles.imageIcon19}
                    alt=""
                    src="/Image169.svg"
                  />
                  <Box className={styles.image8}>
                    <img
                      className={styles.imageIcon20}
                      alt=""
                      src="/Image123.svg"
                    />
                  </Box>
                  <img
                    className={styles.imageIcon19}
                    alt=""
                    src="/Image99.svg"
                  />
                  <Box className={styles.image9}>
                    <img
                      className={styles.imageIcon22}
                      alt=""
                      src="/Image154.svg"
                    />
                  </Box>
                  <img
                    className={styles.imageIcon23}
                    alt=""
                    src="/Image113.svg"
                  />
                </Box>
              </Box>
            </Box>
            <Box className={styles.hotelDetailsSection}>
              <Box className={styles.hotelDetailsHeadingRow}>
                <img
                  className={styles.imageIcon24}
                  alt=""
                  src="/Image148.svg"
                />
                <div className={styles.hotelName}>Hotel Details</div>
              </Box>
              <Box className={styles.roomsTypeRow}>
                <Box className={styles.groups15}>
                  <Box className={styles.groups16}>
                    <Box className={styles.groupsRow03}>
                      <div className={styles.hotelName}>Total Rooms</div>
                      <img
                        className={styles.imageIcon12}
                        alt=""
                        src="/Image114.svg"
                      />
                    </Box>
                    <Box className={styles.text8}>
                      <Box className={styles.frame11}>
                        <Box className={styles.button6}>
                          <Box className={styles.frame12}>
                            <img
                              className={styles.imageIcon26}
                              alt=""
                              src="/Image186.svg"
                            />
                            <div className={styles.listAHotel}>e.g 80</div>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups17}>
                  <Box className={styles.groupsRow04}>
                    <div className={styles.hotelName}>Available Room</div>
                    <img
                      className={styles.imageIcon27}
                      alt=""
                      src="/Image127.svg"
                    />
                  </Box>
                  <Box className={styles.text9}>
                    <Box className={styles.frame13}>
                      <img
                        className={styles.imageIcon28}
                        alt=""
                        src="/Image150.svg"
                      />
                      <div className={styles.div8}>e.g 20</div>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups18}>
                  <Box className={styles.groupsRow05}>
                    <div className={styles.hotelName}>Property Type</div>
                    <img
                      className={styles.imageIcon29}
                      alt=""
                      src="/Image141.svg"
                    />
                  </Box>
                  <Box className={styles.text10}>
                    <Box className={styles.frame14}>
                      <img
                        className={styles.imageIcon30}
                        alt=""
                        src="/Image179.svg"
                      />
                      <Box className={styles.sdectType}>
                        <div className={styles.div}>Select Type</div>
                      </Box>
                      <img
                        className={styles.imageIcon18}
                        alt=""
                        src="/Image140.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.floorsCheckinRow}>
                <Box className={styles.groups19}>
                  <div className={styles.starRatingOpt}>Number of Floors</div>
                  <Box className={styles.text11}>
                    <Box className={styles.frame15}>
                      <Box className={styles.button7}>
                        <Box className={styles.frame16}>
                          <img
                            className={styles.imageIcon32}
                            alt=""
                            src="/Image153.svg"
                          />
                          <div className={styles.hotelName}>e.g 0.5</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.checkinTimeGroup}>
                  <Box className={styles.checkinLabelRow}>
                    <div className={styles.hotelName}>Check-in Time</div>
                    <img
                      className={styles.imageIcon33}
                      alt=""
                      src="/Image109.svg"
                    />
                  </Box>
                  <Box className={styles.text12}>
                    <Box className={styles.frame17}>
                      <img
                        className={styles.imageIcon34}
                        alt=""
                        src="/Image178.svg"
                      />
                      <Box className={styles.pm}>
                        <div className={styles.ggrandPalaceH}>02:00P%M</div>
                      </Box>
                      <Box className={styles.image10}>
                        <img
                          className={styles.imageIcon12}
                          alt=""
                          src="/Image112.svg"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.checkoutTimeGroup}>
                  <Box className={styles.checkoutLabelRow}>
                    <div className={styles.hotelName}>Check-out Time</div>
                    <Box className={styles.image3}>
                      <img
                        className={styles.imageIcon9}
                        alt=""
                        src="/Image88.svg"
                      />
                    </Box>
                  </Box>
                  <Box className={styles.text13}>
                    <Box className={styles.frame18}>
                      <img
                        className={styles.imageIcon34}
                        alt=""
                        src="/Image182.svg"
                      />
                      <Box className={styles.pm3}>
                        <div className={styles.hotelName}>12-00PM</div>
                      </Box>
                      <img
                        className={styles.imageIcon38}
                        alt=""
                        src="/Image130.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.groups20}>
              <Box className={styles.sectionHeader}>
                <Box className={styles.sectionHeaderRow0}>
                  <img
                    className={styles.imageIcon39}
                    alt=""
                    src="/Image181.svg"
                  />
                  <div
                    className={styles.ggrandPalaceH}
                  >{`Facilities & Amenities`}</div>
                </Box>
                <div className={styles.seoctAlFactite}>
                  Select all facilities in your Hotel
                </div>
              </Box>
              <Box className={styles.facilityChipsGrid}>
                <Box className={styles.facilityRow1}>
                  <Box className={styles.button8}>
                    <Box className={styles.frame19}>
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/Image165.svg"
                      />
                      <div className={styles.hotelName}>Wi-fi</div>
                    </Box>
                  </Box>
                  <Box className={styles.button9}>
                    <Box className={styles.button10}>
                      <Box className={styles.frame20}>
                        <img
                          className={styles.imageIcon41}
                          alt=""
                          src="/Image184.svg"
                        />
                        <div className={styles.listAHotel}>Swimming Pool</div>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.groups21}>
                    <Box className={styles.button11}>
                      <Box className={styles.frame21}>
                        <img
                          className={styles.imageIcon8}
                          alt=""
                          src="/Image172.svg"
                        />
                        <div className={styles.hotelName}>Restaurant</div>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.button12}>
                    <Box className={styles.frame22}>
                      <img
                        className={styles.imageIcon28}
                        alt=""
                        src="/Image183.svg"
                      />
                      <div className={styles.bar}>Bar</div>
                    </Box>
                  </Box>
                  <Box className={styles.button13}>
                    <Box className={styles.frame23}>
                      <Box className={styles.groups22}>
                        <img
                          className={styles.imageIcon14}
                          alt=""
                          src="/Image166.svg"
                        />
                        <div className={styles.hotelName}>Gym</div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.facilityRow2}>
                  <Box className={styles.button14}>
                    <Box className={styles.frame24}>
                      <img
                        className={styles.imageIcon28}
                        alt=""
                        src="/Image174.svg"
                      />
                      <div className={styles.hotelName}>Spa</div>
                    </Box>
                  </Box>
                  <Box className={styles.button15}>
                    <Box className={styles.button14}>
                      <Box className={styles.frame25}>
                        <img
                          className={styles.imageIcon28}
                          alt=""
                          src="/Image171.svg"
                        />
                        <div className={styles.hotelName}>Parking</div>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.button17}>
                    <Box className={styles.frame26}>
                      <img
                        className={styles.imageIcon47}
                        alt=""
                        src="/Image91.svg"
                      />
                      <div className={styles.hotelName}>Air Conditioning</div>
                    </Box>
                  </Box>
                  <Box className={styles.button18}>
                    <Box className={styles.frame27}>
                      <div className={styles.hotelName}>+</div>
                      <div className={styles.mor}>More</div>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.button19}>
                <Box className={styles.frame28}>
                  <div className={styles.ggrandPalaceH}>Continue</div>
                  <img
                    className={styles.imageIcon48}
                    alt=""
                    src="/Image93.svg"
                  />
                </Box>
              </Box>
              <Box className={styles.saveProgressHint}>
                <img className={styles.imageIcon32} alt="" src="/Image85.svg" />
                <Box className={styles.youCanSaveYou}>
                  <div className={styles.ggrandPalaceH}>
                    You can save your Progress and continue later
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.groups23}>
          <Box className={styles.frame29}>
            <Box className={styles.groups24}>
              <Box className={styles.groups25}>
                <img className={styles.imageIcon} alt="" src="/Image144.svg" />
                <Box className={styles.image12}>
                  <img
                    className={styles.imageIcon2}
                    alt=""
                    src="/Image86.svg"
                  />
                </Box>
                <img
                  className={styles.imageIcon52}
                  alt=""
                  src="/Image155.svg"
                />
              </Box>
            </Box>
            <Box className={styles.frameRow1}>
              <Box className={styles.groups26}>
                <Box className={styles.groups27}>
                  <Box className={styles.groups28}>
                    <div className={styles.listAHotel2}>List a Hotel</div>
                    <Box className={styles.step2}>
                      <div className={styles.div}>Step 2</div>
                    </Box>
                    <div className={styles.of32}>of 3</div>
                  </Box>
                </Box>
              </Box>
              <img className={styles.imageIcon53} alt="" src="/Image105.svg" />
            </Box>
            <Box className={styles.groups29}>
              <Box className={styles.groups30}>
                <Box className={styles.image13}>
                  <img
                    className={styles.imageIcon54}
                    alt=""
                    src="/Image175.svg"
                  />
                </Box>
                <div className={styles.hotelName}>Property Details</div>
              </Box>
              <img
                className={styles.backgroundIcon4}
                alt=""
                src="/Background18@2x.png"
              />
              <Box className={styles.step2PricingMedia}>
                <Box className={styles.frame30}>
                  <Box className={styles.frame31}>
                    <div className={styles.hotelName}>2</div>
                  </Box>
                </Box>
                <div
                  className={styles.propertyDetails}
                >{`Pricing & Media`}</div>
              </Box>
              <img
                className={styles.backgroundIcon5}
                alt=""
                src="/Background22@2x.png"
              />
              <Box className={styles.groups31}>
                <Box className={styles.button5}>
                  <Box className={styles.frame32}>
                    <div className={styles.div}>3</div>
                  </Box>
                </Box>
                <div className={styles.pricingMedis}>{`Review & Submit`}</div>
              </Box>
            </Box>
            <Box className={styles.groups32}>
              <Box className={styles.groups33}>
                <div
                  className={styles.tellUsAbout}
                >{`Set your pricing & showcase your hotel`}</div>
                <div className={styles.provideAccursto}>
                  Add pricing details and high-guality photos to attract more
                  guests
                </div>
              </Box>
            </Box>
            <Box className={styles.groups34}>
              <Box className={styles.groups35}>
                <Box className={styles.roomHeaderRow}>
                  <img
                    className={styles.imageIcon55}
                    alt=""
                    src="/Image167.svg"
                  />
                  <div
                    className={styles.ggrandPalaceH}
                  >{`Roam Types & Pricing`}</div>
                </Box>
                <div className={styles.seoctAlFactite}>
                  Add all the room types available in your hotel.
                </div>
              </Box>
            </Box>
            <Box className={styles.groups36}>
              <Box className={styles.groups37}>
                <Box className={styles.frame33}>
                  <Box className={styles.roomCardRow0}>
                    <img
                      className={styles.imageIcon56}
                      alt=""
                      src="/Image111@2x.png"
                    />
                    <Box className={styles.roomCardRow02}>
                      <Box className={styles.roomCardRow03}>
                        <Box className={styles.roomCardRow0Column1}>
                          <Box className={styles.roomHeaderRow}>
                            <div className={styles.ggrandPalaceH}>
                              Deluxe Room
                            </div>
                            <Box className={styles.roomHeaderIcons}>
                              <img
                                className={styles.imageIcon57}
                                alt=""
                                src="/Image84.svg"
                              />
                              <img
                                className={styles.imageIcon58}
                                alt=""
                                src="/Image106.svg"
                              />
                            </Box>
                          </Box>
                          <Box className={styles.occupancyBedtypeRow}>
                            <Box className={styles.occupancyGroup}>
                              <div className={styles.starRatingOpt}>
                                Max Occupancy
                              </div>
                              <Box className={styles.button21}>
                                <Box className={styles.frame34}>
                                  <img
                                    className={styles.imageIcon32}
                                    alt=""
                                    src="/Image100.svg"
                                  />
                                  <div className={styles.hotelName}>
                                    2Guests
                                  </div>
                                </Box>
                              </Box>
                            </Box>
                            <Box className={styles.occupancyGroup}>
                              <div className={styles.starRatingOpt}>
                                Bed Type
                              </div>
                              <Box className={styles.text14}>
                                <Box className={styles.frame35}>
                                  <div className={styles.hotelName}>
                                    King Bed
                                  </div>
                                  <Box className={styles.image14}>
                                    <img
                                      className={styles.imageIcon12}
                                      alt=""
                                      src="/Image90.svg"
                                    />
                                  </Box>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.priceRoomsRow}>
                    <Box className={styles.priceGroup}>
                      <Box className={styles.priceGroupRow0}>
                        <div className={styles.div}>Price per Night (N)</div>
                        <Box className={styles.image3}>
                          <img
                            className={styles.imageIcon11}
                            alt=""
                            src="/Image139.svg"
                          />
                        </Box>
                      </Box>
                      <Box className={styles.text15}>
                        <Box className={styles.frame36}>
                          <div className={styles.ggrandPalaceH}>45,000</div>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.availableRoomsGroup}>
                      <div className={styles.availsbieRlocms}>
                        Available Rooms
                      </div>
                      <Box className={styles.text16}>
                        <Box className={styles.frame37}>
                          <div className={styles.hotelName}>e.g 10</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.groups38}>
              <Box className={styles.groups39}>
                <Box className={styles.frame38}>
                  <Box className={styles.roomCard}>
                    <Box className={styles.roomCardRow04}>
                      <img
                        className={styles.imageIcon62}
                        alt=""
                        src="/Image101@2x.png"
                      />
                      <Box className={styles.roomCardRow0Column12}>
                        <Box className={styles.roomHeaderRow2}>
                          <div className={styles.ggrandPalaceH}>
                            Executive Suite
                          </div>
                          <Box className={styles.roomHeaderIcons2}>
                            <img
                              className={styles.imageIcon57}
                              alt=""
                              src="/Image136.svg"
                            />
                            <img
                              className={styles.imageIcon58}
                              alt=""
                              src="/Image106.svg"
                            />
                          </Box>
                        </Box>
                        <Box className={styles.occupancyBedtypeRow2}>
                          <Box className={styles.occupancyGroup2}>
                            <div className={styles.starRatingOpt}>
                              Max Occupancy
                            </div>
                            <Box className={styles.text17}>
                              <Box className={styles.frame39}>
                                <img
                                  className={styles.imageIcon32}
                                  alt=""
                                  src="/Image87.svg"
                                />
                                <div className={styles.hotelName}>2Guests</div>
                              </Box>
                            </Box>
                          </Box>
                          <Box className={styles.bedtypeGroup2}>
                            <div className={styles.starRatingOpt}>Bed Type</div>
                            <Box className={styles.text18}>
                              <Box className={styles.frame40}>
                                <div className={styles.div}>King Bed</div>
                                <img
                                  className={styles.imageIcon12}
                                  alt=""
                                  src="/Image90.svg"
                                />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.priceRoomsRow2}>
                      <Box className={styles.priceGroup2}>
                        <Box className={styles.priceGroupRow0}>
                          <div className={styles.div}>Price per Night (N)</div>
                          <Box className={styles.image16}>
                            <img
                              className={styles.imageIcon27}
                              alt=""
                              src="/Image142.svg"
                            />
                          </Box>
                        </Box>
                        <Box className={styles.text3}>
                          <Box className={styles.frame41}>
                            <div className={styles.ggrandPalaceH}>50,000</div>
                          </Box>
                        </Box>
                      </Box>
                      <Box className={styles.occupancyGroup2}>
                        <div className={styles.availsbieRlocms}>
                          Available Room
                        </div>
                        <Box className={styles.text20}>
                          <Box className={styles.background} />
                          <Box className={styles.image17} />
                          <div className={styles.eg20}>e.g 20</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.button22}>
                    <Box className={styles.frame42}>
                      <img
                        className={styles.imageIcon68}
                        alt=""
                        src="/Image159.svg"
                      />
                      <div className={styles.addAnotherRoom}>
                        Add Another Room Type
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.groups40}>
              <Box className={styles.groups41}>
                <Box className={styles.sectionHeader2}>
                  <img
                    className={styles.imageIcon14}
                    alt=""
                    src="/Image122.svg"
                  />
                  <div className={styles.hotelName}>Additional Pricing</div>
                </Box>
                <Box className={styles.pricingLabelsRow}>
                  <div className={styles.ggrandPalaceH}>
                    Taxes / Services Charges (%)
                  </div>
                  <Box className={styles.discountIoptior}>
                    <div className={styles.hotelName}>Discount (Options)l</div>
                  </Box>
                  <div className={styles.ggrandPalaceH}>
                    Security Deposit (Dptional)
                  </div>
                </Box>
                <Box className={styles.pricingInputsRow}>
                  <Box className={styles.text21}>
                    <Box className={styles.text22}>
                      <Box className={styles.frame43}>
                        <div className={styles.ggrandPalaceH}>e.g 10%</div>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.text23}>
                    <Box className={styles.frame44}>
                      <div className={styles.div15}>e.g 5%</div>
                    </Box>
                  </Box>
                  <Box className={styles.text24}>
                    <Box className={styles.frame45}>
                      <Box className={styles.image18} />
                      <div className={styles.div16}>e.g 10,000</div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.groups42}>
              <Box className={styles.groups43}>
                <Box className={styles.groups44}>
                  <Box className={styles.sectionHeader3}>
                    <img
                      className={styles.imageIcon70}
                      alt=""
                      src="/Image95.svg"
                    />
                    <div className={styles.hotelName}>Avalablity</div>
                  </Box>
                  <Box className={styles.availabilityFieldsRow}>
                    <Box className={styles.minimumStayGroup}>
                      <Box className={styles.text25}>
                        <Box className={styles.frame46}>
                          <div className={styles.ggrandPalaceH}>
                            Select duration
                          </div>
                          <img
                            className={styles.imageIcon71}
                            alt=""
                            src="/Image128.svg"
                          />
                        </Box>
                      </Box>
                      <div className={styles.minimumStayOp}>
                        Minimum Stay (Optinal)
                      </div>
                      <img
                        className={styles.imageIcon72}
                        alt=""
                        src="/Image135.svg"
                      />
                    </Box>
                    <Box className={styles.button23}>
                      <Box className={styles.frame47}>
                        <div className={styles.hotelName}>Fully Booked</div>
                      </Box>
                    </Box>
                    <Box className={styles.button24}>
                      <Box className={styles.frame48}>
                        <div className={styles.hotelName}>Available Now</div>
                      </Box>
                    </Box>
                    <div className={styles.avallabilitySta}>
                      Avalability Status
                    </div>
                  </Box>
                </Box>
                <Box className={styles.groupsRow1}>
                  <img
                    className={styles.imageIcon70}
                    alt=""
                    src="/Image168.svg"
                  />
                  <div className={styles.hotelName}>Media</div>
                  <div className={styles.addPhotosOf}>
                    Add photos of youe hotel, Mnimuim S phohos requlied.
                  </div>
                </Box>
                <Box className={styles.groups45}>
                  <Box className={styles.groups46}>
                    <Box className={styles.groups47}>
                      <img
                        className={styles.groupsIcon}
                        alt=""
                        src="/Groups7@2x.png"
                      />
                    </Box>
                    <img
                      className={styles.groupsIcon2}
                      alt=""
                      src="/Groups5@2x.png"
                    />
                    <Box className={styles.groups47}>
                      <img
                        className={styles.groupsIcon3}
                        alt=""
                        src="/Groups6@2x.png"
                      />
                    </Box>
                    <img
                      className={styles.imageIcon74}
                      alt=""
                      src="/Image103.svg"
                    />
                    <Box className={styles.groups49}>
                      <img
                        className={styles.groupsIcon4}
                        alt=""
                        src="/Groups8@2x.png"
                      />
                    </Box>
                    <Box className={styles.groups50}>
                      <Box className={styles.frame49}>
                        <div className={styles.div}>+</div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups51}>
                  <Box className={styles.groups52}>
                    <Box className={styles.groups53}>
                      <Box className={styles.frame50}>
                        <img
                          className={styles.imageIcon75}
                          alt=""
                          src="/Image163.svg"
                        />
                        <Box className={styles.videoTextGroup}>
                          <div className={styles.addVideoOptio}>
                            Add Video (Optional)
                          </div>
                          <div className={styles.shoetrseYonrHo}>
                            Showcase your Hotel with a short Video
                          </div>
                        </Box>
                        <img
                          className={styles.imageIcon76}
                          alt=""
                          src="/Image98.svg"
                        />
                      </Box>
                    </Box>
                    <Box className={styles.button25}>
                      <Box className={styles.frame51}>
                        <div className={styles.listAHotel}>Continue</div>
                        <img
                          className={styles.imageIcon77}
                          alt=""
                          src="/Image118.svg"
                        />
                      </Box>
                    </Box>
                    <Box className={styles.groupsRow2}>
                      <img
                        className={styles.imageIcon78}
                        alt=""
                        src="/Image188.svg"
                      />
                      <div className={styles.yourProgressIs}>
                        Your progress is saved automatically
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.groups54}>
          <Box className={styles.frame52}>
            <Box className={styles.groups55}>
              <img className={styles.imageIcon} alt="" src="/Image115.svg" />
              <Box className={styles.image19}>
                <img className={styles.imageIcon2} alt="" src="/Image152.svg" />
              </Box>
              <img className={styles.imageIcon52} alt="" src="/Image120.svg" />
            </Box>
            <Box className={styles.frameRow12}>
              <Box className={styles.groups56}>
                <Box className={styles.groups57}>
                  <Box className={styles.groups58}>
                    <Box className={styles.lago4nigeria}>
                      <div className={styles.listAHotel}>List a Hotel</div>
                    </Box>
                    <div className={styles.step3}>Step 3</div>
                    <div className={styles.of33}>of 3</div>
                  </Box>
                </Box>
              </Box>
              <img className={styles.imageIcon82} alt="" src="/Image147.svg" />
            </Box>
            <Box className={styles.frameRow2}>
              <img className={styles.imageIcon83} alt="" src="/Image92.svg" />
              <Box className={styles.background2}>
                <img
                  className={styles.backgroundIcon6}
                  alt=""
                  src="/Background23@2x.png"
                />
              </Box>
              <Box className={styles.image20}>
                <img
                  className={styles.imageIcon84}
                  alt=""
                  src="/Image121.svg"
                />
              </Box>
              <img
                className={styles.backgroundIcon7}
                alt=""
                src="/Background17@2x.png"
              />
              <img className={styles.imageIcon85} alt="" src="/Image102.svg" />
            </Box>
            <Box className={styles.frameRow3}>
              <div className={styles.hotelName}>Property Details</div>
              <div className={styles.hotelName}>{`Pricing & Media`}</div>
              <div className={styles.revieweISubmit}>Review I Submit</div>
            </Box>
            <Box className={styles.frameRow4}>
              <Box className={styles.groups59}>
                <Box className={styles.groups60}>
                  <Box className={styles.groupsColumn0}>
                    <div className={styles.verifyYourAcco}>
                      Review your listing
                    </div>
                    <div className={styles.verificationIa}>
                      Note: Service Status is pending until account is verified.
                      Verification is required to publish your hotel on our
                      platform.
                    </div>
                  </Box>
                  <Box className={styles.frame53}>
                    <Box className={styles.groups61}>
                      <img
                        className={styles.imageIcon86}
                        alt=""
                        src="/Image96@2x.png"
                      />
                      <Box className={styles.verifiedListing}>
                        <div className={styles.verifiedListing2}>
                          Verified listings get
                          <br />
                          more trust and visibility
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.groups62}>
                <Box className={styles.button26}>
                  <Box className={styles.frame54}>
                    <div className={styles.div}>Edit</div>
                  </Box>
                </Box>
                <div className={styles.reviewYourList}>Review Your Listing</div>
                <img
                  className={styles.imageIcon87}
                  alt=""
                  src="/Image170.svg"
                />
                <Box className={styles.groups63}>
                  <Box className={styles.frame55}>
                    <Box className={styles.groups64}>
                      <Box className={styles.hotelPreviewCardRow0}>
                        <Box className={styles.hotelPreviewCardRow02}>
                          <img
                            className={styles.imageIcon88}
                            alt=""
                            src="/Image89@2x.png"
                          />
                          <Box className={styles.hotelPreviewCardRow0Colum}>
                            <div className={styles.grandPalaceHot}>
                              Grand Palace Hotel
                            </div>
                            <Box className={styles.hotelLocationRow}>
                              <img
                                className={styles.imageIcon32}
                                alt=""
                                src="/Image145.svg"
                              />
                              <Box className={styles.lago4nigeria}>
                                <div className={styles.ggrandPalaceH}>
                                  Lagos Nigeria
                                </div>
                              </Box>
                            </Box>
                            <Box className={styles.hotelRatingRow}>
                              <img
                                className={styles.imageIcon90}
                                alt=""
                                src="/Image119.svg"
                              />
                              <img
                                className={styles.imageIcon91}
                                alt=""
                                src="/Image132.svg"
                              />
                              <Box className={styles.image21}>
                                <img
                                  className={styles.imageIcon71}
                                  alt=""
                                  src="/Image133.svg"
                                />
                              </Box>
                              <img
                                className={styles.imageIcon91}
                                alt=""
                                src="/Image129.svg"
                              />
                              <Box className={styles.image22}>
                                <img
                                  className={styles.imageIcon91}
                                  alt=""
                                  src="/Image131.svg"
                                />
                              </Box>
                              <div className={styles.hotelName}>
                                4.8.(128) Reviews)
                              </div>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <img
                        className={styles.backgroundIcon8}
                        alt=""
                        src="/Background16@2x.png"
                      />
                    </Box>
                    <Box className={styles.frameRow13}>
                      <Box className={styles.image23}>
                        <img
                          className={styles.imageIcon24}
                          alt=""
                          src="/Image156.svg"
                        />
                      </Box>
                      <Box className={styles.frameRow1Column1}>
                        <div className={styles.hotelName}>Total Rooms</div>
                        <div className={styles.rooms}>60 Rooms</div>
                      </Box>
                      <Box className={styles.image23}>
                        <img
                          className={styles.imageIcon6}
                          alt=""
                          src="/Image146.svg"
                        />
                      </Box>
                      <Box className={styles.frameRow1Column3}>
                        <div className={styles.div}>Poperty Type</div>
                        <div className={styles.hotel}>Hotel</div>
                      </Box>
                      <img
                        className={styles.backgroundIcon9}
                        alt=""
                        src="/Background19.svg"
                      />
                      <Box className={styles.image23}>
                        <img
                          className={styles.imageIcon97}
                          alt=""
                          src="/Image157.svg"
                        />
                      </Box>
                      <Box className={styles.frameRow1Column6}>
                        <div className={styles.starRatingOpt}>Price</div>
                        <div className={styles.fromN45000nig}>
                          From N45,000/Night
                        </div>
                      </Box>
                    </Box>
                    <img
                      className={styles.backgroundIcon10}
                      alt=""
                      src="/Background14@2x.png"
                    />
                    <Box className={styles.groups65}>
                      <Box className={styles.groups66}>
                        <div className={styles.yearEstabished}>Room Types</div>
                        <Box className={styles.roomTypesRow}>
                          <Box className={styles.deluxeRoomItem}>
                            <img
                              className={styles.imageIcon98}
                              alt=""
                              src="/Image158.svg"
                            />
                            <Box className={styles.deluxeRoomInfo}>
                              <div className={styles.yearEstabished}>
                                Deluxe Room
                              </div>
                              <Box className={styles.deluxeRoomPrice}>
                                <div className={styles.hotelName}>
                                  From N45,000
                                </div>
                                <div className={styles.nghe}>Night</div>
                              </Box>
                            </Box>
                          </Box>
                          <Box className={styles.executiveSuiteItem}>
                            <Box className={styles.image26}>
                              <img
                                className={styles.imageIcon99}
                                alt=""
                                src="/Image185.svg"
                              />
                            </Box>
                            <Box className={styles.executiveSuiteInfo}>
                              <div className={styles.yearEstabished}>
                                Executive Suite
                              </div>
                              <div className={styles.fromN80000ngh}>
                                From N80,000/Nght
                              </div>
                            </Box>
                          </Box>
                          <Box className={styles.button27}>
                            <Box className={styles.frame56}>
                              <div className={styles.hotelName}>more</div>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.background3}>
                      <img
                        className={styles.backgroundIcon11}
                        alt=""
                        src="/Background13@2x.png"
                      />
                    </Box>
                    <Box className={styles.groups67}>
                      <div className={styles.yearEstabished}>Facilities</div>
                      <Box className={styles.facilitiesIconsRow}>
                        <Box className={styles.image27}>
                          <img
                            className={styles.imageIcon100}
                            alt=""
                            src="/Image116.svg"
                          />
                        </Box>
                        <Box className={styles.image28}>
                          <img
                            className={styles.imageIcon101}
                            alt=""
                            src="/Image94.svg"
                          />
                        </Box>
                        <Box className={styles.frame57}>
                          <Box className={styles.frame58}>
                            <div className={styles.div}>PP</div>
                          </Box>
                        </Box>
                        <img
                          className={styles.imageIcon102}
                          alt=""
                          src="/Image97.svg"
                        />
                        <Box className={styles.image29}>
                          <img
                            className={styles.imageIcon103}
                            alt=""
                            src="/Image104.svg"
                          />
                        </Box>
                        <Box className={styles.image30}>
                          <img
                            className={styles.imageIcon14}
                            alt=""
                            src="/Image110.svg"
                          />
                        </Box>
                        <Box className={styles.image31}>
                          <img
                            className={styles.imageIcon105}
                            alt=""
                            src="/Image149.svg"
                          />
                        </Box>
                        <Box className={styles.image32}>
                          <img
                            className={styles.imageIcon97}
                            alt=""
                            src="/Image162.svg"
                          />
                        </Box>
                        <Box className={styles.button28}>
                          <Box className={styles.button29}>
                            <Box className={styles.frame59}>
                              <div className={styles.hotelName}>more</div>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups68}>
                  <Box className={styles.groups69}>
                    <Box className={styles.groups70}>
                      <Box className={styles.frame60}>
                        <img
                          className={styles.imageIcon6}
                          alt=""
                          src="/Image126.svg"
                        />
                        <Box className={styles.frameColumn1}>
                          <div className={styles.yearEstabished}>
                            By submitting. you agree to our Terms of Service and
                            confirm
                          </div>
                          <Box className={styles.frameColumn1Row1}>
                            <div className={styles.hotelName}>
                              that the information provided
                            </div>
                            <div className={styles.hotelName}>is accurate.</div>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.button30}>
                      <Box className={styles.frame61}>
                        <div className={styles.listAHotel}>
                          Submit Hotel Listing
                        </div>
                        <img
                          className={styles.imageIcon24}
                          alt=""
                          src="/Image160.svg"
                        />
                      </Box>
                    </Box>
                    <Box className={styles.groupsRow22}>
                      <Box className={styles.image33}>
                        <img
                          className={styles.imageIcon8}
                          alt=""
                          src="/Image173.svg"
                        />
                      </Box>
                      <div className={styles.yourEstingWill}>
                        Your Listing will be reviewed before going live
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

HotelListings.propTypes = {
  className: PropTypes.string,
};

export default HotelListings;
