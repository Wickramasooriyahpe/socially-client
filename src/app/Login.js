import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
//import './SignIn.css';
import loginValidation from "./loginValidation";
import useForm from "./useForm";
import Navibar from "../components/Navibar";
import useLoginForm from "./useLoginForm";


const Login = ({ submitLoginForm }) => {
  const { handleChange, handleForSubmit, values, errors } = useLoginForm(submitLoginForm);

  return (
    <div className="container-scroller">
      <div className="container-fluid page-body-wrapper full-page-wrapper">
        <div className="main-panel">
          <div className="content-wrapper">
            <div>
              <div className="d-flex align-items-center auth px-0">
                <div className="w-100 text-center mx-auto p-3 mt-2">
                  <div className="col-lg-4 mx-auto">
                    <div className="auth-form-light text-left py-5 px-4 px-sm-5" >
                    <div id="login-title"><h4>Sign in</h4><br></br></div>
                      <h5 className="font-weight-light">
                    
                      </h5>
                      <form className="pt-3">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-lg"
                            id="exampleInputEmail1"
                            placeholder="Email"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                          />
                          {errors.email && (
                            <p className="error">{errors.email}</p>
                          )}
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-lg"
                            id="exampleInputPassword1"
                            placeholder="Password"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                          />
                          {errors.password && (
                            <p className="error">{errors.password}</p>
                          )}
                        </div>
                        
                        <div className="mt-3 mb-3">
                        
                        
                        <a
                            className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                            onClick={handleForSubmit}
                          >
                            SIGN IN
                          </a>
                        </div>
                        <div className="row">
                          <div className="col font-weight-light">
                            {" "}
                            <Link to="/form" className="text-primary">
                              Don't have an Account?
                            </Link>
                          </div>
                          <div className="col font-weight-light">
                            <Link to="/forgotPassword" className=" text-primary">
                              Forgot Password?
                            </Link>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
