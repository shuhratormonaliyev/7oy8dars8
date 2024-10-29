// App.jsx
import React, { useState } from "react";
import CountrySelect from "./components/CountrySelect";

function App() {
  const [fromCountry, setFromCountry] = useState({ code: "GB", label: "United Kingdom", phone: "44" });
  const [toCountry, setToCountry] = useState({ code: "AE", label: "United Arab Emirates", phone: "971" });

  const handleSwap = () => {
    const temp = fromCountry;
    setFromCountry(toCountry);
    setToCountry(temp);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl bg-white rounded-lg shadow-lg p-6">
        
        <div className="flex justify-between items-center text-sm text-gray-500 mb-6">
          <div className="flex space-x-4">
            <button className="hover:text-gray-700">Personal/Business</button>
            <button className="hover:text-gray-700">Send Money</button>
            <button className="hover:text-gray-700">Converter</button>
            <button className="hover:text-gray-700">Currency API</button>
            <button className="hover:text-gray-700">Tools</button>
            <button className="hover:text-gray-700">Resources</button>
          </div>
          <div className="flex space-x-4">
            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700">Sign In</button>
            <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700">Register</button>
          </div>
        </div>

        <div className="bg-gray-100 rounded-lg p-4 mb-6">
          <div className="flex justify-around items-center bg-white rounded-lg mb-4 p-2 shadow">
            <button className="flex items-center px-4 py-2 bg-transparent text-blue-950 rounded-lg font-semibold">
              Convert
            </button>
            <button className="flex items-center px-4 py-2 bg-transparent text-blue-950 rounded-lg font-semibold">Send</button>
            <button className="flex items-center px-4 py-2 bg-transparent text-blue-950 rounded-lg font-semibold">Charts</button>
            <button className="flex items-center px-4 py-2 bg-transparent text-blue-950 rounded-lg font-semibold">Alerts</button>
          </div>

          <div className="mb-4 w-96">
            <label className="block text-gray-700 font-semibold mb-1">Amount</label>
            <input 
              type="text" 
              defaultValue="£100.00" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
            />
          </div>

          <div className="flex items-center ml-24">
            <div className="w-1/2 mr-2">
              <label className="block text-gray-700 font-semibold mb-1">From</label>
              <CountrySelect selectedCountry={fromCountry} onCountryChange={setFromCountry} />
            </div>
            <div className="w-1/2 ml-2">
              <label className="block text-gray-700 font-semibold mb-1">To</label>
              <CountrySelect selectedCountry={toCountry} onCountryChange={setToCountry} />
            </div>
          </div>

          <button onClick={handleSwap} className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700 flex m-auto mt-2 w-34">
          Almashtrish
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
