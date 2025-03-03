import { makeStyles } from "@mui/styles";
import OneSetting from "../../../components/OneSetting";
import { settings_options } from "../../../utils/constants";
import { mobileContext } from "../../../utils/context";
import { useContext } from "react";

const useStyles = makeStyles({
  card_settings: {
    width: "100%",
    padding: "0.5rem",
    flex: "1",
    backgroundColor: "#FFFFFF",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    gap: (props: { mobileView: boolean }) =>
      props.mobileView ? "2px" : "15px",
    justifyContent: "space-between",
  },
});

export default function CardSettings() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  return (
    <div className={classes.card_settings}>
      {settings_options.map((setting, idx) => {
        return <OneSetting settingInfo={setting} key={idx} />;
      })}
    </div>
  );
}
