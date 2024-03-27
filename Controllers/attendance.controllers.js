const { addCourse, getcoursesdata, addStudent, getstudentsdata, getstudentsdataByFilter, addStudentAttendance } = require("../Utils/Sql");

module.exports.addcourse = async (req, res) => {
    console.log(req.body)
    const {degree,course}=req.body.content
    try {
        if (req.body) {
            await addCourse(course, degree)
            res.status(200).json("Inserted");
        }
        else {
            res.status(400).json({ message: "Bad Request" });

        }



    } catch (error) {
        res.status(500).json({ message: error });
    }
};
module.exports.getCourses = async (req, res) => {
    console.log(req.body)
    try {
        var resutl=await getcoursesdata()
        res.status(200).json(resutl);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
module.exports.addstudentDetails = async (req, res) => {
    console.log(req.body)
    const {fullName, dateOfBirth, gender, degree, course, joiningDate}=req.body.content
    const dateOfBirthFormatted = new Date(dateOfBirth).toISOString().slice(0, 19).replace('T', ' ');
    const joiningDateFormatted = new Date(joiningDate).toISOString().slice(0, 19).replace('T', ' ');
    try {
        if (req.body) {
            await addStudent(fullName, dateOfBirthFormatted, gender, degree, course, joiningDateFormatted)
            res.status(200).json("Inserted");
        }
        else {
            res.status(400).json({ message: "Bad Request" });

        }



    } catch (error) {
        res.status(500).json({ message: error });
    }
};
module.exports.getstudents = async (req, res) => {
    console.log(req.body)
    try {
        var resutl=await getstudentsdata()
        res.status(200).json(resutl);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
module.exports.getstudentsFilter = async (req, res) => {
    console.log(req.body)
    const {degree,course}=req.body.content
    try {
        var resutl=await getstudentsdataByFilter(degree,course)
        res.status(200).json(resutl);
    } catch (error) {
        res.status(500).json({ message: error });
    }
};
module.exports.addAttendance = async (req, res) => {
    console.log(req.body)
    const {id, semester, degree, course, status}=req.body.content
    try {
        if (req.body) {
            await addStudentAttendance(id, semester, degree, course, status)
            res.status(200).json("Inserted");
        }
        else {
            res.status(400).json({ message: "Bad Request" });

        }



    } catch (error) {
        console.log(error,"cee")
        res.status(500).json({ message: error });
    }
};