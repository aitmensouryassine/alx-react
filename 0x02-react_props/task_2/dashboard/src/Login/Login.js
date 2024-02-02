import React from 'react';
import './Login.css';

export default function Login() {
	return (
		<>
			<label htmlFor='email'>Email: </label>
			<input name='email' id='email' type='text' />
			<label htmlFor='password'>Password: </label>
			<input name='password' id='password' type='password' />
			<button>OK</button>
		</>
	);
}
