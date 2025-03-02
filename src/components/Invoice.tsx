import { makeStyles } from "@mui/styles";
import { BoxInfo } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const useStyles = makeStyles({
  invoice: {
    width: "100%",
    height: "60px",
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
    alignItems: "center",
  },
  left_part: {
    width: "75%",
    height: "100%",
    display: "flex",
    gap: "20px",
  },
  icon: {
    aspectRatio: "1",
    height: "100%",
    padding: "1rem",
    borderRadius: "22px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  title: {
    color: "#B1B1B1",
    fontFamily: "Source Code Pro",
  },
  time: {
    color: "#839CC7",
    fontFamily: "Source Code Pro",
    fontSize: "0.85rem",
  },
  right_part: {
    width: "25%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#839CC7",
    fontFamily: "Source Code Pro",
    fontSize: "1.15rem",
  },
});

type TInvoice = {
  invoiceInfo: BoxInfo;
};

export default function Invoice({ invoiceInfo }: TInvoice) {
  const classes = useStyles();
  return (
    <div className={classes.invoice}>
      <div className={classes.left_part}>
        <div
          className={classes.icon}
          style={{ backgroundColor: invoiceInfo.secondaryColor }}
        >
          <FontAwesomeIcon
            icon={invoiceInfo.icon}
            fontSize={22}
            color={invoiceInfo.primaryColor}
          />
        </div>
        <div className={classes.content}>
          <p className={classes.title}>{invoiceInfo.title}</p>
          <p className={classes.time}>
            {invoiceInfo.date?.getHours() + "h ago"}
          </p>
        </div>
      </div>
      <div className={classes.right_part}>{invoiceInfo.content}</div>
    </div>
  );
}
