import { makeStyles } from "@mui/styles";
import { BoxInfo } from "../utils/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { mobileContext } from "../utils/context";
import { useContext } from "react";

const useStyles = makeStyles({
  box: {
    flex: "1",
    borderRadius: "25px",
    backgroundColor: "#FFFFFF",
    padding: (props: { mobileView: boolean }) =>
      props.mobileView ? "1rem 2rem" : "2rem 0rem",
    display: "flex",
    gap: "10px",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: (props: { mobileView: boolean }) =>
      props.mobileView ? "fit-content" : "225px",
  },
  icon_layout: {
    height: (props: { mobileView: boolean }) =>
      props.mobileView ? "35px" : "50px",
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "35px" : "50px",
    borderRadius: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content_layout: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    color: "#718EBF",
    fontFamily: "Poppins",
    fontSize: "0.8rem",
  },
  content: {
    color: "#232323",
    fontFamily: "Source Code Pro",
    fontSize: "1.3rem",
  },
});

type TBoxInfo = {
  boxInfo: BoxInfo;
};

export default function Box({ boxInfo }: TBoxInfo) {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.box}>
      <div
        className={classes.icon_layout}
        style={{ backgroundColor: boxInfo.secondaryColor }}
      >
        <FontAwesomeIcon
          icon={boxInfo.icon}
          color={boxInfo.primaryColor}
          fontSize={mobileView ? 16 : 20}
        />
      </div>
      <div className={classes.content_layout}>
        <div className={classes.title}>{boxInfo.title}</div>
        <div className={classes.content}>{boxInfo.content}</div>
      </div>
    </div>
  );
}
