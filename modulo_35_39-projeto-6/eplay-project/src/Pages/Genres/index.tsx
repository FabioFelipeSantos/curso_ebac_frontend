import ProductsList from "../../components/ProductsList";
import Game from "../../models/Game";

import resident from "../../assets/resident.png";
import diablo from "../../assets/diablo.png";
// import zelda from "../../../public/zelda.png";
// import starWars from "../../../public/star_wars.png";

const promotions: Game[] = [
	{
		id: 1,
		title: "Resident Evil 4 - Remake",
		description: "Has been known in Japan as Biohazard 4, Resident Evil 4 is a survivor horror game...",
		genre: "Action",
		image: resident,
		infos: ["10%", "$54"],
		system: "Windows",
	},
	{
		id: 2,
		title: "Resident Evil 4 - Remake",
		description: "Has been known in Japan as Biohazard 4, Resident Evil 4 is a survivor horror game...",
		genre: "Action",
		image: resident,
		infos: ["5%", "$57"],
		system: "PS5",
	},
	{
		id: 3,
		title: "Resident Evil 4 - Remake",
		description: "Has been known in Japan as Biohazard 4, Resident Evil 4 is a survivor horror game...",
		genre: "Action",
		image: resident,
		infos: ["10%", "$54"],
		system: "Windows",
	},
	{
		id: 4,
		title: "Resident Evil 4 - Remake",
		description: "Has been known in Japan as Biohazard 4, Resident Evil 4 is a survivor horror game...",
		genre: "Action",
		image: resident,
		infos: ["5%", "$57"],
		system: "PS5",
	},
];

const nextReleases: Game[] = [
	{
		id: 5,
		title: "Diablo IV",
		description: "Diablo IV is an action RPG in development by Blizzard Entertainment",
		genre: "RPG",
		image: diablo,
		infos: ["05/17"],
		system: "Windows",
	},
	{
		id: 6,
		title: "Diablo IV",
		description: "Diablo IV is an action RPG in development by Blizzard Entertainment",
		genre: "RPG",
		image: diablo,
		infos: ["05/17"],
		system: "Windows",
	},
	{
		id: 7,
		title: "Diablo IV",
		description: "Diablo IV is an action RPG in development by Blizzard Entertainment",
		genre: "RPG",
		image: diablo,
		infos: ["05/17"],
		system: "Windows",
	},
	{
		id: 8,
		title: "Diablo IV",
		description: "Diablo IV is an action RPG in development by Blizzard Entertainment",
		genre: "RPG",
		image: diablo,
		infos: ["05/17"],
		system: "Windows",
	},
];

export default function Genres() {
	return (
		<>
			<ProductsList
				games={promotions}
				title="RPG"
				background="gray"
			/>
			<ProductsList
				games={nextReleases}
				title="Action"
				background="black"
			/>
			<ProductsList
				games={promotions}
				title="Adventure"
				background="gray"
			/>
			<ProductsList
				games={nextReleases}
				title="FPS - First Person Shooter"
				background="black"
			/>
		</>
	);
}
