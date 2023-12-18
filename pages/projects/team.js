import React from "react";
import { Box, Typography } from "@mui/material";
import Link from 'next/link';
import styles from '@/styles/PageTitle.module.css';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid"; 
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import Button from '@mui/material/Button'; 
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

const TeamMembers = [
  {
    id: 1,
    name: "Jason Haston",
    image: "/images/member1.png",
    designation: "Team Leader",
    teamName: "Laravel Team",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member1.png",
      },
      {
        id: 2,
        image: "/images/member2.png",
      },
      {
        id: 3,
        image: "/images/member3.png",
      },
      {
        id: 4,
        image: "/images/member4.png",
      },
      {
        id: 5,
        image: "/images/member5.png",
      },
      {
        id: 6,
        image: "/images/member6.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Laravel Project",
    totalTask: "40/80",
    taskProgress: "50",
  },
  {
    id: 2,
    name: "Willie Miller",
    image: "/images/member2.png",
    designation: "Team Leader",
    teamName: "Frontend Developer Team",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member2.png",
      },
      {
        id: 2,
        image: "/images/member3.png",
      },
      {
        id: 3,
        image: "/images/member4.png",
      },
      {
        id: 4,
        image: "/images/member5.png",
      },
      {
        id: 5,
        image: "/images/member6.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Web Design",
    totalTask: "60/100",
    taskProgress: "60",
  },
  {
    id: 3,
    name: "Jordan Stevenson",
    image: "/images/member3.png",
    designation: "Team Leader",
    teamName: "Web Design Team",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member3.png",
      },
      {
        id: 2,
        image: "/images/member4.png",
      },
      {
        id: 3,
        image: "/images/member5.png",
      },
      {
        id: 4,
        image: "/images/member6.png",
      },
      {
        id: 5,
        image: "/images/member7.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "HTML Project",
    totalTask: "70/100",
    taskProgress: "70",
  },
  {
    id: 4,
    name: "Stevenson",
    image: "/images/member4.png",
    designation: "Team Leader",
    teamName: "ReactJS Team",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member4.png",
      },
      {
        id: 2,
        image: "/images/member5.png",
      },
      {
        id: 3,
        image: "/images/member6.png",
      },
      {
        id: 4,
        image: "/images/member7.png",
      },
      {
        id: 5,
        image: "/images/member8.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "React App",
    totalTask: "80/100",
    taskProgress: "80",
  },
  {
    id: 5,
    name: "Marnie Flowers",
    image: "/images/member5.png",
    designation: "Team Leader",
    teamName: "Angular JS Team",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member5.png",
      },
      {
        id: 2,
        image: "/images/member6.png",
      },
      {
        id: 3,
        image: "/images/member7.png",
      },
      {
        id: 4,
        image: "/images/member8.png",
      },
      {
        id: 5,
        image: "/images/member9.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Angular App",
    totalTask: "90/100",
    taskProgress: "90",
  },
  {
    id: 6,
    name: "Steven Hari",
    image: "/images/member6.png",
    designation: "Team Leader",
    teamName: "Vue.js Team",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member6.png",
      },
      {
        id: 2,
        image: "/images/member7.png",
      },
      {
        id: 3,
        image: "/images/member8.png",
      },
      {
        id: 4,
        image: "/images/member9.png",
      },
      {
        id: 5,
        image: "/images/member10.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Vue app",
    totalTask: "100/100",
    taskProgress: "100",
  },
  {
    id: 7,
    name: "Keith",
    image: "/images/member7.png",
    designation: "Team Leader",
    teamName: "Content Writing",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member7.png",
      },
      {
        id: 2,
        image: "/images/member8.png",
      },
      {
        id: 3,
        image: "/images/member9.png",
      },
      {
        id: 4,
        image: "/images/member10.png",
      },
      {
        id: 5,
        image: "/images/member11.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Blogging Template",
    totalTask: "40/100",
    taskProgress: "40",
  },
  {
    id: 8,
    name: "Marion",
    image: "/images/member8.png",
    designation: "Team Leader",
    teamName: "E-commerce",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member9.png",
      },
      {
        id: 2,
        image: "/images/member1.png",
      },
      {
        id: 3,
        image: "/images/member2.png",
      },
      {
        id: 4,
        image: "/images/member3.png",
      },
      {
        id: 5,
        image: "/images/member4.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "E-commerce Template",
    totalTask: "55/100",
    taskProgress: "55",
  },
  {
    id: 9,
    name: "Marshall",
    image: "/images/member9.png",
    designation: "Team Leader",
    teamName: "App Development",
    introText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    teamMemberLists: [
      {
        id: 1,
        image: "/images/member9.png",
      },
      {
        id: 2,
        image: "/images/member3.png",
      },
      {
        id: 3,
        image: "/images/member4.png",
      },
      {
        id: 4,
        image: "/images/member5.png",
      },
      {
        id: 5,
        image: "/images/member6.png",
      },
    ],
    viewDetailsLink: "#",
    projectName: "Admin Template",
    totalTask: "40/100",
    taskProgress: "40",
  },
]

