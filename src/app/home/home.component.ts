import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl:'./home.component.css'
})
export class HomeComponent implements OnInit {
  trendingMovies: any;
  theatreMovies: any;
  PopularMovies:any;
  poopularMovies: any;
  PoopularMovies: any;
  constructor(private http: HttpClient , private router: Router ) {

  }
  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies(); 
    this.getPopularMovies();
    this.getpoopularMovies();
    

  }

  getTrendingMovies() {
    this.http
    .get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies: any) => {
      this.trendingMovies = movies;
      
     });
    
  }

  getTheatreMovies() {
    this.http
    .get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((movies) => {
      this.theatreMovies = movies;
      console.log(this.theatreMovies)
     });
    
  }

  getpoopularMovies() {
    this.http
    .get('http://localhost:4200/assets/data/poopular-movies.json')
    .subscribe((movies) => {
      this.poopularMovies= movies;
      
     });
    
  }


  getPopularMovies() {
    this.http
    .get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((movies) => {
      this.PopularMovies = movies;
    
     });
    
  }
  goToMovie(type:string, id:string){
    this.router.navigate(['movie',type, id]);

  }

}
