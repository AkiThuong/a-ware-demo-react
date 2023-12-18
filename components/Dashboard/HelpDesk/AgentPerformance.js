import * as React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper"; 
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";

function AgentPerformances(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

AgentPerformances.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function createData(
  userImg,
  name,
  userName,
  ratings,
  totalCalls,
  callsAnswered,
  averageSpeedOfAnswer,
  Adherence
) {
  return {
    userImg,
    name,
    userName,
    ratings,
    totalCalls,
    callsAnswered,
    averageSpeedOfAnswer,
    Adherence,
  };
}

const rows = [
  createData(
    "/images/user1.png",
    "Jordan Stevenson",
    "@jstevenson5c",
    "4.5",
    "185",
    "172",
    "2:10s",
    "91%"
  ),
  createData(
    "/images/user2.png",
    "Lucile Young",
    "@lyoung4a",
    "3.5",
    "399",
    "269",
    "3:20s",
    "95%"
  ),
  createData(
    "/images/user3.png",
    "Francis Frank",
    "@ffrank7e",
    "5",
    "499",
    "490",
    "5:25s",
    "99%"
  ),
  createData(
    "/images/user4.png",
    "Phoebe Patterson",
    "@ppatterson2g",
    "4.3",
    "199",
    "149",
    "2:30s",
    "77%"
  ),
  createData(
    "/images/user5.png",
    "James Andy",
    "@andyjm32",
    "4.7",
    "150",
    "129",
    "4:31s",
    "65%"
  ),
  createData(
    "/images/user6.png",
    "Sarah Taylor",
    "@taylors32",
    "4.9",
    "266",
    "250",
    "2:39s",
    "85%"
  ),
  createData(
    "/images/user7.png",
    "David Warner",
    "@davidwabc2",
    "5",
    "477",
    "470",
    "3:21s",
    "95%"
  ),
  createData(
    "/images/user8.png",
    "Steven Smith",
    "@ssmith542",
    "4.8",
    "199",
    "188",
    "5:21s",
    "91%"
  ),
].sort((a, b) => (a.name < b.name ? -1 : 1));
export default function AgentPerformance() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(6);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Card
        sx={{
          boxShadow: "none",
          borderRadius: "10px",
          p: "25px 25px 10px",
          mb: "15px",
        }}
      >
        <Box
          sx={{
            paddingBottom: "10px",
          }}
        >
          <Typography
            as="h3"
            sx={{
              fontSize: 18,
              fontWeight: 500,
            }}
          >
            Performance of the Agents
          </Typography>
        </Box>

        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
          }}
        >
          <Table 
            sx={{ minWidth: 900 }} 
            aria-label="custom pagination table"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}>
                  User
                </TableCell>

                <TableCell style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}>
                  Ratings
                </TableCell>

                <TableCell
                  align="center"
                  style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Total Calls
                </TableCell>

                <TableCell
                  align="center"
                  style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Calls Answered
                </TableCell>

                <TableCell
                  align="center"
                  style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Speed of Answer
                </TableCell>

                <TableCell
                  align="center"
                  style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Adherence
                </TableCell>

                <TableCell
                  align="center"
                  style={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Action
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {(rowsPerPage > 0
                ? rows.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : rows
              ).map((row) => (
                <TableRow key={row.name}>
                  <TableCell
                    style={{ width: 250, borderBottom: "1px solid #F7FAFF" }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={row.userImg}
                        alt="Product Img"
                        width={40}
                        height={40}
                        className="borRadius100"
                      />

                      <Box className="ml-10px">
                        <Typography
                          sx={{
                            fontWeight: "500",
                            fontSize: "14px",
                          }}
                          as="h5"
                        >
                          {row.name}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "12px",
                            color: "#A9A9C8",
                          }}
                        >
                          {row.userName}
                        </Typography>
                      </Box>
                    </Box>
                  </TableCell>

                  <TableCell
                    style={{
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "14px",
                    }}
                  >
                    <i 
                      className="ri-star-fill"
                      style={{ color: '#F7931A' }}
                    ></i> {row.ratings}
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px", }}
                  >
                    {row.totalCalls}
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px", }}
                  >
                    {row.callsAnswered}
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px", }}
                  >
                    {row.averageSpeedOfAnswer}
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px", }}
                  >
         
                    <span className="successBadge">{row.Adherence}</span>
                  </TableCell>

                  <TableCell
                    align="center"
                    style={{
                      fontWeight: 500,
                      borderBottom: "1px solid #F7FAFF",
                      fontSize: "12px",
                    }}
                  >
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
                          className="danger mr-2px"
                          sx={{ background: '#ece5e5' }} 
                        >
                          <DeleteIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>

                      <Tooltip title="Edit" placement="top">
                        <IconButton
                          aria-label="edit"
                          size="small"
                          color="primary"
                          className="primary ml-2px"
                          sx={{ background: '#ece5e5' }} 
                        >
                          <DriveFileRenameOutlineIcon fontSize="inherit" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}

              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell
                    colSpan={7}
                    style={{ borderBottom: "1px solid #F7FAFF" }}
                  />
                </TableRow>
              )}
            </TableBody>

            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
                  colSpan={7}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{
                    inputProps: {
                      "aria-label": "rows per page",
                    },
                    native: true,
                  }}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                  ActionsComponent={AgentPerformances}
                  style={{ borderBottom: "none" }}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
}
