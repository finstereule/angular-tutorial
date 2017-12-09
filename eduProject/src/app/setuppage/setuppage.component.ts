import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-setuppage',
  templateUrl: './setuppage.component.html',
  styleUrls: ['./setuppage.component.css']
})
export class SetuppageComponent implements OnInit {

  size;

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.size = this.userService.size;
  }

onChange(){
  this.userService.setSize(+this.size);
}
}
