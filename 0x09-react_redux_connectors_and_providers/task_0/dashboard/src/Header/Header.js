import React, { Component } from 'react';
import logo from '../assets/logo.jpg';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

export default class Header extends Component {
	static contextType = AppContext;

	handleLogOut = () => {};

	render() {
		const { user, logOut } = this.context;
		const { isLoggedIn, email } = user;

		return (
			<>
				<div className={css(styles.header)}>
					<img className={css(styles.logo)} src={logo} alt='Holberton logo' />
					<h1 className={css(styles.heading)}>School dashboard</h1>
				</div>
				{isLoggedIn ? (
					<section id='logoutSection'>
						<p>
							Welcome {email} (
							<a href='#' id='logOut' onClick={logOut}>
								logout
							</a>
							)
						</p>
					</section>
				) : null}
			</>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		display: 'flex',
		alignItems: 'center',
	},
	logo: {
		width: '300px',
		height: '300px',
	},
	heading: {
		color: '#e0354b',
	},
});
