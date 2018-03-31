import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import gr from './assets/account.png'
import sy from './assets/iconfont-yundonghuwai.png'
import xx from './assets/atm.png'
import zt from './assets/iconfont-shipin.png'
import fx from './assets/iconfont-tongzhuangmuying.png'
import gract from './assets/account-act.png'
import syact from './assets/iconfont-yundonghuwai-act.png'
import xxact from './assets/atm-act.png'
import ztact from './assets/iconfont-shipin-act.png'
import fxact from './assets/iconfont-tongzhuangmuying-act.png'

const imgArr = [ syact, ztact, fxact, xxact, gract]

class Nav extends Component {
	constructor() {
		super()
		this.state = {
			arr: [
				{name: '首页', img: syact, type: 1, href: '/' }, 
				{name: '专题', img: zt, type: 0, href: '/special' }, 
				{name: '发现', img: fx, type: 0, href: '/found' }, 
				{name: '消息', img: xx, type: 0, href: '/msg' }, 
				{name: '我的', img: gr, type: 0, href: '/mine' }
			]
		}
	}
	
	toggle(i) {
		let arr = [
			{name: '首页', img: sy, type: 0, href: '/' }, 
			{name: '专题', img: zt, type: 0, href: '/special' }, 
			{name: '发现', img: fx, type: 0, href: '/found' }, 
			{name: '消息', img: xx, type: 0, href: '/msg' }, 
			{name: '我的', img: gr, type: 0, href: '/mine' }
		];
		arr[i].type = 1;
		arr[i].img = imgArr[i];
		this.setState({
			arr: arr
		})	
	}

	render() {
		let arr = this.state.arr.map((v, i) => {
			return (<Link to={ v.href } onClick={ () => { this.toggle(i) } } key={ i } className={ v.type===1 ? 'mac item' : 'item' }>
				<img className="icon" src={ v.img } />
				{ v.name }
			</Link>)
		})

		return (
			<div className="Nav mc t-line">
				{ arr }
			</div>
		)
	}
}

export default Nav