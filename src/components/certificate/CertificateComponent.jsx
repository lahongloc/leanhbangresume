import React from "react";
import { Card, Typography, Row, Col } from "antd";

const { Title } = Typography;

const CertificateComponent = () => {
	return (
		<Row
			justify="center"
			style={{
				paddingTop: "50px",
				backgroundColor: "#1c1c1e",
				height: "100vh",
			}}
		>
			<Col xs={24} md={20} lg={16}>
				<Card
					style={{
						backgroundColor: "#333", // Nền tối
						borderRadius: "10px",
						textAlign: "center",
						width: "100%",
						padding: "20px",
					}}
				>
					<Title
						level={2}
						style={{ color: "#fff", marginBottom: "20px" }}
					>
						My Certificates
					</Title>
					<img
						alt="Certificate"
						src="https://res.cloudinary.com/dbfh15hki/image/upload/v1727664202/Google_Analytics_Certi_1_iwsx7q.jpg"
						style={{
							display: "block",
							margin: "0 auto",
							maxWidth: "100%", // Đảm bảo ảnh không vượt quá chiều rộng của container
							height: "auto", // Giữ nguyên tỉ lệ của ảnh
							borderRadius: "8px",
						}}
					/>
				</Card>
			</Col>
		</Row>
	);
};

export default CertificateComponent;
