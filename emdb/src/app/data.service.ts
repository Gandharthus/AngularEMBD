import { Injectable } from '@angular/core';
import { Poke } from './tmdb';
import { AngularFirestoreModule, AngularFirestoreCollection, AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dbPath ='/emdb_collection';
  movieRef: AngularFirestoreCollection<Poke>;

  constructor( private db: AngularFirestore) {
    this.movieRef = db.collection(this.dbPath);
   }
   getAllMovie(): AngularFirestoreCollection<Poke>{
    return this.movieRef;
   }

   addMovie(mov : Poke): any{
    return this.movieRef.add({ ...mov});
   }
}
