import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {
  name = 'Angular';
  constructor() { }

  ngOnInit(): void {
  }

}
