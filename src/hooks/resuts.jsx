import '../styles/results.css'
function Results(props) {
	console.log(props)
	return (
		<div className='results-container'>
			<div className="upper-part">
				<h2>Your Results</h2>
				<p className="header-text">
				Your results are shown below based on the information you provided. To adjust the resluts edite the form and "Calculate repayments" again
			</p>
			</div>
			<div className="results">
				<div className="monthly-payments">
					<h5>Your monthly repayments</h5>
					<span className="monthly-amount">
					 £ {props.type === "repay"? 
					 		props.monthlyPayment: props.monIntPay
						 }
					</span>
				</div>
				<div className="over-time-payments">
					<h5>Total you will pay over time </h5>
					<span className="total-amount">
						£{props.type === "repay"? props.totalPayment: props.totalInterest}
					</span>
				</div>
			</div>
		</div>
	);
}

export default Results;