import { Card, CardContent, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridColDef, Toolbar, ToolbarButton } from "@mui/x-data-grid";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts";
import { InsertChart, InsertChartOutlined } from "@mui/icons-material";
import React from "react";
import { defaultizeValueFormatter } from "@mui/x-charts/internals";

const columns: GridColDef[] = [
  //   { field: "id", headerName: "ID", width: 130,  },
  { field: "title", headerName: "Titulo", width: 100, flex: 1 },
  { field: "label", headerName: "Marca", width: 130, flex: 1 },
  { field: "play_count", headerName: "Reproduções", width: 150 },
];

const rows = [
  { id: 1, title: "flexDS", label: "Apresentação FlexDS", play_count: 4717 },
  { id: 2, title: "lancamento web", label: "Lançamento Web", play_count: 3474 },
  { id: 3, title: "promocao daoca", label: "Promoção Daoca", play_count: 2862 },
  {
    id: 4,
    title: "apresentacao plaxis",
    label: "Apresentação Plaxis",
    play_count: 2333,
  },
  {
    id: 5,
    title: "apresentacao plaxis",
    label: "Apresentação Plaxis",
    play_count: 2333,
  },
  {
    id: 6,
    title: "apresentacao plaxis",
    label: "Apresentação Plaxis",
    play_count: 2333,
  },
  {
    id: 7,
    title: "apresentacao plaxis",
    label: "Apresentação Plaxis",
    play_count: 2333,
  },
  {
    id: 8,
    title: "apresentacao plaxis",
    label: "Apresentação Plaxis",
    play_count: 2333,
  },
];

const graphData = [
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arcLabel: (item: any) => `${item.value}`,
    arcLabelMinAngle: 35,
    arcLabelRadius: "60%",
    defaultizeValueFormatter,
    data: [
      { id: 1, label: "Apresentação FlexDS", value: 4717 },
      { id: 2, label: "Lançamento Web", value: 3474 },
      { id: 3, label: "Promoção Daoca", value: 2862 },
      { id: 4, label: "Apresentação Plaxis", value: 2333 },
    ],
  },
];

const paginationModel = { page: 0, pageSize: 5 };

export default function DataTableGraph() {
  const [showToolbarGraph, setShowGraph] = React.useState(false);
  function CustomToolbarTableGraph() {
    return (
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: 16,
            fontWeight: 500,
          }}
        >
          Videos mais assistidos
        </Typography>
        <Tooltip title="Exibir Gráfico">
          <ToolbarButton
            id="show-graph-trigger"
            aria-controls="show-graph"
            aria-haspopup="false"
            onClick={() => setShowGraph(!showToolbarGraph)}
          >
            {showToolbarGraph ? (
              <InsertChart fontSize="small" />
            ) : (
              <InsertChartOutlined fontSize="small" />
            )}
          </ToolbarButton>
        </Tooltip>
      </Toolbar>
    );
  }

  return (
    <Card
      sx={{
        // height: 400,
        width: { xs: "100%", lg: "49%" },
        borderRadius: 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
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
          slots={{ toolbar: CustomToolbarTableGraph }}
        />

        {showToolbarGraph ? (
          <PieChart
            series={graphData}
            width={200}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontWeight: "bold",
                fontFamily: "Segoe UI",
              },
            }}
            hideLegend
          />
        ) : null}
      </CardContent>
    </Card>
  );
}
