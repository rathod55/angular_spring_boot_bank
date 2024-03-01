
import { Component } from '@angular/core';
import { Bank } from 'src/Bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-show-all-accounts',
  templateUrl: './show-all-accounts.component.html',
  styleUrls: ['./show-all-accounts.component.css']
})
export class ShowAllAccountsComponent {

  //creating a empty bank accounts array
  accounts: Bank[] = [];

  /*
    constructor that will assign the bank account array from the observable event
  */
  constructor(private bs: BankService) { 
    this.bs.showAllAccountsService()?.subscribe({next: (response) => {this.accounts = response;}, 
    error: (err)=> {console.log(err.error());}});
  }

  
}
