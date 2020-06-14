import { NgModule } from '@angular/core';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from '@backend/shared/shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    SharedModule
  ],
  exports: [
    LoginComponent,
  ]
})
export class AuthModule { }
