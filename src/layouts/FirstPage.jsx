import user from "../assets/user.png";

const FirstPage = () => {
	return (
		<div
			style={{
				padding: 10,
				// border: "2px solid black",
				display: "flex",
				justifyContent: "space-around",
				alignItems: "center",
				paddingTop: "5rem",
				// width: "100%",
			}}
		>
			<div>
				<h1
					style={{
						fontSize: "4rem",
						marginTop: 600,
						// marginLeft: -70,
						backgroundColor: "rgba(216, 216, 216, 0.5)",
						fontFamily: "arial",
						padding: "2rem",
						border: "5px dashed #fff",
					}}
				>
					<span style={{ color: "black" }}>HELLO, MY NAME</span>
					<span style={{ color: "#fff" }}>
						<br />
						IS LE ANH BANG
					</span>
				</h1>
			</div>
			{/* <div style={{ width: "30%" }}>
				<img width={500} src={user} />
			</div> */}
		</div>
	);
};

export default FirstPage;
