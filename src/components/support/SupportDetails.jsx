import React from "react";
import SupportBox from "./SupportBox";

const SupportDetails = () => {
  return (
    <>
      <div className="container xl: mx-auto p-5">
        <div className="flex gap-22 justify-center mt-30">
        <SupportBox
          src={"/Support/Services.png"}
          h1={"FREE AND FAST DELIVERY"}
          p={"Free delivery for all orders over $140"}
        />
        <SupportBox
          src={"/Support/Services2.png"}
          h1={"24/7 CUSTOMER SERVICE"}
          p={"Friendly 24/7 customer support"}
        />
        <SupportBox
          src={"/Support/Services3.png"}
          h1={"MONEY BACK GUARANTEE"}
          p={"We reurn money within 30 days"}
        />
        </div>
      </div>
    </>
  );
};

export default SupportDetails;
