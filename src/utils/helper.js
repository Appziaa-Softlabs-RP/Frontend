import ApiService from "../services/ApiService";
import { enviroment } from "../enviroment";
import { Store } from 'react-notifications-component';

export const AppNotification = (title, message, type) => {
  Store.addNotification({
    title: title,
    message: message,
    type: type,
    insert: "top",
    container: "top-right",
    animationIn: ["animate__animated", "animate__fadeIn"],
    animationOut: ["animate__animated", "animate__fadeOut"],
    dismiss: {
      duration: 2000,
      onScreen: true
    }
  });
}

export const AddToCart = (customerId, ProductId, Name, mrp, sellingPrice, quantity, noOfQty, hotDeals, dealId) => {
  const payload = {
    compnay_id: enviroment.COMPANY_ID,
    store_id: enviroment.STORE_ID,
    customer_id: customerId,
    product_id: ProductId,
    product_name:Name,
    mrp: mrp,
    selling_price:sellingPrice,
    quantity: quantity,
    no_of_quantity_allowed: noOfQty,
    is_hot_deals: hotDeals,
    deal_type_id: dealId
  }
  
  ApiService.addToCart(payload).then((res) => {
    return res;
  }).catch((err) => {
    return err;
  })
}

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}