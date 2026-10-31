import './Header_com.css'

import { Link } from 'react-router-dom'
function Header_component(){
    return(
        <div>
            <div class="header">
            <Link to="/"> Home </Link>
            <Link to="/admindashboard"> Admin Dashboard </Link>
            <Link to="/dynamicqr"> QR </Link>
            <Link to="/login"> Login </Link>
            <Link to="/markattendacne"></Link>
            <Link to="/register">Register</Link>
            </div>

        </div>
    )
}

export default Header_component