import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import MyProfileChart from "./MyProfileChart";
import styles from "../../Crypto/MyProfile/MyProfile.module.css";

const MyProfile = () => {
  // Dropdown
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
            My Profile
          </Typography>

          <Box>
            <IconButton
              onClick={handleClick}
              size="small"
              aria-controls={open ? "account-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
            >
              <MoreHorizIcon />
            </IconButton>
          </Box>
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: "visible",
                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                mt: 1.5,
                "& .MuiAvatar-root": {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                "&:before": {
                  content: '""',
                  display: "block",
                  position: "absolute",
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: "background.paper",
                  transform: "translateY(-50%) rotate(45deg)",
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
          >
            <MenuItem sx={{ fontSize: "14px" }}>Edit Profile</MenuItem>
            <MenuItem sx={{ fontSize: "14px" }}>Settings</MenuItem>
          </Menu>
        </Box>
        
        {/* MyProfileChart */}
        <MyProfileChart />
        
        {/* list */}
        <ul className={styles.list}>
          <li>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src="/images/bitcoin2.png" alt="bitcoin" />
              <Box sx={{ ml: "10px" }}>
                <Typography
                  as="h5"
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  Bitcoin
                </Typography>

                <Typography as="span">(BTC) 3.8%</Typography>
              </Box>
            </Box>

            <Box textAlign="right">
              <Typography as="p" fontWeight="500">
                BTC 0.00251068
              </Typography>
              <Typography as="p" fontWeight="500" color="#00B69B">
                $13,6218602
              </Typography>
            </Box>
          </li>

          <li>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src="/images/ethereum.png" alt="ethereum" />
              <Box sx={{ ml: "10px" }}>
                <Typography
                  as="h5"
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  Ethereum
                </Typography>

                <Typography as="span">(ETH) 0.25%</Typography>
              </Box>
            </Box>

            <Box textAlign="right">
              <Typography as="p" fontWeight="500">
                ETH 0.00251068
              </Typography>
              <Typography as="p" fontWeight="500" color="#00B69B">
                $13,6218602
              </Typography>
            </Box>
          </li>

          <li>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src="/images/comp-bidr.png" alt="comp-bidr" />
              <Box sx={{ ml: "10px" }}>
                <Typography
                  as="h5"
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  Comp Bidr
                </Typography>

                <Typography as="span">(BDR) 3.8%</Typography>
              </Box>
            </Box>

            <Box textAlign="right">
              <Typography as="p" fontWeight="500">
                BDR 0.001068
              </Typography>
              <Typography as="p" fontWeight="500" color="#00B69B">
                $13,6218602
              </Typography>
            </Box>
          </li>

          <li>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src="/images/matic2.png" alt="matic2" />
              <Box sx={{ ml: "10px" }}>
                <Typography
                  as="h5"
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  Matic
                </Typography>

                <Typography as="span">(MTC) 3.02%</Typography>
              </Box>
            </Box>

            <Box textAlign="right">
              <Typography as="p" fontWeight="500">
                MTC 0.00251068
              </Typography>
              <Typography as="p" fontWeight="500" color="#00B69B">
                $13,6218602
              </Typography>
            </Box>
          </li>

          <li>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <img src="/images/litecoin.png" alt="litecoin" />
              <Box sx={{ ml: "10px" }}>
                <Typography
                  as="h5"
                  sx={{
                    fontSize: 15,
                    fontWeight: 500,
                  }}
                >
                  Litecoin
                </Typography>

                <Typography as="span">(LTC) 1.8%</Typography>
              </Box>
            </Box>

            <Box textAlign="right">
              <Typography as="p" fontWeight="500">
                LTC 0.00251068
              </Typography>
              <Typography as="p" fontWeight="500" color="#00B69B">
                $13,6218602
              </Typography>
            </Box>
          </li>
        </ul>
      </Card>
    </>
  );
};

export default MyProfile;
