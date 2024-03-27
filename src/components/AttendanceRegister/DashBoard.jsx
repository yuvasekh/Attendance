import { useNavigate } from "react-router-dom"
import { BookOpenText, GraduationCap, NotebookPen, Search, User, UserCheck, UserPlus } from 'lucide-react';
const DashBoard=()=>
{
    const navigate=useNavigate('/addcourse')
return(
    <div class="grid grid-cols-1 ml-[40px] lg:mr-[80px] sm:mr-[20px] md:mr-[40px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-center ">
  <div class="bg-gridcolor  p-4 shadow-md h-[150px]  text-white text-center text-2xl" onClick={()=>{navigate('/studentsList')}}>No of Students  <span  className="flex justify-center mt-[12px]"><GraduationCap className="h-[50px] w-[50px]" /></span></div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl" onClick={()=>{navigate('/coursesList')}}>No of Courses <span  className="flex justify-center mt-[12px]"><BookOpenText  className="h-[50px] w-[50px]" /></span></div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl " onClick={()=>{navigate('/addcourse')}}>Search Student  <span  className="flex justify-center mt-[12px]"><Search  className="h-[50px] w-[50px]"/></span></div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl" onClick={()=>{navigate('/selectcourse')}}>Make Attendance <span  className="flex justify-center mt-[12px]"><UserCheck  className="h-[50px] w-[50px]"/></span> </div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl " onClick={()=>{navigate('/addcourse')}} > Add course <span  className="flex justify-center mt-[12px]"><NotebookPen  className="h-[50px] w-[50px]" /></span> </div>
  <div class="bg-gridcolor  p-4 shadow-md h-[150px] text-white text-center text-2xl" onClick={()=>{navigate('/studentregistration')}} >Add Student  <span  className="flex justify-center mt-[12px]"><UserPlus  className="h-[50px] w-[50px]" /></span> </div>
</div>

)
}
export default DashBoard