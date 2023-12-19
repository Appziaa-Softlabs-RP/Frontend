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
    url: "company/sendotp",
    method: "post",
    data: data
  })
}

ApiService.VerifyOTP = function (data) {
  return fetch({
    url: "company/verifyotp",
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

export default ApiService;
