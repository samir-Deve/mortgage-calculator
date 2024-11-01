import { useContext } from 'react';  
import {InputContext} from '../App.jsx';  
import '../styles/mortgageType.css' 

function MortgageType() {
  const[
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
    calculate
  ] = useContext(InputContext); 
  console.log("rendered")
  return (
    <div className="type-container">
      <label>Mortgage Type</label>
      <div className="radio">
        <label className="repayment" aria-selected="false">
          <input 
          type="radio" 
          name="type" 
          ref={radioRefRep}
          onChange={onFocusRadio}
          id='repay'
          />
          <div className="circle"></div>
          <span className="label">Repayment</span>
        </label>

        <label className="interest-only" aria-selected="false">
          <input 
          type="radio" 
          name="type" 
          ref={radioRefRate}
          onChange={onFocusRadio}
          id='rate'
          />
          <div className="circle"></div>
          <span className="label">Interest Only</span>
        </label>
      </div>
      <span 
        className="error-msg"
        aria-selected="false"
        >This field is required
        </span>
    </div>
  );
}

export default MortgageType;
