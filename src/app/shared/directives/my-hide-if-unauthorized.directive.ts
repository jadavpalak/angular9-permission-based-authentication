import { Directive, Input, ElementRef } from '@angular/core';
import { AuthService } from '@backend/services/auth/auth.service';

@Directive({
  selector: '[myHideIfUnauthorized]'
})
export class MyHideIfUnauthorizedDirective {
  @Input('myHideIfUnauthorized') permission; // Required permission passed in

  constructor(private el: ElementRef, private authorizationService: AuthService) { }
  ngOnInit() {
    if (!this.authorizationService.hasPermission(this.permission)) {
      this.el.nativeElement.style.display = 'none';
    }
  }

}
