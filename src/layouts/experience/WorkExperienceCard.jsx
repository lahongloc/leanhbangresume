import React, { useState } from "react";
import { Modal, Table, Button } from "antd";
import dayjs from "dayjs";
import "./WorkExperienceCard.css"; // Import CSS đã cập nhật

const WorkExperienceCard = ({ experience }) => {
	const [isModalVisible, setIsModalVisible] = useState(false);

	const showModal = () => {
		setIsModalVisible(true);
	};

	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};

	// Cấu hình cho bảng (table)
	const columns = [
		{
			title: "Category",
			dataIndex: "category",
			key: "category",
			width: "30%", // Set width for better layout
		},
		{
			title: "Details",
			dataIndex: "details",
			key: "details",
			width: "70%",
		},
	];

	const dataSource = [
		{
			key: "1",
			category: "Roles",
			details: experience.roles.join(", "),
		},
		{
			key: "2",
			category: "Period",
			details: `${dayjs(experience.period.start).format("MMMM YYYY")} - ${
				experience.period.end === "Present"
					? "Hiện tại"
					: dayjs(experience.period.end).format("MMMM YYYY")
			}`,
		},
		{
			key: "3",
			category: "Description",
			details: experience.description,
		},
	];

	return (
		<div className="work-experience-card">
			<div className="image-container">
				<img
					alt={experience.company}
					src={experience.image}
					className="company-image"
					onClick={showModal} // Hiển thị modal khi click vào ảnh
				/>
				<h3 style={{ color: "#f0f0f0", marginTop: "10px" }}>
					{experience.company}
				</h3>
			</div>

			{/* Modal chi tiết */}
			<Modal
				title={`${experience.company}`}
				visible={isModalVisible}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button key="back" onClick={handleCancel}>
						Close
					</Button>,
				]}
				width={600} // Đặt chiều rộng hợp lý cho modal
			>
				{/* Ảnh công ty lớn hơn trong modal */}
				<img
					alt={experience.company}
					src={experience.image}
					className="modal-company-image"
				/>

				{/* Bảng chi tiết */}
				<Table
					columns={columns}
					dataSource={dataSource}
					pagination={false} // Không phân trang
					bordered={false} // Không cần đường viền bảng
					showHeader={false} // Ẩn header để có thiết kế gọn gàng hơn
				/>
			</Modal>
		</div>
	);
};

export default WorkExperienceCard;
