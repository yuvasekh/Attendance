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
  export async function getcoures(data) {
    console.log(daat);
    let temp = [];
    await axios
      .get(`${rootUrl}api/courses`, { content: daat })
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