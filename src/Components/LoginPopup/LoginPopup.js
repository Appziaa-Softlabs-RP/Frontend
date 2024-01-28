import React, {useState} from "react";
import { Link } from "react-router-dom";
import styles from './LoginPopup.module.css';
import ApiService from "../../services/ApiService";
import { AppNotification } from '../../utils/helper';
import { useApp } from '../../context/AppContextProvider';
import { useNavigate } from 'react-router-dom';
import { enviroment } from "../../enviroment";

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
                    <div className={`${styles.privacyTxt} col-12 text-center`}>By continuing, you agree to our <Link to="/privacy" target="_blank" className="text-decoration-none">Privacy Policy</Link> and <Link className="text-decoration-none" to="/terms" target="_blank">T&amp;C</Link></div>
                </div>
            </div>
        </React.Fragment>
    );
}

const LoginOTP = ({setLoginType, mobileVal, setMobileVal, setOTPObj}) => {

    const sendMobileOtp = () => {
        const payload = {
            otp_type:'mobile',
            username:mobileVal
        }
        ApiService.sendOTP(payload).then((res) => {
            if(res.message === 'Otp send successfully.'){
                AppNotification('Sucess', 'OTP sent to your mobile number.', 'success');
                setOTPObj({otp: res.payload.otp, otpID: res.payload.otp_id});
                setLoginType('VerifyOTP');
            }
        }).catch((err) => {
            
            AppNotification('Error', 'Unable to send OTP to your number', 'danger');
        })
    }

    return(
        <React.Fragment>
            <div className="d-inline-flex flex-column col-12">
                <h2 className={`${styles.loginTitle} col-12 d-inline-flex mb-4 mt-0`}>Login</h2>
                <p className={`${styles.loginDesc} col-12 d-inline-flex mb-3 mt-0`}>Enter Mobile No / Email ID to get an OTP for smooth login</p>
                <div className="d-inline-flex flex-column col-12 gap-4 mb-4">
                    <div className="col-12 d-inline-flex">
                        <input type="tel" value={mobileVal} minLength="10" maxLength="10" placeholder="9XXXXXXXXX" className={`${styles.inputField} col-12 d-inline-block px-3`} onChange={(e) => setMobileVal(e.target.value.replace(/\D/g, ""))} />
                    </div>
                </div>
                <div className="d-inline-flex justify-content-between col-12 mb-4">
                    <span className={`${styles.loginFilledBtn} d-inline-flex align-items-center justify-content-center text-uppercase col-12`} role="button" onClick={() => sendMobileOtp()}>Proceed</span>
                </div>
                <div className="col-12 d-inline-flex flex-column">
                    <div className="col-12 text-center"><span className={`${styles.alreadyTxt}`}>New Customer?</span> <span className={`${styles.loginLink}`} onClick={() => setLoginType('Register')} role="button">Signup</span></div>
                    <div className={`${styles.privacyTxt} col-12 text-center`}>By continuing, you agree to our <Link to="/privacy" target="_blank" className="text-decoration-none">Privacy Policy</Link> and <Link to="/terms" target="_blank" className="text-decoration-none">T&amp;C</Link></div>
                </div>
            </div>
        </React.Fragment>
    );
}

