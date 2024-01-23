import React, { useEffect, useState } from "react";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { SavedAddress } from "../../Components/SavedAddress/SavedAddress";
import styles from './MyAddress.module.css';
import { enviroment } from "../../enviroment";
import { useApp } from "../../context/AppContextProvider";
import ApiService from "../../services/ApiService";
import { useNavigate } from "react-router-dom";
import { Header } from "../../Components/Header/Header";
import { MyAccountMenu } from "../MyAccount/MyAccount";
import { Footer } from "../../Components/Footer/Footer";


const UserAddressTab = ({ allAddress }) => {
  const navigate = useNavigate();
  return (
    <div className="col-12 d-inline-flex flex-column gap-3 p-3">
      <div className={`${styles.addressTab} col-12 d-inline-flex align-items-center justify-content-between ps-3`} onClick={() => navigate('/add-new-address', { state: { addressEdit: true } })}>
        <span className={`${styles.addAressTxt} d-inline-flex`}>Add New Address</span>
        <span className={`${styles.addAressIcon} d-inline-flex mb-2`}>+</span>
      </div>
      {allAddress.length > 0 &&
        <React.Fragment>
          <h2 className={`${styles.savedAddress} col-12 d-inline-flex gap-2`}>Saved Address {allAddress.length > 0 && <span className={`${styles.addressCnt}`}>({allAddress.length})</span>}</h2>
          {allAddress.map((item, index) => {
            return (
              <SavedAddress item={item} key={index} />
            );
          })}
        </React.Fragment>
      }
    </div>
  );
}

export const MyAddress = () => {
  const appData = useApp();
  let windowWidth = appData.appData.windowWidth;
  const userInfo = appData?.appData?.user;

  const [allAddress, setAllAddress] = useState([]);

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
      {windowWidth === "mobile" ? (
          <React.Fragment>
            <PageHeader title="My Address" />
            <UserAddressTab allAddress={allAddress} />
          </React.Fragment>
      ) : (
        <React.Fragment>
            <Header />
            <div className="col-12 d-inline-flex mt-4">
              <div className="container">
                <div className="d-flex gap-3 col-12 align-items-start">
                  <MyAccountMenu />
                  <div className="w-full flex-grow-1">
                    <UserAddressTab allAddress={allAddress} />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </React.Fragment>
      )}
    </React.Fragment>
  )
}