import { makeStyles } from "@mui/styles";
import { BoxInfo } from "../utils/types";
import { useContext } from "react";
import { mobileContext } from "../utils/context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type TServiceLine = {
  serviceInfo: BoxInfo;
};

const useStyles = makeStyles({
  service_line: {
    display: "flex",
    width: "100%",
    height: "70px",
    gap: "10px",
    padding: "0.5rem",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
  },
  icon: {
    flex: "0.5",
    height: "100%",
    maxWidth: "54px",
    aspectRatio: "1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50px",
  },
  service_info: {
    flex: "2",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    overflow: "hidden",
  },
  service_title: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontFamily: "Source Code Pro",
    fontSize: "0.9rem",
  },
  service_content: {
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontFamily: "Segoe UI",
    color: "#7A95C3",
    fontSize: (props: { mobileView: boolean }) =>
      props.mobileView ? "0.7rem" : "0.75rem",
  },
  column_1: {
    flex: "1",
    alignSelf: "center",
    color: "#7A95C3",
    fontFamily: "Source Code Pro",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "0.8rem",
  },
  column_2: {
    flex: "1",
    alignSelf: "center",
    color: "#7A95C3",
    fontFamily: "Source Code Pro",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "0.8rem",
  },
  column_3: {
    flex: "1",
    alignSelf: "center",
    color: "#7A95C3",
    fontFamily: "Source Code Pro",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontSize: "0.8rem",
  },
  view_details: {
    flex: "1",
    color: "#B8C7DF",
    backgroundColor: "#FFFFFF",
    border: "1px solid #B8C7DF",
    borderRadius: "18px",
    height: "75%",
    alignSelf: "center",
    cursor: "pointer",
    fontSize: (props: { mobileView: boolean }) =>
      props.mobileView ? "0.7rem" : "0.9rem",
    transition: "all 0.25s ease-in-out",
    "&:hover": {
      backgroundColor: "#B8C7DF",
      color: "#FFFFFF",
    },
  },
});

export default function ServiceLine({ serviceInfo }: TServiceLine) {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.service_line}>
      <div
        className={classes.icon}
        style={{ backgroundColor: serviceInfo.secondaryColor }}
      >
        <FontAwesomeIcon
          icon={serviceInfo.icon}
          fontSize={20}
          color={serviceInfo.primaryColor}
        />
      </div>
      <div className={classes.service_info}>
        <p className={classes.service_title}>{serviceInfo.title}</p>
        <p className={classes.service_content}>{serviceInfo.content}</p>
      </div>
      {!mobileView && (
        <>
          <div className={classes.column_1}>{serviceInfo.column1}</div>
          <div className={classes.column_2}>{serviceInfo.column2}</div>
          <div className={classes.column_3}>{serviceInfo.column3}</div>
        </>
      )}
      <button className={classes.view_details}>View Details</button>
    </div>
  );
}
