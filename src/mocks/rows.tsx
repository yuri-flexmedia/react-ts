import { defaultizeValueFormatter } from "@mui/x-charts/internals";

export const DataRows = [
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

export const graphData = [
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
