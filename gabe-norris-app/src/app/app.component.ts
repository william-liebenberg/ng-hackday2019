import { Component } from '@angular/core';
import { JokesService } from './services/jokes.service';
import { Joke } from './models/Jokes';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	title = 'Gabe Norris\'s Jokes Generator';

	firstName: string;
	lastName: string;
	category = 'nerdy';

	latestJoke: Joke;

	constructor(private jokesService: JokesService) {
	}

	generateJoke() {
		this.jokesService.fetchJoke(this.firstName, this.lastName, this.category)
			.subscribe(
				data => {
					this.latestJoke = data;
				},
				error => {
					alert(error);
				});
	}
}
