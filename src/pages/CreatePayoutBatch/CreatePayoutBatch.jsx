import {
  Typography,
  Box,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Button,
} from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Container6 from "../../components/CreatePayoutBatch/Container6/Container6";
import Container4 from "../../components/CreatePayoutBatch/Container4/Container4";
import AuditEvent from "../../components/CreatePayoutBatch/AuditEvent/AuditEvent";
import styles from "./CreatePayoutBatch.module.css";

const CreatePayoutBatch = () => {
  return (
    <MainLayout adminName="Admin User" adminRole="Super Administrator" hideTopBar>
    <Box className={styles.createPayoutBatch}>
      <main className={styles.mainContentArea}>
        <Container6 />
        <section className={styles.bodyAndFooter}>
          <Box className={styles.mainBody}>
            <section className={styles.leftPanel}>
              <Box className={styles.pageHeaderGroup}>
                <Typography
                  className={styles.payoutBatch}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-32)",
                    letterSpacing: "var(--ls--0_6)",
                    fontWeight: "700",
                  }}
                >
                  Payout Batch
                </Typography>
                <div className={styles.reviewAndConsolidate}>
                  Review and consolidate approved withdrawal requests into a
                  provider payout file.
                </div>
              </Box>
              <Box className={styles.container}>
                <Box className={styles.container2}>
                  <Box className={styles.container3}>
                    <Box className={styles.containerRow0}>
                      <Typography
                        className={styles.batchFilters}
                        variant="inherit"
                        variantMapping={{ inherit: "h3" }}
                        sx={{
                          fontWeight: "700",
                          lineHeight: "var(--lh-20)",
                          letterSpacing: "-0.35px",
                        }}
                      >
                        Batch Filters
                      </Typography>
                    </Box>
                    <img
                      className={styles.lineIcon}
                      alt=""
                      src="/Line21@2x.png"
                    />
                  </Box>
                </Box>
                <Typography
                  className={styles.userType}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-15)", fontWeight: "700" }}
                >
                  User Type
                </Typography>
                <FormControl
                  className={styles.dropdown}
                  variant="standard"
                  sx={{
                    borderTopWidth: "0px",
                    borderRightWidth: "0px",
                    borderBottomWidth: "0px",
                    borderLeftWidth: "0px",
                    borderRadius: "0px 0px 0px 0px",
                    width: "88.57142857142857%",
                    height: "50px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "50px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "50px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "50px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "50px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#19191f",
                      fontSize: 14,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "11.5px",
                    },
                  }}
                >
                  <InputLabel color="primary" />
                  <Select
                    color="primary"
                    disableUnderline
                    displayEmpty
                    IconComponent={() => (
                      <img
                        width="16px"
                        height="16px"
                        src="/chevron-down.svg"
                        style={{ marginRight: "11.5px" }}
                      />
                    )}
                  >
                    <MenuItem>All Hosts</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
                <Typography
                  className={styles.userType}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ lineHeight: "var(--lh-15)", fontWeight: "700" }}
                >
                  Amount Range
                </Typography>
                <FormControl
                  className={styles.dropdown2}
                  variant="standard"
                  sx={{
                    borderColor: "#e0e0e5",
                    borderStyle: "SOLID",
                    borderTopWidth: "1px",
                    borderRightWidth: "1px",
                    borderBottomWidth: "1px",
                    borderLeftWidth: "1px",
                    backgroundColor: "#fff",
                    borderRadius: "14px",
                    width: "88.57142857142857%",
                    height: "36px",
                    m: 0,
                    p: 0,
                    "& .MuiInputBase-root": {
                      m: 0,
                      p: 0,
                      minHeight: "36px",
                      justifyContent: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInputLabel-root": {
                      m: 0,
                      p: 0,
                      minHeight: "36px",
                      display: "inline-flex",
                    },
                    "& .MuiMenuItem-root": {
                      m: 0,
                      p: 0,
                      height: "36px",
                      display: "inline-flex",
                    },
                    "& .MuiSelect-select": {
                      m: 0,
                      p: 0,
                      height: "36px",
                      alignItems: "center",
                      display: "inline-flex",
                    },
                    "& .MuiInput-input": { m: 0, p: 0 },
                    "& .MuiInputBase-input": {
                      color: "#19191f",
                      fontSize: 14,
                      fontWeight: "Regular",
                      fontFamily: "Inter",
                      textAlign: "left",
                      p: "0 !important",
                      marginLeft: "11.5px",
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
                        width="16px"
                        height="16px"
                        src="/chevron-down.svg"
                        style={{ marginRight: "11.5px" }}
                      />
                    )}
                  >
                    <MenuItem>Any Amount</MenuItem>
                  </Select>
                  <FormHelperText />
                </FormControl>
              </Box>
              <Box className={styles.batchSummarySection}>
                <Typography
                  className={styles.batchSummary}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{
                    lineHeight: "var(--lh-15)",
                    letterSpacing: "var(--ls-1)",
                    fontWeight: "700",
                  }}
                >
                  Batch Summary
                </Typography>
                <Box className={styles.container4}>
                  <Typography
                    className={styles.selectedRequests}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      lineHeight: "var(--lh-15)",
                      letterSpacing: "var(--ls-0_5)",
                      fontWeight: "700",
                    }}
                  >
                    Selected Requests
                  </Typography>
                  <Typography
                    className={styles.items}
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{
                      fontWeight: "700",
                      fontSize: "var(--fs-18)",
                      lineHeight: "var(--lh-28)",
                    }}
                  >
                    5 items
                  </Typography>
                </Box>
                <Box className={styles.container4}>
                  <Typography
                    className={styles.selectedRequests}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      lineHeight: "var(--lh-15)",
                      letterSpacing: "var(--ls-0_5)",
                      fontWeight: "700",
                    }}
                  >
                    Total Gross Amount
                  </Typography>
                  <Typography
                    className={styles.b}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      fontSize: "var(--fs-18)",
                      lineHeight: "var(--lh-28)",
                      fontWeight: "700",
                    }}
                  >
                    ₦2,357,500
                  </Typography>
                </Box>
                <Box className={styles.container4}>
                  <Typography
                    className={styles.selectedRequests}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      lineHeight: "var(--lh-15)",
                      letterSpacing: "var(--ls-0_5)",
                      fontWeight: "700",
                    }}
                  >
                    Platform Fees (Consolidated)
                  </Typography>
                  <Typography
                    className={styles.b}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      fontSize: "var(--fs-18)",
                      lineHeight: "var(--lh-28)",
                      fontWeight: "700",
                    }}
                  >
                    ₦35,362.5
                  </Typography>
                </Box>
                <Box className={styles.container7}>
                  <Typography
                    className={styles.selectedRequests}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      lineHeight: "var(--lh-15)",
                      letterSpacing: "var(--ls-0_5)",
                      fontWeight: "700",
                    }}
                  >
                    Expected Net Payout
                  </Typography>
                  <Typography
                    className={styles.b3}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      fontSize: "var(--fs-18)",
                      lineHeight: "var(--lh-28)",
                      fontWeight: "700",
                    }}
                  >
                    ₦2,322,137.5
                  </Typography>
                </Box>
              </Box>
              <Box className={styles.container8}>
                <Box className={styles.systemHealthHeaderRow}>
                  <Box className={styles.container9}>
                    <Typography
                      className={styles.systemHealth}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{
                        lineHeight: "var(--lh-15)",
                        letterSpacing: "-0.5px",
                        fontWeight: "700",
                      }}
                    >
                      System Health
                    </Typography>
                  </Box>
                  <Box className={styles.nodeStatusGroup}>
                    <Box className={styles.container10} />
                    <Typography
                      className={styles.nodeReady}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-15)", fontWeight: "700" }}
                    >
                      Node Ready
                    </Typography>
                  </Box>
                </Box>
                <Box className={styles.balanceRow}>
                  <Box className={styles.container11}>
                    <div className={styles.paystackBalance}>
                      Paystack Balance
                    </div>
                  </Box>
                  <div className={styles.m}>₦12.4M</div>
                </Box>
                <Box className={styles.container12} />
                <Box className={styles.container13}>
                  <div className={styles.liquidityIsSufficient}>
                    Liquidity is sufficient for the current batch net total.
                  </div>
                </Box>
              </Box>
            </section>
            <section className={styles.middleAndBottomPanels}>
              <Box className={styles.container14}>
                <Box className={styles.container15}>
                  <Box className={styles.containerRow02}>
                    <Box className={styles.selectAll}>
                      <input className={styles.selectAllCheckbox} type="checkbox" defaultChecked />
                      <span className={styles.selectAllLabel}>Select All</span>
                    </Box>
                    <Box className={styles.line}>
                      <img
                        className={styles.lineIcon2}
                        alt=""
                        src="/Line1.svg"
                      />
                    </Box>
                    <Button
                      className={styles.button}
                      disableElevation
                      variant="contained"
                      sx={{
                        textTransform: "none",
                        color: "#19191f",
                        fontSize: "7",
                        background: "#fff",
                        border: "#f4f4f6 solid 1px",
                        borderRadius: "16px",
                        "&:hover": { background: "#fff" },
                        width: 108.7,
                        height: 32,
                      }}
                    >
                      Bulk Priority
                    </Button>
                    <Box className={styles.containerRow0Column4}>
                      <Box className={styles.button2}>
                        <Typography
                          className={styles.manualValidation}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                        >
                          Manual Validation
                        </Typography>
                      </Box>
                      <Box className={styles.tag}>
                        <Box className={styles.frame}>
                          <Typography
                            className={styles.manualValidation}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{
                              lineHeight: "var(--lh-16)",
                              fontWeight: "700",
                            }}
                          >
                            LIVE SYNC ACTIVE
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <img className={styles.lineIcon} alt="" />
                </Box>
                <Box className={styles.container16}>
                  <Box className={styles.container17}>
                    <Box className={styles.containerRow03}>
                      <Box className={styles.containerRow04}>
                        <Typography
                          className={styles.requestId}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                        >
                          Request ID
                        </Typography>
                        <Typography
                          className={styles.userIdentity}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                        >
                          User / Identity
                        </Typography>
                        <Typography
                          className={styles.bankAccount}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                        >{`Bank & Account`}</Typography>
                        <Box className={styles.gross}>
                          <Typography
                            className={styles.flags}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{
                              lineHeight: "var(--lh-20)",
                              fontWeight: "700",
                            }}
                          >
                            Gross (₦)
                          </Typography>
                        </Box>
                        <Box className={styles.fee}>
                          <Typography
                            className={styles.flags}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{
                              lineHeight: "var(--lh-20)",
                              fontWeight: "700",
                            }}
                          >
                            Fee (₦)
                          </Typography>
                        </Box>
                        <Box className={styles.net}>
                          <Typography
                            className={styles.flags}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{
                              lineHeight: "var(--lh-20)",
                              fontWeight: "700",
                            }}
                          >
                            Net (₦)
                          </Typography>
                        </Box>
                        <Typography
                          className={styles.flags}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                        >
                          Flags
                        </Typography>
                      </Box>
                    </Box>
                    <img
                      className={styles.lineIcon}
                      alt=""
                      src="/Line19@2x.png"
                    />
                  </Box>
                  <Box className={styles.container18}>
                    <Box className={styles.payoutRowContent}>
                      <Box className={styles.requestIdGroup}>
                        <input className={styles.checkbox} type="checkbox" />
                        <Typography
                          className={styles.wd9921}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                        >
                          WD-9921
                        </Typography>
                      </Box>
                      <Box className={styles.userIdentityGroup}>
                        <img className={styles.imageIcon2} alt="" />
                        <Box className={styles.userNameRole}>
                          <Box className={styles.container19}>
                            <Typography
                              className={styles.chidiOkafor}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{
                                lineHeight: "var(--lh-13)",
                                fontWeight: "700",
                              }}
                            >
                              Chidi Okafor
                            </Typography>
                          </Box>
                          <div className={styles.hostGold}>Host (Gold)</div>
                        </Box>
                      </Box>
                      <Box className={styles.bankAccountGroup}>
                        <Box className={styles.bankNameRow}>
                          <Typography
                            className={styles.accessBank}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{
                              lineHeight: "var(--lh-11)",
                              fontWeight: "700",
                            }}
                          >
                            Access Bank
                          </Typography>
                          <img className={styles.circleCheckIcon} alt="" />
                        </Box>
                        <div className={styles.div}>072****791</div>
                        <Box className={styles.container20}>
                          <Typography
                            className={styles.chidiOkaforEnt}
                            variant="inherit"
                            variantMapping={{ inherit: "i" }}
                            sx={{ lineHeight: "var(--lh-20)" }}
                          >
                            CHIDI OKAFOR ENT.
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.textbox}>
                        <Box className={styles.textbox2}>
                          <div className={styles.div2}>442,500</div>
                        </Box>
                      </Box>
                      <Box className={styles.div3}>
                        <div className={styles.div4}>6,637.5</div>
                      </Box>
                      <Box className={styles.div5}>
                        <Typography
                          className={styles.hostFiveVentures}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                        >
                          435,862.5
                        </Typography>
                      </Box>
                      <Box className={styles.actionIconsGroup}>
                        <img
                          className={styles.containerIcon}
                          alt=""
                          src="/Container12.svg"
                        />
                        <img className={styles.imageIcon} alt="" />
                      </Box>
                    </Box>
                    <img
                      className={styles.lineIcon}
                      alt=""
                      src="/Line19@2x.png"
                    />
                  </Box>
                  <Container4
                    line="/Line19@2x.png"
                    wD9922="WD-9922"
                    aminaYusuf="Amina Yusuf"
                    hostSilver="Host (Silver)"
                    bankDetailsFlex="1.2568"
                    zenithBank="Zenith Bank"
                    prop="101****442"
                    aMINAYUSUF="AMINA YUSUF"
                    prop1="120,000"
                    prop2="1,800"
                    prop3="118,200"
                  />
                  <Box className={styles.container21}>
                    <Box className={styles.payoutRowContent2}>
                      <Box className={styles.requestIdGroup2}>
                        <input className={styles.checkbox} type="checkbox" />
                        <Typography
                          className={styles.wd9923}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                        >
                          WD-9923
                        </Typography>
                      </Box>
                      <Box className={styles.userIdentityGroup2}>
                        <img className={styles.imageIcon2} alt="" />
                        <Box className={styles.userNameRole}>
                          <Box className={styles.container22}>
                            <Typography
                              className={styles.chidiOkafor}
                              variant="inherit"
                              variantMapping={{ inherit: "b" }}
                              sx={{
                                lineHeight: "var(--lh-13)",
                                fontWeight: "700",
                              }}
                            >
                              Segun Adebayo
                            </Typography>
                          </Box>
                          <div className={styles.hostGold}>Host (Diamond)</div>
                        </Box>
                      </Box>
                      <Box className={styles.bankAccountGroup2}>
                        <Box className={styles.bankNameRow2}>
                          <Typography
                            className={styles.accessBank}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{
                              lineHeight: "var(--lh-11)",
                              fontWeight: "700",
                            }}
                          >
                            GT Bank
                          </Typography>
                          <img className={styles.circleCheckIcon} alt="" />
                        </Box>
                        <div className={styles.div}>012****882</div>
                        <Box className={styles.container20}>
                          <Typography
                            className={styles.chidiOkaforEnt}
                            variant="inherit"
                            variantMapping={{ inherit: "i" }}
                            sx={{ lineHeight: "var(--lh-20)" }}
                          >
                            SEGUN ADEBAYO
                          </Typography>
                        </Box>
                      </Box>
                      <Box className={styles.textbox}>
                        <Box className={styles.textbox4}>
                          <div className={styles.div2}>1,500,000</div>
                        </Box>
                      </Box>
                      <Box className={styles.div8}>
                        <div className={styles.div4}>22,500</div>
                      </Box>
                      <Box className={styles.div5}>
                        <Typography
                          className={styles.hostFiveVentures}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                        >
                          1,477,500
                        </Typography>
                      </Box>
                      <Box className={styles.info}>
                        <img className={styles.imageIcon} alt="" />
                      </Box>
                    </Box>
                    <img
                      className={styles.lineIcon}
                      alt=""
                      src="/Line19@2x.png"
                    />
                  </Box>
                  <Container4
                    containerTop="339px"
                    containerPadding="15.9px 189px 17px 16px"
                    line="/Line19@2x.png"
                    requestIdGroupPadding="0px 15px 3.8px 0px"
                    wD9922="WD-9924"
                    userIdentityGroupFlex="1.2362"
                    containerWidth="43px"
                    containerPadding1="0px 1px 1px 0px"
                    aminaYusuf="Host 4"
                    hostSilver="Vendor"
                    bankDetailsFlex="1.2362"
                    zenithBank="Kuda MFB"
                    prop="202****111"
                    aMINAYUSUF="HOST FOUR"
                    textboxPadding="0px 17px 0px 0px"
                    textboxAlignItems="flex-start"
                    textboxPadding1="4.5px 10px 3.5px 36px"
                    prop1="85,000"
                    boxPadding="20px 22px 20px 0px"
                    prop2="1,275"
                    prop3="83,725"
                  />
                  <Box className={styles.tableRow5}>
                    <Box className={styles.row5SelectId}>
                      <input className={styles.checkbox} type="checkbox" />
                      <Typography
                        className={styles.wd9923}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                      >
                        WD-9925
                      </Typography>
                    </Box>
                    <Box className={styles.row5UserIdentity}>
                      <img className={styles.imageIcon2} alt="" />
                      <Box className={styles.row5UserInfo}>
                        <Box className={styles.container24}>
                          <Typography
                            className={styles.chidiOkafor}
                            variant="inherit"
                            variantMapping={{ inherit: "b" }}
                            sx={{
                              lineHeight: "var(--lh-13)",
                              fontWeight: "700",
                            }}
                          >
                            Host 5
                          </Typography>
                        </Box>
                        <div className={styles.hostGold}>Host (Bronze)</div>
                      </Box>
                    </Box>
                    <Box className={styles.row5BankAccount}>
                      <Box className={styles.bankNameRow}>
                        <Typography
                          className={styles.accessBank}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                          sx={{ lineHeight: "var(--lh-11)", fontWeight: "700" }}
                        >
                          First Bank
                        </Typography>
                        <img className={styles.circleCheckIcon} alt="" />
                      </Box>
                      <div className={styles.div}>305****990</div>
                      <Box className={styles.container25}>
                        <Typography
                          className={styles.hostFiveVentures}
                          variant="inherit"
                          variantMapping={{ inherit: "i" }}
                          sx={{ lineHeight: "var(--lh-20)" }}
                        >
                          HOST FIVE VENTURES
                        </Typography>
                      </Box>
                    </Box>
                    <Box className={styles.textbox5}>
                      <Box className={styles.textbox6}>
                        <div className={styles.div2}>210,000</div>
                      </Box>
                    </Box>
                    <Box className={styles.div13}>
                      <div className={styles.div4}>3,150</div>
                    </Box>
                    <Box className={styles.div5}>
                      <Typography
                        className={styles.hostFiveVentures}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                      >
                        206,850
                      </Typography>
                    </Box>
                    <Box className={styles.info}>
                      <img className={styles.imageIcon} alt="" />
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.container26}>
                  <img className={styles.lineIcon} alt="" />
                  <Box className={styles.containerRow1}>
                    <Box className={styles.tipUseBulkPriorityToTag}>
                      <Typography
                        className={styles.tipUseBulk}
                        variant="inherit"
                        variantMapping={{ inherit: "i" }}
                        sx={{ lineHeight: "var(--lh-17)" }}
                      >
                        Tip: Use bulk priority to tag high-value vendors for
                        first-node disbursement.
                      </Typography>
                    </Box>
                    <Box className={styles.button3}>
                      <Typography
                        className={styles.hostFiveVentures}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                      >
                        Load 15 More Requests
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.auditNotesRow}>
                <Box className={styles.container27}>
                  <Box className={styles.auditHeaderRow}>
                    <Box className={styles.history}>
                      <img className={styles.historyIcon} alt="" src="/history.svg" />
                    </Box>
                    <Typography
                      className={styles.batchAuditTrail}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      Batch Audit Trail
                    </Typography>
                  </Box>
                  <AuditEvent
                    adminInitializedBatch="Admin Initialized Batch"
                    today1015AMJamesonBurke="Today, 10:15 AM • Jameson Burke"
                  />
                  <AuditEvent
                    auditEvent1Padding="0px 2px"
                    adminInitializedBatch="Auto-Validation: 1 Warning"
                    today1015AMJamesonBurkPadding="0px 2px"
                    today1015AMJamesonBurke="Today, 10:16 AM • Risk Engine v4"
                  />
                </Box>
                <Box className={styles.container28}>
                  <Box className={styles.containerRow05}>
                    <Box className={styles.fileText}>
                      <img
                        className={styles.circleCheckIcon}
                        loading="lazy"
                        alt=""
                        src="/file-text.svg"
                      />
                    </Box>
                    <Typography
                      className={styles.internalBatchNotes}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-20)", fontWeight: "700" }}
                    >
                      Internal Batch Notes
                    </Typography>
                  </Box>
                  <Box className={styles.textarea}>
                    <div className={styles.addOperationalNotes}>
                      Add operational notes visible to other approvers...
                    </div>
                  </Box>
                </Box>
              </Box>
            </section>
            <section className={styles.rightPanel}>
              <Box className={styles.container29}>
                <Box className={styles.panelHeader}>
                  <Typography
                    className={styles.batchCommand}
                    variant="inherit"
                    variantMapping={{ inherit: "h2" }}
                    sx={{ fontWeight: "700", lineHeight: "var(--lh-28)" }}
                  >
                    Batch Command
                  </Typography>
                  <Box className={styles.tag2}>
                    <Box className={styles.frame2}>
                      <Typography
                        className={styles.manualValidation}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                      >
                        ID: BATCH-061524
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.finalConfigurationAndDisbur}>
                  <div className={styles.finalConfigurationAnd}>
                    Final configuration and disbursement triggers.
                  </div>
                </Box>
                <Box className={styles.container30}>
                  <Box className={styles.payoutScheduleRow}>
                    <div className={styles.manualValidation}>
                      Payout Schedule
                    </div>
                    <Box className={styles.payoutScheduleValueGroup}>
                      <Typography
                        className={styles.manualValidation}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                      >
                        Immediate
                      </Typography>
                      <img className={styles.circleCheckIcon} alt="" src="/chevron-right.svg" />
                    <div className={styles.manualValidation}>
                      Payment Provider
                    </div>
                    <Typography
                      className={styles.paystackNodeB}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                    >
                      Paystack Node B
                    </Typography>
                  </Box>
                  <div className={styles.lineIcon8} />
                  <Box className={styles.consolidatedPayoutRow}>
                    <Typography
                      className={styles.manualValidation}
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                    >
                      Consolidated Net Payout
                    </Typography>
                    <div className={styles.div16}>₦2,322,137.5</div>
                  </Box>
                </Box>
                <Box className={styles.toggleOptionsGroup}>
                  <Box className={styles.autoSubmitRow}>
                    <Box className={styles.autoSubmitTextGroup}>
                      <Typography
                        className={styles.autoSubmitToProvider}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                      >
                        Auto-Submit to Provider
                      </Typography>
                      <div className={styles.proceedImmediatelyAfter}>
                        Proceed immediately after batch creation.
                      </div>
                    </Box>
                    <img
                      className={styles.switchIcon}
                      alt=""
                      src="/Switch.svg"
                    />
                  </Box>
                  <Box className={styles.autoSubmitRow}>
                    <Box className={styles.autoSubmitTextGroup}>
                      <Typography
                        className={styles.autoSubmitToProvider}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                      >
                        Require Dual-Approval
                      </Typography>
                      <div className={styles.proceedImmediatelyAfter}>
                        Second admin must sign off via panel.
                      </div>
                    </Box>
                    <img
                      className={styles.switchIcon}
                      alt=""
                      src="/Switch.svg"
                    />
                  </Box>
                  <Box className={styles.twofaRow}>
                    <Box className={styles.autoSubmitTextGroup}>
                      <Typography
                        className={styles.autoSubmitToProvider}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                        sx={{ lineHeight: "var(--lh-16)", fontWeight: "700" }}
                      >
                        2FA for High Values
                      </Typography>
                      <div className={styles.proceedImmediatelyAfter}>
                        Prompt OTP for net payouts over ₦1M.
                      </div>
                    </Box>
                    <img
                      className={styles.switchIcon}
                      alt=""
                      src="/Switch.svg"
                    />
                  </Box>
                </Box>
                <Button
                  className={styles.button4}
                  startIcon={
                    <img width="16px" height="16px" src="/database.svg" />
                  }
                  disableElevation
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    color: "#2f9e5b",
                    fontSize: "12",
                    borderColor: "rgba(47, 158, 91, 0.2)",
                    borderRadius: "18px",
                    "&:hover": { borderColor: "rgba(47, 158, 91, 0.2)" },
                    height: 48,
                  }}
                >
                  Validate All Bank Details
                </Button>
                <Button
                  className={styles.button5}
                  startIcon={
                    <img width="16px" height="16px" src="/Download.svg" />
                  }
                  disableElevation
                  variant="text"
                  sx={{
                    textTransform: "none",
                    color: "#5b5b6b",
                    fontSize: "12",
                    borderRadius: "0px 0px 0px 0px",
                    height: 60,
                  }}
                >
                  Preview Batch CSV Export
                </Button>
                <Box className={styles.container31}>
                  <Box className={styles.line2}>
                    <img
                      className={styles.lineIcon9}
                      alt=""
                      src="/Line20@2x.png"
                    />
                  </Box>
                  <Button
                    className={styles.button6}
                    endIcon={
                      <img
                        width="16px"
                        height="16px"
                        src="/Arrow-up-right.svg"
                      />
                    }
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "14",
                      background: "#2f9e5b",
                      borderRadius: "18px",
                      "&:hover": { background: "#2f9e5b" },
                      height: 56,
                    }}
                  >{`Create & Submit Batch`}</Button>
                  <Box className={styles.container32}>
                      <img className={styles.circleCheckIcon} alt="" src="/lock.svg" />
                      <Typography
                      variant="inherit"
                      variantMapping={{ inherit: "b" }}
                      sx={{
                        lineHeight: "var(--lh-14)",
                        letterSpacing: "0.9px",
                        fontWeight: "700",
                      }}
                    >
                      PCI-DSS Compliant Secure Gateway
                    </Typography>
                  </Box>
                  </Box>
                </Box>
              </Box>
              <Box className={styles.container33}>
                <Box className={styles.containerRow06}>
                  <img className={styles.containerIcon2} alt="" src="/credit-card.svg" />
                  <Typography
                    className={styles.financeQuickTip}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                    sx={{
                      lineHeight: "var(--lh-16)",
                      letterSpacing: "-0.3px",
                      fontWeight: "700",
                    }}
                  >
                    Finance Quick Tip
                  </Typography>
                </Box>
                <div className={styles.batchesSubmittedBefore}>
                  Batches submitted before **4:00 PM WAT** are typically
                  processed by nodes same-day. Late submissions may be delayed
                  until the next banking window.
                </div>
              </Box>
            </section>
          </Box>
          <Box className={styles.container34}>
            <img className={styles.lineIcon} alt="" src="/Line22@2x.png" />
            <footer className={styles.containerRow12}>
              <div className={styles.cvPropertiesMarketplace}>
                © 2024 CV Properties Marketplace Engine. Secure financial
                orchestration powered by MarketplaceNode v2.1.0.
              </div>
              <div className={styles.termsOfService}>Terms of Service</div>
              <div className={styles.termsOfService}>Privacy Ledger</div>
              <div className={styles.termsOfService}>Support Center</div>
            </footer>
          </Box>
        </section>
      </main>
    </Box>
    </MainLayout>
  );
};

export default CreatePayoutBatch;

