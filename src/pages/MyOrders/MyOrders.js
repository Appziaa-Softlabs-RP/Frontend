import React from "react";
import { PageHeader } from "../../Components/PageHeader/PageHeader";
import { MyOrdersBox } from "../../Components/MyOrdersBox/MyOrdersBox";

export const MyOrders = () => {
    return (
        <React.Fragment>
            <PageHeader title="My Orders" />
            <MyOrdersBox />
        </React.Fragment>
    )
}