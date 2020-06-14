import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '@backend/services/auth/auth.service';

@Component({
  selector: 'my-app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toggleClick = new EventEmitter();
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  toggleClicked() { // You can give any function name
    this.toggleClick.emit(true);
  }

  logout() {
    this.authService.logout();
  }

}
