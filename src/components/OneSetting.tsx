import { makeStyles } from "@mui/styles";
import { mobileContext } from "../utils/context";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { OneSettingType } from "../utils/types";

const useStyles = makeStyles({
  one_setting: {
    width: "100%",
    flex: "1",
    padding: "0.5rem",
    display: "flex",
    gap: "10px",
    cursor: "pointer",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#F5F7FA",
    },
  },
  icon: {
    height: "100%",
    minHeight: "40px",
    aspectRatio: "1",
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modifications: {
    height: "100%",
    minHeight: "40px",
    flex: "1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    overflow: "hidden",
  },
  upper: {
    color: "#232323",
    fontSize: "1rem",
    fontFamily: "Source Code Pro",
  },
  lower: {
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    color: "#8CA3CB",
    fontFamily: "Source Code Pro",
    fontSize: (props: { mobileView: boolean }) =>
      props.mobileView ? "0.8rem" : "0.8rem",
  },
});

type TOneSetting = {
  settingInfo: OneSettingType;
};

export default function OneSetting({ settingInfo }: TOneSetting) {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.one_setting}>
      <div
        className={classes.icon}
        style={{ backgroundColor: settingInfo.bgColor }}
      >
        <FontAwesomeIcon
          icon={settingInfo.icon}
          color={settingInfo.color}
          fontSize={mobileView ? 15 : 18}
        />
      </div>
      <div className={classes.modifications}>
        <p className={classes.upper}>{settingInfo.name}</p>
        <p className={classes.lower}>{settingInfo.desc}</p>
      </div>
    </div>
  );
}
