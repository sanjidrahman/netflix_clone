import { Component , OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private service : MovieApiService){}

  bannerReceived : any = []
  trendingMovieRecieved : any = []
  actionMoviesR : any = []
  advMoviesR : any = []
  animationMoviesR : any = []
  comedyMoviesR : any = []
  documentaryMoviesR : any = []
  scienceFictionMoviesR : any = []
  thrillerMoviesR : any = []

  ngOnInit(): void {
    this.bannerData()
    this.trendingData()
    this.actionMovieData()
    this.advMovieData()
    this.animationMovieData()
    this.comedyMovieData()
    this.documentaryMoviesData()
    this.scienceFictionMovieData()
    this.thrillerMoviesData()
  }

  bannerData() {
    this.service.bannerApiData().subscribe((res) => {
      console.log(res);
      this.bannerReceived = res.results
    })
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((res) =>{
      console.log(res + 'fngk');
      this.trendingMovieRecieved = res.results
    })
  }

  actionMovieData() {
    this.service.actionMovies().subscribe((res) => {
      this.actionMoviesR = res.results
    })
  }

  animationMovieData() {
    this.service.animationMovies().subscribe((res) => {
      this.animationMoviesR = res.results
    })
  }

  advMovieData() {
    this.service.advMovies().subscribe((res) => {
      this.advMoviesR = res.results
    })
  }

  scienceFictionMovieData() {
    this.service.scienceFictionMovies().subscribe((res) => {
      this.scienceFictionMoviesR = res.results
    })
  }

  documentaryMoviesData() {
    this.service.documentaryMovies().subscribe((res) => {
      this.documentaryMoviesR = res.results
    })
  }

  comedyMovieData() {
    this.service.comedyMovies().subscribe((res) => {
      this.comedyMoviesR = res.results
    })
  }

  thrillerMoviesData() {
    this.service.thrillerMovies().subscribe((res) => {
      this.thrillerMoviesR = res.results
    })
  }
}
