import React from "react";

const JoinSales = () => {
  return (
    <section className="py-14 md-mx-20 container">
      <div className="row w-auto d-flex flex-wrap-reverse md:flex-flex-nowrap ">
        <div className="bg-warning d-flex align-items-center justify-content-center  p-7 col-md-4 text-black flex-column py-2">
          <h1 className="fs-1 w-100 text-center py-2">
            <b>Inviting you to Join</b>
          </h1>
          <p className="text-center">
            Be the Part of our growth story and earn handsome benefits...
          </p>
          <button className="my-2 btn text-white bg-danger px-5 py-2 rounded-lg fs-4">
            <b>Contact Sales</b>
          </button>
        </div>
        <div className="col-md-8 bg-white d-flex p-0">
          <img
            src="images/image 107.png"
            alt=""
            className="w-100"
            style={{ height: "320px" }}
          />
        </div>
      </div>

      <div className="my-5">
        <h1 className="text-2xl text-center">
          Brand <b>Promise</b>
        </h1>
        <div className="d-flex flex-column  flex-md-row justify-content-center  align-items-center ">
          <img src="images/brand-1.png " alt="" className="pt-3 m-2" />
          <img src="images/brand-2.png " alt="" className="pt-3 m-2" />
          <img src="images/brand-3.png " alt="" className="pt-3 m-2" />
        </div>
      </div>
    </section>
  );
};

export default JoinSales;