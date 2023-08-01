const axios = require('axios').default;

const req = axios.get("https://raw.githubusercontent.com/ibm-developer-skills-network/lkpho-Cloud-applications-with-Node.js-and-React/master/CD220Labs/async_callback/courseDetails.json");
console.log(req);
req.then(resp => {
    let courseDetails = resp.data;
    console.log(JSON.stringify(courseDetails,null,4))
})
.catch(err => {
    console.log(err.toString())
    //This will console log the error withe the code. eg. Error: Request failed with status code 404
});
