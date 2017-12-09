import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  users = [];
  searchStr='';

  constructor(private usersService: UsersService) {}

  ngOnInit(){
    //this.users = this.usersService.users;
    this.usersService.getUsers().subscribe(users=> {
      this.users = users;
    })
  }

}
