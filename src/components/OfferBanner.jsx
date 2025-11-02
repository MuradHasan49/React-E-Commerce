import React, { useState, useEffect } from "react";

const MusicExperience = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    days: 5,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = { ...prevTime };

        if (newTime.seconds > 0) {
          newTime.seconds--;
        } else {
          newTime.seconds = 59;
          if (newTime.minutes > 0) {
            newTime.minutes--;
          } else {
            newTime.minutes = 59;
            if (newTime.hours > 0) {
              newTime.hours--;
            } else {
              newTime.hours = 23;
              if (newTime.days > 0) {
                newTime.days--;
              } else {
                // Countdown finished
                clearInterval(timer);
              }
            }
          }
        }

        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="container xl: p-5 mx-auto">
      <div className="flex gap-2 relative">
        <img className="w-full " src="/Sell/Frame 600.png" alt="" />

        <div className="flex flex-col gap-10 justify-center absolute top-20 left-10">
          <span className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
            Categories
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            Enhance Your
            <br />
            <span className="text-gray-500">Music Experience</span>
          </h1>

          {/* Countdown Timer */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  {timeLeft.days.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 mt-1">Days</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 mt-1">Hours</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 mt-1">Minutes</div>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg shadow-md p-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-900">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </div>
                <div className="text-xs text-gray-500 mt-1">Seconds</div>
              </div>
            </div>
          </div>

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 transform hover:scale-105 w-full md:w-auto">
            Buy Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default MusicExperience;
