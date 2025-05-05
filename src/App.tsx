import { Container } from "@mui/material";
import "./App.css";
import { TotalCard } from "./components/dashboard/totalCard";
import DataTableGraph from "./components/dashboard/dataTableGraph";

function App() {
  return (
    <>
      <Container
        sx={{
          display: "flex",
          gap: "1.375rem",
          justifyContent: "center",
        }}
      >
        <TotalCard title="Dispositivos" value={1000} />
        <TotalCard title="Playlists" value={50} />
        <TotalCard title="Vídeos" value={450} />
        <TotalCard title="Usuários" value={40} />
      </Container>
      <DataTableGraph />
    </>
  );
}

export default App;
