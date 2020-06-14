import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { AuthGuard } from 'app/core/guards/auth.guard';


const routes: Routes = [{
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard],
  data: { auth: 'home' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
