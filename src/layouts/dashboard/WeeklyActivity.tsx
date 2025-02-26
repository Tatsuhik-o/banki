import TitleCard from "../../components/TitleCard";
import { makeStyles } from "@mui/styles";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { fullDayNames } from "../../utils/constants";
import { ChartOptions, TooltipItem } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
const useStyles = makeStyles({
  weekly_activity: {
    height: "100%",
    width: "100%",
    padding: "0.5rem",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  the_activity: {
    width: "100%",
    flex: "1",
    display: "flex",
    overflow: "hidden",
  },
});

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const labels = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const data = {
  labels,
  datasets: [
    {
      label: "Deposit",
      data: [490, 350, 320, 490, 170, 380, 390],
      backgroundColor: "#1814F3",
      borderRadius: 25,
    },
    {
      label: "Withdraw",
      data: [230, 140, 260, 370, 240, 240, 320],
      backgroundColor: "#16DBCC",
      borderRadius: 25,
    },
  ],
};

interface TooltipCallbacks {
  title: (tooltipItems: TooltipItem<"bar">[]) => string;
}

interface TooltipOptionsWithCustomCallbacks {
  backgroundColor: string;
  titleColor: string;
  bodyColor: string;
  borderColor: string;
  borderWidth: number;
  callbacks: TooltipCallbacks;
}

interface ChartOptionsWithCustomCallbacks extends ChartOptions<"bar"> {
  plugins: {
    legend: {
      position: "top" | "bottom" | "left" | "right";
      labels: {
        usePointStyle: boolean;
        pointStyle: "circle" | "rect" | "triangle" | "cross" | "line";
      };
    };
    title: {
      display: boolean;
    };
    tooltip: TooltipOptionsWithCustomCallbacks;
    datalabels: {
      display: boolean;
    };
  };
}

const options: ChartOptionsWithCustomCallbacks = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top" as const,
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
      },
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
        title: (tooltipItems) => {
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
      ticks: {
        stepSize: 100,
      },
      beginAtZero: true,
    },
    x: {
      grid: {
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
  },
};

export default function WeeklyActivity() {
  const classes = useStyles();
  return (
    <div className={classes.weekly_activity}>
      <TitleCard titleMessage="Weekly Activity" />
      <div className={classes.the_activity}>
        <Bar options={options} data={data} />
      </div>
    </div>
  );
}
