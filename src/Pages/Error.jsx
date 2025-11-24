import React from "react";
import SecondBTN from "../components/button/SecondBTN";
import { Link } from "react-router";

const Error = () => {
  return (
    <>
      <div className="container py-34 flex flex-col items-center justify-center  gap-20 text-center">
        <div className="flex flex-col items-center justify-center  gap-10 text-center">
          <h2 className="font-medium text-[110px] leading-29 tracking-[4%] ">
            404 Not Found
          </h2>
          <p className="leading-6">
            Your visited page not found. You may go home page.
          </p>
        </div>

        <Link to={"/"}>
          <SecondBTN BTNtext={"Back to home page"} />
        </Link>
      </div>
    </>
  );
};

export default Error;
