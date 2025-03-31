import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useCallback, useContext, useEffect, useState } from "react";
import BarExpense from "../layouts/transactions/BarExpense";
import TitleCard from "../components/TitleCard";
import { CreditCardType, FullTransaction } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TransactionLine from "../components/TransactionLine";
import FullTransactionLine from "../components/FullTransactionLine";
import { formatBalance } from "../utils/constants";
import CreditCard from "../components/CreditCard";
import Loading from "../components/Loading";
import { Line } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  ChartDataLabels
);

const labels = [];
const currentYear = new Date().getFullYear();
for (let i = 5; i >= 0; i--) {
  labels.push(currentYear - i);
}

const values = Array.from(
  { length: 6 },
  () => Math.floor(Math.random() * (40000 - 5000 + 1)) + 5000
);

const data = {
  labels: labels,
  datasets: [
    {
      label: "Investement",
      data: values,
      borderColor: "#FCAA0B",
      backgroundColor: "rgba(252, 170, 11, 0.2)",
      borderWidth: 2,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      display: false,
    },
    tooltip: {
      callbacks: {
        label: function (tooltipItem: any) {
          return tooltipItem.raw;
        },
      },
    },
  },
  scales: {
    x: {
      offset: true,
      ticks: {
        color: "#000",
      },
      grid: {
        display: false,
      },
    },
    y: {
      ticks: {
        stepSize: 10000,
        color: "#000",
      },
      beginAtZero: true,
      grid: {
        display: true,
      },
      border: {
        dash: [6, 6],
      },
    },
  },
};

const useStyles = makeStyles({
  transactions: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: {
      mobileView: boolean;
      activeTab: number;
      isLoading: boolean;
    }) => (!props.mobileView ? "10px" : "15px"),
    "& > *": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "15px",
    },
    height: (props: { isLoading: boolean }) => (props.isLoading ? "100%" : ""),
  },
  loading_wrapper: {
    justifySelf: "center",
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    height: "100%",
  },
  card_expen: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: (props: { mobileView: boolean; activeTab: number }) =>
      props.mobileView ? "0rem" : "0rem 0.5rem",
    flexDirection: (props: { mobileView: boolean; activeTab: number }) =>
      !props.mobileView ? "row" : "column",
  },
  point_chart: (props: { mobileView: boolean; activeTab: number }) => ({
    height: "250px",
    width: props.mobileView ? "100%" : "calc(33%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "0.5rem",
  }),
  chart: {
    width: "100%",
    flex: "1",
  },
  card_wrapper: (props: { mobileView: boolean; activeTab: number }) => ({
    height: "250px",
    width: props.mobileView ? "100%" : "calc(33%)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "0.5rem",
  }),
  tran_wrapper: (props: { mobileView: boolean; activeTab: number }) => ({
    height: "250px",
    width: props.mobileView ? "100%" : "calc(33%)",
  }),
  all_transactions: {
    width: "100%",
    overflow: "hidden",
    display: "flex",
    padding: (props: { mobileView: boolean; activeTab: number }) =>
      props.mobileView ? "0.5rem" : "0rem 1rem",
    flexDirection: "column",
  },
  filter_system: {
    width: "100%",
    borderBottom: "1px solid #ECEFF2",
    display: "flex",
    justifyContent: "space-around",
    fontFamily: "Calibri",
    " & > *": {
      padding: "0.5rem 0rem",
      cursor: "pointer",
    },
  },
  no_filter: {
    borderBottom: (props: { mobileView: boolean; activeTab: number }) =>
      props.activeTab === 0 ? "1px solid blue" : "none",
    color: (props: { mobileView: boolean; activeTab: number }) =>
      props.activeTab === 0 ? "#3734F1" : "#829BC6",
  },
  incomes_filter: {
    borderBottom: (props: { mobileView: boolean; activeTab: number }) =>
      props.activeTab === 1 ? "1px solid blue" : "none",
    color: (props: { mobileView: boolean; activeTab: number }) =>
      props.activeTab === 1 ? "#3734F1" : "#829BC6",
  },
  expenses_filter: {
    borderBottom: (props: { mobileView: boolean; activeTab: number }) =>
      props.activeTab === 2 ? "1px solid blue" : "none",
    color: (props: { mobileView: boolean; activeTab: number }) =>
      props.activeTab === 2 ? "#3734F1" : "#829BC6",
  },
  table_wrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    justifyContent: "space-around",
    padding: "0rem 1rem",
    overflow: "hidden",
    "& > *:not(:last-child)": {
      borderBottom: "1px solid #F4F6F8",
    },
  },
  pages_control: {
    display: "flex",
    padding: "0.5rem",
    justifyContent: (props: { mobileView: boolean }) =>
      props.mobileView ? "center" : "flex-end",
    fontFamily: "Source Code Pro",
    "& button": {
      border: "none",
      color: "#2522F4",
      backgroundColor: "transparent",
      textTransform: "capitalize",
      fontFamily: "Source Code Pro",
      display: "flex",
      gap: "2px",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  },
  table_head: {
    display: "flex",
    padding: "0.8rem 0.4rem",
    color: "#313131",
    fontFamily: "Source Code Pro",
    fontSize: "0.8rem",
    "& > *": {
      flex: "1",
      color: "#718EBF",
      fontWeight: "500",
      padding: "0rem 1rem",
    },
  },
  list_pages: {
    display: "flex",
    fontFamily: "Source Code Pro",
  },
  one_page: {
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    fontSize: "0.8rem",
    color: "#2522F4",
    cursor: "pointer",
  },
  active_page: {
    color: "#E2E2FD",
    backgroundColor: "#1814F3",
  },
  transactions_wrapper: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: "25px",
    padding: "1rem",
  },
  one_transaction_line: {
    "&:not(:last-child)": {
      borderBottom: "1px solid #F3F5F8",
    },
  },
});

