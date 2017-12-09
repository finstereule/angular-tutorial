import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService{

  size = 8;

	constructor(private http:Http){}

	getUsers(){
		return this.http
		.get('https://randomuser.me/api/?inc=gender,name,picture,location&results='+this.size+'&nat=us')
		.map(function (response) {
			return response.json();
		})
		.map(response => response.results)
		.map(users => {
			return users.map(u => {
				return{
					name: u.name.first + ' ' + u.name.last,
					image: u.picture.large,
					geo: u.location.city + ' ' + u.location.state
				}
			})
		})
}

setSize(size){
	  this.size=size;
}
	  users = [

  	{name: 'WPM 1'},

  	{name: 'WPM 2'},

  	{name: 'WPM 3'},

  	{name: 'WPM 4'},

  	{name: 'WPM 5'},

  	{name: 'WPM 6'}

  ]
}
