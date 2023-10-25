import React, { useState } from 'react';
import { FaHeart, FaSearch } from "react-icons/fa";
import searchhh from "./searchh.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from '@fortawesome/free-solid-svg-icons';

const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [option, setOption] = useState("");
  const [placeholder, setPlaceholder] = useState("Type to search");

  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return value && user.name && user.name.toLowerCase().includes(value);
        });
        setResults(results);
      });
  };

  const handleOptionChange = (value) => {
    setOption(value);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  const handleItemClick = (item) => {
    setInput("");
    setPlaceholder(item.label);
  };

  const options = [
    { label: "Choose category" },
    { label: "Vehicle", value: 1 },
    { label: "Machinery", value: 2 },
    { label: "Electronics", value: 3 },
    { label: "Clothes", value: 4 },
    { label: "Houses", value: 5 },
    { label: "Event Equipment", value: 6 }
  ];

  return (
    <div id="lilini">
      <select
        onChange={(e) => handleOptionChange(e.target.value)}
        value={option}
        id="span"
      >
        {options.map((option) => (
          <option key={option.label} value={option.label}>
            {option.label}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder={placeholder}
        name="input"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
      {/* <div id="klsls"><FaSearch id="bkbk"/></div> */}
      
    </div>
  );
};

export default SearchBar;