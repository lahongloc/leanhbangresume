import React from "react";
import { Card, Carousel } from "antd";
import { charities } from "../../database/data";

const CharityComponent = () => {
	return (
		<div
			style={{
				padding: "16px",
				backgroundColor: "#1c1c1c",
				color: "#fff",
				paddingTop: "5rem",
			}}
		>
			{charities.map((charity, index) => (
				<Card
					key={index}
					style={{
						marginBottom: "16px",
						backgroundColor: "#2a2a2a",
						borderRadius: "8px",
					}}
					bodyStyle={{ padding: "8px" }}
					title={charity.name}
					headStyle={{ color: "#fff", fontSize: "16px" }}
				>
					<Carousel autoplay>
						{charity.images.map((image, imgIndex) => (
							<div key={imgIndex}>
								<img
									src={image}
									alt={`Charity ${index + 1} image ${
										imgIndex + 1
									}`}
									style={{
										width: "100%",
										height: "auto",
										borderRadius: "8px",
									}}
								/>
							</div>
						))}
					</Carousel>
				</Card>
			))}
		</div>
	);
};

export default CharityComponent;
