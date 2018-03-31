import React, { Component } from 'react'
import './Home.css'
import ProBan from '../ProBan/ProBan'
import Swiper from '../Swiper/Swiper'

class Home extends Component {
	render() {
		return (
			<div className="Home">
				<Swiper />
        <ProBan />				
			</div>
		)
	}
}

export default Home