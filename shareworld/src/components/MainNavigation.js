import { Link } from "react-router-dom";

const MainNavigation =()=>{
    return <header>
        <nav>
            <ul>
                <li><Link to={'/dashboard'}>Home</Link></li>
                <li><Link to={'/'}>Login</Link></li>
                <li><Link to={'./signin'}>SignIn</Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;