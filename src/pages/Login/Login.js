import React from "react";
import styles from './Login.module.css';
import siteLogo from '../../assets/images/site_logo.png';
import { enviroment } from "../../enviroment";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const navigate = useNavigate();

    const routeHome = () => {
        navigate('/');
    }
    return (
        <React.Fragment>
            <div className="min-vh-100 col-12 d-inline-flex flex-column">
                <div className={`${styles.loginTitle} col-12 d-inline-flex flex-column`}>
                    <div className={`${styles.siteLogoBox} col-12 d-inline-flex justify-content-center mb-3`}>
                        <img src={siteLogo} alt="Site Logo" className="object-fit-contain" onClick={routeHome}/>
                    </div>
                    <h1 className={`${styles.welcomeBiz} col-12 d-inline-block mt-0 mb-1`}>
                        Welcome <br/>
                        to <strong className={`${styles.bizName}`}>{enviroment.BUSINESS_NAME}</strong>
                    </h1>
                    <span className={`${styles.loginSubTitle} col-12 d-inline-flex`}>Create an account to continue shopping</span>
                </div>
                <div className="d-inline-flex col-12 flex-column">
                    <div className="col-12 d-inline-flex flex-column p-4 pt-2 gap-2">
                        <label className={`${styles.inputLabel} col-12 d-inline-flex`}>Enter Mobile No.</label>
                        <div className="col-12 position-relative">
                            <span className={`${styles.isdCode} position-absolute top-0 bottom-0 d-inline-flex align-items-center`}>+91</span>
                            <input type="tel" minLength="10" maxLength="10" placeholder="9XXXXXXXXX" className={`${styles.formInput} col-12 d-inline-block`} />
                        </div>
                        <span className={`${styles.formLoginBtn} col-12 d-inline-flex justify-content-center align-items-center mt-2`}>Continue</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}