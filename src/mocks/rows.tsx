export const DATA_ROWS = [
  { id: 1, title: "flexDS", label: "Apresentação FlexDS", play_count: 4717 },
  { id: 2, title: "lancamento web", label: "Lançamento Web", play_count: 3474 },
  { id: 3, title: "promocao daoca", label: "Promoção Daoca", play_count: 2862 },
  {
    id: 4,
    title: "introducao sap2000",
    label: "Introdução ao SAP2000",
    play_count: 2333,
  },
  {
    id: 5,
    title: "modelagem etabs",
    label: "Modelagem no ETABS",
    play_count: 2150,
  },
  {
    id: 6,
    title: "analise estrutural robot",
    label: "Análise Estrutural no Robot",
    play_count: 1987,
  },
  {
    id: 7,
    title: "resultados safe",
    label: "Resultados no SAFE",
    play_count: 2050,
  },
  {
    id: 8,
    title: "conclusao tqs",
    label: "Conclusão com TQS",
    play_count: 1901,
  },
];

function formatPlayCountMil(count: number): string | number {
  return count >= 1000
    ? (count / 1000).toFixed(1).replace(".0", ",0").replace(".", ",") + " mil"
    : count;
}

export const GRAPH_DATA = [
  {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    arcLabel: (item: any) => `${formatPlayCountMil(item.value)}`,
    innerLabel: 50,
    innerRadius: 50,
    arcLabelMinAngle: 35,
    arcLabelRadius: "50%",
    highlightScope: { fade: "global", highlight: "item" },
    faded: { innerRadius: 50, additionalRadius: -20, color: "gray" },
    data: DATA_ROWS.map((row) => ({
      id: row.id,
      label: row.label,
      value: row.play_count,
    })),
  },
];
