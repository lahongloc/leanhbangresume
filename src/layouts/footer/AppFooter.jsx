import React from "react";
import { Layout, Row, Col, Typography, Space } from "antd";
import {
	MailOutlined,
	PhoneOutlined,
	HomeOutlined,
	FacebookOutlined,
	TwitterOutlined,
	InstagramOutlined,
	LinkedinOutlined,
} from "@ant-design/icons";

const { Footer } = Layout;
const { Text, Title } = Typography;

const AppFooter = () => {
	return (
		<Footer
			style={{
				backgroundColor: "black",
				color: "#fff",
				padding: "20px 50px",
				paddingTop: "2rem",
			}}
		>
			<Row justify="space-between">
				{/* Contact Information */}
				<Col xs={24} sm={12} md={6}>
					<Title level={4} style={{ color: "#fff" }}>
						Contact Info
					</Title>
					<Space direction="vertical" size="middle">
						<Text style={{ color: "#fff" }}>
							<HomeOutlined /> Ho Chi Minh City, Vietnam Country
						</Text>
					</Space>
				</Col>

				{/* Social Media Links */}
				<Col xs={24} sm={12} md={6}>
					<Title level={4} style={{ color: "#fff" }}>
						Social Media Channel
					</Title>
					<Space size="middle">
						<a
							href="https://www.facebook.com/profile.php?id=100010204443486"
							target="_blank"
							rel="noopener noreferrer"
							style={{ color: "#fff" }}
						>
							<FacebookOutlined style={{ fontSize: "24px" }} />
						</a>
						<a
							href="https://www.linkedin.com/in/b%E1%BA%B1ng-l%C3%AA-anh-4728b7231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
							target="_blank"
							rel="noopener noreferrer"
						>
							<LinkedinOutlined className="social-icon" />
						</a>
					</Space>
				</Col>
			</Row>
		</Footer>
	);
};

export default AppFooter;
