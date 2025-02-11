import React, { useState, useEffect } from "react";

function App() {
  const [items, setItems] = useState([]);

  // Fetch data from the backend API
  useEffect(() => {
    fetch("http://backend-container:5000/data") // Backend container name
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>Items from the Database</h1>
      {items.length > 0 ? (
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> (Age: {item.age}, Email: {item.email})
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
}

export default App;

