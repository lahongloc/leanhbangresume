import React from "react";
import { TrophyOutlined, StarOutlined, LikeOutlined } from "@ant-design/icons";
import { Card, Typography } from "antd";
import { useNavigate } from "react-router-dom";
import paths from "../../database/path";

const { Text } = Typography;

const AwardCard = ({ event, achievement, awardId, des }) => {
	const navigate = useNavigate();

	const getIcon = (achievement) => {
		switch (achievement) {
			case "Finalist":
				return (
					<TrophyOutlined
						style={{ color: "#ffd700", fontSize: "24px" }}
					/>
				);
			case "Semi-Final":
				return (
					<StarOutlined
						style={{ color: "#ffa500", fontSize: "24px" }}
					/>
				);
			default:
				return (
					<LikeOutlined
						style={{ color: "#b87333", fontSize: "24px" }}
					/>
				);
		}
	};

	return (
		<Card
			style={{
				backgroundColor: "#1d1d1d", // Màu nền tối
				marginBottom: "16px",
				borderRadius: "8px",
				boxShadow: "0 4px 8px rgba(0,0,0,0.5)", // Hiệu ứng đổ bóng
				color: "#fff", // Màu chữ sáng
				display: "block",
				width: "100%",
				height: "max-content",
				maxWidth: "400px",
			}}
			hoverable
			bordered={false}
			onClick={() => navigate(`${paths.home}?award=${awardId}`)}
		>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "flex-start",
				}}
			>
				<div style={{ flexShrink: 0 }}>{getIcon(achievement)}</div>
				<div style={{ marginLeft: "12px", flexGrow: 1 }}>
					<Text
						style={{
							fontWeight: "bold",
							fontSize: "16px",
							color: "#fff",
						}}
					>
						{event}
					</Text>
					<br />
					<Text
						type="secondary"
						style={{ color: "#aaa", fontSize: "14px" }}
					>
						{achievement}
					</Text>
					<div
						style={{
							marginTop: "8px",
							color: "#ddd",
							fontSize: "14px",
							maxHeight: "100px", // Giới hạn chiều cao
							height: "100px",
						}}
					>
						{des}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default AwardCard;
