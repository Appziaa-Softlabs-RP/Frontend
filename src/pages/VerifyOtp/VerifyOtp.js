import React from 'react';
import styles from './VerifyOtp.module.css';
import { BackArrowIcon } from '../../Components/siteIcons';
import OtpImg from '../../../public/images/mobile-otp.png';

export const VerifyOtp = () => {
    return (
        <React.Fragment>
            <div className={`d-inline-flex flex-column col-12`}>
                <div className={`${styles.optHeader} col-12 p-3 d-inline-flex flex-column gap-2`}>
                    <BackArrowIcon color="#000" />
                    <img src={OtpImg} alt="OTP Image" className='object-fit-contain' />
                </div>
            </div>
        </React.Fragment>
    )
}