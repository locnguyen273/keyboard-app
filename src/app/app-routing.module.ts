import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonTemplatesComponent } from './templates/common-templates/common-templates.component';
import { HomeComponent } from './pages/client/home/home.component';
import { ServiceComponent } from './pages/client/service/service.component';
import { IntroduceComponent } from './pages/client/introduce/introduce.component';
import { ProductListComponent } from './pages/client/product-list/product-list.component';
import { AuthTemplatesComponent } from './templates/auth-templates/auth-templates.component';
import { LoginComponent } from './pages/client/login/login.component';
import { RegisterComponent } from './pages/client/register/register.component';
import { ProfileComponent } from './pages/client/profile/profile.component';
import { HomeAdminComponent } from './pages/admin/home-admin/home-admin.component';
import { AdminTemplateComponent } from './templates/admin-template/admin-template.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AddUserComponent } from './pages/admin/manage-user/add-user/add-user.component';
import { ListUserComponent } from './pages/admin/manage-user/list-user/list-user.component';

const routes: Routes = [
  {
    path: '',
    component: CommonTemplatesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'introduce', component: IntroduceComponent },
      { path: 'service', component: ServiceComponent },
      { path: 'profile', component: ProfileComponent },
    ],
  },
  {
    path: '',
    component: AuthTemplatesComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  {
    path: 'admin',
    component: AdminTemplateComponent,
    children: [
      { path: 'home', component: HomeAdminComponent },
      { path: 'manage-user/add-user', component: AddUserComponent },
      { path: 'manage-user/users', component: ListUserComponent },
    ],
  },
  { path: 'page-not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: 'page-not-found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
