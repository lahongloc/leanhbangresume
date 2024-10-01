import Project from "../../layouts/project/Project";
import MobileProject from "../../mobile-layouts/project/MobileProject";
import "./MyProject.css";

const MyProject = () => {
	return (
		<>
			<div className="laptop">
				<Project />
			</div>
			<div className="mobile">
				<MobileProject />
			</div>
		</>
	);
};
export default MyProject;
