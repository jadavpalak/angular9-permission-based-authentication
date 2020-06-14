import { NgModule } from '@angular/core';
import { CoreRoutingModule } from './core-routing.module';
// module
import { SharedModule } from '../shared/shared.module';
// component
import { CoreComponent } from './core.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { NotAuthorizedComponent } from './components/not-authorized/not-authorized.component';


@NgModule({
  declarations: [CoreComponent, HeaderComponent, FooterComponent, SideBarComponent, NotAuthorizedComponent],
  imports: [
    CoreRoutingModule,
    SharedModule
  ], exports: [
    CoreComponent // required so app module can reference selector
  ]
})
export class CoreModule { }
