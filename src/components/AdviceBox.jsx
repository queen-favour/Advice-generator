import React, { useEffect, useState } from "react";
import divider from "../assets/pattern-divider-desktop.svg";
import dice from "../assets/icon-dice.svg";
import { getQuote } from "../service/api";

const AdviceBox = () => {
  const [slip, setSlip] = useState({});

  const fetchQuote = async () => {
    try {
      const response = await getQuote(); // Wait for the promise to resolve
      setSlip(response?.data?.slip);
      console.log("Response:", response?.data?.slip); // Log the slip
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };
  useEffect(() => {
    fetchQuote(); // Call the async function
  }, []);

  return (
    <div className="bg-custom-dark-blue h-screen flex items-center justify-center ">
      <div className="bg-dark-grayish-blue relative flex flex-col items-center justify-center p-4 rounded-lg w-full h-auto gap-4 align-middle lg:p-9 lg:rounded-xl lg:w-[25rem] lg:h-[20rem] lg:mx-0 mx-6">
        <p className="text-neon-green uppercase text-sm tracking-wide font-[600]">
          Advice #<span>{slip.id}</span>
        </p>
        <p className="text-[28px] font-[600] text-light-cyan">
          "{slip.advice}"
        </p>
        <img className="pb-10" src={divider} alt="" />
        <div
          className="cursor-pointer bg-neon-green h-fit p-[0.8rem] rounded-full absolute -bottom-5 active:shadow-[0_0_15px_4px_rgba(43,252,140,1)] hover:shadow-[0_0_20px_4px_rgba(43,252,140,0.75)] drop-shadow-xl transition-shadow duration-300"
          onClick={() => fetchQuote()}
        >
          <img src={dice} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdviceBox;
