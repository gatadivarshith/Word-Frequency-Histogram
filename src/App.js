import React, { useState } from "react";
import Papa from "papaparse";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const App = () => {
  const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [hide, setHide] = useState();

  const fetchFileData = async () => {
    // setIsLoading(true);
    setHide(true);
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await response.text();
    // const result = Papa.parse(text.trim(), { header: false });
    const words = text
      .replace(/[^\w\s]/gi, "")
      .toLowerCase()
      .split(/\s+/);
    const wordCounts = words.reduce((acc, word) => {
      acc[word] = (acc[word] || 0) + 1;
      return acc;
    }, {});
    const sortedData = Object.entries(wordCounts)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 20)
      .map(([word, Count]) => ({ name: word, Count }));
    setData(sortedData);
    // setIsLoading(false);
  };

  const handleExport = () => {
    const csvData = Papa.unparse(data);
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "histogram.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <div>{!hide && (
        <h1 onClick={setHide}>Hello,This is Gatadi Varshith</h1>
      )}
      </div>

      <div>{!hide && (
        <h2 onClick={setHide}>Click on submit button to fetch the details</h2>
      )}
      </div>
      {!hide && (
        <button
          style={{
            color: "white",
            background: "black",
            padding: "10px",
            cursor: "pointer",
            fontSize: "300%",
            border: "1px solid black",
            borderRadius: "10px",
            display: "block",
            margin: "8% 0 0 43.5%",
            
          }}
          onClick={fetchFileData}
        >
          Submit
        </button>
      )}
      {data.length > 0 && (
        <>
        <br></br>
        
        
        
        
        <h3>This histogram shows the frequency of occurance of each word </h3>
          <div style={{ display: "block", margin: "4% 0 0 20%" }}>
            <BarChart width={1000} height={450} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Count" fill="black" />
            </BarChart>
          </div>

          <div>
            <br></br>
            
          </div>
        <h4>Click on Export button to download the CSV file of the histogram data</h4>
          <button
            style={{
              color: "white",
              background: "black",
              padding: "10px",
              cursor: "pointer",
              fontSize: "140%",
              border: "1px solid black",
              borderRadius: "5px",
              display: "block",
              marginLeft: "45%",
              margin: "0% 0 0 43.5%"
            }}
            onClick={handleExport}
          >
            Export
          </button>
        
        </>
      )}
    </div>
  );

 
  
};

export default App;