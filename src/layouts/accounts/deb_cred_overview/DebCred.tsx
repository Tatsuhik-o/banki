import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../../utils/context";
import { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { fullDayNames } from "../../../utils/constants";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { generateDays } from "../../../utils/constants";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const data = {
  labels: generateDays(7),
  datasets: [
    {
      label: "Debit",
      data: [1000, 800, 700, 1600, 1150, 1250, 1400],
      backgroundColor: "#1A16F3",
      borderRadius: 12,
    },
    {
      label: "Credit",
      data: [1950, 1500, 1000, 900, 1650, 700, 1650],
      backgroundColor: "#FCAA0B",
      borderRadius: 12,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      backgroundColor: "#F5F7FA",
      titleColor: "rgba(0, 0, 0, 0.8)",
      bodyColor: "rgba(0, 0, 0, 0.8)",
      borderColor: "rgba(0, 0, 0, 0.5)",
      borderWidth: 1,
      callbacks: {
        title: (tooltipItems: any) => {
          const shortLabel = tooltipItems[0].label;
          return (
            fullDayNames[shortLabel as keyof typeof fullDayNames] || shortLabel
          );
        },
      },
    },
  },
  scales: {
    y: {
      enabled: false,
      display: false,
    },
    x: {
      border: {
        display: false,
      },
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
  },
};

const useStyles = makeStyles({
  debit_credit: {
    width: "100%",
    height: "100%",
    minHeight: "300px",
    backgroundColor: "#FFFFFF",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "1rem 0.5rem" : "1rem 1rem",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  overview: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
  },
  chart: {
    flex: "1",
    width: "100%",
  },
  snippet: {
    textTransform: "capitalize",
    color: "#B8C7DF",
    fontFamily: "Poppins",
  },
  representation: {},
});

export default function DebCred() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.debit_credit}>
      <div className={classes.overview}>
        <p className={classes.snippet}>
          <span style={{ color: "#333B69" }}>$7,650 </span> Debited &{" "}
          <span style={{ color: "#333B69" }}>$13480 </span>
          Credited
        </p>
        <div className={classes.representation}></div>
      </div>
      <div className={classes.chart}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
