import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { Bank } from 'src/Bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  bankBaseUrl = "http://localhost:8080/bank"; //base address of spring boot application on 8080 port

  //Constructior to Load the HTTP CLient Module
  constructor(private http: HttpClient) {
    console.log("Bank Service Loaded and HTTP Client Loaded");
  }

  //Bank Service method to send open accoun request to spring boot application
  openAccountService(bank: Bank) {
    return this.http.post(this.bankBaseUrl + "/new", bank, { responseType: 'text' })
  }

  //Bank Service method to send show all accounts request to spring boot application
  showAllAccountsService(): Observable<Bank[]> | undefined {
    return this.http.get<Bank[]>(this.bankBaseUrl + "/showAll");
  }

  //method to find a account with the account number
  findAccount(accNumber: number): Observable<Bank> | undefined {
    return this.http.get<Bank>(this.bankBaseUrl + "/show/" + accNumber);
  }

  //method to transfer delete request to spring boot application
  deleteAccount(accNumber: number) {
    return this.http.delete<Bank>(this.bankBaseUrl + "/delete/" + accNumber);
  }

  //method to handle the update account request 
  updateAccount(bank : Bank) : Observable<Bank>
  {
    return this.http.put<Bank>(this.bankBaseUrl + "/update", bank);
  }
}
