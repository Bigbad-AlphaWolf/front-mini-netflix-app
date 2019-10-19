import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Movie } from '..';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private firestore: AngularFirestore) {}

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
}
