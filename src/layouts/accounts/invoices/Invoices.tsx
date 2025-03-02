import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../../utils/context";
import { useContext } from "react";
import { invoices } from "../../../utils/constants";
import Invoice from "../../../components/Invoice";

const useStyles = makeStyles({
  invoices: {
    width: "100%",
    height: "100%",
    minHeight: "300px",
    backgroundColor: "#FFFFFF",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "1rem 0.5rem" : "1rem 1rem",
    borderRadius: "18px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "10px",
  },
});

export default function Invoices() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.invoices}>
      {invoices.map((invoice, idx) => {
        return <Invoice invoiceInfo={invoice} key={idx} />;
      })}
    </div>
  );
}
