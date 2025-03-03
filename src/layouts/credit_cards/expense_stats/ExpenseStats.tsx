import { makeStyles } from "@mui/styles";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  ArcElement,
  CategoryScale,
  LinearScale
);

const useStyles = makeStyles({
  stats: {
    padding: "0.5rem",
    width: "100%",
    flex: "1",
  },
});

const data = {
  labels: ["CIH", "BMCE", "BOA", "BOJ"],
  datasets: [
    {
      data: [445, 135, 186, 234],
      backgroundColor: ["#4C78FF", "#16DBCC", "#FF82AC", "#FFBB38"],
      hoverOffset: 2,
    },
  ],
};

const options: any = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      display: true,
      color: "#ffffff",
      font: {
        weight: "500",
        size: 11,
        family: "Source Code Pro",
      },
      formatter: (value: any, context: any) => {
        if (context && context.chart && context.chart.data) {
          return context.chart.data.labels[context.dataIndex];
        }
        return value;
      },
      align: "center",
      anchor: "center",
    },
  },
};

export default function ExpenseStats() {
  const classes = useStyles();
  return (
    <div className={classes.stats}>
      <Doughnut data={data} options={options} />
    </div>
  );
}
