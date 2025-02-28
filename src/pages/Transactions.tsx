import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useCallback, useContext, useState } from "react";
import MyCards from "../layouts/dashboard/MyCards";
import BarExpense from "../layouts/transactions/BarExpense";
import TitleCard from "../components/TitleCard";
import { FullTransaction } from "../utils/types";
import { full_transactions } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import TransactionLine from "../components/TransactionLine";
import FullTransactionLine from "../components/FullTransactionLine";
import { formatBalance } from "../utils/constants";

const useStyles = makeStyles({
  transactions: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean; activeTab: number }) =>
      !props.mobileView ? "10px" : "15px",
    "& > *": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      gap: "15px",
    },
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
  card_wrapper: (props: { mobileView: boolean; activeTab: number }) => ({
    height: "250px",
    width: props.mobileView ? "100%" : "calc(66%)",
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
    padding: "1rem",
    overflow: "hidden",
    "& > *:not(:last-child)": {
      borderBottom: "1px solid #F4F6F8",
    },
  },
  pages_control: {
    display: "flex",
    justifyContent: (props: { mobileView: boolean }) =>
      props.mobileView ? "center" : "flex-end",
    gap: "10px",
    fontFamily: "Source Code Pro",
    marginLeft: "auto",
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
});

export default function Transactions() {
  const { mobileView } = useContext(mobileContext) || {};
  const [currentPage, setCurrentPage] = useState<number>(0);

  const [allTransactions, setAllTransactions] = useState(
    full_transactions as FullTransaction[]
  );
  const [activeTab, setActiveTab] = useState<number>(0);
  const pageNums = Math.ceil(allTransactions.length / 10);

  const onlyExpenses = useCallback(() => {
    setActiveTab(2);
    setAllTransactions(
      full_transactions.filter((elem) => elem.amount < 0) as FullTransaction[]
    );
  }, [allTransactions]);

  const onlyIncomes = useCallback(() => {
    setActiveTab(1);
    setAllTransactions(
      full_transactions.filter((elem) => elem.amount > 0) as FullTransaction[]
    );
  }, [allTransactions]);

  const allOperations = useCallback(() => {
    setActiveTab(0);
    setAllTransactions(full_transactions as FullTransaction[]);
  }, [allTransactions]);

  const classes = useStyles({
    mobileView: mobileView || false,
    activeTab: activeTab || 0,
  });
  return (
    <div className={classes.transactions}>
      <div className={classes.card_expen}>
        <div className={classes.card_wrapper}>
          <MyCards />
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
          allTransactions
            .filter(
              (_, idx) =>
                idx <= (currentPage + 1) * 10 && idx > currentPage * 10
            )
            .map((elem, idx) => {
              return (
                <div key={idx}>
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
            {allTransactions
              .filter(
                (_, idx) =>
                  idx <= (currentPage + 1) * 10 && idx > currentPage * 10
              )
              .map((elem, idx) => {
                return (
                  <div key={idx}>
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
        <button onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}>
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
    </div>
  );
}
