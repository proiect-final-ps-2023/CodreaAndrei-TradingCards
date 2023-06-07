import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserPageComponent } from './user-pages/user-page/user-page.component';
import { UserPageCardsComponent } from './user-pages/user-page-cards/user-page-cards.component';
import { UserPagePacksComponent } from './user-pages/user-page-packs/user-page-packs.component';
import { UserPageCrLsComponent } from './user-pages/user-page-cr-ls/user-page-cr-ls.component';
import { UserPageBuyLsComponent } from './user-pages/user-page-buy-ls/user-page-buy-ls.component';
import { AdminPageComponent } from './admin-pages/admin-page/admin-page.component';
import { AdminPageDeleteComponent } from './admin-pages/admin-page-delete/admin-page-delete.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user-page', component: UserPageComponent},
  { path: 'user-page-cards', component: UserPageCardsComponent},
  { path: 'user-page-packs', component: UserPagePacksComponent},
  { path: 'user-page-cr-ls', component: UserPageCrLsComponent},
  { path: 'user-page-buy-ls', component: UserPageBuyLsComponent},
  { path: 'admin-page', component: AdminPageComponent},
  { path: 'admin-page-delete', component: AdminPageDeleteComponent},
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}, // redirect to login page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
