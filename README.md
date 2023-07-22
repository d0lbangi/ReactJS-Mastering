import React, { useState, useEffect } from 'react'



const App = () => {

	const [value, setValue] = useState(0);
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');

	const handleCounterPlus = () => {
		setValue(value+1);
	}
	const handleCounterMinus = () => {
		setValue(value-1);
	}

	const onChangeName = e => {
		setName(e.target.value);
	}
	const onChangenickname = e => {
		setNickname(e.target.value);
	}
	
	const formatName = (user) => {
		return user.firstName + ' ' + user.lastName;
	}

	const user = {
		firstName : 'JEONGHO',
		lastName : 'PARK'
	}

	const element = {
		type: 'h1',
		props: {
			className: 'greeting',
			children: 'Hello, world!'
		}
	}

	const myName = (
		<>
			<h1>
				<p>Hi, My name is {formatName(user)}!!</p>
				<p>Good to meet you</p>
			</h1>
		</>
	)	


	return (
		<>
			<p>Current Counter Value : <b>{value}</b></p>		
			<button onClick={handleCounterPlus}>+</button>
			<button onClick={handleCounterMinus}>-</button>
			<div>
				<input value={name} onChange={onChangeName}/>
				<input value={nickname} onChange={onChangenickname}/>
			</div>
			<div>이름 : {name}, 닉네임 : {nickname}</div><br/><br/>

			{myName}
		</>
	)
}

export default App
