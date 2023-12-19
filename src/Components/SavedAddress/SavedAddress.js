import React from "react";
import styles from './SavedAddress.module.css';

export const SavedAddress = () => {
    return (
        <React.Fragment>
            <div className={`${styles.addedAdres} col-12 p-3 rounded d-inline-flex flex-column`}>
                <div className={`col-10 d-inline-flex flex-column`}>
                    <h6 className={`${styles.addressName} col-12 d-inline-flex align-items-center flex-wrap gap-2 mb-1`}><span className={`${styles.addressTag} d-inline-flex align-items-center px-1`}></span></h6>
                    <label className={`${styles.addressdetail} col-12 d-inline-flex mb-0`}></label>
                    <label className={`${styles.addressdetail} col-12 d-inline-flex mb-0`}></label>
                </div>
                <div className="col-12 mt-3 d-inline-flex justify-content-end gap-3">
                    <span className={`${styles.deleteBtn} d-inline-flex align-items-center px-2`}>Delete</span>
                    <span className={`${styles.editBtn} d-inline-flex align-items-center px-2`}>Edit</span>
                </div>
            </div>
        </React.Fragment>
    )
}