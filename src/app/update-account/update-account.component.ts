import { Component } from '@angular/core';
import { BankService } from '../bank.service';
import { Bank } from 'src/Bank';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent {

  id !: number;
  name !: string;
  bal !: number;

  account = new Bank();

  constructor(private bs: BankService) { }

  updateAccount() {
    if (this.id == null || this.name == null || this.bal == null) {
      alert("Please Enter all the details");
    }
    else {

      //setting the values to account object 
      this.account.accNumber = this.id;
      this.account.customerName = this.name;
      this.account.accBalance = this.bal;

      this.bs.updateAccount(this.account).subscribe({
        next: (response) => {
          console.log(response);
        }, error: (err) => { console.log(err.error()); }
      })
    }
  }
}
