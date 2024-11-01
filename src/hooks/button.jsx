import { useContext } from 'react';  
import {InputContext} from '../App.jsx';  
import '../styles/button.css';

function Calculate() {
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
		<button
		className='button'
		 onClick={calculate}>
			<span className="icon">
			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#133041" d="M18.75 2.25H5.25a1.5 1.5 0 0 0-1.5 1.5v16.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V3.75a1.5 1.5 0 0 0-1.5-1.5Zm-10.5 16.5a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 18.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25ZM12 15a1.125 1.125 0 1 1 0-2.25A1.125 1.125 0 0 1 12 15Zm3.75 3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm0-3.75a1.125 1.125 0 1 1 0-2.25 1.125 1.125 0 0 1 0 2.25Zm1.5-5.25a.75.75 0 0 1-.75.75h-9a.75.75 0 0 1-.75-.75V6a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 .75.75v3.75Z"/></svg>
			</span>
			<p className="text">
				Calculate Repayments
			</p>
		</button>
	);
}

export default Calculate;