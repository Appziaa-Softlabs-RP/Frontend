import React, {useEffect, useState} from "react";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { SavedAddress } from "../../Components/SavedAddress/SavedAddress";
import styles from './MyAddress.module.css';
import { enviroment } from "../../enviroment";
import { useApp } from "../../context/AppContextProvider";
import ApiService from "../../services/ApiService";
import { useNavigate } from "react-router-dom";

export const MyAddress = () => {
    const appData = useApp();
    const navigate = useNavigate();
    
    let userInfo = '';
    const isJSON = (str) => {
        try {
            JSON.stringify(JSON.parse(str));
            return true;
        } catch (e) {
            return false;
        }
    }

    if(isJSON(appData)){
        userInfo = JSON.parse(appData?.appData?.user);
    }else{
        userInfo = appData?.appData?.user;
        userInfo= JSON.parse(userInfo);
    }

    const [allAddress, setAllAddress] = useState([]);

    useEffect(() => {
        const payload = {
            store_id: parseInt(enviroment.STORE_ID),
            customer_id:userInfo?.customer_id
        }
        ApiService.addressList(payload).then((res) => {
            if(res.message === "Address list successfully"){
                setAllAddress(res?.payload_addressList);
            }
        }).catch((err) => {
            
        })
    }, []);
    return (
        <React.Fragment>
            <PageHeader title="My Address"/>
            <div className="col-12 d-inline-flex flex-column gap-3 p-3">
                <div className={`${styles.addressTab} col-12 d-inline-flex align-items-center justify-content-between ps-3`} onClick={() => navigate('/add-new-address')}>
                    <span className={`${styles.addAressTxt} d-inline-flex`}>Add New Address</span>
                    <span className={`${styles.addAressIcon} d-inline-flex mb-2`}>+</span>
                </div>
                {allAddress.length > 0 &&
                    <React.Fragment>
                        <h2 className={`${styles.savedAddress} col-12 d-inline-flex gap-2`}>Saved Address {allAddress.length > 0 &&<span className={`${styles.addressCnt}`}>({allAddress.length})</span>}</h2>
                        {allAddress.map((item, index) => {
                            return(
                                <SavedAddress item={item} key={index} />
                            );
                        })}
                    </React.Fragment>
                }
            </div>
        </React.Fragment>
    )
}