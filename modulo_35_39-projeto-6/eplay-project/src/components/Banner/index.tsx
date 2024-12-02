import Button from "../Button";
import Tag from "../Tag";
import { Image, Prices, Title } from "./styles";

import background from "./../../assets/banner-homem-aranha.png";

const Banner = () => {
	return (
		<Image style={{ backgroundImage: `url(${background})` }}>
			<div className="container">
				<Tag size="big">Today&apos;s special</Tag>
				<div>
					<Title>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Title>
					<Prices>
						From <span>$ 250.00</span> only for $ 99.90
					</Prices>
				</div>
				<Button
					type="link"
					to="/produto"
					title="Click here to take advantage of this offer">
					Get the offer!
				</Button>
			</div>
		</Image>
	);
};

export default Banner;
