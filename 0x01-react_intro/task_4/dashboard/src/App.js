import './App.css';
import logo from './logo.jpg';
import { getFooterCopy, getFullYear } from './utils';

function App() {
	return (
		<div className='App'>
			<div className='App-header'>
				<img src={logo} alt='Holberton logo' />
				<h1>School dashboard</h1>
			</div>
			<div className='App-body'>
				<p>Login to access the full dashboard</p>
				<label htmlFor='email'>Email: </label>
				<input name='email' id='email' type='text' />
				<label htmlFor='password'>Password: </label>
				<input name='password' id='password' type='password' />
				<button>OK</button>
			</div>
			<div className='App-footer'>
				<p>
					Copyright {getFullYear()} - {getFooterCopy(true)}
				</p>
			</div>
		</div>
	);
}

export default App;
