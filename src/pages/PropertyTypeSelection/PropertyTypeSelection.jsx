import { Typography, Box } from "@mui/material";
import Container from "../../components/PropertyTypeSelection/Container/Container";
import StepperRow from "../../components/PropertyTypeSelection/StepperRow/StepperRow";
import styles from "./PropertyTypeSelection.module.css";

const PropertyTypeSelection = () => {
  return (
    <Box className={styles.propertyTypeSelectionScreen}>
      <Container />
      <StepperRow />
      <Box className={styles.container}>
        <Typography
          className={styles.b}
          variant="inherit"
          variantMapping={{ inherit: "b" }}
          sx={{ lineHeight: "20px", fontWeight: "700" }}
        >
          2
        </Typography>
      </Box>
      <main className={styles.mainContent}>
        <Box className={styles.leftColumn}>
          <Typography
            className={styles.whatTypeOf}
            variant="inherit"
            variantMapping={{ inherit: "h1" }}
            sx={{ fontWeight: "700", lineHeight: "46px" }}
          >
            What type of property are you listing?
          </Typography>
          <div className={styles.chooseTheOption}>
            Choose the option that best describes your property.
          </div>
        </Box>
        <Box className={styles.propertyCardsGrid}>
          <section className={styles.container2}>
            <img
              className={styles.containerIcon}
              loading="lazy"
              alt=""
              src="/Container3@2x.png"
            />
            <img
              className={styles.containerIcon2}
              alt=""
              src="/Container6@2x.png"
            />
            <Box className={styles.cardFooter}>
              <Box className={styles.cardTextGroup}>
                <Typography
                  className={styles.housingProperties}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "700", lineHeight: "30px" }}
                >
                  Housing Properties
                </Typography>
                <div className={styles.housesApartmentsFlats}>
                  Houses, apartments, flats and other residential homes.
                </div>
              </Box>
              <img className={styles.buttonIcon} alt="" src="/Button11.svg" />
            </Box>
          </section>
          <section className={styles.container2}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/Container5@2x.png"
            />
            <img
              className={styles.containerIcon4}
              alt=""
              src="/Container1@2x.png"
            />
            <Box className={styles.cardFooter2}>
              <Box className={styles.cardTextGroup2}>
                <Typography
                  className={styles.housingProperties}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "700", lineHeight: "30px" }}
                >
                  Hostels
                </Typography>
                <div className={styles.studentHostelsShortlets}>
                  Student hostels, shortlets, shared or private rooms.
                </div>
              </Box>
              <img className={styles.buttonIcon} alt="" src="/Button11.svg" />
            </Box>
          </section>
          <section className={styles.container2}>
            <img
              className={styles.containerIcon}
              alt=""
              src="/Container4@2x.png"
            />
            <img
              className={styles.image8Icon}
              loading="lazy"
              alt=""
              src="/image-8@2x.png"
            />
            <Box className={styles.cardFooter3}>
              <Box className={styles.cardTextGroup3}>
                <Typography
                  className={styles.housingProperties}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "700", lineHeight: "30px" }}
                >
                  Hotels
                </Typography>
                <div className={styles.hotelsLodgesResorts}>
                  Hotels, lodges, resorts and other hospitality spaces.
                </div>
              </Box>
              <img className={styles.buttonIcon} alt="" src="/Button11.svg" />
            </Box>
          </section>
          <section className={styles.container2}>
            <img
              className={styles.containerIcon6}
              alt=""
              src="/Container2@2x.png"
            />
            <img
              className={styles.image9Icon}
              loading="lazy"
              alt=""
              src="/image-9@2x.png"
            />
            <Box className={styles.menuItemDelete}>
              <Box className={styles.cardTextGroup4}>
                <Typography
                  className={styles.housingProperties}
                  variant="inherit"
                  variantMapping={{ inherit: "h3" }}
                  sx={{ fontWeight: "700", lineHeight: "30px" }}
                >
                  Event Centers
                </Typography>
                <div className={styles.eventHallsVenues}>
                  Event halls, venues and spaces for occasions and gatherings.
                </div>
              </Box>
              <img className={styles.buttonIcon4} alt="" src="/Button11.svg" />
            </Box>
          </section>
        </Box>
      </main>
      <img
        className={styles.image11Icon}
        loading="lazy"
        alt=""
        src="/image-11@2x.png"
      />
      <Box className={styles.container6}>
        <img
          className={styles.containerIcon7}
          alt=""
          src="/Container7@2x.png"
        />
        <Box className={styles.containerColumn1}>
          <Typography
            className={styles.housingProperties}
            variant="inherit"
            variantMapping={{ inherit: "h3" }}
            sx={{ fontWeight: "700", lineHeight: "30px" }}
          >
            Verified listings get more trust and visibility
          </Typography>
          <div className={styles.allPropertiesAre}>
            All properties are reviewed to ensure a safe experience for
            everyone.
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyTypeSelection;
