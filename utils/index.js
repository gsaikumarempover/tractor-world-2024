import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAddressData } from "../store/slices/userDataSlice"; 

export const useGeolocation = () => {
    const dispatch = useDispatch();
    const [error, setError] = useState(null);
    console.log(error,"maps denied")
    const getLocation = useCallback(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            // const latitude = 20.00 //maharastara
            // const longitude = 76.00
            // const latitude = 23.00 //madya pradesh
            // const longitude = 80.00
            getAddress(latitude, longitude);
          },
          (err) => {
            setError(err);
          }
        );
      } else {
        setError('Geolocation is not supported by this browser.');
      }
    }, []);
  
    const getAddress = useCallback(async (latitude, longitude) => {
      try {

        if (typeof window !== 'undefined') {
        const response = await fetch(
          `${process.env.LOCATION_GET_API}?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
        );
        const data = await response.json();
        if (data && data.address) {
          console.log(data.address, 'address from API');
          dispatch(setAddressData({ addressData: data.address }));
        } else {
          setError('Address not found');
        }
       }
        else {
          console.log('Skipping fetch during build');
        }
      } catch (err) {
        setError('Failed to fetch address');
      }
    }, [dispatch]);
  
    return {error, getLocation };
  };
  
  export const calculateEmi = ({ loanAmount, roi, tenure, downPayment }) => {
    const principal = loanAmount - downPayment; // Adjusted loan amount after downpayment
    const monthlyInterestRate = roi / (12 * 100); // Monthly interest rate
    return (
      Math.round((principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, tenure)) / (Math.pow(1 + monthlyInterestRate, tenure) - 1)) || "--"
    );
  };
  
  export const calculateInterest = ({ emi, tenure, loanAmount, downPayment }) => {
    const principal = loanAmount - downPayment; // Adjusted loan amount after downpayment
    return emi * tenure - principal; // Total interest payable
  };
  