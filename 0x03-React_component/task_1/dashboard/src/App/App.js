import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

class App extends Component {
	constructor(props) {
		super(props);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

	listCourses = [
		{ id: 1, name: 'ES6', credit: 60 },
		{ id: 2, name: 'Webpack', credit: 20 },
		{ id: 3, name: 'React', credit: 40 },
	];
	listNotifications = [
		{ id: 1, type: 'default', value: 'New course available' },
		{ id: 2, type: 'urgent', value: 'New resume available' },
		{ id: 3, type: 'urgent', html: { __html: getLatestNotification() } },
	];

	handleLogOut = (evt) => {
		if (evt.ctrlKey && evt.key === 'h') {
			evt.preventDefault();
			alert('Logging you out');
			this.props.logOut();
		}
	};

	componentDidMount() {
		document.addEventListener('keydown', this.handleLogOut);
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.handleLogOut);
	}

	render() {
		return (
			<>
				<Notifications listNotifications={this.listNotifications} />
				<div className='App'>
					<Header />
					<div className='App-body'>
						{this.props.isLoggedIn ? <CourseList listCourses={this.listCourses} /> : <Login />}
					</div>
					<Footer />
				</div>
			</>
		);
	}
}

App.defaultProps = {
	isLoggedIn: false,
	logOut: () => {},
};
App.propTypes = {
	isLoggedIn: PropTypes.bool,
	logOut: PropTypes.func,
};

export default App;
