import { makeStyles } from "@mui/styles";
import { Bar } from "react-chartjs-2";
import TitleCard from "../../components/TitleCard";
import { mobileContext } from "../../utils/context";
import { useContext } from "react";
import { generateMonths } from "../../utils/constants";
import { monthly_expenses } from "../../utils/constants";
import { formatBalance } from "../../utils/constants";
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
  Legend
);

const useStyles = makeStyles({
  bar_expense: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  the_expenses: {
    width: "100%",
    flex: "1",
    overflow: "hidden",
    backgroundColor: "#FFFFFF",
    borderRadius: "25px",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "0rem" : "1rem",
  },
});

const data = {
  labels: generateMonths(6),
  datasets: [
    {
      data: monthly_expenses,
      borderRadius: 8,
      backgroundColor: (ctx: any) => {
        const index = ctx.dataIndex;
        const totalBars = ctx.chart.data.labels.length;
        return index === totalBars - 1 ? "#16DBCC" : "#EDF0F7"; // Last bar red, others blue
      },
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
      usePointStyle: true,
      pointStyle: "circle",
      backgroundColor: "#F5F7FA",
      titleColor: "rgba(0, 0, 0, 0.8)",
      bodyColor: "rgba(0, 0, 0, 0.8)",
      borderColor: "rgba(0, 0, 0, 0.5)",
      borderWidth: 1,
      callbacks: {
        label: function (context: any) {
          let value = context.raw; // Get the actual data value
          return `$${formatBalance(value)}`; // Add "$" sign in front
        },
      },
    },
  },
  scales: {
    y: {
      display: false,
      ticks: {
        stepSize: 5000,
      },
      beginAtZero: true,
      grid: {
        display: false,
      },
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

export default function BarExpense() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.bar_expense}>
      <TitleCard titleMessage="My Expenses" />
      <div className={classes.the_expenses}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}
