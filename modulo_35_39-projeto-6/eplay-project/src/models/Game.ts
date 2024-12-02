export default class Game {
	id: number;
	title: string;
	description: string;
	genre: string;
	image: string;
	system: string;
	infos: string[];

	constructor(
		id: number,
		title: string,
		description: string,
		genre: string,
		image: string,
		system: string,
		infos: string[]
	) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.genre = genre;
		this.image = image;
		this.system = system;
		this.infos = infos;
	}
}
