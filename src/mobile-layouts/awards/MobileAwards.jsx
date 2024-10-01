import React from "react";
import { Row, Col, Card, Typography, Divider } from "antd";
import { awards } from "../../database/data";
import CertificateComponent from "../../components/certificate/CertificateComponent";

const { Title, Text } = Typography;

const MobileAwards = () => {
	return (
		<div
			style={{
				maxWidth: "90%",
				margin: "0 auto",
				padding: "16px",
				background: "#1f1f1f",
				borderRadius: "16px",
				boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
				color: "#fff",
			}}
		>
			<Title level={3} style={{ color: "#fff", textAlign: "center" }}>
				Awards
			</Title>
			<Row gutter={[16, 16]}>
				{awards.map((award) => (
					<Col span={24} key={award.id}>
						<Card
							hoverable
							style={{
								background: "#333",
								borderRadius: "8px",
								color: "#fff",
								marginBottom: "16px",
							}}
						>
							<Title level={4} style={{ color: "#fff" }}>
								{award.event}
							</Title>
							<Text type="secondary" style={{ color: "#ccc" }}>
								<strong>Achievement:</strong>{" "}
								{award.achievement}
							</Text>
							<Divider style={{ borderColor: "#444" }} />
							<Text style={{ color: "#ddd" }}>{award.des}</Text>
							<Row gutter={[8, 8]} style={{ marginTop: 16 }}>
								{award.images.map((image, index) => (
									<Col xs={12} key={index}>
										<img
											alt={`award-${index}`}
											src={image}
											style={{
												borderRadius: "8px",
												width: "100%",
												height: "auto",
												objectFit: "cover",
											}}
										/>
									</Col>
								))}
							</Row>
						</Card>
					</Col>
				))}
			</Row>
			<CertificateComponent />
		</div>
	);
};

export default MobileAwards;
