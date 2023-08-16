import { Link } from "react-router-dom";

function SignIn (){
    return <div>
        <h1>This is SignIn page</h1>
        <p>go to <Link to="/dashboard">dashboard page</Link></p>
    </div> 
}

export default SignIn;