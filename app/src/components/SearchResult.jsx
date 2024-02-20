import React from "react";
import { BASE_URL } from "../App";

const SearchResult = ({ data: foods }) => {
  return (
    <section className="py-[3%] px-[10%]">
      <div className="flex flex-wrap gap-8 items-center justify-center">
        {foods?.map((food) => (
          <div
            key={food.name}
            className="bg-transparent shadow-2xl max-w-[340px] max-h-[170px] flex justify-between border-2 border-white border-opacity-30 rounded-lg p-3"
          >
            <img src={BASE_URL + food.image} alt={food.name} />

            <div className="w-1/2 flex flex-col justify-between ">
              <h3 className="text-white text-base font-semibold">
                {food.name}
              </h3>
              <p className="text-white text-xs font-normal">{food.text}</p>
              <button className="bg-[#FF4343] max-w-[80px] self-end px-[8px] py-[3px] text-sm text-white rounded-md border-none">
                ${food.price.toFixed(2)}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchResult;
