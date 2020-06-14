import { NgModule } from '@angular/core';
import { RoleRoutingModule } from './role-routing.module';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleAddComponent } from './components/role-add/role-add.component';
import { SharedModule } from '@backend/shared/shared.module';


@NgModule({
  declarations: [RoleListComponent, RoleAddComponent],
  imports: [
    SharedModule,
    RoleRoutingModule
  ]
})
export class RoleModule { }
