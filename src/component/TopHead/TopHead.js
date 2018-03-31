import React, { Component } from 'react'
import './TopHead.css'
import db from './assets/arrow-down.png'
import search from './assets/search.png'

class TopHead extends Component {
	render() {
		return (
			<div className="TopHead b-line">
				<div className="item">北京<img src={ db } className="db" alt="地标"/></div>
				<div className="item">维&nbsp;&nbsp;他&nbsp;&nbsp;命</div>
				<div className="item"><img src={ search } className="search" alt="search"/></div>
			</div>
		)
	}
}

export default TopHead