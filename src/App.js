import React, { useEffect,useState } from 'react';
import Main from "./Components/Main";
import './Components/style.css';

function App() {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("https://frappe.io/api/method/frappe-library?page=2&title=and")
            .then((result) => {
                result.json().then((resp) => {
                    setData(resp.message); // Extract data from the response
                });
            });
    }, []);
  console.warn(data)
  return (
    <>
      <Main bookData={data} />
    </>
  );
}

export default App;
