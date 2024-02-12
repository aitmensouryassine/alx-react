import React from 'react';
import { StyleSheet, css } from 'aphrodite';

export default function Login() {
	return (
		<>
			<p>Login to access the full dashboard</p>
			<label htmlFor='email'>Email: </label>
			<input name='email' id='email' type='text' />
			<label className={css(styles.label_btn)} htmlFor='password'>
				Password:{' '}
			</label>
			<input name='password' id='password' type='password' />
			<button className={css(styles.label_btn)}>OK</button>
		</>
	);
}

const styles = StyleSheet.create({
	label_btn: {
		marginLeft: '10px',
	},
});
