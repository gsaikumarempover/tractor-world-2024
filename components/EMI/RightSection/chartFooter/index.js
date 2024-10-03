import React from "react"; 

const ChartFooter = ({ emi, principal, interestPayable }) => {
  return (
    <div className="w-2/3 block m-auto">
    <div class="flex flex-col space-y-2">
    <div class="flex justify-between items-center">
      <div class="flex items-center"><span class="w-[10px] h-[10px] border-[2px] bg-orange-400 border-orange-400 mx-4 align-middle"></span>
      <label class="text-gray-700 font-semibold">Principal</label>
      </div>
      <div class="flex-grow text-right mb-4">
       &#8377;{principal.toLocaleString('en-IN')}
        </div>
        </div>
      </div>

     <div class="flex flex-col space-y-2">
    <div class="flex justify-between items-center">
      <div class="flex items-center"><span class="w-[10px] h-[10px] border-[2px] bg-[#FBB040] border-[#FBB040] mx-4 align-middle"></span>
      <label class="text-gray-700 font-semibold">Interest Paid</label>
      </div>
      <div class="flex-grow text-right mb-4">
      &#8377;{interestPayable.toLocaleString('en-IN')}
        </div>
        </div>
      </div>
</div>
     
  );
};

export default ChartFooter;
