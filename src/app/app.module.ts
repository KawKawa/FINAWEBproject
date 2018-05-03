import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {DataTableModule} from 'primeng/components/datatable/datatable';
import { AppComponent } from './app.component';
import { AuthguardGuard } from './authguard.guard';
import { UserService } from './user.service';
import {ButtonModule} from 'primeng/button';
import { LoginFormComponent } from './login-form/login-form.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuComponent } from './dashboard/menu/menu.component';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';
import { DocumentsComponent } from './dashboard/documents/documents.component';
import { UserListComponent } from './user-list/user-list.component';
import { userFilterPipe} from './user-list/user-filter.pipe';
import { FormsModule } from '@angular/forms';
import { UploadFileComponent } from './upload-file/upload-file.component';
import {TreeTableModule} from 'primeng/treetable';
import{ NodeServiceService} from './node-service.service'; 
import { HttpClientModule } from '@angular/common/http';
import {FileUploadModule} from 'primeng/fileupload';
const appRoutes:Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path: 'dashboard',
    canActivate: [AuthguardGuard],
    component: DashboardComponent
  },
  {
    path: 'register',
   
    component: RegisterFormComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'notfound',
    component: NotfoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    HeaderComponent,
    FooterComponent,
    RegisterFormComponent,
    DashboardComponent,
    NotfoundComponent,
    userFilterPipe,
    MenuComponent,
  
    DocumentsComponent,
 
    UserListComponent,
 
    UploadFileComponent
  ],
  imports: [RouterModule.forRoot(appRoutes),
    BrowserModule,AngularFontAwesomeModule,DataTableModule,ButtonModule,
    TabMenuModule,FormsModule,TreeTableModule, HttpClientModule,FileUploadModule
  ],
  providers: [UserService, AuthguardGuard,  NodeServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
