import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';

import { Movie } from '..';
import { environment } from 'src/environments/environment';

const GetMoviesEndpoint = environment.backendServer + '/all-movies';
const UpdateMovieFavorisEndpoint = environment.backendServer + '/';
const GetFavoritesMoviesEndpoint = environment.backendServer + '/all-favorite-movies';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private firestore: AngularFirestore, private http: HttpClient) {}

  createMovie(data: Movie) {
    return new Promise<any>((resolve, reject) => {
      this.firestore
        .collection('mini-netflix-andela')
        .add(data)
        .then(
          res => {
            console.log('res', res);
          },
          err => reject(err)
        );
    });
  }

  getMovies() {
    return this.firestore.collection('mini-netflix-andela').snapshotChanges();
  }

  getAllMovies() {
    return this.http.get(GetMoviesEndpoint);
  }

  setMovieToFavoris(movie: Movie) {
    return this.http.put(`${UpdateMovieFavorisEndpoint}` + movie.id, movie);
  }

  getFavoritesMovies() {
    return this.http.get(`${GetFavoritesMoviesEndpoint}`);
  }
}
