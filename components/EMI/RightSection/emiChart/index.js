import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

function EmiChart({ principal, interestPayable }) {
  const data = {
    labels: ["Principal Amount", "Interest Payable"],
    datasets: [
      {
        data: [principal, interestPayable],
        backgroundColor: ["rgba(255, 165, 0, 1)", "rgba(124, 181, 236, 1)"],
        borderColor: ["rgba(255, 165, 0, 1)", "rgba(124, 181, 236, 1)"]
      }
    ],

    updateMode: "show"
  };

  return (
    <div className="relative mx-auto w-[270px] text-center">
      {/* Doughnut Chart */}
      <Doughnut
        options={{
          cutout: 90
        }}
        data={data}
      />
      
      {/* Centered Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-black text-sm">
        Total Amount <br />
        (Principal + Interest) <br />
        <span className="font-semibold text-lg">
          &#8377;{principal + interestPayable}
        </span>
      </div>
    </div>
  );
}

export default EmiChart;
