import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import FirstPage from "../../layouts/FirstPage";
import travel from "../../assets/travel.png";
import AboutMe from "../../layouts/aboutMe/AboutMe";
import Experience from "../../layouts/experience/Experience";
import exp from "../../assets/exp.png";
import Awards from "../../layouts/award/Awards";
import MobileExperience from "../../mobile-layouts/experience/MobileExperience";
import "./Home.css";
import MobileAwards from "../../mobile-layouts/awards/MobileAwards";
import MobileAboutMe from "../../mobile-layouts/aboutMe/MobileAboutMe";
import MyCarousel from "../../components/carousel/MyCarousel";
import AwardIntroduction from "../../components/awardIntroduction/AwardIntroduction";

const Home = () => {
	return (
		<ParallaxProvider>
			{/* Section 1 */}
			<div
				style={{
					height: "150vh",
					backgroundColor: "#FF5733",
					backgroundImage: `url(https://res.cloudinary.com/dbfh15hki/image/upload/v1727710007/Ba%CC%86%CC%80ng_autograph_ghw9wd.png)`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
					marginTop: "-15rem",
				}}
			>
				<Parallax speed={-17}>
					<FirstPage />
				</Parallax>
			</div>

			{/* Section 2 */}
			<div
				style={{
					height: "max-content",
					textAlign: "center",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundColor: "rgb(10 16 30)",
					color: "#fff",
				}}
				className="section-2"
			>
				<Parallax speed={12}>
					<div className="laptop">
						<AboutMe />
					</div>
					<div className="mobile">
						<MobileAboutMe />
					</div>
				</Parallax>
			</div>

			{/* Section 3 */}
			<div
				style={{
					// height: "170vh",
					textAlign: "center",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					backgroundImage: `url(https://res.cloudinary.com/dbfh15hki/image/upload/v1727007095/IMG_2553_ubnxey.jpg)`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
				className="section-3"
			>
				<Parallax speed={-12}>
					<div className="laptop">
						<Experience />
					</div>

					<div className="mobile">
						<MobileExperience />
						{/* <MobileAwards /> */}
					</div>
				</Parallax>
			</div>
			<div
				style={{
					display: "block !important",
					backgroundColor: "rgb(36 36 36)",
					paddingBottom: "5rem",
					paddingTop: "10rem",
				}}
			>
				<div className="laptop">
					<Awards />
				</div>
				<div className="mobile">
					<MobileAwards />
				</div>

				{/* <MyCarousel /> */}
			</div>
		</ParallaxProvider>
	);
};

export default Home;
