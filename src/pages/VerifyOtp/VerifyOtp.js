import React, {useState, useEffect, useRef} from 'react';
import styles from './VerifyOtp.module.css';
import { BackArrowIcon } from '../../Components/siteIcons';
import OtpImg from '../../assets/images/mobile-otp.png';
import { enviroment } from '../../enviroment';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContextProvider';
import ApiService from '../../services/ApiService';
import { AppNotification } from '../../utils/helper';


let mobileOTP = '';
let mobileOTPId = '';

export const VerifyOtp = () => {
    const [optInput, setOptInput] = useState({otpInput1: '', otpInput2: '', otpInput3: '', otpInput4: ''});
    const appData = useApp();


    const optInput1 = useRef();
    const optInput2 = useRef();
    const optInput3 = useRef();
    const optInput4 = useRef();
    const locationState = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        document.title = enviroment.BUSINESS_NAME+' - User Verify';
        console.log(locationState)
        if(locationState?.state?.opt && locationState?.state?.optID){
            mobileOTP = locationState.state.opt;
            mobileOTPId = locationState.state.optID;
        }else{
            navigate('/');
        }
    }, []);

    const changeOptInput1 = (e) => {
        setOptInput({...optInput, otpInput1: e.target.value})
    }

    const changeOptInput2 = (e) => {
        setOptInput({...optInput, otpInput2: e.target.value})
    }

    const changeOptInput3 = (e) => {
        setOptInput({...optInput, otpInput3: e.target.value})
    }

    const changeOptInput4 = (e) => {
        setOptInput({...optInput, otpInput4: e.target.value})
    }

    const proceedVerify = () => {
        if(optInput.otpInput1 !== '' && optInput.otpInput2 !== '' && optInput.otpInput3 !== '' && optInput.otpInput4 !== ''){
            let matchOTP = optInput.otpInput1+optInput.otpInput2+optInput.otpInput3+optInput.otpInput4;
            matchOTP = parseInt(matchOTP);
            console.log(mobileOTP, matchOTP);
            if(mobileOTP === matchOTP){
                const payload = {
                    otp_id:mobileOTPId,
                    otp:matchOTP,
                    otp_type:"mobile"
                }
                ApiService.VerifyOTP(payload).then((res) => {
                    if(res.message === "Successfully."){
                        appData.setAppData({ ...appData.appData, user: res.payload, loggedIn: true });
                        localStorage.setItem('user', JSON.stringify(res.payload));
                        localStorage.setItem('loggedIn', true);
                        AppNotification('Welcome', 'OTP verified successfully.', 'success');
                        navigate('/');
                    }
                }).catch((err) => {
                    console.log(err);
                    AppNotification('Error', 'Entered OTP is incorrect.', 'danger');
                });
            }else{
                AppNotification('Error', 'Entered OTP is incorrect.', 'danger');
            }
        }else{
            AppNotification('Error', 'Please enter OTP', 'danger');
        }
    }
    
    useEffect(() => {
        if(optInput.otpInput1 !== ''){
            optInput2.current.focus();
        }
    }, [optInput.otpInput1]);
    
    useEffect(() => {
        if(optInput.otpInput2 !== ''){
            optInput3.current.focus();
        }else if(optInput.otpInput2 === ''){
            optInput1.current.focus();
        }
    }, [optInput.otpInput2]);
    
    useEffect(() => {
        if(optInput.otpInput3 !== ''){
            optInput4.current.focus();
        }else if(optInput.otpInput3 === ''){
            optInput2.current.focus();
        }
    }, [optInput.otpInput3]);
    
    useEffect(() => {
        if(optInput.otpInput4 === ''){
            optInput3.current.focus();
        }
    }, [optInput.otpInput4]);
    return (
        <React.Fragment>
            <div className={`d-inline-flex flex-column col-12 align-items-start p-3`}>
                <div className={`${styles.optHeader} col-12 p-3 d-inline-flex flex-column align-items-start gap-4`}>
                    <span className='d-inline-flex flex-shrink-0' onClick={() => navigate(-1)}>
                        <BackArrowIcon color="#000" />
                    </span>
                    <img src={OtpImg} alt="OTP Image" className={`${styles.OtpImgIcon} object-fit-contain`} />
                    <div className="col-12 d-inline-flex align-items-center">
                        <span className={`${styles.verifyTxt} d-inline-flex`}>Verify</span>
                        <span className={`${styles.otpTxt} d-inline-flex`}>OTP</span>
                    </div>
                    <div className="col-12 p-0 d-inline-flex align-items-center justify-content-between">
                        <input type="tel" className={`${styles.otpInput} d-inline-block`} maxLength="1" minLength="1" ref={optInput1} value={optInput.otpInput1} onChange={(e) => changeOptInput1(e)} />

                        <input type="tel" className={`${styles.otpInput} d-inline-block`} maxLength="1" minLength="1" ref={optInput2} value={optInput.otpInput2} onChange={(e) => changeOptInput2(e)} />

                        <input type="tel" className={`${styles.otpInput} d-inline-block`} maxLength="1" minLength="1" ref={optInput3} value={optInput.otpInput3}  onChange={(e) => changeOptInput3(e)} />

                        <input type="tel" className={`${styles.otpInput} d-inline-block`} maxLength="1" minLength="1" ref={optInput4} value={optInput.otpInput4}  onChange={(e) => changeOptInput4(e)} />
                    </div>
                    <div className="col-12 p-0 d-inline-block">
                        <span className={`${styles.otpInfo}`}>Please enter 4 Digit Verification Code sent to <span>+91- xxxxx 4253</span></span>
                    </div>
                    <div className="col-12 p-0 d-inline-block">
                        <span className={`${styles.resendInfo}`}>Didn't recieve the OTP?</span>&nbsp;<span className={`${styles.resendOtp}`}>Resend Code</span>
                    </div>
                    <div className="col-12 p-0 d-inline-block">
                        <span role="button" className={`${styles.verifyBtn}  d-inline-flex align-items-center justify-content-center col-12`} onClick={() => proceedVerify()}>Verify &amp; Proceed</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}