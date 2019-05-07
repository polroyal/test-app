
import {FavoriteService } from './../../services/favorite.service';
import { ApiService } from '../../api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
// import { HttpClient } from '@angular/common/http';


 
@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.page.html',
  styleUrls: ['./film-details.page.scss'],
})
export class FilmDetailsPage implements OnInit {
 
  film: any;
  isFavorite = false;
  filmId = null;
 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, 
    private emailComposer: EmailComposer, private favoriteService: FavoriteService) { }
 
  ngOnInit() {
    this.filmId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getFilm(this.filmId).subscribe(res => {
      this.film = res;
    });

    this.favoriteService.isFavorite(this.filmId).then(isFav => {

      this.isFavorite = isFav;
    });
  }

  favoriteFilm(){
    this.favoriteService.favoriteFilm(this.filmId).then(() => {
      this.isFavorite = true;
    });
  }

  unfavoriteFilm() {
    this.favoriteService.unfavoriteFilm(this.filmId).then(() => {
      this.isFavorite = false;
    });
  }
 
 shareFilm() {
    let email = {
      to: 'polycarproyal@gmail.com',
      subject: 'I love Angular/Ionic: ' + this.film.title,
      body: 'Can I just enjoy being an Arsenal fan?<br><br>\"' + this.film.opening_crawl + '\"',
      isHtml: true
    };
    this.emailComposer.open(email);
 }
}