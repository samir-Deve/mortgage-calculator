import { useContext } from 'react';  
import {InputContext} from '../App.jsx';  
import '../styles/inputText.css';  

function InterestRate() {
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
	return (
		<div className="input-container">
			<label>
				Interest Rate
			</label>
			<div 
			className="input"
			>
				<input 
				type="text" 
				ref={inputRefInt}
				onFocus={onFocusInt}
				onBlur={outFocusInt}
				value={intRate}
				onChange={(e) => AddInterest(e)}
				/>
				<span className="icon">
					%
				</span>
			</div>
			<span 
			className="error-msg"
			aria-selected="false"
			>This field is required</span>
		</div>
	);
}

export default InterestRate;