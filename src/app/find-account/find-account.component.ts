import { Component } from '@angular/core';
import { Bank } from 'src/Bank';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-find-account',
  templateUrl: './find-account.component.html',
  styleUrls: ['./find-account.component.css']
})
export class FindAccountComponent {
  accNumber !: number;
  account = new Bank();

  //constructor to load the bank service
  constructor(private bs: BankService) { }

  findAccount() {
    if (this.accNumber == null) {
      alert("Enter the Account Number")
    }
    else {
      this.bs.findAccount(this.accNumber)?.subscribe({
        next: (response) => { this.account = response; },
        error: (err) => { console.log(err.error()); }
      });
    }

  }
}
