import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../component/Navigation";

// import { FaGoogle } from 'react-icons/fa';
// import { FaFacebookF } from 'react-icons/fa';
import "../container/Login.css";
import Footer from "../component/Footer";



function Login() {
	return (
		<>
		<Navigation/>
		<div className="login-bg">
			<div className="login-full">
				<section className="my-4 mx-5 cl">
					<div className="container login-container " >
						<div className="row login-row ">
							<div className="col-lg-5">
								<img src="./image/login/login2.jpg" className="img-fluid login-image" alt="loginimage" />

							</div>
							<div className="col-lg-7 login-form">
								<h1 className="login-name">LOGIN</h1>

								<from>
									<div className="from-row">
										<div className="col-lg-7">
											<input type="Email" placeholder="Email-Address" className="log-form-control" />

										</div>

									</div>
									<div className="from-row">
										<div className="col-lg-7">
											<input type="password" placeholder="******" className="log-form-control" />

										</div>

									</div>
									<div className="from-row">
										<div className="col-lg-7">
											<button type="button" className="login-btn1">SIGN IN</button>
										</div>
									</div>

									<p className="log-do-not-acc">Don't have an account? </p>
									<Link to="/Register" className="log-rigister"> Create account</Link>
									<br />



								</from>
								{/* <div className="method-control login-social1" >
									<Link to="#" className="method-action">
										<FaGoogle size="3rem" color="red"/>
										<span>Sign in with Google</span>
									</Link>
								</div>
								<div className="method-control">
									<Link to="#" className="method-action login-social2">
										<FaFacebookF size="3rem" color="blue"/>
										<span>Sign in with Facebook</span>
									</Link>
								</div> */}
							</div>

						</div>
					</div>
				</section>
			</div>
			</div>
     <div className="login-footer">
      <Footer/>
	  </div>

		</>
	)
}

export default Login
