const { addcourse, getCourses, addstudentDetails, getstudents, getstudentsFilter, addAttendance } = require('../Controllers/attendance.controllers');
const {getFunctionNames,Deletefunction,Editfunction,addfunction, getAllFunctionNames}=require('../Controllers/azureFunction.Controllers')
const {getResponseAzure, askWithFunctions}=require('../Controllers/getResponse.Controllers')
module.exports = (app) => {
    app.route("/courses").get(getCourses).post(addcourse);
    app.route("/attendance").get(addAttendance).post(addAttendance);
    app.route("/student").get(getstudents).post(addstudentDetails);
    app.route("/getstudentsFilter").get(getstudentsFilter).post(getstudentsFilter);
   
}