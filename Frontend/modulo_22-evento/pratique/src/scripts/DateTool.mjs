export default class DateTool {
	#toMilliseconds = 1000 * 60 * 60 * 24;
	#toSeconds = 1000 * 60 * 60;
	#toMinutes = 1000 * 60;
	#toHour = 1000;

	constructor(dateStamp) {
		this.dateStamp = dateStamp;
		this.days = this.#Format(this.#Days);
		this.hours = this.#Format(this.#Hours);
		this.minutes = this.#Format(this.#Minutes);
		this.seconds = this.#Format(this.#Seconds);
	}

	get #Days() {
		return Math.floor(this.dateStamp / this.#toMilliseconds);
	}

	get #Hours() {
		return Math.floor((this.dateStamp % this.#toMilliseconds) / this.#toSeconds);
	}

	get #Minutes() {
		return Math.floor((this.dateStamp % this.#toSeconds) / this.#toMinutes);
	}

	get #Seconds() {
		return Math.floor((this.dateStamp % this.#toMinutes) / this.#toHour);
	}

	#Format(variable) {
		if (variable < 10) {
			return ["0", variable].join("");
		} else {
			return variable.toString();
		}
	}
}
