import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useFireStore } from "../hooks/useFireStore";

// 地名、１、２、３、
const columns = [
  { id: "place", label: "Place", minWidth: 170 },
  { id: "hint1", label: "Hint1(Object)", minWidth: 100 },
  {
    id: "hint2",
    label: "Hint2(Description)",
    minWidth: 170
  },
  {
    id: "hint3",
    label: "Hint3(City)",
    minWidth: 170
  }
];

function createRows(questions) {
  let rowArr = [];
  questions.map(question => {
    rowArr.push(
      { place: question.name, hint1: question.hints[0], hint2: question.hints[1], hint3: question.hints[2] }
    );
  });
  return rowArr;
}

export default function StickyHeadTable() {
  const [rows, setRows] = React.useState([]);
  const { questions } = useFireStore();
  React.useEffect(() => {
    if (questions.length !== 0) {
      setRows(createRows(questions));
    }
    // eslint-disable-next-line
  }, [questions]);

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label='sticky table'>
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.code}>
                    {columns.map(column => {
                      const value = row[column.id];
                      console.log("value", value);
                      console.log("value", row);
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
