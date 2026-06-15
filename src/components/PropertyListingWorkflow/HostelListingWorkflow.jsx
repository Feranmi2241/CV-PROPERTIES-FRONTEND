import { Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./HostelListingWorkflow.module.css";

const HostelListingWorkflow = ({ className = "" }) => {
  return (
    <Box className={[styles.hostelListingWorkflow, className].join(" ")}>
      <Box className={styles.root}>
        <Box className={styles.frame}>
          <Box className={styles.frame2}>
            <Box className={styles.groups}>
              <Box className={styles.groups2}>
                <Box className={styles.groupsRow0}>
                  <div className={styles.availableUnits}>Available Units</div>
                  <Box className={styles.image}>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/Image57.svg"
                    />
                  </Box>
                </Box>
                <Box className={styles.button}>
                  <Box className={styles.button2}>
                    <Box className={styles.frame3}>
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/Image5.svg"
                      />
                      <div className={styles.availableUnits}>e.g 10</div>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.button3}>
                  <Box className={styles.frame4}>
                    <div className={styles.continue}>Continue</div>
                    <img
                      className={styles.imageIcon3}
                      alt=""
                      src="/Image39.svg"
                    />
                  </Box>
                </Box>
                <Box className={styles.groupsRow3}>
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/Image56.svg"
                  />
                  <div className={styles.youCanSive}>
                    You can save your progress and continue later
                  </div>
                </Box>
              </Box>
              <Box className={styles.button4}>
                <Box className={styles.frame5}>
                  <img
                    className={styles.imageIcon5}
                    alt=""
                    src="/Image67.svg"
                  />
                  <div className={styles.div}>e.g 25</div>
                </Box>
              </Box>
              <img className={styles.imageIcon6} alt="" src="/Image82.svg" />
              <div className={styles.numberOfRooms}>Number of Rooms</div>
              <Box className={styles.groups3}>
                <Box className={styles.groupsRow02}>
                  <div className={styles.furnishingLevel}>Furnishing Level</div>
                  <img
                    className={styles.imageIcon7}
                    alt=""
                    src="/Image78.svg"
                  />
                </Box>
                <Box className={styles.text}>
                  <Box className={styles.frame6}>
                    <img
                      className={styles.imageIcon8}
                      alt=""
                      src="/Image26.svg"
                    />
                    <Box className={styles.selectSption}>
                      <div className={styles.availableUnits}>Select Option</div>
                    </Box>
                    <img
                      className={styles.imageIcon9}
                      alt=""
                      src="/Image68.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={styles.groups4}>
                <Box className={styles.groupsRow03}>
                  <div className={styles.availableUnits}>Bathroom Type</div>
                  <Box className={styles.image2}>
                    <img
                      className={styles.imageIcon10}
                      alt=""
                      src="/Image58.svg"
                    />
                  </Box>
                </Box>
                <Box className={styles.text2}>
                  <Box className={styles.frame7}>
                    <img
                      className={styles.imageIcon11}
                      alt=""
                      src="/Image74.svg"
                    />
                    <Box className={styles.seestOption}>
                      <div className={styles.availableUnits}>Select Option</div>
                    </Box>
                    <img
                      className={styles.imageIcon9}
                      alt=""
                      src="/Image72.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={styles.button5}>
                <Box className={styles.frame8}>
                  <div className={styles.availableUnits}>Mixed</div>
                </Box>
              </Box>
              <Box className={styles.button6}>
                <Box className={styles.frame9}>
                  <div className={styles.availableUnits}>Female</div>
                </Box>
              </Box>
              <Box className={styles.button7}>
                <Box className={styles.frame10}>
                  <div className={styles.availableUnits}>Male</div>
                </Box>
              </Box>
              <Box className={styles.groups5}>
                <Box className={styles.groupsRow04}>
                  <div className={styles.availableUnits}>Room Type</div>
                  <img
                    className={styles.imageIcon13}
                    alt=""
                    src="/Image66.svg"
                  />
                </Box>
                <Box className={styles.text3}>
                  <Box className={styles.frame11}>
                    <img
                      className={styles.imageIcon8}
                      alt=""
                      src="/Image33.svg"
                    />
                    <Box className={styles.selectRomType}>
                      <div className={styles.availableUnits}>
                        Select room type
                      </div>
                    </Box>
                    <img
                      className={styles.imageIcon9}
                      alt=""
                      src="/Image53.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={styles.button8}>
                <Box className={styles.frame12}>
                  <img
                    className={styles.imageIcon5}
                    alt=""
                    src="/Image77.svg"
                  />
                  <div className={styles.availableUnits}>e.g 120</div>
                </Box>
              </Box>
              <img className={styles.imageIcon17} alt="" src="/Image73.svg" />
              <div className={styles.genderPrefeence}>Gender Preference</div>
              <img className={styles.imageIcon18} alt="" src="/Image64.svg" />
              <div className={styles.capacityMaxPo}>Capacity (Max People)</div>
              <img
                className={styles.backgroundIcon}
                alt=""
                src="/Background3@2x.png"
              />
              <div className={styles.hostelDetails}>Hostel Details</div>
              <img className={styles.imageIcon19} alt="" src="/Image43.svg" />
              <Box className={styles.groups6}>
                <div className={styles.yearEstaiblishe}>Year Established</div>
                <Box className={styles.text4}>
                  <Box className={styles.frame13}>
                    <div className={styles.div2}>e.g.2020</div>
                    <img
                      className={styles.imageIcon20}
                      alt=""
                      src="/Image21.svg"
                    />
                  </Box>
                </Box>
              </Box>
              <Box className={styles.frame14}>
                <Box className={styles.background} />
              </Box>
              <Box className={styles.groups7}>
                <Box className={styles.descriptionHeaderRow}>
                  <Box className={styles.labelIconGroup}>
                    <div className={styles.availableUnits}>
                      Full Description
                    </div>
                    <Box className={styles.image3}>
                      <img
                        className={styles.imageIcon7}
                        alt=""
                        src="/Image61.svg"
                      />
                    </Box>
                  </Box>
                  <div className={styles.div3}>0/1000</div>
                </Box>
                <Box className={styles.descriptionInputRow}>
                  <Box className={styles.image4}>
                    <img
                      className={styles.imageIcon22}
                      alt=""
                      src="/Image2.svg"
                    />
                  </Box>
                  <div className={styles.descrineYourHo}>
                    Describe your hostel, facilities, environment rules and
                    <br />
                    what makes it a great place to stay
                  </div>
                </Box>
              </Box>
              <Box className={styles.groups8}>
                <Box className={styles.groupsRow05}>
                  <div className={styles.availableUnits}>Short Description</div>
                  <Box className={styles.image5}>
                    <img
                      className={styles.imageIcon23}
                      alt=""
                      src="/Image60.svg"
                    />
                  </Box>
                  <div className={styles.div4}>0/120</div>
                </Box>
                <Box className={styles.text5}>
                  <Box className={styles.frame15}>
                    <Box className={styles.image6}>
                      <img
                        className={styles.imageIcon5}
                        alt=""
                        src="/Image71.svg"
                      />
                    </Box>
                    <div className={styles.furnishingLevel}>
                      A short summary about your hostel
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.groups9}>
                <Box className={styles.locationInputGroup}>
                  <Box className={styles.locationLabelRow}>
                    <div className={styles.availableUnits}>Location</div>
                    <img
                      className={styles.imageIcon25}
                      alt=""
                      src="/Image80.svg"
                    />
                  </Box>
                  <Box className={styles.text3}>
                    <Box className={styles.frame16}>
                      <img
                        className={styles.imageIcon26}
                        alt=""
                        src="/Image27.svg"
                      />
                      <div className={styles.availableUnits}>
                        Enter address, city or state
                      </div>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.stateDropdownGroup}>
                  <Box className={styles.stateLabelRow}>
                    <div className={styles.availableUnits}>State</div>
                    <img
                      className={styles.imageIcon}
                      alt=""
                      src="/Image8.svg"
                    />
                  </Box>
                  <Box className={styles.text7}>
                    <Box className={styles.frame17}>
                      <Box className={styles.selectRomType}>
                        <div className={styles.availableUnits}>
                          Select State
                        </div>
                      </Box>
                      <img
                        className={styles.imageIcon20}
                        alt=""
                        src="/Image22.svg"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.text8}>
                <Box className={styles.frame18}>
                  <img
                    className={styles.imageIcon29}
                    alt=""
                    src="/Image63.svg"
                  />
                  <div className={styles.furnishingLevel}>
                    e.g Greenfield Student Lodge
                  </div>
                </Box>
              </Box>
              <img className={styles.imageIcon30} alt="" src="/Image9.svg" />
              <div className={styles.hosteName}>Hostel Name</div>
              <img
                className={styles.backgroundIcon2}
                alt=""
                src="/Background5@2x.png"
              />
              <div className={styles.basicInformatio}>Basic Information</div>
              <img className={styles.imageIcon31} alt="" src="/Image47.svg" />
              <img
                className={styles.imageIcon32}
                alt=""
                src="/Image76@2x.png"
              />
              <div className={styles.provideAccurate}>
                Provide accurate details to attract the right tenants
              </div>
              <div className={styles.tellUsAbout}>
                Tell us about your hostel
              </div>
              <div className={styles.reviewSubmut}>{`Review & Submit`}</div>
              <div className={styles.pricangMecia}>{`Pricing & listings`}</div>
              <div className={styles.propertyDetails}>Property Details</div>
              <Box className={styles.button9}>
                <Box className={styles.frame19}>
                  <div className={styles.edit}>3</div>
                </Box>
              </Box>
              <img
                className={styles.backgroundIcon3}
                alt=""
                src="/Background7@2x.png"
              />
              <Box className={styles.button10}>
                <Box className={styles.frame20}>
                  <div className={styles.div6}>2</div>
                </Box>
              </Box>
              <img
                className={styles.backgroundIcon4}
                alt=""
                src="/Background12@2x.png"
              />
              <Box className={styles.button11}>
                <Box className={styles.frame21}>
                  <div className={styles.edit}>1</div>
                </Box>
              </Box>
              <div className={styles.step1Of}>Step 1 of 3</div>
              <div className={styles.listAHostel}>List a Hostel</div>
              <img className={styles.imageIcon33} alt="" src="/Image16.svg" />
              <img className={styles.imageIcon34} alt="" src="/Image41.svg" />
              <img className={styles.imageIcon35} alt="" src="/Image51.svg" />
              <img className={styles.imageIcon36} alt="" src="/Image31.svg" />
              <div className={styles.div8}>9:41</div>
            </Box>
          </Box>
        </Box>
        <Box className={styles.groups10}>
          <Box className={styles.frame22}>
            <Box className={styles.groups11}>
              <Box className={styles.div9}>
                <div className={styles.submitHostelLi}>9:41</div>
              </Box>
              <img className={styles.imageIcon37} alt="" src="/Image42.svg" />
              <Box className={styles.image7}>
                <img className={styles.imageIcon38} alt="" src="/Image12.svg" />
              </Box>
              <img className={styles.imageIcon39} alt="" src="/Image40.svg" />
            </Box>
            <Box className={styles.groups12}>
              <Box className={styles.groups13}>
                <Box className={styles.image8}>
                  <img
                    className={styles.imageIcon40}
                    alt=""
                    src="/Image17.svg"
                  />
                </Box>
                <Box className={styles.listAHostel2}>
                  <div className={styles.submitHostelLi}>List a Hostel</div>
                </Box>
                <div className={styles.step2}>Step 2</div>
                <div className={styles.of3}>of 3</div>
              </Box>
            </Box>
            <Box className={styles.stepIndicatorRow}>
              <img className={styles.imageIcon41} alt="" src="/Image10.svg" />
              <Box className={styles.background2}>
                <img
                  className={styles.backgroundIcon5}
                  alt=""
                  src="/Background11@2x.png"
                />
              </Box>
              <Box className={styles.frame23}>
                <Box className={styles.frame24}>
                  <div className={styles.edit}>2</div>
                </Box>
              </Box>
              <Box className={styles.background3}>
                <img
                  className={styles.backgroundIcon6}
                  alt=""
                  src="/Background9@2x.png"
                />
              </Box>
              <Box className={styles.button12}>
                <Box className={styles.frame25}>
                  <div className={styles.edit}>3</div>
                </Box>
              </Box>
            </Box>
            <Box className={styles.stepLabelsRow}>
              <Box className={styles.propertyDetaits}>
                <div className={styles.availableUnits}>Property Details</div>
              </Box>
              <div className={styles.pricingMedia}>Pricing Media</div>
              <div className={styles.availableUnits}>{`Review & Submit`}</div>
            </Box>
            <Box className={styles.pageTitleBlock}>
              <div
                className={styles.setYourPrice}
              >{`Set your price & showcase your hostel`}</div>
              <div className={styles.addPricingDeta}>
                Add pricing detais and high-guality photos to attract more
                tenants
              </div>
            </Box>
            <Box className={styles.pricingSection}>
              <Box className={styles.minStayAddChargesInputs}>
                <Box className={styles.text9}>
                  <Box className={styles.frame26}>
                    <div className={styles.seiectDuration}>Select duration</div>
                    <Box className={styles.image9}>
                      <img
                        className={styles.imageIcon42}
                        alt=""
                        src="/Image59.svg"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.additionalChargesInputGroup}>
                  <Box className={styles.text10}>
                    <Box className={styles.frame27}>
                      <div className={styles.furnishingLevel}>
                        e.g electricity, maintenance e.t.c
                      </div>
                    </Box>
                  </Box>
                  <Box className={styles.div13}>
                    <div className={styles.availableUnits}>0/120</div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.minStayAddChargesLabels}>
                <Box className={styles.minStayLabelGroup}>
                  <div className={styles.furnishingLevel}>Minimum Stay</div>
                  <img
                    className={styles.imageIcon43}
                    alt=""
                    src="/Image70.svg"
                  />
                </Box>
                <div className={styles.additionalCharg}>
                  Additional Charges (Optional)
                </div>
              </Box>
              <Box className={styles.priceDepositInputs}>
                <Box className={styles.text11}>
                  <Box className={styles.frame28}>
                    <div className={styles.furnishingLevel}>e.g 150,000</div>
                  </Box>
                </Box>
                <Box className={styles.text9}>
                  <Box className={styles.frame29}>
                    <div className={styles.furnishingLevel}>e.g 50,000</div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.pricingTypeButtons}>
                <Box className={styles.button13}>
                  <Box className={styles.frame30}>
                    <div className={styles.perBod}>Per Bed</div>
                  </Box>
                </Box>
                <Box className={styles.button14}>
                  <Box className={styles.button15}>
                    <Box className={styles.frame31}>
                      <div className={styles.perRoom}>Per Room</div>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.button16}>
                  <Box className={styles.frame32}>
                    <div className={styles.porMonth}>Per Month</div>
                  </Box>
                </Box>
                <Box className={styles.button17}>
                  <Box className={styles.frame33}>
                    <div className={styles.availableUnits}>Per Year</div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.pricingTypeLabelRow}>
                <div className={styles.availableUnits}>Pricing Type</div>
                <img className={styles.imageIcon44} alt="" src="/Image69.svg" />
              </Box>
              <img
                className={styles.backgroundIcon7}
                alt=""
                src="/Background@2x.png"
              />
              <Box className={styles.pricingSectionHeader}>
                <img className={styles.imageIcon45} alt="" src="/Image6.svg" />
                <div className={styles.pricingInformat}>
                  Pricing Information
                </div>
              </Box>
              <Box className={styles.priceDepositLabels}>
                <div className={styles.availableUnits}>Price(N)</div>
                <div className={styles.availableUnits}>
                  Security Deposit (N)
                </div>
              </Box>
            </Box>
            <Box className={styles.groups14}>
              <Box className={styles.groups15}>
                <Box className={styles.sectionHeaderRow}>
                  <img
                    className={styles.imageIcon46}
                    alt=""
                    src="/Image83.svg"
                  />
                  <Box className={styles.availability}>
                    <div className={styles.availableUnits}>Availability</div>
                  </Box>
                  <img
                    className={styles.backgroundIcon8}
                    alt=""
                    src="/Background1@2x.png"
                  />
                </Box>
                <Box className={styles.filterLabelsRow}>
                  <div className={styles.availableUnits}>Available From</div>
                  <Box className={styles.vacancyStatusLabelGroup}>
                    <Box className={styles.div17}>
                      <div className={styles.availableUnits}>+</div>
                    </Box>
                    <div className={styles.vacancyStatus}>Vacancy Status</div>
                    <img
                      className={styles.imageIcon25}
                      alt=""
                      src="/Image54.svg"
                    />
                  </Box>
                </Box>
                <Box className={styles.filterButtonsRow}>
                  <Box className={styles.text13}>
                    <Box className={styles.text14}>
                      <Box className={styles.frame34}>
                        <div className={styles.availableUnits}>Select date</div>
                        <img
                          className={styles.imageIcon48}
                          alt=""
                          src="/Image55.svg"
                        />
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.button18}>
                    <Box className={styles.frame35}>
                      <div className={styles.availableUnits}>Available Now</div>
                    </Box>
                  </Box>
                  <Box className={styles.button15}>
                    <Box className={styles.frame36}>
                      <div className={styles.availableUnits}>
                        Fully Occupied
                      </div>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.groups16}>
              <Box className={styles.groups17}>
                <Box className={styles.sectionHeaderRow2}>
                  <img
                    className={styles.imageIcon46}
                    alt=""
                    src="/Image13.svg"
                  />
                  <Box className={styles.media}>
                    <div className={styles.availableUnits}>Media</div>
                  </Box>
                  <img
                    className={styles.backgroundIcon8}
                    alt=""
                    src="/Background4@2x.png"
                  />
                </Box>
                <div className={styles.addPhotosOf}>
                  Add photos of your hostel Minimum 5 photos required
                </div>
                <Box className={styles.photoThumbnailsRow}>
                  <img
                    className={styles.groupsIcon}
                    alt=""
                    src="/Groups1@2x.png"
                  />
                  <Box className={styles.groups18}>
                    <img
                      className={styles.groupsIcon2}
                      alt=""
                      src="/Groups4@2x.png"
                    />
                  </Box>
                  <img
                    className={styles.groupsIcon3}
                    alt=""
                    src="/Groups2@2x.png"
                  />
                  <Box className={styles.groups18}>
                    <img
                      className={styles.groupsIcon4}
                      alt=""
                      src="/Groups@2x.png"
                    />
                  </Box>
                  <img
                    className={styles.groupsIcon5}
                    alt=""
                    src="/Groups3@2x.png"
                  />
                  <Box className={styles.groups20}>
                    <Box className={styles.groups21}>
                      <Box className={styles.frame37}>
                        <img
                          className={styles.imageIcon2}
                          alt=""
                          src="/Image30.svg"
                        />
                        <Box className={styles.addMore}>
                          <div className={styles.edit}>Add More</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.groups22}>
              <Box className={styles.groups23}>
                <Box className={styles.frame38}>
                  <Box className={styles.videoContentGroup}>
                    <img
                      className={styles.imageIcon51}
                      alt=""
                      src="/Image49.svg"
                    />
                    <Box className={styles.videoTextGroup}>
                      <div className={styles.yearEstaiblishe}>
                        Add Video (Optional)
                      </div>
                      <div className={styles.showcaseYourHo}>
                        Showcase your hostel with a short video
                      </div>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon52}
                    alt=""
                    src="/Image52.svg"
                  />
                </Box>
              </Box>
            </Box>
            <Box className={styles.groups24}>
              <Box className={styles.groups25}>
                <Box className={styles.groups26}>
                  <Box className={styles.groups27}>
                    <Box className={styles.frame39}>
                      <img
                        className={styles.imageIcon51}
                        alt=""
                        src="/Image50.svg"
                      />
                      <Box className={styles.idDocTextGroup}>
                        <div className={styles.yearEstaiblishe}>Tips</div>
                        <div className={styles.showcaseYourHo}>
                          Listings with more photos and videos get up to 3x more
                          inquiries.
                        </div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.button20}>
                  <Box className={styles.frame40}>
                    <div className={styles.continue2}>Continue</div>
                    <img
                      className={styles.imageIcon3}
                      alt=""
                      src="/Image45.svg"
                    />
                  </Box>
                </Box>
                <Box className={styles.groupsRow2}>
                  <img
                    className={styles.imageIcon55}
                    alt=""
                    src="/Image29.svg"
                  />
                  <Box className={styles.yourProgressIs}>
                    <div className={styles.furnishingLevel}>
                      Your progress is saved automaticaily
                    </div>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles.groups28}>
          <Box className={styles.frame41}>
            <Box className={styles.groups29}>
              <Box className={styles.div9}>
                <div className={styles.submitHostelLi}>9:41</div>
              </Box>
              <img className={styles.imageIcon56} alt="" src="/Image79.svg" />
              <Box className={styles.image10}>
                <img className={styles.imageIcon38} alt="" src="/Image38.svg" />
              </Box>
              <img className={styles.imageIcon39} alt="" src="/Image11.svg" />
            </Box>
            <Box className={styles.groups30}>
              <Box className={styles.groups31}>
                <Box className={styles.groups32}>
                  <div className={styles.listAHostel4}>List a Hostel</div>
                  <div className={styles.step3}>Step 3</div>
                  <div className={styles.of32}>of 3</div>
                </Box>
              </Box>
            </Box>
            <img className={styles.imageIcon59} alt="" src="/Image81.svg" />
            <Box className={styles.stepperSection}>
              <Box className={styles.stepperSectionRow0}>
                <Box className={styles.image11}>
                  <img
                    className={styles.imageIcon41}
                    alt=""
                    src="/Image15.svg"
                  />
                </Box>
                <Box className={styles.background4}>
                  <img
                    className={styles.backgroundIcon5}
                    alt=""
                    src="/Background10@2x.png"
                  />
                </Box>
                <Box className={styles.image11}>
                  <img
                    className={styles.imageIcon41}
                    alt=""
                    src="/Image14.svg"
                  />
                </Box>
                <Box className={styles.background5}>
                  <img
                    className={styles.backgroundIcon5}
                    alt=""
                    src="/Background8@2x.png"
                  />
                </Box>
                <Box className={styles.button21}>
                  <Box className={styles.frame42}>
                    <div className={styles.availableUnits}>3</div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.stepperSectionRow1}>
                <div className={styles.availableUnits}>Property Details</div>
                <Box className={styles.image10}>
                  <div
                    className={styles.availableUnits}
                  >{`Pricing & Media`}</div>
                </Box>
                <div className={styles.reviewSubmit2}>{`Review & Submit`}</div>
              </Box>
            </Box>
            <Box className={styles.mainContent}>
              <Box className={styles.groups33}>
                <Box className={styles.groupsColumn0}>
                  <div className={styles.verifyYourAcco}>
                    {`Verify your account &`}
                    <br />
                    {`review your listing`}
                  </div>
                  <div className={styles.verifcationIsR}>
                    Verifcation is requirod to pubish your hostel
                    <br />
                    on our platform,
                  </div>
                </Box>
                <Box className={styles.groups34}>
                  <Box className={styles.frame43}>
                    <img
                      className={styles.imageIcon62}
                      alt=""
                      src="/Image28.svg"
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
              <Box className={styles.groups35}>
                <Box className={styles.frame44}>
                  <Box className={styles.sectionHeaderRow3}>
                    <img
                      className={styles.imageIcon46}
                      alt=""
                      src="/Image3.svg"
                    />
                    <div className={styles.availableUnits}>
                      Verification (Required]
                    </div>
                  </Box>
                  <div className={styles.uploadYour}>
                    Upload your ID and selfie to verify your identity
                  </div>
                  <Box className={styles.uploadCardsRow}>
                    <Box className={styles.groups36}>
                      <Box className={styles.frame45}>
                        <Box className={styles.groups37}>
                          <Box className={styles.idDocContent}>
                            <Box className={styles.image13}>
                              <img
                                className={styles.imageIcon64}
                                alt=""
                                src="/Image75.svg"
                              />
                            </Box>
                            <Box className={styles.idDocTextGroup}>
                              <div className={styles.yearEstaiblishe}>
                                ID Document
                              </div>
                              <div className={styles.lohadIdCadDri}>
                                Upload ID card, Drivers License or passport
                              </div>
                            </Box>
                          </Box>
                          <img
                            className={styles.imageIcon5}
                            alt=""
                            src="/Image4.svg"
                          />
                        </Box>
                      </Box>
                    </Box>
                    <Box className={styles.groups38}>
                      <Box className={styles.button22}>
                        <Box className={styles.frame46}>
                          <Box className={styles.selfieContent}>
                            <img
                              className={styles.imageIcon66}
                              alt=""
                              src="/Image37.svg"
                            />
                            <Box className={styles.selfieTextGroup}>
                              <div className={styles.setYourPrice}>Selfie</div>
                              <div className={styles.takeAChigr}>
                                Take a Clear Selfie
                              </div>
                            </Box>
                          </Box>
                          <img
                            className={styles.imageIcon67}
                            alt=""
                            src="/Image65.svg"
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.groups39}>
                <Box className={styles.groupsRow06}>
                  <Box className={styles.image14}>
                    <img
                      className={styles.imageIcon68}
                      alt=""
                      src="/Image19.svg"
                    />
                  </Box>
                  <Box className={styles.reviewYourList}>
                    <div className={styles.furnishingLevel}>
                      Review Your Listing
                    </div>
                  </Box>
                  <Box className={styles.button23}>
                    <Box className={styles.frame47}>
                      <div className={styles.edit}>Edit</div>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups40}>
                  <Box className={styles.groups41}>
                    <Box className={styles.frame48}>
                      <Box className={styles.groups42}>
                        <Box className={styles.groupsRow07}>
                          <img
                            className={styles.imageIcon69}
                            alt=""
                            src="/Image20@2x.png"
                          />
                          <Box className={styles.groupsRow0Column1}>
                            <div className={styles.setYourPrice}>
                              Greenfield Student Lodge
                            </div>
                            <Box className={styles.groupsRow0Column1Row1}>
                              <img
                                className={styles.imageIcon4}
                                alt=""
                                src="/Image62.svg"
                              />
                              <div className={styles.edit}>Lagos, Nigena</div>
                            </Box>
                          </Box>
                        </Box>
                        <img
                          className={styles.backgroundIcon12}
                          alt=""
                          src="/Background2@2x.png"
                        />
                      </Box>
                      <Box className={styles.frameRow1}>
                        <img
                          className={styles.imageIcon71}
                          alt=""
                          src="/Image48.svg"
                        />
                        <Box className={styles.frameRow1Column1}>
                          <div className={styles.cispucity}>Capacity</div>
                          <div className={styles.people}>120 People</div>
                        </Box>
                        <Box className={styles.image11}>
                          <Box className={styles.background7} />
                        </Box>
                        <img
                          className={styles.imageIcon71}
                          alt=""
                          src="/Image23.svg"
                        />
                        <Box className={styles.frameRow1Column4}>
                          <div className={styles.cispucity}>Room Type</div>
                          <div className={styles.people}>Shared Room</div>
                        </Box>
                        <img
                          className={styles.imageIcon73}
                          alt=""
                          src="/Image34.svg"
                        />
                        <Box className={styles.frameRow1Column6}>
                          <div className={styles.cispucity}>Price</div>
                          <div className={styles.people}>
                            N150.000/Per Month
                          </div>
                        </Box>
                      </Box>
                      <Box className={styles.frameRow2}>
                        <img
                          className={styles.backgroundIcon13}
                          alt=""
                          src="/Background6@2x.png"
                        />
                        <Box className={styles.groups43}>
                          <div className={styles.description}>Description</div>
                          <div className={styles.aComfortabinAn}>
                            A comfortable and secure student hostel with modern
                            facilities,
                            <br />
                            study areas, 24/7 power supply and a conducive
                            environment
                            <br />
                            for academic excellence
                          </div>
                          <Box className={styles.facilitiesSection}>
                            <div className={styles.setYourPrice}>
                              Facilities
                            </div>
                            <Box className={styles.facilitiesIconsRow}>
                              <Box className={styles.image15}>
                                <img
                                  className={styles.imageIcon74}
                                  alt=""
                                  src="/Image25.svg"
                                />
                              </Box>
                              <Box className={styles.image16}>
                                <img
                                  className={styles.imageIcon75}
                                  alt=""
                                  src="/Image7.svg"
                                />
                              </Box>
                              <Box className={styles.image17}>
                                <img
                                  className={styles.imageIcon76}
                                  alt=""
                                  src="/Image18.svg"
                                />
                              </Box>
                              <Box className={styles.image18}>
                                <img
                                  className={styles.imageIcon77}
                                  alt=""
                                  src="/Image32.svg"
                                />
                              </Box>
                              <Box className={styles.image19}>
                                <img
                                  className={styles.imageIcon26}
                                  alt=""
                                  src="/Image46.svg"
                                />
                              </Box>
                              <Box className={styles.image20}>
                                <img
                                  className={styles.imageIcon73}
                                  alt=""
                                  src="/Image1.svg"
                                />
                              </Box>
                              <Box className={styles.text13}>
                                <img
                                  className={styles.buttonIcon}
                                  alt=""
                                  src="/Button.svg"
                                />
                              </Box>
                              <Box className={styles.image21}>
                                <img
                                  className={styles.imageIcon80}
                                  alt=""
                                  src="/Image36.svg"
                                />
                              </Box>
                              <Box className={styles.button25}>
                                <Box className={styles.frame49}>
                                  <div className={styles.edit}>+6 more</div>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups44}>
                  <Box className={styles.groups45}>
                    <Box className={styles.frame50}>
                      <Box className={styles.image22}>
                        <img
                          className={styles.imageIcon81}
                          alt=""
                          src="/Image44.svg"
                        />
                      </Box>
                      <div className={styles.bySubmittingY}>
                        By submitting, you agree to our Terns of Service and
                        <br />
                        confirm that the information provided is accurate.
                      </div>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.button26}>
                  <Box className={styles.frame51}>
                    <div className={styles.submitHostelLi}>
                      Submit Hostel Listing
                    </div>
                    <Box className={styles.image23}>
                      <img
                        className={styles.imageIcon3}
                        alt=""
                        src="/Image35.svg"
                      />
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groupsRow4}>
                  <Box className={styles.image6}>
                    <img
                      className={styles.imageIcon4}
                      alt=""
                      src="/Image24.svg"
                    />
                  </Box>
                  <div className={styles.yourListingWil}>
                    Your listing will be reviewed before going lve
                  </div>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

HostelListingWorkflow.propTypes = {
  className: PropTypes.string,
};

export default HostelListingWorkflow;