const Team = () => {
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
      {/* Page title */}
      <div className={styles.pageTitle}>
        <h1>Team</h1>
        <ul>
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li>Team</li>
        </ul>
      </div>

      <Grid
        container
        justifyContent="center"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 1, md: 1, lg: 1, xl: 2 }}
      >
        {TeamMembers.map((member) => (
          <Grid item xs={12} md={6} lg={6} xl={4} key={member.id}>
            <Card
              sx={{
                boxShadow: "none",
                borderRadius: "10px", 
                mb: "15px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center", 
                  p: "20px",
                  background: '#e5e5e5'
                }}
                className="team-card-dark"
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <img 
                    src={member.image}
                    alt="Member"
                    width="55px"
                    height="55px"
                    className="borRadius100"
                    style={{ border: '2px solid #757FEF' }}
                  />
                  <Box className="ml-1">
                    <Typography
                      as="h3"
                      sx={{
                        fontSize: 15,
                        fontWeight: 500,
                      }}
                    >
                      {member.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: 13,
                      }}
                    >
                      {member.designation}
                    </Typography>
                  </Box>
                </Box> 

                <Box
                  sx={{
                    display: "inline-block",
                  }}
                >
                  <Tooltip title="Remove" placement="top">
                    <IconButton
                      aria-label="remove"
                      size="small"
                      color="danger"
                      className="danger"
                      sx={{ 
                        background: '#fff',
                        ml: '5px'
                      }}
                    >
                      <DeleteIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Rename" placement="top">
                    <IconButton
                      aria-label="rename"
                      size="small"
                      color="primary"
                      className="primary"
                      sx={{ 
                        background: '#fff',
                        ml: '5px'
                      }}
                    >
                      <DriveFileRenameOutlineIcon fontSize="inherit" />
                    </IconButton>
                  </Tooltip>
                </Box>
              </Box>
              
              <Box sx={{ p: '20px' }}>
                <Box mb={2}>
                  <Typography
                    as="h3"
                    sx={{
                      fontSize: 15,
                      fontWeight: 500,
                      mb: "5px"
                    }}
                  >
                    {member.teamName}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 13,
                    }}
                  >
                    {member.introText}
                  </Typography>
                </Box>
 
                <Box mb={2}>
                  <Box 
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'end'
                    }} 
                  >
                    <Box>
                      <Typography
                        as="h3"
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          mb: "5px"
                        }}
                      >
                        {member.projectName}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: 13,
                        }}
                      >
                        Task: {member.totalTask}
                      </Typography>
                    </Box>

                    <Box>
                      <Typography
                        sx={{
                          fontSize: 13,
                        }}
                      >
                        {member.taskProgress}% Completed
                      </Typography>
                    </Box>
                  </Box> 
                </Box>

                <Box 
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }} 
                >
                  <Box>
                    <AvatarGroup max={4}>
                      {member.teamMemberLists.map((team) => (
                        <Avatar key={team.id} src={team.image} alt="Remy Sharp" />
                      ))}
                    </AvatarGroup>
                  </Box>

                  <Box>
                    <Link href={member.viewDetailsLink} className="text-decoration-none">
                      <Button 
                        variant="contained"
                        color="secondary"
                        sx={{
                          borderRadius: '4px',
                          textTransform: "capitalize",
                          color: "#fff !important",
                        }}
                      >
                        view details
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Team;
