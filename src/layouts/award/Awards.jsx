import React from "react";
import { Tabs, Row, Col, Card, Typography, Divider } from "antd";
import { awards } from "../../database/data";
import CertificateComponent from "../../components/certificate/CertificateComponent";

const { TabPane } = Tabs;
const { Title, Text } = Typography;

const Awards = () => {
	return (
		<div
			style={{
				maxWidth: "80%",
				margin: "0 auto",
				padding: "24px",
				background: "#1f1f1f",
				borderRadius: "16px",
				boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
				color: "#fff",
			}}
		>
			<Tabs
				defaultActiveKey="1"
				centered
				tabBarGutter={32}
				size="large"
				tabBarStyle={{ color: "#fff" }}
			>
				{awards.map((award) => (
					<TabPane tab={award.event} key={award.id}>
						<div style={{ padding: "16px" }}>
							<Title
								level={3}
								style={{ color: "#fff", marginBottom: 8 }}
							>
								{award.event}
							</Title>
							<Text type="secondary" style={{ color: "#ccc" }}>
								<strong>Achievement:</strong>{" "}
								{award.achievement}
							</Text>
							<Divider style={{ borderColor: "#444" }} />
							<Text style={{ color: "#ddd" }}>{award.des}</Text>

							<Row gutter={[16, 16]} style={{ marginTop: 16 }}>
								{award.images.map((image, index) => (
									<Col xs={24} sm={8} key={index}>
										<Card
											hoverable
											cover={
												<img
													alt={`award-${index}`}
													src={image}
													style={{
														borderRadius: "8px",
														height: "200px",
														objectFit: "cover",
													}}
												/>
											}
											bodyStyle={{ padding: 0 }}
											style={{
												background: "#333",
												borderRadius: "8px",
												boxShadow:
													"0 4px 12px rgba(0, 0, 0, 0.1)",
												color: "#fff",
											}}
										/>
									</Col>
								))}
							</Row>
						</div>
					</TabPane>
				))}
			</Tabs>
			<CertificateComponent />
		</div>
	);
};

export default Awards;
