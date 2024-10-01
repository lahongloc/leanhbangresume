import React, { useEffect, useState } from "react";
import { Layout, Menu, Typography, Drawer, Button } from "antd";
import {
	MenuOutlined,
	FacebookOutlined,
	TwitterOutlined,
	LinkedinOutlined,
	GooglePlusOutlined,
} from "@ant-design/icons";
import { useNavigate, useLocation } from "react-router-dom";
import paths from "../../database/path";
import "./SocialHeader.css";

const { Header } = Layout;
const { Title } = Typography;

const SocialHeader = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedKey, setSelectedKey] = useState("home");
	const [drawerVisible, setDrawerVisible] = useState(false); // State for Drawer visibility

	// Update selectedKey based on current path
	useEffect(() => {
		const currentPath = location.pathname;
		if (currentPath === "/") {
			setSelectedKey("home");
		} else if (currentPath === paths.projects) {
			setSelectedKey("projects");
		} else if (currentPath === paths.charitiesAndComunity) {
			setSelectedKey("charity");
		}
	}, [location.pathname]);

	// Show or hide Drawer
	const showDrawer = () => {
		setDrawerVisible(true);
	};

	const hideDrawer = () => {
		setDrawerVisible(false);
	};

	return (
		<Header className="social-header">
			{/* Logo */}
			<div className="logo">
				<Title level={3} className="logo-title">
					<span style={{ color: "gray" }}>BangLe</span>
				</Title>
			</div>

			<Menu
				theme="light"
				mode="horizontal"
				className="nav-menu"
				selectedKeys={[selectedKey]}
			>
				<Menu.Item key="home">
					<a
						onClick={(e) => {
							e.preventDefault();
							navigate(paths.home);
						}}
						className="nav-link"
					>
						Home
					</a>
				</Menu.Item>
				<Menu.Item key="projects">
					<a
						onClick={(e) => {
							e.preventDefault();
							navigate(paths.projects);
						}}
						className="nav-link"
					>
						Projects
					</a>
				</Menu.Item>
				<Menu.Item key="charity">
					<a
						onClick={(e) => {
							e.preventDefault();
							navigate(paths.charitiesAndComunity);
						}}
						className="nav-link"
					>
						Charity & Community
					</a>
				</Menu.Item>
			</Menu>

			{/* Social Media Links */}
			<Menu theme="light" mode="horizontal" className="social-menu">
				<Menu.Item key="2">
					<a
						href="https://www.facebook.com/profile.php?id=100010204443486"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FacebookOutlined className="social-icon" />
					</a>
				</Menu.Item>
				<Menu.Item key="4">
					<a
						href="https://www.linkedin.com/in/b%E1%BA%B1ng-l%C3%AA-anh-4728b7231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
						target="_blank"
						rel="noopener noreferrer"
					>
						<LinkedinOutlined className="social-icon" />
					</a>
				</Menu.Item>
			</Menu>

			<Button
				className="menu-button"
				icon={<MenuOutlined />}
				onClick={showDrawer}
			/>
			{/* Drawer for mobile menu */}
			<Drawer
				className="menu-drawer"
				title="Menu"
				placement="right"
				onClose={hideDrawer}
				visible={drawerVisible}
			>
				<Menu
					mode="vertical"
					selectedKeys={[selectedKey]}
					onClick={() => hideDrawer()}
				>
					<Menu.Item key="home">
						<a
							onClick={(e) => {
								e.preventDefault();
								navigate(paths.home);
							}}
						>
							Home
						</a>
					</Menu.Item>
					<Menu.Item key="projects">
						<a
							onClick={(e) => {
								e.preventDefault();
								navigate(paths.projects);
							}}
						>
							Projects
						</a>
					</Menu.Item>
					<Menu.Item key="charity">
						<a
							onClick={(e) => {
								e.preventDefault();
								navigate(paths.charitiesAndComunity);
							}}
						>
							Charity & Community
						</a>
					</Menu.Item>
				</Menu>
			</Drawer>
		</Header>
	);
};

export default SocialHeader;
