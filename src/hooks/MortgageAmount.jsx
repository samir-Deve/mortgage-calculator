import { useContext } from 'react';  
import {InputContext} from '../App.jsx';  
import '../styles/inputText.css';  

function MortgageAmount() {  
  const [
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

  return (  
    <div className='input-container'>  
      <label htmlFor="amount">  
        Mortgage Amount  
      </label>  
      <div className="input" aria-selected="false">  
        <span className="icon">£</span>  
        <input 
				onFocus={onFocusAm} 
				onBlur={outFocusAm}
				ref={inputRefAm} 
        value={morAmount}
        onChange={(e) => AddAmount(e)}
				type="text" />  
      </div>  
      <span className="error-msg" aria-selected="false">  
        This field is required  
      </span>  
    </div>  
  );  
}  

export default MortgageAmount;