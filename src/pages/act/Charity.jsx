import CharityDisplay from "../../layouts/charity/CharityDisplay";
import CharityComponent from "../../mobile-layouts/Charity/CharityComponent";

const Charity = () => {
	return (
		<>
			<div className="laptop">
				<CharityDisplay />
			</div>
			<div className="mobile">
				<CharityComponent />
			</div>
		</>
	);
};

export default Charity;
