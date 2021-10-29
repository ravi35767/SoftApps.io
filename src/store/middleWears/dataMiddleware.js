import axios from "axios";
import { setData } from "../Actions/dataActions";
// import data from "../../data.json";
export const getData = () => {
  // console.log("here is data from json", data);
  return (dispatch) => {
    axios
      .get("https://fakestoreapi.com/products", {
        headers: {
          consumerKey: "ck_2478a5170f75f45dcf9514126067be2dab2b1b94",
          consumerSecret: "cs_023ef065e096a004f1334c289f8498863142a356",
        },
      })
      .then((res) => {
        dispatch(setData(res.data));
      })
      .catch((err) => {
        let errMsg = err.message;
        console.log("error from api", errMsg);
      });
  };
};
