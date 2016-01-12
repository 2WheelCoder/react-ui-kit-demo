import React, {Component} from 'react'
import Slider from 'react-slick'

export default class SliderComponentExample extends Component {
	render () {
		const sliderSettings = {
			autoplay: true,
			autoplaySpeed: 3000,
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false
		}

		return (
			<div>
				<div className="component-view__example">
					<Slider className="slider" {...sliderSettings}>
						<div className="slider__item">
							<h2 className="heading-1">Slide 1</h2>
						</div>

						<div className="slider__item">
							<h2 className="heading-1">Slide 2</h2>
						</div>

						<div className="slider__item">
							<h2 className="heading-1">Slide 3</h2>
						</div>
					</Slider>
				</div>

				<pre className="component-view__code">							
{`const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
}

<Slider className="slider" {...sliderSettings}>
    <div className="slider__item">
        <h2 className="heading-1">Slide 1</h2>
    </div>

    <div className="slider__item">
        <h2 className="heading-1">Slide 2</h2>
    </div>

    <div className="slider__item">
        <h2 className="heading-1">Slide 3</h2>
    </div>
</Slider>`}
						</pre>
			</div>
		)
	}
}