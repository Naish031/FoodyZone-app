import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null); 
  const [selectedBtn, setSelectedBtn] = useState("all");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    try {
      const getData = async () => {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setData(data);
        setFilteredData(data);
        setLoading(false);
      };
      getData();
    } catch (err) {
      setError("Error fetching data. Try again.");
    }
  }, []);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (!query || !data) {
      setFilteredData(data); 
      return;
    }
    const filteredData = data?.filter((food) => {
      return food.name.toLowerCase().includes(query);
    });
    setFilteredData(filteredData);
  };

  const filterByCategory = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filteredData = data?.filter((food) => {
      return food.type.toLowerCase().includes(type.toLowerCase());
    });
    setFilteredData(filteredData);
    setSelectedBtn(type);
  };
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="">
      <Header handleSearch={handleSearch} filterByCategory={filterByCategory} />
      <section className="bg-[url('/bg.png')] bg-cover min-h-[80vh] ">
        <SearchResult data={filteredData} />
      </section>
    </div>
  );
};

export default App;
