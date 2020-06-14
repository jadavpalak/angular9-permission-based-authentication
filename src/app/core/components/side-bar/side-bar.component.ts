import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  menus = [{
    id: 1,
    name: 'Dashboard',
    routerLink: '',
    icon: 'dashboard',
    subMenu: []
  }, {
    id: 2,
    name: 'Home',
    icon: 'home',
    routerLink: '/home'
  }, {
    id: 3,
    name: 'Roles',
    icon: 'supervisor_account',
    routerLink: '/role'
  },{
    id: 4,
    name: 'Users',
    icon: 'supervisor_account',
    routerLink: '/user'
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
