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
import { useEffect, useState } from "react";
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

const filterResults = (data: CreditCardType[]) => {
  let temp: { [key: string]: number } = {};
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

export default function ExpenseStats() {
  const classes = useStyles();
  const [bankData, setBankData] = useState({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const response = await fetch(
        "https://banki-six.vercel.app/api/fetch_cards"
      );
      const data = (await response.json()) as CreditCardType[];
      setBankData(filterResults(data));
      setIsLoading(false);
    })();
  }, []);

  const data = {
    labels: Object.keys(bankData),
    datasets: [
      {
        data: Object.values(bankData),
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
      {!isLoading && bankData && <Doughnut data={data} options={options} />}
    </div>
  );
}
