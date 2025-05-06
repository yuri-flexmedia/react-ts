import {
  TableContainer,
  TableHead,
  Table,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
} from "@mui/material";

// function createData(name: string, term: string, state?: string) {
//   return { name, term, state };
// }

// const rows = [createData("Weslley Abrey", "26/04/2025")];

type TUserListTableProps = {
  title: string;
  data: {
    name: string;
    term: string;
    state?: string;
  }[];
};

export default function UserListTable({ title, data }: TUserListTableProps) {
  const showStateColumn = data.some((item) => item.state !== undefined);

  return (
    <TableContainer
      component={Paper}
      sx={{
        // maxWidth: "12rem",
        minWidth: "25%",
        display: "flex",
        flexGrow: 1,
        flexDirection: "column",
        flexBasis: "17rem",
      }}
    >
      <Typography variant="h6" pt={2} pl={2} fontWeight={500}>
        {title}
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">Nome</TableCell>
            {showStateColumn && <TableCell>Estado</TableCell>}
            <TableCell align="right">Vigência</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell>{row.name}</TableCell>
              {showStateColumn && <TableCell>{row.state}</TableCell>}
              <TableCell align="right">{row.term}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
