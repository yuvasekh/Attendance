const mysql = require('mysql2/promise');


const pool = mysql.createPool({
  host: process.env.server, // Change this to your MySQL server host
  user: process.env.user, // Change this to your MySQL username
  password: process.env.password, // Change this to your MySQL password
  database: process.env.database, // Change this to your MySQL database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
let connection
(async () => {
    try {
       connection = await pool.getConnection();
      console.log('Connected to MySQL database.');
  
      // Execute your query here
   
  
      // // Release the connection
      // connection.release();
    } catch (err) {
      console.error('Error connecting to MySQL database:', err);
    }
  })();
  async function getcoursesdata()
  {
    const [rows, fields] = await connection.query('SELECT * FROM courses');
    console.log('Query result:', rows);
    return rows

  }
  async function addCourse(courseName, degree) {
    let connection;
    try {
      connection = await pool.getConnection();
      console.log('Connected to MySQL database.');
  
      // Execute query to add a new course
      const query = 'INSERT INTO courses (courseName, degree) VALUES (?, ?)';
      const [result] = await connection.query(query, [courseName, degree]);
      console.log('New course added with ID:', result.insertId);
  
      return result.insertId; // Return the ID of the newly added course
    } catch (err) {
      console.error('Error adding course:', err);
      return null;
    } finally {
      if (connection) {
        // connection.release();
      }
    }
  }
  async function getstudentsdata()
  {
    const [rows, fields] = await connection.query('SELECT * FROM student');
    console.log('Query result:', rows);
    return rows

  }
  async function getstudentsdataByFilter(degree,course)
  {
    const [rows, fields] = await connection.query('SELECT * FROM student WHERE degree = ? AND course = ?', [degree, course]);

    console.log('Query result:', rows);
    return rows

  }
  async function addStudent(fullName, dateOfBirth, gender, degree, course, joiningDate) {
    let connection;
    try {
        connection = await pool.getConnection();
        console.log('Connected to MySQL database.');

        // Execute query to add a new student
        const query = 'INSERT INTO student (fullName, dateOfBirth, gender, degree, course, joiningDate) VALUES (?, ?, ?, ?, ?, ?)';
        const [result] = await connection.query(query, [fullName, dateOfBirth, gender, degree, course, joiningDate]);
        console.log('New student added with ID:', result.insertId);

        return result.insertId; // Return the ID of the newly added student
    } catch (err) {
        console.error('Error adding student:', err);
        return null;
    } 
    
}
async function addStudentAttendance(id, semester, degree, course, status) {
    console.log("calling")
    console.log(id, semester, degree, course, status,"id, semester, degree, course, status")
    let connection;
    try {
        connection = await pool.getConnection();
        console.log('Connected to MySQL database.');

        // Convert status to 1 for "present" and 0 for "absent"
        status = status === "present" ? 1 : 0;

        const query = `
            INSERT INTO attendance_register (studentId, semester, degree, course, present) 
            VALUES (?, ?, ?, ?, ?)
        `;
        await connection.query(query, [id, semester, degree, course, status]);

        console.log('Attendance record added for student:', id);

        return true; // Indicate success
    } catch (err) {
        console.error('Error adding attendance record:', err);
        return false; // Indicate failure
    } 
}



module.exports.addStudent=addStudent
  module.exports.addCourse=addCourse
  module.exports.getstudentsdata=getstudentsdata
  module.exports.getcoursesdata=getcoursesdata
  module.exports.addStudentAttendance=addStudentAttendance
  module.exports.getstudentsdataByFilter=getstudentsdataByFilter