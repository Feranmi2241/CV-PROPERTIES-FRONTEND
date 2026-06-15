import {
  Typography,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import styles from "./MainPanelsRow.module.css";

const MainPanelsRow = ({ className = "" }) => {
  return (
    <section className={[styles.mainPanelsRow, className].join(" ")}>
      <section className={styles.container}>
        <Box className={styles.container2}>
          <Box className={styles.containerRow0}>
            <Typography
              className={styles.notificationInbox}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{
                lineHeight: "24px",
                letterSpacing: "-0.4px",
                fontWeight: "700",
              }}
            >
              Notification Inbox
            </Typography>
            <img className={styles.buttonIcon} alt="" src="/Button22.svg" />
            <img className={styles.buttonIcon} alt="" src="/Button23.svg" />
          </Box>
          <img className={styles.lineIcon} alt="" src="/Line9@2x.png" />
        </Box>
        <Box className={styles.container3}>
          <Box className={styles.container4}>
            <Box className={styles.notificationCardItem}>
              <Box className={styles.notificationCardHeaderRow}>
                <Box className={styles.headerLeftGroup}>
                  <input className={styles.checkbox} type="checkbox" />
                  <Box className={styles.tag}>
                    <Box className={styles.tag2}>
                      <Box className={styles.frame}>
                        <div className={styles.urgent}>URGENT</div>
                      </Box>
                    </Box>
                  </Box>
                </Box>
                <div className={styles.mAgo}>2m ago</div>
              </Box>
              <Box className={styles.container5}>
                <Typography
                  className={styles.securityAlertNew}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "20px", fontWeight: "700" }}
                >
                  Security Alert: New Login
                </Typography>
              </Box>
              <Box className={styles.container6}>
                <div className={styles.toSegmentPremiumUsers}>
                  To: Segment_Premium_Users
                </div>
              </Box>
              <Box className={styles.channelTagsRow}>
                <Box className={styles.container7}>
                  <img
                    className={styles.mailIcon}
                    loading="lazy"
                    alt=""
                    src="/mail.svg"
                  />
                  <div className={styles.email}>Email</div>
                </Box>
                <Box className={styles.container8}>
                  <img
                    className={styles.mailIcon}
                    loading="lazy"
                    alt=""
                    src="/smartphone.svg"
                  />
                  <div className={styles.email}>Push</div>
                </Box>
              </Box>
            </Box>
            <Box className={styles.container9}>
              <img className={styles.lineIcon2} alt="" src="/Line9@2x.png" />
              <Box className={styles.notificationHeaderRow}>
                <input className={styles.checkbox2} type="checkbox" />
                <Box className={styles.badgeTimestampRow}>
                  <Box className={styles.tag2}>
                    <Box className={styles.frame}>
                      <div className={styles.urgent}>URGENT</div>
                    </Box>
                  </Box>
                  <div className={styles.mAgo}>2m ago</div>
                </Box>
              </Box>
              <Box className={styles.notificationBody}>
                <Box className={styles.container10}>
                  <Typography
                    className={styles.securityAlertNew}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "20px", fontWeight: "700" }}
                  >
                    Security Alert: New Login
                  </Typography>
                </Box>
                <Box className={styles.container11}>
                  <div className={styles.toSegmentPremiumUsers}>
                    To: Segment_Premium_Users
                  </div>
                </Box>
              </Box>
              <Box className={styles.channelBadgesRow}>
                <Box className={styles.container7}>
                  <img className={styles.mailIcon} alt="" src="/mail.svg" />
                  <div className={styles.email}>Email</div>
                </Box>
                <Box className={styles.container8}>
                  <img
                    className={styles.mailIcon}
                    alt=""
                    src="/smartphone.svg"
                  />
                  <div className={styles.email}>Push</div>
                </Box>
              </Box>
            </Box>
            <Box className={styles.container14}>
              <img className={styles.lineIcon} alt="" src="/Line9@2x.png" />
              <Box className={styles.notificationBody2}>
                <Box className={styles.notificationCardHeaderRow}>
                  <Box className={styles.headerLeftGroup}>
                    <input className={styles.checkbox} type="checkbox" />
                    <Box className={styles.tag}>
                      <Box className={styles.tag2}>
                        <Box className={styles.frame}>
                          <div className={styles.urgent}>URGENT</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <div className={styles.mAgo}>2m ago</div>
                </Box>
                <Box className={styles.container5}>
                  <Typography
                    className={styles.securityAlertNew}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "20px", fontWeight: "700" }}
                  >
                    Security Alert: New Login
                  </Typography>
                </Box>
                <Box className={styles.container6}>
                  <div className={styles.toSegmentPremiumUsers}>
                    To: Segment_Premium_Users
                  </div>
                </Box>
                <Box className={styles.channelTagsRow}>
                  <Box className={styles.container7}>
                    <img className={styles.mailIcon} alt="" src="/mail.svg" />
                    <div className={styles.email}>Email</div>
                  </Box>
                  <Box className={styles.container8}>
                    <img
                      className={styles.mailIcon}
                      alt=""
                      src="/smartphone.svg"
                    />
                    <div className={styles.email}>Push</div>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.container14}>
              <img className={styles.lineIcon} alt="" src="/Line9@2x.png" />
              <Box className={styles.notificationBody2}>
                <Box className={styles.notificationCardHeaderRow}>
                  <Box className={styles.headerLeftGroup}>
                    <input className={styles.checkbox} type="checkbox" />
                    <Box className={styles.tag}>
                      <Box className={styles.tag2}>
                        <Box className={styles.frame}>
                          <div className={styles.urgent}>URGENT</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <div className={styles.mAgo}>2m ago</div>
                </Box>
                <Box className={styles.container5}>
                  <Typography
                    className={styles.securityAlertNew}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "20px", fontWeight: "700" }}
                  >
                    Security Alert: New Login
                  </Typography>
                </Box>
                <Box className={styles.container6}>
                  <div className={styles.toSegmentPremiumUsers}>
                    To: Segment_Premium_Users
                  </div>
                </Box>
                <Box className={styles.channelTagsRow}>
                  <Box className={styles.container7}>
                    <img className={styles.mailIcon} alt="" src="/mail.svg" />
                    <div className={styles.email}>Email</div>
                  </Box>
                  <Box className={styles.container8}>
                    <img
                      className={styles.mailIcon}
                      alt=""
                      src="/smartphone.svg"
                    />
                    <div className={styles.email}>Push</div>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.container14}>
              <img className={styles.lineIcon} alt="" src="/Line9@2x.png" />
              <Box className={styles.notificationBody2}>
                <Box className={styles.notificationCardHeaderRow}>
                  <Box className={styles.headerLeftGroup}>
                    <input className={styles.checkbox} type="checkbox" />
                    <Box className={styles.tag}>
                      <Box className={styles.tag2}>
                        <Box className={styles.frame}>
                          <div className={styles.urgent}>URGENT</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <div className={styles.mAgo}>2m ago</div>
                </Box>
                <Box className={styles.container5}>
                  <Typography
                    className={styles.securityAlertNew}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "20px", fontWeight: "700" }}
                  >
                    Security Alert: New Login
                  </Typography>
                </Box>
                <Box className={styles.container6}>
                  <div className={styles.toSegmentPremiumUsers}>
                    To: Segment_Premium_Users
                  </div>
                </Box>
                <Box className={styles.channelTagsRow}>
                  <Box className={styles.container7}>
                    <img className={styles.mailIcon} alt="" src="/mail.svg" />
                    <div className={styles.email}>Email</div>
                  </Box>
                  <Box className={styles.container8}>
                    <img
                      className={styles.mailIcon}
                      alt=""
                      src="/smartphone.svg"
                    />
                    <div className={styles.email}>Push</div>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.container14}>
              <img className={styles.lineIcon} alt="" src="/Line9@2x.png" />
              <Box className={styles.notificationBody2}>
                <Box className={styles.notificationCardHeaderRow}>
                  <Box className={styles.headerLeftGroup}>
                    <img
                      className={styles.checkboxIcon}
                      alt=""
                      src="/Checkbox.svg"
                    />
                    <Box className={styles.tag}>
                      <Box className={styles.tag2}>
                        <Box className={styles.frame}>
                          <div className={styles.urgent}>URGENT</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <div className={styles.mAgo}>2m ago</div>
                </Box>
                <Box className={styles.container5}>
                  <Typography
                    className={styles.securityAlertNew}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "20px", fontWeight: "700" }}
                  >
                    Security Alert: New Login
                  </Typography>
                </Box>
                <Box className={styles.container6}>
                  <div className={styles.toSegmentPremiumUsers}>
                    To: Segment_Premium_Users
                  </div>
                </Box>
                <Box className={styles.channelTagsRow}>
                  <Box className={styles.container7}>
                    <img className={styles.mailIcon} alt="" src="/mail.svg" />
                    <div className={styles.email}>Email</div>
                  </Box>
                  <Box className={styles.container8}>
                    <img
                      className={styles.mailIcon}
                      alt=""
                      src="/smartphone.svg"
                    />
                    <div className={styles.email}>Push</div>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.container14}>
              <img className={styles.lineIcon} alt="" src="/Line9@2x.png" />
              <Box className={styles.notificationBody2}>
                <Box className={styles.notificationCardHeaderRow}>
                  <Box className={styles.headerLeftGroup}>
                    <img
                      className={styles.checkboxIcon}
                      alt=""
                      src="/Checkbox.svg"
                    />
                    <Box className={styles.tag}>
                      <Box className={styles.tag2}>
                        <Box className={styles.frame}>
                          <div className={styles.urgent}>URGENT</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <div className={styles.mAgo}>2m ago</div>
                </Box>
                <Box className={styles.container5}>
                  <Typography
                    className={styles.securityAlertNew}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "20px", fontWeight: "700" }}
                  >
                    Security Alert: New Login
                  </Typography>
                </Box>
                <Box className={styles.container6}>
                  <div className={styles.toSegmentPremiumUsers}>
                    To: Segment_Premium_Users
                  </div>
                </Box>
                <Box className={styles.channelTagsRow}>
                  <Box className={styles.container7}>
                    <img className={styles.mailIcon} alt="" src="/mail.svg" />
                    <div className={styles.email}>Email</div>
                  </Box>
                  <Box className={styles.container8}>
                    <img
                      className={styles.mailIcon}
                      alt=""
                      src="/smartphone.svg"
                    />
                    <div className={styles.email}>Push</div>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className={styles.container14}>
              <img className={styles.lineIcon} alt="" src="/Line9@2x.png" />
              <Box className={styles.notificationBody2}>
                <Box className={styles.notificationCardHeaderRow}>
                  <Box className={styles.headerLeftGroup}>
                    <img
                      className={styles.checkboxIcon}
                      alt=""
                      src="/Checkbox.svg"
                    />
                    <Box className={styles.tag}>
                      <Box className={styles.tag2}>
                        <Box className={styles.frame}>
                          <div className={styles.urgent}>URGENT</div>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <div className={styles.mAgo}>2m ago</div>
                </Box>
                <Box className={styles.container5}>
                  <Typography
                    className={styles.securityAlertNew}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "20px", fontWeight: "700" }}
                  >
                    Security Alert: New Login
                  </Typography>
                </Box>
                <Box className={styles.container6}>
                  <div className={styles.toSegmentPremiumUsers}>
                    To: Segment_Premium_Users
                  </div>
                </Box>
                <Box className={styles.channelTagsRow}>
                  <Box className={styles.container7}>
                    <img className={styles.mailIcon} alt="" src="/mail.svg" />
                    <div className={styles.email}>Email</div>
                  </Box>
                  <Box className={styles.container8}>
                    <img
                      className={styles.mailIcon}
                      alt=""
                      src="/smartphone.svg"
                    />
                    <div className={styles.email}>Push</div>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
      <Box className={styles.container44}>
        <Box className={styles.container45}>
          <Box className={styles.titleActionsRow}>
            <Typography
              className={styles.deliveryReportNt9082}
              variant="inherit"
              variantMapping={{ inherit: "h3" }}
              sx={{ fontWeight: "700", lineHeight: "28px" }}
            >
              Delivery Report #NT-9082
            </Typography>
            <Box className={styles.actionButtons}>
              <button className={styles.button}>
                <div className={styles.editMessage}>Edit Message</div>
              </button>
              <button className={styles.button2}>
                <div className={styles.sendNow}>Send Now</div>
              </button>
            </Box>
          </Box>
          <Box className={styles.container46}>
            <Box className={styles.button3}>
              <div className={styles.channelPreviews}>Channel Previews</div>
            </Box>
            <Box className={styles.button4}>
              <Box className={styles.button5}>
                <div className={styles.deliveryMetrics}>Delivery Metrics</div>
              </Box>
            </Box>
            <Box className={styles.button6}>
              <div className={styles.channelPreviews}>{`Schedule & A/B`}</div>
            </Box>
          </Box>
          <img className={styles.lineIcon9} alt="" src="/Line11@2x.png" />
        </Box>
        <Box className={styles.container47}>
          <Box className={styles.container48}>
            <section className={styles.container49}>
              <Box className={styles.container50}>
                <Box className={styles.containerRow02}>
                  <div className={styles.emailPreview}>Email Preview</div>
                  <Box className={styles.tag16}>
                    <button className={styles.frame9}>
                      <div className={styles.html}>HTML</div>
                    </button>
                  </Box>
                  <Box className={styles.tag16}>
                    <button className={styles.frame10}>
                      <div className={styles.mobile}>Mobile</div>
                    </button>
                  </Box>
                </Box>
                <img className={styles.lineIcon} alt="" src="/Line4@2x.png" />
              </Box>
              <Box className={styles.container51}>
                <Box className={styles.container52}>
                  <Box className={styles.container53}>
                    <div className={styles.subject}>Subject:</div>
                    <Box className={styles.yourSubscriptionIsAboutTo}>
                      <Typography
                        className={styles.yourSubscriptionIs}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "20px", fontWeight: "700" }}
                      >{`Your subscription is about to expire, {{first_name}}!`}</Typography>
                    </Box>
                    <img
                      className={styles.lineIcon}
                      alt=""
                      src="/Line5@2x.png"
                    />
                  </Box>
                </Box>
                <div className={styles.hiFirstName}>{`Hi {{first_name}},`}</div>
                <Box className={styles.weNoticedYourAnnualSubscri}>
                  <div className={styles.weNoticedYourContainer}>
                    <Typography
                      variant="inherit"
                      variantMapping={{ inherit: "span" }}
                      sx={{ lineHeight: "26px" }}
                    >{`We noticed your annual subscription is ending on `}</Typography>
                    <Typography
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "26px" }}
                    >{`{{expiry_date}}`}</Typography>
                    <Typography
                      variant="inherit"
                      variantMapping={{ inherit: "span" }}
                      sx={{ lineHeight: "26px" }}
                    >
                      . Renew now to keep access to all premium features.
                    </Typography>
                  </div>
                </Box>
                <Box className={styles.container54}>
                  <Typography
                    className={styles.heroImagePlaceholder}
                    variantMapping={{ inherit: "img" }}
                    sx={{ fontFamily: "Inter", fontSize: "12px" }}
                  >
                    Hero Image Placeholder
                  </Typography>
                </Box>
              </Box>
            </section>
            <section className={styles.containerRow1}>
              <Box className={styles.container55}>
                <Box className={styles.container56}>
                  <div className={styles.pushNotification}>
                    Push Notification
                  </div>
                  <img className={styles.lineIcon} alt="" src="/Line3@2x.png" />
                </Box>
                <Box className={styles.containerRow12}>
                  <Box className={styles.rectangle} />
                  <Box className={styles.containerRow1Column1}>
                    <Typography
                      className={styles.notifyhub}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "20px", fontWeight: "700" }}
                    >
                      NotifyHub
                    </Typography>
                    <div className={styles.dontMissOut}>
                      Don't miss out! Your subscription ends soon.
                    </div>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.container57}>
                <Box className={styles.personalization}>
                  <Typography
                    className={styles.toSegmentPremiumUsers}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "16px", fontWeight: "700" }}
                  >
                    Personalization
                  </Typography>
                </Box>
                <FormControl
                  className={styles.container58}
                  variant="standard"
                  sx={{
                    borderColor: "#f1f5f9",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                    width: "83.65384615384616%",
                    height: "33px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#2f9e5b",
                      fontSize: 10,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "9px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="12px"
                        height="12px"
                        src="/plus.svg"
                        style={{ marginRight: "9px" }}
                      />
                    )}
                  >
                    <MenuItem>{`{{first_name}}`}</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <FormControl
                  className={styles.container58}
                  variant="standard"
                  sx={{
                    borderColor: "#f1f5f9",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                    width: "83.65384615384616%",
                    height: "33px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#2f9e5b",
                      fontSize: 10,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "9px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="12px"
                        height="12px"
                        src="/plus.svg"
                        style={{ marginRight: "9px" }}
                      />
                    )}
                  >
                    <MenuItem>{`{{expiry_date}}`}</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <FormControl
                  className={styles.container58}
                  variant="standard"
                  sx={{
                    borderColor: "#f1f5f9",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "6px",
                    width: "83.65384615384616%",
                    height: "33px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "33px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#2f9e5b",
                      fontSize: 10,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "9px",
                    },
                  }}
                >
                  <InputLabel color="secondary" />
                  <Select
                    color="secondary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="12px"
                        height="12px"
                        src="/plus.svg"
                        style={{ marginRight: "9px" }}
                      />
                    )}
                  >
                    <MenuItem>{`{{plan_name}}`}</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </Box>
            </section>
            <Box className={styles.containerRow2}>
              <Box className={styles.container61}>
                <Box className={styles.containerRow03}>
                  <Typography
                    className={styles.securityAlertNew}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "20px", fontWeight: "700" }}
                  >
                    A/B Testing
                  </Typography>
                  <img className={styles.switchIcon} alt="" src="/Switch.svg" />
                </Box>
                <div className={styles.testSubjectLines}>
                  Test subject lines with 10% of audience before full blast.
                </div>
              </Box>
              <Box className={styles.container62}>
                <Box className={styles.containerRow04}>
                  <Typography
                    className={styles.throttling}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{ lineHeight: "20px", fontWeight: "700" }}
                  >
                    Throttling
                  </Typography>
                  <button className={styles.tag18}>
                    <Box className={styles.frame11}>
                      <div className={styles.min}>5,000/min</div>
                    </Box>
                  </button>
                </Box>
                <div className={styles.controlDeliverySpeed}>
                  Control delivery speed to prevent server overload.
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <section className={styles.rightSidebar}>
        <Box className={styles.container63}>
          <Box className={styles.container64}>
            <Typography
              className={styles.realTimeActivity}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{
                lineHeight: "24px",
                letterSpacing: "-0.4px",
                fontWeight: "700",
              }}
            >
              Real-time Activity
            </Typography>
            <img className={styles.lineIcon} alt="" src="/Line9@2x.png" />
          </Box>
          <Box className={styles.activityItem}>
            <Box className={styles.rectangle2}>
              <Box className={styles.rectangle3} />
            </Box>
            <Box className={styles.activityTextGroup}>
              <div className={styles.campaignWelcomeSeriesStar}>
                Campaign "Welcome_Series" started
              </div>
              <div className={styles.justNow}>Just now • 1,240 recipients</div>
            </Box>
          </Box>
          <Box className={styles.activityItem}>
            <Box className={styles.rectangle2}>
              <Box className={styles.rectangle3} />
            </Box>
            <Box className={styles.activityTextGroup}>
              <div className={styles.campaignWelcomeSeriesStar}>
                Campaign "Welcome_Series" started
              </div>
              <div className={styles.justNow}>Just now • 1,240 recipients</div>
            </Box>
          </Box>
          <Box className={styles.activityItem}>
            <Box className={styles.rectangle2}>
              <Box className={styles.rectangle3} />
            </Box>
            <Box className={styles.activityTextGroup}>
              <div className={styles.campaignWelcomeSeriesStar}>
                Campaign "Welcome_Series" started
              </div>
              <div className={styles.justNow}>Just now • 1,240 recipients</div>
            </Box>
          </Box>
          <Box className={styles.activityItem}>
            <Box className={styles.rectangle2}>
              <Box className={styles.rectangle3} />
            </Box>
            <Box className={styles.activityTextGroup}>
              <div className={styles.campaignWelcomeSeriesStar}>
                Campaign "Welcome_Series" started
              </div>
              <div className={styles.justNow}>Just now • 1,240 recipients</div>
            </Box>
          </Box>
        </Box>
        <Box className={styles.container65}>
          <Box className={styles.container66}>
            <Box className={styles.container67}>
              <Box className={styles.containerRow05}>
                <img
                  className={styles.checkboxIcon}
                  loading="lazy"
                  alt=""
                  src="/circle-alert.svg"
                />
                <Typography
                  className={styles.escalationPanel}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "24px",
                    letterSpacing: "-0.4px",
                    fontWeight: "700",
                  }}
                >
                  Escalation Panel
                </Typography>
              </Box>
              <img className={styles.lineIcon} alt="" src="/Line8@2x.png" />
            </Box>
          </Box>
          <textarea
            className={styles.container68}
            placeholder="Rule: SMS Backup"
            rows={4}
            cols={14}
          />
          <Button
            className={styles.button7}
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#0f172a",
              fontSize: "12",
              background: "#fff",
              borderRadius: "16px",
              "&:hover": { background: "#fff" },
              width: 272,
              height: 40,
            }}
          >
            Manual Escalate (12 pending)
          </Button>
        </Box>
        <Box className={styles.metricsMiniCardsRow}>
          <Box className={styles.container69}>
            <Typography
              className={styles.openRate}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "15px", fontWeight: "700" }}
            >
              Open Rate
            </Typography>
            <Box className={styles.div}>
              <Typography
                className={styles.h3}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", lineHeight: "28px" }}
              >
                24.8%
              </Typography>
            </Box>
            <img
              className={styles.containerIcon}
              alt=""
              src="/Container9@2x.png"
            />
          </Box>
          <Box className={styles.container70}>
            <Typography
              className={styles.openRate}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{ lineHeight: "15px", fontWeight: "700" }}
            >
              CTR
            </Typography>
            <Box className={styles.div2}>
              <Typography
                className={styles.h32}
                variant="inherit"
                variantMapping={{ inherit: "h3" }}
                sx={{ fontWeight: "700", lineHeight: "28px" }}
              >
                3.1%
              </Typography>
            </Box>
            <img
              className={styles.containerIcon2}
              alt=""
              src="/Container10@2x.png"
            />
          </Box>
        </Box>
      </section>
    </section>
  );
};

MainPanelsRow.propTypes = {
  className: PropTypes.string,
};

export default MainPanelsRow;
