/* eslint-disable react/prop-types */
import styles from "./Perfil.module.css";

const Perfil = ({ userName }) => {
	return (
		<header className={styles.header}>
			<img
				className={styles.avatar}
				src={`https://github.com/${userName}.png`}
				alt={`userName's photo.`}
			/>
			<h1 className={styles.name}>{userName}</h1>
		</header>
	);
};

export default Perfil;
