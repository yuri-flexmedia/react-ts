import { Container } from "@mui/material";
import "./App.css";
import { TotalCard } from "./components/dashboard/totalCard";
import { DataTableGraph } from "./components/dashboard/dataTableGraph";
import UserListTable from "./components/dashboard/userListTable";
import { DATA_ROWS, GRAPH_DATA } from "./mocks/rows";

function createData(name: string, term: string, state?: string) {
  return { name, term, state };
}

const rows = [createData("Weslley Abrey", "26/04/2025")];

const empresaRows = [
  createData("Flexmedia", "26/04/2025"),
  createData("Daoca", "05/05/2025"),
  createData("Plaxis", "05/05/2026"),
];

function App() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          gap: "1.375rem",
          flexDirection: "column",
        }}
      >
        <Container
          sx={{
            display: "flex",
            gap: "1.375rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <TotalCard title="Dispositivos" value={1000} />
          <TotalCard title="Playlists" value={50} />
          <TotalCard title="Vídeos" value={450} />
          <TotalCard title="Usuários" value={40} />
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "1.375rem",
            width: "100%",
            flexWrap: "wrap",
          }}
        >
          <DataTableGraph dataRows={DATA_ROWS} />
          <DataTableGraph graphData={GRAPH_DATA} />
          <DataTableGraph dataRows={DATA_ROWS} graphData={GRAPH_DATA} />
        </Container>
        <Container
          sx={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <UserListTable data={empresaRows} title="Minhas Empresas" />
          <UserListTable
            data={rows}
            title="Meus Sócios (Administradores de Tenants)"
          />
          <UserListTable data={rows} title="Meus Gerentes (Tenants)" />
          <UserListTable data={rows} title="Meus Usuários" />
        </Container>
      </Container>
    </>
  );
}

export default App;
