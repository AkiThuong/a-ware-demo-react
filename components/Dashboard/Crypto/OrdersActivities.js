import React from "react";
import { Box } from "@mui/material";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ProgressBar from "@ramonak/react-progress-bar";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

const OrdersActivities = () => {
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
        {/* Card Header */}
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
            Orders Activities
          </Typography>

          <Box>
            <Button
              size="small"
              sx={{
                fontSize: 14,
                textTransform: "capitalize",
                fontWeight: "normal",
                color: "#5B5B98",
                padding: "2px 10px",
                minWidth: "auto",
              }}
            >
              Buy
            </Button>

            <Button
              size="small"
              sx={{
                fontSize: 14,
                textTransform: "capitalize",
                fontWeight: "normal",
                color: "#5B5B98",
                padding: "0",
                padding: "2px 10px",
                minWidth: "auto",
              }}
            >
              Sell
            </Button>

            <Button
              size="small"
              sx={{
                fontSize: 14,
                textTransform: "capitalize",
                fontWeight: "normal",
                color: "#5B5B98",
                padding: "0",
                padding: "2px 10px",
                minWidth: "auto",
              }}
            >
              All
            </Button>
          </Box>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            boxShadow: "none",
            maxHeight: "440px",
            overflowY: "auto",
          }}
        >
          <Table
            sx={{ minWidth: 1050 }}
            aria-label="Orders Activities"
            className="dark-table"
          >
            <TableHead sx={{ background: "#F7FAFF" }}>
              <TableRow>
                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Type
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                >
                  Change
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Date
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Time
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  USD Amount
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Supply
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Amount
                </TableCell>

                <TableCell
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "13.5px" }}
                  align="center"
                >
                  Operation
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup sx={{ justifyContent: "flex-end" }} max={2}>
                    <Avatar src="/images/dollar.png" alt="dollar" />
                    <Avatar src="/images/bitcoin3.png" alt="bitcoin" />
                  </AvatarGroup>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px" 
                    className="ml-10px"
                  >
                    Bitcoin{" "}
                    <span style={{ fontWeight: "400", color: "#5B5B98" }}>
                      (BTC)
                    </span>
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography as="p" className="successColor" fontSize="14px">
                    +2.48%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  04 June 2023	
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  11:37 PM
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>12,565.75</b> USD
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="13px" textAlign="end" mb="2px">
                      180548.00 BTC
                    </Typography>

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
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 0.2040</b> BTC
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  <span className="successBadge">Buy</span>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup sx={{ justifyContent: "flex-end" }} max={2}>
                    <Avatar src="/images/matic3.png" alt="matic" />
                    <Avatar src="/images/ethereum2.png" alt="ethereum" />
                  </AvatarGroup>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    className="ml-10px"
                  >
                    Ethereum{" "}
                    <span style={{ fontWeight: "400", color: "#5B5B98" }}>
                      (ETH)
                    </span>
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography as="p" className="dangerColor" fontSize="14px">
                    -1.11%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  05 June 2023
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  12:00 PM
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>11,232.22</b> USD
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="13px" textAlign="end" mb="2px">
                      220548.22 ETH
                    </Typography>

                    <ProgressBar
                      completed={55}
                      height="5px"
                      labelSize="0px"
                      baseBgColor="#eeeeee"
                      bgColor="#757FEF"
                    />
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 0.4453</b> ETH
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  <span className="dangerBadge">Transfer</span>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup sx={{ justifyContent: "flex-end" }} max={2}>
                    <Avatar src="/images/dollar.png" alt="dollar" />
                    <Avatar src="/images/dash.png" alt="dash" />
                  </AvatarGroup>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    className="ml-10px"
                  >
                    Dash{" "}
                    <span style={{ fontWeight: "400", color: "#5B5B98" }}>
                      (DASH)
                    </span>
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography as="p" className="successColor" fontSize="14px">
                    +0.32%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  04 June 2023
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  09:33 AM
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>32,222.23</b> USD
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="13px" textAlign="end" mb="2px">
                      110148.43 DASH
                    </Typography>

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
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 0.3421</b> DASH
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  <span className="primaryBadge">Sell</span>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup sx={{ justifyContent: "flex-end" }} max={2}>
                    <Avatar src="/images/bitcoin3.png" alt="bitcoin" />
                    <Avatar src="/images/litecoin2.png" alt="litecoin" />
                  </AvatarGroup>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    className="ml-10px"
                  >
                    Litecoin{" "}
                    <span style={{ fontWeight: "400", color: "#5B5B98" }}>
                      (LTC)
                    </span>
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography as="p" className="dangerColor" fontSize="14px">
                    -3.06%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  03 June 2023
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  10:00 PM
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>7,432.43</b> USD
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="13px" textAlign="end" mb="2px">
                      321548.01 LTC
                    </Typography>

                    <ProgressBar
                      completed={60}
                      height="5px"
                      labelSize="0px"
                      baseBgColor="#eeeeee"
                      bgColor="#757FEF"
                    />
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 1.1140</b> LTC
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  <span className="successBadge">Buy</span>
                </TableCell>
              </TableRow>

              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AvatarGroup sx={{ justifyContent: "flex-end" }} max={2}>
                    <Avatar src="/images/matic3.png" alt="matic" />
                    <Avatar src="/images/dollar.png" alt="dollar" />
                  </AvatarGroup>
                  <Typography
                    as="h5"
                    fontWeight="500"
                    fontSize="15px"
                    className="ml-10px"
                  >
                    Dollar{" "}
                    <span style={{ fontWeight: "400", color: "#5B5B98" }}>
                      (USD)
                    </span>
                  </Typography>
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Typography as="p" className="successColor" fontSize="14px">
                    +1.11%
                  </Typography>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  02 June 2023
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontSize: "14px",
                  }}
                >
                  08:21 AM
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>32,565.75</b> USD
                </TableCell>

                <TableCell sx={{ borderBottom: "1px solid #F7FAFF" }}>
                  <Box>
                    <Typography fontSize="13px" textAlign="end" mb="2px">
                      200548.00 BTC
                    </Typography>

                    <ProgressBar
                      completed={40}
                      height="5px"
                      labelSize="0px"
                      baseBgColor="#eeeeee"
                      bgColor="#757FEF"
                    />
                  </Box>
                </TableCell>

                <TableCell
                  align="center"
                  sx={{ borderBottom: "1px solid #F7FAFF", fontSize: "14px" }}
                >
                  <b style={{ fontWeight: "500" }}>+ 2.2040</b> USD
                </TableCell>

                <TableCell
                  align="center"
                  sx={{
                    borderBottom: "1px solid #F7FAFF",
                    fontWeight: "500",
                    fontSize: "13px",
                  }}
                >
                  <span className="primaryBadge">Sell</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};

export default OrdersActivities;
