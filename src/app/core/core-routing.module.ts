import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: CoreComponent,
    canActivate: [AuthGuard],
    data: { auth: 'core' },
    children: [
      {
        path: 'home',
        loadChildren: () => import('../modules/home/home.module').then(m => m.HomeModule),
      },
      {
        path: 'user',
        loadChildren: () => import('../modules/users/users.module').then(m => m.UsersModule),
      },
      {
        path: 'role',
        loadChildren: () => import('../modules/role/role.module').then(m => m.RoleModule),
      },
    ]
  },
  {
    path: '401',
    component: NotAuthorizedComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
