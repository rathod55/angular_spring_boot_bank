import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { Router } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './LoginRegister/login/login.component';
import { RegisterComponent } from './LoginRegister/register/register.component';
import {MatInputModule} from '@angular/material/input'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon';
import { BankOperationComponent } from './bank-operation/bank-operation.component'
import { HttpClientModule } from '@angular/common/http';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ShowAllAccountsComponent } from './show-all-accounts/show-all-accounts.component';
import { FindAccountComponent } from './find-account/find-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    LoginComponent,
    RegisterComponent,
    BankOperationComponent,
    CreateAccountComponent,
    ShowAllAccountsComponent,
    FindAccountComponent,
    DeleteAccountComponent,
    UpdateAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
