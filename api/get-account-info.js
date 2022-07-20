import axios from "axios";

const getAccountInfo = (token, username, setAccountInfo) => {
  axios({
    method: "GET",
    url: "/get-account-info.js",
    headers: {
      token,
      username,
    },
  })
    .then((res) => {
      setAccountInfo(res.data.data);
    })
    .catch((err) => console.log(err));
};

export default getAccountInfo;
