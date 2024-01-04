import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AuthTemplatesComponent } from './templates/auth-templates/auth-templates.component';
import { CommonTemplatesComponent } from './templates/common-templates/common-templates.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ProductListComponent } from './pages/client/product-list/product-list.component';
import { IntroduceComponent } from './pages/client/introduce/introduce.component';
import { ServiceComponent } from './pages/client/service/service.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/client/login/login.component';
import { RegisterComponent } from './pages/client/register/register.component';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { ClickOutsideDirective } from './shared/directives/clickOutside.directive';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { AdminTemplateComponent } from './templates/admin-template/admin-template.component';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { appReducer } from './store/app.state';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { AddUserComponent } from './pages/admin/manage-user/add-user/add-user.component';
import { ListUserComponent } from './pages/admin/manage-user/list-user/list-user.component';

@NgModule({
  declarations: [
    AppComponent,
    ClickOutsideDirective,
    HeaderComponent,
    FooterComponent,
    AuthTemplatesComponent,
    CommonTemplatesComponent,
    HomeComponent,
    ProductListComponent,
    IntroduceComponent,
    ServiceComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    HomeAdminComponent,
    AdminTemplateComponent,
    LoadingSpinnerComponent,
    PageNotFoundComponent,
    SideBarComponent,
    AddUserComponent,
    ListUserComponent,
  ],
  imports: [
    // core and shared
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
    StoreDevtoolsModule.instrument({ maxAge: false, logOnly: !isDevMode() }),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
