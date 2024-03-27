const rootUrl="http://localhost:8001/"
import axios from "axios";
export async function addcourses(data) {
    console.log(data);
    let temp = [];
    await axios
      .post(`${rootUrl}api/courses`, { content: data })
      .then((response) => {
        temp.push(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
    return temp[0];
  }
  export async function getcoures() {
  
    let temp = [];
    await axios
      .get(`${rootUrl}api/courses`)
      .then((response) => {
        temp.push(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
    return temp[0];
  }
  export async function addstudent(data) {
    console.log(data);
    let temp = [];
    await axios
      .post(`${rootUrl}api/student`, { content: data })
      .then((response) => {
        temp.push(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
    return temp[0];
  }
  export async function getstudentsFilter(data) {
    console.log(data);
    let temp = [];
    await axios
      .post(`${rootUrl}api/getstudentsFilter`, { content: data })
      .then((response) => {
        temp.push(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
    return temp[0];
  }
  export async function getstudents() {
  
    let temp = [];
    await axios
      .get(`${rootUrl}api/student`)
      .then((response) => {
        temp.push(response.data);
      })
      .catch((error) => {
        console.error("Error:", error.message);
      });
    return temp[0];
  }