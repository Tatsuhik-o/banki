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
import { CreditCardType } from "../../../utils/types";
import Loading from "../../../components/Loading";

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
    display: "flex",
    justifyContent: "center",
  },
});

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

const filterResults = (data: CreditCardType[] | undefined) => {
  let temp: { [key: string]: number } = {};
  if (!data) return {};
  data.forEach((elem) => {
    if (elem.bank) {
      if (temp[elem.bank]) {
        temp[elem.bank]++;
      } else {
        temp[elem.bank] = 1;
      }
    }
  });
  return temp;
};

type TExpenseStats = {
  activeData: CreditCardType[] | undefined;
  isLoading: boolean;
};

export default function ExpenseStats({ activeData, isLoading }: TExpenseStats) {
  const classes = useStyles();
  const results = filterResults(activeData);

  const data = {
    labels: Object.keys(results),
    datasets: [
      {
        data: Object.values(results),
        backgroundColor: ["#4C78FF", "#16DBCC", "#FF82AC", "#FFBB38"],
        hoverOffset: 2,
      },
    ],
  };

  return (
    <div className={classes.stats}>
      {isLoading && (
        <div>
          <Loading />
        </div>
      )}
      {!isLoading && <Doughnut data={data} options={options} />}
    </div>
  );
}
