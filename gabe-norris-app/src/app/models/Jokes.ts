export interface Category {
	value: string;
}

export interface Joke {
	type: string;
	value: {
		id: number,
		joke: string,
		categories: Category[]
	};
}
