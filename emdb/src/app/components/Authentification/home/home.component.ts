import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { AuthService } from "../../../auth.service";
import { doc, getDoc } from "firebase/firestore";
import { ApiService } from 'src/app/api.service';





  

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

})
export class HomeComponent implements OnInit {
  public movieId:Number =-1;
  constructor(   
     public afAuth: AuthService,
     public apiService: ApiService

  ) { }


  ngOnInit() {
    // Check if user is signed in
    this.afAuth.check()
  }
    public getMovie(){
      this.apiService.getMovie(this.movieId).subscribe(a=>{
        console.log(a)
      })
    

  }
}
