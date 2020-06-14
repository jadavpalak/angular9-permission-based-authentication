import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// service
import { AuthRepositoryService } from '../../services/auth-repository.service';
import { AuthService } from '@backend/services/auth/auth.service';
// model
import { Login } from '../../models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFrom: FormGroup;
  show = false;
  constructor(
    private formBuilder: FormBuilder,
    private authRepositoryService: AuthRepositoryService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.createFormControls();
  }
  /**
   * Handle Form Controls creation
   *
   */
  createFormControls() {
    this.loginFrom = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('[^\w]+@[a-zA-Z_]+\.[a-zA-Z]{2,12}$')]],
      password: ['', [Validators.required, Validators.maxLength(30)]],
    });
  }

  getEmail(): string {
    return this.loginFrom.get('email').value;
  }

  getPassword(): string {
    return this.loginFrom.get('password').value;
  }

  prepareLoginCredentials(): Login {
    const data = {
      email: this.getEmail(),
      password: this.getPassword()
    };
    return data;
  }

  onSubmit() {
    const credentials = this.prepareLoginCredentials();
    this.authRepositoryService.login(credentials).subscribe(res => {
      console.log(res);
      if (res) {
        this.authService.setAuthDetail(credentials);
        this.routeBackToDashboard();
      }
    });
  }

  routeBackToDashboard() {
    this.router.navigate(['/home']);
  }

}
