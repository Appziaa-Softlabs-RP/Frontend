import React from "react";
import styles from './Home.module.css';
import { Header } from "../../Components/Header/Header";
import { Aside } from "../../Components/Aside/Aside";

export const Home = () => {
    return (
        <React.Fragment>
            <div className="col-12 d-inline-flex flex-column">
                <Header />
                <Aside />
            </div>
        </React.Fragment>
    )
}