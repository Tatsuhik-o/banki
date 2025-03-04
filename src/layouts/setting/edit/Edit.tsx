import { makeStyles } from "@mui/styles";
import { mobileContext } from "../../../utils/context";
import { useContext, useEffect, useState } from "react";
import { country_list } from "../../../utils/constants";

const useStyles = makeStyles({
  edit: {
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "100%" : "90%",
    display: "flex",
    flexDirection: (props: { mobileView: boolean }) =>
      props.mobileView ? "column" : "row",
    gap: "20px",
    alignSelf: "center",
    paddingTop: "1rem",
  },
  pic_column: {
    width: (props: { mobileView: boolean }) =>
      props.mobileView ? "30%" : "10%",
    aspectRatio: "1",
    alignSelf: (props: { mobileView: boolean }) =>
      props.mobileView ? "center" : "flex-start",
    "& img": {
      width: "100%",
      height: "100%",
    },
  },
  first_column: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "& > *": {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      fontFamily: "Source Code Pro",
    },
    "& label": {
      color: "#3F3F3F",
    },
    "& input": {
      color: "#7A95C3",
      padding: "0.5rem",
      border: "1px solid #E7EFF5",
      borderRadius: "8px",
    },
  },
  second_column: {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    "& > *": {
      display: "flex",
      flexDirection: "column",
      gap: "3px",
      fontFamily: "Source Code Pro",
    },
    "& label": {
      color: "#3F3F3F",
    },
    "& input": {
      color: "#7A95C3",
      padding: "0.5rem",
      border: "1px solid #E7EFF5",
      borderRadius: "8px",
    },
    "& select": {
      color: "#7A95C3",
      padding: "0.5rem",
      border: "1px solid #E7EFF5",
      borderRadius: "8px",
      cursor: "pointer",
    },
  },
  name: {},
  email: {},
  dob: {},
  perm_address: {},
  post_code: {},
  username: {},
  password: {},
  pres_address: {},
  city: {},
  country: {},
});

export default function Edit() {
  const { mobileView } = useContext(mobileContext) || {};
  const classes = useStyles({ mobileView: mobileView || false });
  const [picHolder, setPicHolder] = useState<string | undefined>(undefined);

  useEffect(() => {
    const controller = new AbortController();
    const defaultPic = new Promise((resolve) => {
      setTimeout(() => {
        controller.abort();
        resolve("/placeholder_image.png");
      }, 250);
    });
    const imagePromise = async (): Promise<string> => {
      const check = await fetch("https://avatar.iran.liara.run/public", {
        signal: controller.signal,
      });
      if (check) {
        return "https://avatar.iran.liara.run/public";
      }
      return "/placeholder_image.png";
    };
    Promise.any([imagePromise(), defaultPic]).then((data) => {
      setPicHolder(data as string);
    });
  }, []);

  return (
    <div className={classes.edit}>
      <div className={classes.pic_column}>
        <img src={picHolder} alt="Pic" />
      </div>
      <div className={classes.first_column}>
        <div className={classes.name}>
          <label htmlFor="">Your Name</label>
          <input type="text" />
        </div>
        <div className={classes.email}>
          <label htmlFor="">Your Email</label>
          <input type="email" />
        </div>
        <div className={classes.dob}>
          <label htmlFor="">Date Of Birth</label>
          <input type="date" />
        </div>
        <div className={classes.perm_address}>
          <label htmlFor="">Permanent Address</label>
          <input type="text" />
        </div>
        <div className={classes.post_code}>
          <label htmlFor="">Postal Code</label>
          <input type="text" />
        </div>
      </div>
      <div className={classes.second_column}>
        <div className={classes.username}>
          <label htmlFor="">Your Username</label>
          <input type="text" />
        </div>
        <div className={classes.password}>
          <label htmlFor="">Your Password</label>
          <input type="password" />
        </div>
        <div className={classes.pres_address}>
          <label htmlFor="">Present Address</label>
          <input type="text" />
        </div>
        <div className={classes.city}>
          <label htmlFor="">City</label>
          <input type="text" />
        </div>
        <div className={classes.country}>
          <label htmlFor="">Country</label>
          <select name="" id="">
            {country_list.map((country, idx) => {
              return <option key={idx}>{country}</option>;
            })}
          </select>
        </div>
      </div>
    </div>
  );
}
