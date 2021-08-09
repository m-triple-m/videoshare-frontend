import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userservice: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.removeItem('user');
    this.router.navigate(['/login']);
    this.userservice.currentUser = null;
  }

}
