import {
  Box,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Typography,
  TextField,
} from "@mui/material";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Groups2 from "../../components/PropertiesListings/Groups2/Groups2";
import Groups3 from "../../components/PropertiesListings/Groups3/Groups3";
import styles from "./PropertiesListings.module.css";

const PropertiesListings = () => {
  return (
    <MainLayout adminName="Admin User" adminRole="Super Admin">
    <Box className={styles.propertiesListingsUi}>
      <main className={styles.root}>
        <main className={styles.groups}>
          <Box className={styles.frame}>
            <Box className={styles.groups2}>
              <Box className={styles.groups3}>
                <Box className={styles.frame2}>
                  <img
                    className={styles.buttonIcon}
                    alt=""
                    src="/Button8.svg"
                  />
                  <Box className={styles.button}>
                    <Box className={styles.frame3}>
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/Image67.svg"
                      />
                      <Typography
                        className={styles.active}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Active
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon3}
                    alt=""
                    src="/Image103.svg"
                  />
                  <img
                    className={styles.imageIcon4}
                    alt=""
                    src="/Image74.svg"
                  />
                  <Box className={styles.button2}>
                    <Box className={styles.frame4}>
                      <Typography
                        className={styles.forRont}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Rent
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.groupsIcon}
                    loading="lazy"
                    alt=""
                    src="/Groups@2x.png"
                  />
                  <input className={styles.background} type="checkbox" />
                  <img
                    className={styles.buttonIcon2}
                    alt=""
                    src="/Button1.svg"
                  />
                  <img
                    className={styles.imageIcon6}
                    alt=""
                    src="/Image77.svg"
                  />
                  <img
                    className={styles.imageIcon7}
                    alt=""
                    src="/Image98.svg"
                  />
                  <Box className={styles.button3}>
                    <Box className={styles.frame5}>
                      <Typography
                        className={styles.forSale}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Sale
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button4}>
                    <Box className={styles.button5}>
                      <Box className={styles.frame6}>
                        <Typography
                          className={styles.house}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                        >
                          House
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon8}
                    alt=""
                    src="/Image86@2x.png"
                  />
                  <input className={styles.background2} type="checkbox" />
                  <img
                    className={styles.buttonIcon3}
                    alt=""
                    src="/Button9.svg"
                  />
                  <Box className={styles.button6}>
                    <Box className={styles.frame7}>
                      <img
                        className={styles.imageIcon10}
                        alt=""
                        src="/Image71.svg"
                      />
                      <Typography
                        className={styles.active}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Active
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon11}
                    alt=""
                    src="/Image97.svg"
                  />
                  <img
                    className={styles.imageIcon12}
                    alt=""
                    src="/Image94.svg"
                  />
                  <Box className={styles.button7}>
                    <Box className={styles.frame8}>
                      <Typography
                        className={styles.forLlent}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Rent
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button8}>
                    <Box className={styles.frame9}>
                      <label
                        className={styles.label}
                        htmlFor="file-wrapper_frame_6"
                      >
                        <Typography
                          className={styles.house}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                        >
                          House
                        </Typography>
                      </label>
                      <input
                        className={styles.input}
                        type="file"
                        id="file-wrapper_frame_6"
                      />
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon13}
                    alt=""
                    src="/Image87@2x.png"
                  />
                  <input className={styles.background4} type="checkbox" />
                  <img
                    className={styles.buttonIcon4}
                    alt=""
                    src="/Button2.svg"
                  />
                  <Box className={styles.button9}>
                    <TextField
                      className={styles.frame10}
                      placeholder="Enter ID mumber"
                      variant="outlined"
                      sx={{
                        "& fieldset": { border: "none" },
                        "& .MuiInputBase-root": {
                          height: "30.1px",
                          backgroundColor: "#fdfdfd",
                          borderRadius: "0px 0px 0px 0px",
                          fontSize: "9.6px",
                        },
                        "& .MuiInputBase-input": { color: "#878788" },
                        width: "266.4px",
                      }}
                    />
                  </Box>
                  <img
                    className={styles.imageIcon15}
                    alt=""
                    src="/Image59.svg"
                  />
                  <img
                    className={styles.imageIcon16}
                    alt=""
                    src="/Image69.svg"
                  />
                  <Box className={styles.button10}>
                    <Box className={styles.frame11}>
                      <Typography
                        className={styles.forRont}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Rent
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button11}>
                    <Box className={styles.button12}>
                      <Box className={styles.frame12}>
                        <Typography
                          className={styles.eventServices}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                        >
                          Event Center
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <img
                    className={styles.groupsIcon2}
                    alt=""
                    src="/Groups3@2x.png"
                  />
                  <input className={styles.background6} type="checkbox" />
                  <Box className={styles.background7} />
                  <img
                    className={styles.buttonIcon5}
                    alt=""
                    src="/Button7.svg"
                  />
                  <img
                    className={styles.imageIcon18}
                    alt=""
                    src="/Image108.svg"
                  />
                  <Box className={styles.button13}>
                    <Box className={styles.frame13}>
                      <img
                        className={styles.imageIcon19}
                        alt=""
                        src="/Image78.svg"
                      />
                      <Typography
                        className={styles.rejected}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Rejected
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon20}
                    alt=""
                    src="/Image64.svg"
                  />
                  <Box className={styles.button14}>
                    <Box className={styles.frame14}>
                      <Typography
                        className={styles.forRent}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Rent
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button15}>
                    <Box className={styles.button16}>
                      <Box className={styles.frame15}>
                        <Typography
                          className={styles.mouing}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                        >
                          Hotel
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  <img
                    className={styles.groupsIcon3}
                    alt=""
                    src="/Groups1@2x.png"
                  />
                  <input className={styles.background8} type="checkbox" />
                  <img
                    className={styles.buttonIcon6}
                    alt=""
                    src="/Button.svg"
                  />
                  <Box className={styles.button17}>
                    <Box className={styles.frame16}>
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/Image80.svg"
                      />
                      <Typography
                        className={styles.active3}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Active
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon23}
                    alt=""
                    src="/Image66.svg"
                  />
                  <img
                    className={styles.imageIcon24}
                    alt=""
                    src="/Image104.svg"
                  />
                  <Box className={styles.button18}>
                    <Box className={styles.frame17}>
                      <Typography
                        className={styles.farSale}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Sale
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.groupsIcon4}
                    alt=""
                    src="/Groups2@2x.png"
                  />
                  <input className={styles.background10} type="checkbox" />
                  <img
                    className={styles.buttonIcon7}
                    alt=""
                    src="/Button6.svg"
                  />
                  <Box className={styles.button19}>
                    <Box className={styles.frame18}>
                      <img
                        className={styles.imageIcon2}
                        alt=""
                        src="/Image56.svg"
                      />
                      <Typography
                        className={styles.active3}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Active
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon28}
                    alt=""
                    src="/Image105.svg"
                  />
                  <img className={styles.imageIcon29} alt="" />
                  <Box className={styles.button20}>
                    <Box className={styles.frame19}>
                      <Typography
                        className={styles.farSale}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Sale
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button21}>
                    <Box className={styles.frame20}>
                      <Typography
                        className={styles.house}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        House
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon30}
                    alt=""
                    src="/Image84@2x.png"
                  />
                  <input className={styles.background11} type="checkbox" />
                  <img
                    className={styles.buttonIcon8}
                    alt=""
                    src="/Button4.svg"
                  />
                  <img
                    className={styles.imageIcon32}
                    alt=""
                    src="/Image83.svg"
                  />
                  <img
                    className={styles.imageIcon33}
                    alt=""
                    src="/Image70.svg"
                  />
                  <Box className={styles.button22}>
                    <Box className={styles.frame21}>
                      <Typography
                        className={styles.forRent}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Rent
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon34}
                    alt=""
                    src="/Image88@2x.png"
                  />
                  <input className={styles.background12} type="checkbox" />
                  <Box className={styles.background13} />
                  <img
                    className={styles.buttonIcon9}
                    alt=""
                    src="/Button5.svg"
                  />
                  <img
                    className={styles.imageIcon36}
                    alt=""
                    src="/Image75.svg"
                  />
                  <Box className={styles.button23}>
                    <Box className={styles.frame22}>
                      <img
                        className={styles.imageIcon37}
                        alt=""
                        src="/Image100.svg"
                      />
                      <Typography
                        className={styles.active2}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Active
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon38}
                    alt=""
                    src="/Image95.svg"
                  />
                  <Box className={styles.button24}>
                    <Box className={styles.frame23}>
                      <Typography
                        className={styles.forRent}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Rent
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button25}>
                    <Box className={styles.frame24}>
                      <label
                        className={styles.label}
                        htmlFor="file-wrapper_frame_21"
                      >
                        <Typography
                          className={styles.house}
                          variant="inherit"
                          variantMapping={{ inherit: "b" }}
                        >
                          House
                        </Typography>
                      </label>
                      <input
                        className={styles.input}
                        type="file"
                        id="file-wrapper_frame_21"
                      />
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon39}
                    alt=""
                    src="/Image92@2x.png"
                  />
                  <input className={styles.background15} type="checkbox" />
                  <img
                    className={styles.buttonIcon10}
                    alt=""
                    src="/Button3.svg"
                  />
                  <Box className={styles.button26}>
                    <Box className={styles.frame25}>
                      <img
                        className={styles.imageIcon41}
                        alt=""
                        src="/Image102.svg"
                      />
                      <Typography
                        className={styles.active3}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Active
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.imageIcon42}
                    alt=""
                    src="/Image85.svg"
                  />
                  <img
                    className={styles.imageIcon43}
                    alt=""
                    src="/Image91.svg"
                  />
                  <Box className={styles.button27}>
                    <Box className={styles.frame26}>
                      <Typography
                        className={styles.forSall}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        For Sale
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button28}>
                    <Box className={styles.frame27}>
                      <Typography
                        className={styles.house}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        House
                      </Typography>
                    </Box>
                  </Box>
                  <img
                    className={styles.groupsIcon5}
                    alt=""
                    src="/Groups4@2x.png"
                  />
                  <input className={styles.background16} type="checkbox" />
                  <input className={styles.background17} type="checkbox" />
                  <Typography
                    className={styles.pm}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    05.50 PM
                  </Typography>
                  <Typography
                    className={styles.may222024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    May 22,2024
                  </Typography>
                  <Typography
                    className={styles.agent}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.olivriaMartinez}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Olivria Martinez
                  </Typography>
                  <Typography
                    className={styles.nl200000yr}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    N1200,000/yr
                  </Typography>
                  <Typography
                    className={styles.lagos}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lagos
                  </Typography>
                  <Typography
                    className={styles.suriere}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Surulere
                  </Typography>
                  <Box className={styles.compactStudioA}>
                    Compact studio apartment
                    <br />
                    1D:LIS-0009
                  </Box>
                  <Box className={styles.studioApartment}>Studio Apartment</Box>
                  <Typography
                    className={styles.pm2}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    12:40PM
                  </Typography>
                  <Typography
                    className={styles.atmks}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.may232024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    May 23,2024
                  </Typography>
                  <Typography
                    className={styles.lagos2}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lagos
                  </Typography>
                  <Box className={styles.dlis0009}>1D:LIS-0009</Box>
                  <Typography
                    className={styles.cvProperties}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    CV Properties
                  </Typography>
                  <Typography
                    className={styles.n2800000000}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    N2,800,000,000
                  </Typography>
                  <Typography
                    className={styles.ekoMlantic}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Eko Atlantic,
                  </Typography>
                  <Box className={styles.beachhontHotel}>
                    Beachfront hotel with ses view
                  </Box>
                  <Box className={styles.oceanviewHotel}>Oceanview Hotel</Box>
                  <Typography
                    className={styles.o05am}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    1O-05AM
                  </Typography>
                  <Typography
                    className={styles.may242024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    May 24,2024
                  </Typography>
                  <Typography
                    className={styles.agem}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.lagor}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lagos
                  </Typography>
                  <Box className={styles.li50001}>1D:LIS-0008</Box>
                  <Typography
                    className={styles.jamesAnceran}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    James AnCeran
                  </Typography>
                  <Typography
                    className={styles.n40000007yr}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    N4,000,000/yr
                  </Typography>
                  <Typography
                    className={styles.latkiPhase1}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lekki Phase 1,
                  </Typography>
                  <Box className={styles.commercialSpace}>
                    Commercial space for rent
                  </Box>
                  <Box className={styles.offceSpace2nd}>
                    Offce Space (2nd Floor)
                  </Box>
                  <Typography
                    className={styles.pm3}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    03.20 PM
                  </Typography>
                  <Typography
                    className={styles.agint}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.miy252024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Miy 25.2024
                  </Typography>
                  <Typography
                    className={styles.lindaThompoon}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Linda Thompoon
                  </Typography>
                  <Typography
                    className={styles.nt5000007day}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Nt500,000/day
                  </Typography>
                  <Typography
                    className={styles.legos}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lagos
                  </Typography>
                  <Typography
                    className={styles.sueja}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Surulere
                  </Typography>
                  <Box className={styles.sptciousHadFor}>
                    Spacious host for events
                    <br />
                    1D:LIS-0007
                  </Box>
                  <Box className={styles.royalEventCent}>
                    Royal Event Center
                  </Box>
                  <Typography
                    className={styles.pm4}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    01:30PM
                  </Typography>
                  <Typography
                    className={styles.agrntt}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.may252024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    May 25.2024
                  </Typography>
                  <Typography
                    className={styles.lapos}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lagos
                  </Typography>
                  <Box className={styles.li6000}>1D:LIS-0006</Box>
                  <Typography
                    className={styles.davitdWilson}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Davitd Wilson
                  </Typography>
                  <Typography
                    className={styles.n800000yr}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    N800.000/yr
                  </Typography>
                  <Typography
                    className={styles.yada}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Yaba
                  </Typography>
                  <Box className={styles.standardHostal}>
                    Standard hostal acoomvmodation
                  </Box>
                  <Box className={styles.greenviewHostel}>GreenView Hostel</Box>
                  <Typography
                    className={styles.am}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    09:10AM
                  </Typography>
                  <Typography
                    className={styles.may272024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    May 27, 2024
                  </Typography>
                  <Typography
                    className={styles.admit}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.cvProperties2}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    CV Properties
                  </Typography>
                  <Typography
                    className={styles.lagos3}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lagos
                  </Typography>
                  <Box className={styles.thili000}>1D:LIS-0005</Box>
                  <Typography
                    className={styles.n1200000000}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    N1200,000,000
                  </Typography>
                  <Typography
                    className={styles.victoriaIslend}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Victoria Island
                  </Typography>
                  <Box className={styles.luxuryHortalWi}>
                    Luxury hortal with 30 rooms
                  </Box>
                  <Box className={styles.hotelSunshine}>Hotel Sunshine</Box>
                  <Typography
                    className={styles.t5pm}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    04:15PM
                  </Typography>
                  <Typography
                    className={styles.may282024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    May28.2024
                  </Typography>
                  <Typography
                    className={styles.agrnt}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.lagos4}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lagos
                  </Typography>
                  <Box className={styles.l150004}>1D:LIS-0004</Box>
                  <Typography
                    className={styles.emilyDavin}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Emily Davin
                  </Typography>
                  <Typography
                    className={styles.n180000000}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    N180.000,000
                  </Typography>
                  <Typography
                    className={styles.chevronDrive}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Chevron Drive.
                  </Typography>
                  <Box className={styles.bemtiDrtachodW}>
                    Semi-detached with BQ
                  </Box>
                  <Box className={styles.bedroomSemiD}>
                    4 Bedroom Semi-Detached
                  </Box>
                  <Typography
                    className={styles.am2}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    11:20AM
                  </Typography>
                  <Typography
                    className={styles.agmt}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.lagi}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lagos
                  </Typography>
                  <Box className={styles.idlis0003}>ID:LIS-0003</Box>
                  <Typography
                    className={styles.may292024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    May 29,2024
                  </Typography>
                  <Typography
                    className={styles.michaelBrown}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Michael Brown
                  </Typography>
                  <Typography
                    className={styles.m3000000yr}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    N3.000.000/yr
                  </Typography>
                  <Typography
                    className={styles.victoriaLiland}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Victoria Island,
                  </Typography>
                  <Box className={styles.welFurishodFia}>
                    Well-furnished fiat in a Screne Area
                  </Box>
                  <Box className={styles.bedroomFlat}>3 Bedroom Flat</Box>
                  <Typography
                    className={styles.pm5}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    02:45 PM
                  </Typography>
                  <Typography
                    className={styles.aamt}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.may302024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    May 30.2024
                  </Typography>
                  <Typography
                    className={styles.lagos5}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lagos
                  </Typography>
                  <Box className={styles.idhles0002}>1D:LIS-0002</Box>
                  <Typography
                    className={styles.fanshJoheson}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    fansh Joheson
                  </Typography>
                  <Typography
                    className={styles.n2500000yr}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    N2,500,000/yr
                  </Typography>
                  <Typography
                    className={styles.ikiyi}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Ikoyi
                  </Typography>
                  <Box className={styles.modamApartment}>
                    Modarm apartment with city view
                  </Box>
                  <Box className={styles.bedroomApartm}>
                    2 Bedroom Apartment
                  </Box>
                  <Typography
                    className={styles.am3}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    10.30AM
                  </Typography>
                  <Typography
                    className={styles.agurt}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Agent
                  </Typography>
                  <Typography
                    className={styles.may212024}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    May 21,2024
                  </Typography>
                  <Box className={styles.ili50001}>1D:LIS-0009</Box>
                  <Typography
                    className={styles.johnDoe}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    John Doe
                  </Typography>
                  <Typography
                    className={styles.n350000000}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    N350,000.000
                  </Typography>
                  <Typography
                    className={styles.leikiPhape1}
                    variant="inherit"
                    variantMapping={{ inherit: "b" }}
                  >
                    Lekki Phase 1, Lagos
                  </Typography>
                  <Box className={styles.spacicusAndMod}>
                    Spacicus and modem duplex
                  </Box>
                  <Box className={styles.lusury5Bedroor}>
                    Lusury 5 Bedroorn Duplex
                  </Box>
                  <Box className={styles.actions}>Actions</Box>
                  <Box className={styles.listedDate}>Listed Date</Box>
                  <Box className={styles.status}>Status</Box>
                  <Box className={styles.listedBy}>Listed By</Box>
                  <Box className={styles.price}>Price</Box>
                  <Box className={styles.location}>Location</Box>
                  <Box className={styles.category}>Category</Box>
                  <Box className={styles.type}>Type</Box>
                  <Box className={styles.listing}>Listing</Box>
                  <Box className={styles.button29}>
                    <Box className={styles.frame28}>
                      <Typography
                        className={styles.house}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        House
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button30}>
                    <Box className={styles.frame29}>
                      <Typography
                        className={styles.mouing}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Hotel
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button31}>
                    <Box className={styles.frame30}>
                      <Typography
                        className={styles.mouing}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Hotel
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button32}>
                    <Box className={styles.nameEmailInputFields}>
                      <img
                        className={styles.imageIcon44}
                        alt=""
                        src="/Image79.svg"
                      />
                      <Typography
                        className={styles.pending}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Pending
                      </Typography>
                    </Box>
                  </Box>
                  <Box className={styles.button33}>
                    <Box className={styles.frame31}>
                      <img
                        className={styles.imageIcon44}
                        alt=""
                        src="/Image79.svg"
                      />
                      <Typography
                        className={styles.pending}
                        variant="inherit"
                        variantMapping={{ inherit: "b" }}
                      >
                        Pending
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box className={styles.groups4}>
                  <Box className={styles.frame32}>
                    <img
                      className={styles.imageIcon46}
                      alt=""
                      src="/Image61.svg"
                    />
                    <img
                      className={styles.imageIcon47}
                      alt=""
                      src="/Image82.svg"
                    />
                    <img
                      className={styles.imageIcon48}
                      alt=""
                      src="/Image57.svg"
                    />
                    <img
                      className={styles.imageIcon49}
                      alt=""
                      src="/Image58.svg"
                    />
                    <img
                      className={styles.imageIcon50}
                      alt=""
                      src="/Image81.svg"
                    />
                    <img
                      className={styles.imageIcon51}
                      alt=""
                      src="/Image60.svg"
                    />
                    <img
                      className={styles.imageIcon52}
                      alt=""
                      src="/Image106.svg"
                    />
                    <Box className={styles.daleteUasr}>Delete Property</Box>
                    <Box className={styles.resetPassword}>Reset Password</Box>
                    <Box className={styles.banUistr}>Ban Agent</Box>
                    <Box className={styles.suspendUser}>Suspend Property</Box>
                    <Box className={styles.verityApprove}>Verify/ Approve</Box>
                    <Box className={styles.editUser}>Edit Property</Box>
                    <Box className={styles.viewPrafio}>
                      View Property details
                    </Box>
                  </Box>
                </Box>
              </Box>
              <img className={styles.imageIcon53} alt="" src="/Image99.svg" />
              <Box className={styles.button34}>
                <Box className={styles.frame33}>
                  <div className={styles.div}>457</div>
                </Box>
              </Box>
              <Box className={styles.frame34}>
                <img className={styles.imageIcon54} alt="" src="/Image62.svg" />
              </Box>
              <Box className={styles.button35}>
                <Button
                  className={styles.frame35}
                  startIcon={
                    <img width="12.3px" height="12.3px" src="/image-45.svg" />
                  }
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fdfdfd",
                    fontSize: "12.3",
                    background: "#0c693c",
                    border: "#0c582c solid 1.4px",
                    borderRadius: "5.1px",
                    "&:hover": { background: "#0c693c" },
                    width: 131.2,
                    height: 38.2,
                  }}
                >
                  Create User
                </Button>
              </Box>
              <Box className={styles.button36}>
                <Button
                  className={styles.frame36}
                  startIcon={
                    <img width="10.9px" height="10.9px" src="/image-44.svg" />
                  }
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#a6a6a8",
                    fontSize: "12.3",
                    background: "#fdfdfd",
                    borderRadius: "0px 0px 0px 0px",
                    "&:hover": { background: "#fdfdfd" },
                    width: 106.6,
                    height: 42.4,
                  }}
                >
                  Cancel
                </Button>
              </Box>
              <button className={styles.button37}>
                <Box className={styles.frame37}>
                  <div className={styles.div2}>1</div>
                </Box>
              </button>
              <img className={styles.imageIcon55} alt="" src="/Image93.svg" />
              <FormControl
                className={styles.button38}
                variant="standard"
                sx={{
                  borderColor: "#fafafa",
                  borderStyle: "SOLID",
                  borderTopWidth: "1.3px",
                  borderRightWidth: "1.3px",
                  borderBottomWidth: "1.3px",
                  borderLeftWidth: "1.3px",
                  borderRadius: "0px 0px 0px 0px",
                  width: "56.6px",
                  height: "28.3px",
                  m: 0,
                  p: 0,
                  "& .MuiInputBase-root": {
                    m: 0,
                    p: 0,
                    minHeight: "28.3px",
                    justifyContent: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInputLabel-root": {
                    m: 0,
                    p: 0,
                    minHeight: "28.3px",
                    display: "inline-flex",
                  },
                  "& .MuiMenuItem-root": {
                    m: 0,
                    p: 0,
                    height: "28.3px",
                    display: "inline-flex",
                  },
                  "& .MuiSelect-select": {
                    m: 0,
                    p: 0,
                    height: "28.3px",
                    alignItems: "center",
                    display: "inline-flex",
                  },
                  "& .MuiInput-input": { m: 0, p: 0 },
                  "& .MuiInputBase-input": {
                    color: "#000",
                    fontSize: 13,
                    fontWeight: "Regular",
                    fontFamily: "Inter",
                    textAlign: "left",
                    p: "0 !important",
                    marginLeft: "18.69999999999709px",
                  },
                }}
              >
                <InputLabel color="success" />
                <Select
                  color="success"
                  disableUnderline
                  displayEmpty
                  IconComponent={() => (
                    <img
                      width="6.7px"
                      height="4px"
                      src="/image-60.svg"
                      style={{ marginRight: "12.100000000002913px" }}
                    />
                  )}
                >
                  <MenuItem>10</MenuItem>
                </Select>
                <FormHelperText />
              </FormControl>
              <div className={styles.entries}>entries</div>
              <div className={styles.show}>Show</div>
            </Box>
            <Box className={styles.groups5}>
              <Typography
                className={styles.showing1To}
                variant="inherit"
                variantMapping={{ inherit: "b" }}
                sx={{ fontWeight: "700" }}
              >
                Showing 1 to 10 of 4,562 listings
              </Typography>
            </Box>
            <Box className={styles.groups6}>
              <form className={styles.frame38}>
                <Box className={styles.groups7}>
                  <Typography
                    className={styles.resut}
                    variantMapping={{ inherit: "b" }}
                    sx={{ fontFamily: "Inter", fontSize: "9px" }}
                  >
                    Resut
                  </Typography>
                  <img
                    className={styles.imageIcon56}
                    alt=""
                    src="/Image101.svg"
                  />
                  <Button
                    className={styles.button39}
                    startIcon={
                      <img width="12.1px" height="13.5px" src="/image-62.svg" />
                    }
                    disableElevation
                    variant="outlined"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "9",
                      borderColor: "#f9f9f9",
                      borderRadius: "0px 0px 0px 0px",
                      "&:hover": { borderColor: "#f9f9f9" },
                      width: 120,
                      height: 35.1,
                    }}
                    type="submit"
                  >
                    More Fifters
                  </Button>
                  <FormControl
                    className={styles.text}
                    variant="standard"
                    sx={{
                      borderColor: "#f7f7f7",
                      borderStyle: "SOLID",
                      borderTopWidth: "2.7px",
                      borderRightWidth: "2.7px",
                      borderBottomWidth: "2.7px",
                      borderLeftWidth: "2.7px",
                      borderRadius: "2.36px 4.38px 1.01px 4.38px",
                      width: "30.262876683051935%",
                      height: "33.7px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "33.7px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "33.7px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "33.7px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "33.7px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 9,
                        fontWeight: "Bold",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "13.400000000001455px",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="6.7px"
                          height="4px"
                          src="/image-63.svg"
                          style={{ marginRight: "14.899999999998546px" }}
                        />
                      )}
                    >
                      <MenuItem>Al Locations</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <Typography
                    className={styles.locstion}
                    variantMapping={{ inherit: "b" }}
                    sx={{ fontFamily: "Inter", fontSize: "10px" }}
                  >
                    Locstion
                  </Typography>
                </Box>
                <Box className={styles.groups8}>
                  <FormControl
                    className={styles.text2}
                    variant="standard"
                    sx={{
                      borderTopWidth: "0px",
                      borderRightWidth: "0px",
                      borderBottomWidth: "0px",
                      borderLeftWidth: "0px",
                      borderRadius: "0px 0px 0px 0px",
                      width: "95.22111269614835%",
                      height: "32.4px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "32.4px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "32.4px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "32.4px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "32.4px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 9,
                        fontWeight: "Bold",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "13.400000000001455px",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="6.7px"
                          height="4px"
                          src="/image-64.svg"
                          style={{ marginRight: "14.899999999998546px" }}
                        />
                      )}
                    >
                      <MenuItem>All Statuses</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <Typography
                    className={styles.startun}
                    variantMapping={{ inherit: "b" }}
                    sx={{ fontFamily: "Inter", fontSize: "10px" }}
                  >
                    Startun
                  </Typography>
                </Box>
                <Box className={styles.groups9}>
                  <FormControl
                    className={styles.text3}
                    variant="standard"
                    sx={{
                      borderColor: "#f8f8f8",
                      borderStyle: "SOLID",
                      borderTopWidth: "2.7px",
                      borderRightWidth: "2.7px",
                      borderBottomWidth: "2.7px",
                      borderLeftWidth: "2.7px",
                      borderRadius: "2.02px 1.35px 8.43px 1.01px",
                      width: "93.41649341649342%",
                      height: "33.7px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "33.7px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "33.7px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "33.7px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "33.7px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 9,
                        fontWeight: "Bold",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "13.5px",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="6.7px"
                          height="4px"
                          src="/image-65.svg"
                          style={{ marginRight: "13.40000000000582px" }}
                        />
                      )}
                    >
                      <MenuItem>All Categories</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <Typography
                    className={styles.category2}
                    variantMapping={{ inherit: "b" }}
                    sx={{ fontFamily: "Inter", fontSize: "10px" }}
                  >
                    Category
                  </Typography>
                </Box>
                <Box className={styles.groups10}>
                  <FormControl
                    className={styles.text4}
                    variant="standard"
                    sx={{
                      borderTopWidth: "0px",
                      borderRightWidth: "0px",
                      borderBottomWidth: "0px",
                      borderLeftWidth: "0px",
                      backgroundColor: "#fdfdfd",
                      borderRadius: "0px 0px 0px 0px",
                      width: "97.26118904475618%",
                      height: "33.7px",
                      m: 0,
                      p: 0,
                      "& .MuiInputBase-root": {
                        m: 0,
                        p: 0,
                        minHeight: "33.7px",
                        justifyContent: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInputLabel-root": {
                        m: 0,
                        p: 0,
                        minHeight: "33.7px",
                        display: "inline-flex",
                      },
                      "& .MuiMenuItem-root": {
                        m: 0,
                        p: 0,
                        height: "33.7px",
                        display: "inline-flex",
                      },
                      "& .MuiSelect-select": {
                        m: 0,
                        p: 0,
                        height: "33.7px",
                        alignItems: "center",
                        display: "inline-flex",
                      },
                      "& .MuiInput-input": { m: 0, p: 0 },
                      "& .MuiInputBase-input": {
                        color: "#000",
                        fontSize: 9,
                        fontWeight: "Bold",
                        fontFamily: "Inter",
                        textAlign: "left",
                        p: "0 !important",
                        marginLeft: "13.5px",
                      },
                    }}
                  >
                    <InputLabel color="success" />
                    <Select
                      color="success"
                      disableUnderline
                      displayEmpty
                      IconComponent={() => (
                        <img
                          width="8.1px"
                          height="4px"
                          src="/image-66.svg"
                          style={{ marginRight: "14.79999999999418px" }}
                        />
                      )}
                    >
                      <MenuItem>Al Types</MenuItem>
                    </Select>
                    <FormHelperText />
                  </FormControl>
                  <Typography
                    className={styles.propertyType}
                    variantMapping={{ inherit: "b" }}
                    sx={{ fontFamily: "Inter", fontSize: "10px" }}
                  >
                    Property Type
                  </Typography>
                </Box>
                <Box className={styles.groups11}>
                  <TextField
                    className={styles.text5}
                    placeholder="Search by title, location,user.."
                    variant="outlined"
                    slotProps={{
                      input: {
                        startAdornment: (
                          <img
                            width="13.5px"
                            height="13.5px"
                            src="/image-67.svg"
                          />
                        ),
                      },
                    }}
                    sx={{
                      "& fieldset": { border: "none" },
                      "& .MuiInputBase-root": {
                        height: "40.5px",
                        backgroundColor: "#fdfdfd",
                        paddingLeft: "14.9px",
                        borderRadius: "0px 0px 0px 0px",
                        fontSize: "10px",
                      },
                      "& .MuiInputBase-input": {
                        paddingLeft: "8.1px",
                        color: "#878788",
                      },
                      width: "246.8px",
                    }}
                  />
                </Box>
              </form>
            </Box>
            <Box className={styles.groups12}>
              <Box className={styles.frame39}>
                <img
                  className={styles.imageIcon57}
                  alt=""
                  src="/Image107.svg"
                />
                <img className={styles.imageIcon58} alt="" />
                <div className={styles.vsLastMonth}>vs last month</div>
                <div className={styles.div3}>1.3%</div>
                <div className={styles.div4}>38</div>
                <Typography
                  className={styles.reportedListing}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ fontSize: "11px", fontWeight: "700" }}
                >
                  Reported Listings
                </Typography>
              </Box>
            </Box>
            <Box className={styles.frame40}>
              <Box className={styles.groups13}>
                <div className={styles.vsFastMonth}>vs fast month</div>
                <div className={styles.div5}>2.1%</div>
                <img className={styles.imageIcon59} alt="" />
                <div className={styles.div6}>67</div>
                <Typography
                  className={styles.rejectedListing}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ fontWeight: "700" }}
                >
                  Rejected Listings
                </Typography>
                <img className={styles.imageIcon60} alt="" />
              </Box>
            </Box>
            <Box className={styles.groups14}>
              <Box className={styles.frame41}>
                <img className={styles.imageIcon61} alt="" src="/Image90.svg" />
                <img className={styles.imageIcon62} alt="" />
                <div className={styles.vsLastRnonth}>vs last month</div>
                <div className={styles.div7}>4.3%</div>
                <div className={styles.div8}>235</div>
                <Typography
                  className={styles.pendingApproval}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ fontWeight: "700" }}
                >
                  Pending Approval
                </Typography>
              </Box>
            </Box>
            <Box className={styles.frame42}>
              <Box className={styles.groups15}>
                <div className={styles.vsLastMonContainer}>
                  <span className={styles.vsLastMonContainer2}>
                    <Typography
                      variant="inherit"
                      variantMapping={{ inherit: "span" }}
                    >
                      8.7%
                    </Typography>
                    <Typography
                      className={styles.vsLastMonth2}
                      variant="inherit"
                      variantMapping={{ inherit: "span" }}
                    >
                      {" "}
                      vs last month
                    </Typography>
                  </span>
                </div>
                <img className={styles.imageIcon63} alt="" src="/Image89.svg" />
                <div className={styles.div9}>3,120</div>
                <Typography
                  className={styles.activeListings}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ fontSize: "11px", fontWeight: "700" }}
                >
                  Active Listings
                </Typography>
                <img className={styles.imageIcon64} alt="" src="/Image96.svg" />
              </Box>
            </Box>
            <Box className={styles.groups16}>
              <Box className={styles.frame43}>
                <img className={styles.imageIcon65} alt="" src="/Image65.svg" />
                <img className={styles.imageIcon66} alt="" />
                <div className={styles.vstastMonth}>vs last month</div>
                <div className={styles.div10}>12.4%</div>
                <div className={styles.div11}>4,562</div>
                <Typography
                  className={styles.totalListings}
                  variant="inherit"
                  variantMapping={{ inherit: "b" }}
                  sx={{ fontSize: "11px", fontWeight: "700" }}
                >
                  Total Listings
                </Typography>
              </Box>
            </Box>
            <Box className={styles.groups17}>
              <Button
                className={styles.button40}
                startIcon={
                  <img width="12.1px" height="13.5px" src="/image-78.svg" />
                }
                disableElevation
                variant="text"
                sx={{
                  textTransform: "none",
                  color: "#dae5e0",
                  fontSize: "12.1",
                  borderRadius: "0px 0px 0px 0px",
                  width: 161.8,
                  height: 41.8,
                }}
              >
                Add New Listing
              </Button>
              <Button
                className={styles.button41}
                startIcon={
                  <img width="14.8px" height="14.8px" src="/image-79.svg" />
                }
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#5f5f63",
                  fontSize: "11.5",
                  background: "#fcfdfd",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#fcfdfd" },
                  width: 148.3,
                  height: 39.1,
                }}
              >
                Export Listings
              </Button>
              <div className={styles.allListings}>All Listings</div>
              <img className={styles.imageIcon67} alt="" src="/Image63.svg" />
              <div className={styles.listings}>Listings</div>
              <img className={styles.imageIcon68} alt="" src="/Image73.svg" />
              <div className={styles.dashboard}>Dashboard</div>
              <Typography
                className={styles.listings2}
                variant="inherit"
                variantMapping={{ inherit: "h2" }}
                sx={{ fontWeight: "400", fontSize: "19px" }}
              >
                Listings
              </Typography>
            </Box>
          </Box>
        </main>
        <Groups2 />
        <img
          className={styles.backgroundIcon7}
          alt=""
          src="/Background1@2x.png"
        />
        <section className={styles.groupsWrapper}>
          <Groups3 />
        </section>
      </main>
    </Box>
    </MainLayout>
  );
};

export default PropertiesListings;

