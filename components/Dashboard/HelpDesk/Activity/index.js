import React from "react";
import { Box, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import styles from "../../HelpDesk/Activity/Activity.module.css";

const ActivityTimelineData = [
  {
    id: "1", 
    title: "Drop us an email at [Insert Email Address]",
    text: "We'll get back to you as soon as possible with detailed..",
    icon: "/images/support.png",
    date: "10 Min ago",
  },
  {
    id: "2", 
    title: "Visit our website [Insert Website URL]",
    text: "Initiate a live chat session. Our team will be there to live chat session...",
    icon: "/images/avatar2.png",
    date: "11:47 PM",
  },
  {
    id: "3", 
    title: "Our representatives are available",
    text: "Dial our toll-free number, representative are available..",
    icon: "/images/time.png",
    date: "07 June",
  },
  {
    id: "4", 
    title: "Drop us an email at [Insert Email Address]",
    text: "We'll get back to you as soon as possible with detailed..",
    icon: "/images/support.png",
    date: "05 June",
  },
];

const Activity = () => {
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
          p: "25px 20px",
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
              fontSize: 16,
              fontWeight: 500,
            }}
          >
            Activity
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
            <MenuItem>Last 15 Days</MenuItem>
            <MenuItem>Last Month</MenuItem>
            <MenuItem>Last Year</MenuItem>
          </Menu>
        </Box>

        <div className={styles.timelineList}>
          {ActivityTimelineData.slice(0, 4).map((timeline) => (
            <div className={styles.tList} key={timeline.id}>
              <div className={styles.content}>
                <img src={timeline.icon} alt="Icon" />
                <div>
                  <h5>{timeline.title}</h5>
                  <p className={styles.text}>{timeline.text}</p>
                  <p className={styles.date}>{timeline.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </>
  );
};

export default Activity;
