import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.page.html',
  styleUrls: ['./people.page.scss'],
})
export class PeoplePage implements OnInit {

	people: Observable<any>;

  constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  	this.people=this.api.getPeople();
  }

  thePeople(person)	{
  	let split=person.url.split('/');
  	let people=split[split.length-2];
  	this.router.navigateByUrl('/tabs/people/${people}');
  }

}
