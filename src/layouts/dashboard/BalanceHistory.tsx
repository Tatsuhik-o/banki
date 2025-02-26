import {
  Chart as ChartJS,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";
import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../utils/context";
import { useContext } from "react";

ChartJS.register(
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
  Filler
);

const labels = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];

const data = {
  labels,
  datasets: [
    {
      label: "Balance",
      data: [110, 230, 460, 780, 210, 570, 220, 600],
      borderColor: "#1814F3",
      fill: true,
      tension: 0.4,
      backgroundColor: "rgba(24, 20, 243, 0.1)",
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
    },
  },
  scales: {
    y: {
      ticks: {
        stepSize: 200,
      },
      beginAtZero: true,
      border: {
        dash: [5, 5],
        color: "#EFF2F7",
      },
    },
    x: {
      border: {
        dash: [5, 5],
        color: "#EFF2F7",
      },
    },
  },
};

const useStyles = makeStyles({
  balance_history: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  the_balance_history: {
    width: "100%",
    flex: "1",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    borderRadius: "25px",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "1rem",
  },
});

export default function BalanceHistory() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.balance_history}>
      <TitleCard titleMessage="Balance History" />
      <div className={classes.the_balance_history}>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
