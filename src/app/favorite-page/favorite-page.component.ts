import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { Movie } from '..';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit {
  listMoviesFavorites: Movie[];
  textFilter;
  isLoaded: boolean;
  constructor(private router: Router, private movieServ: MoviesService) {}

  ngOnInit() {
    this.getFavoritesMovies();
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }

  getFavoritesMovies() {
    this.movieServ.getFavoritesMovies().subscribe(
      (res: Movie[]) => {
        this.isLoaded = true;
        this.listMoviesFavorites = res;
      },
      (err: any) => {
        this.isLoaded = true;
      }
    );
  }
}
