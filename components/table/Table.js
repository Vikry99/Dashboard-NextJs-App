import React, { useState, useEffect } from "react";
import Axios from "axios";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AutoDeleteIcon from "@mui/icons-material/AutoDelete";
import AddTaskIcon from "@mui/icons-material/AddTask";
import EditIcon from "@mui/icons-material/Edit";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function CustomizedTables() {
  const [limit, setLimit] = useState(3);
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancelled = false;
    if (isCancelled === false) {
      Axios({
        method: "GET",
        headers: "Authorization",
        url: `https://frontend-test-backend.tritronik.com/v1/projects/`,
      })
        .then((result) => setDatas(result.name))
        .catch((err) => console.log(err));

      console.log(datas);
    }
    return () => {
      isCancelled = true;
    };
  }, [datas]);

  return (
    <>
      <>
        <h1>Table Project</h1>
      </>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Owner</StyledTableCell>
              <StyledTableCell align="right">Nama</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
              <StyledTableCell align="right">Tambah</StyledTableCell>
              <StyledTableCell align="right">Edit</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledTableRow>
              <StyledTableCell component="th" scope="row">
                Vikry
              </StyledTableCell>
              <StyledTableCell align="right">Ramadhan</StyledTableCell>
              <StyledTableCell align="right">
                <AutoDeleteIcon />
              </StyledTableCell>
              <StyledTableCell align="right">
                <AddTaskIcon />
              </StyledTableCell>
              <StyledTableCell align="right">
                <EditIcon />
              </StyledTableCell>
            </StyledTableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default CustomizedTables;
