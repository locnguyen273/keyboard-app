import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonTemplatesComponent } from './templates/common-templates/common-templates.component';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { IntroduceComponent } from './pages/introduce/introduce.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { AuthTemplatesComponent } from './templates/auth-templates/auth-templates.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: CommonTemplatesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'introduce', component: IntroduceComponent },
      { path: 'service', component: ServiceComponent },
    ]
  },
  {
    path: '',
    component: AuthTemplatesComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
