import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '..';

@Pipe({
  name: 'searchMovie'
})
export class SearchMoviePipe implements PipeTransform {
  transform(listMovies: Movie[], searchTerme: string): any {
    return null;
  }
}
