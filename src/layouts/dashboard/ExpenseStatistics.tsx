import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { expenses } from "../../utils/constants";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const useStyles = makeStyles({
  expense_statistics: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  the_expanse: {
    width: "100%",
    flex: "1",
    display: "flex",
    overflow: "hidden",
  },
});

const data = {
  labels: ["Entertainment", "Bill", "Investment", "Others"],
  datasets: [
    {
      data: expenses,
      backgroundColor: ["#2C3456", "#FF7F00", "#FF00FF", "#0000FF"],
      borderColor: "#ffffff",
      borderWidth: 2,
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
      color: "#ffffff",
      font: {
        size: 14,
      },
      formatter: (value: number, context: any) => {
        return `${value}%\n${context.chart.data.labels[context.dataIndex]}`;
      },

      textAlign: "center" as const,
      clamp: true,
    },
    tooltip: {
      enabled: false,
    },
  },
};

export default function ExpenseStatistics() {
  const classes = useStyles();
  return (
    <div className={classes.expense_statistics}>
      <TitleCard titleMessage="Expense Statistics" />
      <div className={classes.the_expanse}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
}
