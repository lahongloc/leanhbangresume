import React from "react";
import { Card, Typography } from "antd";
import {
	UserOutlined,
	BookOutlined,
	CalendarOutlined,
} from "@ant-design/icons"; // Add icons

const { Title, Text, Paragraph } = Typography;

const personalInformation = {
	fullname: "Lê Anh Bằng",
	dob: "5th October, 2003",
	major: "Professional Communication (Bachelor), Entertainment",
	Introduction: `Hi, my name is Bang, but you can call me LAB (which is the combination of the first letters of my name), and that's also my stage name!
I graduated from Western Sydney University, Australia, majoring in Communication. I also started exploring, learning, and working in the entertainment industry as a production assistant, management assistant, and an independent artist in Vietnam from the age of 20! Up until now, I have achieved certain milestones in my personal career and contributed to the community.`,
};

const MobileAboutMe = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
				marginTop: "-25rem",
			}}
		>
			<Card
				style={{
					width: "100%",
					backgroundColor: "rgb(0, 0, 0, 0.8)",
					borderRadius: "12px",
				}}
			>
				{/* Fullname with yellow color */}
				<Title
					level={2}
					style={{
						color: "#fff",
						textAlign: "left",
						display: "flex",
						alignItems: "center",
					}}
				>
					<UserOutlined
						style={{ marginRight: "8px", color: "#fff" }}
					/>{" "}
					<span style={{ color: "#fff" }}>
						{personalInformation.fullname}
					</span>
				</Title>

				<Paragraph
					style={{
						fontSize: "16px",
						marginBottom: "20px",
						textAlign: "left",
					}}
				>
					{personalInformation.Introduction}
				</Paragraph>

				{/* Major with #0a101e color */}
				<Text
					style={{
						fontSize: "18px",

						marginBottom: "10px",

						textAlign: "left",
						display: "flex",
						alignItems: "center",
					}}
				>
					<BookOutlined
						style={{ marginRight: "8px", color: "#a7abb6" }}
					/>{" "}
					{/* Major Icon */}
					<span style={{ color: "#a7abb6" }}>
						<strong>Major:</strong> {personalInformation.major}
					</span>
				</Text>

				{/* DOB with #0a101e color */}
				<Text
					style={{
						fontSize: "18px",
						textAlign: "left",
						display: "flex",
						alignItems: "center",
					}}
				>
					<CalendarOutlined
						style={{ marginRight: "8px", color: "#a7abb6" }}
					/>{" "}
					{/* DOB Icon */}
					<span style={{ color: "#a7abb6" }}>
						<strong>Date of Birth:</strong>{" "}
						{personalInformation.dob}
					</span>
				</Text>
			</Card>
		</div>
	);
};

export default MobileAboutMe;
