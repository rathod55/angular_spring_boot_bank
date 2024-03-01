import { Component } from '@angular/core';
import { BankService } from '../bank.service';

@Component({
  selector: 'app-delete-account',
  templateUrl: './delete-account.component.html',
  styleUrls: ['./delete-account.component.css']
})
export class DeleteAccountComponent {

  accNumber !: number;
  constructor(private bs: BankService) { }

  //method to delete the account 
  deleteAccount() {
    this.bs.deleteAccount(this.accNumber).subscribe({
      next: (response) => {
        console.log(response);
      }, error: (err) => { console.log(err.error()); }
    });
  }
}
