import { Card, CardContent, Typography } from "@mui/material";

type TDashboardTotalCard = {
  title: string;
  value: number;
};

export const TotalCard = ({ title, value }: TDashboardTotalCard) => {
  return (
    <Card
      sx={{
        minWidth: "160px",
        maxWidth: "fit-content",
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#B0B0AF",
          gap: 1,
          px: 0.875,
          py: 0.75,
          pb: "0.75rem !important",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "500", color: "#FFF" }}>
          {title}
        </Typography>
        <Typography
          fontSize={24}
          sx={{
            backgroundColor: "#E9E9E9",
            py: 1,
            px: 2,
            borderRadius: 2,
            fontWeight: "700",
          }}
        >
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
};
