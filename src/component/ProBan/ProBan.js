import React, { Component } from 'react'
import './ProBan.css'

class ProBan extends Component {
	constructor() {
		super();
		this.state = {
			w: 0
		}
	}

	componentDidMount() {
		// 这里可以用refs和findDomNode（this.refs里的是react的component，虚拟dom）,findDomNode拿到的是实体dom，可以用来获取width之类的东西(但我下面的使用看起来没啥事啊)
		let aim = this.refs.line;
				
		this.ban = this.refs.ban;
		this.w = parseFloat(window.getComputedStyle(aim).width);
		this.scale = (window.innerWidth/this.w).toFixed(3);

		this.setState({
			w: this.scale > 1 ? '100%' : this.scale*100 + '%'
		});
	}

	// 为什么下面用了箭头函数这里才能取this？难道下面这个也是箭头函数的赋值简写形式？不对，那样的话下面直接调用此方法打印this不能是undefined
	scroll() {
		let change = (this.ban.scrollLeft/this.w).toFixed(3);
		this.setState({
			w: (+this.scale + (+change)) > 1 ? '100%' : (+this.scale + (+change))*100 + '%'
		});
	}

	render() {
		let arr = {
			a1: [
				<img key="1" alt="test" className="proimg" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504277551.jpg" />,
				<img key="2" alt="test" className="proimg" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2516914607.jpg" />,
				<img key="3" alt="test" className="proimg" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2456629716.jpg" />,
				<img key="4" alt="test" className="proimg" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2504760614.jpg" />,
				<img key="5" alt="test" className="proimg" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2515316360.jpg" />,
				<img key="6" alt="test" className="proimg" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2506466229.jpg" />,
			],
			a2: [
				<img key="1" alt="test" className="proimg" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2507709428.jpg" />,
				<img key="2" alt="test" className="proimg" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505928032.jpg" />,
				<img key="3" alt="test" className="proimg" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2511375626.jpg" />,
				<img key="4" alt="test" className="proimg" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2500130777.jpg" />,
				<img key="5" alt="test" className="proimg" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2505925363.jpg" />,
				<img key="6" alt="test" className="proimg" src="https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2503997609.jpg" />,
			]
	  }
		return (
			<div className="ProBan mb05" ref="ProBan">
				<div className="head">
					<p className="tit">今日上新</p>
					<p className="lin">每日最新鲜单品等你拔草</p>
				</div>
				<div className="hideScroll">
					<div onScroll={ () => { this.scroll() } } className="ban" ref="ban">
						<div className="line" ref="line">
							{ arr.a1 }
						</div>
						<div className="line">
							{ arr.a2 }
						</div>
					</div>
				</div>
				<div className="bar">
					<div className="child" style={ {width: this.state.w} }></div>
				</div>
			</div>
		)
	}
}

export default ProBan