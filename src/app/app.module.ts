import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthTemplatesComponent } from './templates/auth-templates/auth-templates.component';
import { CommonTemplatesComponent } from './templates/common-templates/common-templates.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { IntroduceComponent } from './pages/introduce/introduce.component';
import { ServiceComponent } from './pages/service/service.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
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
  ],
  imports: [
    // core and shared
    CoreModule,
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
