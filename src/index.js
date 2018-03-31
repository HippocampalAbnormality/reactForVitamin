import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

document.documentElement.style.fontSize = (window.innerWidth/375*20).toFixed(3) + 'px';

window.filter = (str) => {
	return parseFloat(str);
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
