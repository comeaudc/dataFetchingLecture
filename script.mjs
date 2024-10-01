// Imports
import axios from 'axios'

// New XHR Object
// const request = new XMLHttpRequest();

// HTTP Request Methods - CRUD
// POST - create
// GET - read
// PUT - update
// DELETE - delete

// XHR request
// first arg, is HTTP verb/action to be taken, ALL CAPS
// second arg, url string to website we are making request too
// third arg, default true is if async request (ALL SHOULD BE)
// request.open("GET", "http://www.example.com/myFile.json", true);

// request obeject has access too onreadystatechange event listener
// request.onreadystatechange = handleResponse;

// Example Function used to track and handle finished ready state
// function handleResponse() {
//     if (request.readyState === XMLHttpRequest.DONE) {
//         // request is complete; do tasks.
//     } else {
//         // request is not complete.
//     }
// }
axios.interceptors.response.use(request => {
    console.log('Request sent.');
    return request;
  });

// // Simple GET request using fetch
async function getData() {
  let {data, durationInMS} = await axios(`https://jsonplaceholder.typicode.com/todos/1`);
//   res = await res.json();

  console.log(data, durationInMS);
}

// Intercepts requests before we send them out

axios.interceptors.request.use(request =>{
    console.log(`Request successfully sent`)

    return request
})

// Intercepts responses
axios.interceptors.response.use(request =>{
    console.log(`response has been recieved`)

    return request
})

// axios.interceptors.request.use(request => {
//     request.metadata = request.metadata || {};
//     request.metadata.startTime = new Date().getTime();
//     console.log('request sent')
//     return request;
// });

// axios.interceptors.response.use(
//     (response) => {
//         response.config.metadata.endTime = new Date().getTime();
//         response.durationInMS = response.config.metadata.endTime - response.config.metadata.startTime;
//         console.log(`response recieved`)
//         return response;
//     },
//     (error) => {
//         error.config.metadata.endTime = new Date().getTime();
//         error.durationInMS = error.config.metadata.endTime - error.config.metadata.startTime;
//         throw error;
// });

// (async () => {
//     const url = 'https://jsonplaceholder.typicode.com/todos/1';

//     const { data, durationInMS } = await axios(url);
//     console.log(`Request took ${durationInMS} milliseconds.`);
//     console.log(data);
// })();

getData();
// getData();
// getData();
// getData();