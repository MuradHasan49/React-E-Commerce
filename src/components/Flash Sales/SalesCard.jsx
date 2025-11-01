import React from "react";

const SalesCard = ({ Discount, img, h2, price, DiscountPrice, rating, totaled }) => {
  return (
    <>
      <div className="container xl:mx-auto p-5">
        <div
          className="w-66 h-88 bg-amber-50 rounded-lg p-4 group hover:shadow-lg 
        transition-all duration-300 ease-in-out cursor-pointer"
        >
          <div className="h-62 w-full bg-amber-100 rounded-lg relative">
            <div
              className="h-10 w-full bg-black text-white text-center pt-2 absolute bottom-0 rounded-b-lg 
              opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 
              transition-all duration-300 ease-in-out"
            >
              <a href="#">
              Add To Cart
              </a>
            </div>

            <img className="p-10 px-4" src={img} alt={h2} />

            <span className="px-3 py-2 rounded-sm bg-red-700 text-white absolute top-2 left-2">
              {Discount}
            </span>

            <div className="flex flex-col gap-2 absolute right-2 top-2">
              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M442.9 144C415.6 144 389.9 157.1..." />
              </svg>

              <svg
                className="w-8 h-8"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path d="M320 144C254.8 144 201.2..." />
              </svg>
            </div>
          </div>

          <div className="">
            <h2 className="font-semibold text-lg ">{h2}</h2>

            <div>
              <span className="text-red-600 font-medium text-2xl">{price}</span>
              <span className="text-gray-500 line-through ml-2">
                {DiscountPrice}
              </span>
            </div>

            <div className="flex gap-1 text-center items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className={`w-5 h-5 ${
                    i < rating ? "fill-yellow-500" : "fill-gray-300"
                  }`}
                >
                  <path d="M287.9 17.8L354 150.2 499.2 171.5 382 279.1 410.6 424.6 287.9 354.6 165.3 424.6 193.9 279.1 76.8 171.5 222 150.2 287.9 17.8z" />
                </svg>
              ))}
              <span className="px-3 text-sm text-gray-500">({totaled})</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesCard;
