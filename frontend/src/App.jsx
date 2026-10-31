import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import AdminDashboard from './pages/AdminDashboard'
import DynamicQR from './pages/DynamicQR'
import Login from './pages/Login'
import MarkAttendance from './pages/MarkAttendance'
import StartSession from './pages/StartSession'
import StudentDashboard from './pages/StudentDashboard'
import TeacherDashboard from './pages/TeacherDashboard'
import TodayClasses from './pages/TodayClasses'

function App() {
  const [count, setCount] = useState(0)

  return(
     <div>
      <Header_component />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/admindashboard" element={<AdminDashboard />}></Route>
        <Route path="/dynamicqr" element={<DynamicQR />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/markattendance" element={<MarkAttendance />}></Route>
        <Route path="/startsession" element={<StartSession />}></Route>
        <Route path="/studentdashboard" element={<StudentDashboard />}></Route>
        <Route path="/teacherdashboard" element={<TeacherDashboard />}></Route>
        <Route path="/todayclasses" element={<TodayClasses />}></Route>

      
      </Routes>

      <Footer_component />
    </div>
  )
}

export default App
