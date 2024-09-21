import React from "react"; 

const ChartFooter = ({ emi, principal, interestPayable }) => {
  return (
    <div className="flex justify-center space-x-8 p-4 ">
      {/* Monthly EMI Section */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-4 h-4 bg-green-500 rounded-full"></div>
          <p className="text-gray-500 text-sm">Monthly Emi</p>
        </div>
        <p className="text-black text-lg font-medium">&#8377;{emi}</p>
      </div>

      {/* Principal Section */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
          <p className="text-gray-500 text-sm">Principal</p>
        </div>
        <p className="text-black text-lg font-medium">&#8377;{principal}</p>
      </div>

      {/* Interest Paid Section */}
      <div>
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
          <p className="text-gray-500 text-sm">Interest Paid</p>
        </div>
        <p className="text-black text-lg font-medium">&#8377;{interestPayable}</p>
      </div>
    </div>
  );
};

export default ChartFooter;