const LoginVerifyOTP = ({setLoginType,mobileVal,mobileOTP, setMobileOTP, otpObj, setOTPObj, setLoginPop}) => {
    const appData = useApp();
    const navigate = useNavigate();

    const sendMobileOtp = () => {
        const payload = {
            otp_type:'mobile',
            username:mobileVal
        }
        ApiService.sendOTP(payload).then((res) => {
            if(res.message === 'Otp send successfully.'){
                AppNotification('Sucess', 'OTP sent to your mobile number.', 'success');
                setOTPObj({otp: res.payload.otp, otpID: res.payload.otp_id});
            }
        }).catch((err) => {
            
            AppNotification('Error', 'Unable to send OTP to your number', 'danger');
        })
    }

    const proceedVerify = () => {
        if(mobileOTP !== ''){
            let matchOTP = mobileOTP;
            matchOTP = parseInt(matchOTP);
            if(otpObj.otp === matchOTP){
                const payload = {
                    otp_id:otpObj.otpID,
                    otp:matchOTP,
                    otp_type:"mobile"
                }
                ApiService.VerifyOTP(payload).then((res) => {
                    if(res.message === "Registration successfully."){
                        appData.setAppData({ ...appData.appData, user: res.payload, loggedIn: true });
                        localStorage.setItem('user', JSON.stringify(res.payload));
                        localStorage.setItem('loggedIn', true);
                        AppNotification('Welcome', 'OTP verified successfully.', 'success');
                        setLoginPop(false);
                        getAddCartList(res.payload);
                        navigate('/');
                    }
                }).catch((err) => {
                    AppNotification('Error', 'Entered OTP is incorrect.', 'danger');
                });
            }else{
                AppNotification('Error', 'Entered OTP is incorrect.', 'danger');
            }
        }else{
            AppNotification('Error', 'Please enter OTP', 'danger');
        }
    }

    const getAddCartList = (userData) => {
        console.log('userData ',userData);
        const payload = {
            store_id: enviroment.STORE_ID,
            customer_id: userData.customer_id
        }
        ApiService.showCart(payload).then((res) => {
            if(res.message === "Cart list successfully"){
                let addProducts = res.payload_cartList;
                let addedCart = appData.appData.cartData;
                let nonAddedProd = [];
                if(addProducts?.length > 0 && addedCart?.length > 0){
                    addProducts.map((prodCart) => {
                        addedCart.map((item) => {
                            if(prodCart.product_id !== item?.product_id){
                                nonAddedProd.push(item);
                            }
                        });
                    });
                }
                if(addedCart?.length === 0){
                    appData.setAppData({ ...appData.appData, cartData: addProducts, cartCount: addProducts?.length, cartSaved: true });
                    localStorage.setItem('cartData', JSON.stringify(addProducts));
                    localStorage.setItem('cartSaved', true);
                }else{
                    const mergedArray = [...nonAddedProd, ...addProducts];
                    const uniqueData = [...mergedArray.reduce((map, obj) => map.set(obj.name, obj), new Map()).values()];
                    appData.setAppData({ ...appData.appData, cartData: uniqueData, cartCount: uniqueData?.length, cartSaved: true });
                    localStorage.setItem('cartData', JSON.stringify(uniqueData));
                    localStorage.setItem('cartSaved', true);
                }
            }
        }).catch((err) => {

        });
    }

    return(
        <React.Fragment>
            <div className="d-inline-flex flex-column col-12">
                <h2 className={`${styles.loginTitle} col-12 d-inline-flex mb-4 mt-0`}>Login</h2>
                <p className={`${styles.loginDesc} col-12 d-inline-flex mb-3 mt-0`}>Enter Mobile No / Email ID to get an OTP for smooth login</p>
                <div className="d-inline-flex flex-column col-12 gap-4 mb-4">
                    <div className="col-12 d-inline-flex position-relative">
                        <input type="text" value={mobileVal} readOnly placeholder="Enter Mobile No / E-mail ID" className={`${styles.inputField} col-12 d-inline-flex px-3`} />
                        <span className={`${styles.changeNumber} top-0 bottom-0 d-inline-flex align-items-center end-0 px-3 position-absolute text-uppercase`} onClick={() => setLoginType('LoginOTP')} role="button">Change</span>
                    </div>
                    <div className="col-12 d-inline-flex position-relative">
                        <input type="tel" placeholder="Enter Mobile OTP" className={`${styles.inputField} col-12 d-inline-flex px-3`} minLength="4" maxLength="4" value={mobileOTP} onChange={(e) => setMobileOTP(e.target.value.replace(/\D/g, ""))} />
                        <span className={`${styles.resendOTp} top-0 bottom-0 d-inline-flex align-items-center end-0 px-3 position-absolute text-uppercase`}  role="button" onClick={() => sendMobileOtp()}>Resend</span>
                    </div>
                </div>
                <div className="d-inline-flex justify-content-between col-12 mb-4">
                    <span className={`${styles.loginFilledBtn} d-inline-flex align-items-center justify-content-center text-uppercase col-12`} role="button" onClick={() => proceedVerify()}>Login</span>
                </div>
                <div className="col-12 d-inline-flex flex-column">
                    <div className="col-12 text-center"><span className={`${styles.alreadyTxt}`}>New Customer?</span> <span className={`${styles.loginLink}`} onClick={() => setLoginType('Register')} role="button">Signup</span></div>
                    <div className={`${styles.privacyTxt} col-12 text-center`}>By continuing, you agree to our <Link to="/privacy" target="_blank" className="text-decoration-none">Privacy Policy</Link> and <Link to="/terms" target="_blank" className="text-decoration-none">T&amp;C</Link></div>
                </div>
            </div>
        </React.Fragment>
    );
}

