import React, {useEffect} from "react";
import styles from "./MyAccount.module.css";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { OrderIcon, UserIcon, LocationIcon, ServiceIcon, NotificationIcon, LogoutIcon } from "../../Components/siteIcons";
import { useApp } from '../../context/AppContextProvider';
import { enviroment } from "../../enviroment";
import { useNavigate } from "react-router-dom";

export const MyAccount = () => {
    const appData = useApp();
    const userInfo = JSON.parse(appData?.appData?.user);
    const navigate = useNavigate();

    useEffect(() => {
        document.title = enviroment.BUSINESS_NAME+' - My Account';
    }, []);
    return (
        <React.Fragment>
            <PageHeader title="My Account" />
            <div className="d-inline-flex col-12 p-3 flex-column gap-3">
                <div className={`${styles.loginBox} d-inline-flex align-items-center col-12 gap-2 p-3`}>
                    <div className={`${styles.loginImage} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                        <UserIcon color="#000" />
                    </div>
                    <div className="d-inline-flex flex-column flex-grow-1">
                        {userInfo?.name && <h5 className={`${styles.profileName} col-12 d-inline-block mb-0`}></h5>}
                        <span className={`${styles.profileNumber} col-12 d-inline-block`}>+91- {userInfo?.mobile}</span>
                        <span className={`${styles.profileEmail} col-12 d-inline-block`}></span>
                    </div>
                </div>
                <div className={`${styles.loginBox} d-inline-flex flex-column col-12 gap-2 py-4 p-3`}>
                    <div className={`${styles.accountRow} col-12 d-inline-flex align-items-center gap-2`} onClick={() => navigate('/my-orders')}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <OrderIcon color="#454545"/>
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>My Orders</h6>
                    </div>
                    <div className={`${styles.accountRow} col-12 d-inline-flex align-items-center gap-2`}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <LocationIcon color="#454545" />
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>Delivery Address</h6>
                    </div>
                    <div className={`${styles.accountRow} col-12 d-inline-flex align-items-center gap-2`}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <ServiceIcon color="#454545" />
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>Customer Service</h6>
                    </div>
                    <div className={`${styles.accountRow} col-12 d-inline-flex align-items-center gap-2`}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <NotificationIcon color="#454545" />
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>Notification</h6>
                    </div>
                    <div className={`${styles.accountRow} ${styles.LoggedOutRow} col-12 d-inline-flex align-items-center gap-2`}>
                        <span className={`${styles.accountIcon} d-inline-flex flex-shrink-0 align-items-center justify-content-center`}>
                            <LogoutIcon color="#CF102E" />
                        </span>
                        <h6 className={`${styles.accountLabel} d-inline-flex m-0`}>Logout</h6>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}