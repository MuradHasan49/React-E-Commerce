import React from "react";

const Discount = () => {
  return (
    <>
      <div className="bg-black h-12 flex items-center">
        <div className="container mx-auto flex justify-between items-center px-4">
          {/* ===== Text Section ===== */}
          <div className="text-white flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-5 text-center sm:text-left font-semibold text-[12px] sm:text-[14px] md:text-[16px] xl:h-full">
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery -{" "}
              <span className="text-yellow-400 font-bold">
                OFF 50%!
                {/* Show inline "Shop Now" only on small screens */}
                <a
                  href="#"
                  className="ml-1 font-bold underline-offset-4 hover:underline transition-all duration-300 ease-in-out sm:hidden"
                >
                  Shop Now
                </a>
              </span>
            </p>

            {/* Separate "Shop Now" for larger screens */}
            <a
              href="#"
              className="hidden sm:inline-block font-bold underline-offset-4 hover:underline transition-all duration-300 ease-in-out"
            >
              Shop Now
            </a>
          </div>

          {/* ===== Language Selector ===== */}
          <div className="flex items-center">
            <select className="bg-transparent text-white px-2 py-1 text-sm sm:text-base rounded-lg focus:outline-none focus:ring-0 cursor-pointer">
              <option className="bg-gray-700 text-white" value="en">
                English
              </option>
              <option className="bg-gray-700 text-white" value="bn">
                বাংলা
              </option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
