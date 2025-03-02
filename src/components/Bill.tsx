import { useContext } from "react";
import { mobileContext } from "../utils/context";
import { BoxInfo } from "../utils/types";
import { makeStyles } from "@mui/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TBoxInfo = {
  boxInfo: BoxInfo;
};

const useStyles = makeStyles({
  bill: {
    padding: "0.5rem",
  },
  mobile_bill: {},
  desktop_bill: {
    display: "flex",
    gap: "20px",
  },
  icon: {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: (props: BoxInfo) => props.primaryColor,
    backgroundColor: (props: BoxInfo) => props.secondaryColor,
    borderRadius: "15px",
  },
  service: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    flex: "2",
    overflow: "hidden",
    "& h4": {
      color: "#232323",
      fontsize: "0.8rem",
      fontFamily: "Source Code Pro",
      fontWeight: "700",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
    "& p": {
      color: "#839CC7",
      fontSize: "0.9rem",
      fontFamily: "Source Code Pro",
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
    },
  },
  type: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    color: "#8CA3CB",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  card: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    color: "#8CA3CB",
    fontFamily: "Poppins",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  status: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    color: "#8CA3CB",
    textTransform: "capitalize",
    fontStyle: "italic",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
  amount: {
    flex: "1",
    display: "flex",
    alignItems: "center",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },
});

export default function Bill({ boxInfo }: TBoxInfo) {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles(boxInfo);
  console.log(boxInfo);
  return (
    <div className={classes.bill}>
      {mobileView && <div className={classes.mobile_bill}>mobile</div>}
      {!mobileView && (
        <div className={classes.desktop_bill}>
          <div className={classes.icon}>
            <FontAwesomeIcon icon={boxInfo.icon} fontSize={20} />
          </div>
          <div className={classes.service}>
            <h4>{boxInfo.title}</h4>
            <p>{boxInfo.date?.toDateString()}</p>
          </div>
          <div className={classes.type}>{boxInfo.type}</div>
          <div className={classes.card}>{boxInfo.card}</div>
          <div className={classes.status}>{boxInfo.status}</div>
          <div
            className={classes.amount}
            style={{
              color: boxInfo.type === "Transfer" ? "#25DDAF" : "#FE667C",
            }}
          >{`${boxInfo.type === "Transfer" ? "+" : "-"}${
            boxInfo.content
          }`}</div>
        </div>
      )}
    </div>
  );
}
