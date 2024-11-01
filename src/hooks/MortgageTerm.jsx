import { useContext } from 'react';  
import {InputContext} from '../App.jsx';  

import '../styles/inputText.css'
function MortgageTerm() {
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
		<div className="input-container">
			<label>
				Mortgage Term
			</label>
			<div 
			className="input"
			
			>
				<input 
				onFocus={onFocusTe}
				onBlur={outFocusTe}
				ref={inputRefTe}
				value={morTerm}
				onChange={(e) => AddTerm(e)}
				type="text" 
				/>
				<span className="icon">
					Years
				</span>
			</div>
			<span 
			className="error-msg"
			aria-selected="false"
			>This field is required</span>
		</div>
	);
}

export default MortgageTerm;