import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../../utils/context";
import ServiceLine from "../../../components/ServiceLine";
import { bank_service } from "../../../utils/constants";

import { useContext } from "react";

const useStyles = makeStyles({
  bank_service: {
    marginTop: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
});

export default function BankService() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.bank_service}>
      {bank_service.slice(3).map((service, idx) => {
        return <ServiceLine serviceInfo={service} key={idx} />;
      })}
    </div>
  );
}
