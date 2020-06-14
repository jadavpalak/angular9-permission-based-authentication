import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// modules
import { MaterialModule } from './dependencies/material/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyHideIfUnauthorizedDirective } from './directives/my-hide-if-unauthorized.directive';

@NgModule({
  declarations: [MyHideIfUnauthorizedDirective],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ], exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MyHideIfUnauthorizedDirective
  ]
})
export class SharedModule { }
