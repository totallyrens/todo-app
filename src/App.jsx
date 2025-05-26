import './App.css';
import { useState } from 'react';

function App() {
	const [userInput, setUserInput] = useState('');
	const [todo, setTodo] = useState('Placeholder');

	const inputHandler = (e) => {
		setUserInput(e.target.value);
		console.log(e.target);
	};

	const handleTodo = (e) => {
		setTodo(userInput);
		e.preventDefault();
	};

	return (
		<>
			<div className='intro'>
				<h1>🔥 React Todo Application 🔥</h1>
				<p>For all your shitty tasks</p>
			</div>
			<div className='todo-container'>
				<div className='todo'>
					<h2>{todo}</h2>
				</div>
				<form action=''>
					<input
						type='text'
						value={userInput}
						onChange={inputHandler}
						class='todo-input radius'
					/>
					<button onClick={handleTodo} class='todo-button'>
						Add Todo
					</button>
				</form>
			</div>
		</>
	);
}

export default App;
