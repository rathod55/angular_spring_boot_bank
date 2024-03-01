import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { Bank } from 'src/Bank';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent {
  //Bank Account Properties
  id !: number;
  name !: string;
  bal !: number;

  //Bank Object
  bank = new Bank();

  //Constructor to load the bank service
  constructor(private bs: BankService) {
    console.log("Bank Operation Component Loaded");

  }
  /*
    add account function that will contact the service function to handle creation of new account
   */
  addAccount(): void {

    //checking the null value conditions
    if ((this.id == null) || (this.name == null) || (this.bal == null)) {
      alert("Please Enter all the details");
    }
    else {
      this.bank.accNumber = this.id;
      this.bank.customerName = this.name;
      this.bank.accBalance = this.bal;
      
      this.bs.openAccountService(this.bank).subscribe({
        next: (response) => { console.log(response); },
        error: err => { console.log(err.error()); }
      });

    }
  }
}
