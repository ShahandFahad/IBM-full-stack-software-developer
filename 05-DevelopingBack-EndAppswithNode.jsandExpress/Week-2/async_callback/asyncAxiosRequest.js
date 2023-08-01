const axios = require("axios").default;

const connectToURL = (url) => {
  const req = axios.get(url);
  console.log(req);
  req
    .then((resp) => {
      console.log("Fulfilled");
      console.log(resp.data);
    })
    .catch((err) => {
      console.log("Rejected for url " + url);
      console.log(err.toString());
    });
};
//Valid URL
connectToURL(
  "https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleData.json"
);
//Invali URL
connectToURL(
  "https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/sampleDate.json"
);
