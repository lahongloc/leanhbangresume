import React from "react";
import { Timeline, Typography, Tag, Card } from "antd";
import { ClockCircleOutlined, CalendarOutlined } from "@ant-design/icons";
import { workExperience } from "../../database/data";

const { Title, Text } = Typography;

const MobileExperience = () => {
	return (
		<Card
			style={{
				backgroundColor: "rgb(0, 0, 0, 0.8)",
				color: "#fff",
				width: "100%",
				margin: "auto",
				marginTop: "-3rem",
			}}
		>
			<Title level={2} style={{ color: "yellow", textAlign: "left" }}>
				Work Experience
			</Title>
			<Timeline mode="left" style={{ color: "#fff" }}>
				{workExperience.map((experience, index) => (
					<Timeline.Item
						key={index}
						color={
							experience.period.end === "Present"
								? "green"
								: "blue"
						}
					>
						<div
							style={{ marginBottom: "10px", textAlign: "left" }}
						>
							<span style={{ color: "#fff" }}>
								<CalendarOutlined style={{ marginRight: 5 }} />
								{experience.period.start} -{" "}
								{experience.period.end}
							</span>
							<Title level={4} style={{ color: "#fff" }}>
								{experience.company}
							</Title>
							<div>
								{experience.roles.map((role, idx) => (
									<Tag
										key={idx}
										color="blue"
										style={{
											marginBottom: "5px",
											fontSize: "14px",
										}}
									>
										{role}
									</Tag>
								))}
							</div>
							<Text style={{ color: "#fff" }}>
								{experience.description}
							</Text>
						</div>
					</Timeline.Item>
				))}
			</Timeline>
		</Card>
	);
};

export default MobileExperience;
