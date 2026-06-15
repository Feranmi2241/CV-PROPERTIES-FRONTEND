import { Typography, Box } from "@mui/material";
import PropTypes from "prop-types";
import styles from "./Table.module.css";

const Table = ({ className = "" }) => {
  return (
    <Box className={[styles.table, className].join(" ")}>
      <Box className={styles.header}>
        <Box className={styles.frame}>
          <Typography
            className={styles.admin}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{
              lineHeight: "16px",
              letterSpacing: "1.2px",
              fontWeight: "700",
            }}
          >
            Admin
          </Typography>
        </Box>
        <Box className={styles.frame2}>
          <Typography
            className={styles.admin}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{
              lineHeight: "16px",
              letterSpacing: "1.2px",
              fontWeight: "700",
            }}
          >
            Action
          </Typography>
        </Box>
        <Box className={styles.headerColumn2}>
          <Box className={styles.frame3}>
            <Typography
              className={styles.admin}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{
                lineHeight: "16px",
                letterSpacing: "1.2px",
                fontWeight: "700",
              }}
            >
              Resource
            </Typography>
          </Box>
          <Box className={styles.frame4}>
            <Typography
              className={styles.admin}
              variant="inherit"
              variantMapping={{ inherit: "b" }}
              sx={{
                lineHeight: "16px",
                letterSpacing: "1.2px",
                fontWeight: "700",
              }}
            >
              IP Address
            </Typography>
          </Box>
        </Box>
        <Box className={styles.frame5}>
          <Typography
            className={styles.timestamp}
            variant="inherit"
            variantMapping={{ inherit: "b" }}
            sx={{
              lineHeight: "16px",
              letterSpacing: "1.2px",
              fontWeight: "700",
            }}
          >
            Timestamp
          </Typography>
        </Box>
      </Box>
      <Box className={styles.row}>
        <Box className={styles.frame6} />
        <Box className={styles.frame7}>
          <Box className={styles.tag}>
            <Box className={styles.frame8}>
              <div className={styles.bulkSend}>BULK_SEND</div>
            </Box>
          </Box>
        </Box>
        <Box className={styles.rowColumn2}>
          <Box className={styles.frame9}>
            <div className={styles.id9021831}>ID: 9021831</div>
          </Box>
          <Box className={styles.frame10}>
            <div className={styles.div}>192.168.1.45</div>
          </Box>
        </Box>
        <Box className={styles.frame11}>
          <div className={styles.oct242023}>Oct 24, 2023 • 14:22:10</div>
        </Box>
      </Box>
      <Box className={styles.row}>
        <Box className={styles.frame6} />
        <Box className={styles.frame7}>
          <Box className={styles.tag}>
            <Box className={styles.frame8}>
              <div className={styles.bulkSend}>BULK_SEND</div>
            </Box>
          </Box>
        </Box>
        <Box className={styles.rowColumn2}>
          <Box className={styles.frame15}>
            <div className={styles.id9021831}>ID: 9021831</div>
          </Box>
          <Box className={styles.frame16}>
            <div className={styles.div2}>192.168.1.45</div>
          </Box>
        </Box>
        <Box className={styles.frame11}>
          <div className={styles.oct242023}>Oct 24, 2023 • 14:22:10</div>
        </Box>
      </Box>
      <Box className={styles.row}>
        <Box className={styles.frame18} />
        <Box className={styles.frame19}>
          <Box className={styles.tag}>
            <Box className={styles.frame8}>
              <div className={styles.bulkSend}>BULK_SEND</div>
            </Box>
          </Box>
        </Box>
        <Box className={styles.rowColumn2}>
          <Box className={styles.frame21}>
            <div className={styles.id9021831}>ID: 9021831</div>
          </Box>
          <Box className={styles.frame22}>
            <div className={styles.div2}>192.168.1.45</div>
          </Box>
        </Box>
        <Box className={styles.frame23}>
          <div className={styles.oct242023}>Oct 24, 2023 • 14:22:10</div>
        </Box>
      </Box>
    </Box>
  );
};

Table.propTypes = {
  className: PropTypes.string,
};

export default Table;
