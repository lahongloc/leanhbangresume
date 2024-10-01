import React from "react";
import { Row, Col } from "antd";
import WorkExperienceCard from "./WorkExperienceCard";
import { workExperience } from "../../database/data";
import "./Experience.css";

const Experience = () => {
	return (
		<div className="experience-container">
			<Row gutter={[16, 32]} justify="center">
				{workExperience.map((experience, index) => (
					<Col xs={24} sm={12} md={8} lg={6} key={index}>
						<WorkExperienceCard experience={experience} />
					</Col>
				))}
			</Row>
		</div>
	);
};

export default Experience;
