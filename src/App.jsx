import React from "react";

const App = () => {
  return (
        <div className='flex h-screen  bg-purple-300'>
          <div className='flex-1 p-4 mt-56 '>

            <div className='grid-item col-span-8 grid grid-cols-3 ml-5 gap-4 '> 
             {/* Grid Items */}
              {Array(6)
              .fill(0)
              .map(( _, index)=>(
                <div
                key={index}

                className="h-40 w-50 border-4 border-black rounded-lg shadow-md transition transform hover:bg-gray-500 hover:scale-105 hover:shadow-lg">
                  
                </div>
              ))}
            </div>
          </div>
                {/* Right Section */}
                <div className=" w-1/3 bg-gray-400 flex flex-col p-8">
                  <h1 className="text-2xl font-bold mt-28 text-center">Scan Qr code</h1>
                  <p className="text-lg mb-6 text-center">to begin your shopping experience</p>
                  <div className="">
                    <img 
                    src="./src/assets/Qr.jpg"
                    alt="Qr Scan"
                    className="w-56 h-56 border-4 border-black rounded-lg shadow-lg transition transform hover:bg-gray-500 hover:scale-105 hover:shadow-lg  ml-28 mt-10"
                  />
                  </div>
                </div>

        </div>
    
  );
};

export default App;
