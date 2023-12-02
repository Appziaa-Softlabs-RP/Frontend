import fetch from "./ApiInterceptor";

const ApiService = {};
const coachingID = "6501f8da58b0e277c0031082";

ApiService.login = function (data) {
  return fetch({
    url: "/login",
    method: "post",
    data: data,
  });
};

ApiService.register = function (data) {
  return fetch({
    url: "/register",
    method: "post",
    data: data,
  });
};

ApiService.coachingDetails = function () {
  return fetch({
    url:
      "/coaching-details"+
      coachingID,
    method: "get",
  });
};

ApiService.coaching = function () {
  return fetch({
    url:
      "/coaching/"+
      coachingID+"/courses",
    method: "get",
  });
};

ApiService.coachingInstructor = function () {
  return fetch({
    url:
      "/coaching-instructors/"+coachingID,
    method: "get",
  });
};

ApiService.courseDetails = function (courseid) {
  return fetch({
    url:
      "/course-details/"+courseid,
    method: "get",
  });
};

ApiService.purchaseCourse = function (data) {
  return fetch({
    url:
      "/purchase-course",
    method: "post",
    data: data,
  });
};

ApiService.purchasedCourse = function (data) {
  return fetch({
    url:
      "/purchased-courses",
    method: "post",
    data: data,
  });
};

ApiService.studentAssignment = function (data) {
  return fetch({
    url:
      "/purchased-courses",
    method: "post",
    data: data,
  });
};

ApiService.purchaseHistory = function (data) {
  return fetch({
    url:
      "/purchase-history",
    method: "post",
    data: data,
  });
};

export default ApiService;
