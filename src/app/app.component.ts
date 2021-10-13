import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private accountService: AccountsService) { }

  accounts: { name: string, status: string }[] = [] //initalize accounts with an empty array

  ngOnInit() {
    this.accounts = this.accountService.accounts
  }



}
