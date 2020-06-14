import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserAddComponent } from './components/user-add/user-add.component';
import { AuthGuard } from 'app/core/guards/auth.guard';

const routes: Routes = [{
  path: '',
  component: UserListComponent,
  canActivate: [AuthGuard],
  data: { auth: 'user-list' },
}, {
  path: 'add',
  component: UserAddComponent,
  canActivate: [AuthGuard],
  data: { auth: 'user-add' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
