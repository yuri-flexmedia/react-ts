/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridColDef, Toolbar, ToolbarButton } from "@mui/x-data-grid";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts";
import { InsertChart, InsertChartOutlined } from "@mui/icons-material";
import React from "react";

const columns: GridColDef[] = [
  //   { field: "id", headerName: "ID", width: 130,  },
  { field: "title", headerName: "Titulo", width: 100, flex: 1 },
  { field: "label", headerName: "Marca", width: 130, flex: 1 },
  { field: "play_count", headerName: "Reproduções", width: 150 },
];

const paginationModel = { page: 0, pageSize: 5 };

type DataRow = {
  id: number;
  title: string;
  label: string;
  play_count: number;
};

type GraphDataProps = {
  arcLabel: (item: any) => string;
  arcLabelMinAngle: number;
  arcLabelRadius: string;
  data: {
    id: number;
    label: string;
    value: number;
  }[];
};

type DataTableGraphProps = {
  dataRows: DataRow[];
  graphData: GraphDataProps[];
};

export default function DataTableGraph({
  dataRows,
  graphData,
}: DataTableGraphProps) {
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
          rows={dataRows}
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
