import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ShowAllAccountsComponent } from './show-all-accounts/show-all-accounts.component';
import { FindAccountComponent } from './find-account/find-account.component';
import { DeleteAccountComponent } from './delete-account/delete-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';

//Defining the Route Component
const routes: Routes = [
  {path:"Contacts", component:ContactsComponent},
  {path:"create-account", component:CreateAccountComponent},
  {path:"show-all-accounts", component:ShowAllAccountsComponent},
  {path: "find-account", component:FindAccountComponent},
  {path: "delete-account", component:DeleteAccountComponent},
  {path: "update-account", component:UpdateAccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
