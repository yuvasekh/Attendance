import { useNavigate } from "react-router-dom"
const DashBoard=()=>
{
    const navigate=useNavigate('/addcourse')
return(<div>
    <div class="grid grid-cols-1 mr-[20px] lg:mr-[80px] sm:mr-[20px] md:mr-[40px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
  <div class="bg-gridcolor  p-4 shadow-md h-[150px]  text-white text-center text-2xl" onClick={()=>{navigate('/studentsList')}}>No of Students</div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl" onClick={()=>{navigate('/coursesList')}}>No of Courses</div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl " onClick={()=>{navigate('/addcourse')}}>Search Student</div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl" onClick={()=>{navigate('/selectcourse')}}>Make Attendance</div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl " onClick={()=>{navigate('/addcourse')}}>Add course</div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl" onClick={()=>{navigate('/studentregistration')}}>Add Student</div>
</div>

</div>)
}
export default DashBoard