export default function Transactions() {
  const { mobileView } = useContext(mobileContext) || {};
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [activeTransactions, setActiveTransactions] = useState<
    FullTransaction[]
  >([]);
  const [allTransactions, setAllTransactions] = useState<FullTransaction[]>([]);
  const [activeTab, setActiveTab] = useState<number>(0);
  const pageNums = Math.ceil(activeTransactions.length / 10);

  const [activeCard, setActiveCard] = useState<CreditCardType | undefined>(
    undefined
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    (async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/fetch_id_card?id=3",
          { signal: controller.signal }
        );
        const data = await response.json();
        setActiveCard(data[0]);
        setIsLoading(false);
      } catch (e) {
        console.log("err: ", e);
      }
    })();
    (async () => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/fetch_transactions",
          { signal: controller.signal }
        );
        const data = await response.json();
        setActiveTransactions(data);
        setAllTransactions(data);
      } catch (e) {
        console.log("err: ", e);
      }
    })();
    return () => {
      controller.abort();
    };
  }, []);

  const onlyExpenses = useCallback(() => {
    setActiveTab(2);
    setActiveTransactions(
      allTransactions.filter((elem) => elem.amount < 0) as FullTransaction[]
    );
  }, [allTransactions]);

  const onlyIncomes = useCallback(() => {
    setActiveTab(1);
    setActiveTransactions(
      allTransactions.filter((elem) => elem.amount > 0) as FullTransaction[]
    );
  }, [allTransactions]);

  const allOperations = useCallback(() => {
    setActiveTab(0);
    setActiveTransactions(allTransactions as FullTransaction[]);
  }, [allTransactions]);

  const classes = useStyles({
    mobileView: mobileView || false,
    activeTab: activeTab || 0,
    isLoading,
  });
  return (
    <div className={classes.transactions}>
      {isLoading && (
        <div className={classes.loading_wrapper}>
          <Loading />
        </div>
      )}
      {!isLoading && (
        <>
          <div className={classes.card_expen}>
            <div className={classes.point_chart}>
              <TitleCard titleMessage={"Investements"} />
              <div className={classes.chart}>
                <Line data={data} options={options} />
              </div>
            </div>
            <div className={classes.card_wrapper}>
              <TitleCard titleMessage={"Active Card"} />
              {isLoading && <Loading />}
              {!isLoading && activeCard && (
                <CreditCard cardDetails={activeCard} />
              )}
            </div>
            <div className={classes.tran_wrapper}>
              <BarExpense />
            </div>
          </div>
          <div className={classes.all_transactions}>
            <TitleCard titleMessage="Recent Transactions" />
            <div className={classes.filter_system}>
              <div className={classes.no_filter} onClick={allOperations}>
                All Transactions
              </div>
              <div className={classes.incomes_filter} onClick={onlyIncomes}>
                Incomes
              </div>
              <div className={classes.expenses_filter} onClick={onlyExpenses}>
                Expenses
              </div>
            </div>
          </div>
          <div className={classes.table_wrapper}>
            {mobileView &&
              activeTransactions
                .filter(
                  (_, idx) =>
                    idx <= (currentPage + 1) * 10 && idx > currentPage * 10
                )
                .map((elem, idx) => {
                  return (
                    <div key={idx} className={classes.one_transaction_line}>
                      <TransactionLine
                        transactionInfo={{
                          amount:
                            elem.amount > 0
                              ? "+$" + formatBalance(elem.amount)
                              : "-$" + formatBalance(Math.abs(elem.amount)),
                          service: elem.description,
                          date: new Date(elem.date),
                        }}
                      />
                    </div>
                  );
                })}
            {!mobileView && (
              <div className={classes.transactions_wrapper}>
                <div className={classes.table_head}>
                  <div>Description</div>
                  <div>Transaction ID</div>
                  <div>Type</div>
                  <div>Card</div>
                  <div>Date</div>
                  <div>Amount</div>
                </div>
                {activeTransactions
                  .filter(
                    (_, idx) =>
                      idx <= (currentPage + 1) * 10 && idx > currentPage * 10
                  )
                  .map((elem, idx) => {
                    return (
                      <div key={idx} className={classes.one_transaction_line}>
                        <FullTransactionLine
                          transactionInfo={{
                            amount:
                              elem.amount > 0
                                ? "+$" + formatBalance(elem.amount)
                                : "-$" + formatBalance(Math.abs(elem.amount)),
                            service: elem.description,
                            date: new Date(elem.date),
                            id: elem.id,
                            type: elem.type,
                            card: elem.card,
                          }}
                        />
                      </div>
                    );
                  })}
              </div>
            )}
          </div>
          <div className={classes.pages_control}>
            <button
              onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
            >
              <FontAwesomeIcon icon={faArrowLeft} fontSize={12} /> previous
            </button>
            <div className={classes.list_pages}>
              {Array.from({ length: pageNums }).map((_, idx) => {
                return (
                  <div
                    className={`${classes.one_page} ${
                      idx === currentPage && classes.active_page
                    }`}
                    onClick={() => setCurrentPage(idx)}
                    key={idx}
                  >
                    {idx + 1}
                  </div>
                );
              })}
            </div>
            <button
              onClick={() =>
                setCurrentPage(Math.min(pageNums - 1, currentPage + 1))
              }
            >
              next
              <FontAwesomeIcon icon={faArrowRight} fontSize={12} />
            </button>
          </div>
        </>
      )}
    </div>
  );
}
