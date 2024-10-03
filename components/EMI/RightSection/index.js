import { calculateEmi, calculateInterest } from "@utils"; 
import { useDispatch,useSelector } from "react-redux";
import { setTotalPrincipleAndInt } from "@store/userDataSlice";
import EmiChart from "./emiChart";
import ChartFooter from "./chartFooter";
 
const RightSection = ({ state }) => {

  const dispatch=useDispatch();

  //{"principal":1000000,"loanAmount":549998,"tenure":48,"roi":9.1,"downPayment":401133} 

  const { principal, roi, tenure, loanAmount,downPayment} = state;

  console.log("EMI CLALCULATOR"+JSON.stringify(state));

  const emi = calculateEmi({ loanAmount, roi, tenure,downPayment });

  const interestPayable = calculateInterest({ emi, tenure, loanAmount, downPayment });

  const principalAmt=loanAmount-downPayment;

  const totalAmtwithIntres=parseInt(principalAmt+interestPayable);

  dispatch(setTotalPrincipleAndInt(totalAmtwithIntres));
 
  return (
    <div className="rightsection-wrapper">
      <EmiChart principal={principalAmt} interestPayable={interestPayable} emi={emi}/> 
      <ChartFooter       
        emi={emi}
        principal={principalAmt}
        interestPayable={interestPayable}
      />
    </div>
  );
};

export default RightSection;