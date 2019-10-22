import { Pipe, PipeTransform } from '@angular/core';
import { Movie } from '..';

@Pipe({
  name: 'searchMovie'
})
export class SearchMoviePipe implements PipeTransform {
  transform(listMovies: any[], textFilter: string, args?: any): any {
    if (!textFilter) {
      return listMovies;
    }
    if (!listMovies) {
      return [];
    }

    // We filter movie liste sargal if the text is found on any attribute of the partenaire
    if (listMovies.length) {
      const filteredList = listMovies.filter((movie: any) => {
        return movie.title.toLowerCase().match(textFilter.toLowerCase());
      });

      return filteredList;
    }
  }
}
