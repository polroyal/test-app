import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.page.html',
  styleUrls: ['./planets.page.scss'],
})
export class PlanetsPage implements OnInit {

	planets: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  	// this.planets=this.api.getPlanet();
  }

  openPlanets(planet) {

  	let split=planet.url.split('/');
  	let planets=split[split.length-2];
  	this.router.navigateByUrl('/tabs/planets/${planets}');
  }

}
