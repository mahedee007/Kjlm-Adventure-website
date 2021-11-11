import React from 'react';
import './Signin.css';
import { Link , useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';


const Signin = () => {

    const {signInUsingGoogle} = useAuth();

    //location redirect
    const location =useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';


    //handle google sign-in function
    const handleGoogleLogin=()=>{
        signInUsingGoogle()
        .then(()=>{
            history.push(redirect_uri);
        })
    }



    return (
        <div className="w-75 mx-auto m-5 shadow bg-white row g-4 ">
            <div className="col-md-12 col-sm-12 col-lg-12">
                <img src={logo} className="img-fluid" alt="logo"/>
                <h3 className="logo-name">KJML Adventures</h3>
            </div>
            <div className="col-md-12 col-sm-12 col-lg-12">
                <h3 className="text-dark mt-3 mb-4">SignIn to <span className="logo-name">KJML Adventures</span></h3>
                <div className="">
                   <button
                   onClick={ handleGoogleLogin }
                   className="m-1 btn btn-warning text-light  mx-auto"
                   > Sign In with Google</button>
                </div>
                <div className="row mb-3 mt-3">
                    <div className="col-sm-6 offset-sm-6 mx-auto m-0">
                        <p className="text-secondary">New to <span className="logo-name">KJML Adventures</span>?  <Link to="/register">Create an account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signin;