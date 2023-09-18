import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails : any;
  movieVideo : any;
  movieCast : any

  constructor(private service : MovieApiService , private router : ActivatedRoute) {}

  ngOnInit(): void {
    let param = this.router.snapshot.paramMap.get('id')
    this.getMovie(param)
    this.getVideo(param)
    this.getCast(param)
  }


  getMovie(id: any) {
    this.service.movieDetails(id).subscribe((res) => {
      this.movieDetails = res
    })
  }

  getVideo(id:any){
    this.service.movieVideo(id).subscribe((res) => {
      res.results.forEach((element : any) => {
        if(element.type == "Trailer") {
          this.movieVideo = element.key
          console.log(this.movieVideo);
        }
      });
    })
  }

  getCast(id:any) {
    this.service.movieCast(id).subscribe((res) => {
      this.movieCast = res.cast
    })
  }
}
