import React, { useState, useEffect } from "react";
import axios from "axios";

function AutoCompleteSearchBar() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const fetchData = async () => {
      if (!query) {
        setResults([]);
        return;
      }

      try {
        setLoading(true);
        const res = await axios.get(`https://dummyjson.com/recipes/search?q=${query}`);
        setResults(res.data.recipes);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

  // Debounced fetching
  useEffect(() => {  

    const timer = setTimeout(() => {
      fetchData();
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="w-full max-w-md mx-auto py-10 relative px-6">
      <input
        type="text"
        value={query}
        onFocus={() => setShowResult(true)}
        onBlur={() => setTimeout(() => setShowResult(false), 150)} // <-- fix here
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
        className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      {showResult && (
        <ul className="absolute z-10 w-full border border-gray-300 rounded-md mt-2 max-h-60 overflow-y-auto bg-white shadow-md">
          {loading && <li className="px-4 py-2 text-gray-500">Loading...</li>}

          {results.map((item) => (
            <li
              key={item.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
                setQuery(item.name);
                setShowResult(false); // hide after selecting
              }}
            >
              {item.name}
            </li>
          ))}

          {!loading && query && results.length === 0 && (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
}

export default AutoCompleteSearchBar;
