import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styles from "../../Crypto/UserActivities/UserActivities.module.css";

const UserActivities = () => {
  // Select Form
  const [select, setSelect] = React.useState("");
  const handleChange = (event) => {
    setSelect(event.target.value);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px",
          mb: "15px",
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid #EEF0F7",
            paddingBottom: "10px",
            mb: "20px",
          }}
          className="for-dark-bottom-border"
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            User Activities
          </Typography>
          <Box>
            <FormControl sx={{ minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small" sx={{ fontSize: "14px" }}>
                Select
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={select}
                label="Select"
                onChange={handleChange}
                sx={{ fontSize: "14px" }}
                className="select"
              >
                <MenuItem value={0} sx={{ fontSize: "14px" }}>
                  This Week
                </MenuItem>
                <MenuItem value={1} sx={{ fontSize: "14px" }}>
                  This Month
                </MenuItem>
                <MenuItem value={4} sx={{ fontSize: "14px" }}>
                  This Year
                </MenuItem>
                <MenuItem value={4} sx={{ fontSize: "14px" }}>
                  All Time
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Activities list */}
        <ul className={styles.list}>
          <li>
            <div className={styles.content}>
              <i className="ri-user-line"></i>
              <div>
                <h5>1,802</h5>
                <span>Visits by Day</span>
              </div>
            </div>
            <img src="/images/chart1.png" alt="chart" />
          </li>

          <li>
            <div className={styles.content}>
              <i className="ri-user-add-line"></i>
              <div>
                <h5>1605</h5>
                <span>Referral Join</span>
              </div>
            </div>
            <img src="/images/chart2.png" alt="chart" />
          </li>
        </ul>
      </Card>
    </>
  );
};

export default UserActivities;
