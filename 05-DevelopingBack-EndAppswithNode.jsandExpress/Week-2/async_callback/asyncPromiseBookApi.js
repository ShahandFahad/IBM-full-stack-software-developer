const axios = require('axios').default;

const connectToURL = (url)=>{
  const req = axios.get(url);
  console.log(req);
  req.then(resp => {
      let listOfWork = resp.data.work;
      listOfWork.forEach((work)=>{
        console.log(work.titleAuth);
      });
    })
  .catch(err => {
      console.log(err.toString())
  });
}
console.log("Before connect URL")
connectToURL('https://reststop.randomhouse.com/resources/works/?expandLevel=1&search=Grisham');
console.log("After connect URL")
