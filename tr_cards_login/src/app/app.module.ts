import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { OpenCloseComponent } from './open-close/open-close.component';
import { HttpClientModule } from '@angular/common/http';
import { UserPageComponent } from './user-pages/user-page/user-page.component';
import { UserPageCardsComponent } from './user-pages/user-page-cards/user-page-cards.component';
import { UserPagePacksComponent } from './user-pages/user-page-packs/user-page-packs.component';
import { UserPageCrLsComponent } from './user-pages/user-page-cr-ls/user-page-cr-ls.component';
import { UserPageBuyLsComponent } from './user-pages/user-page-buy-ls/user-page-buy-ls.component';
import { AdminPageComponent } from './admin-pages/admin-page/admin-page.component';
import { AdminPageDeleteComponent } from './admin-pages/admin-page-delete/admin-page-delete.component';
import { UserScrollbarComponent } from './user-pages/user-scrollbar/user-scrollbar.component';
import { AdminScrollbarComponent } from './admin-pages/admin-scrollbar/admin-scrollbar.component';
import { ShowCardsDirective } from './user-pages/user-page-packs/show-cards/show-cards.directive';
import { RegisterComponent } from './register/register.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OpenCloseComponent,
    UserPageComponent,
    UserPageCardsComponent,
    UserPagePacksComponent,
    UserPageCrLsComponent,
    UserPageBuyLsComponent,
    AdminPageComponent,
    AdminPageDeleteComponent,
    UserScrollbarComponent,
    AdminScrollbarComponent,
    ShowCardsDirective,
    RegisterComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
