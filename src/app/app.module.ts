import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgsRevealModule} from 'ngx-scrollreveal';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { HttpClientModule } from '@angular/common/http';

// start of import services
import {AppServiceService} from 'src/app/Services/app-service.service'
import {CompanyServiceService} from 'src/app/admin/admin-company/company-service.service'
import {HistoryServiceService} from 'src/app/admin/admin-mg-history/history-service.service'
import {AdminServiceCenterServiceService} from 'src/app/admin/admin-service-center/admin-service-center-service.service'
import {AdminDealerServiceService} from 'src/app/admin/admin-dealer/admin-dealer-service.service'
import {MessageServiceService} from 'src/app/user/message-section/message-service.service'
import {AdminMessageServiceService} from 'src/app/admin/admin-message/admin-message-service.service'
import {AuthService} from 'src/app/Services/auth.service'
// end of import services

import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {AdminRoutingModule} from 'src/app/admin/admin-routing.module';
import {UserRoutingModule} from 'src/app/user/user-routing.module';



// installed componensts
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FooterComponent } from './user/footer/footer.component';
import { HeaderComponent } from './user/header/header.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { BreadcrumbComponent } from './user/breadcrumb/breadcrumb.component';
import { ContactSectionComponent } from './user/contact-section/contact-section.component';
import { ContatUsComponent } from './user/contat-us/contat-us.component';
import { EnquiryComponent } from './user/enquiry/enquiry.component';
import { FaqComponent } from './user/faq/faq.component';
import { GetInTouchComponent } from './user/get-in-touch/get-in-touch.component';
import { HistoryComponent } from './user/history/history.component';
import { HomeComponent } from './user/home/home.component';
import { ModalListComponent } from './user/modal-list/modal-list.component';
import { ModalsComponent } from './user/modals/modals.component';
import { CarDesignComponent } from './user/modals/car-design/car-design.component';
import { CarSpeacificationComponent } from './user/modals/car-speacification/car-speacification.component';
import { CarVarianceComponent } from './user/modals/car-variance/car-variance.component';
import { NotFounComponent } from './user/not-foun/not-foun.component';
import { ProductListSectionComponent } from './user/product-list-section/product-list-section.component';
import { ServiceCenterComponent } from './user/service-center/service-center.component';
import { SliderComponent } from './user/slider/slider.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminCompanyComponent } from './admin/admin-company/admin-company.component';
import { AdminBreadcrumbComponent } from './admin/admin-breadcrumb/admin-breadcrumb.component';
import { AddComapnyFormComponent } from './admin/admin-company/add-comapny-form/add-comapny-form.component';


import { CKEditorModule } from 'ckeditor4-angular';
import { AdminModelListComponent } from './admin/admin-model-list/admin-model-list.component';
import { AdminModelsComponent } from './admin/admin-models/admin-models.component';
import { AdminFaqComponent } from './admin/admin-faq/admin-faq.component';
import { AdminServiceCenterComponent } from './admin/admin-service-center/admin-service-center.component';
import { AdminMgHistoryComponent } from './admin/admin-mg-history/admin-mg-history.component';
import { AdminContactComponent } from './admin/admin-contact/admin-contact.component';
import { AddHistoryComponent } from './admin/admin-mg-history/add-history/add-history.component';


// for firebase
import { environment } from '../environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { AdminAddServiceCenterComponent } from './admin/admin-service-center/admin-add-service-center/admin-add-service-center.component';
import { AdminUpdateServiceCenterComponent } from './admin/admin-service-center/admin-update-service-center/admin-update-service-center.component';
import { AdminCompanyUpdateComponent } from './admin/admin-company/admin-company-update/admin-company-update.component';
import { AdminDealerComponent } from './admin/admin-dealer/admin-dealer.component';
import { AdminAddDealerComponent } from './admin/admin-dealer/admin-add-dealer/admin-add-dealer.component';
import { AdminUpdateDealerComponent } from './admin/admin-dealer/admin-update-dealer/admin-update-dealer.component';
import { AdminMessageComponent } from './admin/admin-message/admin-message.component';
import { MessageSectionComponent } from './user/message-section/message-section.component';
import { AdminMessageDetailComponent } from './admin/admin-message/admin-message-detail/admin-message-detail.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent,
    DashboardComponent,
    FooterComponent,
    HeaderComponent,
    AboutUsComponent,
    BreadcrumbComponent,
    ContactSectionComponent,
    ContatUsComponent,
    EnquiryComponent,
    FaqComponent,
    GetInTouchComponent,
    HistoryComponent,
    HomeComponent,
    ModalListComponent,
    ModalsComponent,
    CarDesignComponent,
    CarSpeacificationComponent,
    CarVarianceComponent,
    NotFounComponent,
    ProductListSectionComponent,
    ServiceCenterComponent,
    SliderComponent,
    LoginComponent,
    AdminHeaderComponent,
    AdminFooterComponent,
    AdminCompanyComponent,
    AdminBreadcrumbComponent,
    AddComapnyFormComponent,
    AdminModelListComponent,
    AdminModelsComponent,
    AdminFaqComponent,
    AdminServiceCenterComponent,
    AdminMgHistoryComponent,
    AdminContactComponent,
    AddHistoryComponent,
    AdminAddServiceCenterComponent,
    AdminUpdateServiceCenterComponent,
    AdminCompanyUpdateComponent,
    AdminDealerComponent,
    AdminAddDealerComponent,
    AdminUpdateDealerComponent,
    AdminMessageComponent,
    MessageSectionComponent,
    AdminMessageDetailComponent,

  ],
  imports: [
    BrowserModule,
    // firebase 
    AngularFireModule.initializeApp(environment.firebase),

    AppRoutingModule,
    NgsRevealModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    AdminRoutingModule,
    UserRoutingModule,

    // admin lte3
    CKEditorModule
    
  ],
  providers: [
    AppServiceService, 
    CompanyServiceService, 
    HistoryServiceService, 
    AdminServiceCenterServiceService,
    AdminDealerServiceService,
    MessageServiceService,
    AdminMessageServiceService,
    AuthService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
