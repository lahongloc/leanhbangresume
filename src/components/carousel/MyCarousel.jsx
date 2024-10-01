import React, { useEffect, useState } from "react";
import { Carousel } from "antd";
import "./MyCarousel.css";
const contentStyle = {
	margin: 0,
	height: "160px",
	color: "#fff",
	lineHeight: "160px",
	textAlign: "center",
	background: "#364d79",
};

import hrc1 from "../../assets/awards/hrc/1.png";
import hrc2 from "../../assets/awards/hrc/2.png";
import hrc3 from "../../assets/awards/hrc/3.png";
import hrc4 from "../../assets/awards/hrc/4.png";
import hrc5 from "../../assets/awards/hrc/5.png";
import hrc6 from "../../assets/awards/hrc/6.png";

import hozo1 from "../../assets/awards/hozo/1.png";
import hozo2 from "../../assets/awards/hozo/2.png";
import hozo3 from "../../assets/awards/hozo/3.png";
import hozo4 from "../../assets/awards/hozo/4.png";

import ct1 from "../../assets/awards/chinese contest/1.png";
import soccer1 from "../../assets/awards/soccer/1.png";
import travel from "../../assets/travel.png";

const images = [
	hrc1,
	hrc2,
	hrc3,
	hrc4,
	hrc5,
	hrc6,
	hozo1,
	hozo2,
	hozo3,
	hozo4,
	ct1,
	soccer1,
];

const MyCarousel = () => {
	return (
		<>
			<Carousel arrows autoplay className="carousel-container">
				{images.map((item, index) => (
					<div key={index}>
						<img
							src={item}
							alt={`Slide ${index}`}
							style={{
								width: "100%",
								height: "500px",
								objectFit: "contain",
							}}
						/>
					</div>
				))}
				<div>
					<img
						src={travel}
						style={{
							width: "100%",
							height: "500px",
							objectFit: "contain",
						}}
					/>
				</div>
				<div>
					<img
						src={travel}
						style={{
							width: "100%",
							height: "500px",
							objectFit: "contain",
						}}
					/>
				</div>
			</Carousel>
		</>
	);
};

export default MyCarousel;
