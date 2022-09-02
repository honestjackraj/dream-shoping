import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../component/Navigation";

import Footer from "../component/Footer";
// import { FaGoogle } from 'react-icons/fa';
// import { FaFacebookF } from 'react-icons/fa';
import "../container/Register.css";


function Register() {
	return (
		<>
			<Navigation />
			<div className="register-bg">
				<div className="register-full">
					<section className="my-4 mx-5 cl">
						<div className="container register-container " >
							<div className="row register-row ">
								<div className="col-lg-5">
									<img src="./image/login/register1.jpg" className="img-fluid register-image" alt="loginimage" />

								</div>
								<div className="col-lg-7 register-form">
									<h1 className="register-name">CREATE ACCOUNT</h1>

									<from>
										<div className="from-row">
											<div className="col-lg-7">
												<input type="FIRST NAME" placeholder="FIRST-NAME" className="regis-form-control" />

											</div>
										</div>
										<div className="from-row">
											<div className="col-lg-7">
												<input type="LAST NAME" placeholder="LAST-NAME" className="regis-form-control" />

											</div>
										</div>

										<div className="from-row">
											<div className="col-lg-7">
												<input type="Email" placeholder="Email-Address" className="log-form-control" />

											</div>
										</div>

										<div className="from-row">
											<div className="col-lg-7">
												<input type="password" placeholder="******" className="regis-form-control" />

											</div>

										</div>
										<div className="from-row">
											<div className="col-lg-7">
												<button type="button" className="register-btn1">CREATE</button>
											</div>
										</div>

										<p className="register-do-not-acc">Already have an account? </p>
										<Link to="/Login" className="register-rigister"> SIGN IN</Link>
										<br />



									</from>

								</div>

							</div>
						</div>
					</section>
				</div>
			</div>
       
	   <div className="rigister-footer">
			<Footer />
			</div>






		</>
	)
}

export default Register
