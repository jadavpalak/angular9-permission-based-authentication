import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleAddComponent } from './components/role-add/role-add.component';
import { RoleListComponent } from './components/role-list/role-list.component';
import { AuthGuard } from 'app/core/guards/auth.guard';


const routes: Routes = [{
  path: '',
  component: RoleListComponent,
  canActivate: [AuthGuard],
  data: { auth: 'role-list' },
}, {
  path: 'add',
  component: RoleAddComponent,
  canActivate: [AuthGuard],
  data: { auth: 'role-add' },
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleRoutingModule { }
