import { Tooltip } from "@mui/material";
import { Toolbar, ToolbarButton } from "@mui/x-data-grid";
import React from "react";
import { PieChart } from "lucide-react";

// type ToolbarProps = {
//   showGraph: boolean;
// };

export default function CustomToolbarTableGraph() {
  // { showGraph }: ToolbarProps
  const [showToolbarGraph, setShowGraph] = React.useState(false);

  return (
    <Toolbar>
      <Tooltip title="Exibir Gráfico">
        <ToolbarButton
          id="show-graph-trigger"
          aria-controls="show-graph"
          aria-haspopup="false"
          onClick={() => setShowGraph(!showToolbarGraph)}
        >
          <PieChart fontSize="small" />
        </ToolbarButton>
      </Tooltip>
    </Toolbar>
  );
}
