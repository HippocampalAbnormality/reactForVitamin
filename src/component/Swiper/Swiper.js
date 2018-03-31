import React from 'react'
import './Swiper.css'
import Carousel from 'antd-mobile/lib/carousel';
import 'antd-mobile/lib/carousel/style/css';

const Swiper = () => {
	let aim = [
		{ src: 'http://imge.kugou.com/mobilebanner/20180330/20180330194050941949.jpg' },
		{ src: 'http://imge.kugou.com/mobilebanner/20180330/20180330190735937889.jpg' }
	]
	let arr = aim.map((v, i) => {
		return (
			<img src={ v.src } key={ i } alt="test" />
		)
	})

	return (
		<div className="Swiper mb05">
			<Carousel
        autoplay={ true }
        infinite
        selectedIndex={ 0 }
      >
        { arr }
      </Carousel>
		</div>
	)
}

export default Swiper