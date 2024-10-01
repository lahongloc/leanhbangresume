import React from "react";
import { Card, List, Typography, Divider } from "antd";
import {
	CalendarOutlined,
	UserOutlined,
	InfoCircleOutlined,
} from "@ant-design/icons";
import "./ExperienceCard.css"; // Import file CSS để thêm kiểu

const { Text, Title } = Typography;

const ExperienceCard = ({ company, roles, period, description }) => {
	return (
		<Card
			bordered={false}
			className="experience-card"
			style={{
				width: "100%",
				maxWidth: 400,
				borderRadius: 10,
				overflow: "hidden",
			}}
		>
			<Title
				level={3}
				style={{ color: "#fff", textAlign: "left", marginBottom: 0 }}
			>
				<UserOutlined style={{ marginRight: 8 }} />
				{company}
			</Title>
			<Divider style={{ borderColor: "#555" }} />
			<Title level={4} style={{ color: "#fff", textAlign: "left" }}>
				<CalendarOutlined style={{ marginRight: 8 }} />
				Roles
			</Title>
			<List
				size="small"
				dataSource={roles}
				renderItem={(role) => (
					<List.Item style={{ color: "#fff", textAlign: "left" }}>
						<InfoCircleOutlined style={{ marginRight: 8 }} />
						{role}
					</List.Item>
				)}
			/>
			<Divider style={{ borderColor: "#555" }} />
			<Text
				style={{ color: "#fff", textAlign: "left", display: "block" }}
			>
				<strong>Period:</strong> {period.start} - {period.end}
			</Text>
			<Text
				style={{ color: "#fff", textAlign: "left", display: "block" }}
			>
				<strong>Description:</strong> {description}
			</Text>
		</Card>
	);
};

export default ExperienceCard;
