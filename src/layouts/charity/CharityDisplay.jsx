import React from "react";
import { Tabs, Card, Carousel } from "antd";
import "./CharityDisplay.css"; // Custom CSS cho chủ đề tối
import { charities } from "../../database/data";

const { TabPane } = Tabs;

const CharityDisplay = () => {
	return (
		<div
			style={{
				padding: "20px",
				backgroundColor: "#1c1c1c",
				minHeight: "100vh",
				paddingTop: "7.5rem",
				paddingBottom: "2rem",
			}}
		>
			<h1
				style={{
					textAlign: "center",
					color: "#fff",
					marginBottom: "40px",
				}}
			>
				Volunteer Activities
			</h1>
			<Tabs defaultActiveKey="0" centered>
				{charities.map((charity, index) => (
					<TabPane tab={charity.name} key={index}>
						<Card
							hoverable
							style={{
								backgroundColor: "#333",
								color: "#fff",
								borderRadius: 10,
								marginBottom: "20px", // Giãn cách giữa các card
							}}
							bodyStyle={{ padding: 0 }}
							cover={
								<Carousel arrows autoplay>
									{charity.images.map((image, imgIndex) => (
										<img
											key={imgIndex}
											src={image}
											alt={`charity-${imgIndex}`}
											style={{
												height: "150px", // Điều chỉnh chiều cao ảnh
												objectFit: "cover",
												borderRadius: "10px 10px 0 0",
											}}
										/>
									))}
								</Carousel>
							}
						>
							<Card.Meta
								style={{ padding: "16px" }}
								title={
									<h3
										style={{
											color: "#fff",
											textAlign: "center",
										}}
									>
										{charity.name}
									</h3>
								}
							/>
						</Card>
					</TabPane>
				))}
			</Tabs>
		</div>
	);
};

export default CharityDisplay;
