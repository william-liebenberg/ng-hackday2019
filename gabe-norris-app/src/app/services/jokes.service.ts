import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Joke } from '../models/Jokes';

@Injectable({
	providedIn: 'root'
})
export class JokesService {

	apiUrl = 'http://api.icndb.com/jokes/random';

	constructor(private http: HttpClient) { }

	public fetchJoke(firstName: string, lastName: string, category: string): Observable<Joke> {

		// do some error checking
		if (!firstName) {
			return throwError('Gabe Norris needs your First Name');
		}

		if (!lastName) {
			return throwError('Gabe Norris needs your Last Name');
		}

		if (!category) {
			return throwError('Gabe Norris can\'t make a joke without a category!');
		}

		// generate the http query string
		const query = this.apiUrl + `?firstName=${firstName}&lastName=${lastName}&limitTo=${category}`;

		console.log(`Generating a joke from: ${query}`);

		// send the GET request
		return this.http.get<Joke>(query)
			.pipe(
				catchError(this.handleError)
			);
	}

	private handleError(error: HttpErrorResponse) {
		if (error.error instanceof ErrorEvent) {
			// A client-side or network error occurred. Handle it accordingly.
			console.error('An error occurred:', error.error.message);
		} else {
			// The backend returned an unsuccessful response code.
			// The response body may contain clues as to what went wrong,
			console.error(
				`Backend returned code ${error.status}, ` +
				`body was: ${error.error}`);
		}
		// return an observable with a user-facing error message
		return throwError(
			'Something bad happened; please try again later.');
	}
}
