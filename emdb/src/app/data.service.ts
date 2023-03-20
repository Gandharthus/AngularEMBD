import { Injectable } from '@angular/core';
import { Tmdb } from './tmdb';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath ='/movie';
  movieRef: AngularFireStoreCollection<Movie>;

  constructor( private db: AngularFirestore) {
    this.movieRef = db.collection(this.dbPath);
   }
   getAllMovie(): AngularFirestoreCollection<Movie>{
    return this.movieRef;
   }

   addMovie(mov : Movie): any{
    return this.movieRef.add({ ...mov});
   }
}
