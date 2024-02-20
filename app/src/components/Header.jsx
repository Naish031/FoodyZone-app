import React from "react";

const Header = ({ handleSearch, filterByCategory }) => {
  const button = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "lunch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  return (
    <header className="h-[20vh] bg-[#0D0D0D] bg-opacity-80 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full flex justify-between px-[8%] ">
        <img src="/Foody Zone.png" alt="company logo" className="w-[100px] md:w-[200px]" />
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Food..."
          className="px-3 rounded-lg bg-transparent border border-red-600 min-h-[40px] w-[200px] max-w-[300px] text-white"
        />
      </div>

      <div className="inline-flex gap-5 md:gap-10 mt-10 text-white text-base">
        {button.map((item, index) => (
          <button
            key={index}
            onClick={() => filterByCategory(item.type)}
            className="bg-[#FF4343] px-[10px] md:px-[18px] py-[5px] rounded-md border-none hover:bg-[#ff5454]"
          >
            {item.name}
          </button>
        ))}
      </div>
    </header>
  );
};

export default Header;
