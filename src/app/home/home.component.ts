import { Component, OnInit } from '@angular/core';
import { Movie } from '..';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  exemple = {
    img: '',
    production_year: '2019',
    favorite: false,
    title: 'Where is Jonathan',
    description: '',
    director: '',
    category: ['']
  };
  textFilter: string;
  constructor(private movieService: MoviesService) {}
  listMovies: Movie;
  isLoaded: boolean;
  ngOnInit() {
    this.getMovies();
  }

  create(movie: Movie) {
    this.movieService
      .createMovie(movie)
      .then(res => {
        console.log('res', res);
      })
      .catch(err => {
        console.log('err', err);
      });
  }

  getMovies() {
    this.isLoaded = false;
    this.movieService.getMovies().subscribe(
      (res: any) => {
        this.isLoaded = true;
        this.listMovies = res;
      },
      (err: any) => {
        this.isLoaded = true;
        console.log(err);
      }
    );
  }
}