const Register = ({setLoginType, mobileVal, setMobileVal, setOTPObj}) => {

    const sendMobileOtp = () => {
        const payload = {
            otp_type:'mobile',
            username:mobileVal
        }
        ApiService.sendOTP(payload).then((res) => {
            if(res.message === 'Otp send successfully.'){
                AppNotification('Sucess', 'OTP sent to your mobile number.', 'success');
                setOTPObj({otp: res.payload.otp, otpID: res.payload.otp_id});
                setLoginType('VerifyOTP');
            }
        }).catch((err) => {
            
            AppNotification('Error', 'Unable to send OTP to your number', 'danger');
        })
    }
    return(
        <React.Fragment>
            <div className="d-inline-flex flex-column col-12">
                <h2 className={`${styles.loginTitle} col-12 d-inline-flex mb-4 mt-0`}>Sign Up</h2>
                <p className={`${styles.loginDesc} col-12 d-inline-flex mb-3 mt-0`}>Enter Mobile No / Email ID to get an OTP for smooth login</p>
                <div className="d-inline-flex flex-column col-12 gap-4 mb-4">
                    <div className="col-12 d-inline-flex">
                        <input type="tel" value={mobileVal} minLength="10" maxLength="10" placeholder="9XXXXXXXXX" className={`${styles.inputField} col-12 d-inline-block px-3`} onChange={(e) => setMobileVal(e.target.value.replace(/\D/g, ""))} />
                    </div>
                </div>
                <div className="d-inline-flex justify-content-between col-12 mb-4">
                    <span className={`${styles.loginFilledBtn} d-inline-flex align-items-center justify-content-center text-uppercase col-12`} role="button" onClick={() => sendMobileOtp()}>Register</span>
                </div>
                <div className="col-12 d-inline-flex flex-column">
                    <div className="col-12 text-center"><span className={`${styles.alreadyTxt}`}>Already have account?</span> <span className={`${styles.loginLink}`} onClick={() => setLoginType('Login')} role="button">Login</span></div>
                    <div className={`${styles.privacyTxt} col-12 text-center`}>By continuing, you agree to our <Link to="/privacy" target="_blank" className="text-decoration-none">Privacy Policy</Link> and <Link to="/terms" target="_blank" className="text-decoration-none">T&amp;C</Link></div>
                </div>
            </div>
        </React.Fragment>
    );
}

export const LoginPopup = ({setLoginPop}) => {
    const [loginType, setLoginType] = useState('Login');
    const [mobileVal, setMobileVal] = useState('');
    const [mobileOTP, setMobileOTP] = useState('');
    const [otpObj, setOTPObj] = useState({});

    const hideLoginPop = () => {
        setLoginPop(false);
    }

    const stopParentLayer = (e) => {
        e.stopPropagation();
    }
    return (
        <React.Fragment>
            <div className={`${styles.loginLayerBox} position-fixed top-0 bottom-0 start-0 end-0 d-inline-flex align-items-center justify-content-center`}>
                <div className={`${styles.loginContainer} d-inline-flex align-items-stretch`}>
                    <div className="col-4 d-inline-flex flex-column align-items-center" onClick={(e) => stopParentLayer(e)}>
                        <div className={`${styles.loginGradientBox} col-12 d-inline-flex flex-column gap-4 px-4 flex-grow-1 justify-content-center`}>
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
                    <div className="col-8 p-4 position-relative">
                        <span className={`${styles.closeLogin} position-absolute d-inline-flex align-items-center justify-content-center`} role="button" onClick={() => hideLoginPop(false)}>&times;</span>
                        {loginType === 'Login' ? 
                            <LoginPassword setLoginType={setLoginType}/>
                        : loginType === 'LoginOTP' ? 
                            <LoginOTP setLoginType={setLoginType} mobileVal={mobileVal} setMobileVal={setMobileVal} setOTPObj={setOTPObj} />
                        : loginType === 'Register' ? 
                            <Register setLoginType={setLoginType} mobileVal={mobileVal} setMobileVal={setMobileVal} setOTPObj={setOTPObj} />
                        : loginType === 'VerifyOTP' ? 
                            <LoginVerifyOTP setLoginType={setLoginType} mobileVal={mobileVal} mobileOTP={mobileOTP} setMobileOTP={setMobileOTP} otpObj={otpObj} setOTPObj={setOTPObj} setLoginPop={setLoginPop} />
                        : ''}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}