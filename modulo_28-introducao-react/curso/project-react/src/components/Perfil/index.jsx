/* eslint-disable react/prop-types */
import "./perfil.css";

const Perfil = ({ image, name }) => {
	return (
		<div>
			<img
				className="profile-image"
				src={image}
				alt="Fabio Santos' photo"
			/>
			<h3 className="profile-title">{name}</h3>
		</div>
	);
};

export default Perfil;
