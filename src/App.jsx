import { useState, useRef, createContext } from "react";
import MortgageAmount from "./hooks/MortgageAmount";
import MortgageTerm from "./hooks/MortgageTerm";
import InterestRate from "./hooks/InterestRate";
import Results from "./hooks/resuts";
import Empthy from "./hooks/empthy";
import MortgageType from "./hooks/MortgageType";
import Calculate from "./hooks/button";
import "./styles/app.css";
import Message from "./hooks/message";

export const InputContext = createContext();

function App() {
  const [calced, setCalced] = useState();
  const [morAmount, setMorAmount] = useState("");
  const [morTerm, setMorTerm] = useState("");
  const [intRate, setIntRate] = useState("");
  const [morType, setMorType] = useState("");
  const [msg, setMsg] = useState(false);
  const inputRefAm = useRef(null);
  const inputRefTe = useRef(null);
  const inputRefInt = useRef(null);
  const radioRefRep = useRef(null);
  const radioRefRate = useRef(null);

  function AddAmount(e) {
    setMorAmount(e.target.value);
  }

  function onFocusAm() {
    const par = inputRefAm.current.parentElement;
    par.setAttribute("aria-selected", "true");
    console.log("yari");
  }

  function outFocusAm() {
    const par = inputRefAm.current.parentElement;
    par.setAttribute("aria-selected", "false");
    console.log("yari");
  }
  /* ========== */
  function AddTerm(e) {
    setMorTerm(e.target.value);
    console.log(morTerm);
  }
  function onFocusTe() {
    const par = inputRefTe.current.parentElement;
    par.setAttribute("aria-selected", "true");
  }

  function outFocusTe() {
    const par = inputRefTe.current.parentElement;
    par.setAttribute("aria-selected", "false");
    console.log("term");
  }
  /* ========== */
  function AddInterest(e) {
    setIntRate(e.target.value);
    console.log(intRate);
  }
  function onFocusInt() {
    const par = inputRefInt.current.parentElement;
    par.setAttribute("aria-selected", "true");
  }

  function outFocusInt() {
    const par = inputRefInt.current.parentElement;
    par.setAttribute("aria-selected", "false");
    console.log("rate");
  }
  /* ========== */

  function onFocusRadio() {
    console.log(radioRefRep.current.id);
    if (radioRefRep.current.checked && radioRefRep.current.id === "repay") {
      setMorType(radioRefRep.current.id);
      radioRefRate.current.parentElement.setAttribute("aria-selected", "false");
      const par = radioRefRep.current.parentElement;
      par.setAttribute("aria-selected", "true");
      console.log(morType);
    } else {
      setMorType(radioRefRate.current.id);
      radioRefRep.current.parentElement.setAttribute("aria-selected", "false");
      const par = radioRefRate.current.parentElement;
      par.setAttribute("aria-selected", "true");
      console.log("value" + morType);
    }
  }
  /* ================== */
  function calculate() {
    const data = [Number(morAmount), Number(morTerm), Number(intRate), morType];
    if (!data[0] && !data[1] && !data[2] && !data[3]) {
      isError();
    } else {
      data.forEach((each) => {
        if (!each) {
          setMsg(true);
        } 
				else if(each){
					calcRepayment(data[0], data[1], data[2], data[3])
        }
      });
    }
  }

  function isError() {
    inputRefAm.current.parentElement.nextElementSibling.setAttribute(
      "aria-selected",
      "true"
    );
    inputRefTe.current.parentElement.nextElementSibling.setAttribute(
      "aria-selected",
      "true"
    );
    inputRefInt.current.parentElement.nextElementSibling.setAttribute(
      "aria-selected",
      "true"
    );
    radioRefRate.current.parentElement.parentElement.nextElementSibling.setAttribute(
      "aria-selected",
      "true"
    );

    inputRefAm.current.parentElement.classList.add("wrong");
    inputRefTe.current.parentElement.classList.add("wrong");
    inputRefInt.current.parentElement.classList.add("wrong");
  }

  function doItAgain() {
    setMsg(!msg);
    console.log(msg);
  }

	function calcRepayment(principal, years, annualInterestRate, type) {   
    const monthlyInterestRate = annualInterestRate / 100 / 12;  
    const totalPayments = years * 12;  

    const monthlyPayment = principal * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalPayments)) /  
        (Math.pow(1 + monthlyInterestRate, totalPayments) - 1);  
 
    const totalPayment = monthlyPayment * totalPayments;  
 
    const totalInterest = totalPayment - principal;  
		const monIntPay = totalInterest / (years * 12)
   
		setCalced({  
			monthlyPayment: monthlyPayment.toLocaleString(undefined, { 
																								minimumFractionDigits: 2,
																								maximumFractionDigits: 2 
																								}),  
			totalPayment: totalPayment.toLocaleString(undefined, {
																							minimumFractionDigits: 2,
																							maximumFractionDigits: 2 
																							}),  
			totalInterest: totalInterest.toLocaleString(undefined, {
																									minimumFractionDigits: 2,
																									maximumFractionDigits: 2 
																									}),  
			type: type,
			monIntPay: monIntPay.toLocaleString(undefined, {
																					minimumFractionDigits: 2,
																					maximumFractionDigits: 2 
																					}),  
	})
	console.log(calced)
} 

function clearAll() {
	window.location.reload()
}

  return (
    <InputContext.Provider
      value={[
        morAmount,
        AddAmount,
        onFocusAm,
        outFocusAm,
        inputRefAm,
        morTerm,
        AddTerm,
        onFocusTe,
        outFocusTe,
        inputRefTe,
        intRate,
        AddInterest,
        onFocusInt,
        outFocusInt,
        inputRefInt,
        onFocusRadio,
        radioRefRep,
        radioRefRate,
        calculate,
      ]}
    >
      <div className="main-container">
        <div className="forms-cont">
					<div className="header">
						<h1>Mortgage calculator</h1>
						<button onClick={clearAll}>Clear All</button>
					</div>
          <MortgageAmount />
          <div className="mort-type-cont">
            <MortgageTerm />
            <InterestRate />
          </div>
          <MortgageType />
          <Calculate />
        </div>
        {calced ? <Results {...calced}/>: <Empthy />}
        {msg ? <Message do={doItAgain} /> : ""}
      </div>
    </InputContext.Provider>
  );
}

export default App;
