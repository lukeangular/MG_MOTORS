import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComapnyFormComponent } from './admin-company/add-comapny-form/add-comapny-form.component';
import { AdminCompanyComponent } from './admin-company/admin-company.component';
import { AdminContactComponent } from './admin-contact/admin-contact.component';
import { AdminFaqComponent } from './admin-faq/admin-faq.component';
import { AddHistoryComponent } from './admin-mg-history/add-history/add-history.component';
import { AdminMgHistoryComponent } from './admin-mg-history/admin-mg-history.component';
import { AdminModelListComponent } from './admin-model-list/admin-model-list.component';
import { AdminModelsComponent } from './admin-models/admin-models.component';
import { AdminAddServiceCenterComponent } from './admin-service-center/admin-add-service-center/admin-add-service-center.component';
import { AdminServiceCenterComponent } from './admin-service-center/admin-service-center.component';
import { AdminUpdateServiceCenterComponent } from './admin-service-center/admin-update-service-center/admin-update-service-center.component';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { AdminCompanyUpdateComponent } from './admin-company/admin-company-update/admin-company-update.component';
import { AdminDealerComponent } from './admin-dealer/admin-dealer.component';
import { AdminAddDealerComponent } from './admin-dealer/admin-add-dealer/admin-add-dealer.component';
import { AdminUpdateDealerComponent } from './admin-dealer/admin-update-dealer/admin-update-dealer.component';
import { AdminMessageComponent } from './admin-message/admin-message.component';
import { AdminMessageDetailComponent } from './admin-message/admin-message-detail/admin-message-detail.component';


// import authGuard
import { AuthGuard } from 'src/app/guards/auth.guard'
const routes: Routes = [
  {
    path: 'mg-admin',
    canActivate: [AuthGuard],
    component: AdminComponent,
    children: [
      { path: '', component: DashboardComponent },
      // admin company path
      { path: 'admin-company', component: AdminCompanyComponent },
      { path: 'admin-add-company', component: AddComapnyFormComponent },
      { path: 'admin-update-company/:id', component: AdminCompanyUpdateComponent },

      { path: 'admin-model-list', component: AdminModelListComponent },
      { path: 'admin-models', component: AdminModelsComponent },
      { path: 'admin-faq', component: AdminFaqComponent },
      // admin service center path
      { path: 'admin-service', component: AdminServiceCenterComponent },
      { path: 'admin-add-service-center', component: AdminAddServiceCenterComponent },
      { path: 'admin-update-service-center/:id', component: AdminUpdateServiceCenterComponent },
      // admin history path
      { path: 'admin-history', component: AdminMgHistoryComponent },
      { path: 'admin-add-history', component: AddHistoryComponent },
      { path: 'admin-update-history/:id', component: AddHistoryComponent },
      // admin contact path
      { path: 'admin-contact', component: AdminContactComponent },
      // admin dealer path
      { path: 'admin-dealer', component: AdminDealerComponent },
      { path: 'admin-add-dealer', component: AdminAddDealerComponent },
      { path: 'admin-update-dealer/:id', component: AdminUpdateDealerComponent },
      // admin message path
      { path: 'admin-message-list', component: AdminMessageComponent },
      { path: 'admin-message-detail/:id', component: AdminMessageDetailComponent },
    ]
  },
  // admin login path
  { path: 'admin-login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
