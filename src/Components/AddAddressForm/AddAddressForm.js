import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../../context/AppContextProvider";
import { enviroment } from "../../enviroment";
import ApiService from "../../services/ApiService";
import { AppNotification } from "../../utils/helper";
import styles from './AddAddressForm.module.css';
// address form
export const AddAddressForm = ({ stopNavigate, setOpenAdressPop, setAddressSaved }) => {
    const appData = useApp();
    const navigate = useNavigate();
    const location = useLocation();
    const addresState = location?.state;
    const userInfo = appData?.appData?.user;
    const [addressObj, setAddressObj] = useState({
        store_id: parseInt(enviroment.STORE_ID),
        customer_id: userInfo?.customer_id,
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
        if (addressObj.name === '') {
            AppNotification('Error', 'Enter your first name.', 'danger');
        } else if (addressObj.email === '') {
            AppNotification('Error', 'Enter your email address.', 'danger');
        } else if (addressObj.contact === '') {
            AppNotification('Error', 'Enter your contact number.', 'danger');
        } else if (addressObj.contact.length > 10 || addressObj.contact.length < 9) {
            AppNotification('Error', 'Enter your contact number is invalid.', 'danger');
        } else if (addressObj.house_no === '') {
            AppNotification('Error', 'Enter your house number.', 'danger');
        } else if (addressObj.street === '') {
            AppNotification('Error', 'Enter your street address.', 'danger');
        } else if (addressObj.city === '') {
            AppNotification('Error', 'Enter your city name.', 'danger');
        } else if (addressObj.state === '') {
            AppNotification('Error', 'Enter your state name.', 'danger');
        } else if (addressObj.pincode === '') {
            AppNotification('Error', 'Enter your Pincode.', 'danger');
        } else if (addressObj.address_type === '') {
            AppNotification('Error', 'Please choose your address type.', 'danger');
        } else {
            if (addresState?.addressEdit === true) {
                setAddressObj({ ...addressObj, address_id: addresState?.addressId });
                ApiService.updateAddress(addressObj).then((res) => {
                    if (res.message === "Update successfully.") {
                        AppNotification('Address Added', 'Your address has been saved successfully', 'success');
                        if (stopNavigate && stopNavigate === true) {
                            setOpenAdressPop(false);
                            setAddressSaved(true);
                        } else {
                            navigate('/my-address');
                        }
                    } else {
                        AppNotification('Error', 'We got an error while saving your address.', 'danger');
                    }
                }).catch((err) => {
                    AppNotification('Error', 'We got an error while saving your address.', 'danger');
                });
            } else {
                ApiService.addNewAddress(addressObj).then((res) => {
                    if (res.message === 'Add successfully.') {
                        AppNotification('Address Added', 'Your address has been saved successfully', 'success');
                        if (stopNavigate && stopNavigate === true) {
                            setOpenAdressPop(false);
                            setAddressSaved(true);
                        } else {
                            navigate('/my-address');
                        }
                    } else {
                        AppNotification('Error', 'We got an error while saving your address.', 'danger');
                    }
                }).catch((err) => {
                    AppNotification('Error', 'We got an error while saving your address.', 'danger');
                });
            }
        }
    }

    useEffect(() => {
        if (addresState?.addressEdit === true) {
            const payload = {
                store_id: parseInt(enviroment.STORE_ID),
                customer_id: userInfo.customer_id,
                address_id: addresState?.addressId
            }
            ApiService.getAddressDetail(payload).then((res) => {
                let editAddressObj = res.payload_addressDetail;
                if (res.message === "Address detail successfully") {
                    setAddressObj({
                        ...addressObj, pincode: editAddressObj.pincode,
                        name: editAddressObj.name,
                        contact: editAddressObj.contact,
                        email: editAddressObj.email,
                        city: editAddressObj.city,
                        state: editAddressObj.state,
                        house_no: editAddressObj.house_no,
                        street: editAddressObj.street,
                        landmark: editAddressObj.landmark,
                        address_type: editAddressObj.address_type
                    })
                }
            }).catch((err) => {

            });
        }
    }, []);

    return (
        <React.Fragment>
            <div className={`${styles.addressFrom} col-12 d-inline-flex flex-column p-3`}>
                <h2 className={`${styles.savedAddress} col-12 d-inline-flex gap-2 mb-3`}>{addresState?.addressEdit === true ? 'Edit this Address' : 'Add new address'}</h2>
                <div className="col-12 d-inline-flex flex-column">
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="name" autoComplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" name="name" value={addressObj.name} onChange={(e) => setAddressObj({ ...addressObj, name: e.target.value })} />
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Enter Name</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="name" autoComplete="off" className={`${styles.formInput} d-inline-block col-12`} type="tel" name="phone" value={addressObj.contact} onChange={(e) => setAddressObj({ ...addressObj, contact: e.target.value })} />
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Enter Contact Number</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="name" autoComplete="off" className={`${styles.formInput} d-inline-block col-12`} type="email" name="email" value={addressObj.email} onChange={(e) => setAddressObj({ ...addressObj, email: e.target.value })} />
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Enter Your Email</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="house no" autoComplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" name="house_no" value={addressObj.house_no} onChange={(e) => setAddressObj({ ...addressObj, house_no: e.target.value })} />
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> House No/Apartment No</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="locality" autoComplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" name="locality" value={addressObj.street} onChange={(e) => setAddressObj({ ...addressObj, street: e.target.value })} />
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Locality / Area / Street</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-flex gap-3`}>
                        <div className={`col-6 position-relative d-inline-flex gap-3 flex-shrink-1`}>
                            <input placeholder="City" autoComplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" name="city" value={addressObj.city} onChange={(e) => setAddressObj({ ...addressObj, city: e.target.value })} />
                            <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> City</label>
                        </div>
                        <div className={`col-6 position-relative d-inline-flex gap-3 flex-shrink-1`}>
                            <input placeholder="State" autoComplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" name="state" value={addressObj.state} onChange={(e) => setAddressObj({ ...addressObj, state: e.target.value })} />
                            <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> State</label>
                        </div>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="Landmark" autoComplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" name="landmark" value={addressObj.landmark} onChange={(e) => setAddressObj({ ...addressObj, landmark: e.target.value })} />
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}>Landmark</label>
                    </div>
                    <div className={`${styles.loginFormFloating} col-12 position-relative d-inline-block`}>
                        <input placeholder="Pincode" autoComplete="off" className={`${styles.formInput} d-inline-block col-12`} type="text" name="pincode" value={addressObj.pincode} onChange={(e) => setAddressObj({ ...addressObj, pincode: e.target.value })} />
                        <label className={`${styles.formLabel} position-absolute d-inline-flex align-items-center`}><span className="login_required">*</span> Pincode</label>
                    </div>
                </div>
                <h6 className="addres-type col-md-12 p-0 mb-2">Address Type</h6>
                <div className="col-12 pb-3 pr-0 d-inline-flex align-items-center justify-content-between">
                    <div className={`${styles.addressOptionBox} d-inline-flex`}>
                        <label className="d-inline-flex align-items-center" onClick={() => setAddressObj({ ...addressObj, address_type: 'Home' })}>
                            <input type="radio" className={`${styles.address_option}`} value="Home" name="address_type" />
                            <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                            Home
                        </label>
                    </div>
                    <div className={`${styles.addressOptionBox} d-inline-flex`}>
                        <label className="d-inline-flex align-items-center" onClick={() => setAddressObj({ ...addressObj, address_type: 'Office' })}>
                            <input type="radio" className={`${styles.address_option}`} value="Office" name="address_type" />
                            <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                            Office
                        </label>
                    </div>
                    <div className={`${styles.addressOptionBox} d-inline-flex`}>
                        <label className="d-inline-flex align-items-center" onClick={() => setAddressObj({ ...addressObj, address_type: 'Others' })}>
                            <input type="radio" className={`${styles.address_option}`} value="Others" name="address_type" />
                            <div className={`${styles.customRadio} d-inline-flex flex-shrink-0 me-1 position-relative`}></div>
                            Others
                        </label>
                    </div>
                </div>
            </div>
            <div className="col-12 d-inline-flex">
                <span role="button" className={`${styles.saveAddrsBtn} d-inline-flex align-items-center justify-content-center col-12`} onClick={() => saveNewAddress()}>{addresState?.addressEdit === true ? 'Update Address' : 'Save Address'}</span>
            </div>
        </React.Fragment>
    );
}