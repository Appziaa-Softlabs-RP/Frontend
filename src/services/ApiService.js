import fetch from "./ApiInterceptor";

const ApiService = {};

ApiService.banner = function (data) {
  return fetch({
    url: "/store/banner",
    method: "post",
    data: data,
  });
};

ApiService.PromoBanner = function (data) {
  return fetch({
    url: "/store/promobanner",
    method: "post",
    data: data,
  });
};

ApiService.sendOTP = function (data) {
  return fetch({
    url: "user/sendotp",
    method: "post",
    data: data
  })
}

ApiService.VerifyOTP = function (data) {
  return fetch({
    url: "user/verifyotp",
    method: "post",
    data: data
  })
}

ApiService.NewCategory = function (data) {
  return fetch({
    url: "store/verticaldesign",
    method: "post",
    data: data
  })
}

ApiService.StoreCategory = function (data) {
  return fetch({
    url: "store/verticalList",
    method: "post",
    data: data
  })
}

ApiService.StoreSubCategory = function (data) {
  return fetch({
    url: "store/verticalByCategory",
    method: "post",
    data: data
  })
}

ApiService.StoreSubChildCategory = function (data) {
  return fetch({
    url: "store/categoryBySubCategory",
    method: "post",
    data: data
  })
}

ApiService.StoreCategoryProd = function (data) {
  return fetch({
    url: "store/VerticalByProduct",
    method: "post",
    data: data
  })
}

ApiService.CategoryByProd = function (data) {
  return fetch({
    url: "store/CategoryByProduct",
    method: "post",
    data: data
  })
}

ApiService.CategoryBySubProd = function (data) {
  return fetch({
    url: "store/SubCategoryByProduct",
    method: "post",
    data: data
  })
}

ApiService.addToCart = function (data) {
  return fetch({
    url: "store/addToCart",
    method: "post",
    data: data
  })
}

ApiService.addToCart = function (data) {
  return fetch({
    url: "store/addToCart",
    method: "post",
    data: data
  })
}

ApiService.similarProd = function (data) {
  return fetch({
    url: "store/cartSimilarProduct",
    method: "post",
    data: data
  })
}

ApiService.showCart = function (data) {
  return fetch({
    url: "store/cartList",
    method: "post",
    data: data
  })
}

ApiService.updateCart = function (data) {
  return fetch({
    url: "store/updateTocart",
    method: "post",
    data: data
  })
}

ApiService.removeCart = function (data) {
  return fetch({
    url: "store/removeTocart",
    method: "post",
    data: data
  })
}

ApiService.productDetails = function (data) {
  return fetch({
    url: "store/productDetail",
    method: "post",
    data: data
  })
}

ApiService.orderList = function (data) {
  return fetch({
    url: "store/orderList",
    method: "post",
    data: data
  })
}

ApiService.getOrderDetail = function (data) {
  return fetch({
    url: "store/orderDetails",
    method: "post",
    data: data
  })
}

ApiService.orderCancel = function (data) {
  return fetch({
    url: "store/orderCancelled",
    method: "post",
    data: data
  })
}

ApiService.orderReschdule = function (data) {
  return fetch({
    url: "store/orderReschedule",
    method: "post",
    data: data
  })
}

ApiService.orderItemCancel = function (data) {
  return fetch({
    url: "store/orderItemCancel",
    method: "post",
    data: data
  })
}

ApiService.addressList = function (data) {
  return fetch({
    url: "store/addressList",
    method: "post",
    data: data
  })
}

ApiService.addNewAddress = function (data) {
  return fetch({
    url: "store/addToaddress",
    method: "post",
    data: data
  })
}

ApiService.updateAddress = function (data) {
  return fetch({
    url: "store/updateToaddress",
    method: "post",
    data: data
  })
}

ApiService.removeAddress = function (data) {
  return fetch({
    url: "store/removeToaddress",
    method: "post",
    data: data
  })
}

ApiService.getAddressDetail = function (data) {
  return fetch({
    url: "store/addressDetail",
    method: "post",
    data: data
  })
}

ApiService.ageGroupBox = function (data) {
  return fetch({
    url: 'store/ageGroupList',
    method: 'post',
    data: data
  })
}

ApiService.ageGroupProduct = function (data) {
  return fetch({
    url: 'store/ageGroupByProduct',
    method: 'post',
    data: data
  })
}

ApiService.brandInFocus = function (data) {
  return fetch({
    url: 'store/brandOffer',
    method: 'post',
    data: data
  })
}

export default ApiService;
