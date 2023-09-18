import { Component } from '@angular/core';
import { FormControl , FormGroup } from '@angular/forms';
import { MovieApiService } from 'src/app/service/movie-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchResult : any;
  constructor(private service:MovieApiService) {}

  searchForm = new FormGroup({
    'movieName' : new FormControl(null)
  })

  submitForm() {
    console.log(this.searchForm.value);
    this.service.searchMovie(this.searchForm.value).subscribe((res) => {
      console.log(res);
      this.searchResult = res.results
    })
  }



}
