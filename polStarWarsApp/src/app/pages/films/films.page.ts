import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.page.html',
  styleUrls: ['./films.page.scss'],
})
export class FilmsPage implements OnInit {

	films: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  	this.films=this.api.getFilms();
  }

  OpenDetails(film){

  	let split = film.url.split('/');
  	let filmId = split[split.length-2];
  	this.router.navigateByUrl('/tabs/films/${filmId}');
  }
}
 