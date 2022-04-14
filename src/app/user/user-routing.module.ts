import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// component routing
import { HomeComponent } from './home/home.component';
import {UserComponent} from './user.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContatUsComponent } from './contat-us/contat-us.component';
import { FaqComponent } from './faq/faq.component';
import { HistoryComponent } from './history/history.component';
import { ModalListComponent } from './modal-list/modal-list.component';
import { ModalsComponent } from './modals/modals.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { NotFounComponent } from './not-foun/not-foun.component';


const routes: Routes = [
  {
    path : '',
    component : UserComponent,
    children : [
      {path : '', component:HomeComponent},
      {path:'about-us', component:AboutUsComponent},
      {path:'contact-us', component:ContatUsComponent},
      {path:'faq', component:FaqComponent},
      {path:'history', component:HistoryComponent},
      {path:'modal-list', component:ModalListComponent},
      {path:'modals', component:ModalsComponent},
      {path:'service-center', component:ServiceCenterComponent},
      {path: '', redirectTo:'', pathMatch:'full'},
      { path: '**', component: NotFounComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
