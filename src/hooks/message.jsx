import '../styles/message.css'
function Message(props) {
	return (
		<div className='msg-main-cont'>
			<div className="msg-cont">
				<h2>Seriously ? 😐</h2>
				<p className="msg">
					Fill out all inputs bey !!!
				</p>
				<button
				onClick={props.do}
				>Okay, I fill All inputs</button>
			</div>
		</div>
	);
}

export default Message;