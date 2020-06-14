import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userName: string;
  data = [];
  constructor() { }

  ngOnInit(): void {
    this.userName = 'Abc Xyz';
    this.data = [{
      // icon: 'supervisor_account',
      icon: 'assets/images/total-chats.png',
      count: 578,
      heading: 'Total Chat',
      background: '#03a9f5'
    }, {
      // icon: 'speaker_notes',
      icon: 'assets/images/total-companies.png',
      count: 103,
      heading: 'Total Companies',
      background: '#ff8a66'
    }, {
      // icon: 'speaker_notes_off',
      icon: 'assets/images/total-knowledgebase.png',
      count: 46,
      heading: 'Total Users',
      background: '#80cbc4'
    }, {
      // icon: 'map',
      icon: 'assets/images/total-events.png',
      count: 237,
      heading: 'Total Orders',
      background: '#66bb6a'
    }];
  }

}
