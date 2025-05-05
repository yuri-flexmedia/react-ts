import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  //   { field: "id", headerName: "ID", width: 130,  },
  { field: "title", headerName: "Titulo", width: 100, flex: 0.5 },
  { field: "label", headerName: "Marca", width: 130, flex: 1 },
  { field: "play_count", headerName: "Reproduções", width: 150 },
];

const rows = [
  { id: 1, title: "Opa", label: "MARCA MARCADA", play_count: 4444 },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTableGraph() {
  return (
    <Paper
      sx={{
        height: 400,
        maxWidth: "500px",
        borderRadius: 2,
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        // checkboxSelection
        sx={{ border: 0, borderRadius: 2 }}
        showToolbar
      />
    </Paper>
  );
}
