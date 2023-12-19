import React, {useEffect, useState} from "react";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import styles from './AddAddress.module.css';
import ApiService from "../../services/ApiService";
import { enviroment } from "../../enviroment";
import { useApp } from "../../context/AppContextProvider";

export const AddAddress = () => {
    const appData = useApp();
    const userInfo = JSON.parse(appData.appData.user);
    const [addressObj, setAddressObj] = useState({
        store_id: enviroment.STORE_ID,
        customer_id:userInfo?.user_id,
        pincode: '',
        name: '',
        contact: '',
        email: '',
        city: '',
        state: '',
        house_no: '',
        street: '',
        landmark: '',
        address_type: ''
    });

    const saveNewAddress = () => {
        ApiService.addNewAddress(addressObj).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        saveNewAddress();
    }, []);
    return (
        <React.Fragment>
            <PageHeader title="Add Address"/>
            <div className={`${styles.addressFrom} col-12 d-inline-flex flex-column p-3`}>
                <h2 className={`${styles.savedAddress} col-12 d-inline-flex gap-2 mb-3`}>Add new address</h2>
                <div className="col-12 d-inline-flex flex-column">
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="name" autocomplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" value={addressObj.name} name="name"/>
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Enter Name</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="name" autocomplete="off" className={`${styles.formInput} d-inline-block col-12`} type="tel" value="" name="phone"/>
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Enter Contact Number</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="name" autocomplete="off" className={`${styles.formInput} d-inline-block col-12`} type="email" value="" name="email"/>
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Enter Your Email</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="house no" autocomplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" value="" name="name"/>
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> House No/Apartment No</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="locality" autocomplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" value="" name="name"/>
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Locality / Area / Street</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex gap-3`}>
                        <div className={`col-6 position-relative d-inline-flex gap-3 flex-shrink-1`}>
                            <input placeholder="City" autocomplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" value="" name="city"/>
                            <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> City</label>
                        </div>
                        <div className={`col-6 position-relative d-inline-flex gap-3 flex-shrink-1`}>
                            <input placeholder="State" autocomplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" value="" name="state"/>
                            <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> State</label>
                        </div>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="Landmark" autocomplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" value="" name="landmark"/>
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}>Landmark</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="Pincode" autocomplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" value="" name="pincode"/>
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Pincode</label>
                    </div>
                </div>
                <h6 className="addres-type col-md-12 p-0 mb-2">Address Type</h6>
                <div className="col-12 pb-3 pr-0 d-inline-flex align-items-center justify-content-between">
                  <div className={`${styles.addressOptionBox} d-inline-flex`}>
                    <label className="d-inline-flex align-items-center">
                        <input type="radio" className={`${styles.address_option}`} value="Home" name="address_type"/>
                        <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                        Home
                    </label>
                  </div>
                  <div className={`${styles.addressOptionBox} d-inline-flex`}>
                    <label className="d-inline-flex align-items-center">
                        <input type="radio" className={`${styles.address_option}`} value="Office" name="address_type"/>
                        <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                        Office
                    </label>
                  </div>
                  <div className={`${styles.addressOptionBox} d-inline-flex`}>
                    <label className="d-inline-flex align-items-center">
                        <input type="radio" className={`${styles.address_option}`} value="Others" name="address_type"/>
                        <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                        Others
                    </label>
                  </div>
                </div>
            </div>
            <div className="col-12 d-inline-flex">
                <span className={`${styles.saveAddrsBtn} d-inline-flex align-items-center justify-content-center col-12`}>Save Address</span>
            </div>
        </React.Fragment>
    )
}