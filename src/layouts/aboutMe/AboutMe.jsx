import React from "react";
import { Row, Col, Card, Typography, Tag, Table } from "antd";
import {
	UserOutlined,
	CalendarOutlined,
	BookOutlined,
	HighlightOutlined,
} from "@ant-design/icons";
import "./AboutMe.css";
import "animate.css"; // Import animate.css
import { personalInformation } from "../../database/data";
import Terminal from "../../components/terminal/Terminal";

const { Title, Paragraph } = Typography;

const AboutMe = () => {
	// Columns for the Table
	const columns = [
		{
			title: "Information",
			dataIndex: "label",
			key: "label",
		},
		{
			title: "Details",
			dataIndex: "value",
			key: "value",
		},
	];

	// Data for the Table
	const dataSource = [
		{
			key: "1",
			label: "Full Name",
			value: personalInformation.fullname,
		},
		{
			key: "2",
			label: "Date of Birth",
			value: personalInformation.dob,
		},
		{
			key: "3",
			label: "Major",
			value: personalInformation.major,
		},
		{
			key: "4",
			label: "Introduction",
			value: personalInformation.Introduction,
		},
	];

	return (
		<div className="about-me-section">
			<Row justify="center" align="middle">
				<Col xs={24} md={16}>
					<Card className="about-me-card" bordered={false}>
						{/* Tag Logo inside Card */}
						<Tag className="about-me-tag animate__animated animate__pulse">
							BANG LE
						</Tag>
						{/* <div style={{ marginBottom: "2rem" }}>
							<Terminal />
						</div> */}

						{/* Original layout for larger screens */}
						<div className="about-me-details">
							<Title className="about-me-title" level={2}>
								<span style={{ color: "#fff" }}>About Me</span>
							</Title>

							<div className="about-me-item">
								<UserOutlined className="about-me-icon" />
								<Title level={4} className="about-me-label">
									Full Name:
								</Title>
								<Paragraph className="about-me-text">
									{personalInformation.fullname}
								</Paragraph>
							</div>

							<div className="about-me-item">
								<CalendarOutlined className="about-me-icon" />
								<Title level={4} className="about-me-label">
									Date of Birth:
								</Title>
								<Paragraph className="about-me-text">
									{personalInformation.dob}
								</Paragraph>
							</div>

							<div className="about-me-item">
								<BookOutlined className="about-me-icon" />
								<Title level={4} className="about-me-label">
									Major:
								</Title>
								<Paragraph className="about-me-text">
									{personalInformation.major}
								</Paragraph>
							</div>

							<div className="about-me-item">
								<HighlightOutlined className="about-me-icon" />
								<Title level={4} className="about-me-label">
									Introduction:
								</Title>
								<Paragraph className="about-me-text">
									{personalInformation.Introduction}
								</Paragraph>
							</div>
						</div>

						{/* Table for smaller screens */}
						<div className="about-me-table">
							<Table
								dataSource={dataSource}
								columns={columns}
								pagination={false}
								bordered
							/>
						</div>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default AboutMe;
