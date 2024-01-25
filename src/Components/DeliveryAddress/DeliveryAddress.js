import React, { useEffect, useState } from 'react';
import styles from './DeliveryAddress.module.css';
import { DeleteIcon, LocationIcon } from '../siteIcons';
import { enviroment } from '../../enviroment';
import { useApp } from '../../context/AppContextProvider';
import ApiService from '../../services/ApiService';
import { useNavigate } from 'react-router-dom';

const AddressDelivery = ({allAddress, setCheckoutType, checkoutType}) => {
    const navigate = useNavigate();

    const editAddress = (id) => {
        navigate('/add-new-address', {state: {addressEdit: true, addressId: id}});
    }

    return (
        <div className={`${styles.deliveryBox} col-12 d-inline-flex flex-column`}>
            <h2 className={`${styles.cartTitle} col-12 p-3 d-inline-flex align-items-center gap-2`}>
                <LocationIcon color="#000" />
                Select Delivery Address
            </h2>
            {checkoutType === 'Address' &&
                <div className='col-12 d-inline-flex flex-column'>
                    <div className='col-12 d-inline-flex justify-content-end p-3'>
                        <span className={`${styles.addAddressBtn} d-inline-flex align-items-center px-4`}>Add New Address</span>
                    </div>
                    {allAddress?.length > 0 && 
                        <div className="col-12 d-inline-flex flex-wrap p-3">
                            {allAddress?.map((item, idx) => {
                                return (
                                    <div className="col-6 p-3" key={idx}>
                                        <div className={`${styles.addedAdres} col-12 p-3 rounded d-inline-flex flex-column position-relative`}>
                                            <div className={`col-10 d-inline-flex flex-column`}>
                                                <h6 className={`${styles.addressName} col-12 d-inline-flex align-items-center flex-wrap gap-2 mb-1`}>{item.name}<span className={`${styles.addressTag} d-inline-flex align-items-center px-1`}>{item.address_type}</span></h6>
                                                <label className={`${styles.addressdetail} col-12 d-inline-flex mb-0`}>{item.contact}</label>
                                                <label className={`${styles.addressdetail} col-12 d-inline-flex mb-0`}>{item.house_no} - {item.pincode}</label>
                                            </div>
                                            <div className="position-absolute p-3 top-0 end-0 d-inline-flex justify-content-end gap-3">
                                                <span role="button" className={`${styles.deleteBtn} d-inline-flex align-items-center px-2`}><DeleteIcon /></span>
                                                <span role="button" onClick={() => editAddress(item.address_id)} className={`${styles.editBtn} d-inline-flex align-items-center px-2`}>Edit</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    }
                    <div className={`${styles.placeOrderBtnBox} col-12 p-3 d-inline-flex align-items-center justify-content-end`}>
                        <span role="button" className={`${styles.placeOrderBtn} d-inline-flex align-items-center px-3 text-uppercase`} onClick={() => setCheckoutType('Payment')}>Proceed</span>
                    </div>
                </div>
            }
        </div>
    )
}

const PaymentMode = ({checkoutType, checkoutTotal}) => {
    return (
        <div className={`${styles.deliveryBox} col-12 d-inline-flex flex-column`}>
            <h2 className={`${styles.cartTitle} col-12 p-3 d-inline-flex align-items-center gap-2`}>
                ₹ Select Payment Mode
            </h2>
            {checkoutType === 'Payment' &&
                <div className='col-12 d-inline-flex'>
                    <div className='col-12 d-inline-flex flex-column gap-3 p-3'>
                        <div className='col-12 d-inline-flex'>
                            <label className={`${styles.paymentRadiio} d-inline-flex align-items-center gap-2`}>
                                <input type="radio" name="paymentmode" value="cash" checked=""/>
                                <span className={`${styles.checkmark} position-absolute d-inline-block`}></span>
                                <span className={`${styles.radioText} d-inline-flex`}>Cash on Delivery</span>
                            </label>
                        </div>
                        <div className='col-12 d-inline-flex'>
                            <label className={`${styles.paymentRadiio} d-inline-flex align-items-center gap-2`}>
                                <input type="radio" name="paymentmode" value="cash" checked=""/>
                                <span className={`${styles.checkmark} position-absolute d-inline-block`}></span>
                                <span className={`${styles.radioText} d-inline-flex`}>Online Payment Options</span>
                            </label>
                        </div>
                    </div>
                    <div className={`${styles.payBtnBox} col-12 d-inline-flex p-3 justify-content-end`}>
                        <span role="button" className={`${styles.payOrderBtn} d-inline-flex align-items-center px-3`}> PAY ₹{checkoutTotal}</span>
                    </div>
                </div>
            }
        </div>
    )
}

export const DeliveryAddress = ({checkoutTotal}) => {
    const [allAddress, setAllAddress] = useState([]);
    const appData = useApp();
    const [checkoutType, setCheckoutType] = useState('Address');
    const userInfo = appData?.appData?.user;

    useEffect(() => {
        const payload = {
            store_id: parseInt(enviroment.STORE_ID),
            customer_id: userInfo?.customer_id
        }
        ApiService.addressList(payload).then((res) => {
            if (res.message === "Address list successfully") {
                setAllAddress(res?.payload_addressList);
            }
        }).catch((err) => {

        })
    }, []);
    return (
        <React.Fragment>
            <AddressDelivery allAddress={allAddress} setCheckoutType={setCheckoutType} checkoutType={checkoutType} />
            <PaymentMode checkoutType={checkoutType} checkoutTotal={checkoutTotal} />
        </React.Fragment>
    );
}