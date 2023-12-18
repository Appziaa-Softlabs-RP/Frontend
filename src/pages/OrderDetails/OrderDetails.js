import React from "react";
import { OrderAddress } from "../../Components/OrderAddress/OrderAddress";
import { PageHeader } from "../../Components/PageHeader/PageHeader";

export const OrderDetails = () => {
    return (
        <React.Fragment>
            <PageHeader title="Order Detail" />
            <OrderAddress />
        </React.Fragment>
    )
}