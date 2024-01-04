import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from './LoginPopup.module.css';

const LoginPassword = ({setLoginType}) => {
    return(
        <React.Fragment>
            <div className="d-inline-flex flex-column col-12">
                <h2 className={`${styles.loginTitle} col-12 d-inline-flex mb-3 mt-0`}>Login</h2>
                <p className={`${styles.loginDesc} col-12 d-inline-flex mb-3 mt-0`}>Enter Mobile No / Email ID to get an OTP for smooth login</p>
                <div className="d-inline-flex flex-column col-12 gap-4 mb-5">
                    <div className="col-12 d-inline-flex">
                        <input type="text" name="useremail" placeholder="Enter Mobile No / E-mail ID" className={`${styles.inputField} col-12 d-inline-flex px-3`} />
                    </div>
                    <div className="col-12 d-inline-flex">
                        <input type="password" name="userpassword" placeholder="Enter Password" className={`${styles.inputField} col-12 d-inline-flex px-3`} />
                    </div>
                </div>
                <div className="d-inline-flex justify-content-between col-12 gap-5 mb-5">
                    <span className={`${styles.loginFilledBtn} d-inline-flex align-items-center justify-content-center text-uppercase col-5`} role="button">Login</span>
                    <span className={`${styles.loginUnfilledBtn} d-inline-flex align-items-center justify-content-center text-uppercase col-5`} role="button" onClick={() => setLoginType('LoginOTP')}>Login via OTP</span>
                </div>
                <div className="col-12 d-inline-flex flex-column mb-4">
                    <div className="col-12 text-center"><span className={`${styles.alreadyTxt}`}>New Customer?</span> <span className={`${styles.loginLink}`} onClick={() => setLoginType('Register')} role="button">Signup</span></div>
                    <div className={`${styles.privacyTxt} col-12 text-center`}>By continuing, you agree to our <Link to="/privacy" target="_blank">Privacy Policy</Link>and <Link to="/terms" target="_blank">T&amp;C</Link></div>
                </div>
            </div>
        </React.Fragment>
    );
}

const LoginOTP = ({setLoginType}) => {
    return(
        <React.Fragment>
            <div className="d-inline-flex flex-column col-12">
                <h2 className={`${styles.loginTitle} col-12 d-inline-flex mb-4 mt-0`}>Login</h2>
                <p className={`${styles.loginDesc} col-12 d-inline-flex mb-3 mt-0`}>Enter Mobile No / Email ID to get an OTP for smooth login</p>
                <div className="d-inline-flex flex-column col-12 gap-4 mb-4">
                    <div className="col-12 d-inline-flex">
                        <input type="text" name="useremail" placeholder="Enter Mobile No / E-mail ID" className={`${styles.inputField} col-12 d-inline-flex px-3`} />
                    </div>
                </div>
                <div className="d-inline-flex justify-content-between col-12 mb-4">
                    <span className={`${styles.loginFilledBtn} d-inline-flex align-items-center justify-content-center text-uppercase col-12`} role="button">Login</span>
                </div>
                <div className="col-12 d-inline-flex flex-column">
                    <div className="col-12 text-center"><span className={`${styles.alreadyTxt}`}>New Customer?</span> <span className={`${styles.loginLink}`} onClick={() => setLoginType('Register')} role="button">Signup</span></div>
                    <div className={`${styles.privacyTxt} col-12 text-center`}>By continuing, you agree to our <Link to="/privacy" target="_blank">Privacy Policy</Link>and <Link to="/terms" target="_blank">T&amp;C</Link></div>
                </div>
            </div>
        </React.Fragment>
    );
}

const Register = ({setLoginType}) => {
    return(
        <React.Fragment>
            <div className="d-inline-flex flex-column col-12">
                <h2 className={`${styles.loginTitle} col-12 d-inline-flex mb-4 mt-0`}>Sign Up</h2>
                <p className={`${styles.loginDesc} col-12 d-inline-flex mb-3 mt-0`}>Enter Mobile No / Email ID to get an OTP for smooth login</p>
                <div className="d-inline-flex flex-column col-12 gap-4 mb-4">
                    <div className="col-12 d-inline-flex">
                        <input type="text" name="useremail" placeholder="Enter Mobile No / E-mail ID" className={`${styles.inputField} col-12 d-inline-flex px-3`} />
                    </div>
                </div>
                <div className="d-inline-flex justify-content-between col-12 mb-4">
                    <span className={`${styles.loginFilledBtn} d-inline-flex align-items-center justify-content-center text-uppercase col-12`} role="button">Login</span>
                </div>
                <div className="col-12 d-inline-flex flex-column">
                    <div className="col-12 text-center"><span className={`${styles.alreadyTxt}`}>Already have account?</span> <span className={`${styles.loginLink}`} onClick={() => setLoginType('Login')} role="button">Login</span></div>
                    <div className={`${styles.privacyTxt} col-12 text-center`}>By continuing, you agree to our <Link to="/privacy" target="_blank">Privacy Policy</Link>and <Link to="/terms" target="_blank">T&amp;C</Link></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export const LoginPopup = () => {
    const [loginType, setLoginType] = useState('Login');
    return (
        <React.Fragment>
            <div className={`${styles.loginLayer} position-fixed top-0 bottom-0 start-0 end-0`}></div>
            <div className={`${styles.loginLayerBox} position-fixed top-0 bottom-0 start-0 end-0 d-inline-flex align-items-center justify-content-center`}>
                <div className={`${styles.loginContainer} col-6 d-inline-flex align-items-stretch`}>
                    <div class="col-4 d-inline-flex flex-column align-items-center">
                        <div className={`${styles.loginGradientBox} col-12 d-inline-flex flex-column gap-3 px-4 flex-grow-1 justify-content-center`}>
                            <div className="col-12 d-inline-flex flex-column">
                                <h2 className="col-12 d-inline-flex mb-2 mt-0">Original Products</h2>
                                <p className="col-12 d-inline-flex m-0">All of the toys on our site have been obtained straight from the manufacturers.</p>
                            </div>
                            <div className="col-12 d-inline-flex flex-column">
                                <h2 className="col-12 d-inline-flex mb-2 mt-0">Easy Returns</h2>
                                <p className="col-12 d-inline-flex m-0">Didn’t the products? Don't worry, you may return the items for a full refund within 7 days.</p>
                            </div>
                            <div className="col-12 d-inline-flex flex-column">
                                <h2 className="col-12 d-inline-flex mb-2 mt-0">Rewards</h2>
                                <p className="col-12 d-inline-flex m-0">Get extra off on return purchase</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-8 p-4 position-relative">
                        <span className={`${styles.closeLogin} position-absolute d-inline-flex align-items-center justify-content-center`} role="button">&times;</span>
                        {loginType === 'Login' ? 
                            <LoginPassword setLoginType={setLoginType}/>
                        : loginType === 'LoginOTP' ? 
                            <LoginOTP setLoginType={setLoginType} />
                        : loginType === 'Register' ? 
                            <Register setLoginType={setLoginType} />
                        : ''}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}