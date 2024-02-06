import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';

const listCourses = [
	{ id: 1, name: 'ES6', credit: 60 },
	{ id: 2, name: 'Webpack', credit: 20 },
	{ id: 3, name: 'React', credit: 40 },
];
const listNotifications = [
	{
		id: 0,
		type: 'default',
		value: 'New course available',
	},
	{
		id: 1,
		type: 'urgent',
		value: 'New resume available',
	},
	{
		id: 2,
		type: 'urgent',
		html: { __html: getLatestNotification() },
	},
];

class App extends Component {
	constructor(props) {
		super(props);
		this.handleLogOut = this.handleLogOut.bind(this);
	}

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
				<Notifications listNotifications={listNotifications} />
				<div className='App'>
					<Header />
					<div className='App-body'>
						{this.props.isLoggedIn ? (
							<BodySectionWithMarginBottom title='Course list'>
								<CourseList listCourses={listCourses} />
							</BodySectionWithMarginBottom>
						) : (
							<BodySectionWithMarginBottom title='Log in to continue'>
								<Login />
							</BodySectionWithMarginBottom>
						)}
					</div>
					<BodySection title='News from the School'>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus blandit enim varius cursus
							luctus. Proin quis erat vitae ante accumsan lobortis. Etiam et gravida lorem. Cras faucibus
							id ligula a cursus. Sed porta mauris non fringilla lacinia. Praesent sit amet leo tellus.
							Fusce vestibulum, massa eget egestas aliquet, lacus orci euismod purus, sed ullamcorper erat
							mauris a tortor.
						</p>
					</BodySection>
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
