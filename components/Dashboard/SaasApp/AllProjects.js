import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import ProgressBar from "@ramonak/react-progress-bar";

const AllProjects = () => {
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "15px",
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
            All Projects
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
                <MenuItem value={0} sx={{ fontSize: "13px" }}>
                  Today
                </MenuItem>
                <MenuItem value={1} sx={{ fontSize: "13px" }}>
                  Last 7 Days
                </MenuItem>
                <MenuItem value={2} sx={{ fontSize: "13px" }}>
                  This Month
                </MenuItem>
                <MenuItem value={3} sx={{ fontSize: "13px" }}>
                  Last 12 Months
                </MenuItem>
                <MenuItem value={4} sx={{ fontSize: "13px" }}>
                  All Time
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            maxHeight: "370px",
            overflowY: "auto",
          }}
        >
          <Table
            sx={{ minWidth: 700 }}
            aria-label="simple table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Project Name
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Members
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Budget
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Status
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Completion
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="right"
                >
                  Due Date
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="13px" 
                  >
                    Product UI/UX Design
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/images/user1.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/user2.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="/images/user3.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                  </AvatarGroup>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $14,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="successBadge">Active</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">70%</Typography>

                    <ProgressBar
                      completed={70}
                      height="5px"
                      labelSize="0px"
                      baseBgColor="#eeeeee"
                      bgColor="#757FEF"
                    />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  08 Mar 2021
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="13px" 
                  >
                    Public Beta Release
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/images/user4.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/user5.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                  </AvatarGroup>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $14,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="primaryBadge">Complete</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">100%</Typography>
                    <ProgressBar
                      completed={100}
                      height="5px"
                      labelSize="0px"
                      baseBgColor="#eeeeee"
                      bgColor="#757FEF"
                    />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  17 Apr 2021
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="13px" 
                  >
                    SEO Marketing
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/images/user6.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/user7.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                  </AvatarGroup>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $12,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="primaryBadge">Complete</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">100%</Typography>
                    <ProgressBar
                      completed={100}
                      height="5px"
                      labelSize="0px"
                      baseBgColor="#eeeeee"
                      bgColor="#757FEF"
                    />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  10 Sep 2021
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="13px" 
                  >
                    New Office Building
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/images/user1.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/user2.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="/images/user3.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                  </AvatarGroup>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $9,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="dangerBadge">Pending</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">0%</Typography>
                    <ProgressBar
                      completed={0}
                      height="5px"
                      labelSize="0px"
                      baseBgColor="#eeeeee"
                      bgColor="#757FEF"
                    />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  06 Aug 2022
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="13px" 
                  >
                    Product Devlopment
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <AvatarGroup max={4} sx={{ justifyContent: "flex-end" }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/images/user7.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/user8.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                    <Avatar
                      alt="Cindy Baker"
                      src="/images/user9.png"
                      sx={{ width: "25px", height: "25px" }}
                    />
                  </AvatarGroup>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  $16,000
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    fontWeight: 500,
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "11px",
                  }}
                >
                  <span className="successBadge">Active</span>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="12px">80%</Typography>
                    <ProgressBar
                      completed={80}
                      height="5px"
                      labelSize="0px"
                      baseBgColor="#eeeeee"
                      bgColor="#757FEF"
                    />
                  </Box>
                </TableCell>

                <TableCell
                  align="right"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13px" }}
                >
                  08 Mar 2022
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default AllProjects;
