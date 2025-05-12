/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, Typography } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { pieArcLabelClasses, PieChart } from "@mui/x-charts";
import { ptBR } from "@mui/x-data-grid/locales";

const columns: GridColDef[] = [
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
  faded: {
    innerRadius: number;
    additionalRadius: number;
    color: string;
  };
  data: {
    id: number;
    label: string;
    value: number;
  }[];
};

type DataTableGraphProps = {
  dataRows?: DataRow[];
  graphData?: GraphDataProps[];
  tableTitle?: string;
  graphTitle?: string;
};

export function DataTableGraph({
  dataRows = [],
  graphData = [],
  tableTitle = "Tabela",
  graphTitle = "Gráfico",
}: DataTableGraphProps) {
  const hasBothData = dataRows.length > 0 && graphData.length > 0;

  return (
    <Card
      sx={{
        // height: 400,
        width: { xs: "100%", md: hasBothData ? "100%" : "49%" },
        borderRadius: 2,
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        {dataRows.length > 0
          ? DataTable(dataRows, tableTitle) // Tabela
          : null}
        {graphData.length > 0
          ? DataGraph(graphData, graphTitle, hasBothData) // Pizza
          : null}
      </CardContent>
    </Card>
  );
}

export function DataTable(dataRows: DataRow[], tableTitle: string) {
  return (
    <DataGrid
      localeText={{
        ...ptBR.components.MuiDataGrid.defaultProps.localeText,
        paginationDisplayedRows: ({ from, to, count }) =>
          `${from}–${to} de ${count !== -1 ? count : `mais de ${to}`}`,
      }}
      rows={dataRows}
      columns={columns}
      initialState={{ pagination: { paginationModel } }}
      pageSizeOptions={[5, 10]}
      sx={{ border: 0, borderRadius: 2 }}
      showToolbar
      paginationMeta={{ hasNextPage: false }}
      label={tableTitle}
    />
  );
}

export function DataGraph(
  data: GraphDataProps[],
  graphTitle: string,
  maximized = false
) {
  return (
    <>
      <Typography variant="h6">{graphTitle}</Typography>
      <PieChart
        series={data}
        height={250}
        width={300}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fontWeight: "bold",
            fontFamily: "Segoe UI",
          },
          flexDirection: !maximized ? "column-reverse" : "row-reverse",
          gap: "2.5rem",
        }}
        slotProps={{
          legend: {
            direction: !maximized ? "horizontal" : "vertical",
            // direction: "horizontal",
          },
          loadingOverlay: {},
        }}
      />
    </>
  );
}
